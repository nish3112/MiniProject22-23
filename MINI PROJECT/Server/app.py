
import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import functions
import warnings
import time
from pymongo import MongoClient
from concurrent.futures import ThreadPoolExecutor

client = MongoClient('mongodb://localhost:27017/')
db = client['maliciousUrls']
collection = db['URLS']

app = Flask(__name__)
CORS(app)

def search_database(url):
    query = {'URL': url}
    result = collection.find_one(query)
    if result:
        print(f"Found document with URL '{url}':")
        return result['Type_of_url']
    else:
        return None

def predict_url(url):
    start_time = time.time()
    url_len = functions.url_length(url)
    shortening_service = functions.shorteningService(url)
    contains_ip_address = functions.having_ip_address(url)
    numeric_in_url = functions.count_numeric_chars(url)
    domain_in_subdomain = functions.has_domains_in_subdomain(url)
    domain_in_path = functions.has_domains_in_path(url)
    hostname_length = functions.get_hostname_length(url)
    path_length = functions.get_path_length(url)
    query_length = functions.get_query_length(url)
    subdomain_level = functions.get_subdomain_level(url)
    url_depth = functions.get_url_depth(url)
    https_in_domain = functions.has_https_in_domain(url)
    umap_query = functions.atherate_feature_extraction(url)

    # print(umap_query)
    with open('Server/umap_model1.pkl', 'rb') as f:
        model_umap = pickle.load(f)
    data = [umap_query]
    predictions_umap = model_umap.transform(data)
    print(predictions_umap)
    umap_values1 = predictions_umap[0][0]
    umap_values2 = predictions_umap[0][1]
    url_entropy = functions.url_entropy(url)
    domain_entropy = functions.domain_entropy(url)
    abnormal_features = functions.abnormal_features(url)
    
    """
        'url_len', 'subdomain_levels', 'url_depth', 'shortening_service',
       'contains_ip_address', 'numeric in url', 'domain_in_sub_domain',
       'domain_in_path', 'https_in_domain', 'hostname_length', 'path_length',
       'query_length', 'request_url_feature', 'anchor_url_feature',
       'meta_script_link_feature', 'sfh_feature', 'domain_check',
       'umap_values1', 'umap_values2', 'entropy', 'domain_entropy'
    """
    # RF MODEL
    model = joblib.load('Server/random_forest.joblib')
    arr = [[url_len,subdomain_level,url_depth,shortening_service,contains_ip_address,numeric_in_url,domain_in_subdomain,domain_in_path,https_in_domain,hostname_length,path_length,query_length,abnormal_features[0],abnormal_features[1],abnormal_features[2],abnormal_features[3],abnormal_features[4],umap_values1,umap_values2,url_entropy,domain_entropy]] 
    predictions = model.predict(arr)
    
    end_time = time.time()
    print(predictions)
    #  calculate the elapsed time
    elapsed_time = end_time - start_time
    print(elapsed_time)
    
    if predictions[0] == 0:
        return "benign"
    elif predictions[0] == 1:
        return "defacement"
    elif predictions[0] == 2:
        return "malware"
    elif predictions[0] == 3:
        return "phishing"

@app.route('/process-url', methods=['POST'])
def process_url():
    data = request.json
    url = data['url']
    print(url)
    
    if url.startswith("chrome-extension:/") or url.startswith("chrome://newtab/"):
        print("New Tab")
        return "benign"
    else:
        with ThreadPoolExecutor(max_workers=2) as executor:
            database_future = executor.submit(search_database, url)
            model_future = executor.submit(predict_url, url)

            database_result = database_future.result()
            if database_result is not None:
                return database_result
            else:
                return model_future.result()

if __name__ == '__main__':
    warnings.filterwarnings('ignore', category=UserWarning, module='sklearn')
    app.run()
