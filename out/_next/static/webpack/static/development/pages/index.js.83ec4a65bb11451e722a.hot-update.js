webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UserItemsList.js":
/*!*************************************!*\
  !*** ./components/UserItemsList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _data_inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/inventory */ "./data/inventory.json");
var _data_inventory__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/inventory */ "./data/inventory.json", 1);
/* harmony import */ var _data_selecteditems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/selecteditems */ "./data/selecteditems.json");
var _data_selecteditems__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/selecteditems */ "./data/selecteditems.json", 1);
/* harmony import */ var _SelectedItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectedItem */ "./components/SelectedItem.js");
var _jsxFileName = "/Users/ghost/Documents/projects/ict-life/components/UserItemsList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var currentCurrency = _ref.currentCurrency;
  var items = _data_inventory__WEBPACK_IMPORTED_MODULE_3__.products.filter(function (product) {
    return _data_selecteditems__WEBPACK_IMPORTED_MODULE_4__.items.includes(product.name);
  });
  var trail = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useTrail"])(items.length, {
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
      lineNumber: 21
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    container: true,
    spacing: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, trail.map(function (_ref2, index) {
    var top = _ref2.top,
        opacity = _ref2.opacity;
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: items[index].name,
      item: true,
      xs: 12,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
      className: "trails-text",
      style: {
        transform: top.interpolate(function (x) {
          return "translate3d(0,".concat(x, "px,0)");
        }),
        opacity: opacity
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_SelectedItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: items[index].name,
      image: items[index].image_url,
      description: items[index].description,
      prices: items[index].prices,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.83ec4a65bb11451e722a.hot-update.js.map