chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "copy") {
        copyToClipboard(request.html);
      }
    }
  );
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      console.log('Copying to clipboard was successful!');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }
  