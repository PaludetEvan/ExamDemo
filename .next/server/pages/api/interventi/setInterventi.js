"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/interventi/setInterventi";
exports.ids = ["pages/api/interventi/setInterventi"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Finterventi%2FsetInterventi&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cinterventi%5CsetInterventi.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Finterventi%2FsetInterventi&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cinterventi%5CsetInterventi.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_interventi_setInterventi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\interventi\\setInterventi.js */ \"(api)/./pages/api/interventi/setInterventi.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_interventi_setInterventi_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_interventi_setInterventi_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/interventi/setInterventi\",\n        pathname: \"/api/interventi/setInterventi\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_interventi_setInterventi_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmludGVydmVudGklMkZzZXRJbnRlcnZlbnRpJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUNpbnRlcnZlbnRpJTVDc2V0SW50ZXJ2ZW50aS5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUN1RTtBQUN2RTtBQUNBLGlFQUFlLHdFQUFLLENBQUMsbUVBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLG1FQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZS1lc2FtZS8/NzA2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGludGVydmVudGlcXFxcc2V0SW50ZXJ2ZW50aS5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2ludGVydmVudGkvc2V0SW50ZXJ2ZW50aVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2ludGVydmVudGkvc2V0SW50ZXJ2ZW50aVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Finterventi%2FsetInterventi&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cinterventi%5CsetInterventi.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/interventi/setInterventi.js":
/*!***********************************************!*\
  !*** ./pages/api/interventi/setInterventi.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _src_config_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/config/db.js */ \"(api)/./src/config/db.js\");\n/* harmony import */ var _src_config_db_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_config_db_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const { dettagli, indirizzo, tipologia } = req.body;\n    let client;\n    try {\n        client = await _src_config_db_js__WEBPACK_IMPORTED_MODULE_0___default().connect();\n        const queryString = \"INSERT INTO interventi (dettagli, indirizzo, tipologia) VALUES ($1, $2, $3) RETURNING *\";\n        const values = [\n            dettagli,\n            indirizzo,\n            tipologia\n        ];\n        const result = await client.query(queryString, values);\n        res.status(200).json({\n            success: true,\n            data: result.rows[0]\n        });\n    } catch (error) {\n        console.error(\"Errore nel comunicare con il db\", error);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    } finally{\n        if (client) {\n            client.release();\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW50ZXJ2ZW50aS9zZXRJbnRlcnZlbnRpLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU5QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQUdKLElBQUlLLElBQUk7SUFFbkQsSUFBSUM7SUFDSixJQUFJO1FBQ0FBLFNBQVMsTUFBTVIsZ0VBQVk7UUFDM0IsTUFBTVUsY0FBYztRQUNwQixNQUFNQyxTQUFTO1lBQUNQO1lBQVVDO1lBQVdDO1NBQVU7UUFDL0MsTUFBTU0sU0FBUyxNQUFNSixPQUFPSyxLQUFLLENBQUNILGFBQWFDO1FBRS9DUixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7WUFBTUMsTUFBTUwsT0FBT00sSUFBSSxDQUFDLEVBQUU7UUFBQztJQUMvRCxFQUFFLE9BQU9DLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7UUFDakRoQixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVJLE9BQU87UUFBd0I7SUFDMUQsU0FBVTtRQUNOLElBQUlYLFFBQVE7WUFDUkEsT0FBT2EsT0FBTztRQUNsQjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmUtZXNhbWUvLi9wYWdlcy9hcGkvaW50ZXJ2ZW50aS9zZXRJbnRlcnZlbnRpLmpzPzY2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvb2wgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbmZpZy9kYi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGRldHRhZ2xpLCBpbmRpcml6em8sIHRpcG9sb2dpYSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgbGV0IGNsaWVudDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY2xpZW50ID0gYXdhaXQgcG9vbC5jb25uZWN0KCk7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSAnSU5TRVJUIElOVE8gaW50ZXJ2ZW50aSAoZGV0dGFnbGksIGluZGlyaXp6bywgdGlwb2xvZ2lhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFJFVFVSTklORyAqJztcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbZGV0dGFnbGksIGluZGlyaXp6bywgdGlwb2xvZ2lhXTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlTdHJpbmcsIHZhbHVlcyk7XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LnJvd3NbMF0gfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yZSBuZWwgY29tdW5pY2FyZSBjb24gaWwgZGInLCBlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmIChjbGllbnQpIHtcclxuICAgICAgICAgICAgY2xpZW50LnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInBvb2wiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGV0dGFnbGkiLCJpbmRpcml6em8iLCJ0aXBvbG9naWEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsInF1ZXJ5U3RyaW5nIiwidmFsdWVzIiwicmVzdWx0IiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJyb3dzIiwiZXJyb3IiLCJjb25zb2xlIiwicmVsZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/interventi/setInterventi.js\n");

/***/ }),

/***/ "(api)/./src/config/db.js":
/*!**************************!*\
  !*** ./src/config/db.js ***!
  \**************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _pg = __webpack_require__(/*! pg */ \"pg\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst pool = new _pg.Pool({\n    // user: process.env.RDS_USER,\n    // host: process.env.RDS_HOSTNAME,\n    // database: process.env.RDS_DB_NAME,\n    // password:process.env.RDS_PASSWORD,\n    // port:process.env.RDS_PORT,\n    connectionString: process.env.POSTGRES_URL\n});\nmodule.exports = pool;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uZmlnL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Z0NBQXFCO0FBQ3JCQSxvREFBd0I7QUFFeEIsTUFBTUUsT0FBTyxJQUFJQyxRQUFJLENBQUM7SUFDbEIsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUU3QkMsa0JBQWtCQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFFOUM7QUFFQUMsT0FBT0MsT0FBTyxHQUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZS1lc2FtZS8uL3NyYy9jb25maWcvZGIuanM/MjdjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sIH0gZnJvbSAncGcnXHJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcblxyXG5jb25zdCBwb29sID0gbmV3IFBvb2woe1xyXG4gICAgLy8gdXNlcjogcHJvY2Vzcy5lbnYuUkRTX1VTRVIsXHJcbiAgICAvLyBob3N0OiBwcm9jZXNzLmVudi5SRFNfSE9TVE5BTUUsXHJcbiAgICAvLyBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUkRTX0RCX05BTUUsXHJcbiAgICAvLyBwYXNzd29yZDpwcm9jZXNzLmVudi5SRFNfUEFTU1dPUkQsXHJcbiAgICAvLyBwb3J0OnByb2Nlc3MuZW52LlJEU19QT1JULFxyXG5cclxuICAgIGNvbm5lY3Rpb25TdHJpbmc6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VSTCxcclxuICAgIFxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwb29sIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJwb29sIiwiUG9vbCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfVVJMIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/config/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Finterventi%2FsetInterventi&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cinterventi%5CsetInterventi.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();