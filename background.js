chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		code: '(function(){var names = document.getElementsByTagName("a");for (var i = 0; i < names.length; ++i) {var nn = names[i];if(nn&&nn.className && (nn.className == "gn_name" || nn.className=="name S_func1")) {nn.textContent="Name";nn.title="Name";}}var im=document.getElementById("WB_webim");if (im){for(var i=0;i<im.children.length;++i){var child=im.children[i];if(child&&child.className&&child.className=="webim_list WBIM_fold"){child.style.width=0;break;}}}})();',
	});
});
