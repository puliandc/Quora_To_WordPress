// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "clicked_browser_action") {
        let titleElement = document.querySelector('.puppeteer_test_question_title');
        let title = titleElement ? titleElement.innerText : ''; 
  
        let htmlString = document.querySelector('.q-text').innerHTML;
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(htmlString, 'text/html');
        let textContent = Array.from(htmlDoc.querySelectorAll('p')).map(p => p.textContent).join('\n');
  
        sendResponse({title: title, text: textContent});
      }
    }
  );
  