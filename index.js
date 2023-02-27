/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/game1/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/game1/index.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".game1-wrapper {\r\n  position: relative;\r\n  margin: auto;\r\n  max-width: 1400px;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  color: white;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 100px;\r\n}\r\n\r\n.game1-wrapper.game1-start{\r\n  padding: 0;\r\n}\r\n\r\n.game1-wrapper h2 {\r\n  color: white;\r\n}\r\n\r\n.game1-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game1-wrapper_button {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all .3s ease-in-out\r\n}\r\n\r\n.game1-wrapper_button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n\r\n._game1-container {\r\n  padding: 0px 15px 20px;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.game1-button {\r\n  width: 146px;\r\n    height: 40px;\r\n  border-radius: 3px / 100%;\r\n  color: #777674;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,\r\n    rgba(100, 100, 100, 0.3) 3px 7px 3px;\r\n  user-select: none;\r\n  outline: none;\r\n  border-radius: 3px / 100%;\r\n  background-image: linear-gradient(\r\n      45deg,\r\n      rgba(255, 255, 255, 0) 30%,\r\n      rgba(255, 255, 255, 0.8),\r\n      rgba(255, 255, 255, 0) 70%\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(255, 255, 255, 1),\r\n      rgba(255, 255, 255, 0) 20%,\r\n      rgba(255, 255, 255, 0) 90%,\r\n      rgba(255, 255, 255, 0.3)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    );\r\n  background-repeat: no-repeat;\r\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\r\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;\r\n  color: red;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n.game1-button:hover {\r\n  transition: 0.7s linear;\r\n  background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n}\r\n.game1-button:active {\r\n  transition: 0.1s linear;\r\n  background-color: green;\r\n}\r\n.game1-button:disabled {\r\n  background-color: gray;\r\n  color: black;\r\n}\r\n.game1-button:disabled:hover {\r\n  transition: none;\r\n  cursor: auto;\r\n}\r\n\r\n.game1-main__title {\r\n  text-align: center;\r\n}\r\n\r\n.game1-main__settings {\r\n  width: 1000px;\r\n  display: flex;\r\n  gap: 10px;\r\n  margin: 15px auto 0px auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.game1-main__timer {\r\n  display: flex;\r\n}\r\n\r\n.game1-main__buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n.game1-main__timer,\r\n.game1-main__answers-count {\r\n  flex: 0 1 25%;\r\n  font-size: 20px;\r\n}\r\n.game1-main__answers-count {\r\n  text-align: end;\r\n}\r\n\r\n.game1-main__start-message {\r\n  margin: 20px auto 0px auto;\r\n  text-align: center;\r\n  font-size: 28px;\r\n}\r\n\r\n.game1-main__body {\r\n  width: 1000px;\r\n  display: none;\r\n}\r\n\r\n.game1-main__question {\r\n  margin: 40px auto 0px auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 22px;\r\n  user-select: none;\r\n  height: 110px;\r\n  background-image: linear-gradient(\r\n      45deg,\r\n      rgba(255, 255, 255, 0) 30%,\r\n      rgba(255, 255, 255, 0.8),\r\n      rgba(255, 255, 255, 0) 70%\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(255, 255, 255, 1),\r\n      rgba(255, 255, 255, 0) 20%,\r\n      rgba(255, 255, 255, 0) 90%,\r\n      rgba(255, 255, 255, 0.3)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    );\r\n  background-repeat: no-repeat;\r\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\r\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;\r\n  text-decoration: none;\r\n  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,\r\n    rgba(100, 100, 100, 0.3) 3px 7px 3px;\r\n}\r\n\r\n.game1-main__answers-block {\r\n  margin: 15px auto 0px auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  row-gap: 20px;\r\n}\r\n\r\n.game1-main__answer {\r\n  flex: 0 1 45%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  user-select: none;\r\n  height: 50px;\r\n  background-image: linear-gradient(\r\n      45deg,\r\n      rgba(255, 255, 255, 0) 30%,\r\n      rgba(255, 255, 255, 0.8),\r\n      rgba(255, 255, 255, 0) 70%\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(255, 255, 255, 1),\r\n      rgba(255, 255, 255, 0) 20%,\r\n      rgba(255, 255, 255, 0) 90%,\r\n      rgba(255, 255, 255, 0.3)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    );\r\n  background-repeat: no-repeat;\r\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\r\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;\r\n  text-decoration: none;\r\n  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,\r\n    rgba(100, 100, 100, 0.3) 3px 7px 3px;\r\n}\r\n\r\n.game1-main__answer:hover {\r\n  transition: 0.7s linear;\r\n  background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  background-color: gray;\r\n}\r\n.game1-correct {\r\n  background-color: green;\r\n  transition: 0.7s linear;\r\n}\r\n.game1-correct:hover {\r\n  background-color: green;\r\n}\r\n.game1-incorrect {\r\n  background-color: red;\r\n  transition: 0.7s linear;\r\n}\r\n.game1-incorrect:hover {\r\n  background-color: red;\r\n}\r\n\r\n.game1-main__next-button {\r\n  display: block;\r\n  color: black;\r\n  margin: 15px auto 0px auto;\r\n}\r\n\r\n.game1-main__complete {\r\n  display: none;\r\n}\r\n.game1-open {\r\n  display: block;\r\n}\r\n.game1-close {\r\n  display: none;\r\n}\r\n\r\n.game1-main__complete-message {\r\n  margin-top: 40px;\r\n  margin-bottom: 15px;\r\n  padding: 10px;\r\n  height: 110px;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 22px;\r\n  background-image: linear-gradient(\r\n      45deg,\r\n      rgba(255, 255, 255, 0) 30%,\r\n      rgba(255, 255, 255, 0.8),\r\n      rgba(255, 255, 255, 0) 70%\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(255, 255, 255, 1),\r\n      rgba(255, 255, 255, 0) 20%,\r\n      rgba(255, 255, 255, 0) 90%,\r\n      rgba(255, 255, 255, 0.3)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    );\r\n  background-repeat: no-repeat;\r\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\r\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;\r\n  text-decoration: none;\r\n  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,\r\n    rgba(100, 100, 100, 0.3) 3px 7px 3px;\r\n  user-select: none;\r\n  outline: none;\r\n}\r\n\r\n.game1-main__complete-text {\r\n  margin: 0px auto 0px auto;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 900px;\r\n  }\r\n  .game1-main__settings {\r\n    justify-content: space-between;\r\n  }\r\n  .game1-main__timer {\r\n    flex: 0 1 20%;\r\n  }\r\n  .game1-main__answers-count {\r\n    flex: 0 1 30%;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 700px;\r\n  }\r\n\r\n  .game1-main__answers-block {\r\n    margin-top: 10px;\r\n    row-gap: 15px;\r\n  }\r\n}\r\n\r\n.game1-wrapper {\r\n  padding: 10px 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 600px;\r\n  }\r\n  .game1-main__settings {\r\n    margin-top: 10px;\r\n  }\r\n  .game1-main__title {\r\n    margin-top: 10px;\r\n  }\r\n  .game1-main__start-message {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .game1-button {\r\n    height: 40px;\r\n    font-size: 18px;\r\n  }\r\n  .game1-main__timer,\r\n  .game1-main__answers-count {\r\n    font-size: 16px;\r\n  }\r\n  .game1-main__timer {\r\n    flex: 0 1 15%;\r\n  }\r\n  .game1-main__answers-count {\r\n    flex: 0 1 35%;\r\n  }\r\n  .game1-main__question {\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    height: 90px;\r\n  }\r\n\r\n  .game1-main__answer {\r\n    font-size: 20px;\r\n    height: 40px;\r\n  }\r\n  .game1-main__next-button {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .game1-main__complete-message {\r\n    height: 90px;\r\n    font-size: 22px;\r\n  }\r\n\r\n  .game1-main__answer:hover {\r\n    background-color: unset;\r\n  }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 450px;\r\n  }\r\n\r\n  .game1-main__settings{\r\n    gap: 15px;\r\n  }\r\n\r\n  .game1-main__title {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .game1-main__buttons {\r\n    gap: 10px;\r\n}\r\n\r\n  .game1-button {\r\n    width: 117px;\r\n    font-size: 14px;\r\n    height: 35px;\r\n  }\r\n  .game1-main__timer,\r\n  .game1-main__answers-count {\r\n    font-size: 14px;\r\n  }\r\n  .game1-main__timer {\r\n    flex: 0 1 14%;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .game1-main__answers-count {\r\n    display: flex;\r\n    flex: 0 1 36%;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n  }\r\n\r\n  .game1-main__question {\r\n    font-size: 18px;\r\n    height: 60px;\r\n  }\r\n\r\n  .game1-main__answers-block {\r\n    margin-top: 15px;\r\n    row-gap: 10px;\r\n}\r\n\r\n  .game1-main__answer {\r\n    font-size: 18px;\r\n    height: 35px;\r\n}\r\n\r\n.game1-main__complete-message {\r\n  margin-top: 29px;\r\n}\r\n\r\n  .game1-main__complete-message {\r\n    height: 80px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media (max-width: 470px) {\r\n  ._game1-container {\r\n    padding: 0;\r\n  }\r\n\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 340px;\r\n  }\r\n\r\n  .game1-main__settings {\r\n    gap: 32px;\r\n}\r\n\r\n  .game1-main__title {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .game1-button {\r\n    width: 70px;\r\n    font-size: 14px;\r\n    line-height: 80%;\r\n  }\r\n\r\n  .game1-main__timer,\r\n  .game1-main__answers-count {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .game1-main__question {\r\n    font-size: 16px;\r\n    height: 70px;\r\n    line-height: 70px;\r\n  }\r\n\r\n  .game1-main__answer {\r\n    font-size: 16px;\r\n    height: 35px;\r\n  }\r\n\r\n  .game1-main__complete-message {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .game1-main__next-button{\r\n    width: 100px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/game1/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB;AACF;;AAEA;EACE,qBAAqB;AACvB;;;AAGA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;IACV,YAAY;EACd,yBAAyB;EACzB,cAAc;EACd,iBAAiB;EACjB,qBAAqB;EACrB;wCACsC;EACtC,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAoCG;EACH,4BAA4B;EAC5B,wEAAwE;EACxE,wEAAwE;EACxE,kDAAkD;EAClD,UAAU;EACV,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,yEAAyE;AAC3E;AACA;EACE,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,SAAS;EACT,0BAA0B;EAC1B,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAoCG;EACH,4BAA4B;EAC5B,wEAAwE;EACxE,wEAAwE;EACxE,kDAAkD;EAClD,qBAAqB;EACrB;wCACsC;AACxC;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAoCG;EACH,4BAA4B;EAC5B,wEAAwE;EACxE,wEAAwE;EACxE,kDAAkD;EAClD,qBAAqB;EACrB;wCACsC;AACxC;;AAEA;EACE,uBAAuB;EACvB,yEAAyE;EACzE,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAoCG;EACH,4BAA4B;EAC5B,wEAAwE;EACxE,wEAAwE;EACxE,kDAAkD;EAClD,qBAAqB;EACrB;wCACsC;EACtC,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE;;;IAGE,YAAY;EACd;EACA;IACE,8BAA8B;EAChC;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;;;IAGE,YAAY;EACd;;EAEA;IACE,gBAAgB;IAChB,aAAa;EACf;AACF;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;;;IAGE,YAAY;EACd;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;EACA;;IAEE,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,gBAAgB;IAChB,eAAe;IACf,YAAY;EACd;;EAEA;IACE,eAAe;IACf,YAAY;EACd;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,uBAAuB;EACzB;AACF;;AAEA;EACE;;;IAGE,YAAY;EACd;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,SAAS;AACb;;EAEE;IACE,YAAY;IACZ,eAAe;IACf,YAAY;EACd;EACA;;IAEE,eAAe;EACjB;EACA;IACE,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,YAAY;EACd;;EAEA;IACE,gBAAgB;IAChB,aAAa;AACjB;;EAEE;IACE,eAAe;IACf,YAAY;AAChB;;AAEA;EACE,gBAAgB;AAClB;;EAEE;IACE,YAAY;IACZ,eAAe;EACjB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;;;IAGE,YAAY;EACd;;EAEA;IACE,SAAS;AACb;;EAEE;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,eAAe;IACf,gBAAgB;EAClB;;EAEA;;IAEE,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":[".game1-wrapper {\r\n  position: relative;\r\n  margin: auto;\r\n  max-width: 1400px;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  color: white;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 100px;\r\n}\r\n\r\n.game1-wrapper.game1-start{\r\n  padding: 0;\r\n}\r\n\r\n.game1-wrapper h2 {\r\n  color: white;\r\n}\r\n\r\n.game1-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game1-wrapper_button {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all .3s ease-in-out\r\n}\r\n\r\n.game1-wrapper_button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n\r\n._game1-container {\r\n  padding: 0px 15px 20px;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.game1-button {\r\n  width: 146px;\r\n    height: 40px;\r\n  border-radius: 3px / 100%;\r\n  color: #777674;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,\r\n    rgba(100, 100, 100, 0.3) 3px 7px 3px;\r\n  user-select: none;\r\n  outline: none;\r\n  border-radius: 3px / 100%;\r\n  background-image: linear-gradient(\r\n      45deg,\r\n      rgba(255, 255, 255, 0) 30%,\r\n      rgba(255, 255, 255, 0.8),\r\n      rgba(255, 255, 255, 0) 70%\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(255, 255, 255, 1),\r\n      rgba(255, 255, 255, 0) 20%,\r\n      rgba(255, 255, 255, 0) 90%,\r\n      rgba(255, 255, 255, 0.3)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    );\r\n  background-repeat: no-repeat;\r\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\r\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;\r\n  color: red;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n.game1-button:hover {\r\n  transition: 0.7s linear;\r\n  background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n}\r\n.game1-button:active {\r\n  transition: 0.1s linear;\r\n  background-color: green;\r\n}\r\n.game1-button:disabled {\r\n  background-color: gray;\r\n  color: black;\r\n}\r\n.game1-button:disabled:hover {\r\n  transition: none;\r\n  cursor: auto;\r\n}\r\n\r\n.game1-main__title {\r\n  text-align: center;\r\n}\r\n\r\n.game1-main__settings {\r\n  width: 1000px;\r\n  display: flex;\r\n  gap: 10px;\r\n  margin: 15px auto 0px auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.game1-main__timer {\r\n  display: flex;\r\n}\r\n\r\n.game1-main__buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n.game1-main__timer,\r\n.game1-main__answers-count {\r\n  flex: 0 1 25%;\r\n  font-size: 20px;\r\n}\r\n.game1-main__answers-count {\r\n  text-align: end;\r\n}\r\n\r\n.game1-main__start-message {\r\n  margin: 20px auto 0px auto;\r\n  text-align: center;\r\n  font-size: 28px;\r\n}\r\n\r\n.game1-main__body {\r\n  width: 1000px;\r\n  display: none;\r\n}\r\n\r\n.game1-main__question {\r\n  margin: 40px auto 0px auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 22px;\r\n  user-select: none;\r\n  height: 110px;\r\n  background-image: linear-gradient(\r\n      45deg,\r\n      rgba(255, 255, 255, 0) 30%,\r\n      rgba(255, 255, 255, 0.8),\r\n      rgba(255, 255, 255, 0) 70%\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(255, 255, 255, 1),\r\n      rgba(255, 255, 255, 0) 20%,\r\n      rgba(255, 255, 255, 0) 90%,\r\n      rgba(255, 255, 255, 0.3)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    );\r\n  background-repeat: no-repeat;\r\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\r\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;\r\n  text-decoration: none;\r\n  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,\r\n    rgba(100, 100, 100, 0.3) 3px 7px 3px;\r\n}\r\n\r\n.game1-main__answers-block {\r\n  margin: 15px auto 0px auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  row-gap: 20px;\r\n}\r\n\r\n.game1-main__answer {\r\n  flex: 0 1 45%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  user-select: none;\r\n  height: 50px;\r\n  background-image: linear-gradient(\r\n      45deg,\r\n      rgba(255, 255, 255, 0) 30%,\r\n      rgba(255, 255, 255, 0.8),\r\n      rgba(255, 255, 255, 0) 70%\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(255, 255, 255, 1),\r\n      rgba(255, 255, 255, 0) 20%,\r\n      rgba(255, 255, 255, 0) 90%,\r\n      rgba(255, 255, 255, 0.3)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    );\r\n  background-repeat: no-repeat;\r\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\r\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;\r\n  text-decoration: none;\r\n  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,\r\n    rgba(100, 100, 100, 0.3) 3px 7px 3px;\r\n}\r\n\r\n.game1-main__answer:hover {\r\n  transition: 0.7s linear;\r\n  background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  background-color: gray;\r\n}\r\n.game1-correct {\r\n  background-color: green;\r\n  transition: 0.7s linear;\r\n}\r\n.game1-correct:hover {\r\n  background-color: green;\r\n}\r\n.game1-incorrect {\r\n  background-color: red;\r\n  transition: 0.7s linear;\r\n}\r\n.game1-incorrect:hover {\r\n  background-color: red;\r\n}\r\n\r\n.game1-main__next-button {\r\n  display: block;\r\n  color: black;\r\n  margin: 15px auto 0px auto;\r\n}\r\n\r\n.game1-main__complete {\r\n  display: none;\r\n}\r\n.game1-open {\r\n  display: block;\r\n}\r\n.game1-close {\r\n  display: none;\r\n}\r\n\r\n.game1-main__complete-message {\r\n  margin-top: 40px;\r\n  margin-bottom: 15px;\r\n  padding: 10px;\r\n  height: 110px;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 22px;\r\n  background-image: linear-gradient(\r\n      45deg,\r\n      rgba(255, 255, 255, 0) 30%,\r\n      rgba(255, 255, 255, 0.8),\r\n      rgba(255, 255, 255, 0) 70%\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(255, 255, 255, 1),\r\n      rgba(255, 255, 255, 0) 20%,\r\n      rgba(255, 255, 255, 0) 90%,\r\n      rgba(255, 255, 255, 0.3)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(125, 125, 125, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(125, 125, 125, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    ),\r\n    linear-gradient(\r\n      to right,\r\n      rgba(223, 190, 170, 1),\r\n      rgba(255, 255, 255, 0.9) 45%,\r\n      rgba(223, 190, 170, 0.5)\r\n    );\r\n  background-repeat: no-repeat;\r\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\r\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;\r\n  text-decoration: none;\r\n  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,\r\n    rgba(100, 100, 100, 0.3) 3px 7px 3px;\r\n  user-select: none;\r\n  outline: none;\r\n}\r\n\r\n.game1-main__complete-text {\r\n  margin: 0px auto 0px auto;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 900px;\r\n  }\r\n  .game1-main__settings {\r\n    justify-content: space-between;\r\n  }\r\n  .game1-main__timer {\r\n    flex: 0 1 20%;\r\n  }\r\n  .game1-main__answers-count {\r\n    flex: 0 1 30%;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 700px;\r\n  }\r\n\r\n  .game1-main__answers-block {\r\n    margin-top: 10px;\r\n    row-gap: 15px;\r\n  }\r\n}\r\n\r\n.game1-wrapper {\r\n  padding: 10px 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 600px;\r\n  }\r\n  .game1-main__settings {\r\n    margin-top: 10px;\r\n  }\r\n  .game1-main__title {\r\n    margin-top: 10px;\r\n  }\r\n  .game1-main__start-message {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .game1-button {\r\n    height: 40px;\r\n    font-size: 18px;\r\n  }\r\n  .game1-main__timer,\r\n  .game1-main__answers-count {\r\n    font-size: 16px;\r\n  }\r\n  .game1-main__timer {\r\n    flex: 0 1 15%;\r\n  }\r\n  .game1-main__answers-count {\r\n    flex: 0 1 35%;\r\n  }\r\n  .game1-main__question {\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    height: 90px;\r\n  }\r\n\r\n  .game1-main__answer {\r\n    font-size: 20px;\r\n    height: 40px;\r\n  }\r\n  .game1-main__next-button {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .game1-main__complete-message {\r\n    height: 90px;\r\n    font-size: 22px;\r\n  }\r\n\r\n  .game1-main__answer:hover {\r\n    background-color: unset;\r\n  }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 450px;\r\n  }\r\n\r\n  .game1-main__settings{\r\n    gap: 15px;\r\n  }\r\n\r\n  .game1-main__title {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .game1-main__buttons {\r\n    gap: 10px;\r\n}\r\n\r\n  .game1-button {\r\n    width: 117px;\r\n    font-size: 14px;\r\n    height: 35px;\r\n  }\r\n  .game1-main__timer,\r\n  .game1-main__answers-count {\r\n    font-size: 14px;\r\n  }\r\n  .game1-main__timer {\r\n    flex: 0 1 14%;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .game1-main__answers-count {\r\n    display: flex;\r\n    flex: 0 1 36%;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n  }\r\n\r\n  .game1-main__question {\r\n    font-size: 18px;\r\n    height: 60px;\r\n  }\r\n\r\n  .game1-main__answers-block {\r\n    margin-top: 15px;\r\n    row-gap: 10px;\r\n}\r\n\r\n  .game1-main__answer {\r\n    font-size: 18px;\r\n    height: 35px;\r\n}\r\n\r\n.game1-main__complete-message {\r\n  margin-top: 29px;\r\n}\r\n\r\n  .game1-main__complete-message {\r\n    height: 80px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media (max-width: 470px) {\r\n  ._game1-container {\r\n    padding: 0;\r\n  }\r\n\r\n  .game1-main__title,\r\n  .game1-main__settings,\r\n  .game1-main__body {\r\n    width: 340px;\r\n  }\r\n\r\n  .game1-main__settings {\r\n    gap: 32px;\r\n}\r\n\r\n  .game1-main__title {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .game1-button {\r\n    width: 70px;\r\n    font-size: 14px;\r\n    line-height: 80%;\r\n  }\r\n\r\n  .game1-main__timer,\r\n  .game1-main__answers-count {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .game1-main__question {\r\n    font-size: 16px;\r\n    height: 70px;\r\n    line-height: 70px;\r\n  }\r\n\r\n  .game1-main__answer {\r\n    font-size: 16px;\r\n    height: 35px;\r\n  }\r\n\r\n  .game1-main__complete-message {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .game1-main__next-button{\r\n    width: 100px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/game2/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/game2/index.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".game2-wrapper {\r\n  position: relative;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-width: 1400px;\r\n  margin: auto;\r\n  padding-top: 10px;\r\n}\r\n\r\n.game2-wrapper h2 {\r\n  color: white;\r\n}\r\n\r\n.game2-wrapper.game2-start {\r\n  padding: 0;\r\n}\r\n\r\n.game2-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game2-wrapper_button {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.game2-wrapper_button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n._game2-container {\r\n  margin: 0px auto;\r\n  max-width: 1400px;\r\n}\r\n\r\n.game2-main__container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.game2-main__game {\r\n  width: 71vw;\r\n  max-width: 1400px;\r\n}\r\n\r\n@media (max-width: 1400px) {\r\n  .game2-wrapper {\r\n    width: 95vw;\r\n  }\r\n\r\n  .game2-main__game {\r\n    width: 100%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/game2/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE;IACE,WAAW;EACb;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":[".game2-wrapper {\r\n  position: relative;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-width: 1400px;\r\n  margin: auto;\r\n  padding-top: 10px;\r\n}\r\n\r\n.game2-wrapper h2 {\r\n  color: white;\r\n}\r\n\r\n.game2-wrapper.game2-start {\r\n  padding: 0;\r\n}\r\n\r\n.game2-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game2-wrapper_button {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.game2-wrapper_button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n._game2-container {\r\n  margin: 0px auto;\r\n  max-width: 1400px;\r\n}\r\n\r\n.game2-main__container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.game2-main__game {\r\n  width: 71vw;\r\n  max-width: 1400px;\r\n}\r\n\r\n@media (max-width: 1400px) {\r\n  .game2-wrapper {\r\n    width: 95vw;\r\n  }\r\n\r\n  .game2-main__game {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/game3/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/game3/index.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".game3-wrapper {\r\n  overflow: hidden;\r\n  position: relative;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 100px;\r\n  margin: 0 auto;\r\n  height: calc(100% - 20px);\r\n  max-width: 100%;\r\n}\r\n\r\n.game3-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game3-wrapper_button {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all .3s ease-in-out\r\n}\r\n\r\n.game3-wrapper_button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.wrapper_game_3 {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n#game_3 {\r\n  position: relative;\r\n  background-color: aqua;\r\n}\r\n\r\n._game3-container {\r\n  margin: 0px auto;\r\n}\r\n\r\n.game3-main_container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  max-height: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.game3-main_game {\r\n  max-height: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n@media (max-width: 1400px) {\r\n  .game3-wrapper {\r\n    width: 95vw;\r\n    padding: 10px 10px;\r\n  }\r\n\r\n  .game3-main_game {\r\n    width: 100%;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/components/game3/index.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB;AACF;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,UAAU;EACV,cAAc;EACd,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE;IACE,WAAW;IACX,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":[".game3-wrapper {\r\n  overflow: hidden;\r\n  position: relative;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 100px;\r\n  margin: 0 auto;\r\n  height: calc(100% - 20px);\r\n  max-width: 100%;\r\n}\r\n\r\n.game3-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game3-wrapper_button {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all .3s ease-in-out\r\n}\r\n\r\n.game3-wrapper_button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.wrapper_game_3 {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n#game_3 {\r\n  position: relative;\r\n  background-color: aqua;\r\n}\r\n\r\n._game3-container {\r\n  margin: 0px auto;\r\n}\r\n\r\n.game3-main_container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  max-height: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.game3-main_game {\r\n  max-height: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n@media (max-width: 1400px) {\r\n  .game3-wrapper {\r\n    width: 95vw;\r\n    padding: 10px 10px;\r\n  }\r\n\r\n  .game3-main_game {\r\n    width: 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/game4/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/game4/index.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_game4images_Yoda_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/game4images/Yoda.png */ "./src/assets/game4images/Yoda.png");
/* harmony import */ var _assets_game4images_Anakin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/game4images/Anakin.png */ "./src/assets/game4images/Anakin.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_game4images_Yoda_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_game4images_Anakin_png__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".game4-wrapper {\r\n  position: relative;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-width: 1400px;\r\n  margin: auto;\r\n  padding: 10px 100px;\r\n}\r\n\r\n.game4-wrapper h2 {\r\n  color: white;\r\n}\r\n\r\n.game4-wrapper.game4-start {\r\n  padding: 0;\r\n}\r\n\r\n.game4-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game4-wrapper_button {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.game4-wrapper_button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n._game4-container {\r\n  margin: 0px auto;\r\n  max-width: 1000px;\r\n}\r\n\r\n/*========================================================================================================*/\r\n\r\n.game4-main__container {\r\n  margin-top: 15px;\r\n}\r\n\r\n.game4-main-header {\r\n  position: relative;\r\n  color: white;\r\n  width: 410px;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.game4-main__chips {\r\n  position: relative;\r\n  width: 450px;\r\n  margin: 0px auto;\r\n}\r\n\r\n.game4-main__chip {\r\n  position: absolute;\r\n  width: 130px;\r\n  height: 130px;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100% 100%;\r\n  cursor: pointer;\r\n  opacity: 0.5;\r\n}\r\n#game4-yoda-chip {\r\n  top: 140px;\r\n  left: -125px;\r\n}\r\n\r\n#game4-dart-chip {\r\n  top: 140px;\r\n  left: 445px;\r\n}\r\n\r\n.game4-main__chip:hover {\r\n  transition: 0.2s;\r\n  opacity: 1;\r\n}\r\n\r\n#game4-yoda-chip {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position-y: -10px;\r\n}\r\n\r\n#game4-dart-chip {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.game4-main__game-table {\r\n  margin: 0px auto;\r\n  position: relative;\r\n  width: 394px;\r\n  border: 8px solid rgb(77, 75, 75);\r\n}\r\n.game4-main__game-row {\r\n  display: flex;\r\n}\r\n\r\n.game4-main__game-cell {\r\n  background-color: #121212;\r\n  border: 2px solid rgb(77, 75, 75);\r\n  width: 130px;\r\n  height: 130px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 36px;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  user-select: none;\r\n}\r\n.game4-main__game-cell:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.game4-yoda {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 95% 95%;\r\n  background-position-y: -5px;\r\n}\r\n\r\n.game4-dart {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 95% 95%;\r\n}\r\n\r\n.game4-main__game-table {\r\n  border-collapse: collapse;\r\n}\r\n.game4-main__game-table .game4-main__game-row:first-child div {\r\n  border-top: 0;\r\n}\r\n\r\n.game4-main__game-table .game4-main__game-row:last-child div {\r\n  border-bottom: 0;\r\n}\r\n\r\n.game4-main__game-table .game4-main__game-row div:first-child {\r\n  border-left: 0;\r\n}\r\n\r\n.game4-main__game-table .game4-main__game-row div:last-child {\r\n  border-right: 0;\r\n}\r\n\r\n.game4-main__endgame {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  display: none;\r\n  background-color: black;\r\n}\r\n\r\n.game4-endgame__message {\r\n  padding-top: 100px;\r\n  font-size: 30px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.game4-endgame__button {\r\n  font-size: 22px;\r\n  border-radius: 5px;\r\n  display: block;\r\n  margin: 40px auto 0px auto;\r\n  width: 50%;\r\n  height: 60px;\r\n  cursor: pointer;\r\n}\r\n\r\n.game4-endgame__button:hover {\r\n  background-color: gray;\r\n  transition: 0.3s;\r\n}\r\n\r\n.open {\r\n  display: block;\r\n}\r\n.disable {\r\n  pointer-events: none;\r\n  opacity: 0.3;\r\n}\r\n\r\n.chosen {\r\n  opacity: 1;\r\n}\r\n.transparent {\r\n  transition: 1s;\r\n  color: transparent;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .game4-wrapper {\r\n    padding: 10px 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 790px) {\r\n  .game4-main__game-table {\r\n    width: 308px;\r\n  }\r\n  .game4-main__game-cell {\r\n    width: 100px;\r\n    height: 100px;\r\n  }\r\n\r\n  .game4-main-header {\r\n    color: white;\r\n    width: 310px;\r\n  }\r\n\r\n  .game4-main__chips {\r\n    width: 225px;\r\n    margin: 0px auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  .game4-main__chip {\r\n    top: auto;\r\n    left: auto;\r\n    position: static;\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n\r\n  .game4-endgame__message {\r\n    padding-top: 60px;\r\n    font-size: 24px;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n\r\n  .game4-endgame__button {\r\n    font-size: 18px;\r\n    width: 50%;\r\n    height: 50px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/game4/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA,2GAA2G;;AAE3G;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,2BAA2B;EAC3B,0BAA0B;EAC1B,eAAe;EACf,YAAY;AACd;AACA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,yDAA0D;EAC1D,4BAA4B;AAC9B;;AAEA;EACE,yDAA4D;AAC9D;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,iCAAiC;AACnC;AACA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;EACjC,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;;AAEA;EACE,yDAA0D;EAC1D,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,yDAA4D;EAC5D,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,0BAA0B;EAC1B,UAAU;EACV,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;AACA;EACE,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;AACA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,8BAA8B;EAChC;EACA;IACE,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,UAAU;IACV,YAAY;EACd;AACF","sourcesContent":[".game4-wrapper {\r\n  position: relative;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-width: 1400px;\r\n  margin: auto;\r\n  padding: 10px 100px;\r\n}\r\n\r\n.game4-wrapper h2 {\r\n  color: white;\r\n}\r\n\r\n.game4-wrapper.game4-start {\r\n  padding: 0;\r\n}\r\n\r\n.game4-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game4-wrapper_button {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.game4-wrapper_button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n._game4-container {\r\n  margin: 0px auto;\r\n  max-width: 1000px;\r\n}\r\n\r\n/*========================================================================================================*/\r\n\r\n.game4-main__container {\r\n  margin-top: 15px;\r\n}\r\n\r\n.game4-main-header {\r\n  position: relative;\r\n  color: white;\r\n  width: 410px;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.game4-main__chips {\r\n  position: relative;\r\n  width: 450px;\r\n  margin: 0px auto;\r\n}\r\n\r\n.game4-main__chip {\r\n  position: absolute;\r\n  width: 130px;\r\n  height: 130px;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100% 100%;\r\n  cursor: pointer;\r\n  opacity: 0.5;\r\n}\r\n#game4-yoda-chip {\r\n  top: 140px;\r\n  left: -125px;\r\n}\r\n\r\n#game4-dart-chip {\r\n  top: 140px;\r\n  left: 445px;\r\n}\r\n\r\n.game4-main__chip:hover {\r\n  transition: 0.2s;\r\n  opacity: 1;\r\n}\r\n\r\n#game4-yoda-chip {\r\n  background-image: url(\"../../assets/game4images/Yoda.png\");\r\n  background-position-y: -10px;\r\n}\r\n\r\n#game4-dart-chip {\r\n  background-image: url(\"../../assets/game4images/Anakin.png\");\r\n}\r\n\r\n.game4-main__game-table {\r\n  margin: 0px auto;\r\n  position: relative;\r\n  width: 394px;\r\n  border: 8px solid rgb(77, 75, 75);\r\n}\r\n.game4-main__game-row {\r\n  display: flex;\r\n}\r\n\r\n.game4-main__game-cell {\r\n  background-color: #121212;\r\n  border: 2px solid rgb(77, 75, 75);\r\n  width: 130px;\r\n  height: 130px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 36px;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  user-select: none;\r\n}\r\n.game4-main__game-cell:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.game4-yoda {\r\n  background-image: url(\"../../assets/game4images/Yoda.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 95% 95%;\r\n  background-position-y: -5px;\r\n}\r\n\r\n.game4-dart {\r\n  background-image: url(\"../../assets/game4images/Anakin.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 95% 95%;\r\n}\r\n\r\n.game4-main__game-table {\r\n  border-collapse: collapse;\r\n}\r\n.game4-main__game-table .game4-main__game-row:first-child div {\r\n  border-top: 0;\r\n}\r\n\r\n.game4-main__game-table .game4-main__game-row:last-child div {\r\n  border-bottom: 0;\r\n}\r\n\r\n.game4-main__game-table .game4-main__game-row div:first-child {\r\n  border-left: 0;\r\n}\r\n\r\n.game4-main__game-table .game4-main__game-row div:last-child {\r\n  border-right: 0;\r\n}\r\n\r\n.game4-main__endgame {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  display: none;\r\n  background-color: black;\r\n}\r\n\r\n.game4-endgame__message {\r\n  padding-top: 100px;\r\n  font-size: 30px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.game4-endgame__button {\r\n  font-size: 22px;\r\n  border-radius: 5px;\r\n  display: block;\r\n  margin: 40px auto 0px auto;\r\n  width: 50%;\r\n  height: 60px;\r\n  cursor: pointer;\r\n}\r\n\r\n.game4-endgame__button:hover {\r\n  background-color: gray;\r\n  transition: 0.3s;\r\n}\r\n\r\n.open {\r\n  display: block;\r\n}\r\n.disable {\r\n  pointer-events: none;\r\n  opacity: 0.3;\r\n}\r\n\r\n.chosen {\r\n  opacity: 1;\r\n}\r\n.transparent {\r\n  transition: 1s;\r\n  color: transparent;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .game4-wrapper {\r\n    padding: 10px 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 790px) {\r\n  .game4-main__game-table {\r\n    width: 308px;\r\n  }\r\n  .game4-main__game-cell {\r\n    width: 100px;\r\n    height: 100px;\r\n  }\r\n\r\n  .game4-main-header {\r\n    color: white;\r\n    width: 310px;\r\n  }\r\n\r\n  .game4-main__chips {\r\n    width: 225px;\r\n    margin: 0px auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  .game4-main__chip {\r\n    top: auto;\r\n    left: auto;\r\n    position: static;\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n\r\n  .game4-endgame__message {\r\n    padding-top: 60px;\r\n    font-size: 24px;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n\r\n  .game4-endgame__button {\r\n    font-size: 18px;\r\n    width: 50%;\r\n    height: 50px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/game5/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/game5/index.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".game5-wrapper {\r\n  position: relative;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 100px;\r\n  max-width: 1400px;\r\n  margin: auto;\r\n}\r\n\r\n.game5-wrapper h2 {\r\n  color: white;\r\n}\r\n\r\n.game5-wrapper.game5-start {\r\n  padding: 0;\r\n}\r\n\r\n.game5-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game5-wrapper_button,\r\n.game5-wrapper_start-again-btn {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all .3s ease-in-out\r\n}\r\n\r\n.game5-wrapper_button:hover,\r\n.game5-wrapper_start-again-btn:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.game5-wrapper_header{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n.game5-wrapper_header p,\r\n.game5-wrapper_header h2 {\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.game5-wrapper_score{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.game5-wrapper_header h2 {\r\n  margin: 13px 0;\r\n}\r\n\r\n.game5-wrapper_header p {\r\n  margin: 0;\r\n}\r\n\r\n.game5-wrapper_start-again-btn {\r\n  width: 130px;\r\n  color: white;padding: 8px 10px;\r\n}\r\n\r\n.game5-wrapper_container-cards {\r\n  display: grid;\r\n  grid-template-columns: repeat(9, auto);\r\n  gap: 5px 5px;\r\n  background-color: rgba(62, 62, 62, 0.585);\r\n  border: 5px solid rgb(72, 64, 64);\r\n  border-radius: 5px;\r\n  padding: 4px;\r\n  perspective: 1000px;\r\n  position: relative;\r\n}\r\n\r\n.game5-container_shadow {\r\n\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  z-index: 1;\r\n  display: none;\r\n  justify-content: center;\r\n}\r\n\r\n.game5-container_shadow div{\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: rgb(71, 132, 255);\r\n}\r\n\r\n.game5-wrapper_div-card {\r\n  position: relative;\r\n  width: 117px;\r\n  height: 167px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transform: scale(1);\r\n  transform-style: preserve-3d;\r\n  transition: transform .5s;\r\n}\r\n\r\n.game5-wrapper_div-card:active {\r\n  transform: scale(0.95);\r\n  transition: transform .2s;\r\n}\r\n\r\n.game5-wrapper_div-card.flip {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n\r\n.game5-card_front-face,\r\n.game5-card_back-face {\r\n  /* width: 235px;\r\n  height: 334px; */\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  border-radius: 5px;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n.game5-card_front-face {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n\r\n@media (max-width: 1120px) {\r\n  .game5-wrapper_div-card {\r\n    width: 111px;\r\n    height: 158px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1070px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(9, auto);\r\n    gap: 5px 5px;\r\n    padding: 3px;\r\n    border: 5px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 108px;\r\n    height: 153px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1035px) {\r\n  .game5-wrapper_container-cards {\r\n    gap: 4px 4px;\r\n    padding: 3px;\r\n    border: 4px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 105px;\r\n    height: 150px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1010px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(6, auto);\r\n    padding: 2px;\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 117px;\r\n    height: 167px;\r\n  }\r\n}\r\n\r\n@media (max-width: 890px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(6, auto);\r\n    gap: 5px 5px;\r\n    padding: 4px;\r\n    border: 5px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 111px;\r\n    height: 158px;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .game5-wrapper_start-again-btn {\r\n    padding: 5px 5px;\r\n    font-size: 14px;\r\n    width: 101px;\r\n  }\r\n  .game5-wrapper {\r\n    padding: 10px 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(6, auto);\r\n  }\r\n  .game5-wrapper_div-card {\r\n\r\n    width: 105px;\r\n    height: 150px;\r\n  }\r\n}\r\n\r\n@media (max-width: 680px) {\r\n  .game5-wrapper_container-cards {\r\n    gap: 4px 4px;\r\n    padding: 3px;\r\n    border: 4px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 99px;\r\n    height: 141px;\r\n  }\r\n}\r\n\r\n@media (max-width: 635px) {\r\n  .game5-wrapper_container-cards {\r\n    gap: 3px 3px;\r\n    padding: 2px;\r\n    border: 3px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 96px;\r\n    height: 136px;\r\n  }\r\n}\r\n\r\n@media (max-width: 610px) {\r\n  .game5-wrapper_div-card {\r\n    width: 94px;\r\n    height: 133px;\r\n  }\r\n}\r\n\r\n@media (max-width: 595px) {\r\n  .game5-wrapper_div-card {\r\n    width: 87px;\r\n    height: 125px;\r\n  }\r\n}\r\n\r\n@media (max-width: 550px) {\r\n  .game5-wrapper_div-card {\r\n    width: 84px;\r\n    height: 120px;\r\n  }\r\n}\r\n\r\n@media (max-width: 530px) {\r\n  .game5-wrapper_div-card {\r\n    width: 82px;\r\n    height: 116px;\r\n  }\r\n}\r\n\r\n@media (max-width: 520px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(4, auto);\r\n  }\r\n\r\n  .game5-wrapper_div-card {\r\n\r\n    width: 111px;\r\n    height: 158px;\r\n  }\r\n  .game5-wrapper_header{\r\n    width: 90%;\r\n  }\r\n  .game5-wrapper_header h2 {\r\n    font-size: 18px;\r\n  }\r\n  .game5-wrapper_header p {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 470px) {\r\n  .game5-wrapper_header{\r\n    width: 95%;\r\n  }\r\n\r\n  .game5-wrapper_header h2 {\r\n    width: 70px;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .game5-wrapper_div-card {\r\n    width: 99px;\r\n    height: 141px;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .game5-wrapper_header{\r\n    width: 95%;\r\n  }\r\n\r\n  .game5-wrapper_header h2 {\r\n    width: 70px;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .game5-wrapper_div-card {\r\n    width: 94px;\r\n    height: 133px;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .game5-wrapper_div-card {\r\n    width: 82px;\r\n    height: 116px;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/components/game5/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB;AACF;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;AACZ;;AAEA;;EAEE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY,CAAC,iBAAiB;AAChC;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,YAAY;EACZ,yCAAyC;EACzC,iCAAiC;EACjC,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,UAAU;EACV,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;AAC5B;;;AAGA;;EAEE;kBACgB;EAChB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,0BAA0B;AAC5B;;;AAGA;EACE;IACE,YAAY;IACZ,aAAa;EACf;AACF;;AAEA;EACE;IACE,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,iCAAiC;EACnC;EACA;IACE,YAAY;IACZ,aAAa;EACf;AACF;;AAEA;EACE;IACE,YAAY;IACZ,YAAY;IACZ,iCAAiC;EACnC;EACA;IACE,YAAY;IACZ,aAAa;EACf;AACF;;AAEA;EACE;IACE,sCAAsC;IACtC,YAAY;EACd;EACA;IACE,YAAY;IACZ,aAAa;EACf;AACF;;AAEA;EACE;IACE,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,iCAAiC;EACnC;EACA;IACE,YAAY;IACZ,aAAa;EACf;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,eAAe;IACf,YAAY;EACd;EACA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,sCAAsC;EACxC;EACA;;IAEE,YAAY;IACZ,aAAa;EACf;AACF;;AAEA;EACE;IACE,YAAY;IACZ,YAAY;IACZ,iCAAiC;EACnC;EACA;IACE,WAAW;IACX,aAAa;EACf;AACF;;AAEA;EACE;IACE,YAAY;IACZ,YAAY;IACZ,iCAAiC;EACnC;EACA;IACE,WAAW;IACX,aAAa;EACf;AACF;;AAEA;EACE;IACE,WAAW;IACX,aAAa;EACf;AACF;;AAEA;EACE;IACE,WAAW;IACX,aAAa;EACf;AACF;;AAEA;EACE;IACE,WAAW;IACX,aAAa;EACf;AACF;;AAEA;EACE;IACE,WAAW;IACX,aAAa;EACf;AACF;;AAEA;EACE;IACE,sCAAsC;EACxC;;EAEA;;IAEE,YAAY;IACZ,aAAa;EACf;EACA;IACE,UAAU;EACZ;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,WAAW;IACX,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,aAAa;EACf;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,WAAW;IACX,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,aAAa;EACf;AACF;;AAEA;EACE;IACE,WAAW;IACX,aAAa;EACf;AACF","sourcesContent":[".game5-wrapper {\r\n  position: relative;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 100px;\r\n  max-width: 1400px;\r\n  margin: auto;\r\n}\r\n\r\n.game5-wrapper h2 {\r\n  color: white;\r\n}\r\n\r\n.game5-wrapper.game5-start {\r\n  padding: 0;\r\n}\r\n\r\n.game5-wrapper_info {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.game5-wrapper_button,\r\n.game5-wrapper_start-again-btn {\r\n  width: 130px;\r\n  padding: 10px;\r\n  background-color: fuchsia;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: all .3s ease-in-out\r\n}\r\n\r\n.game5-wrapper_button:hover,\r\n.game5-wrapper_start-again-btn:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.game5-wrapper_header{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n.game5-wrapper_header p,\r\n.game5-wrapper_header h2 {\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.game5-wrapper_score{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.game5-wrapper_header h2 {\r\n  margin: 13px 0;\r\n}\r\n\r\n.game5-wrapper_header p {\r\n  margin: 0;\r\n}\r\n\r\n.game5-wrapper_start-again-btn {\r\n  width: 130px;\r\n  color: white;padding: 8px 10px;\r\n}\r\n\r\n.game5-wrapper_container-cards {\r\n  display: grid;\r\n  grid-template-columns: repeat(9, auto);\r\n  gap: 5px 5px;\r\n  background-color: rgba(62, 62, 62, 0.585);\r\n  border: 5px solid rgb(72, 64, 64);\r\n  border-radius: 5px;\r\n  padding: 4px;\r\n  perspective: 1000px;\r\n  position: relative;\r\n}\r\n\r\n.game5-container_shadow {\r\n\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  z-index: 1;\r\n  display: none;\r\n  justify-content: center;\r\n}\r\n\r\n.game5-container_shadow div{\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: rgb(71, 132, 255);\r\n}\r\n\r\n.game5-wrapper_div-card {\r\n  position: relative;\r\n  width: 117px;\r\n  height: 167px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transform: scale(1);\r\n  transform-style: preserve-3d;\r\n  transition: transform .5s;\r\n}\r\n\r\n.game5-wrapper_div-card:active {\r\n  transform: scale(0.95);\r\n  transition: transform .2s;\r\n}\r\n\r\n.game5-wrapper_div-card.flip {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n\r\n.game5-card_front-face,\r\n.game5-card_back-face {\r\n  /* width: 235px;\r\n  height: 334px; */\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  border-radius: 5px;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n.game5-card_front-face {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n\r\n@media (max-width: 1120px) {\r\n  .game5-wrapper_div-card {\r\n    width: 111px;\r\n    height: 158px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1070px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(9, auto);\r\n    gap: 5px 5px;\r\n    padding: 3px;\r\n    border: 5px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 108px;\r\n    height: 153px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1035px) {\r\n  .game5-wrapper_container-cards {\r\n    gap: 4px 4px;\r\n    padding: 3px;\r\n    border: 4px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 105px;\r\n    height: 150px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1010px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(6, auto);\r\n    padding: 2px;\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 117px;\r\n    height: 167px;\r\n  }\r\n}\r\n\r\n@media (max-width: 890px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(6, auto);\r\n    gap: 5px 5px;\r\n    padding: 4px;\r\n    border: 5px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 111px;\r\n    height: 158px;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .game5-wrapper_start-again-btn {\r\n    padding: 5px 5px;\r\n    font-size: 14px;\r\n    width: 101px;\r\n  }\r\n  .game5-wrapper {\r\n    padding: 10px 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(6, auto);\r\n  }\r\n  .game5-wrapper_div-card {\r\n\r\n    width: 105px;\r\n    height: 150px;\r\n  }\r\n}\r\n\r\n@media (max-width: 680px) {\r\n  .game5-wrapper_container-cards {\r\n    gap: 4px 4px;\r\n    padding: 3px;\r\n    border: 4px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 99px;\r\n    height: 141px;\r\n  }\r\n}\r\n\r\n@media (max-width: 635px) {\r\n  .game5-wrapper_container-cards {\r\n    gap: 3px 3px;\r\n    padding: 2px;\r\n    border: 3px solid rgb(72, 64, 64);\r\n  }\r\n  .game5-wrapper_div-card {\r\n    width: 96px;\r\n    height: 136px;\r\n  }\r\n}\r\n\r\n@media (max-width: 610px) {\r\n  .game5-wrapper_div-card {\r\n    width: 94px;\r\n    height: 133px;\r\n  }\r\n}\r\n\r\n@media (max-width: 595px) {\r\n  .game5-wrapper_div-card {\r\n    width: 87px;\r\n    height: 125px;\r\n  }\r\n}\r\n\r\n@media (max-width: 550px) {\r\n  .game5-wrapper_div-card {\r\n    width: 84px;\r\n    height: 120px;\r\n  }\r\n}\r\n\r\n@media (max-width: 530px) {\r\n  .game5-wrapper_div-card {\r\n    width: 82px;\r\n    height: 116px;\r\n  }\r\n}\r\n\r\n@media (max-width: 520px) {\r\n  .game5-wrapper_container-cards {\r\n    grid-template-columns: repeat(4, auto);\r\n  }\r\n\r\n  .game5-wrapper_div-card {\r\n\r\n    width: 111px;\r\n    height: 158px;\r\n  }\r\n  .game5-wrapper_header{\r\n    width: 90%;\r\n  }\r\n  .game5-wrapper_header h2 {\r\n    font-size: 18px;\r\n  }\r\n  .game5-wrapper_header p {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 470px) {\r\n  .game5-wrapper_header{\r\n    width: 95%;\r\n  }\r\n\r\n  .game5-wrapper_header h2 {\r\n    width: 70px;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .game5-wrapper_div-card {\r\n    width: 99px;\r\n    height: 141px;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .game5-wrapper_header{\r\n    width: 95%;\r\n  }\r\n\r\n  .game5-wrapper_header h2 {\r\n    width: 70px;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .game5-wrapper_div-card {\r\n    width: 94px;\r\n    height: 133px;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .game5-wrapper_div-card {\r\n    width: 82px;\r\n    height: 116px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/gamesInfo/index.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/gamesInfo/index.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_rectangle_light_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/rectangle_light.svg */ "./src/assets/rectangle_light.svg");
/* harmony import */ var _assets_rectangle_dark_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/rectangle_dark.svg */ "./src/assets/rectangle_dark.svg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_rectangle_light_svg__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_rectangle_dark_svg__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.games_info_container {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") top / cover no-repeat;\r\n  color: black;\r\n  position: relative;\r\n  font-size: 18px;\r\n  left: 0;\r\n  z-index: 10;\r\n  margin-top: -15vh;\r\n  padding: 180px 40px 0 40px;\r\n}\r\n\r\n.games_info_container.dark {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") top / cover no-repeat;\r\n  color: white;;\r\n}\r\n\r\n.games_info_container .game_section_line {\r\n  width: 100%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r\n  margin: 30px 0;\r\n}\r\n\r\n.games_info_container.dark .game_section_line {\r\n  border-bottom: 1px solid rgba(255, 255, 255);\r\n  padding: 3px 0 0 0;\r\n}\r\n\r\n.games_info_container.dark .game_section {\r\n  padding: 3px 0 0 0;\r\n  color: #ffffff;\r\n}\r\n\r\n.game_section {\r\n  color: black;\r\n  max-width: 1200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.games_info_title {\r\n  max-width: 1200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 10px;\r\n  font-size: 22px;\r\n}\r\n\r\n.games_info_quote {\r\n  margin: 0;\r\n  max-width: 1200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-style: italic;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.game_name {\r\n  margin-top: 0;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n}\r\n\r\n.game_section_header {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: flex;\r\n  gap: 40px;\r\n  justify-content: space-between;\r\n  flex-flow: row-reverse;\r\n}\r\n\r\n.logo_games_picture {\r\n  height: 240px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.game_btn {\r\n  margin: 0;\r\n  padding: 10px 15px;\r\n  box-sizing: border-box;\r\n  width: 100px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  border-radius: 30px;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.games_info_container.dark .game_btn {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.game_btn:hover,\r\n.games_info_container.dark .game_btn:hover {\r\n  background-color: #D713C3;\r\n}\r\n\r\n.arrowUp{\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 90px;\r\n  z-index: 11;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.arrowUp svg{\r\n  width: 60px;\r\n  height: 60px;\r\n  fill: #000000;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.arrowUp.dark svg{\r\n  fill: #ffffff;\r\n}\r\n\r\n.arrowUp svg:hover{\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.arrowDown {\r\n  position: fixed;\r\n  right: 25px;\r\n  bottom: 25px;\r\n  z-index: 12;\r\n  background-color: rgb(71, 132, 255);\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.arrowDown.active {\r\n  z-index: 4;\r\n}\r\n\r\n.arrowDown svg{\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n\r\n.arrowDown:before,\r\n.arrowDown:after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgb(71, 132, 255);\r\n  border-radius: 50%;\r\n   z-index: -1;\r\n   opacity: 0.7;\r\n}\r\n\r\n.arrowDown:before {\r\n  animation: pulse 2s ease-out infinite;\r\n}\r\n\r\n.arrowDown:after {\r\n  animation: pulse 2s 1s ease-out infinite;\r\n  right: 0;\r\n}\r\n\r\n@keyframes pulse {\r\n  100%{\r\n    transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 1000px) {\r\n  .logo_games_picture {\r\n    height: 200px;\r\n    border-radius: 50px;\r\n  }\r\n}\r\n@media (max-width: 800px) {\r\n  .games_info_container {\r\n    padding: 200px 35px 0 35px;\r\n  }\r\n  .logo_games_picture {\r\n    height: 190px;\r\n    border-radius: 50px;\r\n  }\r\n  .arrowUp img{\r\n    width: 42px;\r\n    height: 42px;\r\n  }\r\n}\r\n@media (max-width: 700px) {\r\n  .game_section_header {\r\n    gap: 10px;\r\n    flex-direction: column-reverse;\r\n  }\r\n  .games_info_container {\r\n    padding: 300px 30px 0 30px;\r\n  }\r\n  .logo_games_picture {\r\n    height: 180px;\r\n    border-radius: 50px;\r\n  }\r\n}\r\n@media (max-width: 600px) {\r\n  .games_info_container {\r\n    padding: 290px 20px 0 20px;\r\n  }\r\n  .games_info_title {\r\n    font-size: 20px;\r\n  }\r\n  .games_info_quote {\r\n    font-size: 18px;\r\n  }\r\n  .logo_games_picture {\r\n    height: 160px;\r\n    border-radius: 50px;\r\n  }\r\n}\r\n\r\n@media (min-width: 3000px) {\r\n  .games_info_container {\r\n    padding: 300px 40px 0 40px;\r\n  }\r\n}\r\n@media (min-width: 4000px) {\r\n  .games_info_container {\r\n    padding: 350px 40px 0 40px;\r\n  }\r\n}\r\n@media (min-width: 5000px) {\r\n  .games_info_container {\r\n    padding: 400px 40px 0 40px;\r\n  }\r\n}\r\n\r\n@media (min-width: 6000px) {\r\n  .games_info_container {\r\n    padding: 450px 40px 0 40px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/gamesInfo/index.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB;;AAEA;EACE,yEAAuE;EACvE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,OAAO;EACP,WAAW;EACX,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,yEAAsE;EACtE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,2CAA2C;EAC3C,cAAc;AAChB;;AAEA;EACE,4CAA4C;EAC5C,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,oCAAoC;EACpC,+BAA+B;AACjC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;;EAEE,UAAU;EACV,SAAS;EACT,sBAAsB;;EAEtB,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,kBAAkB;GACjB,WAAW;GACX,YAAY;AACf;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,wCAAwC;EACxC,QAAQ;AACV;;AAEA;EACE;IACE,mBAAmB;IACnB,UAAU;EACZ;AACF;;;AAGA;EACE;IACE,aAAa;IACb,mBAAmB;EACrB;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,aAAa;IACb,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,YAAY;EACd;AACF;AACA;EACE;IACE,SAAS;IACT,8BAA8B;EAChC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,aAAa;IACb,mBAAmB;EACrB;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;AACF","sourcesContent":["html {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.games_info_container {\r\n  background: url(../../assets/rectangle_light.svg) top / cover no-repeat;\r\n  color: black;\r\n  position: relative;\r\n  font-size: 18px;\r\n  left: 0;\r\n  z-index: 10;\r\n  margin-top: -15vh;\r\n  padding: 180px 40px 0 40px;\r\n}\r\n\r\n.games_info_container.dark {\r\n  background: url(../../assets/rectangle_dark.svg) top / cover no-repeat;\r\n  color: white;;\r\n}\r\n\r\n.games_info_container .game_section_line {\r\n  width: 100%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r\n  margin: 30px 0;\r\n}\r\n\r\n.games_info_container.dark .game_section_line {\r\n  border-bottom: 1px solid rgba(255, 255, 255);\r\n  padding: 3px 0 0 0;\r\n}\r\n\r\n.games_info_container.dark .game_section {\r\n  padding: 3px 0 0 0;\r\n  color: #ffffff;\r\n}\r\n\r\n.game_section {\r\n  color: black;\r\n  max-width: 1200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.games_info_title {\r\n  max-width: 1200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 10px;\r\n  font-size: 22px;\r\n}\r\n\r\n.games_info_quote {\r\n  margin: 0;\r\n  max-width: 1200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-style: italic;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.game_name {\r\n  margin-top: 0;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n}\r\n\r\n.game_section_header {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: flex;\r\n  gap: 40px;\r\n  justify-content: space-between;\r\n  flex-flow: row-reverse;\r\n}\r\n\r\n.logo_games_picture {\r\n  height: 240px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.game_btn {\r\n  margin: 0;\r\n  padding: 10px 15px;\r\n  box-sizing: border-box;\r\n  width: 100px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  border-radius: 30px;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.games_info_container.dark .game_btn {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.game_btn:hover,\r\n.games_info_container.dark .game_btn:hover {\r\n  background-color: #D713C3;\r\n}\r\n\r\n.arrowUp{\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 90px;\r\n  z-index: 11;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.arrowUp svg{\r\n  width: 60px;\r\n  height: 60px;\r\n  fill: #000000;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.arrowUp.dark svg{\r\n  fill: #ffffff;\r\n}\r\n\r\n.arrowUp svg:hover{\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.arrowDown {\r\n  position: fixed;\r\n  right: 25px;\r\n  bottom: 25px;\r\n  z-index: 12;\r\n  background-color: rgb(71, 132, 255);\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.arrowDown.active {\r\n  z-index: 4;\r\n}\r\n\r\n.arrowDown svg{\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n\r\n.arrowDown:before,\r\n.arrowDown:after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgb(71, 132, 255);\r\n  border-radius: 50%;\r\n   z-index: -1;\r\n   opacity: 0.7;\r\n}\r\n\r\n.arrowDown:before {\r\n  animation: pulse 2s ease-out infinite;\r\n}\r\n\r\n.arrowDown:after {\r\n  animation: pulse 2s 1s ease-out infinite;\r\n  right: 0;\r\n}\r\n\r\n@keyframes pulse {\r\n  100%{\r\n    transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 1000px) {\r\n  .logo_games_picture {\r\n    height: 200px;\r\n    border-radius: 50px;\r\n  }\r\n}\r\n@media (max-width: 800px) {\r\n  .games_info_container {\r\n    padding: 200px 35px 0 35px;\r\n  }\r\n  .logo_games_picture {\r\n    height: 190px;\r\n    border-radius: 50px;\r\n  }\r\n  .arrowUp img{\r\n    width: 42px;\r\n    height: 42px;\r\n  }\r\n}\r\n@media (max-width: 700px) {\r\n  .game_section_header {\r\n    gap: 10px;\r\n    flex-direction: column-reverse;\r\n  }\r\n  .games_info_container {\r\n    padding: 300px 30px 0 30px;\r\n  }\r\n  .logo_games_picture {\r\n    height: 180px;\r\n    border-radius: 50px;\r\n  }\r\n}\r\n@media (max-width: 600px) {\r\n  .games_info_container {\r\n    padding: 290px 20px 0 20px;\r\n  }\r\n  .games_info_title {\r\n    font-size: 20px;\r\n  }\r\n  .games_info_quote {\r\n    font-size: 18px;\r\n  }\r\n  .logo_games_picture {\r\n    height: 160px;\r\n    border-radius: 50px;\r\n  }\r\n}\r\n\r\n@media (min-width: 3000px) {\r\n  .games_info_container {\r\n    padding: 300px 40px 0 40px;\r\n  }\r\n}\r\n@media (min-width: 4000px) {\r\n  .games_info_container {\r\n    padding: 350px 40px 0 40px;\r\n  }\r\n}\r\n@media (min-width: 5000px) {\r\n  .games_info_container {\r\n    padding: 400px 40px 0 40px;\r\n  }\r\n}\r\n\r\n@media (min-width: 6000px) {\r\n  .games_info_container {\r\n    padding: 450px 40px 0 40px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/parallax/index.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/parallax/index.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_parallax_galaxy_light_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/parallax_galaxy_light.jpg */ "./src/assets/parallax_galaxy_light.jpg");
/* harmony import */ var _assets_parallax_galaxy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/parallax_galaxy.png */ "./src/assets/parallax_galaxy.png");
/* harmony import */ var _assets_parallax_star_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/parallax_star.png */ "./src/assets/parallax_star.png");
/* harmony import */ var _assets_parallax_ship_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/parallax_ship.png */ "./src/assets/parallax_ship.png");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_parallax_galaxy_light_jpg__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_parallax_galaxy_png__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_parallax_star_png__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_parallax_ship_png__WEBPACK_IMPORTED_MODULE_6__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".parallax_background_container {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.parallax_background {\r\n  position: absolute;\r\n  height: 120%;\r\n  width: 120%;\r\n  top: -10%;\r\n  left: -10%;\r\n}\r\n\r\n.parallax_container {\r\n  height: calc(100vh - 125px - 60px);\r\n  position: relative;\r\n  z-index: 2;\r\n  width: 120%;\r\n  top: -10%;\r\n  left: -10%;\r\n}\r\n\r\n.parallax_images {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.images-parallax {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.images-parallax_item {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n/* .image_dark_hole {\r\n  width: 16%;\r\n  height: 39%;\r\n  position: absolute;\r\n  background: url(../../assets/dark_hole.png) top / cover no-repeat;\r\n  top: 0;\r\n  right: 160px;\r\n  z-index: 5;\r\n  animation: 20s linear infinite rotate;\r\n}\r\n\r\n@keyframes rotate {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n} */\r\n\r\n.images-parallax_galaxy {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") top / cover no-repeat;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.conteiner_header-main.dark .images-parallax_galaxy {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") top / cover no-repeat;\r\n}\r\n\r\n.images-parallax_death-star {\r\n  height: 100%;\r\n  width: 70%;\r\n  position: relative;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center / contain no-repeat;\r\n  z-index: 2;\r\n  margin: auto auto;\r\n}\r\n\r\n.images-parallax_ship {\r\n  position: relative;\r\n  scale: 0.8;\r\n  height: 30vh;\r\n  width: 30vw;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center / contain no-repeat;\r\n  left: 20%;\r\n  top: 30%;\r\n  z-index: 3;\r\n}", "",{"version":3,"sources":["webpack://./src/components/parallax/index.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;AACT;;AAEA;;;;;;;;;;;;;;;;;;;GAmBG;;AAEH;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yEAA6E;EAC7E,MAAM;EACN,OAAO;AACT;;AAEA;EACE,yEAAuE;AACzE;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,8EAA0E;EAC1E,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,WAAW;EACX,8EAA0E;EAC1E,SAAS;EACT,QAAQ;EACR,UAAU;AACZ","sourcesContent":[".parallax_background_container {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.parallax_background {\r\n  position: absolute;\r\n  height: 120%;\r\n  width: 120%;\r\n  top: -10%;\r\n  left: -10%;\r\n}\r\n\r\n.parallax_container {\r\n  height: calc(100vh - 125px - 60px);\r\n  position: relative;\r\n  z-index: 2;\r\n  width: 120%;\r\n  top: -10%;\r\n  left: -10%;\r\n}\r\n\r\n.parallax_images {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.images-parallax {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.images-parallax_item {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n/* .image_dark_hole {\r\n  width: 16%;\r\n  height: 39%;\r\n  position: absolute;\r\n  background: url(../../assets/dark_hole.png) top / cover no-repeat;\r\n  top: 0;\r\n  right: 160px;\r\n  z-index: 5;\r\n  animation: 20s linear infinite rotate;\r\n}\r\n\r\n@keyframes rotate {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n} */\r\n\r\n.images-parallax_galaxy {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  background: url(../../assets/parallax_galaxy_light.jpg) top / cover no-repeat;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.conteiner_header-main.dark .images-parallax_galaxy {\r\n  background: url(../../assets/parallax_galaxy.png) top / cover no-repeat;\r\n}\r\n\r\n.images-parallax_death-star {\r\n  height: 100%;\r\n  width: 70%;\r\n  position: relative;\r\n  background: url(../../assets/parallax_star.png) center / contain no-repeat;\r\n  z-index: 2;\r\n  margin: auto auto;\r\n}\r\n\r\n.images-parallax_ship {\r\n  position: relative;\r\n  scale: 0.8;\r\n  height: 30vh;\r\n  width: 30vw;\r\n  background: url(../../assets/parallax_ship.png) center / contain no-repeat;\r\n  left: 20%;\r\n  top: 30%;\r\n  z-index: 3;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/results/result.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/results/result.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper_main-result {\r\n\tposition: relative;\r\n\tcolor: #fff;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tfont-size: 17px;\r\n}\r\n\r\n.wrapper_table-result {\r\n\tcolor: #fff;\r\n\twidth: 350px;\r\n\tmargin: 20px auto;\r\n    background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.wrapper_table-result table{\r\n\tborder-collapse: collapse;\r\n\tmargin: auto;\r\n}\r\n\r\n.wrapper_table-result th,\r\n.wrapper_table-result td{\r\n\tborder: 1px solid #fff;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n.table-number {\r\n\twidth: 40px;\r\n}\r\n\r\n.table-name,\r\n.table-result {\r\n\twidth: 155px;\r\n\ttext-align: center;\r\n\tfont-size: 18px;\r\n\tcursor: pointer;\r\n\tcolor: rgb(184, 184, 254);\r\n}\r\n\r\n.table-name{\r\n\twidth: 210px;\r\n}\r\n\r\n.table-result {\r\n\twidth: 100px;\r\n}\r\n\r\n.table-flip {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(3, auto);\r\n\tgrid-template-rows: repeat(2, auto);\r\n\tmargin-bottom: 20px;\r\n\trow-gap: 20px;\r\n}\r\n\r\n.table-flip div {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tgap: 0;\r\n}\r\n\r\n.table-flip div p{\r\n\tmargin: 0;\r\n}\r\n\r\n.table-flip div input{\r\n\tcursor: pointer;\r\n}\r\n\r\n.raw-empty {\r\n\ttext-align: center;\r\n}\r\n\r\n.table-result_game1:after,\r\n.table-result_game2:after,\r\n.table-result_game3:after,\r\n.table-result_game4:after,\r\n.table-result_game5:after,\r\n.user-radio input:after {\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tborder-radius: 16px;\r\n\ttop: -1px;\r\n\tleft: -1px;\r\n\tposition: relative;\r\n\tbackground-color: white;\r\n\tcontent: '';\r\n\tdisplay: inline-block;\r\n\tvisibility: visible;\r\n\ttransition: all .5s ease-in-out;\r\n}\r\n\r\n.table-result_game1:checked:after,\r\n.table-result_game2:checked:after,\r\n.table-result_game3:checked:after,\r\n.table-result_game4:checked:after,\r\n.table-result_game5:checked:after,\r\n.user-radio input:checked:after {\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tborder-radius: 16px;\r\n\ttop: -1px;\r\n\tleft: -1px;\r\n\tposition: relative;\r\n\tbackground-color: #D713C3;\r\n\tcontent: '';\r\n\tdisplay: inline-block;\r\n\tvisibility: visible;\r\n\tborder: 0;\r\n\ttransition: all .5s ease-in-out;\r\n}", "",{"version":3,"sources":["webpack://./src/components/results/result.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,WAAW;CACX,WAAW;CACX,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,iBAAiB;IACd,8BAA8B;AAClC;;AAEA;CACC,yBAAyB;CACzB,YAAY;AACb;;AAEA;;CAEC,sBAAsB;CACtB,kBAAkB;AACnB;;;;AAIA;CACC,WAAW;AACZ;;AAEA;;CAEC,YAAY;CACZ,kBAAkB;CAClB,eAAe;CACf,eAAe;CACf,yBAAyB;AAC1B;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sCAAsC;CACtC,mCAAmC;CACnC,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,8BAA8B;CAC9B,MAAM;AACP;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;;;;;;CAMC,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,SAAS;CACT,UAAU;CACV,kBAAkB;CAClB,uBAAuB;CACvB,WAAW;CACX,qBAAqB;CACrB,mBAAmB;CACnB,+BAA+B;AAChC;;AAEA;;;;;;CAMC,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,SAAS;CACT,UAAU;CACV,kBAAkB;CAClB,yBAAyB;CACzB,WAAW;CACX,qBAAqB;CACrB,mBAAmB;CACnB,SAAS;CACT,+BAA+B;AAChC","sourcesContent":[".wrapper_main-result {\r\n\tposition: relative;\r\n\tcolor: #fff;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tfont-size: 17px;\r\n}\r\n\r\n.wrapper_table-result {\r\n\tcolor: #fff;\r\n\twidth: 350px;\r\n\tmargin: 20px auto;\r\n    background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.wrapper_table-result table{\r\n\tborder-collapse: collapse;\r\n\tmargin: auto;\r\n}\r\n\r\n.wrapper_table-result th,\r\n.wrapper_table-result td{\r\n\tborder: 1px solid #fff;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n.table-number {\r\n\twidth: 40px;\r\n}\r\n\r\n.table-name,\r\n.table-result {\r\n\twidth: 155px;\r\n\ttext-align: center;\r\n\tfont-size: 18px;\r\n\tcursor: pointer;\r\n\tcolor: rgb(184, 184, 254);\r\n}\r\n\r\n.table-name{\r\n\twidth: 210px;\r\n}\r\n\r\n.table-result {\r\n\twidth: 100px;\r\n}\r\n\r\n.table-flip {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(3, auto);\r\n\tgrid-template-rows: repeat(2, auto);\r\n\tmargin-bottom: 20px;\r\n\trow-gap: 20px;\r\n}\r\n\r\n.table-flip div {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tgap: 0;\r\n}\r\n\r\n.table-flip div p{\r\n\tmargin: 0;\r\n}\r\n\r\n.table-flip div input{\r\n\tcursor: pointer;\r\n}\r\n\r\n.raw-empty {\r\n\ttext-align: center;\r\n}\r\n\r\n.table-result_game1:after,\r\n.table-result_game2:after,\r\n.table-result_game3:after,\r\n.table-result_game4:after,\r\n.table-result_game5:after,\r\n.user-radio input:after {\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tborder-radius: 16px;\r\n\ttop: -1px;\r\n\tleft: -1px;\r\n\tposition: relative;\r\n\tbackground-color: white;\r\n\tcontent: '';\r\n\tdisplay: inline-block;\r\n\tvisibility: visible;\r\n\ttransition: all .5s ease-in-out;\r\n}\r\n\r\n.table-result_game1:checked:after,\r\n.table-result_game2:checked:after,\r\n.table-result_game3:checked:after,\r\n.table-result_game4:checked:after,\r\n.table-result_game5:checked:after,\r\n.user-radio input:checked:after {\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tborder-radius: 16px;\r\n\ttop: -1px;\r\n\tleft: -1px;\r\n\tposition: relative;\r\n\tbackground-color: #D713C3;\r\n\tcontent: '';\r\n\tdisplay: inline-block;\r\n\tvisibility: visible;\r\n\tborder: 0;\r\n\ttransition: all .5s ease-in-out;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".body {\r\n  width: 100%;\r\n  margin: 0;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\nbody.lock,\r\nbody.active {\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper_outer {\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.wrapper.stretch {\r\n  position: relative;\r\n}\r\n\r\n.conteiner_header-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: rgb(0 0 0 / 15%);\r\n  padding-bottom: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  color: #ffffff;\r\n  position: relative;\r\n  height: 125px;\r\n  z-index: 5;\r\n}\r\n\r\n.header.dark{\r\n  background-color: rgb(0 0 0 / 50%);\r\n  padding-bottom: 10px;\r\n  color: white;\r\n}\r\n\r\n.shadow,\r\n.shadow_login-window,\r\n.shadow_account-window {\r\n  display: none;\r\n  background-color: #0000009e;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 5;\r\n}\r\n\r\n.shadow {\r\n  z-index: 5;\r\n}\r\n\r\n.shadow_login-window {\r\n  z-index: 15;\r\n}\r\n\r\n.shadow_login-window.active {\r\n  display: block;\r\n}\r\n\r\n.games_info_container.active {\r\n  z-index: 4;\r\n}\r\n\r\n.up-header {\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo p {\r\n  margin: 0;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 180%;\r\n  color: #D713C3;\r\n}\r\n\r\n.logoHeader {\r\n  height: 40px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.logoHeader:hover {\r\n  transform: scale(1.07);\r\n}\r\n\r\n.container_settings-authorization {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.burger {\r\n  display: none;\r\n  cursor: pointer;\r\n  width: 26px;\r\n  height: 15px;\r\n}\r\n\r\n.header a{\r\n  text-decoration: none;\r\n}\r\n\r\n.personal-settigs {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.lang {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  border-radius: 15px;\r\n}\r\n\r\n.lang_ru,\r\n.lang_en {\r\n  padding: 5px 15px;\r\n  cursor: pointer;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.lang_ru:not(.lang-active):hover,\r\n.lang_en:not(.lang-active):hover {\r\n  background-color: #D713C3;\r\n  border-radius: 15px;\r\n}\r\n\r\n.lang-active {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  color: #fff;\r\n  border-radius: 15px;\r\n}\r\n\r\n.style {\r\n  width: 36px;\r\n  height: 36px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-style {\r\n  transition: all .3s ease-in-out;\r\n}\r\n.btn-style:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.volume{\r\n\tcursor: pointer;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tgap: 10px;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\talign-self: flex-end;\r\n  position: relative;\r\n}\r\n\r\n.volumeOn {\r\n  position: relative;\r\n  width: 40px;\r\n  height: 40px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.volumeOn:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.volumeOn svg path {\r\n\tfill: rgb(255, 255, 255);\r\n}\r\n\r\n.volumeOn.active svg path {\r\n\tfill: rgb(255, 255, 255);\r\n}\r\n\r\n.volume-slash {\r\n  position: absolute;\r\n  width: 37px;\r\n  border-bottom: 4px solid rgb(255, 255, 255);\r\n  top: 17px;\r\n  left: 0px;\r\n  transform: rotate(130deg)\r\n}\r\n\r\n.volume-slash.active {\r\n  display: none;\r\n}\r\n\r\n\r\n.authorization {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  min-width: 241px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.authorization-burger {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n}\r\n\r\n.btn_autorization,\r\n.btn_autorization-burger {\r\n  padding: 8px 18px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  border-radius: 68px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.btn_autorization:hover,\r\n.btn_autorization-burger:hover {\r\n  background-color: #D713C3;\r\n}\r\n\r\n.header.dark .btn_autorization,\r\n.header.dark .btn_autorization-burger {\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.header.dark .btn_autorization:hover,\r\n.header.dark .btn_autorization-burger:hover {\r\n  background-color: #D713C3;\r\n}\r\n\r\n.iconUser {\r\n  width: 71px;\r\n  height: 71px;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.iconUser.active {\r\n  display: block;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.iconUser.active:hover {\r\n  transform: scale(1.1) translateX(-10px);\r\n}\r\n\r\n.btn_autorization-burger {\r\n  padding: 7px 20px;\r\n}\r\n\r\n.pages {\r\n  width: calc(100% - 30px);\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 0 15px\r\n}\r\n\r\n.pages p {\r\n  margin: 0;\r\n  padding: 10px 1px;\r\n  box-sizing: border-box;\r\n  width: calc(100% / 6);\r\n  text-align: center;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  border-radius: 30px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.pages p:hover {\r\n  background: rgba(0, 0, 0, 0.1);\r\n  color: #D713C3;\r\n}\r\n\r\n.header.dark .pages p:hover {\r\n  background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n#choose {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  color: #fff;\r\n}\r\n\r\n.header.dark #choose {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  color: #fff;\r\n}\r\n\r\n.burger_menu {\r\n  display: none;\r\n}\r\n\r\n.cross,\r\n.cross svg,\r\n.login-window_cross,\r\n.login-window_cross svg,\r\n.signup-window_cross,\r\n.signup-window_cross svg {\r\n  width: 20px;\r\n  height: 20px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.cross:hover,\r\n.cross svg:hover,\r\n.login-window_cross:hover,\r\n.login-window_cross svg:hover,\r\n.signup-window_cross:hover,\r\n.signup-window_cross svg:hover {\r\n  transform: scale(1.05);\r\n  transform: rotate(0.25turn);\r\n}\r\n\r\n.cross:hover,\r\n.login-window_cross,\r\n.signup-window_cross {\r\n  cursor: pointer;\r\n}\r\n\r\n.cross:hover path {\r\n  fill: #4684ff;\r\n}\r\n\r\n.login-window,\r\n.signup-window {\r\n  display: none;\r\n  top: calc(50vh - 98px);\r\n}\r\n\r\n.login-window.active,\r\n.signup-window.active {\r\n  position: absolute;\r\n  z-index: 20;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  display: block;\r\n  width: 40%;\r\n  box-sizing: border-box;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  color: #000000;\r\n  border-radius: 10px;\r\n}\r\n\r\n.login-window_header,\r\n.signup-window_header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid black;\r\n  padding: 15px 30px;\r\n}\r\n\r\n.login-window_header p,\r\n.signup-window_header p {\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  color: #2D73FF;\r\n  margin: 0;\r\n}\r\n\r\n\r\n.login-window_main,\r\n.signup-window_main {\r\n  padding: 20px 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.signup-window_main.no-active,\r\n.login-window_main.no-active {\r\n  display: none;\r\n}\r\n\r\n.login-window_logName,\r\n.login-window_password,\r\n.signup-window_logName,\r\n.signup-window_password {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.login-window_logName p,\r\n.login-window_password p,\r\n.signup-window_logName p,\r\n.signup-window_password p {\r\n  margin: 0;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  width: 45%;\r\n}\r\n\r\n.login-window_logName input,\r\n.login-window_password input,\r\n.signup-window_logName input,\r\n.signup-window_password input {\r\n  width: 75%;\r\n  padding: 5px 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.login-window_button,\r\n.signup-window_button {\r\n  padding: 10px 20px;\r\n  background: linear-gradient(90deg, #68e3ffc2 0%, #4684ff 100%);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  margin-top: 20px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.login-window_button:hover,\r\n.signup-window_button:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.wrapper-signup-success,\r\n.wrapper-login-success,\r\n.wrapper-login-fail {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 30px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.wrapper-signup-success.active,\r\n.wrapper-login-success.active,\r\n.wrapper-login-fail.active {\r\n  display: flex;\r\n}\r\n\r\n.wrapper-signup-success p,\r\n.wrapper-login-success p,\r\n.wrapper-login-fail p{\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.signup-window_logName{\r\n  position: relative;\r\n}\r\n\r\n.signup-window_logName input{\r\n  position: relative;\r\n  z-index: 40;\r\n}\r\n\r\n.check-login {\r\n  margin: 0;\r\n  background-color: #00bbffe9;\r\n  color: black;\r\n  width: 195px;\r\n  position: absolute;\r\n  top: -75px;\r\n  left: 0px;\r\n  display: none;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  z-index: 20;\r\n}\r\n\r\n.check-login::after{\r\n  content: \"\";\r\n  border: 13px solid transparent;\r\n  border-top: 10px solid #00bbffe9;\r\n  position: absolute;\r\n  top: 60px;\r\n  left: 165px;\r\n  z-index: 30;\r\n}\r\n\r\n.check-login.active {\r\n  display: block;\r\n}\r\n\r\n.login_check-login-down,\r\n.signup_check-login-down {\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: end;\r\n  margin-bottom: 15px;\r\n  color: red;\r\n}\r\n\r\n.signup-window_logName-imgok,\r\n.signup-window_logName-imgfail {\r\n  position: absolute;\r\n  top: 9px;\r\n  right: 5px;\r\n  width: 16px;\r\n  height: 16px;\r\n  z-index: 50;\r\n  display: none;\r\n}\r\n\r\n.signup-window_logName-imgok.active,\r\n.signup-window_logName-imgfail.active {\r\n  position: absolute;\r\n  top: 9px;\r\n  right: 5px;\r\n  width: 16px;\r\n  height: 16px;\r\n  z-index: 50;\r\n  display: block;\r\n}\r\n\r\n.account-window {\r\n  display: none;\r\n  position: absolute;\r\n  top: 60px;\r\n  right: 10px;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  z-index: 60;\r\n}\r\n\r\n.account-window.active {\r\n  display: block;\r\n}\r\n\r\n.account-window p{\r\n  color: #000000;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  margin: 0 0 15px 0;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.account-window p:hover{\r\n  color: #2D73FF;\r\n}\r\n\r\n.header_account-window {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 25px;\r\n  gap: 5px;\r\n}\r\n\r\n.header_account-window_up {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header_account-window_up svg{\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.header_account-window_up svg:hover {\r\n  transform: scale(1.05);\r\n  transform: rotate(0.25turn);\r\n}\r\n\r\n.account_nameUser {\r\n  color: #2D73FF;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.account-window img {\r\n  width: 71px;\r\n  height: 71px;\r\n}\r\n\r\n.account-window svg{\r\n  cursor: pointer;\r\n}\r\n\r\n.shadow_account-window {\r\n  z-index: 50;\r\n}\r\n\r\n.shadow_account-window.active {\r\n  display: block;\r\n}\r\n\r\n.main {\r\n  min-height: calc(100vh - 125px - 10px - 60px);\r\n}\r\n\r\n.main.dark {\r\n  color: white;\r\n}\r\n\r\n.footer_wrapper {\r\n  width: 100%;\r\n}\r\n\r\n.footer_wrapper.dark {\r\n  background-color: #181A21;\r\n}\r\n\r\n.footer {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  height: 60px;\r\n  z-index: 4;\r\n}\r\n\r\n.footer p{\r\n  margin: 0;\r\n  color: #000000;\r\n  z-index: 1;\r\n}\r\n\r\n.footer_wrapper.dark p{\r\n  margin: 0;\r\n  color: white;\r\n}\r\n\r\n.github {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: row;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.social-link {\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  border-radius: 22px;\r\n  padding: 10px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.social-link:hover {\r\n  background-color: #d713c387;\r\n}\r\n\r\n.social-link img {\r\n  max-height: 25px;\r\n}\r\n\r\n.github-icon1,\r\n.github-icon2,\r\n.github-icon3 {\r\n  height: 25px;\r\n}\r\n\r\n.social-link img {\r\n  opacity: .8;\r\n  cursor: pointer;\r\n  transition: all .4s ease-in-out;\r\n  background-color: unset;\r\n}\r\n\r\n.social-link img:hover {\r\n  transform: scale(1.2);\r\n  opacity: 1;\r\n}\r\n\r\n.footer.dark{\r\n  color: white;\r\n}\r\n\r\n@media (min-width: 1921px) {\r\n  .header {\r\n    min-width: 1400px;\r\n  }\r\n  .footer {\r\n    max-width: 1400px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    justify-content: space-between;\r\n  }\r\n  .shadow_login-window.active {\r\n    display: block;\r\n    width: 200vw;\r\n    left: -60vh;\r\n    position: absolute;\r\n  }\r\n}\r\n\r\n@media (max-width: 1920px) {\r\n  .header {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1400px) {\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 45%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 55%;\r\n  }\r\n}\r\n\r\n@media (max-width: 950px) {\r\n  .pages p {\r\n    padding: 10px 5px;\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  .pages p {\r\n    padding: 10px 5px;\r\n    font-size: 15px;\r\n  }\r\n  .pages {\r\n    padding: 0;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n  }\r\n  .header .pages .about {\r\n    width: 74px;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .header {\r\n    height: 58px;\r\n  }\r\n  .up-header {\r\n    padding: 0px 15px 10px 15px;\r\n  }\r\n\r\n  .logoHeader {\r\n    padding-top: 10px;\r\n  }\r\n\r\n  .pages {\r\n    display: none;\r\n  }\r\n  .authorization {\r\n    display: none;\r\n  }\r\n\r\n  .shadow.active {\r\n    display: block;\r\n  }\r\n\r\n  .burger {\r\n    display: block;\r\n  }\r\n\r\n  .burger_menu {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 0 8px 16px rgba(0,0,0,0.2);\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 10px 15px 15px 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    left: 0;\r\n    top: -385px;\r\n    transition: top 1s ease;\r\n    z-index: 10;\r\n  }\r\n\r\n  .burger_menu.dark {\r\n    background-color: #181A21;\r\n    box-shadow: 0 8px 16px rgb(0 0 0 / 75%);\r\n  }\r\n\r\n  .burger_menu.active {\r\n    top: 0;\r\n    z-index: 10;\r\n  }\r\n\r\n  .wrap_burger_up {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .burger_nav_ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n    padding: 0;\r\n    color:#000000;\r\n  }\r\n\r\n  .burger_nav_ul.dark {\r\n    color: #fff;\r\n  }\r\n\r\n  .burger_nav_ul_item {\r\n    list-style-type: none;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    transition: all .3s ease-in-out;\r\n  }\r\n\r\n  .burger_nav_ul_item {\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n  }\r\n\r\n  #choose-burger {\r\n    color: #D713C3;\r\n  }\r\n\r\n  .burger_nav_ul_item:hover {\r\n    color: #D713C3;\r\n  }\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    top: calc(50vh - 98px);\r\n    width: 80%;\r\n  }\r\n\r\n  .main {\r\n    min-height: calc(100vh - 58px - 10px - 60px);\r\n  }\r\n}\r\n\r\n@media (min-width: 801px) {\r\n  .static-height {\r\n    height: calc(100vh - 125px - 10px - 60px);\r\n  }\r\n\r\n  .game5 {\r\n    height: unset;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .header {\r\n    height: 52px;\r\n  }\r\n  .up-header {\r\n    padding: 10px 10px;\r\n  }\r\n  .logo p {\r\n    font-size: 29px;\r\n  }\r\n  .logoHeader {\r\n    padding-top: 0;\r\n  }\r\n  .lang_ru,\r\n  .lang_en {\r\n    padding: 2px 10px;\r\n  }\r\n  .style,\r\n  .btn-style {\r\n    width: 28px;\r\n    height: 28px;\r\n  }\r\n  .volumeOn,\r\n  .volumeOn svg {\r\n    width: 38px;\r\n    height: 38px;\r\n  }\r\n  .volume-slash {\r\n    width: 33px;\r\n    top: 16px;\r\n    left: 0px;\r\n  }\r\n\r\n  .cross,\r\n  .cross svg {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 90%;\r\n  }\r\n\r\n  .iconUser {\r\n    width: 38px;\r\n    height: 38px;\r\n  }\r\n\r\n  .main {\r\n    min-height: calc(100vh - 52px - 10px - 60px);\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .header {\r\n    height: 40px;\r\n  }\r\n  .up-header {\r\n    padding: 5px 7px;\r\n  }\r\n  .logo p {\r\n    font-size: 22px;\r\n  }\r\n  .personal-settigs {\r\n    gap: 3px;\r\n  }\r\n  .lang_ru,\r\n  .lang_en {\r\n    padding: 1px 6px;\r\n  }\r\n  .style,\r\n  .btn-style {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n  .volumeOn,\r\n  .volumeOn svg {\r\n    width: 32px;\r\n    height: 32px;\r\n  }\r\n\r\n  .volume-slash {\r\n    width: 28px;\r\n    top: 15px;\r\n    left: 0px;\r\n  }\r\n\r\n  .cross,\r\n  .cross svg {\r\n    width: 16px;\r\n    height: 16px;\r\n  }\r\n\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 95%;\r\n  }\r\n  .login-window_main,\r\n  .signup-window_main {\r\n    padding: 20px 20px;\r\n  }\r\n\r\n  .iconUser {\r\n    width: 32px;\r\n    height: 32px;\r\n  }\r\n  .container_settings-authorization {\r\n    gap: 5px;\r\n  }\r\n  .main {\r\n    min-height: calc(100vh - 40px - 10px - 60px);\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .logo p {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .main {\r\n    min-height: calc(100vh - 40px - 10px - 50px);\r\n  }\r\n\r\n  .footer {\r\n    height: 50px;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .github {\r\n    gap: 5px;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,SAAS;EACT,+BAA+B;AACjC;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;EAClC,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,kCAAkC;EAClC,oBAAoB;EACpB,YAAY;AACd;;AAEA;;;EAGE,aAAa;EACb,2BAA2B;EAC3B,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,iBAAiB;EACjB,eAAe;EACf,+BAA+B;AACjC;;AAEA;;EAEE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;EAC1C,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,+BAA+B;AACjC;AACA;EACE,qBAAqB;AACvB;;AAEA;CACC,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,mBAAmB;CACnB,uBAAuB;CACvB,oBAAoB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,2CAA2C;EAC3C,SAAS;EACT,SAAS;EACT;AACF;;AAEA;EACE,aAAa;AACf;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,oCAAoC;EACpC,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,+BAA+B;AACjC;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,cAAc;EACd,+BAA+B;AACjC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB;AACF;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,0CAA0C;EAC1C,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;;;;;;EAME,WAAW;EACX,YAAY;EACZ,+BAA+B;AACjC;;AAEA;;;;;;EAME,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,QAAQ;EACR,cAAc;EACd,cAAc;EACd,UAAU;EACV,sBAAsB;EACtB,0CAA0C;EAC1C,cAAc;EACd,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,SAAS;AACX;;;AAGA;;EAEE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;AACf;;AAEA;;;;EAIE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;;;;EAIE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;;;EAIE,UAAU;EACV,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;EAEE,kBAAkB;EAClB,8DAA8D;EAC9D,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;;;EAGE,eAAe;EACf,gBAAgB;EAChB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,SAAS;EACT,2BAA2B;EAC3B,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,8BAA8B;EAC9B,gCAAgC;EAChC,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,SAAS;EACT,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;;EAEE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;AACf;;AAEA;;EAEE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;EAC7B,cAAc;EACd,eAAe;EACf,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;;EAEb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,0CAA0C;EAC1C,mBAAmB;EACnB,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,+BAA+B;EAC/B,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,8BAA8B;EAChC;EACA;IACE,cAAc;IACd,YAAY;IACZ,WAAW;IACX,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,UAAU;EACZ;AACF;;AAEA;EACE;;IAEE,UAAU;EACZ;AACF;;AAEA;EACE;;IAEE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,eAAe;EACjB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,eAAe;EACjB;EACA;IACE,UAAU;IACV,8BAA8B;IAC9B,WAAW;EACb;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,2BAA2B;EAC7B;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,oCAAoC;IACpC,sCAAsC;IACtC,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,OAAO;IACP,WAAW;IACX,uBAAuB;IACvB,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,uCAAuC;EACzC;;EAEA;IACE,MAAM;IACN,WAAW;EACb;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;EAChC;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,UAAU;IACV,aAAa;EACf;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,+BAA+B;EACjC;;EAEA;IACE,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;EAChB;EACA;;IAEE,sBAAsB;IACtB,UAAU;EACZ;;EAEA;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE;IACE,yCAAyC;EAC3C;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,kBAAkB;EACpB;EACA;IACE,eAAe;EACjB;EACA;IACE,cAAc;EAChB;EACA;;IAEE,iBAAiB;EACnB;EACA;;IAEE,WAAW;IACX,YAAY;EACd;EACA;;IAEE,WAAW;IACX,YAAY;EACd;EACA;IACE,WAAW;IACX,SAAS;IACT,SAAS;EACX;;EAEA;;IAEE,WAAW;IACX,YAAY;EACd;;EAEA;;IAEE,UAAU;EACZ;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;EACA;IACE,QAAQ;EACV;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,WAAW;IACX,YAAY;EACd;EACA;;IAEE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,SAAS;IACT,SAAS;EACX;;EAEA;;IAEE,WAAW;IACX,YAAY;EACd;;EAEA;;IAEE,UAAU;EACZ;EACA;;IAEE,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,QAAQ;EACV;EACA;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,4CAA4C;EAC9C;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,QAAQ;EACV;AACF","sourcesContent":[".body {\r\n  width: 100%;\r\n  margin: 0;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\nbody.lock,\r\nbody.active {\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper_outer {\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.wrapper.stretch {\r\n  position: relative;\r\n}\r\n\r\n.conteiner_header-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: rgb(0 0 0 / 15%);\r\n  padding-bottom: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  color: #ffffff;\r\n  position: relative;\r\n  height: 125px;\r\n  z-index: 5;\r\n}\r\n\r\n.header.dark{\r\n  background-color: rgb(0 0 0 / 50%);\r\n  padding-bottom: 10px;\r\n  color: white;\r\n}\r\n\r\n.shadow,\r\n.shadow_login-window,\r\n.shadow_account-window {\r\n  display: none;\r\n  background-color: #0000009e;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 5;\r\n}\r\n\r\n.shadow {\r\n  z-index: 5;\r\n}\r\n\r\n.shadow_login-window {\r\n  z-index: 15;\r\n}\r\n\r\n.shadow_login-window.active {\r\n  display: block;\r\n}\r\n\r\n.games_info_container.active {\r\n  z-index: 4;\r\n}\r\n\r\n.up-header {\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo p {\r\n  margin: 0;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 180%;\r\n  color: #D713C3;\r\n}\r\n\r\n.logoHeader {\r\n  height: 40px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.logoHeader:hover {\r\n  transform: scale(1.07);\r\n}\r\n\r\n.container_settings-authorization {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.burger {\r\n  display: none;\r\n  cursor: pointer;\r\n  width: 26px;\r\n  height: 15px;\r\n}\r\n\r\n.header a{\r\n  text-decoration: none;\r\n}\r\n\r\n.personal-settigs {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.lang {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  border-radius: 15px;\r\n}\r\n\r\n.lang_ru,\r\n.lang_en {\r\n  padding: 5px 15px;\r\n  cursor: pointer;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.lang_ru:not(.lang-active):hover,\r\n.lang_en:not(.lang-active):hover {\r\n  background-color: #D713C3;\r\n  border-radius: 15px;\r\n}\r\n\r\n.lang-active {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  color: #fff;\r\n  border-radius: 15px;\r\n}\r\n\r\n.style {\r\n  width: 36px;\r\n  height: 36px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-style {\r\n  transition: all .3s ease-in-out;\r\n}\r\n.btn-style:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.volume{\r\n\tcursor: pointer;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tgap: 10px;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\talign-self: flex-end;\r\n  position: relative;\r\n}\r\n\r\n.volumeOn {\r\n  position: relative;\r\n  width: 40px;\r\n  height: 40px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.volumeOn:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.volumeOn svg path {\r\n\tfill: rgb(255, 255, 255);\r\n}\r\n\r\n.volumeOn.active svg path {\r\n\tfill: rgb(255, 255, 255);\r\n}\r\n\r\n.volume-slash {\r\n  position: absolute;\r\n  width: 37px;\r\n  border-bottom: 4px solid rgb(255, 255, 255);\r\n  top: 17px;\r\n  left: 0px;\r\n  transform: rotate(130deg)\r\n}\r\n\r\n.volume-slash.active {\r\n  display: none;\r\n}\r\n\r\n\r\n.authorization {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  min-width: 241px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.authorization-burger {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n}\r\n\r\n.btn_autorization,\r\n.btn_autorization-burger {\r\n  padding: 8px 18px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  border-radius: 68px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.btn_autorization:hover,\r\n.btn_autorization-burger:hover {\r\n  background-color: #D713C3;\r\n}\r\n\r\n.header.dark .btn_autorization,\r\n.header.dark .btn_autorization-burger {\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.header.dark .btn_autorization:hover,\r\n.header.dark .btn_autorization-burger:hover {\r\n  background-color: #D713C3;\r\n}\r\n\r\n.iconUser {\r\n  width: 71px;\r\n  height: 71px;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.iconUser.active {\r\n  display: block;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.iconUser.active:hover {\r\n  transform: scale(1.1) translateX(-10px);\r\n}\r\n\r\n.btn_autorization-burger {\r\n  padding: 7px 20px;\r\n}\r\n\r\n.pages {\r\n  width: calc(100% - 30px);\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 0 15px\r\n}\r\n\r\n.pages p {\r\n  margin: 0;\r\n  padding: 10px 1px;\r\n  box-sizing: border-box;\r\n  width: calc(100% / 6);\r\n  text-align: center;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  border-radius: 30px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.pages p:hover {\r\n  background: rgba(0, 0, 0, 0.1);\r\n  color: #D713C3;\r\n}\r\n\r\n.header.dark .pages p:hover {\r\n  background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n#choose {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  color: #fff;\r\n}\r\n\r\n.header.dark #choose {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  color: #fff;\r\n}\r\n\r\n.burger_menu {\r\n  display: none;\r\n}\r\n\r\n.cross,\r\n.cross svg,\r\n.login-window_cross,\r\n.login-window_cross svg,\r\n.signup-window_cross,\r\n.signup-window_cross svg {\r\n  width: 20px;\r\n  height: 20px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.cross:hover,\r\n.cross svg:hover,\r\n.login-window_cross:hover,\r\n.login-window_cross svg:hover,\r\n.signup-window_cross:hover,\r\n.signup-window_cross svg:hover {\r\n  transform: scale(1.05);\r\n  transform: rotate(0.25turn);\r\n}\r\n\r\n.cross:hover,\r\n.login-window_cross,\r\n.signup-window_cross {\r\n  cursor: pointer;\r\n}\r\n\r\n.cross:hover path {\r\n  fill: #4684ff;\r\n}\r\n\r\n.login-window,\r\n.signup-window {\r\n  display: none;\r\n  top: calc(50vh - 98px);\r\n}\r\n\r\n.login-window.active,\r\n.signup-window.active {\r\n  position: absolute;\r\n  z-index: 20;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  display: block;\r\n  width: 40%;\r\n  box-sizing: border-box;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  color: #000000;\r\n  border-radius: 10px;\r\n}\r\n\r\n.login-window_header,\r\n.signup-window_header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid black;\r\n  padding: 15px 30px;\r\n}\r\n\r\n.login-window_header p,\r\n.signup-window_header p {\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  color: #2D73FF;\r\n  margin: 0;\r\n}\r\n\r\n\r\n.login-window_main,\r\n.signup-window_main {\r\n  padding: 20px 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.signup-window_main.no-active,\r\n.login-window_main.no-active {\r\n  display: none;\r\n}\r\n\r\n.login-window_logName,\r\n.login-window_password,\r\n.signup-window_logName,\r\n.signup-window_password {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.login-window_logName p,\r\n.login-window_password p,\r\n.signup-window_logName p,\r\n.signup-window_password p {\r\n  margin: 0;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  width: 45%;\r\n}\r\n\r\n.login-window_logName input,\r\n.login-window_password input,\r\n.signup-window_logName input,\r\n.signup-window_password input {\r\n  width: 75%;\r\n  padding: 5px 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.login-window_button,\r\n.signup-window_button {\r\n  padding: 10px 20px;\r\n  background: linear-gradient(90deg, #68e3ffc2 0%, #4684ff 100%);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  margin-top: 20px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.login-window_button:hover,\r\n.signup-window_button:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.wrapper-signup-success,\r\n.wrapper-login-success,\r\n.wrapper-login-fail {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 30px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.wrapper-signup-success.active,\r\n.wrapper-login-success.active,\r\n.wrapper-login-fail.active {\r\n  display: flex;\r\n}\r\n\r\n.wrapper-signup-success p,\r\n.wrapper-login-success p,\r\n.wrapper-login-fail p{\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.signup-window_logName{\r\n  position: relative;\r\n}\r\n\r\n.signup-window_logName input{\r\n  position: relative;\r\n  z-index: 40;\r\n}\r\n\r\n.check-login {\r\n  margin: 0;\r\n  background-color: #00bbffe9;\r\n  color: black;\r\n  width: 195px;\r\n  position: absolute;\r\n  top: -75px;\r\n  left: 0px;\r\n  display: none;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  z-index: 20;\r\n}\r\n\r\n.check-login::after{\r\n  content: \"\";\r\n  border: 13px solid transparent;\r\n  border-top: 10px solid #00bbffe9;\r\n  position: absolute;\r\n  top: 60px;\r\n  left: 165px;\r\n  z-index: 30;\r\n}\r\n\r\n.check-login.active {\r\n  display: block;\r\n}\r\n\r\n.login_check-login-down,\r\n.signup_check-login-down {\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: end;\r\n  margin-bottom: 15px;\r\n  color: red;\r\n}\r\n\r\n.signup-window_logName-imgok,\r\n.signup-window_logName-imgfail {\r\n  position: absolute;\r\n  top: 9px;\r\n  right: 5px;\r\n  width: 16px;\r\n  height: 16px;\r\n  z-index: 50;\r\n  display: none;\r\n}\r\n\r\n.signup-window_logName-imgok.active,\r\n.signup-window_logName-imgfail.active {\r\n  position: absolute;\r\n  top: 9px;\r\n  right: 5px;\r\n  width: 16px;\r\n  height: 16px;\r\n  z-index: 50;\r\n  display: block;\r\n}\r\n\r\n.account-window {\r\n  display: none;\r\n  position: absolute;\r\n  top: 60px;\r\n  right: 10px;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  z-index: 60;\r\n}\r\n\r\n.account-window.active {\r\n  display: block;\r\n}\r\n\r\n.account-window p{\r\n  color: #000000;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  margin: 0 0 15px 0;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.account-window p:hover{\r\n  color: #2D73FF;\r\n}\r\n\r\n.header_account-window {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 25px;\r\n  gap: 5px;\r\n}\r\n\r\n.header_account-window_up {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header_account-window_up svg{\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.header_account-window_up svg:hover {\r\n  transform: scale(1.05);\r\n  transform: rotate(0.25turn);\r\n}\r\n\r\n.account_nameUser {\r\n  color: #2D73FF;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.account-window img {\r\n  width: 71px;\r\n  height: 71px;\r\n}\r\n\r\n.account-window svg{\r\n  cursor: pointer;\r\n}\r\n\r\n.shadow_account-window {\r\n  z-index: 50;\r\n}\r\n\r\n.shadow_account-window.active {\r\n  display: block;\r\n}\r\n\r\n.main {\r\n  min-height: calc(100vh - 125px - 10px - 60px);\r\n}\r\n\r\n.main.dark {\r\n  color: white;\r\n}\r\n\r\n.footer_wrapper {\r\n  width: 100%;\r\n}\r\n\r\n.footer_wrapper.dark {\r\n  background-color: #181A21;\r\n}\r\n\r\n.footer {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  height: 60px;\r\n  z-index: 4;\r\n}\r\n\r\n.footer p{\r\n  margin: 0;\r\n  color: #000000;\r\n  z-index: 1;\r\n}\r\n\r\n.footer_wrapper.dark p{\r\n  margin: 0;\r\n  color: white;\r\n}\r\n\r\n.github {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: row;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.social-link {\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  border-radius: 22px;\r\n  padding: 10px;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.social-link:hover {\r\n  background-color: #d713c387;\r\n}\r\n\r\n.social-link img {\r\n  max-height: 25px;\r\n}\r\n\r\n.github-icon1,\r\n.github-icon2,\r\n.github-icon3 {\r\n  height: 25px;\r\n}\r\n\r\n.social-link img {\r\n  opacity: .8;\r\n  cursor: pointer;\r\n  transition: all .4s ease-in-out;\r\n  background-color: unset;\r\n}\r\n\r\n.social-link img:hover {\r\n  transform: scale(1.2);\r\n  opacity: 1;\r\n}\r\n\r\n.footer.dark{\r\n  color: white;\r\n}\r\n\r\n@media (min-width: 1921px) {\r\n  .header {\r\n    min-width: 1400px;\r\n  }\r\n  .footer {\r\n    max-width: 1400px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    justify-content: space-between;\r\n  }\r\n  .shadow_login-window.active {\r\n    display: block;\r\n    width: 200vw;\r\n    left: -60vh;\r\n    position: absolute;\r\n  }\r\n}\r\n\r\n@media (max-width: 1920px) {\r\n  .header {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1400px) {\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 45%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 55%;\r\n  }\r\n}\r\n\r\n@media (max-width: 950px) {\r\n  .pages p {\r\n    padding: 10px 5px;\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  .pages p {\r\n    padding: 10px 5px;\r\n    font-size: 15px;\r\n  }\r\n  .pages {\r\n    padding: 0;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n  }\r\n  .header .pages .about {\r\n    width: 74px;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .header {\r\n    height: 58px;\r\n  }\r\n  .up-header {\r\n    padding: 0px 15px 10px 15px;\r\n  }\r\n\r\n  .logoHeader {\r\n    padding-top: 10px;\r\n  }\r\n\r\n  .pages {\r\n    display: none;\r\n  }\r\n  .authorization {\r\n    display: none;\r\n  }\r\n\r\n  .shadow.active {\r\n    display: block;\r\n  }\r\n\r\n  .burger {\r\n    display: block;\r\n  }\r\n\r\n  .burger_menu {\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 0 8px 16px rgba(0,0,0,0.2);\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 10px 15px 15px 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    left: 0;\r\n    top: -385px;\r\n    transition: top 1s ease;\r\n    z-index: 10;\r\n  }\r\n\r\n  .burger_menu.dark {\r\n    background-color: #181A21;\r\n    box-shadow: 0 8px 16px rgb(0 0 0 / 75%);\r\n  }\r\n\r\n  .burger_menu.active {\r\n    top: 0;\r\n    z-index: 10;\r\n  }\r\n\r\n  .wrap_burger_up {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .burger_nav_ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n    padding: 0;\r\n    color:#000000;\r\n  }\r\n\r\n  .burger_nav_ul.dark {\r\n    color: #fff;\r\n  }\r\n\r\n  .burger_nav_ul_item {\r\n    list-style-type: none;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    transition: all .3s ease-in-out;\r\n  }\r\n\r\n  .burger_nav_ul_item {\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n  }\r\n\r\n  #choose-burger {\r\n    color: #D713C3;\r\n  }\r\n\r\n  .burger_nav_ul_item:hover {\r\n    color: #D713C3;\r\n  }\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    top: calc(50vh - 98px);\r\n    width: 80%;\r\n  }\r\n\r\n  .main {\r\n    min-height: calc(100vh - 58px - 10px - 60px);\r\n  }\r\n}\r\n\r\n@media (min-width: 801px) {\r\n  .static-height {\r\n    height: calc(100vh - 125px - 10px - 60px);\r\n  }\r\n\r\n  .game5 {\r\n    height: unset;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .header {\r\n    height: 52px;\r\n  }\r\n  .up-header {\r\n    padding: 10px 10px;\r\n  }\r\n  .logo p {\r\n    font-size: 29px;\r\n  }\r\n  .logoHeader {\r\n    padding-top: 0;\r\n  }\r\n  .lang_ru,\r\n  .lang_en {\r\n    padding: 2px 10px;\r\n  }\r\n  .style,\r\n  .btn-style {\r\n    width: 28px;\r\n    height: 28px;\r\n  }\r\n  .volumeOn,\r\n  .volumeOn svg {\r\n    width: 38px;\r\n    height: 38px;\r\n  }\r\n  .volume-slash {\r\n    width: 33px;\r\n    top: 16px;\r\n    left: 0px;\r\n  }\r\n\r\n  .cross,\r\n  .cross svg {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 90%;\r\n  }\r\n\r\n  .iconUser {\r\n    width: 38px;\r\n    height: 38px;\r\n  }\r\n\r\n  .main {\r\n    min-height: calc(100vh - 52px - 10px - 60px);\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .header {\r\n    height: 40px;\r\n  }\r\n  .up-header {\r\n    padding: 5px 7px;\r\n  }\r\n  .logo p {\r\n    font-size: 22px;\r\n  }\r\n  .personal-settigs {\r\n    gap: 3px;\r\n  }\r\n  .lang_ru,\r\n  .lang_en {\r\n    padding: 1px 6px;\r\n  }\r\n  .style,\r\n  .btn-style {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n  .volumeOn,\r\n  .volumeOn svg {\r\n    width: 32px;\r\n    height: 32px;\r\n  }\r\n\r\n  .volume-slash {\r\n    width: 28px;\r\n    top: 15px;\r\n    left: 0px;\r\n  }\r\n\r\n  .cross,\r\n  .cross svg {\r\n    width: 16px;\r\n    height: 16px;\r\n  }\r\n\r\n  .login-window.active,\r\n  .signup-window.active {\r\n    width: 95%;\r\n  }\r\n  .login-window_main,\r\n  .signup-window_main {\r\n    padding: 20px 20px;\r\n  }\r\n\r\n  .iconUser {\r\n    width: 32px;\r\n    height: 32px;\r\n  }\r\n  .container_settings-authorization {\r\n    gap: 5px;\r\n  }\r\n  .main {\r\n    min-height: calc(100vh - 40px - 10px - 60px);\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .logo p {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .main {\r\n    min-height: calc(100vh - 40px - 10px - 50px);\r\n  }\r\n\r\n  .footer {\r\n    height: 50px;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .github {\r\n    gap: 5px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/game1/index.css":
/*!****************************************!*\
  !*** ./src/components/game1/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/game1/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/game2/index.css":
/*!****************************************!*\
  !*** ./src/components/game2/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/game2/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/game3/index.css":
/*!****************************************!*\
  !*** ./src/components/game3/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/game3/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/game4/index.css":
/*!****************************************!*\
  !*** ./src/components/game4/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/game4/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/game5/index.css":
/*!****************************************!*\
  !*** ./src/components/game5/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/game5/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/gamesInfo/index.css":
/*!********************************************!*\
  !*** ./src/components/gamesInfo/index.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/gamesInfo/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/parallax/index.css":
/*!*******************************************!*\
  !*** ./src/components/parallax/index.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/parallax/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/results/result.css":
/*!*******************************************!*\
  !*** ./src/components/results/result.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_result_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./result.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/results/result.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_result_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_result_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/game1/componentsGame1.ts":
/*!*************************************************!*\
  !*** ./src/components/game1/componentsGame1.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeQuestionsAnsweredCountby1": () => (/* binding */ changeQuestionsAnsweredCountby1),
/* harmony export */   "changeScore1": () => (/* binding */ changeScore1)
/* harmony export */ });
function changeScore1(a) {
    return a + 1;
}
function changeQuestionsAnsweredCountby1(a) {
    return a + 1;
}


/***/ }),

/***/ "./src/components/game1/core/data/questions.ts":
/*!*****************************************************!*\
  !*** ./src/components/game1/core/data/questions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "questions": () => (/* binding */ questions)
/* harmony export */ });
const questions = [
    {
        id: 1,
        question: "true + false == ?",
        answers: ["1", "NaN", "truefalse", "Error"],
        correct: "1",
    },
    {
        id: 2,
        question: '12 / "6" == ?',
        answers: ["2", "NaN", '"2"', "Error"],
        correct: "2",
    },
    {
        id: 3,
        question: '"number" + 15 + 3 == ?',
        answers: ["NaN", '"number18"', '"number153"', "Error"],
        correct: '"number153"',
    },
    {
        id: 4,
        question: '15 + 3 + "number" == ?',
        answers: ["NaN", '"18number"', '"153number"', "Error"],
        correct: '"18number"',
    },
    {
        id: 5,
        question: "[1] ≥ null",
        answers: ["NaN", "false", "true", "Error"],
        correct: "true",
    },
    {
        id: 6,
        question: '"foo" + + "bar" == ?',
        answers: ['"foobar"', "NaN", "fooNaN", "Error"],
        correct: "fooNaN",
    },
    {
        id: 7,
        question: '"foo" - "bar" == ?',
        answers: ['"foobar"', "NaN", "0", "Error"],
        correct: "NaN",
    },
    {
        id: 8,
        question: '("true" == true) == ?',
        answers: ["true", "false", "Error", "undefined"],
        correct: "false",
    },
    {
        id: 9,
        question: '(null == "") == ?',
        answers: ["true", "false", "Error", "undefined"],
        correct: "false",
    },
    {
        id: 10,
        question: "(null == undefined) == ?",
        answers: ["true", "false", "Error", "undefined"],
        correct: "true",
    },
    {
        id: 11,
        question: "(null === undefined) == ?",
        answers: ["true", "false", "Error", "undefined"],
        correct: "false",
    },
    {
        id: 12,
        question: '(!!"false" == !!"true") == ?',
        answers: ["true", "false", "Error", "undefined"],
        correct: "true",
    },
    {
        id: 13,
        question: '(["x"] == "x") == ?',
        answers: ["true", "false", "Error", "undefined"],
        correct: "true",
    },
    {
        id: 14,
        question: "[] + null + 1 == ?",
        answers: ["NaN", '"null1"', "1", '"001"'],
        correct: '"null1"',
    },
    {
        id: 15,
        question: '("0" || {}) == ?',
        answers: ["{}", '"0"', "0", "Error"],
        correct: '"0"',
    },
    {
        id: 16,
        question: "(0 || {}) == ?",
        answers: ["{}", '"0"', "0", "Error"],
        correct: "{}",
    },
    {
        id: 17,
        question: "([1,2,3] == [1,2,3]) == ?",
        answers: ["true", "false", "[1,2,3]", "Error"],
        correct: "false",
    },
    {
        id: 18,
        question: "new Date(0) - 0 == ?",
        answers: ["undefined", "Error", "0", "NaN"],
        correct: "0",
    },
    {
        id: 19,
        question: "(typeof null) == ?",
        answers: ["null", "object", "undefined", "string"],
        correct: "object",
    },
    {
        id: 20,
        question: "(Number(null)) == ?",
        answers: ["0", "Error", "undefined", "NaN"],
        correct: "0",
    },
    {
        id: 21,
        question: "(Number(undefined)) == ?",
        answers: ["0", "Error", "undefined", "NaN"],
        correct: "NaN",
    },
    {
        id: 22,
        question: '(Number("\n\n\n\n")) == ?',
        answers: ["0", "Error", "undefined", "NaN"],
        correct: "0",
    },
    {
        id: 23,
        question: "(null == 0) == ?",
        answers: ["false", "Error", "true", "undefined"],
        correct: "false",
    },
    {
        id: 24,
        question: "(null ≥ 0) == ?",
        answers: ["false", "Error", "true", "undefined"],
        correct: "true",
    },
    {
        id: 25,
        question: "(NaN == NaN) == ?",
        answers: ["false", "Error", "true", "NaN"],
        correct: "false",
    },
    {
        id: 26,
        question: "(Object.is(NaN, NaN)) == ?",
        answers: ["NaN", "true", "false", "Error"],
        correct: "true",
    },
    {
        id: 27,
        question: "(Object.is(+0, -0)) == ?",
        answers: ["NaN", "true", "false", "Error"],
        correct: "false",
    },
    {
        id: 28,
        question: "(+0 == -0) == ?",
        answers: ["NaN", "true", "false", "Error"],
        correct: "true",
    },
    {
        id: 29,
        question: "!+[] + [] + ![] == ?",
        answers: ["![][]![]", "truefalse", "1", "NaN"],
        correct: "truefalse",
    },
    {
        id: 30,
        question: "(Number(undefined)) == ?",
        answers: ["NaN", "null", "0", "Error"],
        correct: "NaN",
    },
    {
        id: 31,
        question: "(undefined == 0) == ?",
        answers: ["false", "true", "undefined", "Error"],
        correct: "false",
    },
    {
        id: 32,
        question: '(Boolean("0")) == ?',
        answers: ["false", "true", "undefined", "Error"],
        correct: "true",
    },
    {
        id: 33,
        question: '(Boolean("           ")) == ?',
        answers: ["false", "true", "undefined", "Error"],
        correct: "true",
    },
    {
        id: 34,
        question: "(typeof NaN) == ?",
        answers: ["number", "undefined", "null", "string"],
        correct: "number",
    },
    {
        id: 35,
        question: "(typeof new Date()) == ?",
        answers: ["object", "undefined", "number", "string"],
        correct: "object",
    },
    {
        id: 36,
        question: "(typeof function () {}) == ?",
        answers: ["object", "undefined", "function", "[object Object]"],
        correct: "function",
    },
    {
        id: 37,
        question: "(typeof [1, 2]) == ?",
        answers: ["object", "array", "string", "[object Object]"],
        correct: "object",
    },
    {
        id: 38,
        question: "(typeof a) == ?",
        answers: ["undefined", "Error", "string", "null"],
        correct: "undefined",
    },
    {
        id: 39,
        question: '"" + Symbol("my symbol") == ?',
        answers: ['"my symbol"', "Error", "undefined", '"0my symbol"'],
        correct: "Error",
    },
    {
        id: 40,
        question: "(typeof 3n) == ?",
        answers: ["number", "Error", "undefined", "bigint"],
        correct: "bigint",
    },
];


/***/ }),

/***/ "./src/components/game1/index.ts":
/*!***************************************!*\
  !*** ./src/components/game1/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeGame1AudioVolume": () => (/* binding */ changeGame1AudioVolume),
/* harmony export */   "clickNext": () => (/* binding */ clickNext),
/* harmony export */   "game1": () => (/* binding */ game1),
/* harmony export */   "startAgain": () => (/* binding */ startAgain),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "translateGame1": () => (/* binding */ translateGame1)
/* harmony export */ });
/* harmony import */ var _core_data_questions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/data/questions */ "./src/components/game1/core/data/questions.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/game1/index.css");
/* harmony import */ var _results_sendScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results/sendScore */ "./src/components/results/sendScore.ts");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");
/* harmony import */ var _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gamesInfo/gamesData */ "./src/components/gamesInfo/gamesData.ts");
/* harmony import */ var _assets_sounds_correctAnswer_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/sounds/correctAnswer.mp3 */ "./src/assets/sounds/correctAnswer.mp3");
/* harmony import */ var _assets_sounds_incorrectAnswer_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/sounds/incorrectAnswer.mp3 */ "./src/assets/sounds/incorrectAnswer.mp3");
/* harmony import */ var _assets_sounds_back_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/sounds/back-game5-starwars.mp3 */ "./src/assets/sounds/back-game5-starwars.mp3");
/* harmony import */ var _assets_sounds_failAudio_starwars_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/sounds/failAudio-starwars.mp3 */ "./src/assets/sounds/failAudio-starwars.mp3");
/* harmony import */ var _assets_sounds_final_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/sounds/final-game5-starwars.mp3 */ "./src/assets/sounds/final-game5-starwars.mp3");
/* harmony import */ var _componentsGame1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentsGame1 */ "./src/components/game1/componentsGame1.ts");
/* eslint no-param-reassign: ["error", { "props": false }] */











const settingsLoadPage = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_3__.returnLocalStorage)();
const game1BackAudio = new Audio(_assets_sounds_back_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_7__);
const game1FinalFailAudio = new Audio(_assets_sounds_failAudio_starwars_mp3__WEBPACK_IMPORTED_MODULE_8__);
const game1FinalSuccessAudio = new Audio(_assets_sounds_final_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_9__);
const game1CorrectAudio = new Audio(_assets_sounds_correctAnswer_mp3__WEBPACK_IMPORTED_MODULE_5__);
const game1InCorrectAudio = new Audio(_assets_sounds_incorrectAnswer_mp3__WEBPACK_IMPORTED_MODULE_6__);
function changeGame1AudioVolume(mode) {
    if (mode === true) {
        game1CorrectAudio.volume = 0.4;
        game1InCorrectAudio.volume = 0.4;
        game1BackAudio.volume = 0.6;
        game1FinalFailAudio.volume = 0.5;
        game1FinalSuccessAudio.volume = 0.5;
    }
    else if (mode === false) {
        game1CorrectAudio.volume = 0;
        game1InCorrectAudio.volume = 0;
        game1BackAudio.volume = 0;
        game1FinalFailAudio.volume = 0;
        game1FinalSuccessAudio.volume = 0;
    }
}
if (settingsLoadPage.volume === true) {
    changeGame1AudioVolume(true);
}
else if (settingsLoadPage.volume === false) {
    changeGame1AudioVolume(false);
}
_core_data_questions__WEBPACK_IMPORTED_MODULE_0__.questions.sort((a, b) => a.id - a.id + Math.random() - (b.id - b.id + Math.random()));
_core_data_questions__WEBPACK_IMPORTED_MODULE_0__.questions.forEach((e) => e.answers.sort(() => Math.random() - 0.5));
let questionsForGame = _core_data_questions__WEBPACK_IMPORTED_MODULE_0__.questions;
let answersCount = 0;
let questionsAnsweredCount = 0;
let seconds = 60;
let timer;
function viewFinishMessage() {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_3__.returnLocalStorage)();
    const question = document.getElementById("game1-question");
    const answersBlock = document.querySelector(".game1-main__answers-block");
    const nextBtn = document.getElementById("game1-nextBtn");
    const messageText = document.getElementById("game1-message-text");
    if (answersCount > 3) {
        game1BackAudio.pause();
        game1FinalSuccessAudio.play();
        game1FinalSuccessAudio.currentTime = 0;
    }
    else if (answersCount < 3) {
        game1BackAudio.pause();
        game1FinalFailAudio.play();
        game1FinalFailAudio.currentTime = 0;
    }
    messageText.innerText = `${settings.lang === "en"
        ? `You are completed with ${answersCount} correct answers.\nTo try again press Start again`
        : `Вы получили ${answersCount} правильных ответов.\n Чтобы повторить попытку, снова нажмите Пуск.`}`;
    const completeContainer = document.getElementById("game1-complete");
    question.classList.add("game1-close");
    answersBlock.classList.add("game1-close");
    nextBtn.classList.add("game1-close");
    completeContainer.classList.add("game1-open");
    (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_2__.sendScore)("Jedi's Mind", answersCount);
}
function startTimer() {
    const mainContainer = document.querySelector(".game1-main__container");
    if (mainContainer) {
        const second = document.getElementById("game1-second");
        seconds -= 1;
        if (seconds < 9) {
            second.innerText = `0${seconds}`;
        }
        if (seconds > 9) {
            second.innerText = seconds.toString();
        }
        if (second.innerText === "00") {
            const answersAll = Array.from(document.querySelectorAll(".game1-main__answer"));
            const question = document.getElementById("game1-question");
            const questionAtNow = questionsForGame.filter((el) => el.question === question.innerHTML)[0];
            const { correct } = questionAtNow;
            const nextBtn = document.getElementById("game1-nextBtn");
            answersAll
                .filter((el) => el.innerHTML !== correct)
                .forEach((el) => el.classList.add("game1-incorrect"));
            answersAll
                .filter((el) => el.innerHTML === correct)[0]
                .classList.add("game1-correct");
            clearInterval(timer);
            nextBtn.disabled = true;
            viewFinishMessage();
        }
    }
}
function clickAnswer() {
    const game1AnswerBlock = document.querySelector(".game1-main__answers-block");
    game1AnswerBlock.addEventListener("click", (event) => {
        const answersAll = Array.from(document.querySelectorAll(".game1-main__answer"));
        const question = document.getElementById("game1-question");
        const correctAnswers = document.querySelector(".game1-main__answers-count-number");
        const nextBtn = document.getElementById("game1-nextBtn");
        const questionAtNow = questionsForGame.filter((el) => el.question === question.innerHTML)[0];
        const { correct } = questionAtNow;
        const answer = event.target;
        function checkAnswerAllArray() {
            answersAll
                .filter((el) => el.innerHTML !== correct)
                .forEach((el) => el.classList.add("game1-incorrect"));
            answersAll
                .filter((el) => el.innerHTML === correct)[0]
                .classList.add("game1-correct");
        }
        if (answer.className === "game1-main__answer") {
            questionsAnsweredCount = (0,_componentsGame1__WEBPACK_IMPORTED_MODULE_10__.changeQuestionsAnsweredCountby1)(questionsAnsweredCount);
            if (answer.innerHTML === correct &&
                answersAll.filter((el) => el.classList.contains("game1-correct"))
                    .length === 0 &&
                answersAll.filter((el) => el.classList.contains("game1-incorrect"))
                    .length === 0 &&
                questionsAnsweredCount !== questionsForGame.length) {
                answersCount = (0,_componentsGame1__WEBPACK_IMPORTED_MODULE_10__.changeScore1)(answersCount);
                correctAnswers.innerHTML = String(answersCount);
                question.innerHTML = questionsForGame[questionsAnsweredCount].question;
                answersAll.forEach((element, i) => {
                    element.innerHTML =
                        questionsForGame[questionsAnsweredCount].answers[i];
                });
                game1CorrectAudio.play();
            }
            else if (answer.innerHTML !== correct &&
                questionsAnsweredCount !== questionsForGame.length) {
                checkAnswerAllArray();
                nextBtn.disabled = false;
                game1InCorrectAudio.play();
            }
            if (answer.innerHTML === correct &&
                answersAll.filter((el) => el.classList.contains("game1-correct"))
                    .length === 0 &&
                answersAll.filter((el) => el.classList.contains("game1-incorrect"))
                    .length === 0 &&
                questionsAnsweredCount === questionsForGame.length) {
                answersCount = (0,_componentsGame1__WEBPACK_IMPORTED_MODULE_10__.changeScore1)(answersCount);
                checkAnswerAllArray();
                clearInterval(timer);
                correctAnswers.innerHTML = String(answersCount);
                viewFinishMessage();
            }
            else if (answer.innerHTML !== correct &&
                questionsAnsweredCount === questionsForGame.length) {
                checkAnswerAllArray();
                nextBtn.disabled = true;
                clearInterval(timer);
                viewFinishMessage();
            }
        }
    });
}
const clickNext = () => {
    const main = document.querySelector(".main");
    main.addEventListener("click", (e) => {
        const question = document.getElementById("game1-question");
        const answersBlocks = document.querySelectorAll(".game1-main__answer");
        const nextBtn = document.getElementById("game1-nextBtn");
        if (e.target.id === "game1-nextBtn") {
            answersBlocks.forEach((el) => {
                el.classList.remove("game1-correct");
                el.classList.remove("game1-incorrect");
            });
            question.innerHTML = questionsForGame[questionsAnsweredCount].question;
            answersBlocks.forEach((element, i) => {
                element.innerHTML = questionsForGame[questionsAnsweredCount].answers[i];
            });
            nextBtn.disabled = true;
        }
    });
};
const startAgain = () => {
    const main = document.querySelector(".main");
    main.addEventListener("click", (e) => {
        const question = document.getElementById("game1-question");
        const answersBlock = document.querySelector(".game1-main__answers-block");
        const nextBtn = document.getElementById("game1-nextBtn");
        const completeContainer = document.getElementById("game1-complete");
        const answersBlocks = document.querySelectorAll(".game1-main__answer");
        const correctAnswers = document.querySelector(".game1-main__answers-count-number");
        if (e.target.id === "game1-resetBtn") {
            game1BackAudio.play();
            game1BackAudio.currentTime = 0;
            game1FinalFailAudio.pause();
            game1FinalSuccessAudio.pause();
            _core_data_questions__WEBPACK_IMPORTED_MODULE_0__.questions.sort((a, b) => a.id - a.id + Math.random() - (b.id - b.id + Math.random()));
            _core_data_questions__WEBPACK_IMPORTED_MODULE_0__.questions.forEach((el) => el.answers.sort(() => Math.random() - 0.5));
            questionsForGame = _core_data_questions__WEBPACK_IMPORTED_MODULE_0__.questions;
            answersCount = 0;
            questionsAnsweredCount = 0;
            question.classList.remove("game1-close");
            answersBlock.classList.remove("game1-close");
            nextBtn.classList.remove("game1-close");
            completeContainer.classList.remove("game1-open");
            question.innerHTML = questionsForGame[0].question;
            answersBlocks.forEach((element, i) => {
                element.classList.remove("game1-correct");
                element.classList.remove("game1-incorrect");
                element.innerHTML = questionsForGame[0].answers[i];
            });
            correctAnswers.innerHTML = String(answersCount);
            clearInterval(timer);
            seconds = 60;
            timer = setInterval(startTimer, 1000);
        }
    });
};
const startGame = () => {
    const main = document.querySelector(".main");
    main.addEventListener("click", (e) => {
        const startBtn = document.getElementById("game1-startBtn");
        const resetBtn = document.getElementById("game1-resetBtn");
        const mainGame = document.getElementById("game1-main-game");
        const question = document.getElementById("game1-question");
        const answersBlocks = document.querySelectorAll(".game1-main__answer");
        if (e.target.id === "game1-startBtn") {
            game1BackAudio.loop = true;
            game1BackAudio.play();
            game1BackAudio.currentTime = 0;
            _core_data_questions__WEBPACK_IMPORTED_MODULE_0__.questions.sort((a, b) => a.id - a.id + Math.random() - (b.id - b.id + Math.random()));
            _core_data_questions__WEBPACK_IMPORTED_MODULE_0__.questions.forEach((el) => el.answers.sort(() => Math.random() - 0.5));
            questionsForGame = _core_data_questions__WEBPACK_IMPORTED_MODULE_0__.questions;
            answersCount = 0;
            questionsAnsweredCount = 0;
            clearInterval(timer);
            question.innerHTML = questionsForGame[0].question;
            answersBlocks.forEach((element, i) => {
                element.innerHTML = questionsForGame[0].answers[i];
            });
            startBtn.disabled = true;
            resetBtn.disabled = false;
            mainGame.style.display = "block";
            timer = setInterval(startTimer, 1000);
        }
    });
};
function startGameMind() {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_3__.returnLocalStorage)();
    const wrapper = document.querySelector(".game1-wrapper");
    wrapper.innerHTML = "";
    wrapper.classList.add("game1-start");
    clearInterval(timer);
    seconds = 60;
    wrapper.innerHTML = `<div class="game1-main__container _game1-container">
  <h2 class="game1-main__title">Jedi's Mind</h2>
  <div class="game1-main__settings">
    <div class="game1-main__timer game1-timer">
      <div class="game1-timer__text">${settings.lang === "en" ? "Time:  " : "Время:  "}</div>
      <div id="game1-minute" class="game1-timer__minutes"></div>
      <div id="game1-second" class="game1-timer__seconds"> 60</div>
    </div>
    <div class="game1-main__buttons">
      <button id="game1-startBtn" class="game1-main__start-button game1-button">${settings.lang === "en" ? "Start" : "Начать"}</button>
      <button id="game1-resetBtn" class="game1-main__reset-button game1-button" disabled="true">
      ${settings.lang === "en" ? "Start again" : "Начать заново"}
      </button>
    </div>
    <div id="game1-answers-count" class="game1-main__answers-count"><span class="game1-main__answers-count-title">${settings.lang === "en" ? "Correct answers: " : "Правильные ответы: "}</span><span class="game1-main__answers-count-number"> 0</span></div>
  </div>
  <div id="game1-main-game" class="game1-main__body">
    <div id="game1-question" class="game1-main__question"></div>
    <div class="game1-main__answers-block">
      <div class="game1-main__answer"></div>
      <div class="game1-main__answer"></div>
      <div class="game1-main__answer"></div>
      <div class="game1-main__answer"></div>
    </div>
    <button id="game1-nextBtn" class="game1-main__next-button game1-button" disabled="true">
    ${settings.lang === "en" ? "Next" : "Следующий"}
    </button>
    <div id="game1-complete" class="game1-main__complete">
      <div id="game1-message" class="game1-main__complete-message">
        <div id="game1-message-text" class="game1-main__complete-text"></div>
      </div>
    </div>
  </div>
</div>`;
    window.addEventListener("hashchange", () => {
        if (window.location.href !== "#game1") {
            game1BackAudio.pause();
            game1FinalFailAudio.pause();
            game1FinalSuccessAudio.pause();
        }
    });
    startGame();
    clickAnswer();
    clickNext();
    startAgain();
}
function game1() {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_3__.returnLocalStorage)();
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("game1-wrapper");
    divWrapper.innerHTML = `
  <h2>Jedi's Mind</h2>
  <p class="game1-wrapper_info">${settings.lang === "en" ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_4__.gamesData.en[0].manual : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_4__.gamesData.ru[0].manual}</p>
  <div class="game1-wrapper_button"><span>${settings.lang === "en" ? "Start Game" : "Начать Игру"}</span></div>`;
    main.appendChild(divWrapper);
    const startBtn = document.querySelector(".game1-wrapper_button");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            startGameMind();
        });
    }
}
function translateGame1(lang) {
    const manual = document.querySelector(".game1-wrapper_info");
    const startBtn = document.querySelector(".game1-wrapper_button");
    const game1Timer = document.querySelector(".game1-timer__text");
    const startBtnCont = document.querySelector(".game1-main__buttons #game1-startBtn");
    const againBtnCont = document.querySelector(".game1-main__buttons #game1-resetBtn");
    const nextBtn = document.querySelector(".game1-main__next-button.game1-button");
    const messageText = document.getElementById("game1-message-text");
    const titleCorrectAnswer = document.querySelector(".game1-main__answers-count-title");
    if (startBtn && manual) {
        startBtn.innerHTML = `${lang === "en" ? "Start Game" : "Начать Игру"}`;
        manual.innerHTML = `${lang === "en" ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_4__.gamesData.en[0].manual : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_4__.gamesData.ru[0].manual}`;
    }
    if (game1Timer &&
        startBtnCont &&
        againBtnCont &&
        nextBtn &&
        messageText &&
        titleCorrectAnswer) {
        game1Timer.innerHTML = `${lang === "en" ? "Time: " : "Время: "}`;
        startBtnCont.innerHTML = `${lang === "en" ? "Start" : "Начать"}`;
        againBtnCont.innerHTML = `${lang === "en" ? "Start again" : "Начать заново"}`;
        nextBtn.innerHTML = `${lang === "en" ? "Next" : "Следующий"}`;
        messageText.innerText = `${lang === "en"
            ? `You are completed with ${answersCount} correct answers.\nTo try again press Start again`
            : `Вы получили ${answersCount} правильных ответов.\n Чтобы повторить попытку, снова нажмите Пуск.`}`;
        titleCorrectAnswer.innerText = `${lang === "en" ? "Correct answers: " : "Правильные ответы:"}`;
    }
}


/***/ }),

/***/ "./src/components/game2/componentsForGame2.ts":
/*!****************************************************!*\
  !*** ./src/components/game2/componentsForGame2.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deltaCurrentAnPrevTime": () => (/* binding */ deltaCurrentAnPrevTime)
/* harmony export */ });
function deltaCurrentAnPrevTime(a, b) {
    return a - b;
}


/***/ }),

/***/ "./src/components/game2/index.ts":
/*!***************************************!*\
  !*** ./src/components/game2/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeGame2AudioVolume": () => (/* binding */ changeGame2AudioVolume),
/* harmony export */   "game2": () => (/* binding */ game2),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "startGameAgility": () => (/* binding */ startGameAgility),
/* harmony export */   "translateGame2": () => (/* binding */ translateGame2)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/components/game2/index.css");
/* harmony import */ var _types_jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/jedi */ "./src/components/game2/types/jedi.ts");
/* harmony import */ var _types_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/background */ "./src/components/game2/types/background.ts");
/* harmony import */ var _types_enemy_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/enemy-controller */ "./src/components/game2/types/enemy-controller.ts");
/* harmony import */ var _types_score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/score */ "./src/components/game2/types/score.ts");
/* harmony import */ var _assets_images_enemy_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/enemy_1.png */ "./src/assets/images/enemy_1.png");
/* harmony import */ var _assets_images_enemy_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/enemy_2.png */ "./src/assets/images/enemy_2.png");
/* harmony import */ var _assets_images_enemy_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/enemy_3.png */ "./src/assets/images/enemy_3.png");
/* harmony import */ var _results_sendScore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../results/sendScore */ "./src/components/results/sendScore.ts");
/* harmony import */ var _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gamesInfo/gamesData */ "./src/components/gamesInfo/gamesData.ts");
/* harmony import */ var _assets_sounds_back_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/sounds/back-game5-starwars.mp3 */ "./src/assets/sounds/back-game5-starwars.mp3");
/* harmony import */ var _assets_sounds_failAudio_starwars_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/sounds/failAudio-starwars.mp3 */ "./src/assets/sounds/failAudio-starwars.mp3");
/* harmony import */ var _assets_sounds_game5_one_card_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/sounds/game5-one-card.mp3 */ "./src/assets/sounds/game5-one-card.mp3");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");
/* harmony import */ var _componentsForGame2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentsForGame2 */ "./src/components/game2/componentsForGame2.ts");















const game2BackAudio = new Audio(_assets_sounds_back_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_10__);
const game2FinalAudio = new Audio(_assets_sounds_failAudio_starwars_mp3__WEBPACK_IMPORTED_MODULE_11__);
const game2jumpSound = new Audio(_assets_sounds_game5_one_card_mp3__WEBPACK_IMPORTED_MODULE_12__);
game2jumpSound.volume = 0.5;
game2BackAudio.volume = 0.7;
game2FinalAudio.volume = 0.7;
function changeGame2AudioVolume(mode) {
    if (mode === true) {
        game2BackAudio.volume = 0.7;
        game2FinalAudio.volume = 0.7;
        game2jumpSound.volume = 0.5;
    }
    else if (mode === false) {
        game2BackAudio.volume = 0;
        game2FinalAudio.volume = 0;
        game2jumpSound.volume = 0;
    }
}
const gameSpeedStart = 0.55;
const gameSpeedIncrement = 0.00001;
const gameWidth = 800;
const gameHeight = 200;
const playerWidth = 100 / 1.5;
const playerHight = 100 / 1.5;
const maxJumpingHeight = gameHeight;
const minJumpingHeight = 150;
const groundWidth = 1000;
const groundHeight = 200;
const groundAndEnemySpeed = 0.5;
const enemyConfig = [
    {
        width: 62.37 / 1.5,
        height: 110 / 1.5,
        image: _assets_images_enemy_1_png__WEBPACK_IMPORTED_MODULE_5__,
    },
    {
        width: 148 / 1.5,
        height: 85 / 1.5,
        image: _assets_images_enemy_2_png__WEBPACK_IMPORTED_MODULE_6__,
    },
    {
        width: 90 / 1.5,
        height: 73 / 1.5,
        image: _assets_images_enemy_3_png__WEBPACK_IMPORTED_MODULE_7__,
    },
];
let scaleRatio;
let previousTime;
let player;
let ground;
let score;
let enemyController;
let gameSpeed = gameSpeedStart;
let gameOver = false;
let hasAddedEventListenersForRestart = false;
let waitingToStart = true;
function createSprites() {
    const canvas = document.getElementById("game_2");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        const playerWidthInGame = playerWidth * scaleRatio;
        const playerHightInGame = playerHight * scaleRatio;
        const minJumpHeightInGame = minJumpingHeight * scaleRatio;
        const maxJumpWidthInGame = maxJumpingHeight * scaleRatio;
        const groundWidthInGame = groundWidth * scaleRatio;
        const groundHeightInGame = groundHeight * scaleRatio;
        player = new _types_jedi__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, playerWidthInGame, playerHightInGame, minJumpHeightInGame, maxJumpWidthInGame, scaleRatio);
        ground = new _types_background__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, groundWidthInGame, groundHeightInGame, groundAndEnemySpeed, scaleRatio);
        const enemyImages = enemyConfig.map((e) => {
            const image = new Image();
            image.src = e.image;
            return {
                image,
                width: e.width * scaleRatio,
                height: e.height * scaleRatio,
            };
        });
        enemyController = new _types_enemy_controller__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, enemyImages, scaleRatio, groundAndEnemySpeed);
        score = new _types_score__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, scaleRatio);
    }
}
function showGameOver() {
    const settingsStart = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_13__.returnLocalStorage)();
    const canvas = document.getElementById("game_2");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#D713C3";
        const x = canvas.width / 4;
        const y = canvas.height / 7;
        ctx.fillText(`${settingsStart.lang === "en"
            ? "Game Over! Press Space or Tap Screen to Start Again"
            : "Конец игры! Нажмите пробел или коснитесь экрана"}`, x, y);
        window.addEventListener("keydown", player.keydown);
        window.addEventListener("keyup", player.keyup);
    }
}
function reset() {
    const mainChild = document.querySelector(".main")
        .childNodes[0];
    if (mainChild) {
        if (mainChild.classList.value === "game2-wrapper") {
            const container = document.querySelector(".game2-main__game");
            if (container) {
                const canvas = document.getElementById("game_2");
                canvas.addEventListener("touchstart", () => {
                    window.removeEventListener("keydown", player.keydown);
                    window.removeEventListener("keyup", player.keyup);
                });
            }
            hasAddedEventListenersForRestart = false;
            gameOver = false;
            waitingToStart = false;
            ground.reset();
            enemyController.reset();
            score.reset();
            gameSpeed = gameSpeedStart;
            const settingsStart = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_13__.returnLocalStorage)();
            game2BackAudio.loop = true;
            game2BackAudio.play();
            game2BackAudio.currentTime = 0;
            game2FinalAudio.pause();
            if (settingsStart.volume === true) {
                changeGame2AudioVolume(true);
            }
            else if (settingsStart.volume === false) {
                changeGame2AudioVolume(false);
            }
        }
    }
}
function setupGameReset() {
    if (!hasAddedEventListenersForRestart) {
        hasAddedEventListenersForRestart = true;
        window.addEventListener("keyup", reset, { once: true });
        window.addEventListener("touchstart", reset, { once: true });
    }
}
function showStartGameText() {
    const settingsStart = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_13__.returnLocalStorage)();
    const canvas = document.getElementById("game_2");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#D713C3";
        const x = canvas.width / 3;
        const y = canvas.height / 7;
        ctx.fillText(`${settingsStart.lang === "en"
            ? "Tap Screen or Press Space to Start"
            : "Нажмите пробел или коснитесь экрана"}`, x, y);
    }
}
function updateGameSpeed(frameTimeDelta) {
    gameSpeed += frameTimeDelta * gameSpeedIncrement;
}
function clearScreen() {
    const canvas = document.getElementById("game_2");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
function gameLoop(currentTime) {
    const container = document.querySelector(".game2-main__game");
    if (container) {
        container.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            player.jumpPressed = false;
            return false;
        });
        if (previousTime === null) {
            previousTime = currentTime;
            requestAnimationFrame(gameLoop);
            return;
        }
        const frameTimeDelta = (0,_componentsForGame2__WEBPACK_IMPORTED_MODULE_14__.deltaCurrentAnPrevTime)(currentTime, previousTime);
        previousTime = currentTime;
        clearScreen();
        if (!gameOver && !waitingToStart) {
            ground.update(gameSpeed, frameTimeDelta);
            enemyController.update(gameSpeed, frameTimeDelta);
            player.update(gameSpeed, frameTimeDelta);
            score.update(frameTimeDelta);
            updateGameSpeed(frameTimeDelta);
        }
        if (!gameOver && !waitingToStart) {
            window.removeEventListener("keyup", reset);
            window.removeEventListener("keydown", reset);
            document.body.removeEventListener("keyup", reset);
            document.body.removeEventListener("keydown", reset);
            window.removeEventListener("touchstart", reset);
            window.removeEventListener("touchend", reset);
        }
        if (!gameOver && enemyController.collideWith(player)) {
            gameOver = true;
            game2BackAudio.pause();
            game2FinalAudio.play();
            game2FinalAudio.currentTime = 0;
            (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_8__.sendScore)("Jedi's Agility", Math.trunc(score.score));
            setupGameReset();
        }
        ground.draw();
        enemyController.draw();
        player.draw();
        score.draw();
        if (gameOver) {
            showGameOver();
        }
        if (waitingToStart) {
            showStartGameText();
        }
        if (player.jumpPressed && !waitingToStart) {
            game2jumpSound.play();
        }
        const requestId = requestAnimationFrame(gameLoop);
        if (window.location.hash !== "#game2") {
            cancelAnimationFrame(requestId);
        }
    }
}
const startGameAgility = () => {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const body = document.createElement("div");
    body.classList.add("game2-wrapper");
    body.innerHTML = `<div class="game2-main__container _game2-container">
      <canvas id="game_2" class="game2-main__game"></canvas>
    </div>`;
    main.appendChild(body);
    const canvas = document.getElementById("game_2");
    function getScaleRatio() {
        const screenHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
        const screenWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
        if (screenWidth / screenHeight < gameWidth / gameHeight) {
            return screenWidth / gameWidth;
        }
        return screenHeight / gameHeight;
    }
    function setScreen() {
        scaleRatio = getScaleRatio();
        canvas.width = gameWidth * scaleRatio;
        canvas.height = gameHeight * scaleRatio;
        createSprites();
    }
    setScreen();
    window.addEventListener("resize", () => setTimeout(setScreen, 500));
    if (window.screen) {
        window.addEventListener("resize", setScreen);
    }
    requestAnimationFrame(gameLoop);
    const container = document.querySelector(".game2-main__game");
    if (container) {
        window.addEventListener("keyup", reset, { once: true });
        window.addEventListener("touchstart", reset, { once: true });
    }
};
window.addEventListener("hashchange", () => {
    if (window.location.hash === "#game2") {
        requestAnimationFrame(gameLoop);
    }
    if (player && window.location.hash !== "#game2") {
        game2BackAudio.pause();
        game2FinalAudio.pause();
        waitingToStart = true;
        gameOver = false;
        window.removeEventListener("keydown", player.keydown);
        window.removeEventListener("keyup", player.keyup);
        window.removeEventListener("touchend", player.touchend);
        window.removeEventListener("touchstart", player.touchstart);
    }
});
function game2() {
    const settingsStart = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_13__.returnLocalStorage)();
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("game2-wrapper");
    divWrapper.classList.remove("game2-start");
    divWrapper.innerHTML = `
  <h2>Jedi's Agility</h2>
  <p class="game2-wrapper_info">${settingsStart.lang === "en"
        ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_9__.gamesData.en[1].manual
        : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_9__.gamesData.ru[1].manual}</p>
  <div class="game2-wrapper_button"><span>${settingsStart.lang === "en" ? "Start Game" : "Начать Игру"}</span></div>`;
    main.appendChild(divWrapper);
    const startBtn = document.querySelector(".game2-wrapper_button");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            startGameAgility();
        });
    }
}
function translateGame2(lang) {
    const manual = document.querySelector(".game2-wrapper_info");
    const startBtn = document.querySelector(".game2-wrapper_button");
    if (startBtn && manual) {
        startBtn.innerHTML = `${lang === "en" ? "Start Game" : "Начать Игру"}`;
        manual.innerHTML = `${lang === "en" ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_9__.gamesData.en[1].manual : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_9__.gamesData.ru[1].manual}`;
    }
}


/***/ }),

/***/ "./src/components/game2/types/background.ts":
/*!**************************************************!*\
  !*** ./src/components/game2/types/background.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ground)
/* harmony export */ });
class Ground {
    constructor(ctx, width, height, speed, scaleRatio) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.scaleRatio = scaleRatio;
        this.x = 0;
        this.y = this.canvas.height - this.height;
        this.groundImage = new Image();
        this.groundImage.src = "./assets/background_game2.png";
    }
    draw() {
        this.ctx.drawImage(this.groundImage, this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.groundImage, this.x + this.width, this.y, this.width, this.height);
        if (this.x < -this.width) {
            this.x = 0;
        }
    }
    update(gameSpeed, frameTimeDelta) {
        this.x -= gameSpeed * frameTimeDelta * this.speed * this.scaleRatio;
    }
    reset() {
        this.x = 0;
    }
}


/***/ }),

/***/ "./src/components/game2/types/enemy-controller.ts":
/*!********************************************************!*\
  !*** ./src/components/game2/types/enemy-controller.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnemyController)
/* harmony export */ });
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/components/game2/types/enemy.ts");

class EnemyController {
    constructor(ctx, enemyImages, scaleRatio, speed) {
        this.enemy_interval_min = 600;
        this.enemy_interval_max = 2000;
        this.nextEnemyInterval = 0;
        this.enemy = [];
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.enemyImages = enemyImages;
        this.scaleRatio = scaleRatio;
        this.speed = speed;
        this.setNextEnemyTime();
    }
    setNextEnemyTime() {
        const num = this.getRandomNumber(this.enemy_interval_min, this.enemy_interval_max);
        this.nextEnemyInterval = num;
    }
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    createEnemy() {
        const index = this.getRandomNumber(0, this.enemyImages.length - 1);
        const enemyImage = this.enemyImages[index];
        const x = this.canvas.width * 1.5;
        const y = this.canvas.height - enemyImage.height;
        const enemy = new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, x, y, enemyImage.width, enemyImage.height, enemyImage.image);
        this.enemy.push(enemy);
    }
    update(gameSpeed, frameTimeDelta) {
        if (this.nextEnemyInterval <= 0) {
            this.createEnemy();
            this.setNextEnemyTime();
        }
        this.nextEnemyInterval -= frameTimeDelta;
        this.enemy.forEach((enemy) => {
            enemy.update(this.speed, gameSpeed, frameTimeDelta, this.scaleRatio);
        });
        this.enemy = this.enemy.filter((enemy) => enemy.x > -enemy.width);
    }
    draw() {
        this.enemy.forEach((enemy) => enemy.draw());
    }
    collideWith(sprite) {
        return this.enemy.some((enemy) => enemy.collideWith(sprite));
    }
    reset() {
        this.enemy = [];
    }
}


/***/ }),

/***/ "./src/components/game2/types/enemy.ts":
/*!*********************************************!*\
  !*** ./src/components/game2/types/enemy.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Enemy)
/* harmony export */ });
class Enemy {
    constructor(ctx, x, y, width, height, image) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }
    update(speed, gameSpeed, frameTimeDelta, scaleRatio) {
        this.x -= speed * gameSpeed * frameTimeDelta * scaleRatio;
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    collideWith(sprite) {
        const adjustBy = 1.4;
        if (sprite.x < this.x + this.width / adjustBy &&
            sprite.x + sprite.width / adjustBy > this.x &&
            sprite.y < this.y + this.height / adjustBy &&
            sprite.height + sprite.y / adjustBy > this.y) {
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ "./src/components/game2/types/jedi.ts":
/*!********************************************!*\
  !*** ./src/components/game2/types/jedi.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _assets_images_jedi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/images/jedi.png */ "./src/assets/images/jedi.png");
/* harmony import */ var _assets_images_jedi_run1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/jedi_run1.png */ "./src/assets/images/jedi_run1.png");
/* harmony import */ var _assets_images_jedi_run2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/jedi_run2.png */ "./src/assets/images/jedi_run2.png");



class Player {
    constructor(ctx, width, height, minJumpHeight, maxJumpHeight, scaleRatio) {
        this.walk_animation_timer = 200;
        this.walkAnimationTimer = this.walk_animation_timer;
        this.jediRunImages = [];
        this.jumpPressed = false;
        this.jumpInProgress = false;
        this.falling = false;
        this.jump_speed = 0.6;
        this.gravity = 0.35;
        this.keydown = (event) => {
            if (event.code === "Space") {
                this.jumpPressed = true;
            }
        };
        this.keyup = (event) => {
            if (event.code === "Space") {
                this.jumpPressed = false;
            }
        };
        this.touchstart = () => {
            const canvas = document.getElementById("game_2");
            if (canvas) {
                this.jumpPressed = true;
            }
        };
        this.touchend = () => {
            const canvas = document.getElementById("game_2");
            if (canvas) {
                this.jumpPressed = false;
            }
        };
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.width = width;
        this.height = height;
        this.minJumpHeight = minJumpHeight;
        this.maxJumpHeight = maxJumpHeight;
        this.scaleRatio = scaleRatio;
        this.x = 180 * scaleRatio;
        this.y = this.canvas.height - this.height - 1.5 * scaleRatio;
        this.yStandingPosition = this.y;
        this.standingStillImage = new Image();
        this.standingStillImage.src = _assets_images_jedi_png__WEBPACK_IMPORTED_MODULE_0__;
        this.image = this.standingStillImage;
        this.jediRunImage1 = new Image();
        this.jediRunImage1.src = _assets_images_jedi_run1_png__WEBPACK_IMPORTED_MODULE_1__;
        this.jediRunImage2 = new Image();
        this.jediRunImage2.src = _assets_images_jedi_run2_png__WEBPACK_IMPORTED_MODULE_2__;
        this.jediRunImages.push(this.jediRunImage1);
        this.jediRunImages.push(this.jediRunImage2);
        const canvas = document.getElementById("game_2");
        window.removeEventListener("keydown", this.keydown);
        window.removeEventListener("keyup", this.keyup);
        window.addEventListener("keydown", this.keydown);
        window.addEventListener("keyup", this.keyup);
        window.removeEventListener("touchstart", this.touchstart);
        window.removeEventListener("touchend", this.touchend);
        canvas.addEventListener("touchstart", this.touchstart);
        canvas.addEventListener("touchend", this.touchend);
    }
    update(gameSpeed, frameTimeDelta) {
        this.run(gameSpeed, frameTimeDelta);
        if (this.jumpInProgress) {
            this.image = this.standingStillImage;
        }
        this.jump(frameTimeDelta);
    }
    jump(frameTimeDelta) {
        if (this.jumpPressed) {
            this.jumpInProgress = true;
        }
        if (this.jumpInProgress && !this.falling) {
            if (this.y > this.canvas.height - this.minJumpHeight ||
                (this.y > this.canvas.height - this.maxJumpHeight && this.jumpPressed)) {
                this.y -= this.jump_speed * frameTimeDelta * this.scaleRatio;
            }
            else {
                this.falling = true;
            }
        }
        else if (this.y < this.yStandingPosition) {
            this.y += this.gravity * frameTimeDelta * this.scaleRatio;
            if (this.y + this.height > this.canvas.height) {
                this.y = this.yStandingPosition;
            }
        }
        else {
            this.falling = false;
            this.jumpInProgress = false;
        }
    }
    run(gameSpeed, frameTimeDelta) {
        if (this.walkAnimationTimer <= 0) {
            this.image =
                this.image === this.jediRunImages[0]
                    ? this.jediRunImages[1]
                    : this.jediRunImages[0];
            this.walkAnimationTimer = this.walk_animation_timer;
        }
        this.walkAnimationTimer -= frameTimeDelta * gameSpeed;
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}


/***/ }),

/***/ "./src/components/game2/types/score.ts":
/*!*********************************************!*\
  !*** ./src/components/game2/types/score.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Score)
/* harmony export */ });
class Score {
    constructor(ctx, scaleRatio) {
        this.score = 0;
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.scaleRatio = scaleRatio;
    }
    update(frameTimeDelta) {
        this.score += frameTimeDelta / 600;
    }
    reset() {
        this.score = 0;
    }
    draw() {
        const y = 30 * this.scaleRatio;
        const fontSize = 18 * this.scaleRatio;
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = "black";
        const scoreX = this.canvas.width - 85 * this.scaleRatio;
        const scorePadded = Math.floor(this.score).toString().padStart(6, "0");
        this.ctx.fillText(scorePadded, scoreX, y);
    }
}


/***/ }),

/***/ "./src/components/game3/constants/constants.ts":
/*!*****************************************************!*\
  !*** ./src/components/game3/constants/constants.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BACKGROUND_HEIGHT": () => (/* binding */ BACKGROUND_HEIGHT),
/* harmony export */   "BACKGROUND_WIDTH": () => (/* binding */ BACKGROUND_WIDTH),
/* harmony export */   "GAME3_BACKGROUND_AUDIO": () => (/* binding */ GAME3_BACKGROUND_AUDIO),
/* harmony export */   "GAME3_FINAL_AUDIO": () => (/* binding */ GAME3_FINAL_AUDIO),
/* harmony export */   "GAME3_MOVE_SOUND": () => (/* binding */ GAME3_MOVE_SOUND),
/* harmony export */   "GAME_HEIGHT": () => (/* binding */ GAME_HEIGHT),
/* harmony export */   "GAME_SPEED_INCREMENT": () => (/* binding */ GAME_SPEED_INCREMENT),
/* harmony export */   "GAME_SPEED_START": () => (/* binding */ GAME_SPEED_START),
/* harmony export */   "GAME_WIDTH": () => (/* binding */ GAME_WIDTH),
/* harmony export */   "MAX_LEFT_POS": () => (/* binding */ MAX_LEFT_POS),
/* harmony export */   "MAX_MOVE_DIST": () => (/* binding */ MAX_MOVE_DIST),
/* harmony export */   "MAX_RIGHT_POS": () => (/* binding */ MAX_RIGHT_POS),
/* harmony export */   "METEORS_AND_BACKGROUND_SPEED": () => (/* binding */ METEORS_AND_BACKGROUND_SPEED),
/* harmony export */   "METEOR_CONFIG": () => (/* binding */ METEOR_CONFIG),
/* harmony export */   "MIN_MOVE_DIST": () => (/* binding */ MIN_MOVE_DIST),
/* harmony export */   "PLAYER_HEIGHT": () => (/* binding */ PLAYER_HEIGHT),
/* harmony export */   "PLAYER_WIDTH": () => (/* binding */ PLAYER_WIDTH)
/* harmony export */ });
/* harmony import */ var _module_meteors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/meteors */ "./src/components/game3/module/meteors.ts");

const GAME3_BACKGROUND_AUDIO = new Audio("./assets/back-game5-starwars.mp3");
const GAME3_FINAL_AUDIO = new Audio("./assets/failAudio-starwars.mp3");
const GAME3_MOVE_SOUND = new Audio("./assets/game5-one-card.mp3");
const defaultMeteorSize = 80;
const spaceBetweenMeteors = 110;
const METEOR_CONFIG = [
    {
        img: (0,_module_meteors__WEBPACK_IMPORTED_MODULE_0__.createRandomMeteorImg)(),
        dx: 10,
        dy: -150,
        width: defaultMeteorSize,
        height: defaultMeteorSize,
    },
    {
        img: (0,_module_meteors__WEBPACK_IMPORTED_MODULE_0__.createRandomMeteorImg)(),
        dx: spaceBetweenMeteors,
        dy: -150,
        width: defaultMeteorSize,
        height: defaultMeteorSize,
    },
    {
        img: (0,_module_meteors__WEBPACK_IMPORTED_MODULE_0__.createRandomMeteorImg)(),
        dx: spaceBetweenMeteors * 2,
        dy: -150,
        width: defaultMeteorSize,
        height: defaultMeteorSize,
    },
    {
        img: (0,_module_meteors__WEBPACK_IMPORTED_MODULE_0__.createRandomMeteorImg)(),
        dx: spaceBetweenMeteors * 3,
        dy: -150,
        width: defaultMeteorSize,
        height: defaultMeteorSize,
    },
    {
        img: (0,_module_meteors__WEBPACK_IMPORTED_MODULE_0__.createRandomMeteorImg)(),
        dx: spaceBetweenMeteors * 4,
        dy: -150,
        width: defaultMeteorSize,
        height: defaultMeteorSize,
    },
    {
        img: (0,_module_meteors__WEBPACK_IMPORTED_MODULE_0__.createRandomMeteorImg)(),
        dx: spaceBetweenMeteors * 5,
        dy: -150,
        width: defaultMeteorSize,
        height: defaultMeteorSize,
    },
    {
        img: (0,_module_meteors__WEBPACK_IMPORTED_MODULE_0__.createRandomMeteorImg)(),
        dx: spaceBetweenMeteors * 6,
        dy: -150,
        width: defaultMeteorSize,
        height: defaultMeteorSize,
    },
];
const GAME_WIDTH = 750;
const GAME_HEIGHT = 750;
const BACKGROUND_WIDTH = GAME_WIDTH;
const BACKGROUND_HEIGHT = GAME_HEIGHT;
const PLAYER_WIDTH = 75;
const PLAYER_HEIGHT = 100;
const MAX_RIGHT_POS = GAME_WIDTH;
const MAX_LEFT_POS = 0;
const MAX_MOVE_DIST = 150;
const MIN_MOVE_DIST = 50;
const METEORS_AND_BACKGROUND_SPEED = 0.5;
const GAME_SPEED_START = 0.4;
const GAME_SPEED_INCREMENT = 0.000035;


/***/ }),

/***/ "./src/components/game3/index.ts":
/*!***************************************!*\
  !*** ./src/components/game3/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game3": () => (/* binding */ game3)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/components/game3/index.css");
/* harmony import */ var _module_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/start */ "./src/components/game3/module/start.ts");
/* harmony import */ var _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gamesInfo/gamesData */ "./src/components/gamesInfo/gamesData.ts");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");




function game3() {
    const main = document.querySelector(".main");
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_3__.returnLocalStorage)();
    main.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("game3-wrapper");
    div.innerHTML = `
  <h2>Jedi's Mobility</h2>
  <p class="game3-wrapper_info">${settings.lang === "en" ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_2__.gamesData.en[2].manual : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_2__.gamesData.ru[2].manual}</p>
  <div class="game3-wrapper_button"><span>${settings.lang === "en" ? "Start Game" : "Начать Игру"}</span></div>`;
    main.appendChild(div);
    const startBtn = document.querySelector(".game3-wrapper_button");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            (0,_module_start__WEBPACK_IMPORTED_MODULE_1__.startGame3)();
        });
    }
}


/***/ }),

/***/ "./src/components/game3/module/Background.ts":
/*!***************************************************!*\
  !*** ./src/components/game3/module/Background.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Background)
/* harmony export */ });
class Background {
    constructor(context, width, height, speed, scaleRatio) {
        this.context = context;
        this.canvas = context.canvas;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.scaleRatio = scaleRatio;
        this.x = 0;
        this.y = 0;
        this.imageBackground = new Image();
        this.imageBackground.src = "./assets/background.png";
    }
    draw() {
        this.context.drawImage(this.imageBackground, this.x, this.y, this.width, this.height);
        this.context.drawImage(this.imageBackground, this.x, this.y - this.height + 1.5, this.width, this.height);
        if (this.y > this.height) {
            this.y = 0;
        }
    }
    update(gameSpeed, frameTimeDelta) {
        this.y += gameSpeed * frameTimeDelta * this.speed * this.scaleRatio;
    }
    reset() {
        this.y = 0;
    }
}


/***/ }),

/***/ "./src/components/game3/module/Meteor.ts":
/*!***********************************************!*\
  !*** ./src/components/game3/module/Meteor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Meteor)
/* harmony export */ });
class Meteor {
    constructor(context, x, y, width, height, image) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }
    update(speed, gameSpeed, frameTimeDelta, scaleRatio) {
        this.y += speed * gameSpeed * frameTimeDelta * scaleRatio;
    }
    drawMeteor() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    collideWith(falcon) {
        const adjustBy = 1.2;
        if (falcon.x < this.x + this.width / adjustBy &&
            falcon.x + falcon.width / adjustBy > this.x &&
            falcon.y < this.y + this.height / adjustBy &&
            falcon.height + falcon.y / adjustBy > this.y) {
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ "./src/components/game3/module/MeteorsController.ts":
/*!**********************************************************!*\
  !*** ./src/components/game3/module/MeteorsController.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeteorsController)
/* harmony export */ });
/* harmony import */ var _Meteor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Meteor */ "./src/components/game3/module/Meteor.ts");
/* harmony import */ var _meteors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meteors */ "./src/components/game3/module/meteors.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/components/game3/constants/constants.ts");



class MeteorsController {
    constructor(context, scaleRatio, speed) {
        this.METEORS_INTERVAL_MIN = 1500;
        this.METEORS_INTERVAL_MAX = 2000;
        this.nextMeteorsLineInterval = 0;
        this.meteors = [];
        this.context = context;
        this.canvas = context.canvas;
        this.scaleRatio = scaleRatio;
        this.speed = speed;
        this.setNextMeteorsTime();
    }
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    setNextMeteorsTime() {
        const num = this.getRandomNumber(this.METEORS_INTERVAL_MIN, this.METEORS_INTERVAL_MAX);
        this.nextMeteorsLineInterval = num;
    }
    createMeteors() {
        (0,_meteors__WEBPACK_IMPORTED_MODULE_1__.createOneMeteorLine)(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.METEOR_CONFIG).forEach((met) => {
            const meteor = new _Meteor__WEBPACK_IMPORTED_MODULE_0__["default"](this.context, met.dx * this.scaleRatio, met.dy * this.scaleRatio, met.width * this.scaleRatio, met.height * this.scaleRatio, met.img);
            this.meteors.push(meteor);
        });
    }
    update(gameSpeed, frameTimeDelta) {
        if (this.nextMeteorsLineInterval <= 0) {
            this.createMeteors();
            this.setNextMeteorsTime();
        }
        this.nextMeteorsLineInterval -= frameTimeDelta;
        this.meteors.forEach((meteor) => {
            meteor.update(this.speed, gameSpeed, frameTimeDelta, this.scaleRatio);
        });
        this.meteors = this.meteors.filter((meteor) => meteor.y < this.canvas.height);
    }
    drawMeteors() {
        this.meteors.forEach((meteor) => {
            meteor.drawMeteor();
        });
    }
    collideWith(falcon) {
        return this.meteors.some((meteor) => meteor.collideWith(falcon));
    }
    reset() {
        this.meteors = [];
    }
}


/***/ }),

/***/ "./src/components/game3/module/Score.ts":
/*!**********************************************!*\
  !*** ./src/components/game3/module/Score.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Score)
/* harmony export */ });
class Score {
    constructor(context, scaleRatio) {
        this.score = 0;
        this.context = context;
        this.canvas = context.canvas;
        this.scaleRatio = scaleRatio;
    }
    update(frameTimeDelta) {
        this.score += frameTimeDelta / 600;
    }
    reset() {
        this.score = 0;
    }
    draw() {
        const y = this.canvas.height / 7;
        const fontSize = 18 * this.scaleRatio;
        this.context.font = `${fontSize}px sans-serif`;
        this.context.fillStyle = "white";
        const scoreX = this.canvas.width - 85 * this.scaleRatio;
        const scorePadded = Math.floor(this.score).toString().padStart(6, "0");
        this.context.fillText(scorePadded, scoreX, y);
    }
}


/***/ }),

/***/ "./src/components/game3/module/Ship.ts":
/*!*********************************************!*\
  !*** ./src/components/game3/module/Ship.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _assets_images_game_3_millennium_falcon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/images_game_3/millennium-falcon.png */ "./src/assets/images_game_3/millennium-falcon.png");

class Ship {
    constructor(context, width, height, maxMove, minMove, scaleRatio) {
        this.onTouchMove = (e) => {
            this.xPos = e.touches[0].clientX - this.width / 2;
            if (this.xPos < 0 + this.width) {
                this.xPos = 0;
            }
            if (this.xPos + this.width > this.canvas.width) {
                this.xPos = this.canvas.width - this.width;
            }
        };
        this.onMouseDown = (e) => {
            const padding = (window.innerWidth - this.canvasWidth) / 2;
            if (e.type === "mousedown") {
                this.xPos =
                    (e.clientX - padding) *
                        (this.scaleRatio > 1 ? this.scaleRatio : 1 / this.scaleRatio) -
                        this.width / 2;
                const onMouseMove = (event) => {
                    this.xPos =
                        (event.clientX - padding) *
                            (this.scaleRatio > 1 ? this.scaleRatio : 1 / this.scaleRatio) -
                            this.width / 2;
                    if (this.xPos < 0) {
                        this.xPos = 0;
                    }
                    if (this.xPos + this.width > this.canvas.width) {
                        this.xPos = this.canvas.width - this.width;
                    }
                };
                this.canvas.addEventListener("mousemove", onMouseMove);
                const onMouseUp = () => {
                    this.canvas.removeEventListener("mousemove", onMouseMove);
                };
                this.canvas.addEventListener("mouseup", onMouseUp);
            }
        };
        this.context = context;
        this.canvas = context.canvas;
        this.width = width;
        this.height = height;
        this.maxMove = maxMove;
        this.minMove = minMove;
        this.scaleRatio = scaleRatio;
        this.x = (this.canvas.width * scaleRatio) / 2;
        this.y = this.canvas.height - this.height - 20 * scaleRatio;
        this.imageFalcon = new Image();
        this.imageFalcon.src = _assets_images_game_3_millennium_falcon_png__WEBPACK_IMPORTED_MODULE_0__;
        this.image = this.imageFalcon;
        this.canvasElement = document.getElementById("game_3");
        this.canvasWidth = this.canvasElement.scrollWidth;
        this.xPos = (this.canvasWidth * scaleRatio + this.width / 2) / 2;
        this.canvas.removeEventListener("mouseup", this.onMouseDown);
        this.canvas.removeEventListener("touchmove", this.onTouchMove);
        this.canvas.addEventListener("mousedown", this.onMouseDown);
        this.canvas.addEventListener("touchmove", this.onTouchMove);
    }
    update() {
        this.x = this.xPos;
    }
    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}


/***/ }),

/***/ "./src/components/game3/module/meteors.ts":
/*!************************************************!*\
  !*** ./src/components/game3/module/meteors.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOneMeteorLine": () => (/* binding */ createOneMeteorLine),
/* harmony export */   "createRandomMeteorImg": () => (/* binding */ createRandomMeteorImg),
/* harmony export */   "meteorImgArr": () => (/* binding */ meteorImgArr)
/* harmony export */ });
const meteor1 = new Image();
meteor1.src = "./assets/meteor_1.png";
const meteor2 = new Image();
meteor2.src = "./assets/meteor_2.png";
const meteor3 = new Image();
meteor3.src = "./assets/meteor_3.png";
const meteor4 = new Image();
meteor4.src = "./assets/meteor_4.png";
const meteor5 = new Image();
meteor5.src = "./assets/meteor_5.png";
const meteor6 = new Image();
meteor6.src = "./assets/meteor_6.png";
const meteor7 = new Image();
meteor7.src = "./assets/meteor_7.png";
const meteor8 = new Image();
meteor8.src = "./assets/meteor_8.png";
const meteor9 = new Image();
meteor9.src = "./assets/meteor_9.png";
const meteor10 = new Image();
meteor10.src = "./assets/meteor_10.png";
const meteor11 = new Image();
meteor11.src = "./assets/meteor_11.png";
const meteor12 = new Image();
meteor12.src = "./assets/meteor_12.png";
const meteorImgArr = [
    meteor1,
    meteor2,
    meteor3,
    meteor4,
    meteor5,
    meteor6,
    meteor7,
    meteor8,
    meteor9,
    meteor10,
    meteor11,
    meteor12,
];
// eslint-disable-next-line no-unused-vars
let removedOneMeteor;
function createOneMeteorLine(arr) {
    const newArr = arr.slice();
    const randomNum = Math.floor(Math.random() * 7);
    removedOneMeteor = newArr.splice(randomNum, 1);
    return newArr;
}
function createRandomMeteorImg() {
    const randomNum = Math.floor(Math.random() * 11);
    return meteorImgArr[randomNum];
}


/***/ }),

/***/ "./src/components/game3/module/start.ts":
/*!**********************************************!*\
  !*** ./src/components/game3/module/start.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeGame3AudioVolume": () => (/* binding */ changeGame3AudioVolume),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "startGame3": () => (/* binding */ startGame3),
/* harmony export */   "translateGame3": () => (/* binding */ translateGame3)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/components/game3/constants/constants.ts");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/components/game3/module/Ship.ts");
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Background */ "./src/components/game3/module/Background.ts");
/* harmony import */ var _MeteorsController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeteorsController */ "./src/components/game3/module/MeteorsController.ts");
/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Score */ "./src/components/game3/module/Score.ts");
/* harmony import */ var _results_sendScore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../results/sendScore */ "./src/components/results/sendScore.ts");
/* harmony import */ var _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../gamesInfo/gamesData */ "./src/components/gamesInfo/gamesData.ts");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../module/localStorage */ "./src/components/module/localStorage.ts");
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */








_constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_MOVE_SOUND.volume = 0.5;
_constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_BACKGROUND_AUDIO.volume = 0.7;
_constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_FINAL_AUDIO.volume = 0.7;
let falcon;
let background;
let meteorsController;
let score;
let scaleRatio;
let previousTime;
let gameSpeed = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SPEED_START;
let gameOver = false;
let hasAddedEventListenersForRestart = false;
let waitingToStart = true;
function changeGame3AudioVolume(mode) {
    if (mode === true) {
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_BACKGROUND_AUDIO.volume = 0.7;
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_FINAL_AUDIO.volume = 0.7;
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_MOVE_SOUND.volume = 0.5;
    }
    else if (mode === false) {
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_BACKGROUND_AUDIO.volume = 0;
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_FINAL_AUDIO.volume = 0;
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_MOVE_SOUND.volume = 0;
    }
}
function createSprites() {
    const canvas = document.getElementById("game_3");
    if (canvas) {
        const context = canvas.getContext("2d");
        const shipWidthInGame = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_WIDTH * scaleRatio;
        const shipHeightInGame = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_HEIGHT * scaleRatio;
        const shipMinMoveInGame = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.MIN_MOVE_DIST * scaleRatio;
        const shipMaxMoveInGame = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.MAX_MOVE_DIST * scaleRatio;
        const backgroundWidthInGame = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BACKGROUND_WIDTH * scaleRatio;
        const backgroundHeightInGame = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.BACKGROUND_HEIGHT * scaleRatio;
        falcon = new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](context, shipWidthInGame, shipHeightInGame, shipMinMoveInGame, shipMaxMoveInGame, scaleRatio);
        background = new _Background__WEBPACK_IMPORTED_MODULE_2__["default"](context, backgroundWidthInGame, backgroundHeightInGame, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.METEORS_AND_BACKGROUND_SPEED, scaleRatio);
        meteorsController = new _MeteorsController__WEBPACK_IMPORTED_MODULE_3__["default"](context, scaleRatio, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.METEORS_AND_BACKGROUND_SPEED);
        score = new _Score__WEBPACK_IMPORTED_MODULE_4__["default"](context, scaleRatio);
    }
}
function showGameOver() {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_7__.returnLocalStorage)();
    const canvas = document.getElementById("game_3");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        const x = canvas.width / 6;
        const y = canvas.height / 7;
        ctx.fillText(`${settings.lang === "en"
            ? "            Game Over! Click mouse to Start Again"
            : "Конец игры! Нажмите левую кнопку мыши для повтора"}`, x, y);
    }
}
function reset() {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_7__.returnLocalStorage)();
    const mainChild = document.querySelector(".main")
        .childNodes[0];
    if (mainChild) {
        if (mainChild.classList.value === "game3-wrapper") {
            hasAddedEventListenersForRestart = false;
            gameOver = false;
            waitingToStart = false;
            background.reset();
            meteorsController.reset();
            score.reset();
            gameSpeed = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SPEED_START;
            _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_BACKGROUND_AUDIO.loop = true;
            _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_BACKGROUND_AUDIO.play();
            _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_BACKGROUND_AUDIO.currentTime = 0;
            _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_FINAL_AUDIO.pause();
            if (settings.volume === true) {
                changeGame3AudioVolume(true);
            }
            else if (settings.volume === false) {
                changeGame3AudioVolume(false);
            }
        }
    }
}
function setupGameReset() {
    const canvas = document.getElementById("game_3");
    if (!hasAddedEventListenersForRestart) {
        hasAddedEventListenersForRestart = true;
        setTimeout(() => {
            canvas.addEventListener("click", (e) => {
                if (e.type === "click") {
                    reset();
                }
            }, { once: true });
            if (canvas) {
                canvas.addEventListener("touchstart", () => {
                    reset();
                }, { once: true });
            }
        }, 500);
    }
}
function showStartGameText() {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_7__.returnLocalStorage)();
    const canvas = document.getElementById("game_3");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        const x = canvas.width / 4;
        const y = canvas.height / 7;
        ctx.fillText(`${settings.lang === "en"
            ? "                     Click mouse to Start"
            : "Для начала игры нажмите левую кнопку мыши"}`, x, y);
    }
}
function updateGameSpeed(frameTimeDelta) {
    gameSpeed += frameTimeDelta * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SPEED_INCREMENT;
}
function clearScreen() {
    const canvas = document.getElementById("game_3");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
function gameLoop(currentTime) {
    const container = document.querySelector(".game3-main_game");
    if (container) {
        if (previousTime === null) {
            previousTime = currentTime;
            requestAnimationFrame(gameLoop);
            return;
        }
        const frameTimeDelta = currentTime - previousTime;
        previousTime = currentTime;
        clearScreen();
        if (!gameOver && !waitingToStart) {
            background.update(gameSpeed, frameTimeDelta);
            meteorsController.update(gameSpeed, frameTimeDelta);
            falcon.update();
            score.update(frameTimeDelta);
            updateGameSpeed(frameTimeDelta);
        }
        if (!gameOver && meteorsController.collideWith(falcon)) {
            gameOver = true;
            _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_BACKGROUND_AUDIO.pause();
            _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_FINAL_AUDIO.play();
            _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_FINAL_AUDIO.currentTime = 0;
            (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_5__.sendScore)("Jedi's Mobility", Math.trunc(score.score));
            setupGameReset();
        }
        background.draw();
        meteorsController.drawMeteors();
        falcon.draw();
        score.draw();
        if (gameOver) {
            showGameOver();
        }
        if (waitingToStart) {
            showStartGameText();
        }
        const requestId = requestAnimationFrame(gameLoop);
        if (window.location.hash !== "#game3") {
            cancelAnimationFrame(requestId);
        }
    }
}
function startGame3() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const body = document.createElement("div");
    body.classList.add("game3-wrapper");
    body.innerHTML = `<div class="game3-main_container _game3-container">
      <canvas id="game_3" class="game3-main_game"></canvas>
    </div>`;
    main.appendChild(body);
    const canvas = document.getElementById("game_3");
    function getScaleRatio() {
        const screenHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
        const screenWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
        if (screenWidth / screenHeight < _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_WIDTH / _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_HEIGHT) {
            return screenWidth / _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_WIDTH;
        }
        return screenHeight / _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_HEIGHT;
    }
    function setScreen() {
        scaleRatio = getScaleRatio();
        canvas.width = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_WIDTH * scaleRatio;
        canvas.height = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_HEIGHT * scaleRatio;
        createSprites();
    }
    setScreen();
    window.addEventListener("resize", () => setTimeout(setScreen, 500));
    if (window.screen) {
        window.addEventListener("resize", setScreen);
    }
    requestAnimationFrame(gameLoop);
    const container = document.querySelector(".game3-main_game");
    if (container) {
        canvas.addEventListener("click", reset, { once: true });
        if (canvas) {
            canvas.addEventListener("touchstart", reset, { once: true });
        }
    }
}
window.addEventListener("hashchange", () => {
    if (window.location.hash === "#game3") {
        requestAnimationFrame(gameLoop);
    }
    const canvas = document.getElementById("game_3");
    if (falcon && window.location.hash !== "#game3") {
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_BACKGROUND_AUDIO.pause();
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME3_FINAL_AUDIO.pause();
        waitingToStart = true;
        gameOver = false;
        window.removeEventListener("mousedown", falcon.onMouseDown);
        if (canvas) {
            canvas.removeEventListener("touchstart", reset);
        }
    }
});
function translateGame3(lang) {
    const manual = document.querySelector(".game3-wrapper_info");
    const startBtn = document.querySelector(".game3-wrapper_button");
    if (startBtn && manual) {
        startBtn.innerHTML = `${lang === "en" ? "Start Game" : "Начать Игру"}`;
        manual.innerHTML = `${lang === "en" ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_6__.gamesData.en[2].manual : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_6__.gamesData.ru[2].manual}`;
    }
}


/***/ }),

/***/ "./src/components/game4/componentsGame4.ts":
/*!*************************************************!*\
  !*** ./src/components/game4/componentsGame4.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWin": () => (/* binding */ checkWin),
/* harmony export */   "emptySquares": () => (/* binding */ emptySquares)
/* harmony export */ });
function emptySquares(origBoard) {
    return origBoard.filter((e) => Number(e) >= 0);
}
const winCombinatios = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];
function checkWin(board, player) {
    const plays = board.reduce((a, e, i) => e === player ? a.concat(i.toString()) : a, []);
    let gameWon = null;
    for (let index = 0; index < winCombinatios.length; index += 1) {
        if (winCombinatios[index].every((elem) => plays.indexOf(elem.toString()) > -1)) {
            gameWon = { index, player };
            break;
        }
    }
    return gameWon;
}


/***/ }),

/***/ "./src/components/game4/index.ts":
/*!***************************************!*\
  !*** ./src/components/game4/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeGame4AudioVolume": () => (/* binding */ changeGame4AudioVolume),
/* harmony export */   "chipClick": () => (/* binding */ chipClick),
/* harmony export */   "drawScoreFromBackEnd": () => (/* binding */ drawScoreFromBackEnd),
/* harmony export */   "game4": () => (/* binding */ game4),
/* harmony export */   "retryBtnclick": () => (/* binding */ retryBtnclick),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "startGameTicTac": () => (/* binding */ startGameTicTac),
/* harmony export */   "translateGame4": () => (/* binding */ translateGame4)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/components/game4/index.css");
/* harmony import */ var _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gamesInfo/gamesData */ "./src/components/gamesInfo/gamesData.ts");
/* harmony import */ var _assets_sounds_back_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sounds/back-game5-starwars.mp3 */ "./src/assets/sounds/back-game5-starwars.mp3");
/* harmony import */ var _assets_sounds_final_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/sounds/final-game5-starwars.mp3 */ "./src/assets/sounds/final-game5-starwars.mp3");
/* harmony import */ var _assets_sounds_game5_one_card_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/sounds/game5-one-card.mp3 */ "./src/assets/sounds/game5-one-card.mp3");
/* harmony import */ var _assets_sounds_failAudio_starwars_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/sounds/failAudio-starwars.mp3 */ "./src/assets/sounds/failAudio-starwars.mp3");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");
/* harmony import */ var _module_Games__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../module/Games */ "./src/components/module/Games.ts");
/* harmony import */ var _results_sendScore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../results/sendScore */ "./src/components/results/sendScore.ts");
/* harmony import */ var _componentsGame4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentsGame4 */ "./src/components/game4/componentsGame4.ts");










const game4BackAudio = new Audio(_assets_sounds_back_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_2__);
const game4FinalAudio = new Audio(_assets_sounds_final_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_3__);
const game4OneCard = new Audio(_assets_sounds_game5_one_card_mp3__WEBPACK_IMPORTED_MODULE_4__);
const game4failAudio = new Audio(_assets_sounds_failAudio_starwars_mp3__WEBPACK_IMPORTED_MODULE_5__);
game4OneCard.volume = 0.5;
game4BackAudio.volume = 0.7;
game4FinalAudio.volume = 0.7;
game4failAudio.volume = 0.7;
function changeGame4AudioVolume(mode) {
    if (mode === true) {
        game4BackAudio.volume = 0.7;
        game4FinalAudio.volume = 0.7;
        game4failAudio.volume = 0.7;
        game4OneCard.volume = 0.5;
    }
    else if (mode === false) {
        game4BackAudio.volume = 0;
        game4FinalAudio.volume = 0;
        game4failAudio.volume = 0;
        game4OneCard.volume = 0;
    }
}
let origBoard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let humanPlay = "";
let ai = "";
let scoreUser;
function declareWinner(who) {
    const endBlock = document.getElementById("game4-end");
    const endMessage = document.getElementById("game4-endMessage");
    endBlock.classList.add("open");
    endMessage.innerHTML = who;
}
function bestSpot() {
    let thirdTurnAi = false;
    let aiTurn = "";
    const emptyCells = (0,_componentsGame4__WEBPACK_IMPORTED_MODULE_9__.emptySquares)(origBoard);
    const cells = Array.from(document.querySelectorAll(".game4-main__game-cell"));
    emptyCells.sort((a, b) => Number(a) -
        Number(a) +
        Math.random() -
        (Number(b) - Number(b) + Math.random()));
    const humanCells = [];
    for (let i = 0; i < cells.length; i += 1) {
        if (cells[i].innerText === humanPlay) {
            humanCells.push(cells[i]);
        }
    }
    if (humanCells.length === 1) {
        if (humanCells.filter((e) => e.id === "game4-cell-4").length === 0) {
            aiTurn = "game4-cell-4";
        }
        else {
            aiTurn = [cells[0], cells[2], cells[6], cells[8]].sort((a, b) => Number(a.id.split("-")[2]) -
                Number(a.id.split("-")[2]) +
                Math.random() -
                (Number(b.id.split("-")[2]) -
                    Number(b.id.split("-")[2]) +
                    Math.random()))[0].id;
        }
    }
    if (humanCells.length === 2) {
        if ((humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
            humanCells.filter((e) => e.id === "game4-cell-1").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-5").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-6").length > 0 &&
                cells[2].innerHTML !== ai) ||
            (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-5").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-5").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-8").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                cells[0].innerHTML === ai) ||
            (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-8").length > 0)) {
            aiTurn = "game4-cell-2";
        }
        if ((humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
            humanCells.filter((e) => e.id === "game4-cell-2").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-6").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-8").length > 0 &&
                cells[0].innerHTML !== ai) ||
            (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-3").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-6").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-6").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                cells[2].innerHTML === ai)) {
            aiTurn = "game4-cell-0";
        }
        if ((humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
            humanCells.filter((e) => e.id === "game4-cell-4").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-6").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-8").length > 0)) {
            aiTurn = "game4-cell-5";
        }
        if ((humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
            humanCells.filter((e) => e.id === "game4-cell-5").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-6").length > 0)) {
            aiTurn = "game4-cell-3";
        }
        if ((humanCells.filter((e) => e.id === "game4-cell-6").length > 0 &&
            humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-5").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
                cells[8].innerHTML !== ai) ||
            (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-3").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-5").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-5").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-6").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                cells[6].innerHTML === ai) ||
            (humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                cells[6].innerHTML === ai) ||
            (humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-5").length > 0)) {
            aiTurn = "game4-cell-8";
        }
        if ((humanCells.filter((e) => e.id === "game4-cell-7").length > 0 &&
            humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-3").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-2").length > 0 &&
                cells[6].innerHTML !== ai) ||
            (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-1").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-7").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-3").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                cells[8].innerHTML === ai)) {
            aiTurn = "game4-cell-6";
        }
        if ((humanCells.filter((e) => e.id === "game4-cell-0").length > 0 &&
            humanCells.filter((e) => e.id === "game4-cell-2").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-7").length > 0)) {
            aiTurn = "game4-cell-1";
        }
        if ((humanCells.filter((e) => e.id === "game4-cell-6").length > 0 &&
            humanCells.filter((e) => e.id === "game4-cell-8").length > 0) ||
            (humanCells.filter((e) => e.id === "game4-cell-4").length > 0 &&
                humanCells.filter((e) => e.id === "game4-cell-1").length > 0)) {
            aiTurn = "game4-cell-7";
        }
    }
    if (humanCells.length === 3) {
        if ((cells[0].innerHTML === ai &&
            cells[3].innerHTML === ai &&
            cells[6].innerHTML !== humanPlay) ||
            (cells[8].innerHTML === ai &&
                cells[7].innerHTML === ai &&
                cells[6].innerHTML !== humanPlay) ||
            (cells[2].innerHTML === ai &&
                cells[4].innerHTML === ai &&
                cells[6].innerHTML !== humanPlay)) {
            aiTurn = "game4-cell-6";
            thirdTurnAi = true;
        }
        if ((cells[6].innerHTML === ai &&
            cells[3].innerHTML === ai &&
            cells[0].innerHTML !== humanPlay) ||
            (cells[2].innerHTML === ai &&
                cells[1].innerHTML === ai &&
                cells[0].innerHTML !== humanPlay) ||
            (cells[8].innerHTML === ai &&
                cells[4].innerHTML === ai &&
                cells[0].innerHTML !== humanPlay)) {
            aiTurn = "game4-cell-0";
            thirdTurnAi = true;
        }
        if ((cells[8].innerHTML === ai &&
            cells[5].innerHTML === ai &&
            cells[2].innerHTML !== humanPlay) ||
            (cells[0].innerHTML === ai &&
                cells[1].innerHTML === ai &&
                cells[2].innerHTML !== humanPlay) ||
            (cells[6].innerHTML === ai &&
                cells[4].innerHTML === ai &&
                cells[2].innerHTML !== humanPlay)) {
            aiTurn = "game4-cell-2";
            thirdTurnAi = true;
        }
        if ((cells[2].innerHTML === ai &&
            cells[5].innerHTML === ai &&
            cells[8].innerHTML !== humanPlay) ||
            (cells[6].innerHTML === ai &&
                cells[7].innerHTML === ai &&
                cells[8].innerHTML !== humanPlay) ||
            (cells[0].innerHTML === ai &&
                cells[4].innerHTML === ai &&
                cells[8].innerHTML !== humanPlay)) {
            aiTurn = "game4-cell-8";
            thirdTurnAi = true;
        }
        if ((cells[0].innerHTML === ai &&
            cells[2].innerHTML === ai &&
            cells[1].innerHTML !== humanPlay) ||
            (cells[7].innerHTML === ai &&
                cells[4].innerHTML === ai &&
                cells[1].innerHTML !== humanPlay) ||
            (cells[0].innerHTML === ai &&
                cells[2].innerHTML === ai &&
                cells[1].innerHTML !== humanPlay)) {
            aiTurn = "game4-cell-1";
            thirdTurnAi = true;
        }
        if ((cells[6].innerHTML === ai &&
            cells[8].innerHTML === ai &&
            cells[7].innerHTML !== humanPlay) ||
            (cells[1].innerHTML === ai &&
                cells[4].innerHTML === ai &&
                cells[7].innerHTML !== humanPlay) ||
            (cells[8].innerHTML === ai &&
                cells[6].innerHTML === ai &&
                cells[7].innerHTML !== humanPlay)) {
            aiTurn = "game4-cell-7";
            thirdTurnAi = true;
        }
        if ((cells[0].innerHTML === ai &&
            cells[6].innerHTML === ai &&
            cells[3].innerHTML !== humanPlay) ||
            (cells[5].innerHTML === ai &&
                cells[4].innerHTML === ai &&
                cells[3].innerHTML !== humanPlay) ||
            (cells[0].innerHTML === ai &&
                cells[6].innerHTML === ai &&
                cells[3].innerHTML !== humanPlay)) {
            aiTurn = "game4-cell-3";
            thirdTurnAi = true;
        }
        if ((cells[2].innerHTML === ai &&
            cells[8].innerHTML === ai &&
            cells[5].innerHTML !== humanPlay) ||
            (cells[3].innerHTML === ai &&
                cells[4].innerHTML === ai &&
                cells[5].innerHTML !== humanPlay) ||
            (cells[2].innerHTML === ai &&
                cells[8].innerHTML === ai &&
                cells[5].innerHTML !== humanPlay)) {
            aiTurn = "game4-cell-5";
            thirdTurnAi = true;
        }
    }
    const aiCells = [];
    for (let i = 0; i < cells.length; i += 1) {
        if (cells[i].innerText === ai) {
            aiCells.push(cells[i]);
        }
    }
    if (humanCells.length === 3 && thirdTurnAi === false) {
        aiTurn = `game4-cell-${emptyCells[0]}`;
    }
    if (humanCells.length > 3) {
        aiTurn = `game4-cell-${emptyCells[0]}`;
    }
    return aiTurn;
}
function turnClick(e) {
    function gameOver(gameWon) {
        const settingsStart = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorage)();
        const scoreHTML = document.querySelector(".game4-main-score-number");
        const cells = Array.from(document.querySelectorAll(".game4-main__game-cell"));
        for (let i = 0; i < cells.length; i += 1) {
            cells[i].removeEventListener("click", turnClick, false);
        }
        const userTrue = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorageIsRegistered)();
        if (gameWon.player === humanPlay) {
            if (userTrue.isRegistred === "true") {
                scoreUser += 3;
                scoreHTML.innerHTML = `${scoreUser}`;
                (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_8__.sendScore)("Jedi's Strategy", scoreUser);
            }
            else if (userTrue.isRegistred === "false") {
                scoreHTML.innerHTML = `${Number(scoreHTML.innerHTML) + 3}`;
                (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_8__.sendScore)("Jedi's Strategy", Number(scoreHTML.innerHTML));
                localStorage.setItem("unknownStrategy", JSON.stringify(Number(scoreHTML.innerHTML)));
            }
        }
        else if (gameWon.player !== humanPlay) {
            if (userTrue.isRegistred === "true") {
                scoreUser -= 3;
                scoreHTML.innerHTML = `${scoreUser}`;
                (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_8__.sendScore)("Jedi's Strategy", scoreUser);
            }
            else if (userTrue.isRegistred === "false") {
                scoreHTML.innerHTML = `${Number(scoreHTML.innerHTML) - 3}`;
                (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_8__.sendScore)("Jedi's Strategy", Number(scoreHTML.innerHTML));
                localStorage.setItem("unknownStrategy", JSON.stringify(Number(scoreHTML.innerHTML)));
            }
        }
        declareWinner(gameWon.player === humanPlay
            ? `${settingsStart.lang === "en" ? "You win!" : "Вы победили!"}`
            : `${settingsStart.lang === "en" ? "You lose!" : "Вы проиграли!"}`);
        game4BackAudio.pause();
        if (gameWon.player === humanPlay) {
            game4FinalAudio.play();
            game4FinalAudio.currentTime = 0;
        }
        if (gameWon.player === ai) {
            game4failAudio.play();
            game4failAudio.currentTime = 0;
        }
    }
    function turn(squareId, player) {
        if (humanPlay) {
            game4OneCard.play();
            const chips = Array.from(document.querySelectorAll(".game4-main__chip"));
            chips.forEach((el) => el.classList.add("disable"));
            origBoard[Number(squareId.split("-")[2])] = player;
            const current = document.getElementById(squareId);
            current.innerHTML = player;
            if (player === "game4-yoda-chip") {
                current.classList.add("game4-yoda");
                current.removeEventListener("click", turnClick, false);
            }
            if (player === "game4-dart-chip") {
                current.classList.add("game4-dart");
                current.removeEventListener("click", turnClick, false);
            }
        }
    }
    function checkTie() {
        const userTrue = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorageIsRegistered)();
        const scoreHTML = document.querySelector(".game4-main-score-number");
        const gameWon = (0,_componentsGame4__WEBPACK_IMPORTED_MODULE_9__.checkWin)(origBoard, humanPlay);
        if ((0,_componentsGame4__WEBPACK_IMPORTED_MODULE_9__.emptySquares)(origBoard).length === 0 && !gameWon) {
            const settingsStart = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorage)();
            const cells = Array.from(document.querySelectorAll(".game4-main__game-cell"));
            cells.forEach((element) => {
                element.removeEventListener("click", turnClick, false);
            });
            declareWinner(`${settingsStart.lang === "en" ? "Tie game!" : "Ничья!"}`);
            game4BackAudio.pause();
            game4failAudio.play();
            game4failAudio.currentTime = 0;
            if (userTrue.isRegistred === "true") {
                scoreUser += 1;
                scoreHTML.innerHTML = `${scoreUser}`;
                (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_8__.sendScore)("Jedi's Strategy", scoreUser);
            }
            else if (userTrue.isRegistred === "false") {
                scoreHTML.innerHTML = `${Number(scoreHTML.innerHTML) + 1}`;
                (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_8__.sendScore)("Jedi's Strategy", Number(scoreHTML.innerHTML));
                localStorage.setItem("unknownStrategy", JSON.stringify(Number(scoreHTML.innerHTML)));
            }
            return true;
        }
        return false;
    }
    let gameWon = null;
    const target = e.target;
    if (Number(origBoard[Number(target.id.split("-")[2])]) >= 0) {
        turn(target.id, humanPlay);
        gameWon = (0,_componentsGame4__WEBPACK_IMPORTED_MODULE_9__.checkWin)(origBoard, humanPlay);
        if (gameWon) {
            gameOver(gameWon);
        }
    }
    if (!checkTie() && !gameWon) {
        turn(bestSpot(), ai);
        gameWon = (0,_componentsGame4__WEBPACK_IMPORTED_MODULE_9__.checkWin)(origBoard, ai);
        if (gameWon) {
            gameOver(gameWon);
        }
    }
}
function startGame() {
    const mainGame = document.querySelector(".game4-main__container");
    if (mainGame) {
        const chips = Array.from(document.querySelectorAll(".game4-main__chip"));
        chips.forEach((el) => el.classList.remove("disable", "chosen"));
        const cells = Array.from(document.querySelectorAll(".game4-main__game-cell"));
        cells.forEach((e) => {
            e.innerHTML = "";
            e.classList.remove("game4-yoda", "game4-dart");
            e.removeEventListener("click", turnClick, false);
        });
        origBoard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
        ai = "";
        humanPlay = "";
    }
}
function drawScoreFromBackEnd() {
    const statisticGames = new _module_Games__WEBPACK_IMPORTED_MODULE_7__.StatisticGames();
    const userTrue = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorageIsRegistered)();
    const obj = {
        username: userTrue.userName,
        option: "ascScore",
    };
    statisticGames.getScoreGamesUser(obj).then((result) => {
        const scoreHTML = document.querySelector(".game4-main-score-number");
        const propertyGame = Object.entries(result.scores).find((elem) => elem[0] === "Jedi's Strategy");
        /* scoreUser = propertyGame !== undefined ? propertyGame[1] : 0; */
        if (scoreHTML && window.location.hash === "#game4") {
            scoreUser = propertyGame !== undefined ? propertyGame[1] : 0;
            scoreHTML.innerHTML = `${scoreUser}`;
        }
    });
}
function startGameTicTac() {
    const settingsStart = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorage)();
    const userTrue = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorageIsRegistered)();
    const unknownScore = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorageUnknown)();
    game4BackAudio.loop = true;
    game4BackAudio.play();
    game4BackAudio.currentTime = 0;
    game4FinalAudio.pause();
    game4failAudio.pause();
    if (settingsStart.volume === true) {
        changeGame4AudioVolume(true);
    }
    else if (settingsStart.volume === false) {
        changeGame4AudioVolume(false);
    }
    if (userTrue.isRegistred === "true")
        drawScoreFromBackEnd();
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const body = document.createElement("div");
    body.classList.add(".game4-wrapper");
    body.innerHTML = `
  <div class="game4-main__container _game4-container">
    <div class="game4-main__settings">
      <div class="game4-main-header">
        <h2 class="game4-main__title">Jedi's Strategy</h2>
        <p class="game4-main-score">
          <span class="game4-main-score-title">
          ${settingsStart.lang === "en" ? "Score: " : "Счёт: "}
          </span>
          <span class="game4-main-score-number">${userTrue.isRegistred === "true"
        ? scoreUser
        : `${unknownScore !== null ? unknownScore : "0"}`}</span>
        </p>
      </div>
      <div class="game4-main__chips">
        <div id="game4-yoda-chip" class="game4-main__chip"></div>
        <div id="game4-dart-chip" class="game4-main__chip"></div>
      </div>
    </div>
    <div id="game4-main" class="game4-main__game-table">
      <div class="game4-main__game-row">
        <div id="game4-cell-0" class="game4-main__game-cell"></div>
        <div id="game4-cell-1" class="game4-main__game-cell"></div>
        <div id="game4-cell-2" class="game4-main__game-cell"></div>
      </div>
      <div class="game4-main__game-row">
        <div id="game4-cell-3" class="game4-main__game-cell"></div>
        <div id="game4-cell-4" class="game4-main__game-cell"></div>
        <div id="game4-cell-5" class="game4-main__game-cell"></div>
      </div>
      <div class="game4-main__game-row">
        <div id="game4-cell-6" class="game4-main__game-cell"></div>
        <div id="game4-cell-7" class="game4-main__game-cell"></div>
        <div id="game4-cell-8" class="game4-main__game-cell"></div>
      </div>
      <div id="game4-end" class="game4-main__endgame game4-endgame">
    <div id="game4-endMessage" class="game4-endgame__message"></div>
    <button id="game4-retryBtn" class="game4-endgame__button">${settingsStart.lang === "en" ? "Start again" : "Начать заново"}</button>
    </div>
    </div>
  </div>`;
    main.appendChild(body);
    startGame();
    window.addEventListener("hashchange", () => {
        if (window.location.href !== "#game4") {
            game4BackAudio.pause();
            game4FinalAudio.pause();
            game4failAudio.pause();
        }
    });
}
function game4() {
    const userTrue = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorageIsRegistered)();
    if (userTrue.isRegistred === "true")
        drawScoreFromBackEnd();
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorage)();
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("game4-wrapper");
    divWrapper.classList.remove("game4-start");
    divWrapper.innerHTML = `
  <h2>Jedi's Strategy</h2>
  <p class="game4-wrapper_info">${settings.lang === "en" ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_1__.gamesData.en[3].manual : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_1__.gamesData.ru[3].manual}</p>
  <div class="game4-wrapper_button"><span>${settings.lang === "en" ? "Start Game" : "Начать Игру"}</span></div>`;
    main.appendChild(divWrapper);
    const startBtn = document.querySelector(".game4-wrapper_button");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            startGameTicTac();
        });
    }
}
function retryBtnclick() {
    const main = document.querySelector(".main");
    main.addEventListener("click", (e) => {
        if (e.target.id === "game4-retryBtn") {
            const endBlock = document.getElementById("game4-end");
            endBlock.classList.remove("open");
            startGame();
            const settingsStart = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_6__.returnLocalStorage)();
            game4BackAudio.loop = true;
            game4BackAudio.play();
            game4BackAudio.currentTime = 0;
            game4FinalAudio.pause();
            game4failAudio.pause();
            if (settingsStart.volume === true) {
                changeGame4AudioVolume(true);
            }
            else if (settingsStart.volume === false) {
                changeGame4AudioVolume(false);
            }
        }
    });
}
function chipClick() {
    const main = document.querySelector(".main");
    main.addEventListener("click", (e) => {
        if (e.target.className === "game4-main__chip") {
            const chips = Array.from(document.querySelectorAll(".game4-main__chip"));
            chips.forEach((el) => el.classList.remove("chosen"));
            e.target.classList.add("chosen");
            humanPlay = e.target.id;
            if (humanPlay === "game4-yoda-chip")
                ai = "game4-dart-chip";
            else {
                ai = "game4-yoda-chip";
            }
            const cells = Array.from(document.querySelectorAll(".game4-main__game-cell"));
            cells.forEach((el) => {
                el.addEventListener("click", turnClick, false);
            });
            game4OneCard.play();
        }
    });
}
function translateGame4(lang) {
    const manual = document.querySelector(".game4-wrapper_info");
    const startBtn = document.querySelector(".game4-wrapper_button");
    const retryBtn = document.querySelector("#game4-retryBtn");
    const endMessage = document.getElementById("game4-endMessage");
    const scoreTitle = document.querySelector(".game4-main-score-title");
    if (startBtn && manual) {
        startBtn.innerHTML = `${lang === "en" ? "Start Game" : "Начать Игру"}`;
        manual.innerHTML = `${lang === "en" ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_1__.gamesData.en[3].manual : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_1__.gamesData.ru[3].manual}`;
    }
    if (retryBtn && endMessage) {
        retryBtn.innerHTML = `${lang === "en" ? "Start again" : "Начать заново"}`;
        scoreTitle.innerHTML = `${lang === "en" ? "Score: " : "Счёт: "}`;
        if (endMessage.innerHTML === "You win!") {
            endMessage.innerHTML = `${lang === "en" ? "You win!" : "Вы победили!"}`;
        }
        if (endMessage.innerHTML === "Вы победили!") {
            endMessage.innerHTML = `${lang === "ru" ? "Вы победили!" : "You win!"}`;
        }
        if (endMessage.innerHTML === "You lose!") {
            endMessage.innerHTML = `${lang === "en" ? "You lose!" : "Вы проиграли!"}`;
        }
        if (endMessage.innerHTML === "Вы проиграли!") {
            endMessage.innerHTML = `${lang === "ru" ? "Вы проиграли!" : "You lose!"}`;
        }
        if (endMessage.innerHTML === "Tie game!") {
            endMessage.innerHTML = `${lang === "en" ? "Tie game!" : "Ничья!"}`;
        }
        if (endMessage.innerHTML === "Ничья!") {
            endMessage.innerHTML = `${lang === "ru" ? "Ничья!" : "Tie game!"}`;
        }
    }
}


/***/ }),

/***/ "./src/components/game5/componentsGame5.ts":
/*!*************************************************!*\
  !*** ./src/components/game5/componentsGame5.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeScore20": () => (/* binding */ changeScore20)
/* harmony export */ });
function changeScore20(a) {
    return a - 20;
}


/***/ }),

/***/ "./src/components/game5/index.ts":
/*!***************************************!*\
  !*** ./src/components/game5/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeGame5AudioVolume": () => (/* binding */ changeGame5AudioVolume),
/* harmony export */   "game5": () => (/* binding */ game5),
/* harmony export */   "translateGame5": () => (/* binding */ translateGame5)
/* harmony export */ });
/* harmony import */ var _results_sendScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../results/sendScore */ "./src/components/results/sendScore.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/game5/index.css");
/* harmony import */ var _assets_starwars_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/starwars/background.jpg */ "./src/assets/starwars/background.jpg");
/* harmony import */ var _assets_starwars_ship_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/starwars/ship.jpg */ "./src/assets/starwars/ship.jpg");
/* harmony import */ var _assets_starwars_ship2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/starwars/ship2.jpg */ "./src/assets/starwars/ship2.jpg");
/* harmony import */ var _assets_starwars_ship3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/starwars/ship3.jpg */ "./src/assets/starwars/ship3.jpg");
/* harmony import */ var _assets_starwars_joda_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/starwars/joda.jpg */ "./src/assets/starwars/joda.jpg");
/* harmony import */ var _assets_starwars_joda2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/starwars/joda2.jpg */ "./src/assets/starwars/joda2.jpg");
/* harmony import */ var _assets_starwars_chukaba_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/starwars/chukaba.jpg */ "./src/assets/starwars/chukaba.jpg");
/* harmony import */ var _assets_starwars_kenobi_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/starwars/kenobi.jpg */ "./src/assets/starwars/kenobi.jpg");
/* harmony import */ var _assets_starwars_kenobi2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/starwars/kenobi2.jpg */ "./src/assets/starwars/kenobi2.jpg");
/* harmony import */ var _assets_starwars_kenobi3_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/starwars/kenobi3.jpg */ "./src/assets/starwars/kenobi3.jpg");
/* harmony import */ var _assets_starwars_mandalorec_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/starwars/mandalorec.jpg */ "./src/assets/starwars/mandalorec.jpg");
/* harmony import */ var _assets_starwars_mandalorec2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/starwars/mandalorec2.jpg */ "./src/assets/starwars/mandalorec2.jpg");
/* harmony import */ var _assets_starwars_mandalorec3_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/starwars/mandalorec3.jpg */ "./src/assets/starwars/mandalorec3.jpg");
/* harmony import */ var _assets_starwars_robot_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/starwars/robot.jpg */ "./src/assets/starwars/robot.jpg");
/* harmony import */ var _assets_starwars_stormtrooper_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/starwars/stormtrooper.jpg */ "./src/assets/starwars/stormtrooper.jpg");
/* harmony import */ var _assets_starwars_stormtrooper2_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/starwars/stormtrooper2.jpg */ "./src/assets/starwars/stormtrooper2.jpg");
/* harmony import */ var _assets_starwars_weid_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/starwars/weid.jpg */ "./src/assets/starwars/weid.jpg");
/* harmony import */ var _assets_starwars_weid2_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/starwars/weid2.jpg */ "./src/assets/starwars/weid2.jpg");
/* harmony import */ var _assets_starwars_weid3_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/starwars/weid3.jpg */ "./src/assets/starwars/weid3.jpg");
/* harmony import */ var _assets_sounds_back_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/sounds/back-game5-starwars.mp3 */ "./src/assets/sounds/back-game5-starwars.mp3");
/* harmony import */ var _assets_sounds_final_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/sounds/final-game5-starwars.mp3 */ "./src/assets/sounds/final-game5-starwars.mp3");
/* harmony import */ var _assets_sounds_game5_one_card_mp3__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/sounds/game5-one-card.mp3 */ "./src/assets/sounds/game5-one-card.mp3");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");
/* harmony import */ var _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../gamesInfo/gamesData */ "./src/components/gamesInfo/gamesData.ts");
/* harmony import */ var _componentsGame5__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentsGame5 */ "./src/components/game5/componentsGame5.ts");



























const arrImage = [
    { name: "ship", src: _assets_starwars_ship_jpg__WEBPACK_IMPORTED_MODULE_3__ },
    { name: "ship2", src: _assets_starwars_ship2_jpg__WEBPACK_IMPORTED_MODULE_4__ },
    { name: "ship3", src: _assets_starwars_ship3_jpg__WEBPACK_IMPORTED_MODULE_5__ },
    { name: "joda", src: _assets_starwars_joda_jpg__WEBPACK_IMPORTED_MODULE_6__ },
    { name: "joda2", src: _assets_starwars_joda2_jpg__WEBPACK_IMPORTED_MODULE_7__ },
    { name: "chukaba", src: _assets_starwars_chukaba_jpg__WEBPACK_IMPORTED_MODULE_8__ },
    { name: "kenobi", src: _assets_starwars_kenobi_jpg__WEBPACK_IMPORTED_MODULE_9__ },
    { name: "kenobi2", src: _assets_starwars_kenobi2_jpg__WEBPACK_IMPORTED_MODULE_10__ },
    { name: "kenobi3", src: _assets_starwars_kenobi3_jpg__WEBPACK_IMPORTED_MODULE_11__ },
    { name: "mandalorec", src: _assets_starwars_mandalorec_jpg__WEBPACK_IMPORTED_MODULE_12__ },
    { name: "mandalorec2", src: _assets_starwars_mandalorec2_jpg__WEBPACK_IMPORTED_MODULE_13__ },
    { name: "mandalorec3", src: _assets_starwars_mandalorec3_jpg__WEBPACK_IMPORTED_MODULE_14__ },
    { name: "robot", src: _assets_starwars_robot_jpg__WEBPACK_IMPORTED_MODULE_15__ },
    { name: "stormtrooper", src: _assets_starwars_stormtrooper_jpg__WEBPACK_IMPORTED_MODULE_16__ },
    { name: "stormtrooper2", src: _assets_starwars_stormtrooper2_jpg__WEBPACK_IMPORTED_MODULE_17__ },
    { name: "weid", src: _assets_starwars_weid_jpg__WEBPACK_IMPORTED_MODULE_18__ },
    { name: "weid2", src: _assets_starwars_weid2_jpg__WEBPACK_IMPORTED_MODULE_19__ },
    { name: "weid3", src: _assets_starwars_weid3_jpg__WEBPACK_IMPORTED_MODULE_20__ },
];
const game5BackAudio = new Audio(_assets_sounds_back_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_21__);
const game5FinalAudio = new Audio(_assets_sounds_final_game5_starwars_mp3__WEBPACK_IMPORTED_MODULE_22__);
const game5OneCard = new Audio(_assets_sounds_game5_one_card_mp3__WEBPACK_IMPORTED_MODULE_23__);
game5OneCard.volume = 0.5;
game5BackAudio.volume = 0.7;
game5FinalAudio.volume = 0.7;
function changeGame5AudioVolume(mode) {
    if (mode === true) {
        game5BackAudio.volume = 0.7;
        game5FinalAudio.volume = 0.7;
        game5OneCard.volume = 0.5;
    }
    else if (mode === false) {
        game5BackAudio.volume = 0;
        game5FinalAudio.volume = 0;
        game5OneCard.volume = 0;
    }
}
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
let result18 = 0;
let score = 1000;
let move = 0;
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
const flipCardHandler = (event) => {
    const target = event.target.closest(".game5-wrapper_div-card");
    if (!target)
        return;
    if (lockBoard)
        return;
    if (target === firstCard)
        return;
    target.classList.add("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        if (target.dataset.name) {
            firstCard = target;
            game5OneCard.play();
        }
        return;
    }
    if (target.dataset.name) {
        secondCard = target;
        game5OneCard.play();
        move += 1;
        document.querySelector(".game5-wrapper_header .game5-move-span-count").innerHTML = String(move);
        if (move > 18) {
            score = score > 0 ? (0,_componentsGame5__WEBPACK_IMPORTED_MODULE_26__.changeScore20)(score) : 0;
            document.querySelector(".game5-wrapper_header .game5-score-span-count").innerHTML = String(score);
        }
    }
    if (firstCard !== null && secondCard !== null) {
        if (firstCard.dataset.name === secondCard.dataset.name) {
            firstCard.removeEventListener("click", flipCardHandler);
            secondCard.removeEventListener("click", flipCardHandler);
            result18 += 1;
            if (result18 === 18) {
                (0,_results_sendScore__WEBPACK_IMPORTED_MODULE_0__.sendScore)("Jedi's Memory", score);
                document.querySelector(".game5-container_shadow").style.display = "flex";
                document.querySelector(".game5-container_shadow p .game5-win-count").innerHTML = String(score);
                game5BackAudio.pause();
                game5FinalAudio.play();
                game5FinalAudio.currentTime = 0;
            }
            resetBoard();
            return;
        }
    }
    lockBoard = true;
    setTimeout(() => {
        if (firstCard !== null && secondCard !== null) {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
        }
        resetBoard();
    }, 1000);
};
function playGame() {
    const cards = document.querySelectorAll(".game5-wrapper_div-card");
    cards.forEach((card) => {
        card.addEventListener("click", flipCardHandler);
    });
}
function shuffle() {
    const cards = document.querySelectorAll(".game5-wrapper_div-card");
    cards.forEach((card) => {
        const ramdomPos = Math.floor(Math.random() * 36);
        card.style.order = String(ramdomPos);
    });
}
function startGameMemory() {
    const settingsStart = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_24__.returnLocalStorage)();
    resetBoard();
    score = 1000;
    move = 0;
    result18 = 0;
    game5BackAudio.loop = true;
    game5BackAudio.play();
    game5BackAudio.currentTime = 0;
    game5FinalAudio.pause();
    if (settingsStart.volume === true) {
        changeGame5AudioVolume(true);
    }
    else if (settingsStart.volume === false) {
        changeGame5AudioVolume(false);
    }
    const wrapper = document.querySelector(".game5-wrapper");
    wrapper.innerHTML = "";
    wrapper.classList.add("game5-start");
    wrapper.innerHTML = `<div class="game5-wrapper_header">
      <h2>Jedi's Memory</h2>
      <div class="game5-wrapper_start-again-btn">${settingsStart.lang === "en" ? "Start again" : "Начать заново"}</div>
      <div class="game5-wrapper_score">
        <p class="game5-move"><span class="game5-move-span">${settingsStart.lang === "en" ? "Moves: " : "Ходы: "}</span><span class="game5-move-span-count">0</span></p>
        <p class="game5-score"><span class="game5-score-span">${settingsStart.lang === "en" ? "Score: " : "Счёт: "}</span><span class="game5-score-span-count">1000</span></p>
      </div>
    </div>
    `;
    const divCards = document.createElement("div");
    divCards.classList.add("game5-wrapper_container-cards");
    wrapper.appendChild(divCards);
    const shadow = document.createElement("div");
    shadow.classList.add("game5-container_shadow");
    shadow.innerHTML = `
    <div>
      <h3>${settingsStart.lang === "en" ? "You win!!" : "Вы победили!!"}</h3>
      <p><span class="game5-win-span">${settingsStart.lang === "en" ? "Your result: " : "Ваш результат: "}</span><span class="game5-win-count">0</span></p>
    </div>
  `;
    divCards.appendChild(shadow);
    function drawCards() {
        arrImage.forEach((image) => {
            const div = document.createElement("div");
            div.classList.add("game5-wrapper_div-card");
            div.dataset.name = image.name;
            div.innerHTML = `
        <img class="game5-card_front-face" src="${image.src}" alt="Face-starwars-card">
        <img class="game5-card_back-face" src="${_assets_starwars_background_jpg__WEBPACK_IMPORTED_MODULE_2__}" alt="Back-starwars-card">
      `;
            divCards.appendChild(div);
        });
    }
    drawCards();
    drawCards();
    shuffle();
    playGame();
    window.addEventListener("hashchange", () => {
        if (window.location.href !== "#game5") {
            game5BackAudio.pause();
            game5FinalAudio.pause();
        }
    });
    const startAgain = document.querySelector(".game5-wrapper_start-again-btn");
    if (startAgain) {
        startAgain.addEventListener("click", () => {
            startGameMemory();
        });
    }
}
function game5() {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_24__.returnLocalStorage)();
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("game5-wrapper");
    divWrapper.classList.remove("game5-start");
    divWrapper.innerHTML = `
  <h2>Jedi's Memory</h2>
  <p class="game5-wrapper_info">${settings.lang === "en" ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_25__.gamesData.en[4].manual : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_25__.gamesData.ru[4].manual}</p>
  <div class="game5-wrapper_button"><span>${settings.lang === "en" ? "Start Game" : "Начать Игру"}</span></div>`;
    main.appendChild(divWrapper);
    const startBtn = document.querySelector(".game5-wrapper_button");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            startGameMemory();
        });
    }
}
function translateGame5(lang) {
    const manual = document.querySelector(".game5-wrapper_info");
    const startBtn = document.querySelector(".game5-wrapper_button");
    const againBtn = document.querySelector(".game5-wrapper_start-again-btn");
    const movespan = document.querySelector(".game5-wrapper_score .game5-move-span");
    const scorespan = document.querySelector(".game5-wrapper_score .game5-score-span");
    const shadowh3 = document.querySelector(".game5-container_shadow h3");
    const shadowp = document.querySelector(".game5-container_shadow p .game5-win-span");
    if (startBtn && manual) {
        startBtn.innerHTML = `${lang === "en" ? "Start Game" : "Начать Игру"}`;
        manual.innerHTML = `${lang === "en" ? _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_25__.gamesData.en[4].manual : _gamesInfo_gamesData__WEBPACK_IMPORTED_MODULE_25__.gamesData.ru[4].manual}`;
    }
    if (againBtn && movespan && scorespan && shadowh3 && shadowp) {
        againBtn.innerHTML = `${lang === "en" ? "Start again" : "Начать заново"}`;
        movespan.innerHTML = `${lang === "en" ? "Moves: " : "Ходы: "}`;
        scorespan.innerHTML = `${lang === "en" ? "Score: " : "Счёт: "}`;
        shadowh3.innerHTML = `${lang === "en" ? "You win!!" : "Вы победили!!"}`;
        shadowp.innerHTML = `${lang === "en" ? "Your result: " : "Ваш результат: "}`;
    }
}


/***/ }),

/***/ "./src/components/gamesInfo/gamesData.ts":
/*!***********************************************!*\
  !*** ./src/components/gamesInfo/gamesData.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gamesData": () => (/* binding */ gamesData)
/* harmony export */ });
/* harmony import */ var _assets_game1_picture_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/game1_picture.png */ "./src/assets/game1_picture.png");
/* harmony import */ var _assets_game2_picture_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/game2_picture.png */ "./src/assets/game2_picture.png");
/* harmony import */ var _assets_game3_picture_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/game3_picture.png */ "./src/assets/game3_picture.png");
/* harmony import */ var _assets_game4_picture_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/game4_picture.png */ "./src/assets/game4_picture.png");
/* harmony import */ var _assets_game5_picture_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/game5_picture.png */ "./src/assets/game5_picture.png");
/* eslint-disable prettier/prettier */





const gamesData = {
    ru_title: "Способности Силы были проявлением возможностей чувствительных к Силе существ, например, джедаев или ситхов. Учёными эти способности были описаны как сверхъестественные явления, невозможные с точки зрения науки. Существовало множество способностей Силы, однако для освоения некоторых требовалась приверженность к светлой или тёмной стороне Силы, а для познания иных был необходим высокий потенциал и постоянные тренировки разума и тела.",
    en_title: "Force abilities were a manifestation of the capabilities of Force-sensitive beings, such as the Jedi or the Sith. Scientists have described these abilities as supernatural phenomena, impossible from the point of view of science. There were many abilities of the Force, however, the development of some required commitment to the light or dark side of the Force, and the knowledge of others required high potential and constant training of the mind and body.",
    ru_quote: "«Джедай использует Силу для познания и защиты, никогда для нападения» — Йода",
    en_quote: "«A Jedi uses the Force to know and protect, never to attack» — Yoda",
    ru: [
        {
            id: "game1",
            name: "Jedi's Mind",
            description: "Для поддержания силы разума джедая и существует данное упражнение-соревнование силы мысли.",
            manual: "В данной игре Вам предлагаются вопросы, для правильного ответа на которые необходимы знания типов данных, приведения типов в JavaScript. За 60 секунд Вам предстоимт ответить на 40 вопросов, при этом на каждый вопрос имеется лишь один правильный вариант ответа из четырех предложенных. За каждый правильный ответ начисляется 1 балл, за неверный - 0 баллов. Если Вы отвечаете неправильно, то правильный ответ подсветится зеленым цветом, неверные - красным, а для перехода к следующему вопросу необходимо нажать кнопку 'Следующий'. В любой момент Вы можете нажать кнопку 'Начать заново', в результате чего игровой процесс начнется сначала, при этом последовательность вопросов и расположение вариантов ответов изменится случайным образом. По истечении времени либо выполнении всех 40 вопросов, в зависимости от того, какое из событий наступит быстрее, Вы увидите сообщение с правильныv количеством отвеченных вопросов.",
            rules: "Правила игры: Вам необходимио за 60 секунд ответить верно на как можно большее количество вопросов, каждый правильный ответ дает вам 1 балл. По завершении времени Джедай может сравнить свои способности с остальными в таблице результатов.",
            pictureUrl: `${_assets_game1_picture_png__WEBPACK_IMPORTED_MODULE_0__}`,
            button: "Играть",
        },
        {
            id: "game2",
            name: "Jedi's Agility",
            description: "Каким бы ни был разум Джедая, его тело также нуждается в ежедневных тренировках. В данной игре вам предоставляется возможность проявить ловкость своих пальцев и быстроту реакции. Вам необходимио помочь Люку Скайокеру в его тренировках.",
            manual: "В данной игре Вам необходимо бесконечно преодолевать врагов, выставленных в качестве препятствий на Вашем пути, перепрыгивая их. При этом препятствия имеют различные габариты и расставлены на Вашем пути случайным образом. Вы обладаете двумя видами прыжков: выоский - для преодоления массивных препятствий, и низкий - для преодоления незначительных препятствий. Однако чем выше Ваш прыжок, тем дольше Вы будете приземляться, рискуя попасть прямо на соперника. С каждой секундой скорость Вашего передвижения увеличивается. Если Вы с кем-либо столкнетесь либо упадете на голову Вашему врагу, то игра закончится. Чем дольше Вы находитесь в игре, тем больше очков Вам будет начислено. По окончанию игры игровой процесс можно начать сначала, нажав любую клавишу. Запаситесь энергией и терпением, так как игра не предусматривает возможности поставить паузу.",
            rules: "Правила игры: Вам необходимио избегать столкновений с врагами, ведь Джедай использует Силу для познания и защиты, никогда для нападения. Чем дольше сможете избегать прямого контакта с врагами - тем больше очков будет получено. По завершении времени Джедай может сравнить свои способности с остальными в таблице результатов.",
            pictureUrl: `${_assets_game2_picture_png__WEBPACK_IMPORTED_MODULE_1__}`,
            button: "Играть",
        },
        {
            id: "game3",
            name: "Jedi's Mobility",
            description: "Быть сильным физически и умственно - это замечательно, но ты не сможешь быть соверешенным, если ты не владеешь навыками пилотирования корабля, благодаря которым Джедаю открываются новые горизонты и возможности. В данной игре Вам предоставляется возможность проявить и улучшить свои навыки пилотирования.",
            manual: "Для начала игры нажмите на левую кнопку мыши, для управления кораблем - используйте левую кнопку мыши, зажимая её - перетягивайте корабль. В данной игре Вам необходимо бесконечно преодолевать препятствия, попадающиеся на Вашем пути, облетая их. При этом препятствия расставлены на Вашем пути случайным образом, и для преодоления каждого из них существует лишь один верный путь. С каждой секундой скорость Вашего полета увеличивается. Если Вы с чем-либо столкнетесь, то игра закончится. Чем дольше Вы находитесь в игре, тем больше очков Вам будет начислено. По окончанию игры игровой процесс можно начать сначала, нажав на левую кнопку мыши. Запаситесь энергией и терпением, так как игра не предусматривает возможности поставить паузу.",
            rules: "Правила игры: Вам необходимио, управляя Тысячелетним Соколом, избегать столкновений с космческими объектами, чем больше объектов сможете пролететь, тем больше получите очков. По завершении времени Джедай может сравнить свои способности с остальными в таблице результатов.",
            pictureUrl: `${_assets_game3_picture_png__WEBPACK_IMPORTED_MODULE_2__}`,
            button: "Играть",
        },
        {
            id: "game4",
            name: "Jedi's Strategy",
            description: "Каждый Джедай должен обладать одним из обязательных качеств на пути к совершенному контролю Силы - навыками стратегии. Для этого требуется ежедневные тренировки по улучшению стратегических навыков.",
            manual: "Вам предлагается сыграть в крестики-нолики против компьютера. Для начала игры Вам необходимо выбрать персонажа в качестве фишки, которая будет использоваться на игровом поле. Для победы над соперником Вам необходимо изначально сделать правильные ходы, и, увидя Вашу силу, соперник может испугаться и начать совершать ошибки, и тогда Ваша победа будет в Ваших руках, главное не спешите, ведь Вы не ограничены во времени. За победу Вы получаете три очка, за ничью - 1, а при поражении у Вас снимется три балла. По окончанию игры Вы можете начать ее вновь, нажав на кнопку 'Начать заново', выбрав персонажа. В таблицу результатов будет занесено Ваше текущее достижение в баллах, при условии, что оно будет превышать ваше максимальное достижение из таблицы результатов.",
            rules: "Правила игры: Вам необходимо проявить все свои лучшие качества, приобретенные во всех тренировках, а также навыки стратега и нанести сокрушительный удар по темной стороне Силы. За каждую победу вы будете вознаграждены одним очком опыта. Удачи в сражении!",
            pictureUrl: `${_assets_game4_picture_png__WEBPACK_IMPORTED_MODULE_3__}`,
            button: "Играть",
        },
        {
            id: "game5",
            name: "Jedi's Memory",
            description: "В данной игре Вам предоставляется возможность проявить свою способность к запоминанию. Также это отличная возможность Джедаю потренировать свои способности к теликинезу и удивить всех своим результатом.",
            manual: "Игра предлагает Вам 36 перевернутых рубашкой вверх карт, каждая из которых имеет своего 'двойника'. Вашей целью является найти для каждой карты этого 'двойника', собрав на игровом поле 18 пар. Изначально Вы имеете 1 000 очков, имея возможность одновременно видеть две открытых карты, а если данные карты идентичны, то они остаются открытыми до конца игры, и Вы вправе открыть новые две карты. Если при открытии второй карты, она не совпадет с первой, то данные карты закроются. Каждым ходом является открытие двух карт, а с 19 хода Ваши очки начнут уменьшатся на 20 за каждый ход. Будьте внимательны и не спешите, ведь Вы не ограничены во времени, старайтесь запомнить расположение кахдой карты. В любой момент Вы можете нажать кнопку 'Начать заново', в результате чего игровой процесс начнется сначала, при этом карты будут разложены в новом случайном порядке.",
            rules: "Правила игры: Изначально вам предоставляется 1000 очков и 36 перевернутых рубашкой вверх карт. Ваша задача, открывая по 2 карты, найти пару каждой карте. Если 2 открытых карты не совпадают, то они снова поворачиваются рубашкой вверх. Первые 18 поворотов пар карт не уменьшают количество очков, далее за кждую последующую перевернутую пару отнимается 20 очков, если игра закончена более, чем за 68 ходов - Джедай получает 0 очков.",
            pictureUrl: `${_assets_game5_picture_png__WEBPACK_IMPORTED_MODULE_4__}`,
            button: "Играть",
        },
    ],
    en: [
        {
            id: "game1",
            name: "Jedi's Mind",
            description: "To maintain the power of the mind of the Jedi, there is this exercise-competition of the power of thought.",
            manual: "In this game you are offered questions, for the correct answer to which you need knowledge of data types and type conversion in JavaScript. In 60 seconds you have to answer 40 questions, and each question has only one correct answer out of four suggested. You get 1 point for each correct answer, 0 points for an incorrect one. If you answer incorrectly, the correct answer will be highlighted in green, incorrect ones in red, and to move to the next question you need to click the 'Next' button. At any time, you can click the 'Start again' button, as a result of which the game loop will start over, while the sequence of questions and the location of the answer options will change randomly. After the time has elapsed or all 40 questions have been completed, depending on which of the events will occur faster, you get a message with the correct number of questions answered.",
            rules: "Game rules: You need to answer as many questions correctly as possible in 60 seconds, each correct answer gives you 1 point. At the end of the time, the Jedi can compare his abilities with the rest in the scoreboard.",
            pictureUrl: `${_assets_game1_picture_png__WEBPACK_IMPORTED_MODULE_0__}`,
            button: "Play",
        },
        {
            id: "game2",
            name: "Jedi's Agility",
            description: "Whatever the mind of a Jedi, his body also needs daily exercise. In this game, you are given the opportunity to show the dexterity of your fingers and quick reaction. You need to help Luke Skywalker in his training.",
            manual: "In this game, you need endlessly to overcome the enemies set up as obstacles in your way by jumping over them. At the same time, the obstacles have different dimensions and are placed randomly on your way. You have two types of jumps: high - to overcome massive obstacles, and low - to overcome minor obstacles. However, the higher your jump, the longer it will take you to land with risk of falling directly on the opponent. Also every second your movement speed increases . If you collide with someone or fall on your enemy, the game is over. The longer you stay in the game, the more points you will be awarded. At the end of the game, game loop can be started from the beginning by pressing any key. Stock up on energy and patience, as the game does not provide an opportunity to pause.",
            rules: "Game Rules: You need to avoid collisions with enemies, because the Jedi uses the Force for knowledge and defense, never for offense. The longer you can avoid direct contact with enemies, the more points you will get. At the end of the time, the Jedi can compare his abilities with the rest in the scoreboard.",
            pictureUrl: `${_assets_game2_picture_png__WEBPACK_IMPORTED_MODULE_1__}`,
            button: "Play",
        },
        {
            id: "game3",
            name: "Jedi's Mobility",
            description: "Being strong physically and mentally is great, but you can't be perfect if you don't have the skills to pilot a ship that open up new horizons and possibilities for a Jedi. In this game you are given the opportunity to show and improve your piloting skills.",
            manual: "To start the game, press the left mouse button, to control the ship - use the left mouse button, while holding it - drag the ship. In this game, you need to endlessly overcome obstacles that come in your way, flying around them. At the same time, obstacles are placed on your way randomly, and there is only one right way to overcome each of them. With every second, the speed of your flight increases. If you collide with anything, the game will end. The longer you are in the game, the more points you will be awarded. At the end of the game, the gameplay can be restarted by clicking on the left mouse button. Stock up on energy and patience, as the game does not provide for the ability to pause.",
            rules: "Game rules: When you control the Millennium Falcon, you need to avoid collisions with space objects, the more objects you can fly, the more points you get. At the end of the time, the Jedi can compare his abilities with the rest in the scoreboard.",
            pictureUrl: `${_assets_game3_picture_png__WEBPACK_IMPORTED_MODULE_2__}`,
            button: "Play",
        },
        {
            id: "game4",
            name: "Jedi's Strategy",
            description: "Every Jedi must possess one of the essential qualities on the path to perfect control of the Force - the skill of strategy. This requires daily training to improve strategic skills.",
            manual: "You are invited to play tic-tac-toe against the computer. To start the game, you need to select a character as a token that will be used on the playing field. To defeat an opponent, you need to initially make the right moves, and, seeing your strength, your opponent may get scared and start making mistakes, and then your victory will be in your hands, the main thing is not to rush, because you are not limited in time. You get 3 points for a win, 1 for a draw, and 3 points will be deducted for a loss. At the end of the game, you can start it again by clicking on the 'Start over' button, selecting a character. Your current achievement in points will be entered in the results table, provided that it exceeds your maximum achievement from the results table.",
            rules: "Game rules: You need to show all your best qualities acquired in all trainings, as well as the skills of a strategist and deal a crushing blow to the dark side of the Force. For each victory you will be rewarded with one experience point. Good luck in battle!",
            pictureUrl: `${_assets_game4_picture_png__WEBPACK_IMPORTED_MODULE_3__}`,
            button: "Play",
        },
        {
            id: "game5",
            name: "Jedi's Memory",
            description: "In this game you are given the opportunity to show your ability to memorize. It is also a great opportunity for a Jedi to train his telekinesis abilities and surprise everyone with his result.",
            manual: "The game offers you 36 face-down cards, each of which has its own 'twin'. Your goal is to find this 'twin' for each card by collecting 18 pairs on the playing field. Initially, you have 1,000 points, having the opportunity to see two open cards at the same time, and if these cards are identical, then they remain open until the end of the game, and you have the right to open two new cards. When opening the second card does not match the first one, theese  two cards will be closed. Each turn is the opening of two cards, and from the 19th turn your points will start to decrease by 20 for each turn. Be careful and take your time, because you are not limited in time, try to remember the location of each card. At any time, you can click the 'Start again' button, as a result of which the gameplay will start over, while the cards will be laid out in a new random order.",
            rules: "Game rules: Initially, you are given 1000 points and 36 cards turned face down. Your task, opening 2 cards, is to find a pair of each card. If the 2 open cards do not match, they are turned face down again. The first 18 turns of pairs of cards do not reduce the number of points, then 20 points are taken away for each subsequent turned pair of cards, if the game is over in more than 68 turns - the Jedi receives 0 points.",
            pictureUrl: `${_assets_game5_picture_png__WEBPACK_IMPORTED_MODULE_4__}`,
            button: "Play",
        },
    ],
};


/***/ }),

/***/ "./src/components/gamesInfo/index.ts":
/*!*******************************************!*\
  !*** ./src/components/gamesInfo/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGamesInfoSection": () => (/* binding */ createGamesInfoSection),
/* harmony export */   "redrawGameInfoSectionForToggleLang": () => (/* binding */ redrawGameInfoSectionForToggleLang)
/* harmony export */ });
/* harmony import */ var _gamesData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamesData */ "./src/components/gamesInfo/gamesData.ts");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/gamesInfo/index.css");



function drawArrow(name) {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_1__.returnLocalStorage)();
    const main = document.querySelector(".main");
    const arrow = document.createElement("div");
    arrow.classList.add(name);
    arrow.hidden = true;
    if (name === "arrowUp") {
        if (settings.style === "dark") {
            arrow.classList.add("dark");
        }
        else {
            arrow.classList.remove("dark");
        }
        arrow.innerHTML = `<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 512 512" xml:space="preserve">
<g>
 <g>
   <g>
     <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333
       c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333
       z"/>
     <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17
       l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17
       C369.42,189.917,355.913,189.917,347.582,198.248z"/>
   </g>
 </g>
</g>
</svg>`;
    }
    else if (name === "arrowDown") {
        arrow.innerHTML = `<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 512 512" xml:space="preserve">
<g>
 <g>
   <g>
     <path fill="white" d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17
       l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17
       C369.42,189.917,355.913,189.917,347.582,198.248z"/>
   </g>
 </g>
</g>
</svg>`;
    }
    main.appendChild(arrow);
}
function drawArrowUP() {
    drawArrow("arrowUp");
    const arrow = document.querySelector(".arrowUp");
    arrow.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
    window.addEventListener("scroll", () => {
        arrow.hidden =
            window.pageYOffset < document.documentElement.clientHeight - 300;
    });
}
function drawArrowDown() {
    drawArrow("arrowDown");
    const arrow = document.querySelector(".arrowDown");
    arrow.hidden = false;
    window.addEventListener("scroll", () => {
        arrow.hidden = window.pageYOffset > 50;
    });
}
function createGamesInfoSection() {
    const language = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_1__.returnLocalStorage)().lang;
    const gamesInfoSection = document.createElement("div");
    gamesInfoSection.classList.add("games_info_container");
    gamesInfoSection.addEventListener("click", (e) => {
        const targetBtn = e.target;
        if (targetBtn) {
            if (targetBtn.closest(".game_btn")) {
                window.location.hash = `#${targetBtn.getAttribute("id")}`;
            }
        }
    });
    const gamesInfoTitle = document.createElement("h2");
    gamesInfoTitle.classList.add("games_info_title");
    const blockquoteTitle = document.createElement("blockquote");
    blockquoteTitle.classList.add("games_info_quote");
    const dataTitle = language === "ru" ? _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.ru_title : _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.en_title;
    gamesInfoTitle.textContent = dataTitle;
    const dataQuote = language === "ru" ? _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.ru_quote : _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.en_quote;
    blockquoteTitle.textContent = dataQuote;
    gamesInfoSection.appendChild(gamesInfoTitle);
    gamesInfoSection.appendChild(blockquoteTitle);
    const dataArr = language === "ru" ? _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.ru : _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.en;
    dataArr.forEach((obj) => {
        const gameSection = document.createElement("div");
        gameSection.classList.add(`${obj.id}_info_section`);
        gameSection.classList.add("game_section");
        gameSection.innerHTML = `
      <div class="game_section_header">
        <div class="game_sections_wrapper">
          <div class="game_section_name">
            <p class="game_name">${obj.name}</p>
          </div>
          <div class="game_section_description">
            <p class="game_description">${obj.description}</p>
          </div>
          <div class="game_section_rules">
            <p class="game_rules">${obj.rules}</p>
          </div>
          <div class="game_section_btn">
            <p class="game_btn" id="${obj.id}">${obj.button}</p>
          </div>
        </div>
        <div class="game_section_picture">
          <img class="logo_games_picture" src="${obj.pictureUrl}" alt="game picture">
        </div>
      </div>
      <div class="game_section_line">
      </div>
    `;
        gamesInfoSection.appendChild(gameSection);
    });
    drawArrowUP();
    drawArrowDown();
    return gamesInfoSection;
}
function redrawGameInfoSectionForToggleLang(language) {
    const gamesInfoTitle = document.querySelector(".games_info_title");
    const blockquoteTitle = document.querySelector(".games_info_quote");
    const dataTitle = language === "ru" ? _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.ru_title : _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.en_title;
    if (gamesInfoTitle) {
        gamesInfoTitle.textContent = dataTitle;
    }
    const dataQuote = language === "ru" ? _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.ru_quote : _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.en_quote;
    if (blockquoteTitle) {
        blockquoteTitle.textContent = dataQuote;
    }
    const gamesInfoSectionBtns = document.querySelectorAll(".game_btn");
    if (gamesInfoSectionBtns) {
        gamesInfoSectionBtns.forEach((btn) => {
            if (language === "ru") {
                btn.textContent = "Играть";
            }
            else {
                btn.textContent = "Play";
            }
        });
    }
    const sections = document.querySelectorAll(".game_section");
    sections.forEach((section) => {
        var _a;
        const id = (_a = section.getAttribute("class")) === null || _a === void 0 ? void 0 : _a.slice(0, 5);
        const dataArr = language === "ru" ? _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.ru : _gamesData__WEBPACK_IMPORTED_MODULE_0__.gamesData.en;
        if (id) {
            const obj = dataArr.find((elem) => elem.id === id);
            section.querySelector(".game_name").innerHTML = `${obj === null || obj === void 0 ? void 0 : obj.name}`;
            section.querySelector(".game_description").innerHTML = `${obj === null || obj === void 0 ? void 0 : obj.description}`;
            section.querySelector(".game_rules").innerHTML = `${obj === null || obj === void 0 ? void 0 : obj.rules}`;
        }
    });
}


/***/ }),

/***/ "./src/components/module/Games.ts":
/*!****************************************!*\
  !*** ./src/components/module/Games.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticGames": () => (/* binding */ StatisticGames)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class StatisticGames {
    addScoreGameUser(gameUser) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch("https://rsclonetestserver-production.up.railway.app/user/addscore", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(gameUser),
            });
        });
    }
    getScoreGamesUser(gameSort) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("https://rsclonetestserver-production.up.railway.app/user/scores", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(gameSort),
            });
            const data = yield response.json();
            return data;
        });
    }
    addScoreTop10(scoregame) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch("https://rsclonetestserver-production.up.railway.app/top/addscore", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(scoregame),
            });
        });
    }
    getScoreTop10(gameSort) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("https://rsclonetestserver-production.up.railway.app/game/top10", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(gameSort),
            });
            const data = yield response.json();
            return data;
        });
    }
}


/***/ }),

/***/ "./src/components/module/User.ts":
/*!***************************************!*\
  !*** ./src/components/module/User.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class User {
    reсordUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("https://rsclonetestserver-production.up.railway.app/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = yield response.json();
            return data;
        });
    }
    checkUser(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("https://rsclonetestserver-production.up.railway.app/user/check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(login),
            });
            const data = yield response.json();
            return data;
        });
    }
    loginUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("https://rsclonetestserver-production.up.railway.app/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = yield response.json();
            return data;
        });
    }
}


/***/ }),

/***/ "./src/components/module/changePage.ts":
/*!*********************************************!*\
  !*** ./src/components/module/changePage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePage": () => (/* binding */ changePage),
/* harmony export */   "drawHomePage": () => (/* binding */ drawHomePage),
/* harmony export */   "enableRoutChange": () => (/* binding */ enableRoutChange),
/* harmony export */   "getCurrentPageId": () => (/* binding */ getCurrentPageId),
/* harmony export */   "renderNewPage": () => (/* binding */ renderNewPage)
/* harmony export */ });
/* harmony import */ var _game1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game1 */ "./src/components/game1/index.ts");
/* harmony import */ var _game2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game2 */ "./src/components/game2/index.ts");
/* harmony import */ var _game3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game3 */ "./src/components/game3/index.ts");
/* harmony import */ var _game4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game4 */ "./src/components/game4/index.ts");
/* harmony import */ var _game5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game5 */ "./src/components/game5/index.ts");
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../results */ "./src/components/results/index.ts");
/* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parallax */ "./src/components/parallax/index.ts");
/* harmony import */ var _gamesInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gamesInfo */ "./src/components/gamesInfo/index.ts");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localStorage */ "./src/components/module/localStorage.ts");









function setButtonChooseAtr(hash) {
    const pages = document.querySelectorAll(".pages p");
    pages.forEach((elem) => elem.removeAttribute("id"));
    const page = document.querySelector(`.${hash}`);
    const burgerPage = document.querySelector(`.burger-${hash}`);
    page.setAttribute("id", "choose");
    burgerPage.setAttribute("id", "choose-burger");
}
function changeLocationHash(hash) {
    window.location.hash = `#${hash}`;
}
function getCurrentPageId() {
    return window.location.hash.slice(1);
}
function drawHomePage() {
    const { style } = (0,_localStorage__WEBPACK_IMPORTED_MODULE_8__.returnLocalStorage)();
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("parallax_container");
    div.innerHTML = `
    <div class="image_dark_hole"></div>
    <div class="parallax_images images-parallax">
      <div class="images-parallax_item">
        <div class="images-parallax_death-star"></div>
      </div>
      <div class="images-parallax_item">
        <div class="images-parallax_ship"></div>
      </div>
    </div>
 `;
    main.appendChild(div);
    main.appendChild((0,_gamesInfo__WEBPACK_IMPORTED_MODULE_7__.createGamesInfoSection)());
    const gamesInfoContainer = document.querySelector(".games_info_container");
    if (style === "dark") {
        gamesInfoContainer.classList.add("dark");
    }
    else if (style === "light") {
        gamesInfoContainer.classList.remove("dark");
    }
    setButtonChooseAtr("about");
    (0,_parallax__WEBPACK_IMPORTED_MODULE_6__.parallax)();
}
function updateBackgroundStyle(shouldStretch) {
    const containerHeaderMain = document.querySelector(".wrapper");
    if (containerHeaderMain) {
        if (shouldStretch) {
            containerHeaderMain.classList.add("stretch");
        }
        else {
            containerHeaderMain.classList.remove("stretch");
        }
    }
}
function updateMainStyle(prevGameId, newGameId, shouldSetHeight) {
    const main = document.querySelector(".main");
    if (prevGameId) {
        main.classList.remove(prevGameId);
    }
    main.classList.add(newGameId);
    if (main) {
        if (shouldSetHeight) {
            main.classList.add("static-height");
        }
        else {
            main.classList.remove("static-height");
        }
    }
}
function renderNewPage(pageId) {
    const previousPageId = getCurrentPageId();
    changeLocationHash(pageId);
    setButtonChooseAtr(pageId);
    switch (pageId) {
        case "about":
            updateBackgroundStyle(false);
            updateMainStyle(previousPageId, pageId, false);
            drawHomePage();
            break;
        case "result":
            (0,_results__WEBPACK_IMPORTED_MODULE_5__.result)();
            updateBackgroundStyle(true);
            updateMainStyle(previousPageId, pageId, true);
            break;
        case "game1":
            (0,_game1__WEBPACK_IMPORTED_MODULE_0__.game1)();
            updateBackgroundStyle(true);
            updateMainStyle(previousPageId, pageId, true);
            break;
        case "game2":
            (0,_game2__WEBPACK_IMPORTED_MODULE_1__.game2)();
            updateBackgroundStyle(true);
            updateMainStyle(previousPageId, pageId, true);
            break;
        case "game3":
            (0,_game3__WEBPACK_IMPORTED_MODULE_2__.game3)();
            updateBackgroundStyle(true);
            updateMainStyle(previousPageId, pageId, true);
            break;
        case "game4":
            (0,_game4__WEBPACK_IMPORTED_MODULE_3__.game4)();
            updateBackgroundStyle(true);
            updateMainStyle(previousPageId, pageId, true);
            break;
        case "game5":
            (0,_game5__WEBPACK_IMPORTED_MODULE_4__.game5)();
            updateBackgroundStyle(true);
            updateMainStyle(previousPageId, pageId, true);
            break;
        default:
            drawHomePage();
            updateBackgroundStyle(false);
            updateMainStyle(previousPageId, pageId, false);
    }
}
function enableRoutChange() {
    window.addEventListener("hashchange", () => {
        const hashPage = window.location.hash.slice(1);
        renderNewPage(hashPage);
    });
}
function changePageMain() {
    const pages = document.querySelector(".pages");
    pages.addEventListener("click", (event) => {
        const target = event.target;
        document.querySelectorAll(".pages p").forEach((page) => {
            page.removeAttribute("id");
        });
        target.setAttribute("id", "choose");
        const classTarget = target.getAttribute("class");
        const burgerLi = document.querySelector(`.burger-${classTarget}`);
        document.querySelectorAll(".burger_nav_ul li").forEach((page) => {
            page.removeAttribute("id");
        });
        burgerLi === null || burgerLi === void 0 ? void 0 : burgerLi.setAttribute("id", "choose-burger");
        if (target.closest(".about")) {
            renderNewPage("about");
        }
        if (target.closest(".game1")) {
            renderNewPage("game1");
        }
        if (target.closest(".game2")) {
            renderNewPage("game2");
        }
        if (target.closest(".game3")) {
            renderNewPage("game3");
        }
        if (target.closest(".game4")) {
            renderNewPage("game4");
        }
        if (target.closest(".game5")) {
            renderNewPage("game5");
        }
        if (target.closest(".result")) {
            renderNewPage("result");
        }
    });
}
function changePageBurger() {
    const pages = document.querySelector(".burger_nav_ul");
    pages.addEventListener("click", (event) => {
        var _a;
        const target = event.target;
        document.querySelectorAll(".burger_nav_ul li").forEach((page) => {
            page.removeAttribute("id");
        });
        target.setAttribute("id", "choose-burger");
        const classTarget = (_a = target.getAttribute("class")) === null || _a === void 0 ? void 0 : _a.slice(26);
        const pageP = document.querySelector(`.${classTarget}`);
        document.querySelectorAll(".pages p").forEach((page) => {
            page.removeAttribute("id");
        });
        pageP === null || pageP === void 0 ? void 0 : pageP.setAttribute("id", "choose");
        if (target.closest(".burger-about")) {
            window.location.hash = "#about";
        }
        if (target.closest(".burger-game1")) {
            window.location.hash = "#game1";
        }
        if (target.closest(".burger-game2")) {
            window.location.hash = "#game2";
        }
        if (target.closest(".burger-game3")) {
            window.location.hash = "#game3";
        }
        if (target.closest(".burger-game4")) {
            window.location.hash = "#game4";
        }
        if (target.closest(".burger-game5")) {
            window.location.hash = "#game5";
        }
        if (target.closest(".burger-result")) {
            window.location.hash = "#result";
        }
    });
}
function changePage() {
    changePageMain();
    changePageBurger();
}


/***/ }),

/***/ "./src/components/module/drawPage.ts":
/*!*******************************************!*\
  !*** ./src/components/module/drawPage.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawPage": () => (/* binding */ drawPage)
/* harmony export */ });
/* harmony import */ var _assets_rs_school_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rs_school.svg */ "./src/assets/rs_school.svg");
/* harmony import */ var _assets_github_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/github_icon.svg */ "./src/assets/github_icon.svg");
/* harmony import */ var _assets_sunny_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sunny.svg */ "./src/assets/sunny.svg");
/* harmony import */ var _assets_moon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/moon.svg */ "./src/assets/moon.svg");
/* harmony import */ var _assets_account_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/account.png */ "./src/assets/account.png");
/* harmony import */ var _assets_input_OK_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/input_OK.svg */ "./src/assets/input_OK.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_input_Unavailable_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/input_Unavailable.svg */ "./src/assets/input_Unavailable.svg");
/* harmony import */ var _assets_iconOKInput_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/iconOKInput.svg */ "./src/assets/iconOKInput.svg");
/* harmony import */ var _assets_cross_input_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/cross_input.svg */ "./src/assets/cross_input.svg");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./localStorage */ "./src/components/module/localStorage.ts");











const settings = (0,_localStorage__WEBPACK_IMPORTED_MODULE_10__.returnLocalStorage)();
const userTrue = (0,_localStorage__WEBPACK_IMPORTED_MODULE_10__.returnLocalStorageIsRegistered)();
function drawHTMLLayout() {
    const div = document.createElement("div");
    div.classList.add("wrapper");
    div.innerHTML = `
  <div class="conteiner_header-main">
    <div class="parallax_background_container">
      <div class="parallax_background">
        <div class="images-parallax_galaxy"></div>
      </div>
    </div>
    <div class="generalAudio"></div>
    <header class="header">
      <div class="up-header">
        <div class="wrap_logo">
          <a class="wrap_logo_a" href="./index.html">
            <div class="logo">
              <img class="logoHeader" src="${_assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__}">
            </div>
          </a>
        </div>
        <div class="container_settings-authorization">
          <div class="personal-settigs">
            <div class="lang">
              <div class="lang_ru">ru</div>
              <div class="lang_en lang-active">en</div>
            </div>
            <div class="style">
              <img class="btn-style light" src="${settings.style === "dark" ? _assets_moon_svg__WEBPACK_IMPORTED_MODULE_3__ : _assets_sunny_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="light">
            </div>
            <div class="volume">
              <div class="volumeOn">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
                  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                  </svg>
                  <div class="volume-slash"></div>
              </div>
            </div>
          </div>
          <div class="authorization">
            <div class="btn_autorization authorin" style="${userTrue.isRegistred === "true"
        ? "display: none;"
        : "display: flex;"}">${settings.lang === "en" ? "Sign up" : "Регистрация"}</div>
            <div class="btn_autorization login" style="${userTrue.isRegistred === "true"
        ? "display: none;"
        : "display: flex;"}">${settings.lang === "en" ? "Login" : "Войти"}</div>
          </div>
          <img class="${userTrue.isRegistred === "true" ? "iconUser active" : "iconUser"}" src="${_assets_account_png__WEBPACK_IMPORTED_MODULE_4__}">
          <div class="burger">
            <svg class="burger_svg" width="26" height="15" viewBox="0 0 26 15" fill="#4784ff" xmlns="http://www.w3.org/2000/svg">
              <rect width="26" height="3" rx="2" fill="#4784ff"/>
              <rect y="6" width="26" height="3" rx="2" fill="#4784ff"/>
              <rect y="12" width="26" height="3" rx="2" fill="#4784ff"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="pages">
        <p class="about">${settings.lang === "en" ? "Home" : "Главная"}</p>
        <p class="game1">Jedi's Mind</p>
        <p class="game2">Jedi's Agility</p>
        <p class="game3">Jedi's Mobility</p>
        <p class="game4">Jedi's Strategy</p>
        <p class="game5">Jedi's Memory</p>
        <p class="result">${settings.lang === "en" ? "Results" : "Результаты"}</p>
      </div>
      <div class="burger_menu">
        <div class="wrap_burger_up">
          <div class="wrap_logo">
            <a class="wrap_logo_a" href="./index.html">
              <div class="logo">
                <p><span class="one-part">GAME </span><span class="two-part"> STACK</span></p>
              </div>
            </a>
          </div>
          <div class="cross">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" style="fill: #D713C3;"/>
                <path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" style="fill: #D713C3;"/>
            </svg>
          </div>
        </div>
        <div class="burger_nav_wrap">
          <nav class="burger_nav">
            <ul class="burger_nav_ul">
              <li class="burger_nav_ul_item burger-about">
              ${settings.lang === "en" ? "Home" : "Главная"}
              </li>
              <li class="burger_nav_ul_item burger-game1">Jedi's Mind</li>
              <li class="burger_nav_ul_item burger-game2">Jedi's Agility</li>
              <li class="burger_nav_ul_item burger-game3">Jedi's Mobility</li>
              <li class="burger_nav_ul_item burger-game4">Jedi's Strategy</li>
              <li class="burger_nav_ul_item burger-game5">Jedi's Memory</li>
              <li class="burger_nav_ul_item burger-result">
              ${settings.lang === "en" ? "Results" : "Результаты"}
              </li>
            </ul>
            <div class="authorization-burger">
              <div class="btn_autorization-burger authorin-burger" style="${userTrue.isRegistred === "true"
        ? "display: none;"
        : "display: flex;"}">${settings.lang === "en" ? "Sign up" : "Регистрация"}</div>
              <div class="btn_autorization-burger login-burger" style="${userTrue.isRegistred === "true"
        ? "display: none;"
        : "display: flex;"}">${settings.lang === "en" ? "Login" : "Войти"}</div>
            </div>
          </nav>
        </div>
      </div>
      <div class="shadow"></div>
      <div class="shadow_login-window"></div>
      <div class="shadow_account-window"></div>
      <div class="login-window">
        <div class="login-window_header">
          <p>${settings.lang === "en" ? "Login" : "Логин"}</p>
          <div class="login-window_cross">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" fill="#4684ff"/>
              <path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" fill="#4684ff"/>
            </svg>
          </div>
        </div>
        <div class="login-window_main">
          <div class="login-window_logName">
            <p>${settings.lang === "en" ? "Login:" : "Логин:"}</p>
            <input type="text">
            <img src="">
          </div>
          <p class="login_check-login-down"></p>
          <div class="login-window_password">
            <p>${settings.lang === "en" ? "Password:" : "Пароль:"}</p>
            <input type="text">
          </div>
          <div class="login-window_button">
            <span>${settings.lang === "en" ? "Login" : "Войти"}</span>
          </div>
        </div>
        <div class="wrapper-login-success">
          <p></p>
          <img class="iconOk" src="${_assets_input_OK_svg__WEBPACK_IMPORTED_MODULE_5__}">
        </div>
        <div class="wrapper-login-fail">
          <p></p>
          <img class="iconOk" src="${_assets_input_Unavailable_svg__WEBPACK_IMPORTED_MODULE_7__}">
        </div>
      </div>
      <div class="signup-window">
        <div class="signup-window_header">
          <p>${settings.lang === "en" ? "Sign Up" : "Регистрация"}</p>
          <div class="signup-window_cross">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" fill="#4684ff"/>
              <path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" fill="#4684ff"/>
            </svg>
          </div>
        </div>
        <div class="signup-window_main">
          <div class="signup-window_logName">
            <p>${settings.lang === "en" ? "Login:" : "Логин:"}</p>
            <input type="text">
            <img class="signup-window_logName-imgok" src="${_assets_iconOKInput_svg__WEBPACK_IMPORTED_MODULE_8__}">
            <img class="signup-window_logName-imgfail" src="${_assets_cross_input_svg__WEBPACK_IMPORTED_MODULE_9__}">
            <div class="check-login"></div>
          </div>
          <p class="signup_check-login-down"></p>
          <div class="signup-window_password">
            <p>${settings.lang === "en" ? "Password:" : "Пароль:"}</p>
            <input type="text">
          </div>
          <div class="signup-window_button">
            <span>${settings.lang === "en" ? "Sign Up" : "Зарегистрироваться"}</span>
          </div>
        </div>
        <div class="wrapper-signup-success">
          <p></p>
          <img class="iconOk" src="${_assets_input_OK_svg__WEBPACK_IMPORTED_MODULE_5__}">
        </div>
      </div>
      <div class="account-window">
        <div class="header_account-window">
          <div class="header_account-window_up">
            <img src="${_assets_account_png__WEBPACK_IMPORTED_MODULE_4__}">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" fill="#4684ff"/>
              <path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" fill="#4684ff"/>
            </svg>
          </div>
          <div class="account_nameUser">${userTrue.isRegistred === "true" ? `${userTrue.userName}` : ""}</div>
        </div>
        <p class="score-window">${settings.lang === "en" ? "Games statistics" : "Статистика игр"}</p>
        <p class="btn-logout">${settings.lang === "en" ? "Logout" : "Выйти"}</p>
      </div>
    </header>
    <main class="main"></main>
  </div>
  <div class="footer_wrapper">
    <footer class="footer">
      <div class="github">
        <a class="social-link" href="https://github.com/bulrock" target="_blank">
          <img class="icon github-icon1" src="" alt="github icon1"/>
        </a>
        <a class="social-link" href="https://github.com/Siaw4ik" target="_blank">
          <img class="icon github-icon2" src="" alt="github icon2"/>
        </a>
        <a class="social-link" href="https://github.com/pahomomg" target="_blank">
          <img class="icon github-icon3" src="" alt="github icon2"/>
        </a>
      </div>
      <p>Game Stack 2023</p>
      <a href="https://rs.school/js/" class="social-link">
          <img class="logoRS" src="" alt="rs school logo"/>
      </a>
    </footer>
  </div>
  `;
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("wrapper_outer");
    outerDiv.appendChild(div);
    document.body.appendChild(outerDiv);
    if (settings.lang === "ru") {
        document.querySelector(".lang_ru").setAttribute("class", "lang_ru lang-active");
        document.querySelector(".lang_en").setAttribute("class", "lang_en");
    }
    else if (settings.lang === "en") {
        document.querySelector(".lang_en").setAttribute("class", "lang_en lang-active");
    }
}
function addLinkGithubRS() {
    const logoSchool = document.querySelector(".logoRS");
    if (logoSchool) {
        logoSchool.setAttribute("src", _assets_rs_school_svg__WEBPACK_IMPORTED_MODULE_0__);
    }
    const iconGit1 = document.querySelector(".github-icon1");
    const iconGit2 = document.querySelector(".github-icon2");
    const iconGit3 = document.querySelector(".github-icon3");
    if (iconGit1 && iconGit2 && iconGit3) {
        iconGit1.setAttribute("src", _assets_github_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
        iconGit2.setAttribute("src", _assets_github_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
        iconGit3.setAttribute("src", _assets_github_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
    }
}
function drawStyleLightOrDark() {
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer_wrapper");
    const main = document.querySelector(".main");
    const btnLight = document.querySelector(".btn-style");
    const menu = document.querySelector(".burger_menu");
    const menuItem = document.querySelectorAll(".burger_nav_ul");
    const containerHeaderMain = document.querySelector(".conteiner_header-main");
    const gamesInfoContainer = document.querySelector(".games_info_container");
    if (settings.style === "dark") {
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.add("dark");
        }
        header.classList.add("dark");
        footer.classList.add("dark");
        main.classList.add("dark");
        menu.classList.add("dark");
        containerHeaderMain.classList.add("dark");
        menuItem.forEach((item) => item.classList.add("dark"));
        // btnLight.setAttribute("src", dark);
        btnLight.classList.remove("light");
    }
    else if (settings.style === "light") {
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.remove("dark");
        }
        header.classList.remove("dark");
        footer.classList.remove("dark");
        main.classList.remove("dark");
        menu.classList.remove("dark");
        containerHeaderMain.classList.remove("dark");
        menuItem.forEach((item) => item.classList.remove("dark"));
        // btnLight.setAttribute("src", light);
    }
}
function toggleBurger() {
    const menu = document.querySelector(".burger_menu");
    const burger = document.querySelector(".burger");
    const cross = document.querySelector(".cross");
    const shadow = document.querySelector(".shadow");
    const burgerNav = document.querySelectorAll(".burger_nav_ul_item");
    const { body } = document;
    burger.addEventListener("click", () => {
        const gamesInfoContainer = document.querySelector(".games_info_container");
        const arrowDown = document.querySelector(".arrowDown");
        menu.classList.add("active");
        body.classList.add("lock");
        shadow.classList.add("active");
        if (arrowDown) {
            arrowDown.classList.add("active");
        }
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.add("active");
        }
    });
    burgerNav.forEach((item) => {
        const gamesInfoContainer = document.querySelector(".games_info_container");
        const arrowDown = document.querySelector(".arrowDown");
        item.addEventListener("click", () => {
            menu.classList.remove("active");
            body.classList.remove("lock");
            shadow.classList.remove("active");
            if (arrowDown) {
                arrowDown.classList.remove("active");
            }
            if (gamesInfoContainer) {
                gamesInfoContainer.classList.remove("active");
            }
        });
    });
    cross.addEventListener("click", () => {
        const gamesInfoContainer = document.querySelector(".games_info_container");
        const arrowDown = document.querySelector(".arrowDown");
        menu.classList.remove("active");
        body.classList.remove("lock");
        shadow.classList.remove("active");
        if (arrowDown) {
            arrowDown.classList.remove("active");
        }
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.remove("active");
        }
    });
    shadow.addEventListener("click", () => {
        const gamesInfoContainer = document.querySelector(".games_info_container");
        const arrowDown = document.querySelector(".arrowDown");
        menu.classList.remove("active");
        body.classList.remove("lock");
        shadow.classList.remove("active");
        if (arrowDown) {
            arrowDown.classList.remove("active");
        }
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.remove("active");
        }
    });
}
function drawIconVolume() {
    const volume = document.querySelector(".volumeOn");
    const volumeSlash = document.querySelector(".volume-slash");
    if (settings.volume === true) {
        volume.classList.add("active");
        volumeSlash.classList.add("active");
    }
    if (settings.volume === false) {
        volume.classList.remove("active");
        volumeSlash.classList.remove("active");
    }
}
function drawPage() {
    drawHTMLLayout();
    drawIconVolume();
    addLinkGithubRS();
    drawStyleLightOrDark();
    toggleBurger();
}
if (localStorage.getItem("userTrue") === null ||
    userTrue.isRegistred === "false") {
    localStorage.setItem("unknownStrategy", JSON.stringify(0));
    const object = {
        userName: "",
        isRegistred: "false",
    };
    localStorage.setItem("userTrue", JSON.stringify(object));
}


/***/ }),

/***/ "./src/components/module/localStorage.ts":
/*!***********************************************!*\
  !*** ./src/components/module/localStorage.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnLocalStorage": () => (/* binding */ returnLocalStorage),
/* harmony export */   "returnLocalStorageIsRegistered": () => (/* binding */ returnLocalStorageIsRegistered),
/* harmony export */   "returnLocalStorageUnknown": () => (/* binding */ returnLocalStorageUnknown)
/* harmony export */ });
function returnLocalStorage() {
    const storage = localStorage.getItem("settings");
    let state = {
        lang: "en",
        style: "light",
        volume: false,
    };
    if (storage === null) {
        localStorage.setItem("settings", JSON.stringify(state));
        return state;
    }
    if (typeof storage === "string" && storage.length > 0) {
        state = JSON.parse(storage);
    }
    return state;
}
function returnLocalStorageIsRegistered() {
    const storage = localStorage.getItem("userTrue");
    let result = {
        userName: "",
        isRegistred: "",
    };
    if (typeof storage === "string" && storage.length > 0) {
        result = JSON.parse(storage);
    }
    return result;
}
function returnLocalStorageUnknown() {
    const storage = localStorage.getItem("unknownStrategy");
    let result = 0;
    if (typeof storage === "string" && storage.length > 0) {
        result = JSON.parse(storage);
    }
    return result;
}


/***/ }),

/***/ "./src/components/module/settings.ts":
/*!*******************************************!*\
  !*** ./src/components/module/settings.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleLang": () => (/* binding */ toggleLang),
/* harmony export */   "toggleLight": () => (/* binding */ toggleLight),
/* harmony export */   "toggleVolume": () => (/* binding */ toggleVolume)
/* harmony export */ });
/* harmony import */ var _assets_sunny_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sunny.svg */ "./src/assets/sunny.svg");
/* harmony import */ var _assets_moon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/moon.svg */ "./src/assets/moon.svg");
/* harmony import */ var _gamesInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gamesInfo */ "./src/components/gamesInfo/index.ts");
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results */ "./src/components/results/index.ts");
/* harmony import */ var _game5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game5 */ "./src/components/game5/index.ts");
/* harmony import */ var _game4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game4 */ "./src/components/game4/index.ts");
/* harmony import */ var _game3_module_start__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game3/module/start */ "./src/components/game3/module/start.ts");
/* harmony import */ var _game2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../game2 */ "./src/components/game2/index.ts");
/* harmony import */ var _game1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../game1 */ "./src/components/game1/index.ts");
/* harmony import */ var _assets_sounds_MercuryAudio_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/sounds/MercuryAudio.mp3 */ "./src/assets/sounds/MercuryAudio.mp3");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./localStorage */ "./src/components/module/localStorage.ts");


// import { Settings } from "./types";









const backHomeAudio = new Audio(_assets_sounds_MercuryAudio_mp3__WEBPACK_IMPORTED_MODULE_9__);
backHomeAudio.loop = true;
window.addEventListener("hashchange", () => {
    const settingsChange = (0,_localStorage__WEBPACK_IMPORTED_MODULE_10__.returnLocalStorage)();
    if (window.location.hash !== "#about") {
        backHomeAudio.pause();
    }
    else if (window.location.hash === "#about" &&
        settingsChange.volume === true) {
        backHomeAudio.play();
    }
});
function toggleVolume() {
    const volume = document.querySelector(".volumeOn");
    const volumeSlash = document.querySelector(".volume-slash");
    function changeClassVolume() {
        const settingsChange = (0,_localStorage__WEBPACK_IMPORTED_MODULE_10__.returnLocalStorage)();
        volume.classList.toggle("active");
        if (volume.classList.value === "volumeOn") {
            volumeSlash.classList.remove("active");
            settingsChange.volume = false;
            localStorage.setItem("settings", JSON.stringify(settingsChange));
            (0,_game5__WEBPACK_IMPORTED_MODULE_4__.changeGame5AudioVolume)(false);
            (0,_game4__WEBPACK_IMPORTED_MODULE_5__.changeGame4AudioVolume)(false);
            (0,_game1__WEBPACK_IMPORTED_MODULE_8__.changeGame1AudioVolume)(false);
            (0,_game2__WEBPACK_IMPORTED_MODULE_7__.changeGame2AudioVolume)(false);
            (0,_game3_module_start__WEBPACK_IMPORTED_MODULE_6__.changeGame3AudioVolume)(false);
            if (window.location.hash === "#about") {
                backHomeAudio.pause();
            }
        }
        if (volume.classList.value === "volumeOn active") {
            volumeSlash.classList.add("active");
            settingsChange.volume = true;
            localStorage.setItem("settings", JSON.stringify(settingsChange));
            (0,_game5__WEBPACK_IMPORTED_MODULE_4__.changeGame5AudioVolume)(true);
            (0,_game4__WEBPACK_IMPORTED_MODULE_5__.changeGame4AudioVolume)(true);
            (0,_game1__WEBPACK_IMPORTED_MODULE_8__.changeGame1AudioVolume)(true);
            (0,_game2__WEBPACK_IMPORTED_MODULE_7__.changeGame2AudioVolume)(true);
            (0,_game3_module_start__WEBPACK_IMPORTED_MODULE_6__.changeGame3AudioVolume)(true);
            if (window.location.hash === "#about") {
                backHomeAudio.play();
            }
        }
    }
    volume.addEventListener("click", () => {
        changeClassVolume();
    });
    document.addEventListener("keydown", (event) => {
        if (event.code === "KeyV" && (event.ctrlKey || event.metaKey)) {
            changeClassVolume();
        }
    });
}
function toggleLight() {
    const btnLight = document.querySelector(".btn-style");
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer_wrapper");
    const menu = document.querySelector(".burger_menu");
    const menuItem = document.querySelectorAll(".burger_nav_ul");
    const main = document.querySelector(".main");
    const containerHeaderMain = document.querySelector(".conteiner_header-main");
    function changeClassDark() {
        const settingsChange = (0,_localStorage__WEBPACK_IMPORTED_MODULE_10__.returnLocalStorage)();
        const arrowUP = document.querySelector(".arrowUp");
        const gamesInfoContainer = document.querySelector(".games_info_container");
        btnLight.classList.toggle("light");
        header.classList.toggle("dark");
        footer.classList.toggle("dark");
        main.classList.toggle("dark");
        menu.classList.toggle("dark");
        containerHeaderMain.classList.toggle("dark");
        if (arrowUP)
            arrowUP.classList.toggle("dark");
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.toggle("dark");
        }
        menuItem.forEach((item) => item.classList.toggle("dark"));
        if (btnLight.classList.value === "btn-style light") {
            btnLight.setAttribute("src", _assets_sunny_svg__WEBPACK_IMPORTED_MODULE_0__);
            settingsChange.style = "light";
            localStorage.setItem("settings", JSON.stringify(settingsChange));
        }
        if (btnLight.classList.value === "btn-style") {
            btnLight.setAttribute("src", _assets_moon_svg__WEBPACK_IMPORTED_MODULE_1__);
            settingsChange.style = "dark";
            localStorage.setItem("settings", JSON.stringify(settingsChange));
        }
    }
    btnLight.addEventListener("click", () => {
        changeClassDark();
    });
    document.addEventListener("keydown", (event) => {
        if (event.code === "KeyZ" && (event.ctrlKey || event.metaKey)) {
            changeClassDark();
        }
    });
}
function toggleLang() {
    const langRu = document.querySelector(".lang_ru");
    const langEn = document.querySelector(".lang_en");
    const btnAuthorin = document.querySelector(".btn_autorization.authorin");
    const btnLogin = document.querySelector(".btn_autorization.login");
    const btnBurgerAuthorin = document.querySelector(".authorin-burger");
    const btnBurgerLogin = document.querySelector(".login-burger");
    const about = document.querySelector(".about");
    const result = document.querySelector(".result");
    const burgerAbout = document.querySelector(".burger-about");
    const burgerResult = document.querySelector(".burger-result");
    const loginLogNameP = document.querySelector(".login-window_logName p");
    const loginPasswordP = document.querySelector(".login-window_password p");
    const loginBtn = document.querySelector(".login-window_button span");
    const signupLogNameP = document.querySelector(".signup-window_logName p");
    const signupPasswordP = document.querySelector(".signup-window_password p");
    const signupBtn = document.querySelector(".signup-window_button");
    const logoutBtn = document.querySelector(".btn-logout");
    const scoreWindow = document.querySelector(".score-window");
    const signUpTitle = document.querySelector(".signup-window_header p");
    const logInTitle = document.querySelector(".login-window_header p");
    function toggleRu() {
        const settingsChange = (0,_localStorage__WEBPACK_IMPORTED_MODULE_10__.returnLocalStorage)();
        langRu.classList.add("lang-active");
        langEn.classList.remove("lang-active");
        settingsChange.lang = "ru";
        localStorage.setItem("settings", JSON.stringify(settingsChange));
        btnAuthorin.innerHTML = "Регистрация";
        btnLogin.innerHTML = "Войти";
        btnBurgerAuthorin.innerHTML = "Регистрация";
        btnBurgerLogin.innerHTML = "Войти";
        about.innerHTML = "Главная";
        result.innerHTML = "Результаты";
        burgerAbout.innerHTML = "Главная";
        burgerResult.innerHTML = "Результаты";
        signUpTitle.innerHTML = "Регистрация";
        logInTitle.innerHTML = "Логин";
        loginLogNameP.innerHTML = "Логин";
        loginPasswordP.innerHTML = "Пароль";
        loginBtn.innerHTML = "Войти";
        signupLogNameP.innerHTML = "Логин";
        signupPasswordP.innerHTML = "Пароль";
        signupBtn.innerHTML = "Зарегистрироваться";
        logoutBtn.innerHTML = "Выйти";
        scoreWindow.innerHTML = "Статистика игр";
        (0,_results__WEBPACK_IMPORTED_MODULE_3__.translateHeaderTable)(settingsChange.lang);
        (0,_game5__WEBPACK_IMPORTED_MODULE_4__.translateGame5)(settingsChange.lang);
        (0,_game4__WEBPACK_IMPORTED_MODULE_5__.translateGame4)(settingsChange.lang);
        (0,_game1__WEBPACK_IMPORTED_MODULE_8__.translateGame1)(settingsChange.lang);
        (0,_game2__WEBPACK_IMPORTED_MODULE_7__.translateGame2)(settingsChange.lang);
        (0,_game3_module_start__WEBPACK_IMPORTED_MODULE_6__.translateGame3)(settingsChange.lang);
        (0,_gamesInfo__WEBPACK_IMPORTED_MODULE_2__.redrawGameInfoSectionForToggleLang)(settingsChange.lang);
    }
    langRu.addEventListener("click", toggleRu);
    document.addEventListener("keydown", (event) => {
        if (event.code === "KeyB" && (event.ctrlKey || event.metaKey)) {
            toggleRu();
        }
    });
    function toggleEn() {
        const settingsChange = (0,_localStorage__WEBPACK_IMPORTED_MODULE_10__.returnLocalStorage)();
        langEn.classList.add("lang-active");
        langRu.classList.remove("lang-active");
        settingsChange.lang = "en";
        localStorage.setItem("settings", JSON.stringify(settingsChange));
        btnAuthorin.innerHTML = "Sign up";
        btnLogin.innerHTML = "Login";
        btnBurgerAuthorin.innerHTML = "Sign up";
        btnBurgerLogin.innerHTML = "Login";
        about.innerHTML = "Home";
        result.innerHTML = "Results";
        burgerAbout.innerHTML = "Home";
        burgerResult.innerHTML = "Results";
        signUpTitle.innerHTML = "Sign Up";
        logInTitle.innerHTML = "Login";
        loginLogNameP.innerHTML = "Login";
        loginPasswordP.innerHTML = "Password";
        loginBtn.innerHTML = "Login";
        signupLogNameP.innerHTML = "Login";
        signupPasswordP.innerHTML = "Password";
        signupBtn.innerHTML = "Sign Up";
        logoutBtn.innerHTML = "Logout";
        scoreWindow.innerHTML = "Game statistics";
        (0,_results__WEBPACK_IMPORTED_MODULE_3__.translateHeaderTable)(settingsChange.lang);
        (0,_game5__WEBPACK_IMPORTED_MODULE_4__.translateGame5)(settingsChange.lang);
        (0,_game4__WEBPACK_IMPORTED_MODULE_5__.translateGame4)(settingsChange.lang);
        (0,_game1__WEBPACK_IMPORTED_MODULE_8__.translateGame1)(settingsChange.lang);
        (0,_game2__WEBPACK_IMPORTED_MODULE_7__.translateGame2)(settingsChange.lang);
        (0,_game3_module_start__WEBPACK_IMPORTED_MODULE_6__.translateGame3)(settingsChange.lang);
        (0,_gamesInfo__WEBPACK_IMPORTED_MODULE_2__.redrawGameInfoSectionForToggleLang)(settingsChange.lang);
    }
    langEn.addEventListener("click", toggleEn);
    document.addEventListener("keydown", (event) => {
        if (event.code === "KeyM" && (event.ctrlKey || event.metaKey)) {
            toggleEn();
        }
    });
}


/***/ }),

/***/ "./src/components/parallax/index.ts":
/*!******************************************!*\
  !*** ./src/components/parallax/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parallax": () => (/* binding */ parallax)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/components/parallax/index.css");
/* eslint-disable no-inner-declarations */
/* eslint-disable func-names */

function parallax() {
    const parallaxed = document.querySelector(".parallax_container");
    if (parallaxed) {
        const galaxy = document.querySelector(".images-parallax_galaxy");
        const star = document.querySelector(".images-parallax_death-star");
        const ship = document.querySelector(".images-parallax_ship");
        const forGalaxy = 20;
        const forStar = 10;
        const forShip = 0.5;
        const animationSpeed = 0.09;
        let positionX = 0;
        let positionY = 0;
        let coordXpercent = 0;
        let coordYpercent = 0;
        function setMouseParallaxStyle() {
            const distX = coordXpercent - positionX;
            const distY = coordYpercent - positionY;
            positionX += distX * animationSpeed;
            positionY += distY * animationSpeed;
            galaxy.style.cssText = `transform: translate(${positionX / forGalaxy}%,${positionY / forGalaxy}%);`;
            star.style.cssText = `transform: translate(${positionX / forStar}%,${positionY / forStar}%);`;
            ship.style.cssText = `transform: translate(${positionX / forShip}%,${positionY / forShip}%);`;
            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();
        parallaxed.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallaxed.offsetWidth;
            const parallaxHeight = parallaxed.offsetHeight;
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;
            coordXpercent = (coordX / parallaxWidth) * 100;
            coordYpercent = (coordY / parallaxHeight) * 100;
        });
        function handleOrientation(event) {
            const betta = event.beta;
            const gama = event.gamma;
            if (event && betta !== null && gama !== null) {
                const parallaxWidth = parallaxed.offsetWidth;
                const parallaxHeight = parallaxed.offsetHeight;
                const coordX = gama - parallaxWidth / 4;
                const coordY = betta - parallaxHeight / 4;
                coordXpercent = (coordX / parallaxWidth) * 100;
                coordYpercent = (coordY / parallaxHeight) * 100;
            }
        }
        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", handleOrientation, true);
        }
        else {
            console.log("DeviceMotionEvent is not supported");
        }
    }
}


/***/ }),

/***/ "./src/components/registration/accountUser.ts":
/*!****************************************************!*\
  !*** ./src/components/registration/accountUser.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickingIconUserandLogout": () => (/* binding */ clickingIconUserandLogout)
/* harmony export */ });
/* harmony import */ var _module_changePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/changePage */ "./src/components/module/changePage.ts");
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../results */ "./src/components/results/index.ts");
/* harmony import */ var _module_Games__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/Games */ "./src/components/module/Games.ts");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");




function clickingIconUserandLogout() {
    const iconUser = document.querySelector(".iconUser");
    const accountWindow = document.querySelector(".account-window");
    const shadowAccount = document.querySelector(".shadow_account-window");
    const crossAccWindow = document.querySelector(".account-window svg");
    const btnLogout = document.querySelector(".btn-logout");
    const mainSuccessSignup = document.querySelector(".wrapper-signup-success");
    const mainSignUp = document.querySelector(".signup-window_main");
    const mainSuccessLogIn = document.querySelector(".wrapper-login-success");
    const mainLogIn = document.querySelector(".login-window_main");
    const btnSignup = document.querySelector(".authorin");
    const btnSignupBurger = document.querySelector(".authorin-burger");
    const btnLogin = document.querySelector(".login");
    const btnLoginBurger = document.querySelector(".login-burger");
    const accountStatistic = document.querySelector(".score-window");
    const gamesInfoContainer = document.querySelector(`.games_info_container`);
    const body = document.querySelector(`.body`);
    const arrowDown = document.querySelector(`.arrowDown `);
    iconUser.addEventListener("click", () => {
        accountWindow.classList.add("active");
        shadowAccount.classList.add("active");
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.add("active");
        }
        if (body) {
            body.classList.add("active");
        }
        if (arrowDown) {
            arrowDown.classList.add("active");
        }
    });
    shadowAccount.addEventListener("click", () => {
        accountWindow.classList.remove("active");
        shadowAccount.classList.remove("active");
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.remove("active");
        }
        if (body) {
            body.classList.remove("active");
        }
        if (arrowDown) {
            arrowDown.classList.remove("active");
        }
    });
    crossAccWindow.addEventListener("click", () => {
        accountWindow.classList.remove("active");
        shadowAccount.classList.remove("active");
        gamesInfoContainer.classList.remove("active");
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.remove("active");
        }
        if (body) {
            body.classList.remove("active");
        }
        if (arrowDown) {
            arrowDown.classList.remove("active");
        }
    });
    accountStatistic.addEventListener("click", () => {
        accountWindow.classList.remove("active");
        shadowAccount.classList.remove("active");
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.remove("active");
        }
        if (body) {
            body.classList.remove("active");
        }
        if (arrowDown) {
            arrowDown.classList.remove("active");
        }
    });
    btnLogout.addEventListener("click", () => {
        accountWindow.classList.remove("active");
        shadowAccount.classList.remove("active");
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.remove("active");
        }
        if (body) {
            body.classList.remove("active");
        }
        if (arrowDown) {
            arrowDown.classList.remove("active");
        }
        btnSignup.style.display = "flex";
        btnSignupBurger.style.display = "flex";
        btnLogin.style.display = "flex";
        btnLoginBurger.style.display = "flex";
        iconUser.classList.remove("active");
        const object = {
            userName: "",
            isRegistred: "false",
        };
        localStorage.setItem("userTrue", JSON.stringify(object));
        mainSuccessSignup.classList.remove("active");
        mainSignUp.classList.remove("no-active");
        mainSuccessLogIn.classList.remove("active");
        mainLogIn.classList.remove("no-active");
        if (window.location.hash.slice(1) === "result") {
            const statistic = new _module_Games__WEBPACK_IMPORTED_MODULE_2__.StatisticGames();
            const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_3__.returnLocalStorage)();
            const table = document.querySelector(".wrapper_table-result table");
            const userRadio = document.querySelector(".table-flip .user-radio");
            if (userRadio) {
                userRadio.style.display = "none";
            }
            if (table.getAttribute("class") === "user-table") {
                const objgame1 = {
                    gamename: "Jedi's Mind",
                    option: "ascName",
                };
                statistic.getScoreTop10(objgame1).then((data) => {
                    document.querySelector(".table-name").innerHTML = `${settings.lang === "en" ? "Players" : "Игроки"}`;
                    (0,_results__WEBPACK_IMPORTED_MODULE_1__.drawtbody)(data);
                });
                const buttonGAme1 = document.querySelector(".table-result_game1");
                buttonGAme1.checked = true;
            }
        }
        const scoreHTML = document.querySelector(".game4-main-score-number");
        localStorage.setItem("unknownStrategy", JSON.stringify(0));
        if (window.location.hash === "#game4" && scoreHTML) {
            scoreHTML.innerHTML = "0";
        }
    });
    accountStatistic.addEventListener("click", () => {
        (0,_module_changePage__WEBPACK_IMPORTED_MODULE_0__.renderNewPage)("result");
    });
}


/***/ }),

/***/ "./src/components/registration/register.ts":
/*!*************************************************!*\
  !*** ./src/components/registration/register.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authorizeUser": () => (/* binding */ authorizeUser),
/* harmony export */   "closeOpenWindowRegisration": () => (/* binding */ closeOpenWindowRegisration)
/* harmony export */ });
/* harmony import */ var _module_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/User */ "./src/components/module/User.ts");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");
/* harmony import */ var _game4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game4 */ "./src/components/game4/index.ts");
/* harmony import */ var _omponentsRegister__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./сomponentsRegister */ "./src/components/registration/сomponentsRegister.ts");

/* import VImg from "../../assets/iconOKInput.svg";
import XImg from "../../assets/cross_input.svg"; */



function clearInputFalse(name) {
    /* const checkLoginImg = document.querySelector(
      `.${name}-window_logName img`
    ) as HTMLElement; */
    const checkLoginDown = document.querySelector(`.${name}_check-login-down`);
    const checkLogin = document.querySelector(".check-login");
    const imgInputOk = document.querySelector(".signup-window_logName-imgok");
    const imgInputFail = document.querySelector(".signup-window_logName-imgfail");
    checkLoginDown.innerHTML = "";
    imgInputFail.classList.remove("active");
    imgInputOk.classList.remove("active");
    // checkLoginImg.setAttribute("src", "");
    if (name === "signup") {
        checkLogin.classList.remove("active");
    }
}
function drawSuccessBlock(name, user) {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_1__.returnLocalStorage)();
    const mainSuccess = document.querySelector(`.wrapper-${name}-success`);
    const mainSuccessP = document.querySelector(`.wrapper-${name}-success p`);
    const main = document.querySelector(`.${name}-window_main`);
    mainSuccess.classList.add("active");
    main.classList.add("no-active");
    if (name === "signup") {
        mainSuccessP.innerHTML = `
    ${settings.lang === "en"
            ? `Authorization completed successfully!!!<br>Welcome, ${user}!!!`
            : `Авторизация выполнена успешно!!!<br>Добро пожаловать, ${user}!!!`}`;
    }
    if (name === "login") {
        mainSuccessP.innerHTML = `
    ${settings.lang === "en"
            ? `You are logged into your account!!!<br>Welcome, ${user}!!!`
            : `Вы вошли в свой аккаунт!!!<br>Добро пожаловать, ${user}!!!`}`;
    }
}
function drawFailBlock(status) {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_1__.returnLocalStorage)();
    const mainFail = document.querySelector(`.wrapper-login-fail`);
    const mainFailP = document.querySelector(`.wrapper-login-fail p`);
    const main = document.querySelector(`.login-window_main`);
    if (status === "add") {
        mainFail.classList.add("active");
        main.classList.add("no-active");
        mainFailP.innerHTML = `
    ${settings.lang === "en"
            ? "Error!!!<br>Incorrectly entered login or password data.<br>Try again!!!"
            : "Ошибка!!!<br>Неправильно введены данные Логина или Пароля.<br>Попробуйте еще раз!!!"}`;
    }
    if (status === "remove") {
        mainFail.classList.remove("active");
        main.classList.remove("no-active");
        mainFailP.innerHTML = "";
    }
}
function closeOpenWindowRegisration() {
    const btnLogin = document.querySelector(".login");
    const btnLoginBurger = document.querySelector(".login-burger");
    const btnSignup = document.querySelector(".authorin");
    const btnSignupBurger = document.querySelector(".authorin-burger");
    function openWindowRegistration(name) {
        const window = document.querySelector(`.${name}-window`);
        const shadow = document.querySelector(`.shadow_login-window`);
        const gamesInfoContainer = document.querySelector(`.games_info_container`);
        const body = document.querySelector(`.body`);
        const arrowDown = document.querySelector(`.arrowDown `);
        window.classList.add("active");
        shadow.classList.add("active");
        if (gamesInfoContainer) {
            gamesInfoContainer.classList.add("active");
        }
        if (body) {
            body.classList.add("active");
        }
        if (arrowDown) {
            arrowDown.classList.add("active");
        }
    }
    function closeWindowRegistration(name) {
        const window = document.querySelector(`.${name}-window`);
        const crossLogin = document.querySelector(`.${name}-window_cross`);
        const shadow = document.querySelector(`.shadow_login-window`);
        const gamesInfoContainer = document.querySelector(`.games_info_container`);
        const body = document.querySelector(`.body`);
        const arrowDown = document.querySelector(`.arrowDown `);
        crossLogin.addEventListener("click", () => {
            window.classList.remove("active");
            shadow.classList.remove("active");
            if (gamesInfoContainer) {
                gamesInfoContainer.classList.remove("active");
            }
            if (body) {
                body.classList.remove("active");
            }
            if (arrowDown) {
                arrowDown.classList.remove("active");
            }
            if (name === "login") {
                drawFailBlock("remove");
            }
        });
        shadow.addEventListener("click", () => {
            shadow.classList.remove("active");
            window.classList.remove("active");
            if (gamesInfoContainer) {
                gamesInfoContainer.classList.remove("active");
            }
            if (body) {
                body.classList.remove("active");
            }
            if (arrowDown) {
                arrowDown.classList.remove("active");
            }
            if (name === "login") {
                drawFailBlock("remove");
            }
        });
    }
    function clearInput(name) {
        const loginInput = document.querySelector(`.${name}-window_logName input`);
        const passwordInput = document.querySelector(`.${name}-window_password input`);
        loginInput.style.color = "black";
        loginInput.value = "";
        passwordInput.value = "";
    }
    btnLogin.addEventListener("click", () => {
        const nameWindow = "login";
        openWindowRegistration(nameWindow);
        closeWindowRegistration(nameWindow);
        clearInputFalse(nameWindow);
        clearInput(nameWindow);
    });
    btnLoginBurger.addEventListener("click", () => {
        const nameWindow = "login";
        openWindowRegistration(nameWindow);
        closeWindowRegistration(nameWindow);
        clearInputFalse(nameWindow);
        clearInput(nameWindow);
    });
    btnSignup.addEventListener("click", () => {
        const nameWindow = "signup";
        openWindowRegistration(nameWindow);
        closeWindowRegistration(nameWindow);
        clearInputFalse(nameWindow);
        clearInput(nameWindow);
    });
    btnSignupBurger.addEventListener("click", () => {
        const nameWindow = "signup";
        openWindowRegistration(nameWindow);
        closeWindowRegistration(nameWindow);
        clearInputFalse(nameWindow);
        clearInput(nameWindow);
    });
}
function checkInputLogNameTrue() {
    const checkLogin = document.querySelector(".check-login");
    const checkLoginDown = document.querySelector(".signup_check-login-down");
    /* const checkLoginImg = document.querySelector(
      ".signup-window_logName img"
    ) as HTMLElement; */
    const loginUserInput = document.querySelector(".signup-window_logName input");
    const btnSendSignup = document.querySelector(".signup-window_button");
    const imgInputFail = document.querySelector(".signup-window_logName-imgfail");
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_1__.returnLocalStorage)();
    checkLogin.classList.add("active");
    checkLogin.innerHTML = `${settings.lang === "en"
        ? "This login is already taken, use another one..."
        : "Этот логин уже занят, используйте другой..."}`;
    checkLoginDown.innerHTML = `${settings.lang === "en"
        ? "This login is already taken, use another one..."
        : "Этот логин уже занят, используйте другой..."}`;
    // checkLoginImg.setAttribute("src", XImg);
    imgInputFail.classList.add("active");
    loginUserInput.style.color = "red";
    btnSendSignup.setAttribute("id", "false");
    setTimeout(() => {
        checkLogin.classList.remove("active");
    }, 2000);
}
function checkInputLogNameFalse() {
    const checkLoginDown = document.querySelector(".signup_check-login-down");
    const loginUserInput = document.querySelector(".signup-window_logName input");
    const btnSendSignup = document.querySelector(".signup-window_button");
    const imgInputOk = document.querySelector(".signup-window_logName-imgok");
    checkLoginDown.innerHTML = "";
    imgInputOk.classList.add("active");
    loginUserInput.style.color = "green";
    btnSendSignup.setAttribute("id", "true");
}
function authorizeUser() {
    const user = new _module_User__WEBPACK_IMPORTED_MODULE_0__.User();
    const btnSendSignup = document.querySelector(".signup-window_button");
    const loginUserInput = document.querySelector(".signup-window_logName input");
    const passwordUserInput = document.querySelector(".signup-window_password input");
    const signupWindow = document.querySelector(".signup-window");
    const shadow = document.querySelector(".shadow_login-window");
    const btnSignup = document.querySelector(".authorin");
    const btnSignupBurger = document.querySelector(".authorin-burger");
    const btnLogin = document.querySelector(".login");
    const btnLoginBurger = document.querySelector(".login-burger");
    const iconUser = document.querySelector(".iconUser");
    const loginWindow = document.querySelector(".login-window");
    const loginLogInInput = document.querySelector(".login-window_logName input");
    const passwordLogInInput = document.querySelector(".login-window_password input");
    const btnSendLogIn = document.querySelector(".login-window_button");
    const accountNameUser = document.querySelector(".account_nameUser");
    const imgInputOk = document.querySelector(".signup-window_logName-imgok");
    const imgInputFail = document.querySelector(".signup-window_logName-imgfail");
    loginUserInput.addEventListener("blur", () => {
        const loginUser = loginUserInput.value;
        const objUser = {
            username: loginUser,
        };
        if ((0,_omponentsRegister__WEBPACK_IMPORTED_MODULE_3__.checkValidLoginSignUP)(loginUser)) {
            user.checkUser(objUser).then((result) => {
                if (result.success === true) {
                    checkInputLogNameTrue();
                }
                else if (result.success === false) {
                    checkInputLogNameFalse();
                }
            });
        }
    });
    passwordUserInput.addEventListener("input", () => {
        const passwordUser = passwordUserInput.value;
        if ((0,_omponentsRegister__WEBPACK_IMPORTED_MODULE_3__.checkValidPasswordSignUP)(passwordUser)) {
            passwordUserInput.style.color = "green";
            btnSendSignup.setAttribute("id", "true");
        }
        else {
            passwordUserInput.style.color = "red";
            btnSendSignup.setAttribute("id", "false");
        }
    });
    loginUserInput.addEventListener("input", () => {
        const loginUser = loginUserInput.value;
        if ((0,_omponentsRegister__WEBPACK_IMPORTED_MODULE_3__.checkValidPasswordSignUP)(loginUser)) {
            loginUserInput.style.color = "green";
            btnSendSignup.setAttribute("id", "true");
        }
        else if (loginUser.length === 0) {
            loginUserInput.style.color = "black";
            clearInputFalse("signup");
        }
        else {
            loginUserInput.style.color = "red";
            btnSendSignup.setAttribute("id", "false");
        }
    });
    function activeIconandBtn(userLogin) {
        btnSignup.style.display = "none";
        btnSignupBurger.style.display = "none";
        btnLogin.style.display = "none";
        btnLoginBurger.style.display = "none";
        iconUser.classList.add("active");
        const object = {
            userName: userLogin,
            isRegistred: "true",
        };
        localStorage.setItem("userTrue", JSON.stringify(object));
        if (window.location.hash.slice(1) === "result") {
            const userRegisred = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_1__.returnLocalStorageIsRegistered)();
            const userRadio = document.querySelector(".table-flip .user-radio");
            if (userRadio) {
                userRadio.style.display = "flex";
                const userRadioP = document.querySelector(".table-flip .user-radio p");
                userRadioP.innerHTML = userRegisred.userName;
            }
        }
    }
    btnSendSignup.addEventListener("click", () => {
        const loginUser = loginUserInput.value;
        const passwordUser = passwordUserInput.value;
        const isCanSend = btnSendSignup.getAttribute("id");
        const objUser = {
            username: loginUser,
            password: passwordUser,
        };
        if (isCanSend === "true" &&
            (0,_omponentsRegister__WEBPACK_IMPORTED_MODULE_3__.checkValidPasswordSignUP)(passwordUser) &&
            (0,_omponentsRegister__WEBPACK_IMPORTED_MODULE_3__.checkValidLoginSignUP)(loginUser)) {
            user.reсordUser(objUser).then((result) => {
                if (result.success === true) {
                    drawSuccessBlock("signup", loginUser);
                    loginUserInput.value = "";
                    passwordUserInput.value = "";
                    imgInputFail.classList.remove("active");
                    imgInputOk.classList.remove("active");
                    loginUserInput.style.color = "black";
                    activeIconandBtn(loginUser);
                    accountNameUser.innerHTML = loginUser;
                    (0,_game4__WEBPACK_IMPORTED_MODULE_2__.drawScoreFromBackEnd)();
                    setTimeout(() => {
                        signupWindow.classList.remove("active");
                        shadow.classList.remove("active");
                    }, 3000);
                }
                /* if (result.success === false) {
              } */
            });
        }
    });
    btnSendLogIn.addEventListener("click", () => {
        const loginUser = loginLogInInput.value;
        const passwordUser = passwordLogInInput.value;
        const objUser = {
            username: loginUser,
            password: passwordUser,
        };
        user.loginUser(objUser).then((result) => {
            if (result.success === true) {
                drawSuccessBlock("login", loginUser);
                loginLogInInput.value = "";
                passwordLogInInput.value = "";
                activeIconandBtn(loginUser);
                accountNameUser.innerHTML = loginUser;
                (0,_game4__WEBPACK_IMPORTED_MODULE_2__.drawScoreFromBackEnd)();
                setTimeout(() => {
                    loginWindow.classList.remove("active");
                    shadow.classList.remove("active");
                }, 3000);
            }
            else if (result.success === false) {
                drawFailBlock("add");
                setTimeout(() => {
                    drawFailBlock("remove");
                    loginLogInInput.value = "";
                    passwordLogInInput.value = "";
                }, 2000);
            }
        });
    });
}


/***/ }),

/***/ "./src/components/registration/сomponentsRegister.ts":
/*!***********************************************************!*\
  !*** ./src/components/registration/сomponentsRegister.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkValidLoginSignUP": () => (/* binding */ checkValidLoginSignUP),
/* harmony export */   "checkValidPasswordSignUP": () => (/* binding */ checkValidPasswordSignUP)
/* harmony export */ });
function checkValidLoginSignUP(value) {
    if (value.length >= 5) {
        return true;
    }
    return false;
}
function checkValidPasswordSignUP(value) {
    if (value.length >= 5) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "./src/components/results/componentsResault.ts":
/*!*****************************************************!*\
  !*** ./src/components/results/componentsResault.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createObjParametr": () => (/* binding */ createObjParametr)
/* harmony export */ });
function createObjParametr(name, opt) {
    const obj = {
        username: name.slice(6),
        option: opt,
    };
    return obj;
}


/***/ }),

/***/ "./src/components/results/index.ts":
/*!*****************************************!*\
  !*** ./src/components/results/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawTable": () => (/* binding */ drawTable),
/* harmony export */   "drawtbody": () => (/* binding */ drawtbody),
/* harmony export */   "result": () => (/* binding */ result),
/* harmony export */   "translateHeaderTable": () => (/* binding */ translateHeaderTable)
/* harmony export */ });
/* harmony import */ var _result_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.css */ "./src/components/results/result.css");
/* harmony import */ var _module_Games__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/Games */ "./src/components/module/Games.ts");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");
/* harmony import */ var _componentsResault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentsResault */ "./src/components/results/componentsResault.ts");




const arrButton = [
    { game1: "Jedi's Mind" },
    { game2: "Jedi's Agility" },
    { game3: "Jedi's Mobility" },
    { game4: "Jedi's Strategy" },
    { game5: "Jedi's Memory" },
];
function drawTable(lang) {
    const userRegistred = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_2__.returnLocalStorageIsRegistered)();
    const main = document.querySelector(".main");
    const div = document.createElement("div");
    div.classList.add("wrapper_main-result");
    div.innerHTML = `
    <div class="wrapper_table-result">
      <form class="table-flip"></form>
      <table>
        <thead>
          <tr>
            <th class="table-number">№</th>
            <th class="table-name">${lang === "en" ? "Name Game" : "Имя игры"}</th>
            <th class="table-result">${lang === "en" ? "Result" : "Результат"}</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  `;
    main.appendChild(div);
    const form = document.querySelector(".table-flip");
    arrButton.forEach((elem) => {
        const buttonDiv = document.createElement("div");
        buttonDiv.innerHTML = `
      <input  class="table-result_${Object.keys(elem)[0]}" type="radio" name="table" value="${Object.values(elem)[0]}">
      <p>${Object.values(elem)[0]}</p>
    `;
        form.appendChild(buttonDiv);
    });
    const buttonDivUser = document.createElement("div");
    buttonDivUser.setAttribute("class", "user-radio");
    buttonDivUser.style.display = "none";
    buttonDivUser.innerHTML = `
      <input type="radio" name="table" value="user">
      <p>${userRegistred.userName}</p>
    `;
    form.prepend(buttonDivUser);
    if (userRegistred.isRegistred === "true") {
        buttonDivUser.style.display = "flex";
        buttonDivUser.querySelector("input").checked = true;
        document.querySelector(".wrapper_table-result table").setAttribute("class", "user-table");
        document.querySelector(".wrapper_table-result table").setAttribute("id", `table-${userRegistred.userName}`);
    }
}
function drawRawGameUser(num, name, score) {
    const tbody = document.querySelector(".wrapper_table-result tbody");
    const raw = document.createElement("tr");
    raw.innerHTML = `
    <td>${num}</td>
    <td>${name}</td>
    <td>${score}</td>
  `;
    tbody.appendChild(raw);
}
function drawRawEmpty(mode, lang, name) {
    const tbody = document.querySelector(".wrapper_table-result tbody");
    tbody.innerHTML = "";
    const raw = document.createElement("tr");
    raw.innerHTML = `
    <td class="raw-empty" colspan="3">${lang === "en"
        ? `${mode === "user"
            ? "No results! You haven't played yet!"
            : `No results for ${name}`}`
        : `${mode === "user"
            ? "Нет результатов! Вы еще не играли!"
            : `Нет результатов игры ${name}`}`}</td>
  `;
    tbody.appendChild(raw);
}
function drawRawWait(lang) {
    const tbody = document.querySelector(".wrapper_table-result tbody");
    tbody.innerHTML = "";
    const raw = document.createElement("tr");
    raw.innerHTML = `
    <td class="raw-empty" colspan="3">${lang === "en" ? "Loading..." : "Загрузка..."}</td>
  `;
    tbody.appendChild(raw);
}
function drawtbody(data) {
    const tbody = document.querySelector(".wrapper_table-result tbody");
    tbody.innerHTML = "";
    const usersGame = Object.entries(data.scores);
    usersGame.forEach((arr, index) => {
        drawRawGameUser(index + 1, arr[0], arr[1]);
    });
}
let optionNameUser = "ascGame";
let optionNameGame = "ascName";
let optionScore = "ascScore";
function sortresult() {
    const statistic = new _module_Games__WEBPACK_IMPORTED_MODULE_1__.StatisticGames();
    const table = document.querySelector(".wrapper_table-result table");
    if (table) {
        const resultCell = document.querySelector(".table-result");
        const nameCell = document.querySelector(".table-name");
        resultCell.addEventListener("click", () => {
            const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_2__.returnLocalStorage)();
            optionScore = optionScore === "ascScore" ? "descScore" : "ascScore";
            drawRawWait(settings.lang);
            const nameTable = table.getAttribute("id");
            const classTable = table.getAttribute("class");
            if (nameTable && classTable === "user-table") {
                const obj = (0,_componentsResault__WEBPACK_IMPORTED_MODULE_3__.createObjParametr)(nameTable, optionScore);
                statistic.getScoreGamesUser(obj).then((data) => {
                    if (Object.entries(data.scores).length > 0) {
                        drawtbody(data);
                    }
                    else if (Object.entries(data.scores).length === 0) {
                        drawRawEmpty("game", settings.lang);
                    }
                });
            }
            if (nameTable && classTable === "games-table") {
                const obj = {
                    gamename: nameTable.slice(6),
                    option: optionScore,
                };
                statistic.getScoreTop10(obj).then((data) => {
                    if (Object.entries(data.scores).length > 0) {
                        drawtbody(data);
                    }
                    else if (Object.entries(data.scores).length === 0) {
                        drawRawEmpty("game", settings.lang);
                    }
                });
            }
        });
        nameCell.addEventListener("click", () => {
            const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_2__.returnLocalStorage)();
            drawRawWait(settings.lang);
            const nameTable = table.getAttribute("id");
            const classTable = table.getAttribute("class");
            if (nameTable && classTable === "user-table") {
                optionNameUser = optionNameUser === "ascGame" ? "descGame" : "ascGame";
                const obj = (0,_componentsResault__WEBPACK_IMPORTED_MODULE_3__.createObjParametr)(nameTable, optionNameUser);
                statistic.getScoreGamesUser(obj).then((data) => {
                    if (Object.entries(data.scores).length > 0) {
                        drawtbody(data);
                    }
                    else if (Object.entries(data.scores).length === 0) {
                        drawRawEmpty("game", settings.lang);
                    }
                });
            }
            if (nameTable && classTable === "games-table") {
                optionNameGame = optionNameGame === "ascName" ? "descName" : "ascName";
                const obj = {
                    gamename: nameTable.slice(6),
                    option: optionNameGame,
                };
                statistic.getScoreTop10(obj).then((data) => {
                    if (Object.entries(data.scores).length > 0) {
                        drawtbody(data);
                    }
                    else if (Object.entries(data.scores).length === 0) {
                        drawRawEmpty("game", settings.lang);
                    }
                });
            }
        });
    }
}
function changeRadioBtn() {
    const radioTables = document.querySelectorAll('input[type=radio][name="table"]');
    radioTables.forEach((radio) => {
        radio.addEventListener("change", () => {
            const statistic = new _module_Games__WEBPACK_IMPORTED_MODULE_1__.StatisticGames();
            const settingsChange = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_2__.returnLocalStorage)();
            const userRegistred = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_2__.returnLocalStorageIsRegistered)();
            drawRawWait(settingsChange.lang);
            const value = radio.getAttribute("value");
            if (value && value !== "user") {
                const objgame = {
                    gamename: value,
                    option: optionNameGame,
                };
                document.querySelector(".wrapper_table-result table").setAttribute("class", "games-table");
                document.querySelector(".wrapper_table-result table").setAttribute("id", `table-${value}`);
                statistic.getScoreTop10(objgame).then((data) => {
                    document.querySelector(".table-name").innerHTML = `${settingsChange.lang === "en" ? "Players" : "Игроки"}`;
                    document.querySelector(".table-result").innerHTML = `${settingsChange.lang === "en" ? "Result" : "Результат"}`;
                    if (Object.entries(data.scores).length > 0) {
                        drawtbody(data);
                    }
                    else if (Object.entries(data.scores).length === 0) {
                        drawRawEmpty("game", settingsChange.lang, value);
                    }
                });
            }
            else if (value === "user") {
                const userOptionChange = {
                    username: userRegistred.userName,
                    option: optionNameUser,
                };
                document.querySelector(".wrapper_table-result table").setAttribute("class", "user-table");
                document.querySelector(".wrapper_table-result table").setAttribute("id", `table-${userRegistred.userName}`);
                statistic.getScoreGamesUser(userOptionChange).then((data) => {
                    document.querySelector(".table-name").innerHTML = `${settingsChange.lang === "en" ? "Name Game" : "Имя игры"}`;
                    document.querySelector(".table-result").innerHTML = `${settingsChange.lang === "en" ? "Result" : "Результат"}`;
                    if (Object.entries(data.scores).length > 0) {
                        drawtbody(data);
                    }
                    else if (Object.entries(data.scores).length === 0) {
                        drawRawEmpty("user", settingsChange.lang);
                    }
                });
            }
        });
    });
}
function result() {
    const settings = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_2__.returnLocalStorage)();
    const userRegistred = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_2__.returnLocalStorageIsRegistered)();
    const main = document.querySelector(".main");
    main.innerHTML = "";
    const statistic = new _module_Games__WEBPACK_IMPORTED_MODULE_1__.StatisticGames();
    const userOption = {
        username: userRegistred.userName,
        option: optionNameUser,
    };
    if (userRegistred.isRegistred === "true") {
        drawTable(settings.lang);
        document.querySelector(".table-name").innerHTML = `${settings.lang === "en" ? "Name Game" : "Имя игры"}`;
        drawRawWait(settings.lang);
        statistic.getScoreGamesUser(userOption).then((data) => {
            if (window.location.hash === "#result") {
                if (Object.entries(data.scores).length > 0) {
                    drawtbody(data);
                }
                else if (Object.entries(data.scores).length === 0) {
                    drawRawEmpty("user", settings.lang);
                }
            }
        });
    }
    else if (userRegistred.isRegistred === "false" ||
        localStorage.getItem("userTrue") === null) {
        drawTable(settings.lang);
        const objgame1 = {
            gamename: "Jedi's Mind",
            option: optionNameGame,
        };
        drawRawWait(settings.lang);
        statistic.getScoreTop10(objgame1).then((data) => {
            if (window.location.hash === "#result") {
                document.querySelector(".table-name").innerHTML = `${settings.lang === "en" ? "Players" : "Игроки"}`;
                if (Object.entries(data.scores).length > 0) {
                    drawtbody(data);
                }
                else if (Object.entries(data.scores).length === 0) {
                    drawRawEmpty("game", settings.lang, "Jedi's Mind");
                }
            }
        });
        const buttonGAme1 = document.querySelector(`.table-result_game1`);
        buttonGAme1.checked = true;
        document.querySelector(".wrapper_table-result table").setAttribute("class", "games-table");
        document.querySelector(".wrapper_table-result table").setAttribute("id", `table-game1`);
    }
    changeRadioBtn();
    sortresult();
}
function translateHeaderTable(lang) {
    const table = document.querySelector(".wrapper_table-result table");
    const resultCell = document.querySelector(".table-result");
    const nameCell = document.querySelector(".table-name");
    if (table) {
        const nameTable = table.getAttribute("class");
        resultCell.innerHTML = `${lang === "en" ? "Result" : "Результат"}`;
        if (nameTable === "user-table") {
            nameCell.innerHTML = `${lang === "en" ? "Name Game" : "Имя игры"}`;
        }
        if (nameTable === "games-table") {
            nameCell.innerHTML = `${lang === "en" ? "Players" : "Игроки"}`;
        }
    }
}


/***/ }),

/***/ "./src/components/results/sendScore.ts":
/*!*********************************************!*\
  !*** ./src/components/results/sendScore.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendScore": () => (/* binding */ sendScore)
/* harmony export */ });
/* harmony import */ var _module_Games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/Games */ "./src/components/module/Games.ts");
/* harmony import */ var _module_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/localStorage */ "./src/components/module/localStorage.ts");


function sendScore(game, result) {
    const statistic = new _module_Games__WEBPACK_IMPORTED_MODULE_0__.StatisticGames();
    const userRegistred = (0,_module_localStorage__WEBPACK_IMPORTED_MODULE_1__.returnLocalStorageIsRegistered)();
    const name = userRegistred.isRegistred === "true"
        ? userRegistred.userName
        : "Unknown Jedi";
    const obj = {
        username: name,
        gamename: game,
        score: result,
    };
    statistic.addScoreGameUser(obj);
    statistic.addScoreTop10(obj);
}


/***/ }),

/***/ "./src/assets/account.png":
/*!********************************!*\
  !*** ./src/assets/account.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/633891102b1d63c29413.png";

/***/ }),

/***/ "./src/assets/cross_input.svg":
/*!************************************!*\
  !*** ./src/assets/cross_input.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/0f7cba07cb9ae50f82a1.svg";

/***/ }),

/***/ "./src/assets/game1_picture.png":
/*!**************************************!*\
  !*** ./src/assets/game1_picture.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/7d059792822a4a6a9ed8.png";

/***/ }),

/***/ "./src/assets/game2_picture.png":
/*!**************************************!*\
  !*** ./src/assets/game2_picture.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/49f0fc232a8f313c026a.png";

/***/ }),

/***/ "./src/assets/game3_picture.png":
/*!**************************************!*\
  !*** ./src/assets/game3_picture.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/faab39da2788f1ed64f4.png";

/***/ }),

/***/ "./src/assets/game4_picture.png":
/*!**************************************!*\
  !*** ./src/assets/game4_picture.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/10bfb761d406b10f4195.png";

/***/ }),

/***/ "./src/assets/game4images/Anakin.png":
/*!*******************************************!*\
  !*** ./src/assets/game4images/Anakin.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/e24eda4cb7405745c29b.png";

/***/ }),

/***/ "./src/assets/game4images/Yoda.png":
/*!*****************************************!*\
  !*** ./src/assets/game4images/Yoda.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/e35b98d7bdde0d5f2214.png";

/***/ }),

/***/ "./src/assets/game5_picture.png":
/*!**************************************!*\
  !*** ./src/assets/game5_picture.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/36fc7a3fa80d9c0b5111.png";

/***/ }),

/***/ "./src/assets/github_icon.svg":
/*!************************************!*\
  !*** ./src/assets/github_icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/7c2b277031fc9aeb24c0.svg";

/***/ }),

/***/ "./src/assets/iconOKInput.svg":
/*!************************************!*\
  !*** ./src/assets/iconOKInput.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/16992ed6d1e328a848b8.svg";

/***/ }),

/***/ "./src/assets/images/enemy_1.png":
/*!***************************************!*\
  !*** ./src/assets/images/enemy_1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/3c3d049c0dbe041e6520.png";

/***/ }),

/***/ "./src/assets/images/enemy_2.png":
/*!***************************************!*\
  !*** ./src/assets/images/enemy_2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/42ab06b9f93f0667c89f.png";

/***/ }),

/***/ "./src/assets/images/enemy_3.png":
/*!***************************************!*\
  !*** ./src/assets/images/enemy_3.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/7baf0627634816af539a.png";

/***/ }),

/***/ "./src/assets/images/jedi.png":
/*!************************************!*\
  !*** ./src/assets/images/jedi.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/786f86cfe1eb093cf490.png";

/***/ }),

/***/ "./src/assets/images/jedi_run1.png":
/*!*****************************************!*\
  !*** ./src/assets/images/jedi_run1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/4ea4bfa371a732e3723f.png";

/***/ }),

/***/ "./src/assets/images/jedi_run2.png":
/*!*****************************************!*\
  !*** ./src/assets/images/jedi_run2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/4864e2165074712b471b.png";

/***/ }),

/***/ "./src/assets/images_game_3/millennium-falcon.png":
/*!********************************************************!*\
  !*** ./src/assets/images_game_3/millennium-falcon.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/c6889b4094bad0e0628d.png";

/***/ }),

/***/ "./src/assets/input_OK.svg":
/*!*********************************!*\
  !*** ./src/assets/input_OK.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/8d298acbac3493093dbe.svg";

/***/ }),

/***/ "./src/assets/input_Unavailable.svg":
/*!******************************************!*\
  !*** ./src/assets/input_Unavailable.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/cf13187d642308f7dd1a.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/b2643fc2d6dabb023d41.svg";

/***/ }),

/***/ "./src/assets/moon.svg":
/*!*****************************!*\
  !*** ./src/assets/moon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/1cc19e941d8f067b7cee.svg";

/***/ }),

/***/ "./src/assets/parallax_galaxy.png":
/*!****************************************!*\
  !*** ./src/assets/parallax_galaxy.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/b07fc75be364e04fced8.png";

/***/ }),

/***/ "./src/assets/parallax_galaxy_light.jpg":
/*!**********************************************!*\
  !*** ./src/assets/parallax_galaxy_light.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/b49a1cbbe557b0fe3467.jpg";

/***/ }),

/***/ "./src/assets/parallax_ship.png":
/*!**************************************!*\
  !*** ./src/assets/parallax_ship.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/e749dbfd39e20a2f203a.png";

/***/ }),

/***/ "./src/assets/parallax_star.png":
/*!**************************************!*\
  !*** ./src/assets/parallax_star.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/42564eb7979eb346c93c.png";

/***/ }),

/***/ "./src/assets/rectangle_dark.svg":
/*!***************************************!*\
  !*** ./src/assets/rectangle_dark.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/ebd68ff79213e61106d5.svg";

/***/ }),

/***/ "./src/assets/rectangle_light.svg":
/*!****************************************!*\
  !*** ./src/assets/rectangle_light.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/ca6ef85620f2af713b90.svg";

/***/ }),

/***/ "./src/assets/rs_school.svg":
/*!**********************************!*\
  !*** ./src/assets/rs_school.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/b0bf6ac385986ba7d5bc.svg";

/***/ }),

/***/ "./src/assets/sounds/MercuryAudio.mp3":
/*!********************************************!*\
  !*** ./src/assets/sounds/MercuryAudio.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/1b1e47b68255990cb756.mp3";

/***/ }),

/***/ "./src/assets/sounds/back-game5-starwars.mp3":
/*!***************************************************!*\
  !*** ./src/assets/sounds/back-game5-starwars.mp3 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/5631a49db60d47fdc6c2.mp3";

/***/ }),

/***/ "./src/assets/sounds/correctAnswer.mp3":
/*!*********************************************!*\
  !*** ./src/assets/sounds/correctAnswer.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/4b64a889cd63f27ee9da.mp3";

/***/ }),

/***/ "./src/assets/sounds/failAudio-starwars.mp3":
/*!**************************************************!*\
  !*** ./src/assets/sounds/failAudio-starwars.mp3 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/e0b34843a24a83d21d0c.mp3";

/***/ }),

/***/ "./src/assets/sounds/final-game5-starwars.mp3":
/*!****************************************************!*\
  !*** ./src/assets/sounds/final-game5-starwars.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/c6921ecc1507859f55b7.mp3";

/***/ }),

/***/ "./src/assets/sounds/game5-one-card.mp3":
/*!**********************************************!*\
  !*** ./src/assets/sounds/game5-one-card.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/5d64f560756d87ca5f9f.mp3";

/***/ }),

/***/ "./src/assets/sounds/incorrectAnswer.mp3":
/*!***********************************************!*\
  !*** ./src/assets/sounds/incorrectAnswer.mp3 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/3d1e7ad9680cf2ad2c14.mp3";

/***/ }),

/***/ "./src/assets/starwars/background.jpg":
/*!********************************************!*\
  !*** ./src/assets/starwars/background.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/788311fac3ed272ebe31.jpg";

/***/ }),

/***/ "./src/assets/starwars/chukaba.jpg":
/*!*****************************************!*\
  !*** ./src/assets/starwars/chukaba.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/60d3dc3e69b945198b97.jpg";

/***/ }),

/***/ "./src/assets/starwars/joda.jpg":
/*!**************************************!*\
  !*** ./src/assets/starwars/joda.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/e15e2e68b7380cbb024f.jpg";

/***/ }),

/***/ "./src/assets/starwars/joda2.jpg":
/*!***************************************!*\
  !*** ./src/assets/starwars/joda2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/c34e3c834405b91c67b2.jpg";

/***/ }),

/***/ "./src/assets/starwars/kenobi.jpg":
/*!****************************************!*\
  !*** ./src/assets/starwars/kenobi.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/ba4d0e6735d5b9258f18.jpg";

/***/ }),

/***/ "./src/assets/starwars/kenobi2.jpg":
/*!*****************************************!*\
  !*** ./src/assets/starwars/kenobi2.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/427ac46da0c4b243f6e2.jpg";

/***/ }),

/***/ "./src/assets/starwars/kenobi3.jpg":
/*!*****************************************!*\
  !*** ./src/assets/starwars/kenobi3.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/ef65692ebf6515a5fc1d.jpg";

/***/ }),

/***/ "./src/assets/starwars/mandalorec.jpg":
/*!********************************************!*\
  !*** ./src/assets/starwars/mandalorec.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/c3c5a509e8a18ec72e60.jpg";

/***/ }),

/***/ "./src/assets/starwars/mandalorec2.jpg":
/*!*********************************************!*\
  !*** ./src/assets/starwars/mandalorec2.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/9939aca3272321e92b3f.jpg";

/***/ }),

/***/ "./src/assets/starwars/mandalorec3.jpg":
/*!*********************************************!*\
  !*** ./src/assets/starwars/mandalorec3.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/c81b48ddf4280fed1de5.jpg";

/***/ }),

/***/ "./src/assets/starwars/robot.jpg":
/*!***************************************!*\
  !*** ./src/assets/starwars/robot.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/a613a158381d87df4a52.jpg";

/***/ }),

/***/ "./src/assets/starwars/ship.jpg":
/*!**************************************!*\
  !*** ./src/assets/starwars/ship.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/d652a34bf9c09ba60571.jpg";

/***/ }),

/***/ "./src/assets/starwars/ship2.jpg":
/*!***************************************!*\
  !*** ./src/assets/starwars/ship2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/56d625d68b12ec94aa61.jpg";

/***/ }),

/***/ "./src/assets/starwars/ship3.jpg":
/*!***************************************!*\
  !*** ./src/assets/starwars/ship3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/858de3c83f435dbec919.jpg";

/***/ }),

/***/ "./src/assets/starwars/stormtrooper.jpg":
/*!**********************************************!*\
  !*** ./src/assets/starwars/stormtrooper.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/317234be23417ac2042a.jpg";

/***/ }),

/***/ "./src/assets/starwars/stormtrooper2.jpg":
/*!***********************************************!*\
  !*** ./src/assets/starwars/stormtrooper2.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/670869d11b25ce10b1b8.jpg";

/***/ }),

/***/ "./src/assets/starwars/weid.jpg":
/*!**************************************!*\
  !*** ./src/assets/starwars/weid.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/a6de809367bf115ef481.jpg";

/***/ }),

/***/ "./src/assets/starwars/weid2.jpg":
/*!***************************************!*\
  !*** ./src/assets/starwars/weid2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/1720401cf94dcdb4a964.jpg";

/***/ }),

/***/ "./src/assets/starwars/weid3.jpg":
/*!***************************************!*\
  !*** ./src/assets/starwars/weid3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/47d34b203c3def38669e.jpg";

/***/ }),

/***/ "./src/assets/sunny.svg":
/*!******************************!*\
  !*** ./src/assets/sunny.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/5985ec3d476c81686f12.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_module_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/module/settings */ "./src/components/module/settings.ts");
/* harmony import */ var _components_module_drawPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/module/drawPage */ "./src/components/module/drawPage.ts");
/* harmony import */ var _components_module_changePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/module/changePage */ "./src/components/module/changePage.ts");
/* harmony import */ var _components_registration_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/register */ "./src/components/registration/register.ts");
/* harmony import */ var _components_registration_accountUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/registration/accountUser */ "./src/components/registration/accountUser.ts");
/* harmony import */ var _components_game4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game4 */ "./src/components/game4/index.ts");
/* harmony import */ var _components_module_localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/module/localStorage */ "./src/components/module/localStorage.ts");








(0,_components_module_changePage__WEBPACK_IMPORTED_MODULE_3__.enableRoutChange)();
(0,_components_module_drawPage__WEBPACK_IMPORTED_MODULE_2__.drawPage)();
const pageId = (0,_components_module_changePage__WEBPACK_IMPORTED_MODULE_3__.getCurrentPageId)() ? (0,_components_module_changePage__WEBPACK_IMPORTED_MODULE_3__.getCurrentPageId)() : "about";
(0,_components_module_changePage__WEBPACK_IMPORTED_MODULE_3__.renderNewPage)(pageId);
(0,_components_module_changePage__WEBPACK_IMPORTED_MODULE_3__.changePage)();
(0,_components_module_settings__WEBPACK_IMPORTED_MODULE_1__.toggleVolume)();
(0,_components_module_settings__WEBPACK_IMPORTED_MODULE_1__.toggleLight)();
(0,_components_module_settings__WEBPACK_IMPORTED_MODULE_1__.toggleLang)();
(0,_components_registration_register__WEBPACK_IMPORTED_MODULE_4__.authorizeUser)();
(0,_components_registration_register__WEBPACK_IMPORTED_MODULE_4__.closeOpenWindowRegisration)();
(0,_components_registration_accountUser__WEBPACK_IMPORTED_MODULE_5__.clickingIconUserandLogout)();
(0,_components_game4__WEBPACK_IMPORTED_MODULE_6__.retryBtnclick)();
(0,_components_game4__WEBPACK_IMPORTED_MODULE_6__.chipClick)();
window.addEventListener("beforeunload", () => {
    const settings = (0,_components_module_localStorage__WEBPACK_IMPORTED_MODULE_7__.returnLocalStorage)();
    settings.volume = false;
    localStorage.setItem("settings", JSON.stringify(settings));
});

})();

/******/ })()
;