webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CurrencySelector.js":
/*!****************************************!*\
  !*** ./components/CurrencySelector.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplitButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");


var _jsxFileName = "/Users/ghost/Documents/projects/ict-life/components/CurrencySelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var options = ["Kenyan Shillings", "American Dollars", "Euros", "Nigerian Naira"];
function SplitButton(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      snackbaropen = _React$useState4[0],
      setSnackBarOpen = _React$useState4[1];

  var anchorRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(options.indexOf(props.currentCurrency)),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      selectedIndex = _React$useState6[0],
      setSelectedIndex = _React$useState6[1];

  var handleClick = function handleClick() {//open snackbar
  };

  var handleMenuItemClick = function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    props.setCurrency(options[index]);
    setOpen(false);
  };

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  var handleCloseSnackbar = function handleCloseSnackbar(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    ref: anchorRef,
    "aria-label": "split button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Current currency is in " + options[selectedIndex]), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    size: "small",
    "aria-owns": open ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open,
    anchorEl: anchorRef.current,
    transition: true,
    disablePortal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "menu-list-grow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClickAway: handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, options.map(function (option, index) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: option,
        selected: index === selectedIndex,
        onClick: function onClick(event) {
          return handleMenuItemClick(event, index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Currency in " + option);
    })))));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.d84a2e19f603ed355f1c.hot-update.js.map