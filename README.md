Red and green transactions in the Nordea internet bank
======================================================

This browser extension colorizes the transaction view when logged into the Nordea internet bank, making negative numbers red and positive numbers green.

![Screenshot of transaction view](chrome/img/chrome-promo.png?raw=true)

The repository contains a Chrome extension and a Firefox add-on, both sharing the same JavaScript and CSS files. It seems like Chrome does not like symlinked files when loading the code, so the originals is in the `chrome` folder, with the Firefox add-on symlinking to them relatively.

Installation for Chrome
-----------------------
To add this extension to Chrome, follow [these](http://developer.chrome.com/extensions/getstarted.html#unpacked) instructions, and choose the `chrome` folder when browsing for extensions to add.

Installation for Firefox
------------------------
Choose "Open file…" from the File menu, choose the file `colorize-nordea-transactions.xpi` and follow the instructions.

Development
-----------
This is still a work in progress, not yet ready for public release. The extension will hopefully be distributed through the Chrome and Mozilla web stores.
