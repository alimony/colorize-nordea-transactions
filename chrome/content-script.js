(function () {
	'use strict';

	var makeReplacerFunction = function (className) {
		return function (match) {
			return '<span class="' + className + '">' + match + '</span>';
		};
	};

	var negativeNumberPattern = /-[0-9,.]+/;
	var negativeReplacer = makeReplacerFunction('cnt-negative');

	var positiveNumberPattern = /[0-9,.]+/;
	var positiveReplacer = makeReplacerFunction('cnt-positive');

	var tds = document.querySelectorAll('#accountTransactionsRowForm td[align="right"]');
	for (var i = 0, len = tds.length; i < len; i++) {
		var html = tds[i].innerHTML;
		if (negativeNumberPattern.test(html)) {
			html = html.replace(negativeNumberPattern, negativeReplacer);
		}
		else {
			html = html.replace(positiveNumberPattern, positiveReplacer);
		}
		tds[i].innerHTML = html;
	}
}());