webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AnimatedText.js":
/*!************************************!*\
  !*** ./components/AnimatedText.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_spring_renderProps_cjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring/renderProps.cjs */ "./node_modules/react-spring/renderProps.cjs.js");
/* harmony import */ var react_spring_renderProps_cjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderProps_cjs__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/ghost/Documents/projects/ict-life/components/AnimatedText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    fontSize: 20
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var text = _ref.text,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var classes = useStyles();
  return __jsx(react_spring_renderProps_cjs__WEBPACK_IMPORTED_MODULE_4__["Spring"], {
    config: {
      tension: 1,
      friction: 0.5,
      precision: 0.1
    },
    from: {
      val: 0
    },
    to: {
      val: text.length
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, function (props) {
    return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.root,
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style),
      variant: "overline",
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, text.substring(0, props.val));
  });
});

/***/ })

})
//# sourceMappingURL=index.js.e8aa87f5353efaf17a54.hot-update.js.map