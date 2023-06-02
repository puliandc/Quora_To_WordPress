// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      if (request.message === "clicked_browser_action") {
          let titleElement = document.querySelector('.puppeteer_test_question_title');
          let title = titleElement ? titleElement.innerText : '';

          // query for the first div element with class 'q-text'
          let divElement = document.querySelector("div[class='q-text']");

          if (divElement) {
              // query for all the p elements within the div
              let pElements = divElement.querySelectorAll('p');

              // create an array of the text contents of these elements
              let textContents = Array.from(pElements).map(p => p.textContent);

              // join all the text contents together with a newline character
              let text = textContents.join('\n');

              sendResponse({title: title, text: text});
          } else {
              sendResponse({title: title, text: ""});
          }
      }
      // This is required for Chrome to call the sendResponse callback.
      return true;  
  }
);
