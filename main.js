/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Helvetica Neue', Arial, sans-serif;\r\n    line-height: 1.6;\r\n    color: #333;\r\n    background-color: #fafafa;\r\n}\r\n\r\nheader {\r\n    background-color: #fff;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 1000;\r\n}\r\n\r\nnav {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 1rem;\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\nnav button {\r\n    padding: 0.75rem 1.5rem;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    border-radius: 4px;\r\n    color: #666;\r\n}\r\n\r\nnav button:hover {\r\n    background-color: #f0f0f0;\r\n    color: #333;\r\n}\r\n\r\nnav button.active {\r\n    background-color: #4a90e2;\r\n    color: white;\r\n}\r\n\r\n/* Content Area */\r\n#content {\r\n    max-width: 1200px;\r\n    margin: 80px auto 2rem;\r\n    padding: 0 1rem;\r\n    min-height: calc(100vh - 80px);\r\n}\r\n\r\n.restaurant-headline {\r\n    font-size: 2.5rem;\r\n    color: #2c3e50;\r\n    margin: 4rem 0 2rem;\r\n    text-align: center;\r\n    padding-top: 1rem;\r\n}\r\n\r\n.restaurant-image {\r\n    width: 100%;\r\n    max-width: 800px;\r\n    height: 400px;\r\n    display: block;\r\n    margin: 2rem auto;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    object-fit: cover;\r\n}\r\n\r\n.restaurant-description {\r\n    font-size: 1.1rem;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    text-align: justify;\r\n    padding: 1rem;\r\n}\r\n\r\n/* Menu Page Styles */\r\n.menu-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.menu-headline {\r\n    font-size: 2.5rem;\r\n    color: #2c3e50;\r\n    margin-bottom: 2rem;\r\n    text-align: center;\r\n    grid-column: 1 / -1;\r\n}\r\n\r\n.menu-item {\r\n    background: white;\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    display: flex;\r\n    flex-direction: column;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.menu-item:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.dish-name {\r\n    font-size: 1.5rem;\r\n    color: #2c3e50;\r\n    margin: 1rem;\r\n}\r\n\r\n.dish-description {\r\n    color: #666;\r\n    margin: 0 1rem;\r\n    flex-grow: 1;\r\n    font-size: 0.95rem;\r\n    line-height: 1.6;\r\n}\r\n\r\n.dish-price {\r\n    font-size: 1.25rem;\r\n    color: #4a90e2;\r\n    font-weight: bold;\r\n    margin: 1rem;\r\n}\r\n\r\n.dish-image {\r\n    width: 100%;\r\n    height: 200px;\r\n    object-fit: cover;\r\n    display: block;\r\n}\r\n\r\n/* About Us Page Styles */\r\n.about-us-container {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.about-us-headline {\r\n    font-size: 2.5rem;\r\n    color: #2c3e50;\r\n    margin-bottom: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n.about-us-description,\r\n.about-us-mission {\r\n    font-size: 1.1rem;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    margin-bottom: 2rem;\r\n    text-align: justify;\r\n}\r\n\r\n.about-us-image {\r\n    width: 100%;\r\n    height: 400px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    margin: 2rem 0;\r\n    object-fit: cover;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n#content>* {\r\n    animation: fadeIn 0.5s ease-out;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    nav {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n    }\r\n\r\n    .menu-container {\r\n        grid-template-columns: 1fr;\r\n        gap: 1.5rem;\r\n        padding: 1rem;\r\n    }\r\n\r\n    .menu-item {\r\n        max-width: 400px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .dish-name {\r\n        font-size: 1.25rem;\r\n    }\r\n\r\n    .about-us-container {\r\n        padding: 1rem;\r\n    }\r\n\r\n    .about-us-headline,\r\n    .menu-headline,\r\n    .restaurant-headline {\r\n        font-size: 2rem;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAboutUs)\n/* harmony export */ });\nfunction loadAboutUs() {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n    contentDiv.innerHTML = \"\";\r\n\r\n    const aboutUsDiv = document.createElement(\"div\");\r\n    aboutUsDiv.classList.add(\"about-us-container\");\r\n\r\n    const headline = document.createElement(\"h1\");\r\n    headline.textContent = \"About Us\";\r\n    headline.classList.add(\"about-us-headline\");\r\n\r\n    const description = document.createElement(\"p\");\r\n    description.classList.add(\"about-us-description\");\r\n    description.textContent = \"Gourmet Haven was founded with the goal of offering a place where culinary excellence meets a warm, welcoming atmosphere. Our team is passionate about creating dishes that not only tantalize the taste buds but also tell a story of tradition, love, and creativity. From farm-to-table ingredients to innovative recipes, we strive to make every meal a memorable experience for our guests.\";\r\n\r\n    const mission = document.createElement(\"p\");\r\n    mission.classList.add(\"about-us-mission\");\r\n    mission.textContent = \"Our mission is simple: to provide exceptional food, exceptional service, and an exceptional experience. Whether you're dining with friends, family, or colleagues, we want every visit to be a celebration of food and community.\";\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.classList.add(\"about-us-image\");\r\n    image.src = \"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop\";\r\n    image.alt = \"About Us image\";\r\n\r\n    aboutUsDiv.appendChild(headline);\r\n    aboutUsDiv.appendChild(description);\r\n    aboutUsDiv.appendChild(mission);\r\n    aboutUsDiv.appendChild(image);\r\n\r\n    contentDiv.appendChild(aboutUsDiv);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutUs.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n\r\n    const contentDiv = document.querySelector(\"#content\");\r\n    contentDiv.innerHTML = \"\";\r\n\r\n    const headline = document.createElement(\"h1\");\r\n    headline.textContent = \"Welcome to our restaurant!\";\r\n    headline.classList.add(\"restaurant-headline\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.classList.add(\"restaurant-image\");\r\n    image.src = \"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop\";\r\n    image.alt = \"Restaurant image\";\r\n\r\n    const description = document.createElement(\"p\");\r\n    description.classList.add(\"restaurant-description\");\r\n    description.textContent = \"Welcome to Gourmet Haven, where every meal is a celebration of flavor and tradition. Nestled in the heart of the city, our restaurant offers a cozy ambiance perfect for family dinners, romantic evenings, or casual gatherings with friends. Our chefs craft each dish with passion, using only the freshest ingredients sourced from local farms. From mouth-watering appetizers to decadent desserts, every bite tells a story of culinary excellence. Whether you're here for our signature dishes, a glass of fine wine, or just to enjoy the warm atmosphere, we promise an unforgettable dining experience. Come, savor the taste of perfection at Gourmet Haven!\";\r\n\r\n    contentDiv.appendChild(headline);\r\n    contentDiv.appendChild(image);\r\n    contentDiv.appendChild(description);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutUs */ \"./src/aboutUs.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\nconst homeButton = document.querySelector(\"#home-btn\");\r\nconst menuButton = document.querySelector(\"#menu-btn\");\r\nconst aboutUsButton = document.querySelector(\"#about-us-btn\");\r\n\r\nfunction setActiveButton(button) {\r\n    homeButton.classList.remove(\"active\");\r\n    menuButton.classList.remove(\"active\");\r\n    aboutUsButton.classList.remove(\"active\");\r\n\r\n    button.classList.add(\"active\");\r\n}\r\n\r\nhomeButton.addEventListener(\"click\", () => {\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    setActiveButton(homeButton);\r\n});\r\n\r\nmenuButton.addEventListener(\"click\", () => {\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    setActiveButton(menuButton);\r\n});\r\n\r\naboutUsButton.addEventListener(\"click\", () => {\r\n    (0,_aboutUs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    setActiveButton(aboutUsButton);\r\n});\r\n\r\nwindow.onload = () => {\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\nfunction handleImageLoad() {\r\n    document.querySelectorAll('img').forEach(img => {\r\n        img.addEventListener('load', function () {\r\n            this.classList.add('loaded');\r\n        });\r\n    });\r\n}\r\n\r\nwindow.addEventListener('DOMContentLoaded', handleImageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n    contentDiv.innerHTML = \"\";\r\n\r\n    const menuDiv = document.createElement(\"div\");\r\n    menuDiv.classList.add(\"menu-container\");\r\n\r\n    const headline = document.createElement(\"h1\");\r\n    headline.textContent = \"Our Menu\";\r\n    headline.classList.add(\"menu-headline\");\r\n    menuDiv.appendChild(headline);\r\n\r\n    const dishes = [\r\n        {\r\n            name: \"Gourmet Burger\",\r\n            description: \"A juicy beef patty with fresh lettuce, tomato, and our special sauce.\",\r\n            price: \"$12.99\",\r\n            image: \"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop\"\r\n        },\r\n        {\r\n            name: \"Vegan Salad\",\r\n            description: \"A healthy mix of organic greens, quinoa, and a tangy lemon dressing.\",\r\n            price: \"$9.99\",\r\n            image: \"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop\"\r\n        },\r\n        {\r\n            name: \"Grilled Salmon\",\r\n            description: \"Fresh salmon grilled to perfection, served with roasted vegetables.\",\r\n            price: \"$18.99\",\r\n            image: \"https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=500&h=400&fit=crop\"\r\n        },\r\n        {\r\n            name: \"Pasta Primavera\",\r\n            description: \"A delicious pasta with seasonal vegetables and a garlic-butter sauce.\",\r\n            price: \"$14.99\",\r\n            image: \"https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500&h=400&fit=crop\"\r\n        },\r\n        {\r\n            name: \"Chicken Parmesan\",\r\n            description: \"Breaded chicken breast topped with marinara sauce and melted mozzarella.\",\r\n            price: \"$16.99\",\r\n            image: \"https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&h=400&fit=crop\"\r\n        },\r\n        {\r\n            name: \"Steak Frites\",\r\n            description: \"A tender sirloin steak served with crispy fries and a side of béarnaise sauce.\",\r\n            price: \"$22.99\",\r\n            image: \"https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=400&fit=crop\"\r\n        },\r\n        {\r\n            name: \"Caesar Salad\",\r\n            description: \"Crisp romaine lettuce with Caesar dressing, croutons, and grated Parmesan.\",\r\n            price: \"$8.99\",\r\n            image: \"https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&h=400&fit=crop\"\r\n        },\r\n        {\r\n            name: \"Lobster Roll\",\r\n            description: \"Fresh lobster mixed with a creamy dressing, served in a buttery roll.\",\r\n            price: \"$24.99\",\r\n            image: \"https://images.unsplash.com/photo-1599789197514-47270cd526b4?w=500&h=400&fit=crop\"\r\n        },\r\n        {\r\n            name: \"Margherita Pizza\",\r\n            description: \"Classic pizza with fresh tomatoes, mozzarella, and basil leaves.\",\r\n            price: \"$13.99\",\r\n            image: \"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=400&fit=crop\"\r\n        },\r\n        {\r\n            name: \"Chocolate Lava Cake\",\r\n            description: \"A warm, gooey chocolate cake with a molten center, served with vanilla ice cream.\",\r\n            price: \"$6.99\",\r\n            image: \"https://images.unsplash.com/photo-1623246123320-0d6636755796?w=500&h=400&fit=crop\"\r\n        }\r\n    ];\r\n\r\n    dishes.forEach(dish => {\r\n        const dishDiv = document.createElement(\"div\");\r\n        dishDiv.classList.add(\"menu-item\");\r\n\r\n        const dishName = document.createElement(\"h3\");\r\n        dishName.textContent = dish.name;\r\n        dishName.classList.add(\"dish-name\");\r\n\r\n        const dishDescription = document.createElement(\"p\");\r\n        dishDescription.textContent = dish.description;\r\n        dishDescription.classList.add(\"dish-description\");\r\n\r\n        const dishPrice = document.createElement(\"span\");\r\n        dishPrice.textContent = dish.price;\r\n        dishPrice.classList.add(\"dish-price\");\r\n\r\n        const dishImage = document.createElement(\"img\");\r\n        dishImage.src = dish.image;\r\n        dishImage.alt = `${dish.name} image`;\r\n        dishImage.classList.add(\"dish-image\");\r\n\r\n        dishDiv.appendChild(dishImage);\r\n        dishDiv.appendChild(dishName);\r\n        dishDiv.appendChild(dishDescription);\r\n        dishDiv.appendChild(dishPrice);\r\n\r\n        menuDiv.appendChild(dishDiv);\r\n    });\r\n\r\n    contentDiv.appendChild(menuDiv);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;