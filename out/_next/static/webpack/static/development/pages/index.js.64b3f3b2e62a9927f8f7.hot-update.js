webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AnimatedText */ "./components/AnimatedText.js");
/* harmony import */ var _components_UserItemsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserItemsList */ "./components/UserItemsList.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CurrencySelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CurrencySelector */ "./components/CurrencySelector.js");
/* harmony import */ var _utils_pricing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/pricing */ "./utils/pricing.js");
var _jsxFileName = "/Users/ghost/Documents/projects/ict-life/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_utils_pricing__WEBPACK_IMPORTED_MODULE_9__["getCurrencyFromLocalStorage"])()),
      currentCurrency = _useState[0],
      setCurrentCurrency = _useState[1];

  function handleCurrencyChange(currency) {
    Object(_utils_pricing__WEBPACK_IMPORTED_MODULE_9__["setCurrencyToLocalStorage"])(currency);
    setCurrentCurrency(currency);
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    my: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    style: {
      minHeight: 130
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "Welcome to Amazin, we have all you need, check out our list of\n            items below",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      fontSize: 20
    },
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "My Selected Items"), __jsx(_components_UserItemsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_components_CurrencySelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.64b3f3b2e62a9927f8f7.hot-update.js.map