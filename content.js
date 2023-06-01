var targetElement = document.querySelector('#mainContent > div > div.q-box.qu-borderAll.qu-borderRadius--small.qu-borderColor--raised.qu-boxShadow--small.qu-bg--raised:first-child > div.q-box.qu-pt--medium.qu-px--medium.qu-pb--tiny:first-child');
var parentElement = targetElement.parentElement;
var childElements = parentElement.children;

for (var i = 0; i < childElements.length; i++) {
    if (childElements[i] !== targetElement) {
        childElements[i].style.display = 'none';
    }
}
