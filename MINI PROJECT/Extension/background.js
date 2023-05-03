
let popupWindowId = null;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    const url = tab.url;
    if (!url.startsWith('chrome:') && !url.startsWith('chrome-extension:')) {
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
          chrome.browserAction.setIcon({path : "/icons/tick-resized.png",tabId: tabId});
          // close the popup window if it's open
          if (popupWindowId !== null) {
            chrome.windows.remove(popupWindowId);
            popupWindowId = null;
          }
        } else {
          chrome.browserAction.setIcon({path : "/icons/cross-resized.png",tabId: tabId});
          // create or update the popup window
          const popupWidth = 320;
          const popupHeight = 480;
          const popupLeft = screen.width - popupWidth - 10;
          const popupTop = 10;
          const popupUrl = chrome.extension.getURL("popup.html") + "?result=" + encodeURIComponent(output);
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
          else {
            chrome.windows.update(popupWindowId, {
              url: popupUrl,
              width: popupWidth,
              height: popupHeight,
              left: popupLeft,
              top: popupTop
            });
          }
        }
      })
      .catch(error => console.error(error));
    }
  }
});
