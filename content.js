var targetElement = document.querySelector('#mainContent > div > div.q-box.qu-borderAll.qu-borderRadius--small.qu-borderColor--raised.qu-boxShadow--small.qu-bg--raised:first-child > div.q-box.qu-pt--medium.qu-px--medium.qu-pb--tiny:first-child');
var htmlString = targetElement.outerHTML;

chrome.runtime.sendMessage({action: "copy", html: htmlString});

console.log("Content script has been loaded and executed.");
