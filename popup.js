'use strict';
chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
  new QRCode(document.getElementById('qrdiv'), tabs[0].url);
});
