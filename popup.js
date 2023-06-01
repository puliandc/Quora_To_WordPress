// popup.js
function copyToClipboard(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input)
    return result;
  }
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "clicked_browser_action"}, function(response) {
      let title = response.title;
      let text = response.text;
      copyToClipboard(title + '\n\n' + text);
    });
  });
  