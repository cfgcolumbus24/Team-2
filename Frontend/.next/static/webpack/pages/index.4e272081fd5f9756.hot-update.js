"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [profiles, setProfiles] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');\n    // Fetch profiles from the API when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch('/api/profiles').then((response)=>response.json()).then((data)=>{\n            setProfiles(data);\n            setLoading(false);\n        }).catch((error)=>{\n            console.error('Error fetching profiles:', error);\n            setError('Failed to fetch profiles');\n            setLoading(false);\n        });\n    }, []);\n    // Filter profiles based on search input\n    const filteredProfiles = profiles.filter((profile)=>profile.name.toLowerCase().includes(search.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-fd2e1420efdb1639\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container) || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        className: \"jsx-fd2e1420efdb1639\",\n                        children: \"User Profiles\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-fd2e1420efdb1639\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-fd2e1420efdb1639\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-fd2e1420efdb1639\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title) || \"\"),\n                        children: \"User Profiles\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search profiles...\",\n                        value: search,\n                        onChange: (e)=>setSearch(e.target.value),\n                        className: \"jsx-fd2e1420efdb1639\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().search) || \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-fd2e1420efdb1639\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().error) || \"\"),\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 19\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-fd2e1420efdb1639\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().description) || \"\"),\n                        children: \"Loading profiles...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-fd2e1420efdb1639\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid) || \"\"),\n                        children: filteredProfiles.map((profile)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-fd2e1420efdb1639\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card) || \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: profile.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: [\n                                            \"Email: \",\n                                            profile.email\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: [\n                                            \"Role: \",\n                                            profile.role\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: [\n                                            \"Age: \",\n                                            profile.age\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: [\n                                            \"Height: \",\n                                            profile.height\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: [\n                                            \"Weight: \",\n                                            profile.weight\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: [\n                                            \"Summary: \",\n                                            profile.summary\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this),\n                                    profile.conditions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: [\n                                            \"Conditions: \",\n                                            profile.conditions.join(', ')\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, this),\n                                    profile.notes.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: [\n                                            \"Notes: \",\n                                            profile.notes.join('. ')\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 19\n                                    }, this),\n                                    profile.tasks.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-fd2e1420efdb1639\",\n                                        children: [\n                                            \"Tasks: \",\n                                            profile.tasks.join(', ')\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, profile.id, true, {\n                                fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"jsx-fd2e1420efdb1639\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    className: \"jsx-fd2e1420efdb1639\",\n                    children: [\n                        \"Powered by\",\n                        ' ',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/vercel.svg\",\n                            alt: \"Vercel\",\n                            className: \"jsx-fd2e1420efdb1639\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo) || \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"9926dfbd6d5aa5e5\",\n                children: \"main.jsx-fd2e1420efdb1639{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.search.jsx-fd2e1420efdb1639{margin-bottom:2rem;padding:.5rem;font-size:1rem}.error.jsx-fd2e1420efdb1639{color:red;margin-bottom:1rem}.grid.jsx-fd2e1420efdb1639{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem}.card.jsx-fd2e1420efdb1639{margin:1rem;padding:1.5rem;text-align:left;color:inherit;text-decoration:none;border:1px solid#eaeaea;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:color.15s ease,border-color.15s ease;-moz-transition:color.15s ease,border-color.15s ease;-o-transition:color.15s ease,border-color.15s ease;transition:color.15s ease,border-color.15s ease;max-width:300px}.card.jsx-fd2e1420efdb1639:hover,.card.jsx-fd2e1420efdb1639:focus,.card.jsx-fd2e1420efdb1639:active{color:#0070f3;border-color:#0070f3}.card.jsx-fd2e1420efdb1639 h3.jsx-fd2e1420efdb1639{margin:0 0 1rem 0;font-size:1.5rem}.card.jsx-fd2e1420efdb1639 p.jsx-fd2e1420efdb1639{margin:0;font-size:1.25rem;line-height:1.5}footer.jsx-fd2e1420efdb1639{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-fd2e1420efdb1639 img.jsx-fd2e1420efdb1639{margin-left:.5rem}footer.jsx-fd2e1420efdb1639 a.jsx-fd2e1420efdb1639{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;color:inherit}\"\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f45533f31dc7e751\",\n                children: \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aidenballou/Desktop/Team-2/Frontend/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OcjwChYJsOriQ/Xmr+VK4Bdn2eA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBdUI1Qiw4REFBQ0M7OzBCQUNDLDRFQUFDQztvQkFDQzdCLE1BQUs7b0JBQ0xTLFFBQU87b0JBQ1BWLEtBQUk7Ozt3QkFDTDt3QkFDWTtzQ0FDWCw4REFBQytCOzRCQUFJQyxLQUFJOzRCQUFjQyxLQUFJO3VFQUFvQjlELHFFQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0dwRTtHQWxMd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwcm9maWxlcywgc2V0UHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBGZXRjaCBwcm9maWxlcyBmcm9tIHRoZSBBUEkgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvYXBpL3Byb2ZpbGVzJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UHJvZmlsZXMoZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZmlsZXM6JywgZXJyb3IpO1xuICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGZldGNoIHByb2ZpbGVzJyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBGaWx0ZXIgcHJvZmlsZXMgYmFzZWQgb24gc2VhcmNoIGlucHV0XG4gIGNvbnN0IGZpbHRlcmVkUHJvZmlsZXMgPSBwcm9maWxlcy5maWx0ZXIoKHByb2ZpbGUpID0+XG4gICAgcHJvZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlVzZXIgUHJvZmlsZXM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlVzZXIgUHJvZmlsZXM8L2gxPlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBwcm9maWxlcy4uLlwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofVxuICAgICAgICAvPlxuXG4gICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e2Vycm9yfTwvcD59XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5Mb2FkaW5nIHByb2ZpbGVzLi4uPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgICB7ZmlsdGVyZWRQcm9maWxlcy5tYXAoKHByb2ZpbGUpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2ZpbGUuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICAgIDxoMz57cHJvZmlsZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+RW1haWw6IHtwcm9maWxlLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5Sb2xlOiB7cHJvZmlsZS5yb2xlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5BZ2U6IHtwcm9maWxlLmFnZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+SGVpZ2h0OiB7cHJvZmlsZS5oZWlnaHR9PC9wPlxuICAgICAgICAgICAgICAgIDxwPldlaWdodDoge3Byb2ZpbGUud2VpZ2h0fTwvcD5cbiAgICAgICAgICAgICAgICA8cD5TdW1tYXJ5OiB7cHJvZmlsZS5zdW1tYXJ5fTwvcD5cbiAgICAgICAgICAgICAgICB7cHJvZmlsZS5jb25kaXRpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+Q29uZGl0aW9uczoge3Byb2ZpbGUuY29uZGl0aW9ucy5qb2luKCcsICcpfTwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtwcm9maWxlLm5vdGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHA+Tm90ZXM6IHtwcm9maWxlLm5vdGVzLmpvaW4oJy4gJyl9PC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3Byb2ZpbGUudGFza3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cD5UYXNrczoge3Byb2ZpbGUudGFza3Muam9pbignLCAnKX08L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXsnICd9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbFwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OlxuICAgICAgICAgICAgLWFwcGxlLXN5c3RlbSxcbiAgICAgICAgICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICAgICAgICAgIFNlZ29lIFVJLFxuICAgICAgICAgICAgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLFxuICAgICAgICAgICAgVWJ1bnR1LFxuICAgICAgICAgICAgQ2FudGFyZWxsLFxuICAgICAgICAgICAgRmlyYSBTYW5zLFxuICAgICAgICAgICAgRHJvaWQgU2FucyxcbiAgICAgICAgICAgIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJwcm9maWxlcyIsInNldFByb2ZpbGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiY29uc29sZSIsImZpbHRlcmVkUHJvZmlsZXMiLCJmaWx0ZXIiLCJwcm9maWxlIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJjb250YWluZXIiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInAiLCJkZXNjcmlwdGlvbiIsImdyaWQiLCJtYXAiLCJjYXJkIiwiaDMiLCJlbWFpbCIsInJvbGUiLCJhZ2UiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJzdW1tYXJ5IiwiY29uZGl0aW9ucyIsImxlbmd0aCIsImpvaW4iLCJub3RlcyIsInRhc2tzIiwiaWQiLCJmb290ZXIiLCJhIiwiaW1nIiwic3JjIiwiYWx0IiwibG9nbyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});