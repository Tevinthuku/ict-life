webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/pricing.js":
/*!**************************!*\
  !*** ./utils/pricing.js ***!
  \**************************/
/*! exports provided: setCurrencyToLocalStorage, getCurrencyFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrencyToLocalStorage", function() { return setCurrencyToLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencyFromLocalStorage", function() { return getCurrencyFromLocalStorage; });
var setCurrencyToLocalStorage = function setCurrencyToLocalStorage() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "KES";

  if (window.localStorage) {
    return localStorage.setItem("currency", currency);
  }
};
var getCurrencyFromLocalStorage = function getCurrencyFromLocalStorage() {
  var storedCurrency = window && localStorage.getItem("currency");
  return window && storedCurrency ? storedCurrency : "KES";
};

/***/ })

})
//# sourceMappingURL=index.js.c51a9c95da34c534454b.hot-update.js.map