chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "getHTML") {
        console.log('Received getHTML message');
        var targetElement = document.querySelector('#mainContent > div > div.q-box.qu-borderAll.qu-borderRadius--small.qu-borderColor--raised.qu-boxShadow--small.qu-bg--raised:first-child > div.q-box.qu-pt--medium.qu-px--medium.qu-pb--tiny:first-child');
        if (targetElement) {
          console.log('Target element found');
          var htmlString = targetElement.outerHTML;
          sendResponse({html: htmlString});
        } else {
          console.log('Target element not found');
        }
      }
    }
  );
  
  console.log("Content script has been loaded and executed.");
  