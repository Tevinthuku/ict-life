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
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _data_inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/inventory */ "./data/inventory.json");
var _data_inventory__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/inventory */ "./data/inventory.json", 1);
/* harmony import */ var _data_selecteditems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/selecteditems */ "./data/selecteditems.json");
var _data_selecteditems__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/selecteditems */ "./data/selecteditems.json", 1);
/* harmony import */ var _SelectedItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectedItem */ "./components/SelectedItem.js");
var _jsxFileName = "/Users/ghost/Documents/projects/ict-life/components/UserItemsList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var items = _data_inventory__WEBPACK_IMPORTED_MODULE_2__.products.filter(function (product) {
    return _data_selecteditems__WEBPACK_IMPORTED_MODULE_3__.items.includes(product.name);
  });
  console.log(items);
  var trail = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useTrail"])(items.length, {
    top: 0,
    opacity: 1,
    from: {
      top: 40,
      opacity: 0
    }
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, trail.map(function (_ref, index) {
    var top = _ref.top,
        opacity = _ref.opacity;
    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
      key: items[index].name,
      className: "trails-text",
      style: {
        transform: top.interpolate(function (x) {
          return "translate3d(0,".concat(x, "px,0)");
        }),
        opacity: opacity
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(_SelectedItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: items[index].name,
      image: items[index].image_url,
      description: items[index].description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.bd93ae558e469abf4dbd.hot-update.js.map