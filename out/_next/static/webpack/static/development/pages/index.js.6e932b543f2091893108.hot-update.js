webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/pricing.js":
/*!**************************!*\
  !*** ./utils/pricing.js ***!
  \**************************/
/*! exports provided: setCurrencyToLocalStorage, getCurrencyFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrencyToLocalStorage", function() { return setCurrencyToLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencyFromLocalStorage", function() { return getCurrencyFromLocalStorage; });
var setCurrencyToLocalStorage = function setCurrencyToLocalStorage() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "KES";

  if (global.window.localStorage) {
    return localStorage.setItem("currency", currency);
  }
};
var getCurrencyFromLocalStorage = function getCurrencyFromLocalStorage() {
  var storedCurrency = global.window && localStorage.getItem("currency");
  return global.window && storedCurrency ? storedCurrency : "Kenyan Shillings";
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.6e932b543f2091893108.hot-update.js.map