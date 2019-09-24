webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MobileStepper */ "./node_modules/@material-ui/core/esm/MobileStepper/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ShoppingCartOutlined */ "./node_modules/@material-ui/icons/ShoppingCartOutlined.js");
/* harmony import */ var _material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "./node_modules/@material-ui/icons/CheckCircleOutline.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-swipeable-views-utils */ "./node_modules/react-swipeable-views-utils/lib/index.js");
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _data_inventory_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data/inventory.json */ "./data/inventory.json");
var _data_inventory_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/inventory.json */ "./data/inventory.json", 1);
/* harmony import */ var _data_selecteditems_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../data/selecteditems.json */ "./data/selecteditems.json");
var _data_selecteditems_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/selecteditems.json */ "./data/selecteditems.json", 1);

var _jsxFileName = "/Users/ghost/Documents/projects/ict-life/components/Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















var AutoPlaySwipeableViews = Object(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_13__["autoPlay"])(react_swipeable_views__WEBPACK_IMPORTED_MODULE_12___default.a);
var steps = _data_inventory_json__WEBPACK_IMPORTED_MODULE_15__.products.map(function (product) {
  return {
    label: product.name,
    imgPath: product.image_url
  };
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      maxWidth: 350,
      flexGrow: 1,
      margin: 'auto'
    },
    header: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background["default"]
    },
    img: {
      height: 300,
      display: 'block',
      overflow: 'hidden',
      width: '100%'
    },
    cardheader: {
      width: '100%'
    }
  };
});

function SwipeableTextMobileStepper() {
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var maxSteps = steps.length;

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleStepChange = function handleStepChange(step) {
    setActiveStep(step);
  };

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    square: true,
    elevation: 0,
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "aria-label": "recipe",
      className: classes.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, steps[activeStep].label[0]),
    action: __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "aria-label": "settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, _data_selecteditems_json__WEBPACK_IMPORTED_MODULE_16__.items.includes(steps[activeStep].label) ? __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }) : __jsx(_material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })),
    title: steps[activeStep].label,
    className: classes.cardheader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), __jsx(AutoPlaySwipeableViews, {
    axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
    index: activeStep,
    onChangeIndex: handleStepChange,
    enableMouseEvents: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, steps.map(function (step, index) {
    return __jsx("div", {
      key: step.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, Math.abs(activeStep - index) <= 2 ? __jsx("img", {
      className: classes.img,
      src: step.imgPath,
      alt: step.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }) : null);
  })), __jsx(_material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    steps: maxSteps,
    position: "static",
    variant: "text",
    activeStep: activeStep,
    nextButton: __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: "small",
      onClick: handleNext,
      disabled: activeStep === maxSteps - 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Next", theme.direction === 'rtl' ? __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }) : __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })),
    backButton: __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: "small",
      onClick: handleBack,
      disabled: activeStep === 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), "Back"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SwipeableTextMobileStepper);

/***/ })

})
//# sourceMappingURL=index.js.9332ca9a58f2009744f6.hot-update.js.map