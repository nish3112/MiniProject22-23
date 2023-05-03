
import re
from urllib.parse import urlparse
import requests
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import whois
from urllib.parse import urlparse
from scipy.stats import entropy
import pandas as pd
import tldextract



def url_length(url):
    return len(url)


def atherate_feature_extraction(url):
    features=['@','?','-','=','.','#','%','+','$','!','*',',','//']
    result = []
    for a in features:
        result.append(url.count(a))
    
    return result
    

def shorteningService(url):
    match = re.search('bit\.ly|goo\.gl|shorte\.st|go2l\.ink|x\.co|ow\.ly|t\.co|tinyurl|tr\.im|is\.gd|cli\.gs|'
                        'yfrog\.com|migre\.me|ff\.im|tiny\.cc|url4\.eu|twit\.ac|su\.pr|twurl\.nl|snipurl\.com|'
                        'short\.to|BudURL\.com|ping\.fm|post\.ly|Just\.as|bkite\.com|snipr\.com|fic\.kr|loopt\.us|'
                        'doiop\.com|short\.ie|kl\.am|wp\.me|rubyurl\.com|om\.ly|to\.ly|bit\.do|t\.co|lnkd\.in|'
                        'db\.tt|qr\.ae|adf\.ly|goo\.gl|bitly\.com|cur\.lv|tinyurl\.com|ow\.ly|bit\.ly|ity\.im|'
                        'q\.gs|is\.gd|po\.st|bc\.vc|twitthis\.com|u\.to|j\.mp|buzurl\.com|cutt\.us|u\.bb|yourls\.org|'
                        'x\.co|prettylinkpro\.com|scrnch\.me|filoops\.info|vzturl\.com|qr\.net|1url\.com|tweez\.me|v\.gd|'
                        'tr\.im|link\.zip\.net',
                        url)
    if match:
        return 1
    else:
        return 0
        
def having_ip_address(url):
        match = re.search(
            '(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.'
            '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|'  # IPv4
            '(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.'
            '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|'  # IPv4 with port
            '((0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\/)' # IPv4 in hexadecimal
            '(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|'
            '([0-9]+(?:\.[0-9]+){3}:[0-9]+)|'
            '((?:(?:\d|[01]?\d\d|2[0-4]\d|25[0-5])\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d|\d)(?:\/\d{1,2})?)', url)  # Ipv6
        if match:
            return 1
        else:
            return 0
        
def count_numeric_chars(url):
        pattern = r'\d'
        return len(re.findall(pattern, url))

    # fix
def has_domains_in_subdomain(subdomain):
        pattern = r'[a-zA-Z0-9-]+\.[a-zA-Z]{2,}'
        domains = re.findall(pattern, subdomain)
        return int(len(domains) > 0)
    
    # fix
def has_domains_in_path(path):
        pattern = r'[a-zA-Z0-9-]+\.[a-zA-Z]{2,}'
        domains = re.findall(pattern, path)
        return int(len(domains) > 0)
    
def has_https_in_domain(url):
        domain = urlparse(url).netloc
        return int(domain.startswith('https'))
    
def get_hostname_length(url):
        return len(urlparse(url).hostname)
    
def get_path_length(url):
        return len(urlparse(url).path)

def get_query_length(url):
        return len(urlparse(url).query)
    
# def abnormal_features(url):
#         try:
#             headers = {
#                 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
#             }
#             response = requests.get(url, headers=headers, timeout=5)
#         except:
#             return 0, 0, 0, 0, 0

#         if response.status_code != 200:
#             return 0, 0, 0, 0, 0

#         parsed_url = urlparse(url)
#         domain = parsed_url.netloc

#         external_links = []
#         external_count = 0
#         total_count = 0

#         soup = BeautifulSoup(response.text, "html.parser")

#         for link in soup.find_all("a"):
#             if "href" in link.attrs:
#                 href = link["href"]
#                 if "http" in href:
#                     total_count += 1
#                     if domain not in href:
#                         external_links.append(href)
#                         external_count += 1

#         meta_count = response.text.count("<meta")
#         script_count = response.text.count("<script")
#         link_count = response.text.count("<link")

#         for link in response.text.split("src="):
#             if "http" in link:
#                 total_count += 1
#                 if domain not in link:
#                     external_links.append(link.strip("'\""))
#                     external_count += 1

#         try:
#             request_url_percentage = (len(external_links) / total_count) * 100
#         except ZeroDivisionError:
#             request_url_percentage = 0

#         if request_url_percentage < 22:
#             request_url_feature = 2
#         elif request_url_percentage >= 22 and request_url_percentage <= 61:
#             request_url_feature = 1
#         else:
#             request_url_feature = 0

#         try:
#             anchor_url_percentage = (external_count / total_count) * 100
#         except ZeroDivisionError:
#             anchor_url_percentage = 0

#         if anchor_url_percentage < 31:
#             anchor_url_feature = 2
#         elif anchor_url_percentage >= 31 and anchor_url_percentage <= 67:
#             anchor_url_feature = 1
#         else:
#             anchor_url_feature = 0

#         try:
#             link_percentage = (external_count / total_count) * 100
#         except ZeroDivisionError:
#             link_percentage = 0

#         if link_percentage < 17:
#             meta_script_link_feature = 2
#         elif link_percentage >= 17 and link_percentage <= 81:
#             meta_script_link_feature = 1
#         else:
#             meta_script_link_feature = 0

#         form_action = ""
#         for line in response.text.split("\n"):
#             if "<form" in line:
#                 if 'action="' in line:
#                     form_action = line.split('action="')[1].split('"')[0]
#                 else:
#                     form_action = url
#                 break

#         if not form_action or form_action == "about:blank":
#             sfh_feature = 0
#         else:
#             form_action_domain = urlparse(form_action).netloc
#             if form_action_domain and form_action_domain != domain:
#                 sfh_feature = 1
#             else:
#                 sfh_feature = 2

#         try:
#             domain_info = whois.whois(domain)
#             if domain_info is None:
#                 domain_check = 0
#             else:
#                 domain_check = 1
#         except:
#             domain_check = 0

#         return request_url_feature, anchor_url_feature, meta_script_link_feature, sfh_feature, domain_check




def abnormal_features(url):
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
        }
        response = requests.get(url, headers=headers, timeout=5)
    except:
        return [0, 0, 0, 0, 0]

    if response.status_code != 200:
        return [0, 0, 0, 0, 0]

    parsed_url = urlparse(url)
    domain = parsed_url.netloc

    external_links = []
    external_count = 0
    total_count = 0

    soup = BeautifulSoup(response.text, "html.parser")

    for link in soup.find_all("a"):
        if "href" in link.attrs:
            href = link["href"]
            if "http" in href:
                total_count += 1
                if domain not in href:
                    external_links.append(href)
                    external_count += 1

    meta_count = response.text.count("<meta")
    script_count = response.text.count("<script")
    link_count = response.text.count("<link")

    for link in response.text.split("src="):
        if "http" in link:
            total_count += 1
            if domain not in link:
                external_links.append(link.strip("'\""))
                external_count += 1

    try:
        request_url_percentage = (len(external_links) / total_count) * 100
    except ZeroDivisionError:
        request_url_percentage = 0

    if request_url_percentage < 22:
        request_url_feature = 1
    else:
        request_url_feature = 0

    try:
        anchor_url_percentage = (external_count / total_count) * 100
    except ZeroDivisionError:
        anchor_url_percentage = 0

    if anchor_url_percentage < 31:
        anchor_url_feature = 1
    else:
        anchor_url_feature = 0

    try:
        link_percentage = (external_count / total_count) * 100
    except ZeroDivisionError:
        link_percentage = 0

    if link_percentage < 17:
        meta_script_link_feature = 1
    else:
        meta_script_link_feature = 0

    form_action = ""
    for line in response.text.split("\n"):
        if "<form" in line:
            if 'action="' in line:
                form_action = line.split('action="')[1].split('"')[0]
            else:
                form_action = url
            break

    if not form_action or form_action == "about:blank":
        sfh_feature = 0
    else:
        form_action_domain = urlparse(form_action).netloc
        if form_action_domain and form_action_domain != domain:
            sfh_feature = 1
        else:
            sfh_feature = 0

    try:
        domain_info = whois.whois(domain)
        if domain_info is None:
            domain_check = 0
        else:
            domain_check = 1
    except:
        domain_check = 0

    return request_url_feature, anchor_url_feature, meta_script_link_feature, sfh_feature, domain_check

def url_entropy(url):
    url_chars = list(url)
    value, counts = zip(*dict(pd.Series(url_chars).value_counts()).items())
    probs = [float(c) / len(url_chars) for c in counts]
    return entropy(probs)

def domain_entropy(url):
    domain = urlparse(url).netloc
    domain_chars = list(domain)
    value, counts = zip(*dict(pd.Series(domain_chars).value_counts()).items())
    probs = [float(c) / len(domain_chars) for c in counts]
    return entropy(probs)

def get_subdomain_level(url):
    ext = tldextract.extract(url)
    subdomain = ext.subdomain
    subdomain_levels = subdomain.count('.') + 1
    return subdomain_levels


def get_url_depth(url):
    parsed_url = urlparse(url)
    path = parsed_url.path
    depth = path.count('/')
    return depth

def has_https_in_domain(url):
    domain = urlparse(url).netloc
    return int(domain.startswith('https'))