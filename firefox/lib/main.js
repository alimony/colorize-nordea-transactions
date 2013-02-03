var pageMod = require('sdk/page-mod');
var self = require('sdk/self');

// We share the content script with the Chrome version of this extension, so we
// just have to load the same script but as a page mod. Unlike in Chrome
// extensions, we can use a proper regexp here for defining what pages to run
// on, making it a bit simpler than the glob syntax.
pageMod.PageMod({
	include: /.*:\/\/internetbanken\..*\.nordea\.se\/.*/,
	contentScriptFile: self.data.url('content-script.js'),
	contentScriptWhen: 'ready',
	contentStyleFile: self.data.url('style.css')
});