webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UserItemsList.js":
/*!*************************************!*\
  !*** ./components/UserItemsList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _data_inventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/inventory */ "./data/inventory.json");
var _data_inventory__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/inventory */ "./data/inventory.json", 1);
/* harmony import */ var _SelectedItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectedItem */ "./components/SelectedItem.js");

var _jsxFileName = "/Users/ghost/Documents/projects/ict-life/components/UserItemsList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var currentCurrency = _ref.currentCurrency,
      currentlySelectedItems = _ref.currentlySelectedItems;
  var items = _data_inventory__WEBPACK_IMPORTED_MODULE_4__.products.filter(function (product) {
    return currentlySelectedItems.includes(product.name);
  });
  var trail = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useTrail"])(items.length, {
    top: 0,
    opacity: 1,
    from: {
      top: 40,
      opacity: 0
    }
  });
  return __jsx("div", {
    style: {
      margin: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, trail.map(function (_ref2, index) {
    var top = _ref2.top,
        opacity = _ref2.opacity;
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: items[index].name,
      item: true,
      xs: 12,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
      className: "trails-text",
      style: {
        transform: top.interpolate(function (x) {
          return "translate3d(0,".concat(x, "px,0)");
        }),
        opacity: opacity
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(_SelectedItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      name: items[index].name,
      image: items[index].image_url,
      description: items[index].description,
      prices: items[index].prices
    }, {
      currentCurrency: currentCurrency
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }))));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.8f6a0f594beef968603c.hot-update.js.map