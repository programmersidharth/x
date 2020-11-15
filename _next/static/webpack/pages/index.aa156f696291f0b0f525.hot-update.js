webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_Taskbar_ButtonBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/Taskbar/ButtonBar */ \"./components/System/Taskbar/ButtonBar.tsx\");\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar StartMenu = function StartMenu() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var startButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useRef\"])(null);\n  var buttonsRef = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useRef\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    children: [showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Taskbar_ButtonBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        startButtonRef: startButtonRef,\n        buttonsRef: buttonsRef,\n        setShowMenu: setShowMenu\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        path: \"/start\",\n        render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        onChange: function onChange(cwd) {\n          return !cwd && setShowMenu(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      ref: startButtonRef,\n      className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuOpen),\n      type: \"button\",\n      title: \"Start\",\n      onClick: function onClick() {\n        return setShowMenu(!showMenu);\n      },\n      onBlur: function onBlur(_ref) {\n        var _buttonsRef$current;\n\n        var relatedTarget = _ref.relatedTarget;\n\n        if (!relatedTarget) {\n          var _startButtonRef$curre;\n\n          startButtonRef === null || startButtonRef === void 0 ? void 0 : (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n        } else if (!((_buttonsRef$current = buttonsRef.current) === null || _buttonsRef$current === void 0 ? void 0 : _buttonsRef$current.contains(relatedTarget))) {\n          setShowMenu(false);\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faWindows\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(StartMenu, \"zJAfDvIwxZHfrugw9MiQk3Iui1Q=\");\n\n_c = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiU3RhcnRNZW51IiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51Iiwic3RhcnRCdXR0b25SZWYiLCJ1c2VSZWYiLCJidXR0b25zUmVmIiwic3R5bGVzIiwibWVudSIsIk1lbnVWaWV3IiwiY3dkIiwic3RhcnQiLCJtZW51T3BlbiIsInJlbGF0ZWRUYXJnZXQiLCJjdXJyZW50IiwiZm9jdXMiLCJjb250YWlucyIsImZhV2luZG93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsR0FBTTtBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDLEtBQUQsQ0FEUjtBQUFBLE1BQ3pCQyxRQUR5QjtBQUFBLE1BQ2ZDLFdBRGU7O0FBRWhDLE1BQU1DLGNBQWMsR0FBR0Msb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBN0I7QUFDQSxNQUFNQyxVQUFVLEdBQUdELG9EQUFNLENBQW1CLElBQW5CLENBQXpCO0FBRUEsc0JBQ0U7QUFBQSxlQUNHSCxRQUFRLGlCQUNQO0FBQUssZUFBUyxFQUFFSyxtRkFBTSxDQUFDQyxJQUF2QjtBQUFBLDhCQUNFLHFFQUFDLDRFQUFEO0FBQ0Usc0JBQWMsRUFBRUosY0FEbEI7QUFFRSxrQkFBVSxFQUFFRSxVQUZkO0FBR0UsbUJBQVcsRUFBRUg7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRSxxRUFBQyxrRkFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsY0FBTSxFQUFFTSwrRUFGVjtBQUdFLGdCQUFRLEVBQUUsa0JBQUNDLEdBQUQ7QUFBQSxpQkFBUyxDQUFDQSxHQUFELElBQVFQLFdBQVcsQ0FBQyxLQUFELENBQTVCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFlRTtBQUNFLFNBQUcsRUFBRUMsY0FEUDtBQUVFLGVBQVMsWUFBS0csbUZBQU0sQ0FBQ0ksS0FBWixjQUFxQlQsUUFBUSxJQUFJSyxtRkFBTSxDQUFDSyxRQUF4QyxDQUZYO0FBR0UsVUFBSSxFQUFDLFFBSFA7QUFJRSxXQUFLLEVBQUMsT0FKUjtBQUtFLGFBQU8sRUFBRTtBQUFBLGVBQU1ULFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQWpCO0FBQUEsT0FMWDtBQU1FLFlBQU0sRUFBRSxzQkFBdUI7QUFBQTs7QUFBQSxZQUFwQlcsYUFBb0IsUUFBcEJBLGFBQW9COztBQUM3QixZQUFJLENBQUNBLGFBQUwsRUFBb0I7QUFBQTs7QUFDbEJULHdCQUFjLFNBQWQsSUFBQUEsY0FBYyxXQUFkLHFDQUFBQSxjQUFjLENBQUVVLE9BQWhCLGdGQUF5QkMsS0FBekI7QUFDRCxTQUZELE1BRU8sSUFBSSx5QkFBQ1QsVUFBVSxDQUFDUSxPQUFaLHdEQUFDLG9CQUFvQkUsUUFBcEIsQ0FBNkJILGFBQTdCLENBQUQsQ0FBSixFQUEwRDtBQUMvRFYscUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDRDtBQUNGLE9BWkg7QUFBQSw2QkFjRSxxRUFBQyw4RUFBRDtBQUFpQixZQUFJLEVBQUVjLDRFQUFTQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBdkNEOztHQUFNakIsUzs7S0FBQUEsUztBQXlDU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBCdXR0b25CYXIgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL0J1dHRvbkJhcic7XG5pbXBvcnQgRmlsZU1hbmFnZXIgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9GaWxlTWFuYWdlcic7XG5pbXBvcnQgTWVudVZpZXcgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9NZW51Vmlldyc7XG5pbXBvcnQgeyBmYVdpbmRvd3MgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGFydE1lbnU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3RhcnRCdXR0b25SZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBidXR0b25zUmVmID0gdXNlUmVmPEhUTUxPTGlzdEVsZW1lbnQ+KG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIHtzaG93TWVudSAmJiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgPEJ1dHRvbkJhclxuICAgICAgICAgICAgc3RhcnRCdXR0b25SZWY9e3N0YXJ0QnV0dG9uUmVmfVxuICAgICAgICAgICAgYnV0dG9uc1JlZj17YnV0dG9uc1JlZn1cbiAgICAgICAgICAgIHNldFNob3dNZW51PXtzZXRTaG93TWVudX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGaWxlTWFuYWdlclxuICAgICAgICAgICAgcGF0aD1cIi9zdGFydFwiXG4gICAgICAgICAgICByZW5kZXI9e01lbnVWaWV3fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhjd2QpID0+ICFjd2QgJiYgc2V0U2hvd01lbnUoZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbmF2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPXtzdGFydEJ1dHRvblJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3RhcnR9ICR7c2hvd01lbnUgJiYgc3R5bGVzLm1lbnVPcGVufWB9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICB0aXRsZT1cIlN0YXJ0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoIXNob3dNZW51KX1cbiAgICAgICAgb25CbHVyPXsoeyByZWxhdGVkVGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIXJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uUmVmPy5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWJ1dHRvbnNSZWYuY3VycmVudD8uY29udGFpbnMocmVsYXRlZFRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgICAgICAgc2V0U2hvd01lbnUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdpbmRvd3N9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0TWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ }),

/***/ "./components/System/Taskbar/Taskbar.tsx":
/*!***********************************************!*\
  !*** ./components/System/Taskbar/Taskbar.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Taskbar_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Taskbar/Taskbar.module.scss */ \"./styles/System/Taskbar/Taskbar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/Taskbar/Clock */ \"./components/System/Taskbar/Clock.tsx\");\n/* harmony import */ var _components_System_Taskbar_StartMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/Taskbar/StartMenu */ \"./components/System/Taskbar/StartMenu.tsx\");\n/* harmony import */ var _components_System_Taskbar_TaskbarEntries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/Taskbar/TaskbarEntries */ \"./components/System/Taskbar/TaskbarEntries.tsx\");\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/Taskbar.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Taskbar = function Taskbar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n    className: _styles_System_Taskbar_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.taskbar,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Taskbar_StartMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Taskbar_TaskbarEntries__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Taskbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Taskbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Taskbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLnRzeD8xN2Q0Il0sIm5hbWVzIjpbIlRhc2tiYXIiLCJzdHlsZXMiLCJ0YXNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBaUIsR0FBRyxTQUFwQkEsT0FBb0I7QUFBQSxzQkFDeEI7QUFBUSxhQUFTLEVBQUVDLGlGQUFNLENBQUNDLE9BQTFCO0FBQUEsNEJBQ0UscUVBQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR3QjtBQUFBLENBQTFCOztLQUFNRixPO0FBUVNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvVGFza2Jhci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBDbG9jayBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvQ2xvY2snO1xuaW1wb3J0IFN0YXJ0TWVudSBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51JztcbmltcG9ydCBUYXNrYmFyRW50cmllcyBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvVGFza2JhckVudHJpZXMnO1xuXG5jb25zdCBUYXNrYmFyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy50YXNrYmFyfT5cbiAgICA8U3RhcnRNZW51IC8+XG4gICAgPFRhc2tiYXJFbnRyaWVzIC8+XG4gICAgPENsb2NrIC8+XG4gIDwvZm9vdGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza2JhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Taskbar/Taskbar.tsx\n");

/***/ })

})