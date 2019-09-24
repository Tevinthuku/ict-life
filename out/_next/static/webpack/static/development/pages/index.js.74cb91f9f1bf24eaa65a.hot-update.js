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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AnimatedText */ "./components/AnimatedText.js");
/* harmony import */ var _components_UserItemsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserItemsList */ "./components/UserItemsList.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CurrencySelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CurrencySelector */ "./components/CurrencySelector.js");
/* harmony import */ var _data_selecteditems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/selecteditems */ "./data/selecteditems.json");
var _data_selecteditems__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/selecteditems */ "./data/selecteditems.json", 1);
/* harmony import */ var _utils_pricing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/pricing */ "./utils/pricing.js");


var _jsxFileName = "/Users/ghost/Documents/projects/ict-life/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_utils_pricing__WEBPACK_IMPORTED_MODULE_12__["getCurrencyFromLocalStorage"])()),
      currentCurrency = _useState[0],
      setCurrentCurrency = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_data_selecteditems__WEBPACK_IMPORTED_MODULE_11__.items),
      currentlySelectedItems = _useState2[0],
      setSelectedItems = _useState2[1];

  function handleCurrencyChange(currency) {
    Object(_utils_pricing__WEBPACK_IMPORTED_MODULE_12__["setCurrencyToLocalStorage"])(currency);
    setCurrentCurrency(currency);
  }

  function addNewItem(itemname) {
    setSelectedItems([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(currentlySelectedItems), [itemname]));
  }

  function removeSelectedItem(itemname) {
    setSelectedItems(currentlySelectedItems.filter(function (item) {
      return item !== itemname;
    }));
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    style: {
      minHeight: 130
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: "Welcome to Amazin, we have all you need, check out our list of\n            items below",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    currentlySelectedItems: currentlySelectedItems
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      fontSize: 20
    },
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "My Selected Items"), __jsx(_components_UserItemsList__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    currentCurrency: currentCurrency,
    currentlySelectedItems: currentlySelectedItems
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(_components_CurrencySelector__WEBPACK_IMPORTED_MODULE_10__["default"], {
    currentCurrency: currentCurrency,
    setCurrency: handleCurrencyChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.74cb91f9f1bf24eaa65a.hot-update.js.map