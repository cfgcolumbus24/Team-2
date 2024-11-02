"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/clinical",{

/***/ "./pages/clinical.js":
/*!***************************!*\
  !*** ./pages/clinical.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (/* binding */ Clinical)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement);\nvar __N_SSP = true;\nfunction Clinical(param) {\n    let { initialPatients } = param;\n    _s();\n    const [filteredPatients, setFilteredPatients] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialPatients);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const [diagnosis, setDiagnosis] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const [lastUpdated, setLastUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date());\n    const [queryResponse, setQueryResponse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const handleSearch = (event)=>{\n        setSearch(event.target.value);\n        filterPatients();\n    };\n    const handleDiagnosisFilter = (event)=>{\n        setDiagnosis(event.target.value);\n        filterPatients();\n    };\n    const filterPatients = ()=>{\n        setFilteredPatients(initialPatients.filter((patient)=>patient.Name.toLowerCase().includes(search.toLowerCase()) && patient.Diagnosis.toLowerCase().includes(diagnosis.toLowerCase())));\n    };\n    const data = {\n        labels: [\n            '6 days ago',\n            '5 days ago',\n            '4 days ago',\n            '3 days ago',\n            '2 days ago',\n            '1 day ago',\n            'Today'\n        ],\n        datasets: [\n            {\n                label: 'Patients Seen',\n                data: [\n                    5,\n                    6,\n                    8,\n                    7,\n                    4,\n                    3,\n                    9\n                ],\n                borderColor: 'rgb(75, 192, 192)',\n                tension: 0.1\n            }\n        ]\n    };\n    const barData = {\n        labels: [\n            'Condition A',\n            'Condition B',\n            'Condition C'\n        ],\n        datasets: [\n            {\n                label: 'Cases',\n                data: [\n                    20,\n                    10,\n                    15\n                ],\n                backgroundColor: 'rgb(54, 162, 235)'\n            }\n        ]\n    };\n    const handleQuery = async (question)=>{\n        try {\n            // const response = await openai.createCompletion({ model: \"text-davinci-003\", prompt: question });\n            setQueryResponse(\"\");\n        } catch (error) {\n            console.error(\"Failed to fetch query response:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboard-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"graph-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Clinician Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"graph-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                                data: data\n                            }, void 0, false, {\n                                fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n                                data: barData\n                            }, void 0, false, {\n                                fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"last-updated\",\n                        children: [\n                            \"Last Updated: \",\n                            lastUpdated.toLocaleString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"patients-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search by patient name\",\n                        value: search,\n                        onChange: handleSearch,\n                        className: \"search-bar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by diagnosis\",\n                        value: diagnosis,\n                        onChange: handleDiagnosisFilter,\n                        className: \"filter-bar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Patients List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"patients-list\",\n                        children: filteredPatients.map((patient, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"patient-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/patient/\".concat(index),\n                                    children: [\n                                        patient.Name,\n                                        \" - Age: \",\n                                        patient.Age,\n                                        \" - Diagnosis: \",\n                                        patient.Diagnosis\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"llm-query\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Natural Language Query\"\n                    }, void 0, false, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Ask about patient data\",\n                        onKeyDown: (e)=>e.key === 'Enter' && handleQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: queryResponse\n                    }, void 0, false, {\n                        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/devsog12/Projects/Team-2/Frontend/pages/clinical.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(Clinical, \"hIoqKTWnBD2a168iD2eGvHgrxqI=\");\n_c = Clinical;\nvar _c;\n$RefreshReg$(_c, \"Clinical\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDNUIsU0FBUzZCLHNCQUM5Qiw4REFBQ0M7Z0NBQWVaLFdBQVU7MENBQ3hCLDRFQUFDcEQsa0RBQUlBO29DQUFDaUUsTUFBTSxZQUFrQixPQUFORjs7d0NBQ3JCN0IsUUFBUUMsSUFBSTt3Q0FBQzt3Q0FBU0QsUUFBUWdDLEdBQUc7d0NBQUM7d0NBQWVoQyxRQUFRSSxTQUFTOzs7Ozs7OytCQUY5RHlCOzs7Ozs7Ozs7Ozs7Ozs7OzBCQVFmLDhEQUFDWjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNRO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNKO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaUyxXQUFXLENBQUNDLElBQU1BLEVBQUVDLEdBQUcsS0FBSyxXQUFXdEIsWUFBWXFCLEVBQUV2QyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FFbkUsOERBQUN3QjtrQ0FBRzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWjtHQXBGd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2xpbmljYWwuanM/ZGI0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTGluZSwgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIExpbmVFbGVtZW50LCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgUG9pbnRFbGVtZW50LCBCYXJFbGVtZW50IH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tICdvcGVuYWknO1xuXG5DaGFydEpTLnJlZ2lzdGVyKExpbmVFbGVtZW50LCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgUG9pbnRFbGVtZW50LCBCYXJFbGVtZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpbmljYWwoeyBpbml0aWFsUGF0aWVudHMgfSkge1xuICBjb25zdCBbZmlsdGVyZWRQYXRpZW50cywgc2V0RmlsdGVyZWRQYXRpZW50c10gPSB1c2VTdGF0ZShpbml0aWFsUGF0aWVudHMpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGlhZ25vc2lzLCBzZXREaWFnbm9zaXNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGFzdFVwZGF0ZWQsIHNldExhc3RVcGRhdGVkXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICBjb25zdCBbcXVlcnlSZXNwb25zZSwgc2V0UXVlcnlSZXNwb25zZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgZmlsdGVyUGF0aWVudHMoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEaWFnbm9zaXNGaWx0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICBzZXREaWFnbm9zaXMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBmaWx0ZXJQYXRpZW50cygpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlclBhdGllbnRzID0gKCkgPT4ge1xuICAgIHNldEZpbHRlcmVkUGF0aWVudHMoXG4gICAgICBpbml0aWFsUGF0aWVudHMuZmlsdGVyKChwYXRpZW50KSA9PlxuICAgICAgICBwYXRpZW50Lk5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgJiZcbiAgICAgICAgcGF0aWVudC5EaWFnbm9zaXMudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkaWFnbm9zaXMudG9Mb3dlckNhc2UoKSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBbJzYgZGF5cyBhZ28nLCAnNSBkYXlzIGFnbycsICc0IGRheXMgYWdvJywgJzMgZGF5cyBhZ28nLCAnMiBkYXlzIGFnbycsICcxIGRheSBhZ28nLCAnVG9kYXknXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAgeyBsYWJlbDogJ1BhdGllbnRzIFNlZW4nLCBkYXRhOiBbNSwgNiwgOCwgNywgNCwgMywgOV0sIGJvcmRlckNvbG9yOiAncmdiKDc1LCAxOTIsIDE5MiknLCB0ZW5zaW9uOiAwLjEgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IGJhckRhdGEgPSB7XG4gICAgbGFiZWxzOiBbJ0NvbmRpdGlvbiBBJywgJ0NvbmRpdGlvbiBCJywgJ0NvbmRpdGlvbiBDJ10sXG4gICAgZGF0YXNldHM6IFt7IGxhYmVsOiAnQ2FzZXMnLCBkYXRhOiBbMjAsIDEwLCAxNV0sIGJhY2tncm91bmRDb2xvcjogJ3JnYig1NCwgMTYyLCAyMzUpJyB9XSxcbiAgfTtcblxuXG5cbiAgY29uc3QgaGFuZGxlUXVlcnkgPSBhc3luYyAocXVlc3Rpb24pID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7IG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIiwgcHJvbXB0OiBxdWVzdGlvbiB9KTtcbiAgICAgIHNldFF1ZXJ5UmVzcG9uc2UoXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggcXVlcnkgcmVzcG9uc2U6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhcGgtc2VjdGlvblwiPlxuICAgICAgICA8aDE+Q2xpbmljaWFuIERhc2hib2FyZDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhcGgtY29udGFpbmVyXCI+XG4gICAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICA8QmFyIGRhdGE9e2JhckRhdGF9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsYXN0LXVwZGF0ZWRcIj5MYXN0IFVwZGF0ZWQ6IHtsYXN0VXBkYXRlZC50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXRpZW50cy1zZWN0aW9uXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHBhdGllbnQgbmFtZVwiIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9IGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBkaWFnbm9zaXNcIiB2YWx1ZT17ZGlhZ25vc2lzfSBvbkNoYW5nZT17aGFuZGxlRGlhZ25vc2lzRmlsdGVyfSBjbGFzc05hbWU9XCJmaWx0ZXItYmFyXCIgLz5cbiAgICAgICAgPGgyPlBhdGllbnRzIExpc3Q8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGF0aWVudHMtbGlzdFwiPlxuICAgICAgICAgIHtmaWx0ZXJlZFBhdGllbnRzLm1hcCgocGF0aWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJwYXRpZW50LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wYXRpZW50LyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAge3BhdGllbnQuTmFtZX0gLSBBZ2U6IHtwYXRpZW50LkFnZX0gLSBEaWFnbm9zaXM6IHtwYXRpZW50LkRpYWdub3Npc31cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsbG0tcXVlcnlcIj5cbiAgICAgICAgPGgyPk5hdHVyYWwgTGFuZ3VhZ2UgUXVlcnk8L2gyPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc2sgYWJvdXQgcGF0aWVudCBkYXRhXCJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiBlLmtleSA9PT0gJ0VudGVyJyAmJiBoYW5kbGVRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxwPntxdWVyeVJlc3BvbnNlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9lYzItMy05MS0xNDgtMTc5LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjMwMDAvZGF0YS9wYXRpZW50Jyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4geyBwcm9wczogeyBpbml0aWFsUGF0aWVudHM6IGRhdGEgfSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggcGF0aWVudCBkYXRhOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgaW5pdGlhbFBhdGllbnRzOiBbXSB9IH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiTGluZSIsIkJhciIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkxpbmVFbGVtZW50IiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiQmFyRWxlbWVudCIsInVzZVN0YXRlIiwiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsInJlZ2lzdGVyIiwiQ2xpbmljYWwiLCJpbml0aWFsUGF0aWVudHMiLCJmaWx0ZXJlZFBhdGllbnRzIiwic2V0RmlsdGVyZWRQYXRpZW50cyIsInNlYXJjaCIsInNldFNlYXJjaCIsImRpYWdub3NpcyIsInNldERpYWdub3NpcyIsImxhc3RVcGRhdGVkIiwic2V0TGFzdFVwZGF0ZWQiLCJEYXRlIiwicXVlcnlSZXNwb25zZSIsInNldFF1ZXJ5UmVzcG9uc2UiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyUGF0aWVudHMiLCJoYW5kbGVEaWFnbm9zaXNGaWx0ZXIiLCJmaWx0ZXIiLCJwYXRpZW50IiwiTmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJEaWFnbm9zaXMiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJvcmRlckNvbG9yIiwidGVuc2lvbiIsImJhckRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVRdWVyeSIsInF1ZXN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwidG9Mb2NhbGVTdHJpbmciLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiaDIiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJocmVmIiwiQWdlIiwib25LZXlEb3duIiwiZSIsImtleSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/clinical.js\n"));

/***/ })

});