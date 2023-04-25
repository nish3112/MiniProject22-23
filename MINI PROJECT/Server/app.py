from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import joblib
import functions
import warnings
import time
from pymongo import MongoClient



client = MongoClient('mongodb://localhost:27017/')
db = client['maliciousUrls']
collection = db['URLS']

app = Flask(__name__)
CORS(app)

@app.route('/process-url', methods=['POST'])
def process_url():
    data = request.json
    url = data['url']
    print(url)
    	
    # MYSQL
    try:
    # Check if the connection is established by accessing the collection
        print(collection.count_documents({}))
        print("Connection to MongoDB successful")
        # define the query
        
        query = {'URL': url}

        # search for the document with the matching URL
        result = collection.find_one(query)

        if result:
            print(f"Found document with URL '{url}':")
            received = result['Type_of_url']
            print(received)
        else:
            print(f"No document found with URL '{url}'.")
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
            umap_query = functions.atherate_feature_extraction(url)
            is_legitimate = 1
            abnormal_features = functions.abnormal_features(url)
            # print(abnormal_features)
            # stop the clock
            # UMAP 
            # RF MODEL
            model = joblib.load('rf_model.joblib')
            arr = [[0.069306931,0	,0	,0	,1	,1	,0	,0.325581395	,0	,0	,0	,0	,0	,0	,0,0,12.039203,2.8598454]] 
            arr1 = [[0.163366337,	0,	0,	1,	1,	1,	0,	0.209302326,	0.2,	0,1,	0,	0,	0,	0,	0,	-6.7257323,	1.7775222]]
            predictions = model.predict(arr1)
            # print(predictions)
            
            if(predictions[0] == 0):
                received = "benign"
            elif (predictions[0] == 1):
                received = "deacement"
            elif (predictions[0] == 2):
                received = "malware"
            elif (predictions[0] == 3):
                received = "phishing"

            end_time = time.time()
            #  calculate the elapsed time
            elapsed_time = end_time - start_time
            print(elapsed_time)

 
    except Exception as e:
        print("Error connecting to MongoDB:", e)

    
    
    return received

if __name__ == '__main__':
    warnings.filterwarnings('ignore', category=UserWarning, module='sklearn')
    app.run()

