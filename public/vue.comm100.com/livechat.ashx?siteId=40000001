window["comm100main"] = (function (bundleJsName) {
	window["Comm100API"] = window["Comm100API"] || {};
	var api = window["Comm100API"];
	api.call = function (name) {
		return (new Function('return ' + name)).call();
	};
	api.chat_buttons = api.chat_buttons || [];
	return function (main, standby, vue) {
		api.main = main;
        api.standby = standby;
        api.vue = vue;
		var src = vue + '/js/' + bundleJsName;

		var iframe = document.createElement('iframe');
		iframe.style.display = 'none';
		iframe.id = "comm100-iframe";
		document.body.appendChild(iframe);
		var innerDoc = iframe.contentDocument;
		innerDoc.open();
		innerDoc.write('<!doctype html><head><script src="' + src + '" async type="text/javascript" charset="utf-8"></script></head><body></body>');
		innerDoc.close();
	};
}('bundle.8c14da40cd8e8fb44edcb0c4baea0e95.js'));
window.comm100main('https://chatserver5.comm100.io', 'https://max5.comm100.io/chatserver', 'https://vue.comm100.com');
delete window.comm100main;