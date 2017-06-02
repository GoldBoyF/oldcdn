webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11);

	$(function () {
	    
	});

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/less-loader/index.js!./view.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/less-loader/index.js!./view.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "body {\n  background: linear-gradient(#66CCFF, #FFCCCC);\n}\n.header {\n  background: url(" + __webpack_require__(5) + ") no-repeat center;\n  background-size: 100% 100%;\n  height: 200px;\n}\n.my-site {\n  margin: 0;\n}\n.my-site .panel-body {\n  text-align: center;\n}\n.my-news-more {\n  font-size: 14px;\n  line-height: 17px;\n}\n.my-news-item-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: block;\n}\n.my-padding-fix-0 {\n  padding: 0;\n}\n.footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  border-top: 1px solid #eee;\n}\n.nav-justified {\n  background-color: #eee;\n  border: 1px solid #ccc;\n}\n.nav-justified > li > a {\n  margin-bottom: 0;\n  font-weight: bold;\n  color: #777;\n  text-align: center;\n  background-color: #e5e5e5;\n}\n.nav-justified > .active > a,\n.nav-justified > .active > a:hover,\n.nav-justified > .active > a:focus {\n  background-color: #ddd;\n  background-image: none;\n  box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15);\n}\n.nav-justified > li:last-child > a {\n  border-bottom: 0;\n}\n@media (min-width: 768px) {\n  .nav-justified {\n    max-height: 52px;\n  }\n  .nav-justified > li > a {\n    border-right: 1px solid #d5d5d5;\n    border-left: 1px solid #fff;\n  }\n  .nav-justified > li:first-child > a {\n    border-left: 0;\n  }\n  .nav-justified > li:last-child > a {\n    border-right: 0;\n  }\n}\n@media screen and (min-width: 768px) {\n  .footer {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.twinkling {\n  animation: twinkling 1s infinite ease-in-out;\n}\n@keyframes twinkling {\n  0% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n", ""]);

	// exports


/***/ }

});