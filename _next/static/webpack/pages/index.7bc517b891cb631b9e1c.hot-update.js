webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/ButtonBar.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/ButtonBar.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar/ButtonBar.module.scss */ \"./styles/System/Taskbar/ButtonBar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/ButtonBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar defaultView = 'All apps';\n\nvar ButtonBar = function ButtonBar(_ref) {\n  _s();\n\n  var startButtonRef = _ref.startButtonRef,\n      buttonsRef = _ref.buttonsRef,\n      setShowMenu = _ref.setShowMenu;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_5__[\"SessionContext\"]),\n      foreground = _useContext.foreground;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_4__[\"ProcessContext\"]),\n      open = _useContext2.open;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(defaultView),\n      view = _useState[0],\n      setView = _useState[1];\n\n  var buttons = [{\n    title: 'START',\n    alt: 'Expand',\n    icon: \"\\uE700\",\n    isBold: true\n  }, {\n    title: 'All apps',\n    icon: \"\\uE179\",\n    isView: true\n  }, {\n    title: 'Documents',\n    icon: \"\\uE160\",\n    onClick: function () {\n      var _onClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(clickEvent) {\n        var processId;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return open({\n                  icon: '/icons/programs/explorer.png',\n                  name: 'Documents',\n                  url: '/docs'\n                }, {}, clickEvent.target);\n\n              case 2:\n                processId = _context.sent;\n                foreground(processId);\n                setShowMenu(false);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function onClick(_x) {\n        return _onClick.apply(this, arguments);\n      }\n\n      return onClick;\n    }()\n  }, {\n    title: 'Power',\n    icon: \"\\uE7E8\"\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ol\", {\n    className: _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n    ref: buttonsRef,\n    tabIndex: -1,\n    onMouseLeave: function onMouseLeave() {\n      var _startButtonRef$curre;\n\n      return (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n    },\n    children: buttons.map(function (_ref2) {\n      var alt = _ref2.alt,\n          icon = _ref2.icon,\n          isBold = _ref2.isBold,\n          isView = _ref2.isView,\n          title = _ref2.title,\n          onClick = _ref2.onClick;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figure\", {\n          className: view === title ? _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSelected : '',\n          onClick: isView ? function () {\n            return setView(view);\n          } : onClick,\n          tabIndex: -1,\n          title: alt || title,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n            \"data-icon\": icon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figcaption\", {\n            children: isBold ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"strong\", {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 35\n            }, _this) : title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)\n      }, title, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ButtonBar, \"8S20MLeZxX31meeAMV8uK1Z00ws=\");\n\n_c = ButtonBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"ButtonBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9CdXR0b25CYXIudHN4Pzc1ZjAiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXciLCJCdXR0b25CYXIiLCJzdGFydEJ1dHRvblJlZiIsImJ1dHRvbnNSZWYiLCJzZXRTaG93TWVudSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJQcm9jZXNzQ29udGV4dCIsIm9wZW4iLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3IiwiYnV0dG9ucyIsInRpdGxlIiwiYWx0IiwiaWNvbiIsImlzQm9sZCIsImlzVmlldyIsIm9uQ2xpY2siLCJjbGlja0V2ZW50IiwibmFtZSIsInVybCIsInRhcmdldCIsInByb2Nlc3NJZCIsInN0eWxlcyIsImN1cnJlbnQiLCJmb2N1cyIsIm1hcCIsImJ1dHRvblNlbGVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLFVBQXBCOztBQUVBLElBQU1DLFNBSUosR0FBRyxTQUpDQSxTQUlELE9BQWlEO0FBQUE7O0FBQUEsTUFBOUNDLGNBQThDLFFBQTlDQSxjQUE4QztBQUFBLE1BQTlCQyxVQUE4QixRQUE5QkEsVUFBOEI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUFBLG9CQUM3QkMsd0RBQVUsQ0FBQ0MsdUVBQUQsQ0FEbUI7QUFBQSxNQUM1Q0MsVUFENEMsZUFDNUNBLFVBRDRDOztBQUFBLHFCQUVuQ0Ysd0RBQVUsQ0FBQ0csdUVBQUQsQ0FGeUI7QUFBQSxNQUU1Q0MsSUFGNEMsZ0JBRTVDQSxJQUY0Qzs7QUFBQSxrQkFHNUJDLHNEQUFRLENBQUNWLFdBQUQsQ0FIb0I7QUFBQSxNQUc3Q1csSUFINkM7QUFBQSxNQUd2Q0MsT0FIdUM7O0FBS3BELE1BQU1DLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLFNBQUssRUFBRSxPQURUO0FBRUVDLE9BQUcsRUFBRSxRQUZQO0FBR0VDLFFBQUksRUFBRSxRQUhSO0FBSUVDLFVBQU0sRUFBRTtBQUpWLEdBRGMsRUFPZDtBQUNFSCxTQUFLLEVBQUUsVUFEVDtBQUVFRSxRQUFJLEVBQUUsUUFGUjtBQUdFRSxVQUFNLEVBQUU7QUFIVixHQVBjLEVBWWQ7QUFDRUosU0FBSyxFQUFFLFdBRFQ7QUFFRUUsUUFBSSxFQUFFLFFBRlI7QUFHRUcsV0FBTztBQUFBLHNNQUFFLGlCQUNQQyxVQURPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBR2lCWCxJQUFJLENBQzFCO0FBQ0VPLHNCQUFJLEVBQUUsOEJBRFI7QUFFRUssc0JBQUksRUFBRSxXQUZSO0FBR0VDLHFCQUFHLEVBQUU7QUFIUCxpQkFEMEIsRUFNMUIsRUFOMEIsRUFPMUJGLFVBQVUsQ0FBQ0csTUFQZSxDQUhyQjs7QUFBQTtBQUdEQyx5QkFIQztBQVlQakIsMEJBQVUsQ0FBQ2lCLFNBQUQsQ0FBVjtBQUNBcEIsMkJBQVcsQ0FBQyxLQUFELENBQVg7O0FBYk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUhULEdBWmMsRUErQmQ7QUFDRVUsU0FBSyxFQUFFLE9BRFQ7QUFFRUUsUUFBSSxFQUFFO0FBRlIsR0EvQmMsQ0FBaEI7QUFxQ0Esc0JBQ0U7QUFDRSxhQUFTLEVBQUVTLG1GQUFNLENBQUNaLE9BRHBCO0FBRUUsT0FBRyxFQUFFVixVQUZQO0FBR0UsWUFBUSxFQUFFLENBQUMsQ0FIYjtBQUlFLGdCQUFZLEVBQUU7QUFBQTs7QUFBQSxzQ0FBTUQsY0FBYyxDQUFDd0IsT0FBckIsMERBQU0sc0JBQXdCQyxLQUF4QixFQUFOO0FBQUEsS0FKaEI7QUFBQSxjQU1HZCxPQUFPLENBQUNlLEdBQVIsQ0FBWTtBQUFBLFVBQUdiLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFVBQVFDLElBQVIsU0FBUUEsSUFBUjtBQUFBLFVBQWNDLE1BQWQsU0FBY0EsTUFBZDtBQUFBLFVBQXNCQyxNQUF0QixTQUFzQkEsTUFBdEI7QUFBQSxVQUE4QkosS0FBOUIsU0FBOEJBLEtBQTlCO0FBQUEsVUFBcUNLLE9BQXJDLFNBQXFDQSxPQUFyQztBQUFBLDBCQUNYO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUFFUixJQUFJLEtBQUtHLEtBQVQsR0FBaUJXLG1GQUFNLENBQUNJLGNBQXhCLEdBQXlDLEVBRHREO0FBRUUsaUJBQU8sRUFBRVgsTUFBTSxHQUFHO0FBQUEsbUJBQU1OLE9BQU8sQ0FBQ0QsSUFBRCxDQUFiO0FBQUEsV0FBSCxHQUF5QlEsT0FGMUM7QUFHRSxrQkFBUSxFQUFFLENBQUMsQ0FIYjtBQUlFLGVBQUssRUFBRUosR0FBRyxJQUFJRCxLQUpoQjtBQUFBLGtDQU1FO0FBQU0seUJBQVdFO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFPRTtBQUFBLHNCQUFhQyxNQUFNLGdCQUFHO0FBQUEsd0JBQVNIO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBSCxHQUE4QkE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFTQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVo7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0FwRUQ7O0dBQU1iLFM7O0tBQUFBLFM7QUFzRVNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9CdXR0b25CYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9CdXR0b25CYXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgeyBQcm9jZXNzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc01hbmFnZXInO1xuaW1wb3J0IHsgU2Vzc2lvbkNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Nlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkZWZhdWx0VmlldyA9ICdBbGwgYXBwcyc7XG5cbmNvbnN0IEJ1dHRvbkJhcjogUmVhY3QuRkM8e1xuICBzdGFydEJ1dHRvblJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxCdXR0b25FbGVtZW50PjtcbiAgYnV0dG9uc1JlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxPTGlzdEVsZW1lbnQ+O1xuICBzZXRTaG93TWVudTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+XG59PiA9ICh7IHN0YXJ0QnV0dG9uUmVmLCBidXR0b25zUmVmLCBzZXRTaG93TWVudSB9KSA9PiB7XG4gIGNvbnN0IHsgZm9yZWdyb3VuZCB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IHsgb3BlbiB9ID0gdXNlQ29udGV4dChQcm9jZXNzQ29udGV4dCk7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKGRlZmF1bHRWaWV3KTtcblxuICBjb25zdCBidXR0b25zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnU1RBUlQnLFxuICAgICAgYWx0OiAnRXhwYW5kJyxcbiAgICAgIGljb246ICdcXHVlNzAwJyxcbiAgICAgIGlzQm9sZDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdBbGwgYXBwcycsXG4gICAgICBpY29uOiAnXFx1ZTE3OScsXG4gICAgICBpc1ZpZXc6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRG9jdW1lbnRzJyxcbiAgICAgIGljb246ICdcXHVlMTYwJyxcbiAgICAgIG9uQ2xpY2s6IGFzeW5jIChcbiAgICAgICAgY2xpY2tFdmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD5cbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzSWQgPSBhd2FpdCBvcGVuKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246ICcvaWNvbnMvcHJvZ3JhbXMvZXhwbG9yZXIucG5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdEb2N1bWVudHMnLFxuICAgICAgICAgICAgdXJsOiAnL2RvY3MnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBjbGlja0V2ZW50LnRhcmdldFxuICAgICAgICApO1xuICAgICAgICBmb3JlZ3JvdW5kKHByb2Nlc3NJZCk7XG4gICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUG93ZXInLFxuICAgICAgaWNvbjogJ1xcdWU3ZTgnXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPG9sXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfVxuICAgICAgcmVmPXtidXR0b25zUmVmfVxuICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzdGFydEJ1dHRvblJlZi5jdXJyZW50Py5mb2N1cygpfVxuICAgID5cbiAgICAgIHtidXR0b25zLm1hcCgoeyBhbHQsIGljb24sIGlzQm9sZCwgaXNWaWV3LCB0aXRsZSwgb25DbGljayB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3RpdGxlfT5cbiAgICAgICAgICA8ZmlndXJlXG4gICAgICAgICAgICBjbGFzc05hbWU9e3ZpZXcgPT09IHRpdGxlID8gc3R5bGVzLmJ1dHRvblNlbGVjdGVkIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXtpc1ZpZXcgPyAoKSA9PiBzZXRWaWV3KHZpZXcpIDogb25DbGlja31cbiAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgIHRpdGxlPXthbHQgfHwgdGl0bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1pY29uPXtpY29ufSAvPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+e2lzQm9sZCA/IDxzdHJvbmc+e3RpdGxlfTwvc3Ryb25nPiA6IHRpdGxlfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvb2w+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25CYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Taskbar/ButtonBar.tsx\n");

/***/ })

})