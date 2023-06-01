document.getElementById('copy-button').addEventListener('click', function() {
    console.log('Copy button clicked');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      console.log('Sending getHTML message');
      chrome.tabs.sendMessage(tabs[0].id, {action: "getHTML"}, function(response) {
        if (response && response.html) {
          console.log('Received response:', response.html);
          navigator.clipboard.writeText(response.html).then(function() {
            console.log('Copying to clipboard was successful!');
          }, function(err) {
            console.error('Could not copy text: ', err);
          });
        } else {
          console.log('No response or no HTML in response');
        }
      });
    });
  });
  