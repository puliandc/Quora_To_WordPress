// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            let titleElement = document.querySelector('.puppeteer_test_question_title');
            let title = titleElement ? titleElement.innerText : ''; 

            // query for the first div element with class 'q-text'
            let divElement = document.querySelector("div[class='q-text']");

            if (divElement) {
                // select all 'p' and 'li' elements within the div
                let textElements = divElement.querySelectorAll('p, li');

                // create an array of the text contents of these elements, each followed by a newline character
                let textContents = Array.from(textElements).map(el => el.textContent + '\n');

                // join all the text contents together
                let text = textContents.join('');

                sendResponse({title: title, text: text});
            } else {
                sendResponse({title: title, text: ""});
            }
        }
        // This is required for Chrome to call the sendResponse callback.
        return true;  
    }
);
