
// chrome.tabs.onActivated.addListener(async function(activeInfo) {
//     chrome.tabs.get(activeInfo.tabId, async function(tab) {
//         if(tab.url != null){
//             console.log("Tab switched to: " + tab.url);
//             console.log("URL LENGTH : " + url_len(tab.url));
//             console.log("Shortening service : " + shortening_service(tab.url));
//             console.log("Contains ip address : " + contains_ip_address(tab.url));
//             console.log("numeric char : " + countNumericChars(tab.url));
//             console.log("Domain in subdomain" + hasDomainsInSubdomain(tab.url));
//             console.log("Has domain in path" + has_domains_in_path(tab.url));
//             console.log("HTTPS in domain" + hasHttpsInDomain(tab.url));
//             console.log("Hostname length" + get_hostname_length(tab.url));
//             console.log("Get path length" + get_path_length(tab.url));
//             console.log("get query length" + get_query_length(tab.url));
//             const result = extract_features(tab.url);
//             const featureCounts = result.featureCounts;
//             const featureCountsArray = [
//               `@ : ${featureCounts['@']}`,
//               `? : ${featureCounts['?']}`,
//               `- : ${featureCounts['-']}`,
//               `= : ${featureCounts['=']}`,
//               `. : ${featureCounts['.']}`,
//               `# : ${featureCounts['#']}`,
//               `% : ${featureCounts['%']}`,
//               `+ : ${featureCounts['+']}`,
//               `$ : ${featureCounts['$']}`,
//               `! : ${featureCounts['!']}`,
//               `* : ${featureCounts['*']}`,
//               `, : ${featureCounts[',']}`,
//               `// : ${featureCounts['//']}`
//             ];
//             console.log(featureCountsArray);
//             // console.log("@ : " + result.featureCounts['@']);
//             // console.log("? : " + result.featureCounts['?']);
//             // console.log("- : " + result.featureCounts['-']);
//             // console.log("= : " + result.featureCounts['=']);
//             // console.log(". : " + result.featureCounts['.']);
//             // console.log("# : " + result.featureCounts['#']); 
//             // console.log("% : " + result.featureCounts['%']);
//             // console.log("+ : " + result.featureCounts['+']);
//             // console.log("$ : " + result.featureCounts['$']);
//             // console.log("! : " + result.featureCounts['!']);
//             // console.log("* : " + result.featureCounts['*']);
//             // console.log(", : " + result.featureCounts[',']);
//             // console.log("// : " + result.featureCounts['//']);
//             const result1 = await abnormal_features(tab.url);
//             console.log("Abnormal features : " + result1);
//         }
//         else if (tab.url == null){
        
//         }
      
//     //   console.log("Meta vagera : " + abnormal_features(tab.url));
//     });
//   });
  


  // chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
  //   if (changeInfo.status == "complete") {
      
  //     if(tab.url != null){
  //       console.log("Tab updated with URL: " + tab.url);
        // console.log("URL LENGTH : " + url_len(tab.url));
        
        //     console.log("Shortening service : " + shortening_service(tab.url));
        //     console.log("Contains ip address : " + contains_ip_address(tab.url));
        //     console.log("numeric char : " + countNumericChars(tab.url));
        //     console.log("Domain in subdomain" + hasDomainsInSubdomain(tab.url));
        //     console.log("Has domain in path" + has_domains_in_path(tab.url));
        //     console.log("HTTPS in domain" + hasHttpsInDomain(tab.url));
        //     console.log("Hostname length" + get_hostname_length(tab.url));
        //     console.log("Get path length" + get_path_length(tab.url));
        //     console.log("get query length" + get_query_length(tab.url));
        //     const result = extract_features(tab.url);
        //     const featureCounts = result.featureCounts;
        //     const featureCountsArray = [
        //       `@ : ${featureCounts['@']}`,
        //       `? : ${featureCounts['?']}`,
        //       `- : ${featureCounts['-']}`,
        //       `= : ${featureCounts['=']}`,
        //       `. : ${featureCounts['.']}`,
        //       `# : ${featureCounts['#']}`,
        //       `% : ${featureCounts['%']}`,
        //       `+ : ${featureCounts['+']}`,
        //       `$ : ${featureCounts['$']}`,
        //       `! : ${featureCounts['!']}`,
        //       `* : ${featureCounts['*']}`,
        //       `, : ${featureCounts[',']}`,
        //       `// : ${featureCounts['//']}`
        //     ];
        //     console.log(featureCountsArray);
        // const result1 = await abnormal_features(tab.url);
        // console.log("Abnormal features: " + result1);
  //   }


  //   //   console.log("Meta vagera : " + abnormal_features(tab.url));


  //   }
  // });

//   function url_len(url) {
//     return url.length;
//   }
  
//   function shortening_service(url) {
//     var regex = new RegExp('bit\\.ly|goo\\.gl|shorte\\.st|go2l\\.ink|x\\.co|ow\\.ly|t\\.co|tinyurl|tr\\.im|is\\.gd|cli\\.gs|'
//                         + 'yfrog\\.com|migre\\.me|ff\\.im|tiny\\.cc|url4\\.eu|twit\\.ac|su\\.pr|twurl\\.nl|snipurl\\.com|'
//                         + 'short\\.to|BudURL\\.com|ping\\.fm|post\\.ly|Just\\.as|bkite\\.com|snipr\\.com|fic\\.kr|loopt\\.us|'
//                         + 'doiop\\.com|short\\.ie|kl\\.am|wp\\.me|rubyurl\\.com|om\\.ly|to\\.ly|bit\\.do|t\\.co|lnkd\\.in|'
//                         + 'db\\.tt|qr\\.ae|adf\\.ly|goo\\.gl|bitly\\.com|cur\\.lv|tinyurl\\.com|ow\\.ly|bit\\.ly|ity\\.im|'
//                         + 'q\\.gs|is\\.gd|po\\.st|bc\\.vc|twitthis\\.com|u\\.to|j\\.mp|buzurl\\.com|cutt\\.us|u\\.bb|yourls\\.org|'
//                         + 'x\\.co|prettylinkpro\\.com|scrnch\\.me|filoops\\.info|vzturl\\.com|qr\\.net|1url\\.com|tweez\\.me|v\\.gd|'
//                         + 'tr\\.im|link\\.zip\\.net');
//     if (regex.test(url)) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
  

//   function contains_ip_address(url) {
//     const re = new RegExp(
//       "(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
//       "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|" +  // IPv4
//       "(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
//       "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|" +  // IPv4 with port
//       "((0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\/)" +  // IPv4 in hexadecimal
//       "(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|" +
//       "([0-9]+(?:\\.[0-9]+){3}:[0-9]+)|" +
//       "((?:(?:\\d|[01]?\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d|\\d)(?:\\/\\d{1,2})?)"
//     );  // Ipv6
//     const match = re.exec(url);
//     if (match) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
  

//   function countNumericChars(url) {
//     const pattern = /\d/g;
//     const matches = url.match(pattern);
//     return matches ? matches.length : 0;
//   }
  

//   function hasDomainsInSubdomain(url) {
//     const pattern = /[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/g;
//     const domains = url.match(pattern) || [];
//     return Number(domains.length > 0);
//   }


//   function has_domains_in_path(url) {
//     const pathPattern = /(https?:\/\/)?([\w\-\.]+)(:[0-9]+)?(\/[\w\/_\.]*)?/;
//     const path = url.match(pathPattern)?.[4] || "";
//     if (!path) {
//       return 1;
//     }
//     const domainPattern = /[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/g;
//     const domains = path.match(domainPattern) || [];
//     return Number(domains.length > 0);
//   }
  

//   function hasHttpsInDomain(url) {
//     const domain = new URL(url).hostname;
//     return Number(domain.startsWith('https'));
//   }

//   function get_hostname_length(url) {
//     return new URL(url).hostname.length;
//   }

//   function get_path_length(url) {
//     return new URL(url).pathname.length;
//   }

//   function get_query_length(url) {
//     var parser = document.createElement('a');
//     parser.href = url;
//     return parser.search.length;
//   }

//   function extract_features(url) {
//     const featureList = ['@', '?', '-', '=', '.', '#', '%', '+', '$', '!', '*', ',', '//'];
  
//     const featureCounts = {};
//     featureList.forEach((feature) => {
//       featureCounts[feature] = (url.match(new RegExp(`\\${feature}`, 'g')) || []).length;
//     });
  
//     return {
//       url,
//       featureCounts,
//     };
//   }
  
  
// async function abnormal_features(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("Network response was not ok");

//     const parsed_url = new URL(url);
//     const domain = parsed_url.hostname;

//     const external_links = [];
//     let external_count = 0;
//     let total_count = 0;

//     const html = await response.text();
//     const soup = new DOMParser().parseFromString(html, "text/html");

//     for (const link of soup.querySelectorAll("a[href]")) {
//       const href = link.getAttribute("href");
//       if (href.includes("http")) {
//         total_count++;
//         if (!href.includes(domain)) {
//           external_links.push(href);
//           external_count++;
//         }
//       }
//     }

//     meta_count = html.split("<meta").length - 1;
//     script_count = html.split("<script").length - 1;
//     link_count = html.split("<link").length - 1;

//     for (const link of html.split('src="')) {
//       if (link.includes("http")) {
//         total_count++;
//         if (!link.includes(domain)) {
//           external_links.push(link.split(/['"]/)[0]);
//           external_count++;
//         }
//       }
//     }

//     const request_url_exists = external_links.length > 0 ? 1 : 0;
//     const anchor_url_exists = external_count > 0 ? 1 : 0;
//     const meta_script_link_exists = (meta_count + script_count + link_count) > 0 ? 1 : 0;

//     let form_action = "";
//     for (const line of html.split("\n")) {
//       if (line.includes("<form")) {
//         if (line.includes('action="')) {
//           form_action = line.split('action="')[1].split('"')[0];
//         } else {
//           form_action = url;
//         }
//         break;
//       }
//     }

//     let sfh_feature;
//     if (!form_action || form_action === "about:blank") {
//       sfh_feature = 1;
//     } else {
//       try {
//         const form_action_url = new URL(form_action);
//         const form_action_domain = form_action_url.hostname;
//         sfh_feature = form_action_domain && form_action_domain !== domain ? 0 : 1;
//       } catch (error) {
//         console.error(`Invalid URL: ${form_action}`);
//         sfh_feature = 0;
//       }
//     }

//     let domain_check;
//     try {
//       const domain_info = await whois.lookup(domain);
//       console.log(domain_info)
//       domain_check = domain_info ? 1 : 0;
//     } catch (error) {
//       console.log(error)
//       domain_check = 0;
//     }

//     return Promise.resolve([
//       request_url_exists,
//       anchor_url_exists,
//       meta_script_link_exists,
//       sfh_feature,
//       domain_check,
//     ]);
//   } catch (error) {
//     // return Promise.reject(error);
//   }
// }


// chrome.tabs.onActivated.addListener((activeInfo) => {
//   var popupWidth = 320;
//   var popupHeight = 480;
//   var popupLeft = screen.width - popupWidth - 10;
//   var popupTop = 10;
//   const tabId = activeInfo.tabId;
//   chrome.tabs.get(tabId, current_tab_info => {
//     const url = current_tab_info.url;
//     console.log('Sending request to server');
//     fetch('http://localhost:5000/process-url', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         url: url
//       })
//     })
//     .then(response => {
//       console.log('Response received from server');
//       return response.text();
//     })
//     .then(output => {
//       console.log(output);
//       if (output === 'benign') {
//         chrome.browserAction.setIcon({path : "/icons/tick.png",tabId: tabId});
//       } else {
//         chrome.windows.create({
//         url: chrome.extension.getURL("popup.html"),
//         type: "popup",
//         width: popupWidth,
//         height: popupHeight,
//         left: popupLeft,
//         top: popupTop
//       }, function(window) {
//         chrome.runtime.sendMessage({data: "Hello from background script!"}, function(response) {
//           console.log(response);
//         });
//       });
//         chrome.browserAction.setIcon({path :"/icons/cross.png",tabId: tabId});
//       }
//       // return response.text();
//     })
//     .catch(error => console.error(error));
//   });
// });


// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   var popupWidth = 320;
//   var popupHeight = 480;
//   var popupLeft = screen.width - popupWidth - 10;
//   var popupTop = 10;
//   if (changeInfo.status === 'complete') {
//     const url = tab.url;
//     console.log('Sending request to server');
//     fetch('http://localhost:5000/process-url', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         url: url
//       })
//     })
//     .then(response => {
//       console.log('Response received from server');
//       return response.text();
//     })
//     .then(output => {
//       console.log(output);
//       if (output === 'benign') {
//         chrome.browserAction.setIcon({path : "/icons/tick.png",tabId: tabId});
//       } else {
//         chrome.windows.create({
//         url: chrome.extension.getURL("popup.html"),
//         type: "popup",
//         width: popupWidth,
//         height: popupHeight,
//         left: popupLeft,
//         top: popupTop
//       }, function(window) {
//         chrome.runtime.sendMessage({data: "Hello from background script!"}, function(response) {
//           console.log(response);
//         });
//       });
//         chrome.browserAction.setIcon({path : "/icons/cross.png",tabId: tabId});
//       }
//       // return response.text();
//     })
//     .catch(error => console.error(error));
//   }
// });


// let popupOpen = false;
// let popupWindow;

// chrome.tabs.onActivated.addListener((activeInfo) => {
//   const tabId = activeInfo.tabId;
//   chrome.tabs.get(tabId, current_tab_info => {
//     const url = current_tab_info.url;
//     console.log('Sending request to server');
//     fetch('http://localhost:5000/process-url', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         url: url
//       })
//     })
//     .then(response => {
//       console.log('Response received from server');
//       return response.text();
//     })
//     .then(output => {
//       console.log(output);
//       if (output === 'benign') {
//         chrome.browserAction.setIcon({path : "/icons/tick.png",tabId: tabId});
//         if (popupOpen) {
//           popupWindow.close();
//           popupOpen = false;
//         }
//       } else {
//         if (!popupOpen) {
//           popupWindow = window.open(chrome.extension.getURL("popup.html"), "extension_popup", "width=320,height=480");
//           popupOpen = true;
//           popupWindow.onRemoved.addListener(() => {
//             popupOpen = false;
//           });
//         }
//         chrome.browserAction.setIcon({path :"/icons/cross.png",tabId: tabId});
//       }
//     })
//     .catch(error => console.error(error));
//   });
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete') {
//     const url = tab.url;
//     console.log('Sending request to server');
//     fetch('http://localhost:5000/process-url', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         url: url
//       })
//     })
//     .then(response => {
//       console.log('Response received from server');
//       return response.text();
//     })
//     .then(output => {
//       console.log(output);
//       if (output === 'benign') {
//         chrome.browserAction.setIcon({path : "/icons/tick.png",tabId: tabId});
//         if (popupOpen) {
//           popupWindow.close();
//           popupOpen = false;
//         }
//       } else {
//         if (!popupOpen) {
//           popupWindow = window.open(chrome.extension.getURL("popup.html"), "extension_popup", "width=320,height=480");
//           popupOpen = true;
//           popupWindow.onRemoved.addListener(() => {
//             popupOpen = false;
//           });
//         }
//         chrome.browserAction.setIcon({path :"/icons/cross.png",tabId: tabId});
//       }
//     })
//     .catch(error => console.error(error));
//   }
// });


let popupWindowId = null;
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    const url = tab.url;
    console.log('Sending request to server');
    fetch('http://localhost:5000/process-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url
      })
    })
    .then(response => {
      console.log('Response received from server');
      return response.text();
    })
    .then(output => {
      console.log(output);
      if (output === 'benign') {
        chrome.browserAction.setIcon({path : "/icons/cross.png",tabId: tabId});
        // close the popup window if it's open
        if (popupWindowId !== null) {
          chrome.windows.remove(popupWindowId);
          popupWindowId = null;
        }
      } else {
        // create or update the popup window
        const popupWidth = 320;
        const popupHeight = 480;
        const popupLeft = screen.width - popupWidth - 10;
        const popupTop = 10;
        const popupUrl = chrome.extension.getURL("popup.html");
        if (popupWindowId === null) {
          chrome.windows.create({
            url: popupUrl,
            type: 'popup',
            width: popupWidth,
            height: popupHeight,
            left: popupLeft,
            top: popupTop
          }, window => {
            popupWindowId = window.id;
          });
        }
      }
    })
    .catch(error => console.error(error));
  }
});
chrome.windows.onRemoved.addListener(windowId => {
  if (windowId === popupWindowId) {
    popupWindowId = null;
  }
});

