webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime.js */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar StartMenu = function StartMenu() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])('All apps'),\n      view = _useState2[0],\n      setView = _useState2[1];\n\n  var startButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    children: [showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n        className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n            title: \"Expand\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faBars\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n                children: \"START\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n            className: view === 'All apps' ? _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.buttonSelected : '',\n            title: \"All apps\",\n            onClick: function onClick() {\n              if (view !== 'All apps') {\n                setView('All apps');\n              }\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              children: \"&#e700;\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n              children: \"All apps\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n            title: \"Documents\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faFile\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n              children: \"Documents\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n            title: \"Power\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faPowerOff\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n              children: \"Power\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        path: \"/start\",\n        render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        onChange: function onChange(cwd) {\n          return !cwd && setShowMenu(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      ref: startButtonRef,\n      className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuOpen),\n      type: \"button\",\n      title: \"Start\",\n      onClick: function onClick() {\n        return setShowMenu(!showMenu);\n      },\n      onBlur: function onBlur(_ref) {\n        var relatedTarget = _ref.relatedTarget;\n\n        if (!relatedTarget) {\n          var _startButtonRef$curre;\n\n          startButtonRef === null || startButtonRef === void 0 ? void 0 : (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n        } else {\n          setShowMenu(false);\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faWindows\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(StartMenu, \"vXSTV1v6wJXQgM9R5s5msEpA+HQ=\");\n\n_c = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiU3RhcnRNZW51IiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwidmlldyIsInNldFZpZXciLCJzdGFydEJ1dHRvblJlZiIsInVzZVJlZiIsInN0eWxlcyIsIm1lbnUiLCJidXR0b25zIiwiZmFCYXJzIiwiYnV0dG9uU2VsZWN0ZWQiLCJmYUZpbGUiLCJmYVBvd2VyT2ZmIiwiTWVudVZpZXciLCJjd2QiLCJzdGFydCIsIm1lbnVPcGVuIiwicmVsYXRlZFRhcmdldCIsImN1cnJlbnQiLCJmb2N1cyIsImZhV2luZG93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsR0FBTTtBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDLEtBQUQsQ0FEUjtBQUFBLE1BQ3pCQyxRQUR5QjtBQUFBLE1BQ2ZDLFdBRGU7O0FBQUEsbUJBRVJGLHNEQUFRLENBQUMsVUFBRCxDQUZBO0FBQUEsTUFFekJHLElBRnlCO0FBQUEsTUFFbkJDLE9BRm1COztBQUdoQyxNQUFNQyxjQUFjLEdBQUdDLG9EQUFNLENBQW9CLElBQXBCLENBQTdCO0FBRUEsc0JBQ0U7QUFBQSxlQUNHTCxRQUFRLGlCQUNQO0FBQUssZUFBUyxFQUFFTSxtRkFBTSxDQUFDQyxJQUF2QjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUQsbUZBQU0sQ0FBQ0UsT0FBdEI7QUFBQSxnQ0FDRTtBQUFBLGlDQUNFO0FBQVEsaUJBQUssRUFBQyxRQUFkO0FBQUEsb0NBQ0Usd0VBQUMsOEVBQUQ7QUFBaUIsa0JBQUksRUFBRUMsd0VBQU1BO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHFDQUNF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ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IEZpbGVNYW5hZ2VyIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXInO1xuaW1wb3J0IE1lbnVWaWV3IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvTWVudVZpZXcnO1xuaW1wb3J0IHsgZmFGaWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFCYXJzLCBmYUxpc3QsIGZhUG93ZXJPZmYgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFXaW5kb3dzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhcnRNZW51OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKCdBbGwgYXBwcycpO1xuICBjb25zdCBzdGFydEJ1dHRvblJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAge3Nob3dNZW51ICYmIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cbiAgICAgICAgICA8b2wgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxmaWd1cmUgdGl0bGU9XCJFeHBhbmRcIj5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cbiAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U1RBUlQ8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGZpZ3VyZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dmlldyA9PT0gJ0FsbCBhcHBzJyA/IHN0eWxlcy5idXR0b25TZWxlY3RlZCA6ICcnfVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQWxsIGFwcHNcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh2aWV3ICE9PSAnQWxsIGFwcHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXcoJ0FsbCBhcHBzJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPiYjZTcwMDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+QWxsIGFwcHM8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGZpZ3VyZSB0aXRsZT1cIkRvY3VtZW50c1wiPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlfSAvPlxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPkRvY3VtZW50czwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZmlndXJlIHRpdGxlPVwiUG93ZXJcIj5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IC8+XG4gICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+UG93ZXI8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICAgIDxGaWxlTWFuYWdlclxuICAgICAgICAgICAgcGF0aD1cIi9zdGFydFwiXG4gICAgICAgICAgICByZW5kZXI9e01lbnVWaWV3fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhjd2QpID0+ICFjd2QgJiYgc2V0U2hvd01lbnUoZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbmF2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPXtzdGFydEJ1dHRvblJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3RhcnR9ICR7c2hvd01lbnUgJiYgc3R5bGVzLm1lbnVPcGVufWB9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICB0aXRsZT1cIlN0YXJ0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoIXNob3dNZW51KX1cbiAgICAgICAgb25CbHVyPXsoeyByZWxhdGVkVGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIXJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uUmVmPy5jdXJyZW50Py5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2luZG93c30gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ })

})