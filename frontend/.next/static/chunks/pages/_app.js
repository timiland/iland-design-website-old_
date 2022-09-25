(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            _context.next = 3;
            return (0, _utils.loadGetInitialProps)(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appGetInitialProps.apply(this, arguments);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/_react["default"].createElement(Component, pageProps);
    }
  }]);

  return App;
}(_react["default"].Component);

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


var Error = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Error, _react$default$Compon);

  var _super = _createSuper(Error);

  function Error() {
    _classCallCheck(this, Error);

    return _super.apply(this, arguments);
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode ? "".concat(statusCode, ": ").concat(title) : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, this.props.title || statusCode ? title : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Application error: a client-side exception has occurred (", /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://nextjs.org/docs/messages/client-side-exception-occurred"
      }, "developer guidance"), ")"), "."))));
    }
  }]);

  return Error;
}(_react["default"].Component);

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Tim\\Documents\\Designs\\Web Development\\iland-design-site\\frontend\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  // Extract the data we need
  var global = pageProps.global;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_6___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, _this);
  }

  var _global$attributes = global.attributes,
      metadata = _global$attributes.metadata,
      favicon = _global$attributes.favicon,
      metaTitleSuffix = _global$attributes.metaTitleSuffix;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(favicon.data.attributes.url)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_8__.DefaultSeo, {
      titleTemplate: "%s | ".concat(metaTitleSuffix),
      title: "Page",
      description: metadata.metaDescription,
      openGraph: {
        images: Object.values(metadata.shareImage.data.attributes.formats).map(function (image) {
          return {
            url: (0,utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(image.url),
            width: image.width,
            height: image.height
          };
        })
      },
      twitter: {
        cardType: metadata.twitterCardType,
        handle: metadata.twitterUsername
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(appContext) {
    var appProps, globalLocale;
    return C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_4___default().getInitialProps(appContext);

          case 2:
            appProps = _context.sent;
            _context.next = 5;
            return (0,utils_api__WEBPACK_IMPORTED_MODULE_10__.getGlobalData)(appContext.router.locale);

          case 5:
            globalLocale = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
              pageProps: {
                global: globalLocale
              }
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; },
/* harmony export */   "getPageData": function() { return /* binding */ getPageData; },
/* harmony export */   "getGlobalData": function() { return /* binding */ getGlobalData; }
/* harmony export */ });
/* harmony import */ var C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function getStrapiURL(path) {
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(path);
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}
/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */

function _fetchAPI() {
  _fetchAPI = (0,C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(path) {
    var urlParamsObject,
        options,
        mergedOptions,
        queryString,
        requestUrl,
        response,
        data,
        _args = arguments;
    return C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlParamsObject = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            // Merge default and user options
            mergedOptions = _objectSpread({
              headers: {
                "Content-Type": "application/json"
              }
            }, options); // Build request URL

            queryString = qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(urlParamsObject);
            requestUrl = "".concat(getStrapiURL("/api".concat(path).concat(queryString ? "?".concat(queryString) : ""))); // Trigger API call

            _context.next = 7;
            return fetch(requestUrl, mergedOptions);

          case 7:
            response = _context.sent;

            if (response.ok) {
              _context.next = 11;
              break;
            }

            console.error(response.statusText);
            throw new Error("An error occured please try again");

          case 11:
            _context.next = 13;
            return response.json();

          case 13:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

function getPageData(_x2) {
  return _getPageData.apply(this, arguments);
} // Get site data from Strapi (metadata, navbar, footer...)

function _getPageData() {
  _getPageData = (0,C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(_ref) {
    var _pagesData$data;

    var slug, locale, preview, gqlEndpoint, pagesRes, pagesData;
    return C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            slug = _ref.slug, locale = _ref.locale, preview = _ref.preview;
            // Find the pages that match this slug
            gqlEndpoint = getStrapiURL("/graphql");
            _context2.next = 4;
            return fetch(gqlEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: "\n        fragment FileParts on UploadFileEntityResponse {\n          data {\n            id\n            attributes {\n              alternativeText\n              width\n              height\n              mime\n              url\n              formats\n            }\n          }\n        }\n        query GetPages(\n          $slug: String!\n          $publicationState: PublicationState!\n          $locale: I18NLocaleCode!\n        ) {        \n          pages(\n            filters: { slug: { eq: $slug } }\n            publicationState: $publicationState\n            locale: $locale\n          ) {\n            data {\n              id\n              attributes {\n                locale\n                localizations {\n                  data {\n                    id\n                    attributes {\n                      locale\n                    }\n                  }\n                }\n                slug\n                metadata {\n                  metaTitle\n                  metaDescription\n                  shareImage {\n                    ...FileParts\n                  }\n                  twitterCardType\n                  twitterUsername\n                }\n                contentSections {\n                  __typename\n                  ... on ComponentSectionsBottomActions {\n                    id\n                    title\n                    buttons {\n                      id\n                      newTab\n                      text\n                      type\n                      url\n                    }\n                  }\n                  ... on ComponentSectionsHero {\n                    id\n                    buttons {\n                      id\n                      newTab\n                      text\n                      type\n                      url\n                    }\n                    title\n                    description\n                    label\n                    picture {\n                      ...FileParts\n                    }\n                  }\n                  ... on ComponentSectionsFeatureColumnsGroup {\n                    id\n                    features {\n                      id\n                      description\n                      icon {\n                        ...FileParts\n                      }\n                      title\n                    }\n                  }\n                  ... on ComponentSectionsFeatureRowsGroup {\n                    id\n                    features {\n                      id\n                      description\n                      link {\n                        id\n                        newTab\n                        text\n                        url\n                      }\n                      media {\n                        ...FileParts\n                      }\n                      title\n                    }\n                  }\n                  ... on ComponentSectionsTestimonialsGroup {\n                    id\n                    description\n                    link {\n                      id\n                      newTab\n                      text\n                      url\n                    }\n                    logos {\n                      id\n                      title\n                      logo {\n                        ...FileParts\n                      }\n                    }\n                    testimonials {\n                      id\n                      logo {\n                        ...FileParts\n                      }\n                      picture {\n                        ...FileParts\n                      }\n                      text\n                      authorName\n                      authorTitle\n                      link\n                    }\n                    title\n                  }\n                  ... on ComponentSectionsLargeVideo {\n                    id\n                    description\n                    title\n                    poster {\n                      ...FileParts\n                    }\n                    video {\n                      ...FileParts\n                    }\n                  }\n                  ... on ComponentSectionsRichText {\n                    id\n                    content\n                  }\n                  ... on ComponentSectionsPricing {\n                    id\n                    title\n                    plans {\n                      description\n                      features {\n                        id\n                        name\n                      }\n                      id\n                      isRecommended\n                      name\n                      price\n                      pricePeriod\n                    }\n                  }\n                  ... on ComponentSectionsLeadForm {\n                    id\n                    emailPlaceholder\n                    location\n                    submitButton {\n                      id\n                      text\n                      type\n                    }\n                    title\n                  }\n                }\n              }\n            }\n          }\n        }      \n      ",
                variables: {
                  slug: slug,
                  publicationState: preview ? "PREVIEW" : "LIVE",
                  locale: locale
                }
              })
            });

          case 4:
            pagesRes = _context2.sent;
            _context2.next = 7;
            return pagesRes.json();

          case 7:
            pagesData = _context2.sent;

            if (!(((_pagesData$data = pagesData.data) === null || _pagesData$data === void 0 ? void 0 : _pagesData$data.pages) == null || pagesData.data.pages.length === 0)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", null);

          case 10:
            return _context2.abrupt("return", pagesData.data.pages.data[0]);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPageData.apply(this, arguments);
}

function getGlobalData(_x3) {
  return _getGlobalData.apply(this, arguments);
}

function _getGlobalData() {
  _getGlobalData = (0,C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(locale) {
    var gqlEndpoint, globalRes, global;
    return C_Users_Tim_Documents_Designs_Web_Development_iland_design_site_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            gqlEndpoint = getStrapiURL("/graphql");
            _context3.next = 3;
            return fetch(gqlEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: "\n        fragment FileParts on UploadFileEntityResponse {\n          data {\n            id\n            attributes {\n              alternativeText\n              width\n              height\n              mime\n              url\n              formats\n            }\n          }\n        }\n        query GetGlobal($locale: I18NLocaleCode!) {\n          global(locale: $locale) {\n            data {\n              id\n              attributes {\n                favicon {\n                  ...FileParts\n                }\n                metadata {\n                  metaTitle\n                  metaDescription\n                  shareImage {\n                    ...FileParts\n                  }\n                  twitterCardType\n                  twitterUsername\n                }\n                metaTitleSuffix\n                notificationBanner {\n                  type\n                  text\n                }\n                navbar {\n                  logo {\n                    ...FileParts\n                  }\n                  links {\n                    id\n                    url\n                    newTab\n                    text\n                  }\n                  button {\n                    id\n                    url\n                    newTab\n                    text\n                    type\n                  }\n                }\n                footer {\n                  logo {\n                    ...FileParts\n                  }\n                  smallText\n                  columns {\n                    id\n                    title\n                    links {\n                      id\n                      url\n                      newTab\n                      text\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }      \n      ",
                variables: {
                  locale: locale
                }
              })
            });

          case 3:
            globalRes = _context3.sent;
            _context3.next = 6;
            return globalRes.json();

          case 6:
            global = _context3.sent;
            return _context3.abrupt("return", global.data.global);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getGlobalData.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/media.js":
/*!************************!*\
  !*** ./utils/media.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
function getStrapiMedia(url) {
  if (url == null) {
    return null;
  } // Return the full URL if the media is hosted on an external provider


  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  } // Otherwise prepend the URL path with the Strapi URL


  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(url);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next-seo/lib/next-seo.module.js":
/*!******************************************************!*\
  !*** ./node_modules/next-seo/lib/next-seo.module.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleJsonLd": function() { return /* binding */ ArticleJsonLd; },
/* harmony export */   "BlogJsonLd": function() { return /* binding */ BlogJsonLd; },
/* harmony export */   "BreadcrumbJsonLd": function() { return /* binding */ BreadCrumbJsonLd; },
/* harmony export */   "CorporateContactJsonLd": function() { return /* binding */ CorporateContactJsonLd; },
/* harmony export */   "CourseJsonLd": function() { return /* binding */ CourseJsonLd; },
/* harmony export */   "DatasetJsonLd": function() { return /* binding */ DatasetJsonLd; },
/* harmony export */   "DefaultSeo": function() { return /* binding */ _default; },
/* harmony export */   "EventJsonLd": function() { return /* binding */ EventJsonLd; },
/* harmony export */   "FAQPageJsonLd": function() { return /* binding */ FAQPageJsonLd; },
/* harmony export */   "JobPostingJsonLd": function() { return /* binding */ JobPostingJsonLd; },
/* harmony export */   "LocalBusinessJsonLd": function() { return /* binding */ LocalBusinessJsonLd; },
/* harmony export */   "LogoJsonLd": function() { return /* binding */ LogoJsonLd; },
/* harmony export */   "NewsArticleJsonLd": function() { return /* binding */ NewsArticleJsonLd; },
/* harmony export */   "NextSeo": function() { return /* binding */ _default$1; },
/* harmony export */   "ProductJsonLd": function() { return /* binding */ ProductJsonLd; },
/* harmony export */   "RecipeJsonLd": function() { return /* binding */ RecipeJsonLd; },
/* harmony export */   "SocialProfileJsonLd": function() { return /* binding */ SocialProfileJsonLd; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var defaults = {
  templateTitle: '',
  noindex: false,
  nofollow: false,
  defaultOpenGraphImageWidth: 0,
  defaultOpenGraphImageHeight: 0,
  defaultOpenGraphVideoWidth: 0,
  defaultOpenGraphVideoHeight: 0
};

var buildTags = function buildTags(config) {
  var tagsToRender = [];

  if (config.titleTemplate) {
    defaults.templateTitle = config.titleTemplate;
  }

  var updatedTitle = '';

  if (config.title) {
    updatedTitle = config.title;

    if (defaults.templateTitle) {
      updatedTitle = defaults.templateTitle.replace(/%s/g, function () {
        return updatedTitle;
      });
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", {
      key: "title"
    }, updatedTitle));
  }

  var noindex = config.noindex || defaults.noindex || config.dangerouslySetAllPagesToNoIndex;
  var nofollow = config.nofollow || defaults.nofollow || config.dangerouslySetAllPagesToNoFollow;

  if (noindex || nofollow) {
    if (config.dangerouslySetAllPagesToNoIndex) {
      defaults.noindex = true;
    }

    if (config.dangerouslySetAllPagesToNoFollow) {
      defaults.nofollow = true;
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow')
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow')
    }));
  } else {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: "index,follow"
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: "index,follow"
    }));
  }

  if (config.description) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "description",
      name: "description",
      content: config.description
    }));
  }

  if (config.mobileAlternate) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      rel: "alternate",
      key: "mobileAlternate",
      media: config.mobileAlternate.media,
      href: config.mobileAlternate.href
    }));
  }

  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach(function (languageAlternate) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "alternate",
        key: "languageAlternate-" + languageAlternate.hrefLang,
        hrefLang: languageAlternate.hrefLang,
        href: languageAlternate.href
      }));
    });
  }

  if (config.twitter) {
    if (config.twitter.cardType) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:card",
        name: "twitter:card",
        content: config.twitter.cardType
      }));
    }

    if (config.twitter.site) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:site",
        name: "twitter:site",
        content: config.twitter.site
      }));
    }

    if (config.twitter.handle) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:creator",
        name: "twitter:creator",
        content: config.twitter.handle
      }));
    }
  }

  if (config.facebook) {
    if (config.facebook.appId) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "fb:app_id",
        property: "fb:app_id",
        content: config.facebook.appId
      }));
    }
  }

  if (config.openGraph) {
    if (config.openGraph.url || config.canonical) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:url",
        property: "og:url",
        content: config.openGraph.url || config.canonical
      }));
    }

    if (config.openGraph.type) {
      var type = config.openGraph.type.toLowerCase();
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:type",
        property: "og:type",
        content: type
      }));

      if (type === 'profile' && config.openGraph.profile) {
        if (config.openGraph.profile.firstName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:first_name",
            property: "profile:first_name",
            content: config.openGraph.profile.firstName
          }));
        }

        if (config.openGraph.profile.lastName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:last_name",
            property: "profile:last_name",
            content: config.openGraph.profile.lastName
          }));
        }

        if (config.openGraph.profile.username) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:username",
            property: "profile:username",
            content: config.openGraph.profile.username
          }));
        }

        if (config.openGraph.profile.gender) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:gender",
            property: "profile:gender",
            content: config.openGraph.profile.gender
          }));
        }
      } else if (type === 'book' && config.openGraph.book) {
        if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
          config.openGraph.book.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "book:author:0" + index,
              property: "book:author",
              content: author
            }));
          });
        }

        if (config.openGraph.book.isbn) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "book:isbn",
            property: "book:isbn",
            content: config.openGraph.book.isbn
          }));
        }

        if (config.openGraph.book.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "book:release_date",
            property: "book:release_date",
            content: config.openGraph.book.releaseDate
          }));
        }

        if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
          config.openGraph.book.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "book:tag:0" + index,
              property: "book:tag",
              content: tag
            }));
          });
        }
      } else if (type === 'article' && config.openGraph.article) {
        if (config.openGraph.article.publishedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:published_time",
            property: "article:published_time",
            content: config.openGraph.article.publishedTime
          }));
        }

        if (config.openGraph.article.modifiedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:modified_time",
            property: "article:modified_time",
            content: config.openGraph.article.modifiedTime
          }));
        }

        if (config.openGraph.article.expirationTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:expiration_time",
            property: "article:expiration_time",
            content: config.openGraph.article.expirationTime
          }));
        }

        if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
          config.openGraph.article.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "article:author:0" + index,
              property: "article:author",
              content: author
            }));
          });
        }

        if (config.openGraph.article.section) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:section",
            property: "article:section",
            content: config.openGraph.article.section
          }));
        }

        if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
          config.openGraph.article.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "article:tag:0" + index,
              property: "article:tag",
              content: tag
            }));
          });
        }
      } else if ((type === 'video.movie' || type === 'video.episode' || type === 'video.tv_show' || type === 'video.other') && config.openGraph.video) {
        if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
          config.openGraph.video.actors.forEach(function (actor, index) {
            if (actor.profile) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
                key: "video:actor:0" + index,
                property: "video:actor",
                content: actor.profile
              }));
            }

            if (actor.role) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
                key: "video:actor:role:0" + index,
                property: "video:actor:role",
                content: actor.role
              }));
            }
          });
        }

        if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
          config.openGraph.video.directors.forEach(function (director, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:director:0" + index,
              property: "video:director",
              content: director
            }));
          });
        }

        if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
          config.openGraph.video.writers.forEach(function (writer, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:writer:0" + index,
              property: "video:writer",
              content: writer
            }));
          });
        }

        if (config.openGraph.video.duration) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:duration",
            property: "video:duration",
            content: config.openGraph.video.duration.toString()
          }));
        }

        if (config.openGraph.video.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:release_date",
            property: "video:release_date",
            content: config.openGraph.video.releaseDate
          }));
        }

        if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
          config.openGraph.video.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:tag:0" + index,
              property: "video:tag",
              content: tag
            }));
          });
        }

        if (config.openGraph.video.series) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:series",
            property: "video:series",
            content: config.openGraph.video.series
          }));
        }
      }
    }

    if (config.openGraph.title || config.title) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:title",
        property: "og:title",
        content: config.openGraph.title || updatedTitle
      }));
    }

    if (config.openGraph.description || config.description) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:description",
        property: "og:description",
        content: config.openGraph.description || config.description
      }));
    } // images


    if (config.defaultOpenGraphImageWidth) {
      defaults.defaultOpenGraphImageWidth = config.defaultOpenGraphImageWidth;
    }

    if (config.defaultOpenGraphImageHeight) {
      defaults.defaultOpenGraphImageHeight = config.defaultOpenGraphImageHeight;
    }

    if (config.openGraph.images && config.openGraph.images.length) {
      config.openGraph.images.forEach(function (image, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
          key: "og:image:0" + index,
          property: "og:image",
          content: image.url
        }));

        if (image.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:alt0" + index,
            property: "og:image:alt",
            content: image.alt
          }));
        }

        if (image.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:width0" + index,
            property: "og:image:width",
            content: image.width.toString()
          }));
        } else if (defaults.defaultOpenGraphImageWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:width0" + index,
            property: "og:image:width",
            content: defaults.defaultOpenGraphImageWidth.toString()
          }));
        }

        if (image.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:height" + index,
            property: "og:image:height",
            content: image.height.toString()
          }));
        } else if (defaults.defaultOpenGraphImageHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:height" + index,
            property: "og:image:height",
            content: defaults.defaultOpenGraphImageHeight.toString()
          }));
        }
      });
    } // videos


    if (config.defaultOpenGraphVideoWidth) {
      defaults.defaultOpenGraphVideoWidth = config.defaultOpenGraphVideoWidth;
    }

    if (config.defaultOpenGraphVideoHeight) {
      defaults.defaultOpenGraphVideoHeight = config.defaultOpenGraphVideoHeight;
    }

    if (config.openGraph.videos && config.openGraph.videos.length) {
      config.openGraph.videos.forEach(function (video, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
          key: "og:video:0" + index,
          property: "og:video",
          content: video.url
        }));

        if (video.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:alt0" + index,
            property: "og:video:alt",
            content: video.alt
          }));
        }

        if (video.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:width0" + index,
            property: "og:video:width",
            content: video.width.toString()
          }));
        } else if (defaults.defaultOpenGraphVideoWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:width0" + index,
            property: "og:video:width",
            content: defaults.defaultOpenGraphVideoWidth.toString()
          }));
        }

        if (video.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:height" + index,
            property: "og:video:height",
            content: video.height.toString()
          }));
        } else if (defaults.defaultOpenGraphVideoHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:height" + index,
            property: "og:video:height",
            content: defaults.defaultOpenGraphVideoHeight.toString()
          }));
        }
      });
    }

    if (config.openGraph.locale) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:locale",
        property: "og:locale",
        content: config.openGraph.locale
      }));
    }

    if (config.openGraph.site_name) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:site_name",
        property: "og:site_name",
        content: config.openGraph.site_name
      }));
    }
  }

  if (config.canonical) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      rel: "canonical",
      href: config.canonical,
      key: "canonical"
    }));
  }

  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach(function (tag) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", Object.assign({
        key: tag.name ? tag.name : tag.property
      }, tag)));
    });
  }

  return tagsToRender;
};

var _default = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        titleTemplate = _this$props.titleTemplate,
        _this$props$dangerous = _this$props.dangerouslySetAllPagesToNoIndex,
        dangerouslySetAllPagesToNoIndex = _this$props$dangerous === void 0 ? false : _this$props$dangerous,
        _this$props$dangerous2 = _this$props.dangerouslySetAllPagesToNoFollow,
        dangerouslySetAllPagesToNoFollow = _this$props$dangerous2 === void 0 ? false : _this$props$dangerous2,
        description = _this$props.description,
        canonical = _this$props.canonical,
        facebook = _this$props.facebook,
        openGraph = _this$props.openGraph,
        additionalMetaTags = _this$props.additionalMetaTags,
        twitter = _this$props.twitter,
        defaultOpenGraphImageWidth = _this$props.defaultOpenGraphImageWidth,
        defaultOpenGraphImageHeight = _this$props.defaultOpenGraphImageHeight,
        defaultOpenGraphVideoWidth = _this$props.defaultOpenGraphVideoWidth,
        defaultOpenGraphVideoHeight = _this$props.defaultOpenGraphVideoHeight,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, buildTags({
      title: title,
      titleTemplate: titleTemplate,
      dangerouslySetAllPagesToNoIndex: dangerouslySetAllPagesToNoIndex,
      dangerouslySetAllPagesToNoFollow: dangerouslySetAllPagesToNoFollow,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      defaultOpenGraphImageWidth: defaultOpenGraphImageWidth,
      defaultOpenGraphImageHeight: defaultOpenGraphImageHeight,
      defaultOpenGraphVideoWidth: defaultOpenGraphVideoWidth,
      defaultOpenGraphVideoHeight: defaultOpenGraphVideoHeight,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var _default$1 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        _this$props$noindex = _this$props.noindex,
        noindex = _this$props$noindex === void 0 ? false : _this$props$noindex,
        nofollow = _this$props.nofollow,
        description = _this$props.description,
        canonical = _this$props.canonical,
        openGraph = _this$props.openGraph,
        facebook = _this$props.facebook,
        twitter = _this$props.twitter,
        additionalMetaTags = _this$props.additionalMetaTags,
        titleTemplate = _this$props.titleTemplate,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, buildTags({
      title: title,
      noindex: noindex,
      nofollow: nofollow,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      titleTemplate: titleTemplate,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var markup = function markup(jsonld) {
  return {
    __html: jsonld
  };
};

var ArticleJsonLd = function ArticleJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Article\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-article"
  }));
};

var BreadCrumbJsonLd = function BreadCrumbJsonLd(_ref) {
  var _ref$itemListElements = _ref.itemListElements,
      itemListElements = _ref$itemListElements === void 0 ? [] : _ref$itemListElements;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      " + itemListElements.map(function (itemListElement) {
    return "{\n        \"@type\": \"ListItem\",\n        \"position\": " + itemListElement.position + ",\n        \"item\": {\n          \"@id\": \"" + itemListElement.item + "\",\n          \"name\": \"" + itemListElement.name + "\"\n        }\n      }";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-breadcrumb"
  }));
};

var buildQuestions = function buildQuestions(mainEntity) {
  return "\n  " + mainEntity.map(function (question) {
    return "{\n      \"@type\": \"Question\",\n      \"name\": \"" + question.questionName + "\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"" + question.acceptedAnswerText + "\"\n      }\n  }";
  });
};

var FAQPageJsonLd = function FAQPageJsonLd(_ref) {
  var _ref$mainEntity = _ref.mainEntity,
      mainEntity = _ref$mainEntity === void 0 ? [] : _ref$mainEntity;
  var jslonld = "{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [" + buildQuestions(mainEntity) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-faq-page"
  }));
};

var buildBaseSalary = function buildBaseSalary(baseSalary) {
  return "\n  \"baseSalary\": {\n    \"@type\": \"MonetaryAmount\",\n    " + (baseSalary.currency ? "\"currency\": \"" + baseSalary.currency + "\"," : '') + "\n    \"value\": {\n      \"@type\": \"QuantitativeValue\",\n      " + (baseSalary.value ? "\"value\": \"" + baseSalary.value + "\"," : '') + "\n      " + (baseSalary.unitText ? "\"unitText\": \"" + baseSalary.unitText + "\"" : '') + "\n    }\n  },\n";
};

var JobPostingJsonLd = function JobPostingJsonLd(_ref) {
  var baseSalary = _ref.baseSalary,
      datePosted = _ref.datePosted,
      description = _ref.description,
      employmentType = _ref.employmentType,
      hiringOrganization = _ref.hiringOrganization,
      jobLocation = _ref.jobLocation,
      applicantLocationRequirements = _ref.applicantLocationRequirements,
      jobLocationType = _ref.jobLocationType,
      title = _ref.title,
      validThrough = _ref.validThrough;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"JobPosting\",\n    " + (baseSalary ? buildBaseSalary(baseSalary) : '') + "\n    \"datePosted\": \"" + datePosted + "\",\n    \"description\": \"" + description + "\",\n    " + (employmentType ? "\"employmentType\": \"" + employmentType + "\"," : '') + "\n    \"hiringOrganization\" : {\n      \"@type\" : \"Organization\",\n      \"name\" : \"" + hiringOrganization.name + "\",\n      \"sameAs\" : \"" + hiringOrganization.sameAs + "\"\n    },\n    \n    \"jobLocation\": {\n      \"@type\": \"Place\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"addressLocality\": \"" + jobLocation.addressLocality + "\",\n        \"addressRegion\": \"" + jobLocation.addressRegion + "\",\n        \"postalCode\" : \"" + jobLocation.postalCode + "\",\n        \"streetAddress\" : \"" + jobLocation.streetAddress + "\",\n        \"addressCountry\" : \"" + jobLocation.addressCountry + "\"\n      }\n    },\n    " + (applicantLocationRequirements ? " \"applicantLocationRequirements\": {\n        \"@type\": \"Country\",\n        \"name\": \"" + applicantLocationRequirements + "\"\n    }," : '') + "\n    " + (jobLocationType ? "\"jobLocationType\": \"" + jobLocationType + "\"," : '') + "\n    " + (validThrough ? "\"validThrough\": \"" + validThrough + "\"," : '') + "\n    \"title\": \"" + title + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-jobPosting"
  }));
};

var BlogJsonLd = function BlogJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Blog\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-blog"
  }));
};

var CourseJsonLd = function CourseJsonLd(_ref) {
  var courseName = _ref.courseName,
      description = _ref.description,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"" + courseName + "\",\n    \"description\": \"" + description + "\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + providerName + "\"" + (providerUrl ? ",\n      \"sameAs\": \"" + providerUrl + "\"" : '') + "\n    }\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-course"
  }));
};

var DatasetJsonLd = function DatasetJsonLd(_ref) {
  var description = _ref.description,
      name = _ref.name,
      license = _ref.license;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Dataset\",\n    \"description\": \"" + description + "\",\n    \"name\": \"" + name + "\"" + (license ? ",\n        \"license\": \"" + license + "\"" : '') + "\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-dataset"
  }));
};

var formatIfArray = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildAddress = (function (address) {
  return "\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"streetAddress\": \"" + address.streetAddress + "\",\n    \"addressLocality\": \"" + address.addressLocality + "\",\n    " + (address.addressRegion ? "\"addressRegion\": \"" + address.addressRegion + "\"," : '') + "\n    \"postalCode\": \"" + address.postalCode + "\",\n    \"addressCountry\": \"" + address.addressCountry + "\"\n  },\n";
});

var buildGeo = function buildGeo(geo) {
  return "\n  \"geo\": {\n    \"@type\": \"GeoCoordinates\",\n    \"latitude\": \"" + geo.latitude + "\",\n    \"longitude\": \"" + geo.longitude + "\"\n  },\n";
};

var buildRating = function buildRating(rating) {
  return "\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"" + rating.ratingValue + "\",\n    \"ratingCount\": \"" + rating.ratingCount + "\"\n  },\n";
};

var buildOpeningHours = function buildOpeningHours(openingHours) {
  return "\n  {\n    \"@type\": \"OpeningHoursSpecification\",\n    \"opens\": \"" + openingHours.opens + "\",\n    \"closes\": \"" + openingHours.closes + "\",\n    " + (openingHours.dayOfWeek ? "\"dayOfWeek\": " + formatIfArray(openingHours.dayOfWeek) + "," : '') + "\n    " + (openingHours.validFrom ? "\"validFrom\": \"" + openingHours.validFrom + "\"," : '') + "\n    " + (openingHours.validThrough ? "\"validThrough\": \"" + openingHours.validThrough + "\"" : '') + "\n  }\n";
};

var LocalBusinessJsonLd = function LocalBusinessJsonLd(_ref) {
  var type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      description = _ref.description,
      url = _ref.url,
      telephone = _ref.telephone,
      address = _ref.address,
      geo = _ref.geo,
      images = _ref.images,
      rating = _ref.rating,
      priceRange = _ref.priceRange,
      sameAs = _ref.sameAs,
      openingHours = _ref.openingHours;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"" + type + "\",\n    \"@id\": \"" + id + "\",\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (url ? "\"url\": \"" + url + "\"," : '') + "\n    " + (telephone ? "\"telephone\": \"" + telephone + "\"," : '') + "\n    " + buildAddress(address) + "\n    " + (geo ? "" + buildGeo(geo) : '') + "\n    " + (rating ? "" + buildRating(rating) : '') + "\n    " + (priceRange ? "\"priceRange\": \"" + priceRange + "\"," : '') + "\n    \"image\":" + formatIfArray(images) + ",\n    " + (sameAs ? "\"sameAs\": [" + sameAs.map(function (url) {
    return "\"" + url + "\"";
  }) + "]," : '') + "\n    " + (openingHours ? "\"openingHoursSpecification\": " + (Array.isArray(openingHours) ? "[" + openingHours.map(function (hours) {
    return "" + buildOpeningHours(hours);
  }) + "]" : buildOpeningHours(openingHours)) + "," : '') + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-local-business"
  }));
};

var LogoJsonLd = function LogoJsonLd(_ref) {
  var url = _ref.url,
      logo = _ref.logo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    \"logo\": \"" + logo + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-logo"
  }));
};

var buildBrand = function buildBrand(brand) {
  return "\n  \"brand\": {\n      \"@type\": \"Thing\",\n      \"name\": \"" + brand + "\"\n    },\n";
};

var buildReviewRating = function buildReviewRating(rating) {
  return rating ? "\"reviewRating\": {\n          \"@type\": \"Rating\",\n          " + (rating.bestRating ? "\"bestRating\": \"" + rating.bestRating + "\"," : '') + "\n          " + (rating.worstRating ? "\"worstRating\": \"" + rating.worstRating + "\"," : '') + "\n          \"ratingValue\": \"" + rating.ratingValue + "\"\n        }" : '';
};

var buildAuthor = function buildAuthor(author) {
  return "\n  \"author\": {\n      \"@type\": \"" + author.type + "\",\n      \"name\": \"" + author.name + "\"\n  },\n";
};

var buildPublisher = function buildPublisher(publisher) {
  return "\n  \"publisher\": {\n      \"@type\": \"" + publisher.type + "\",\n      \"name\": \"" + publisher.name + "\"\n  },\n";
};

var buildReviews = function buildReviews(reviews) {
  return "\n\"review\": [\n  " + reviews.map(function (review) {
    return "{\n      \"@type\": \"Review\",\n      " + (review.author ? buildAuthor(review.author) : '') + "\n      " + (review.publisher ? buildPublisher(review.publisher) : '') + "\n      " + (review.datePublished ? "\"datePublished\": \"" + review.datePublished + "\"," : '') + "\n      " + (review.reviewBody ? "\"reviewBody\": \"" + review.reviewBody + "\"," : '') + "\n      " + (review.name ? "\"name\": \"" + review.name + "\"," : '') + "\n      " + buildReviewRating(review.reviewRating) + "\n  }";
  }) + "],";
};

var buildAggregateRating = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"" + aggregateRating.ratingValue + "\",\n      \"reviewCount\": \"" + aggregateRating.reviewCount + "\"\n    },\n";
}; // TODO: Docs for offers itemCondition & availability
// TODO: Seller type, make dynamic


var buildOffers = function buildOffers(offers) {
  return "\n  {\n    \"@type\": \"Offer\",\n    \"priceCurrency\": \"" + offers.priceCurrency + "\",\n    " + (offers.priceValidUntil ? "\"priceValidUntil\": \"" + offers.priceValidUntil + "\"," : '') + "\n    " + (offers.itemCondition ? "\"itemCondition\": \"" + offers.itemCondition + "\"," : '') + "\n    " + (offers.availability ? "\"availability\": \"" + offers.availability + "\"," : '') + "\n    " + (offers.url ? "\"url\": \"" + offers.url + "\"," : '') + "\n    " + (offers.seller ? "\n      \"seller\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + offers.seller.name + "\"\n    },\n    " : '') + "\n    \"price\": \"" + offers.price + "\"\n  }\n";
};

var ProductJsonLd = function ProductJsonLd(_ref) {
  var productName = _ref.productName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      description = _ref.description,
      sku = _ref.sku,
      gtin8 = _ref.gtin8,
      gtin13 = _ref.gtin13,
      gtin14 = _ref.gtin14,
      mpn = _ref.mpn,
      brand = _ref.brand,
      _ref$reviews = _ref.reviews,
      reviews = _ref$reviews === void 0 ? [] : _ref$reviews,
      aggregateRating = _ref.aggregateRating,
      offers = _ref.offers;
  var jslonld = "{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"Product\",\n    \"image\":" + formatIfArray(images) + ",\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (mpn ? "\"mpn\": \"" + mpn + "\"," : '') + "\n    " + (sku ? "\"sku\": \"" + sku + "\"," : '') + "\n    " + (gtin8 ? "\"gtin8\": \"" + gtin8 + "\"," : '') + "\n    " + (gtin13 ? "\"gtin13\": \"" + gtin13 + "\"," : '') + "\n    " + (gtin14 ? "\"gtin14\": \"" + gtin14 + "\"," : '') + "\n    " + (brand ? buildBrand(brand) : '') + "\n    " + (reviews.length ? buildReviews(reviews) : '') + "\n    " + (aggregateRating ? buildAggregateRating(aggregateRating) : '') + "\n    " + (offers ? "\"offers\": " + (Array.isArray(offers) ? "[" + offers.map(function (offer) {
    return "" + buildOffers(offer);
  }) + "]" : buildOffers(offers)) + "," : '') + "\n    \"name\": \"" + productName + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-product"
  }));
};

var SocialProfileJsonLd = function SocialProfileJsonLd(_ref) {
  var type = _ref.type,
      name = _ref.name,
      url = _ref.url,
      _ref$sameAs = _ref.sameAs,
      sameAs = _ref$sameAs === void 0 ? [] : _ref$sameAs;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"" + type + "\",\n    \"name\": \"" + name + "\",\n    \"url\": \"" + url + "\",\n    \"sameAs\": [\n      " + sameAs.map(function (socialUrl) {
    return "\"" + socialUrl + "\"";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-social"
  }));
};

var formatIfArray$1 = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildContactPoint = function buildContactPoint(contactPoint) {
  return contactPoint.map(function (contact) {
    return "{\n    \"@type\": \"ContactPoint\",\n    \"telephone\": \"" + contact.telephone + "\",\n    \"contactType\": \"" + contact.contactType + "\"" + (contact.areaServed ? ",\n    \"areaServed\": " + formatIfArray$1(contact.areaServed) : '') + (contact.availableLanguage ? ",\n    \"availableLanguage\": " + formatIfArray$1(contact.availableLanguage) : '') + (contact.contactOption ? ",\n    \"contactOption\": \"" + contact.contactOption + "\"" : '') + "\n    }";
  });
};

var CorporateContactJsonLd = function CorporateContactJsonLd(_ref) {
  var url = _ref.url,
      logo = _ref.logo,
      contactPoint = _ref.contactPoint;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    " + (logo ? "\"logo\": \"" + logo + "\"," : '') + "\n    \"contactPoint\": [" + buildContactPoint(contactPoint) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-corporate-contact"
  }));
};

var NewsArticleJsonLd = function NewsArticleJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      section = _ref.section,
      keywords = _ref.keywords,
      datePublished = _ref.datePublished,
      _ref$dateCreated = _ref.dateCreated,
      dateCreated = _ref$dateCreated === void 0 ? null : _ref$dateCreated,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      body = _ref.body,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"NewsArticle\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"articleSection\":\"" + section + "\",\n    \"keywords\": \"" + keywords + "\",    \n    \"datePublished\": \"" + datePublished + "\",\n    \"dateCreated\": \"" + (dateCreated || datePublished) + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\",\n    \"articleBody\": \"" + body + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-newsarticle"
  }));
};

var buildLocation = function buildLocation(location) {
  return "\n  \"location\": {\n    \"@type\": \"Place\",\n    " + buildAddress(location.address) + "\n    " + (location.sameAs ? "\"sameAs\": \"" + location.sameAs + "\"," : "") + "\n    \"name\": \"" + location.name + "\"\n  },\n";
};

var EventJsonLd = function EventJsonLd(_ref) {
  var name = _ref.name,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      location = _ref.location,
      url = _ref.url,
      description = _ref.description,
      images = _ref.images;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Event\",\n    \"startDate\": \"" + startDate + "\",\n    \"endDate\": \"" + endDate + "\",\n    " + buildLocation(location) + "\n    " + (images ? "\"image\":" + formatIfArray(images) + "," : "") + "\n    " + (url ? "\"url\": \"" + url + "\"," : "") + "\n    " + (description ? "\"description\": \"" + description + "\"," : "") + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-event"
  }));
};

var buildAggregateRating$1 = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"" + aggregateRating.ratingValue + "\",\n      \"ratingCount\": \"" + aggregateRating.ratingCount + "\"\n    },\n";
};

var buildInstruction = function buildInstruction(instruction) {
  return "{\n  \"@type\": \"HowToStep\",\n  \"name\": \"" + instruction.name + "\",\n  \"text\": \"" + instruction.text + "\",\n  \"url\": \"" + instruction.url + "\",\n  \"image\": \"" + instruction.image + "\"\n}";
};

var buildInteractionStatistic = function buildInteractionStatistic(watchCount) {
  return "\n  \"interactionStatistic\": {\n    \"@type\": \"InteractionCounter\",\n    \"interactionType\": { \"@type\": \"http://schema.org/WatchAction\" },\n    \"userInteractionCount\": " + watchCount + "\n  }\n";
};

var buildVideo = function buildVideo(video) {
  return "\n  \"video\": {\n      \"@type\": \"VideoObject\",\n      \"name\": \"" + video.name + "\",\n      \"thumbnailUrl\": [\n        " + (video.thumbnailUrls || []).map(function (thumbnailUrl) {
    return "\"" + thumbnailUrl + "\"";
  }).join(',') + "\n       ],\n      \"description\": \"" + video.description + "\",\n      \"contentUrl\": \"" + video.contentUrl + "\",\n      \"uploadDate\": \"" + video.uploadDate + "\",\n      \"duration\": \"" + video.duration + "\",\n      " + (video.embedUrl ? "\"embedUrl\": \"" + video.embedUrl + "\"," : "") + "\n      " + (video.expires ? "\"expires\": \"" + video.expires + "\"," : "") + "\n      " + (video.watchCount ? buildInteractionStatistic(video.watchCount) : "") + "\n    },\n";
};

var RecipeJsonLd = function RecipeJsonLd(_ref) {
  var name = _ref.name,
      description = _ref.description,
      authorName = _ref.authorName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      prepTime = _ref.prepTime,
      cookTime = _ref.cookTime,
      totalTime = _ref.totalTime,
      keywords = _ref.keywords,
      yields = _ref.yields,
      category = _ref.category,
      cuisine = _ref.cuisine,
      calories = _ref.calories,
      ingredients = _ref.ingredients,
      instructions = _ref.instructions,
      aggregateRating = _ref.aggregateRating,
      video = _ref.video;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"Recipe\",\n    \"name\": \"" + name + "\",\n    \"description\": \"" + description + "\",\n    \"datePublished\": \"" + datePublished + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }).join(',') + "\n    ],\n    " + (prepTime ? "\"prepTime\": \"" + prepTime + "\"," : "") + "\n    " + (cookTime ? "\"cookTime\": \"" + cookTime + "\"," : "") + "\n    " + (totalTime ? "\"totalTime\": \"" + totalTime + "\"," : "") + "\n    " + (keywords ? "\"keywords\": \"" + keywords + "\"," : "") + "\n    " + (yields ? "\"recipeYield\": \"" + yields + "\"," : "") + "\n    " + (category ? "\"recipeCategory\": \"" + category + "\"," : "") + "\n    " + (cuisine ? "\"recipeCuisine\": \"" + cuisine + "\"," : "") + "\n    " + (calories ? "\"nutrition\": { \"@type\": \"NutritionInformation\", \"calories\": \"" + calories + " calories\" }," : "") + "\n    " + (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') + "\n    " + (video ? buildVideo(video) : '') + "\n    \"recipeIngredient\": [\n      " + ingredients.map(function (ingredient) {
    return "\"" + ingredient + "\"";
  }).join(',') + "\n    ],\n    \"recipeInstructions\": [\n      " + instructions.map(buildInstruction).join(',') + "\n    ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-recipe"
  }));
};




/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.2.6 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n.transform {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.border-2, .border-b-2 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.shadow-lg, .shadow-2xl, .shadow-md, .sm\\:shadow-xl {\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n.container {\n\twidth: 100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n\tpadding-right: 1rem;\n\tpadding-left: 1rem;\n}\n@media (min-width: 640px) {\n\n\t.container {\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px) {\n\n\t.container {\n\t\tmax-width: 768px;\n\t\tpadding-right: 2rem;\n\t\tpadding-left: 2rem;\n\t}\n}\n@media (min-width: 1024px) {\n\n\t.container {\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px) {\n\n\t.container {\n\t\tmax-width: 1280px;\n\t}\n}\n.prose {\n\tcolor: #374151;\n\tmax-width: 65ch;\n}\n.prose [class~=\"lead\"] {\n\tcolor: #4b5563;\n\tfont-size: 1.25em;\n\tline-height: 1.6;\n\tmargin-top: 1.2em;\n\tmargin-bottom: 1.2em;\n}\n.prose a {\n\tcolor: #111827;\n\ttext-decoration: underline;\n\tfont-weight: 500;\n}\n.prose strong {\n\tcolor: #111827;\n\tfont-weight: 600;\n}\n.prose ol[type=\"A\"] {\n\t--list-counter-style: upper-alpha;\n}\n.prose ol[type=\"a\"] {\n\t--list-counter-style: lower-alpha;\n}\n.prose ol[type=\"A\" s] {\n\t--list-counter-style: upper-alpha;\n}\n.prose ol[type=\"a\" s] {\n\t--list-counter-style: lower-alpha;\n}\n.prose ol[type=\"I\"] {\n\t--list-counter-style: upper-roman;\n}\n.prose ol[type=\"i\"] {\n\t--list-counter-style: lower-roman;\n}\n.prose ol[type=\"I\" s] {\n\t--list-counter-style: upper-roman;\n}\n.prose ol[type=\"i\" s] {\n\t--list-counter-style: lower-roman;\n}\n.prose ol[type=\"1\"] {\n\t--list-counter-style: decimal;\n}\n.prose ol > li {\n\tposition: relative;\n\tpadding-left: 1.75em;\n}\n.prose ol > li::before {\n\tcontent: counter(list-item, decimal) \".\";\n\tcontent: counter(list-item, var(--list-counter-style, decimal)) \".\";\n\tposition: absolute;\n\tfont-weight: 400;\n\tcolor: #6b7280;\n\tleft: 0;\n}\n.prose ul > li {\n\tposition: relative;\n\tpadding-left: 1.75em;\n}\n.prose ul > li::before {\n\tcontent: \"\";\n\tposition: absolute;\n\tbackground-color: #d1d5db;\n\tborder-radius: 50%;\n\twidth: 0.375em;\n\theight: 0.375em;\n\ttop: calc(0.875em - 0.1875em);\n\tleft: 0.25em;\n}\n.prose hr {\n\tborder-color: #e5e7eb;\n\tborder-top-width: 1px;\n\tmargin-top: 3em;\n\tmargin-bottom: 3em;\n}\n.prose blockquote {\n\tfont-weight: 500;\n\tfont-style: italic;\n\tcolor: #111827;\n\tborder-left-width: 0.25rem;\n\tborder-left-color: #e5e7eb;\n\tquotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";\n\tmargin-top: 1.6em;\n\tmargin-bottom: 1.6em;\n\tpadding-left: 1em;\n}\n.prose blockquote p:first-of-type::before {\n\tcontent: open-quote;\n}\n.prose blockquote p:last-of-type::after {\n\tcontent: close-quote;\n}\n.prose h1 {\n\tcolor: #111827;\n\tfont-weight: 800;\n\tfont-size: 2.25em;\n\tmargin-top: 0;\n\tmargin-bottom: 0.8888889em;\n\tline-height: 1.1111111;\n}\n.prose h2 {\n\tcolor: #111827;\n\tfont-weight: 700;\n\tfont-size: 1.5em;\n\tmargin-top: 2em;\n\tmargin-bottom: 1em;\n\tline-height: 1.3333333;\n}\n.prose h3 {\n\tcolor: #111827;\n\tfont-weight: 600;\n\tfont-size: 1.25em;\n\tmargin-top: 1.6em;\n\tmargin-bottom: 0.6em;\n\tline-height: 1.6;\n}\n.prose h4 {\n\tcolor: #111827;\n\tfont-weight: 600;\n\tmargin-top: 1.5em;\n\tmargin-bottom: 0.5em;\n\tline-height: 1.5;\n}\n.prose figure figcaption {\n\tcolor: #6b7280;\n\tfont-size: 0.875em;\n\tline-height: 1.4285714;\n\tmargin-top: 0.8571429em;\n}\n.prose code {\n\tcolor: #111827;\n\tfont-weight: 600;\n\tfont-size: 0.875em;\n}\n.prose code::before {\n\tcontent: \"`\";\n}\n.prose code::after {\n\tcontent: \"`\";\n}\n.prose a code {\n\tcolor: #111827;\n}\n.prose pre {\n\tcolor: #e5e7eb;\n\tbackground-color: #1f2937;\n\toverflow-x: auto;\n\tfont-size: 0.875em;\n\tline-height: 1.7142857;\n\tmargin-top: 1.7142857em;\n\tmargin-bottom: 1.7142857em;\n\tborder-radius: 0.375rem;\n\tpadding-top: 0.8571429em;\n\tpadding-right: 1.1428571em;\n\tpadding-bottom: 0.8571429em;\n\tpadding-left: 1.1428571em;\n}\n.prose pre code {\n\tbackground-color: transparent;\n\tborder-width: 0;\n\tborder-radius: 0;\n\tpadding: 0;\n\tfont-weight: 400;\n\tcolor: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n}\n.prose pre code::before {\n\tcontent: none;\n}\n.prose pre code::after {\n\tcontent: none;\n}\n.prose table {\n\twidth: 100%;\n\ttable-layout: auto;\n\ttext-align: left;\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n\tfont-size: 0.875em;\n\tline-height: 1.7142857;\n}\n.prose thead {\n\tcolor: #111827;\n\tfont-weight: 600;\n\tborder-bottom-width: 1px;\n\tborder-bottom-color: #d1d5db;\n}\n.prose thead th {\n\tvertical-align: bottom;\n\tpadding-right: 0.5714286em;\n\tpadding-bottom: 0.5714286em;\n\tpadding-left: 0.5714286em;\n}\n.prose tbody tr {\n\tborder-bottom-width: 1px;\n\tborder-bottom-color: #e5e7eb;\n}\n.prose tbody tr:last-child {\n\tborder-bottom-width: 0;\n}\n.prose tbody td {\n\tvertical-align: top;\n\tpadding-top: 0.5714286em;\n\tpadding-right: 0.5714286em;\n\tpadding-bottom: 0.5714286em;\n\tpadding-left: 0.5714286em;\n}\n.prose {\n\tfont-size: 1rem;\n\tline-height: 1.75;\n}\n.prose p {\n\tmargin-top: 1.25em;\n\tmargin-bottom: 1.25em;\n}\n.prose img {\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n}\n.prose video {\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n}\n.prose figure {\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n}\n.prose figure > * {\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n.prose h2 code {\n\tfont-size: 0.875em;\n}\n.prose h3 code {\n\tfont-size: 0.9em;\n}\n.prose ol {\n\tmargin-top: 1.25em;\n\tmargin-bottom: 1.25em;\n}\n.prose ul {\n\tmargin-top: 1.25em;\n\tmargin-bottom: 1.25em;\n}\n.prose li {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n.prose > ul > li p {\n\tmargin-top: 0.75em;\n\tmargin-bottom: 0.75em;\n}\n.prose > ul > li > *:first-child {\n\tmargin-top: 1.25em;\n}\n.prose > ul > li > *:last-child {\n\tmargin-bottom: 1.25em;\n}\n.prose > ol > li > *:first-child {\n\tmargin-top: 1.25em;\n}\n.prose > ol > li > *:last-child {\n\tmargin-bottom: 1.25em;\n}\n.prose ul ul, .prose ul ol, .prose ol ul, .prose ol ol {\n\tmargin-top: 0.75em;\n\tmargin-bottom: 0.75em;\n}\n.prose hr + * {\n\tmargin-top: 0;\n}\n.prose h2 + * {\n\tmargin-top: 0;\n}\n.prose h3 + * {\n\tmargin-top: 0;\n}\n.prose h4 + * {\n\tmargin-top: 0;\n}\n.prose thead th:first-child {\n\tpadding-left: 0;\n}\n.prose thead th:last-child {\n\tpadding-right: 0;\n}\n.prose tbody td:first-child {\n\tpadding-left: 0;\n}\n.prose tbody td:last-child {\n\tpadding-right: 0;\n}\n.prose > :first-child {\n\tmargin-top: 0;\n}\n.prose > :last-child {\n\tmargin-bottom: 0;\n}\n.prose-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.7777778;\n}\n.prose-lg p {\n\tmargin-top: 1.3333333em;\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg [class~=\"lead\"] {\n\tfont-size: 1.2222222em;\n\tline-height: 1.4545455;\n\tmargin-top: 1.0909091em;\n\tmargin-bottom: 1.0909091em;\n}\n.prose-lg blockquote {\n\tmargin-top: 1.6666667em;\n\tmargin-bottom: 1.6666667em;\n\tpadding-left: 1em;\n}\n.prose-lg h1 {\n\tfont-size: 2.6666667em;\n\tmargin-top: 0;\n\tmargin-bottom: 0.8333333em;\n\tline-height: 1;\n}\n.prose-lg h2 {\n\tfont-size: 1.6666667em;\n\tmargin-top: 1.8666667em;\n\tmargin-bottom: 1.0666667em;\n\tline-height: 1.3333333;\n}\n.prose-lg h3 {\n\tfont-size: 1.3333333em;\n\tmargin-top: 1.6666667em;\n\tmargin-bottom: 0.6666667em;\n\tline-height: 1.5;\n}\n.prose-lg h4 {\n\tmargin-top: 1.7777778em;\n\tmargin-bottom: 0.4444444em;\n\tline-height: 1.5555556;\n}\n.prose-lg img {\n\tmargin-top: 1.7777778em;\n\tmargin-bottom: 1.7777778em;\n}\n.prose-lg video {\n\tmargin-top: 1.7777778em;\n\tmargin-bottom: 1.7777778em;\n}\n.prose-lg figure {\n\tmargin-top: 1.7777778em;\n\tmargin-bottom: 1.7777778em;\n}\n.prose-lg figure > * {\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n.prose-lg figure figcaption {\n\tfont-size: 0.8888889em;\n\tline-height: 1.5;\n\tmargin-top: 1em;\n}\n.prose-lg code {\n\tfont-size: 0.8888889em;\n}\n.prose-lg h2 code {\n\tfont-size: 0.8666667em;\n}\n.prose-lg h3 code {\n\tfont-size: 0.875em;\n}\n.prose-lg pre {\n\tfont-size: 0.8888889em;\n\tline-height: 1.75;\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n\tborder-radius: 0.375rem;\n\tpadding-top: 1em;\n\tpadding-right: 1.5em;\n\tpadding-bottom: 1em;\n\tpadding-left: 1.5em;\n}\n.prose-lg ol {\n\tmargin-top: 1.3333333em;\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg ul {\n\tmargin-top: 1.3333333em;\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg li {\n\tmargin-top: 0.6666667em;\n\tmargin-bottom: 0.6666667em;\n}\n.prose-lg ol > li {\n\tpadding-left: 1.6666667em;\n}\n.prose-lg ol > li::before {\n\tleft: 0;\n}\n.prose-lg ul > li {\n\tpadding-left: 1.6666667em;\n}\n.prose-lg ul > li::before {\n\twidth: 0.3333333em;\n\theight: 0.3333333em;\n\ttop: calc(0.8888889em - 0.1666667em);\n\tleft: 0.2222222em;\n}\n.prose-lg > ul > li p {\n\tmargin-top: 0.8888889em;\n\tmargin-bottom: 0.8888889em;\n}\n.prose-lg > ul > li > *:first-child {\n\tmargin-top: 1.3333333em;\n}\n.prose-lg > ul > li > *:last-child {\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg > ol > li > *:first-child {\n\tmargin-top: 1.3333333em;\n}\n.prose-lg > ol > li > *:last-child {\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg ul ul, .prose-lg ul ol, .prose-lg ol ul, .prose-lg ol ol {\n\tmargin-top: 0.8888889em;\n\tmargin-bottom: 0.8888889em;\n}\n.prose-lg hr {\n\tmargin-top: 3.1111111em;\n\tmargin-bottom: 3.1111111em;\n}\n.prose-lg hr + * {\n\tmargin-top: 0;\n}\n.prose-lg h2 + * {\n\tmargin-top: 0;\n}\n.prose-lg h3 + * {\n\tmargin-top: 0;\n}\n.prose-lg h4 + * {\n\tmargin-top: 0;\n}\n.prose-lg table {\n\tfont-size: 0.8888889em;\n\tline-height: 1.5;\n}\n.prose-lg thead th {\n\tpadding-right: 0.75em;\n\tpadding-bottom: 0.75em;\n\tpadding-left: 0.75em;\n}\n.prose-lg thead th:first-child {\n\tpadding-left: 0;\n}\n.prose-lg thead th:last-child {\n\tpadding-right: 0;\n}\n.prose-lg tbody td {\n\tpadding-top: 0.75em;\n\tpadding-right: 0.75em;\n\tpadding-bottom: 0.75em;\n\tpadding-left: 0.75em;\n}\n.prose-lg tbody td:first-child {\n\tpadding-left: 0;\n}\n.prose-lg tbody td:last-child {\n\tpadding-right: 0;\n}\n.prose-lg > :first-child {\n\tmargin-top: 0;\n}\n.prose-lg > :last-child {\n\tmargin-bottom: 0;\n}\n.static {\n\tposition: static;\n}\n.fixed {\n\tposition: fixed;\n}\n.absolute {\n\tposition: absolute;\n}\n.relative {\n\tposition: relative;\n}\n.top-0 {\n\ttop: 0px;\n}\n.left-0 {\n\tleft: 0px;\n}\n.z-10 {\n\tz-index: 10;\n}\n.-mx-1 {\n\tmargin-left: -0.25rem;\n\tmargin-right: -0.25rem;\n}\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.my-6 {\n\tmargin-top: 1.5rem;\n\tmargin-bottom: 1.5rem;\n}\n.ml-4 {\n\tmargin-left: 1rem;\n}\n.ml-1 {\n\tmargin-left: 0.25rem;\n}\n.mt-1 {\n\tmargin-top: 0.25rem;\n}\n.mb-10 {\n\tmargin-bottom: 2.5rem;\n}\n.mt-10 {\n\tmargin-top: 2.5rem;\n}\n.mt-2 {\n\tmargin-top: 0.5rem;\n}\n.mr-2 {\n\tmargin-right: 0.5rem;\n}\n.ml-10 {\n\tmargin-left: 2.5rem;\n}\n.mt-4 {\n\tmargin-top: 1rem;\n}\n.mb-4 {\n\tmargin-bottom: 1rem;\n}\n.mb-6 {\n\tmargin-bottom: 1.5rem;\n}\n.mt-6 {\n\tmargin-top: 1.5rem;\n}\n.mb-2 {\n\tmargin-bottom: 0.5rem;\n}\n.ml-2 {\n\tmargin-left: 0.5rem;\n}\n.block {\n\tdisplay: block;\n}\n.flex {\n\tdisplay: flex;\n}\n.hidden {\n\tdisplay: none;\n}\n.h-full {\n\theight: 100%;\n}\n.h-5 {\n\theight: 1.25rem;\n}\n.h-screen {\n\theight: 100vh;\n}\n.h-8 {\n\theight: 2rem;\n}\n.h-6 {\n\theight: 1.5rem;\n}\n.h-4 {\n\theight: 1rem;\n}\n.h-10 {\n\theight: 2.5rem;\n}\n.h-auto {\n\theight: auto;\n}\n.h-12 {\n\theight: 3rem;\n}\n.h-3 {\n\theight: 0.75rem;\n}\n.max-h-full {\n\tmax-height: 100%;\n}\n.min-h-screen {\n\tmin-height: 100vh;\n}\n.w-20 {\n\twidth: 5rem;\n}\n.w-full {\n\twidth: 100%;\n}\n.w-6\\/12 {\n\twidth: 50%;\n}\n.w-5 {\n\twidth: 1.25rem;\n}\n.w-screen {\n\twidth: 100vw;\n}\n.w-auto {\n\twidth: auto;\n}\n.w-9\\/12 {\n\twidth: 75%;\n}\n.w-32 {\n\twidth: 8rem;\n}\n.w-4 {\n\twidth: 1rem;\n}\n.w-10 {\n\twidth: 2.5rem;\n}\n.w-8\\/12 {\n\twidth: 66.666667%;\n}\n.w-3 {\n\twidth: 0.75rem;\n}\n.max-w-5xl {\n\tmax-width: 64rem;\n}\n.flex-1 {\n\tflex: 1 1;\n}\n.flex-shrink-0 {\n\tflex-shrink: 0;\n}\n.transform {\n\ttransform: var(--tw-transform);\n}\n@-webkit-keyframes spin {\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n@keyframes spin {\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n.animate-spin {\n\t-webkit-animation: spin 1s linear infinite;\n\t        animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n\tcursor: pointer;\n}\n.list-none {\n\tlist-style-type: none;\n}\n.flex-row {\n\tflex-direction: row;\n}\n.flex-col {\n\tflex-direction: column;\n}\n.flex-wrap {\n\tflex-wrap: wrap;\n}\n.items-start {\n\talign-items: flex-start;\n}\n.items-center {\n\talign-items: center;\n}\n.items-baseline {\n\talign-items: baseline;\n}\n.justify-start {\n\tjustify-content: flex-start;\n}\n.justify-end {\n\tjustify-content: flex-end;\n}\n.justify-center {\n\tjustify-content: center;\n}\n.justify-between {\n\tjustify-content: space-between;\n}\n.gap-6 {\n\tgap: 1.5rem;\n}\n.gap-4 {\n\tgap: 1rem;\n}\n.gap-12 {\n\tgap: 3rem;\n}\n.gap-10 {\n\tgap: 2.5rem;\n}\n.gap-3 {\n\tgap: 0.75rem;\n}\n.overflow-hidden {\n\toverflow: hidden;\n}\n.overflow-y-scroll {\n\toverflow-y: scroll;\n}\n.rounded-md {\n\tborder-radius: 0.375rem;\n}\n.rounded-full {\n\tborder-radius: 9999px;\n}\n.border-2 {\n\tborder-width: 2px;\n}\n.border-b-2 {\n\tborder-bottom-width: 2px;\n}\n.border-primary-600 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(79, 70, 229, var(--tw-border-opacity));\n}\n.border-white {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(255, 255, 255, var(--tw-border-opacity));\n}\n.border-gray-200 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n.border-gray-300 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(209, 213, 219, var(--tw-border-opacity));\n}\n.border-primary-300 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(165, 180, 252, var(--tw-border-opacity));\n}\n.bg-white {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-red-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n.bg-primary-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n.bg-blue-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(37, 99, 235, var(--tw-bg-opacity));\n}\n.bg-primary-800 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(55, 48, 163, var(--tw-bg-opacity));\n}\n.bg-primary-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(224, 231, 255, var(--tw-bg-opacity));\n}\n.bg-gray-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(107, 114, 128, var(--tw-bg-opacity));\n}\n.fill-current {\n\tfill: currentColor;\n}\n.stroke-current {\n\tstroke: currentColor;\n}\n.p-1 {\n\tpadding: 0.25rem;\n}\n.p-2 {\n\tpadding: 0.5rem;\n}\n.px-2 {\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\n.py-4 {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.px-8 {\n\tpadding-left: 2rem;\n\tpadding-right: 2rem;\n}\n.px-6 {\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n}\n.py-1 {\n\tpadding-top: 0.25rem;\n\tpadding-bottom: 0.25rem;\n}\n.px-1 {\n\tpadding-left: 0.25rem;\n\tpadding-right: 0.25rem;\n}\n.py-6 {\n\tpadding-top: 1.5rem;\n\tpadding-bottom: 1.5rem;\n}\n.py-20 {\n\tpadding-top: 5rem;\n\tpadding-bottom: 5rem;\n}\n.py-12 {\n\tpadding-top: 3rem;\n\tpadding-bottom: 3rem;\n}\n.py-10 {\n\tpadding-top: 2.5rem;\n\tpadding-bottom: 2.5rem;\n}\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n.pt-12 {\n\tpadding-top: 3rem;\n}\n.pb-6 {\n\tpadding-bottom: 1.5rem;\n}\n.pb-16 {\n\tpadding-bottom: 4rem;\n}\n.text-left {\n\ttext-align: left;\n}\n.text-center {\n\ttext-align: center;\n}\n.align-top {\n\tvertical-align: top;\n}\n.align-middle {\n\tvertical-align: middle;\n}\n.text-base {\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n}\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n.text-xl {\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\n.text-3xl {\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n}\n.text-4xl {\n\tfont-size: 2.25rem;\n\tline-height: 2.5rem;\n}\n.text-2xl {\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n.font-semibold {\n\tfont-weight: 600;\n}\n.font-bold {\n\tfont-weight: 700;\n}\n.font-medium {\n\tfont-weight: 500;\n}\n.uppercase {\n\ttext-transform: uppercase;\n}\n.capitalize {\n\ttext-transform: capitalize;\n}\n.italic {\n\tfont-style: italic;\n}\n.tracking-wide {\n\tletter-spacing: 0.025em;\n}\n.text-primary-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(79, 70, 229, 1);\n\tcolor: rgba(79, 70, 229, var(--tw-text-opacity));\n}\n.text-red-100 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(254, 226, 226, 1);\n\tcolor: rgba(254, 226, 226, var(--tw-text-opacity));\n}\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, 1);\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-gray-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, 1);\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-blue-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(37, 99, 235, 1);\n\tcolor: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n.text-red-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(239, 68, 68, 1);\n\tcolor: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n.text-gray-900 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, 1);\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.text-primary-900 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(49, 46, 129, 1);\n\tcolor: rgba(49, 46, 129, var(--tw-text-opacity));\n}\n.text-primary-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(67, 56, 202, 1);\n\tcolor: rgba(67, 56, 202, var(--tw-text-opacity));\n}\n.text-blue-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(29, 78, 216, 1);\n\tcolor: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n.underline {\n\ttext-decoration: underline;\n}\n.shadow-lg {\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-2xl {\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\tbox-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\nhtml {\n  font-size: 13px;\n  --tw-text-opacity: 1;\n  color: rgba(17, 24, 39, 1);\n  color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n@media screen and (min-width: 640px) {\n  html {\n    font-size: 14px;\n  }\n}\n@media screen and (min-width: 768px) {\n  html {\n    font-size: 15px;\n  }\n}\n.rich-text-hero a {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(37, 99, 235, 1);\n\tcolor: rgba(37, 99, 235, var(--tw-text-opacity));\n\ttext-decoration: underline;\n}\n.rich-text-banner {\n\twhite-space: pre-line;\n  a {\n\t\ttext-decoration: underline;\n\t}\n}\n.title {\n\tfont-size: 2.25rem;\n\tline-height: 2.5rem;\n\tfont-weight: 600;\n\tline-height: 1.375;\n}\n@media (min-width: 768px) {\n  .title {\n\t\tfont-size: 3rem;\n\t\tline-height: 1;\n\t}\n}\n.with-arrow:after {\n  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%206a.5.5%200%200%200%200%201V6zM12.854.646a.5.5%200%200%200-.708.708l.708-.708zM18%206.5l.354.354a.5.5%200%200%200%200-.708L18%206.5zm-5.854%205.146a.5.5%200%200%200%20.708.708l-.708-.708zM1%207h16.5V6H1v1zm16.646-.854l-5.5%205.5.708.708%205.5-5.5-.708-.708zm-5.5-4.792l2.75%202.75.708-.708-2.75-2.75-.708.708zm2.75%202.75l2.75%202.75.708-.708-2.75-2.75-.708.708z%22%20fill%3D%22%231264A3%22%2F%3E%3C%2Fsvg%3E);\n  content: \"\";\n  width: 19px;\n  height: 13px;\n  display: inline-block;\n  margin-left: 0.5em;\n}\n.hover\\:bg-primary-50:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(238, 242, 255, var(--tw-bg-opacity));\n}\n.hover\\:text-primary-600:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(79, 70, 229, 1);\n\tcolor: rgba(79, 70, 229, var(--tw-text-opacity));\n}\n.hover\\:text-gray-900:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, 1);\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.hover\\:underline:hover {\n\ttext-decoration: underline;\n}\n.focus\\:bg-primary-50:focus {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(238, 242, 255, var(--tw-bg-opacity));\n}\n.focus\\:text-primary-600:focus {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(79, 70, 229, 1);\n\tcolor: rgba(79, 70, 229, var(--tw-text-opacity));\n}\n.focus\\:outline-none:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n@media (min-width: 640px) {\n\n\t.sm\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\n\n\t.sm\\:mb-2 {\n\t\tmargin-bottom: 0.5rem;\n\t}\n\n\t.sm\\:mt-3 {\n\t\tmargin-top: 0.75rem;\n\t}\n\n\t.sm\\:w-8\\/12 {\n\t\twidth: 66.666667%;\n\t}\n\n\t.sm\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.sm\\:gap-20 {\n\t\tgap: 5rem;\n\t}\n\n\t.sm\\:self-end {\n\t\talign-self: flex-end;\n\t}\n\n\t.sm\\:py-2 {\n\t\tpadding-top: 0.5rem;\n\t\tpadding-bottom: 0.5rem;\n\t}\n\n\t.sm\\:px-12 {\n\t\tpadding-left: 3rem;\n\t\tpadding-right: 3rem;\n\t}\n\n\t.sm\\:px-0 {\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t}\n\n\t.sm\\:pr-8 {\n\t\tpadding-right: 2rem;\n\t}\n\n\t.sm\\:pt-12 {\n\t\tpadding-top: 3rem;\n\t}\n\n\t.sm\\:pb-4 {\n\t\tpadding-bottom: 1rem;\n\t}\n\n\t.sm\\:text-sm {\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t}\n\n\t.sm\\:shadow-xl {\n\t\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n\t\tbox-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n\t\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n\t}\n}\n@media (min-width: 768px) {\n\n\t.md\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\n\n\t.md\\:block {\n\t\tdisplay: block;\n\t}\n\n\t.md\\:flex {\n\t\tdisplay: flex;\n\t}\n\n\t.md\\:hidden {\n\t\tdisplay: none;\n\t}\n\n\t.md\\:w-6\\/12 {\n\t\twidth: 50%;\n\t}\n\n\t.md\\:w-4\\/12 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.md\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.md\\:items-center {\n\t\talign-items: center;\n\t}\n\n\t.md\\:justify-between {\n\t\tjustify-content: space-between;\n\t}\n\n\t.md\\:py-0 {\n\t\tpadding-top: 0px;\n\t\tpadding-bottom: 0px;\n\t}\n\n\t.md\\:text-sm {\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t}\n}\n@media (min-width: 1024px) {\n\n\t.lg\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\n\n\t.lg\\:w-auto {\n\t\twidth: auto;\n\t}\n\n\t.lg\\:w-6\\/12 {\n\t\twidth: 50%;\n\t}\n\n\t.lg\\:w-4\\/12 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.lg\\:w-9\\/12 {\n\t\twidth: 75%;\n\t}\n\n\t.lg\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.lg\\:flex-row-reverse {\n\t\tflex-direction: row-reverse;\n\t}\n\n\t.lg\\:flex-wrap {\n\t\tflex-wrap: wrap;\n\t}\n\n\t.lg\\:justify-end {\n\t\tjustify-content: flex-end;\n\t}\n\n\t.lg\\:justify-center {\n\t\tjustify-content: center;\n\t}\n\n\t.lg\\:justify-between {\n\t\tjustify-content: space-between;\n\t}\n\n\t.lg\\:gap-20 {\n\t\tgap: 5rem;\n\t}\n\n\t.lg\\:pr-6 {\n\t\tpadding-right: 1.5rem;\n\t}\n}\n", "",{"version":3,"sources":["webpack://styles/index.css","webpack://styles/%3Cinput%20css%20JGUTQS%3E","webpack://styles/%3Cinput%20css%20KUu5eS%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\nhtml {\n  font-size: 13px;\n  @apply text-gray-900;\n}\n\n@media screen and (min-width: 640px) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  html {\n    font-size: 15px;\n  }\n}\n\n.rich-text-hero a {\n  @apply text-blue-600 underline;\n}\n\n.rich-text-banner {\n  @apply whitespace-pre-line;\n  a {\n    @apply underline;\n  }\n}\n\n.title {\n  @apply text-4xl leading-snug font-semibold;\n}\n\n@media (min-width: 768px) {\n  .title {\n    @apply text-5xl;\n  }\n}\n\n.with-arrow:after {\n  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%206a.5.5%200%200%200%200%201V6zM12.854.646a.5.5%200%200%200-.708.708l.708-.708zM18%206.5l.354.354a.5.5%200%200%200%200-.708L18%206.5zm-5.854%205.146a.5.5%200%200%200%20.708.708l-.708-.708zM1%207h16.5V6H1v1zm16.646-.854l-5.5%205.5.708.708%205.5-5.5-.708-.708zm-5.5-4.792l2.75%202.75.708-.708-2.75-2.75-.708.708zm2.75%202.75l2.75%202.75.708-.708-2.75-2.75-.708.708z%22%20fill%3D%22%231264A3%22%2F%3E%3C%2Fsvg%3E);\n  content: \"\";\n  width: 19px;\n  height: 13px;\n  display: inline-block;\n  margin-left: 0.5em;\n}\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

var inspectCustom = __webpack_require__(/*! ./util.inspect */ "?4f7e").custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol' ? Symbol.toStringTag : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = symToString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + [].concat(stringTag || [], protoTag || []).join(': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        var syms = gOPS(obj);
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ "./node_modules/side-channel/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + (commaRoundTrip && isArray(obj) && valuesArray.length === 1 ? '[]' : '') + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/side-channel/index.js":
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2FtcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jYWxsLWJpbmQvY2FsbEJvdW5kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2FsbC1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaW50cmluc2ljL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9oYXMtc3ltYm9scy9zaGFtcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0LXNlby9saWIvbmV4dC1zZW8ubW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9pbmRleC5jc3M/ZDUyMiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Vycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pbnNwZWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NpZGUtY2hhbm5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FL2lnbm9yZWR8QzpcXFVzZXJzXFxUaW1cXERvY3VtZW50c1xcRGVzaWduc1xcV2ViIERldmVsb3BtZW50XFxpbGFuZC1kZXNpZ24tc2l0ZVxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcb2JqZWN0LWluc3BlY3R8Li91dGlsLmluc3BlY3QiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwiX19lc01vZHVsZSIsIkFtcFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsImlzSW5BbXBNb2RlIiwidXNlQW1wIiwiX2FtcENvbnRleHQiLCJhbXBGaXJzdCIsImh5YnJpZCIsImhhc1F1ZXJ5IiwidXNlQ29udGV4dCIsImRlZmF1bHRIZWFkIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfc2lkZUVmZmVjdCIsIl9oZWFkTWFuYWdlckNvbnRleHQiLCJfYW1wIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiaW5BbXBNb2RlIiwiaGVhZCIsImNyZWF0ZUVsZW1lbnQiLCJjaGFyU2V0IiwicHVzaCIsIm5hbWUiLCJjb250ZW50Iiwib25seVJlYWN0RWxlbWVudCIsImxpc3QiLCJjaGlsZCIsInR5cGUiLCJGcmFnbWVudCIsImNvbmNhdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInByb3BzIiwiY2hpbGRyZW4iLCJyZWR1Y2UiLCJmcmFnbWVudExpc3QiLCJmcmFnbWVudENoaWxkIiwiTUVUQVRZUEVTIiwidW5pcXVlIiwia2V5cyIsIlNldCIsInRhZ3MiLCJtZXRhVHlwZXMiLCJtZXRhQ2F0ZWdvcmllcyIsImgiLCJpc1VuaXF1ZSIsImhhc0tleSIsImluZGV4T2YiLCJzbGljZSIsImFkZCIsImkiLCJsZW4iLCJsZW5ndGgiLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsInJlZHVjZUNvbXBvbmVudHMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudCIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJyZXZlcnNlIiwiZmlsdGVyIiwibWFwIiwiYyIsImNsb25lRWxlbWVudCIsIkhlYWQiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwicmVkdWNlQ29tcG9uZW50c1RvU3RhdGUiLCJfZGVmYXVsdCIsImlzU2VydmVyIiwiX2hhc0hlYWRNYW5hZ2VyIiwiZW1pdENoYW5nZSIsInVwZGF0ZUhlYWQiLCJtb3VudGVkSW5zdGFuY2VzIiwiQ29tcG9uZW50IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImFwcEdldEluaXRpYWxQcm9wcyIsImN0eCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwYWdlUHJvcHMiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiX2hlYWQiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiRXJyb3IiLCJ0aXRsZSIsInN0eWxlIiwic3R5bGVzIiwiZXJyb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImgxIiwiaDIiLCJocmVmIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJSaWdodCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIk15QXBwIiwiZ2xvYmFsIiwiYXR0cmlidXRlcyIsIm1ldGFkYXRhIiwiZmF2aWNvbiIsIm1ldGFUaXRsZVN1ZmZpeCIsImdldFN0cmFwaU1lZGlhIiwiZGF0YSIsInVybCIsIm1ldGFEZXNjcmlwdGlvbiIsImltYWdlcyIsInZhbHVlcyIsInNoYXJlSW1hZ2UiLCJmb3JtYXRzIiwiaW1hZ2UiLCJ3aWR0aCIsImNhcmRUeXBlIiwidHdpdHRlckNhcmRUeXBlIiwiaGFuZGxlIiwidHdpdHRlclVzZXJuYW1lIiwiYXBwQ29udGV4dCIsImFwcFByb3BzIiwiZ2V0R2xvYmFsRGF0YSIsInJvdXRlciIsImxvY2FsZSIsImdsb2JhbExvY2FsZSIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInVybFBhcmFtc09iamVjdCIsIm9wdGlvbnMiLCJtZXJnZWRPcHRpb25zIiwiaGVhZGVycyIsInF1ZXJ5U3RyaW5nIiwicXMiLCJyZXF1ZXN0VXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsInN0YXR1c1RleHQiLCJqc29uIiwiZ2V0UGFnZURhdGEiLCJzbHVnIiwicHJldmlldyIsImdxbEVuZHBvaW50IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsInB1YmxpY2F0aW9uU3RhdGUiLCJwYWdlc1JlcyIsInBhZ2VzRGF0YSIsInBhZ2VzIiwiZ2xvYmFsUmVzIiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUFBQSxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsdUJBQUEsR0FBd0IsS0FBSyxDQUE3Qjs7QUFBK0IsSUFBSUMsTUFBTSxHQUFDQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQWpDOztBQUFvRCxTQUFTRCxzQkFBVCxDQUFnQ0UsR0FBaEMsRUFBb0M7QUFBQyxTQUFPQSxHQUFHLElBQUVBLEdBQUcsQ0FBQ0MsVUFBVCxHQUFvQkQsR0FBcEIsR0FBd0I7QUFBQyxlQUFRQTtBQUFULEdBQS9CO0FBQThDOztBQUFBLElBQU1FLGVBQWUsR0FBQyxhQUFhTCxNQUFNLFdBQU4sQ0FBZU0sYUFBZixDQUE2QixFQUE3QixDQUFuQzs7QUFBb0VQLHVCQUFBLEdBQXdCTSxlQUF4Qjs7QUFBd0MsVUFBdUM7QUFBQ0EsaUJBQWUsQ0FBQ0UsV0FBaEIsR0FBNEIsaUJBQTVCO0FBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqWTs7OztBQUFBUixrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsbUJBQUEsR0FBb0JTLFdBQXBCO0FBQWdDVCxjQUFBLEdBQWVVLE1BQWY7O0FBQXNCLElBQUlULE1BQU0sR0FBQ0Msc0JBQXNCLENBQUND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QU8sT0FBTyxNQUFNLE1BQU0sTUFBTSxLQUFLLGFBQWEsYUFBYSxRQUFRLE1BQU0sTUFBTSxNQUFNLGFBQWEsT0FBTyxPQUFPLE1BQU0sUUFBUSxXQUFXLGVBQWUscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxPQUFPLE1BQU0sU0FBUyx1QkFBdUIscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxPQUFPLE1BQU0sS0FBSyx1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sTUFBTSxNQUFNLEtBQUssYUFBYSxjQUFjLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixXQUFXLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLE1BQU0sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sU0FBUyxNQUFNLEtBQUssdUJBQXVCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsYUFBYSxPQUFPLDRCQUE0QixNQUFNLE9BQU8sdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFdBQVcsV0FBVyxRQUFRLEtBQUssV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsT0FBTyxLQUFLLGFBQWEsT0FBTyxVQUFVLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLFVBQVUsTUFBTSxTQUFTLFdBQVcsWUFBWSxXQUFXLE9BQU8sU0FBUyxNQUFNLFFBQVEsYUFBYSxRQUFRLG1CQUFtQixNQUFNLFlBQVkscUJBQXFCLHVCQUF1QixRQUFRLFNBQVMsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLFFBQVEsT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sS0FBSyxXQUFXLE9BQU8sUUFBUSxPQUFPLEtBQUssV0FBVyxPQUFPLFFBQVEsTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLGNBQWMsWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sUUFBUSxLQUFLLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlFQUFpRTtBQUNyRixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsMkRBQTJELFNBQVM7QUFDcEUseUJBQXlCLFNBQVM7QUFDbEM7QUFDQSxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkNBQTJDOztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xyQ2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSx1SkFBc0U7QUFDeEU7Ozs7Ozs7Ozs7OztBQ05hOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLDREQUFlO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLGtFQUFxQjtBQUM3QyxjQUFjLG1CQUFPLENBQUMsOERBQWdCOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzSEEsZSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkFtcFN0YXRlQ29udGV4dD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBBbXBTdGF0ZUNvbnRleHQ9LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO2V4cG9ydHMuQW1wU3RhdGVDb250ZXh0PUFtcFN0YXRlQ29udGV4dDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7QW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lPSdBbXBTdGF0ZUNvbnRleHQnO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNJbkFtcE1vZGU9aXNJbkFtcE1vZGU7ZXhwb3J0cy51c2VBbXA9dXNlQW1wO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfYW1wQ29udGV4dD1yZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIGlzSW5BbXBNb2RlKHthbXBGaXJzdD1mYWxzZSxoeWJyaWQ9ZmFsc2UsaGFzUXVlcnk9ZmFsc2V9PXt9KXtyZXR1cm4gYW1wRmlyc3R8fGh5YnJpZCYmaGFzUXVlcnk7fWZ1bmN0aW9uIHVzZUFtcCgpey8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbnJldHVybiBpc0luQW1wTW9kZShfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCkpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHRIZWFkPWRlZmF1bHRIZWFkO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfc2lkZUVmZmVjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpZGUtZWZmZWN0XCIpKTt2YXIgX2FtcENvbnRleHQ9cmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7dmFyIF9oZWFkTWFuYWdlckNvbnRleHQ9cmVxdWlyZShcIi4vaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7dmFyIF9hbXA9cmVxdWlyZShcIi4vYW1wXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGU9ZmFsc2Upe2NvbnN0IGhlYWQ9Wy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtjaGFyU2V0OlwidXRmLThcIn0pXTtpZighaW5BbXBNb2RlKXtoZWFkLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJ2aWV3cG9ydFwiLGNvbnRlbnQ6XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIn0pKTt9cmV0dXJuIGhlYWQ7fWZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQobGlzdCxjaGlsZCl7Ly8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbmlmKHR5cGVvZiBjaGlsZD09PSdzdHJpbmcnfHx0eXBlb2YgY2hpbGQ9PT0nbnVtYmVyJyl7cmV0dXJuIGxpc3Q7fS8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbmlmKGNoaWxkLnR5cGU9PT1fcmVhY3QuZGVmYXVsdC5GcmFnbWVudCl7cmV0dXJuIGxpc3QuY29uY2F0KF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZSgoZnJhZ21lbnRMaXN0LGZyYWdtZW50Q2hpbGQpPT57aWYodHlwZW9mIGZyYWdtZW50Q2hpbGQ9PT0nc3RyaW5nJ3x8dHlwZW9mIGZyYWdtZW50Q2hpbGQ9PT0nbnVtYmVyJyl7cmV0dXJuIGZyYWdtZW50TGlzdDt9cmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7fSxbXSkpO31yZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpO31jb25zdCBNRVRBVFlQRVM9WyduYW1lJywnaHR0cEVxdWl2JywnY2hhclNldCcsJ2l0ZW1Qcm9wJ107LypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovZnVuY3Rpb24gdW5pcXVlKCl7Y29uc3Qga2V5cz1uZXcgU2V0KCk7Y29uc3QgdGFncz1uZXcgU2V0KCk7Y29uc3QgbWV0YVR5cGVzPW5ldyBTZXQoKTtjb25zdCBtZXRhQ2F0ZWdvcmllcz17fTtyZXR1cm4gaD0+e2xldCBpc1VuaXF1ZT10cnVlO2xldCBoYXNLZXk9ZmFsc2U7aWYoaC5rZXkmJnR5cGVvZiBoLmtleSE9PSdudW1iZXInJiZoLmtleS5pbmRleE9mKCckJyk+MCl7aGFzS2V5PXRydWU7Y29uc3Qga2V5PWgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSsxKTtpZihrZXlzLmhhcyhrZXkpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXtrZXlzLmFkZChrZXkpO319Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuc3dpdGNoKGgudHlwZSl7Y2FzZSd0aXRsZSc6Y2FzZSdiYXNlJzppZih0YWdzLmhhcyhoLnR5cGUpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXt0YWdzLmFkZChoLnR5cGUpO31icmVhaztjYXNlJ21ldGEnOmZvcihsZXQgaT0wLGxlbj1NRVRBVFlQRVMubGVuZ3RoO2k8bGVuO2krKyl7Y29uc3QgbWV0YXR5cGU9TUVUQVRZUEVTW2ldO2lmKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSljb250aW51ZTtpZihtZXRhdHlwZT09PSdjaGFyU2V0Jyl7aWYobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle21ldGFUeXBlcy5hZGQobWV0YXR5cGUpO319ZWxzZXtjb25zdCBjYXRlZ29yeT1oLnByb3BzW21ldGF0eXBlXTtjb25zdCBjYXRlZ29yaWVzPW1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXXx8bmV3IFNldCgpO2lmKChtZXRhdHlwZSE9PSduYW1lJ3x8IWhhc0tleSkmJmNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7Y2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpO21ldGFDYXRlZ29yaWVzW21ldGF0eXBlXT1jYXRlZ29yaWVzO319fWJyZWFrO31yZXR1cm4gaXNVbmlxdWU7fTt9LyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL2Z1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoaGVhZEVsZW1lbnRzLHByb3BzKXtyZXR1cm4gaGVhZEVsZW1lbnRzLnJlZHVjZSgobGlzdCxoZWFkRWxlbWVudCk9Pntjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW4pO3JldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKTt9LFtdKS5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCxbXSkucmV2ZXJzZSgpLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKS5maWx0ZXIodW5pcXVlKCkpLnJldmVyc2UoKS5tYXAoKGMsaSk9Pntjb25zdCBrZXk9Yy5rZXl8fGk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnJiZwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJiFwcm9wcy5pbkFtcE1vZGUpe2lmKGMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1snaHJlZiddJiYvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cblsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnLCdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nXS5zb21lKHVybD0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSkpe2NvbnN0IG5ld1Byb3BzPXsuLi4oYy5wcm9wc3x8e30pfTtuZXdQcm9wc1snZGF0YS1ocmVmJ109bmV3UHJvcHNbJ2hyZWYnXTtuZXdQcm9wc1snaHJlZiddPXVuZGVmaW5lZDsvLyBBZGQgdGhpcyBhdHRyaWJ1dGUgdG8gbWFrZSBpdCBlYXN5IHRvIGlkZW50aWZ5IG9wdGltaXplZCB0YWdzXG5uZXdQcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXT10cnVlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYyxuZXdQcm9wcyk7fX1yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMse2tleX0pO30pO30vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovZnVuY3Rpb24gSGVhZCh7Y2hpbGRyZW59KXtjb25zdCBhbXBTdGF0ZT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2FtcENvbnRleHQuQW1wU3RhdGVDb250ZXh0KTtjb25zdCBoZWFkTWFuYWdlcj0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9zaWRlRWZmZWN0LmRlZmF1bHQse3JlZHVjZUNvbXBvbmVudHNUb1N0YXRlOnJlZHVjZUNvbXBvbmVudHMsaGVhZE1hbmFnZXI6aGVhZE1hbmFnZXIsaW5BbXBNb2RlOigwLF9hbXAuaXNJbkFtcE1vZGUpKGFtcFN0YXRlKX0sY2hpbGRyZW4pO312YXIgX2RlZmF1bHQ9SGVhZDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7Y29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnO2NsYXNzIF9kZWZhdWx0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMuX2hhc0hlYWRNYW5hZ2VyPXZvaWQgMDt0aGlzLmVtaXRDaGFuZ2U9KCk9PntpZih0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sdGhpcy5wcm9wcykpO319O3RoaXMuX2hhc0hlYWRNYW5hZ2VyPXRoaXMucHJvcHMuaGVhZE1hbmFnZXImJnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcztpZihpc1NlcnZlciYmdGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7dGhpcy5lbWl0Q2hhbmdlKCk7fX1jb21wb25lbnREaWRNb3VudCgpe2lmKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO310aGlzLmVtaXRDaGFuZ2UoKTt9Y29tcG9uZW50RGlkVXBkYXRlKCl7dGhpcy5lbWl0Q2hhbmdlKCk7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7aWYodGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcyk7fXRoaXMuZW1pdENoYW5nZSgpO31yZW5kZXIoKXtyZXR1cm4gbnVsbDt9fWV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZGUtZWZmZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO2NvbnN0IHN0YXR1c0NvZGVzPXs0MDA6J0JhZCBSZXF1ZXN0Jyw0MDQ6J1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLDQwNTonTWV0aG9kIE5vdCBBbGxvd2VkJyw1MDA6J0ludGVybmFsIFNlcnZlciBFcnJvcid9O2Z1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoe3JlcyxlcnJ9KXtjb25zdCBzdGF0dXNDb2RlPXJlcyYmcmVzLnN0YXR1c0NvZGU/cmVzLnN0YXR1c0NvZGU6ZXJyP2Vyci5zdGF0dXNDb2RlOjQwNDtyZXR1cm57c3RhdHVzQ29kZX07fS8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovY2xhc3MgRXJyb3IgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7c3RhdHVzQ29kZX09dGhpcy5wcm9wcztjb25zdCB0aXRsZT10aGlzLnByb3BzLnRpdGxlfHxzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXXx8J0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzdHlsZXMuZXJyb3J9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsbnVsbCxzdGF0dXNDb2RlP2Ake3N0YXR1c0NvZGV9OiAke3RpdGxlfWA6J0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDonYm9keSB7IG1hcmdpbjogMCB9J319KSxzdGF0dXNDb2RlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIix7c3R5bGU6c3R5bGVzLmgxfSxzdGF0dXNDb2RlKTpudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnN0eWxlcy5kZXNjfSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIse3N0eWxlOnN0eWxlcy5oMn0sdGhpcy5wcm9wcy50aXRsZXx8c3RhdHVzQ29kZT90aXRsZTovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoXCIsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jbGllbnQtc2lkZS1leGNlcHRpb24tb2NjdXJyZWRcIn0sXCJkZXZlbG9wZXIgZ3VpZGFuY2VcIiksXCIpXCIpLFwiLlwiKSkpKTt9fWV4cG9ydHMuZGVmYXVsdD1FcnJvcjtFcnJvci5kaXNwbGF5TmFtZT0nRXJyb3JQYWdlJztFcnJvci5nZXRJbml0aWFsUHJvcHM9X2dldEluaXRpYWxQcm9wcztFcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzPV9nZXRJbml0aWFsUHJvcHM7Y29uc3Qgc3R5bGVzPXtlcnJvcjp7Y29sb3I6JyMwMDAnLGJhY2tncm91bmQ6JyNmZmYnLGZvbnRGYW1pbHk6Jy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsaGVpZ2h0OicxMDB2aCcsdGV4dEFsaWduOidjZW50ZXInLGRpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ30sZGVzYzp7ZGlzcGxheTonaW5saW5lLWJsb2NrJyx0ZXh0QWxpZ246J2xlZnQnLGxpbmVIZWlnaHQ6JzQ5cHgnLGhlaWdodDonNDlweCcsdmVydGljYWxBbGlnbjonbWlkZGxlJ30saDE6e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsYm9yZGVyUmlnaHQ6JzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxtYXJnaW46MCxtYXJnaW5SaWdodDonMjBweCcscGFkZGluZzonMTBweCAyM3B4IDEwcHggMCcsZm9udFNpemU6JzI0cHgnLGZvbnRXZWlnaHQ6NTAwLHZlcnRpY2FsQWxpZ246J3RvcCd9LGgyOntmb250U2l6ZTonMTRweCcsZm9udFdlaWdodDonbm9ybWFsJyxsaW5lSGVpZ2h0Oidpbmhlcml0JyxtYXJnaW46MCxwYWRkaW5nOjB9fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiLCJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwidXRpbHMvbWVkaWFcIlxuaW1wb3J0IHsgZ2V0R2xvYmFsRGF0YSB9IGZyb20gXCJ1dGlscy9hcGlcIlxuaW1wb3J0IFwiQC9zdHlsZXMvaW5kZXguY3NzXCJcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIC8vIEV4dHJhY3QgdGhlIGRhdGEgd2UgbmVlZFxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzXG4gIGlmIChnbG9iYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuXG4gIGNvbnN0IHsgbWV0YWRhdGEsIGZhdmljb24sIG1ldGFUaXRsZVN1ZmZpeCB9ID0gZ2xvYmFsLmF0dHJpYnV0ZXNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogRmF2aWNvbiAqL31cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGZhdmljb24uZGF0YS5hdHRyaWJ1dGVzLnVybCl9XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogR2xvYmFsIHNpdGUgbWV0YWRhdGEgKi99XG4gICAgICA8RGVmYXVsdFNlb1xuICAgICAgICB0aXRsZVRlbXBsYXRlPXtgJXMgfCAke21ldGFUaXRsZVN1ZmZpeH1gfVxuICAgICAgICB0aXRsZT1cIlBhZ2VcIlxuICAgICAgICBkZXNjcmlwdGlvbj17bWV0YWRhdGEubWV0YURlc2NyaXB0aW9ufVxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICBpbWFnZXM6IE9iamVjdC52YWx1ZXMoXG4gICAgICAgICAgICBtZXRhZGF0YS5zaGFyZUltYWdlLmRhdGEuYXR0cmlidXRlcy5mb3JtYXRzXG4gICAgICAgICAgKS5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB1cmw6IGdldFN0cmFwaU1lZGlhKGltYWdlLnVybCksXG4gICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgIH19XG4gICAgICAgIHR3aXR0ZXI9e3tcbiAgICAgICAgICBjYXJkVHlwZTogbWV0YWRhdGEudHdpdHRlckNhcmRUeXBlLFxuICAgICAgICAgIGhhbmRsZTogbWV0YWRhdGEudHdpdHRlclVzZXJuYW1lLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHsvKiBEaXNwbGF5IHRoZSBjb250ZW50ICovfVxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gW1suLi5zbHVnXV0gcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KVxuICBjb25zdCBnbG9iYWxMb2NhbGUgPSBhd2FpdCBnZXRHbG9iYWxEYXRhKGFwcENvbnRleHQucm91dGVyLmxvY2FsZSlcblxuICByZXR1cm4ge1xuICAgIC4uLmFwcFByb3BzLFxuICAgIHBhZ2VQcm9wczoge1xuICAgICAgZ2xvYmFsOiBnbG9iYWxMb2NhbGUsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHFzIGZyb20gXCJxc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCkge1xuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHtwYXRofWBcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpIEFQSSBlbmRwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxuICogQHBhcmFtIHtSZXF1ZXN0SW5pdH0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byBmZXRjaFxuICogQHJldHVybnMgUGFyc2VkIEFQSSBjYWxsIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoLCB1cmxQYXJhbXNPYmplY3QgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIE1lcmdlIGRlZmF1bHQgYW5kIHVzZXIgb3B0aW9uc1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgLi4ub3B0aW9ucyxcbiAgfVxuXG4gIC8vIEJ1aWxkIHJlcXVlc3QgVVJMXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcbiAgICBgL2FwaSR7cGF0aH0ke3F1ZXJ5U3RyaW5nID8gYD8ke3F1ZXJ5U3RyaW5nfWAgOiBcIlwifWBcbiAgKX1gXG5cbiAgLy8gVHJpZ2dlciBBUEkgY2FsbFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXG5cbiAgLy8gSGFuZGxlIHJlc3BvbnNlXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBBbiBlcnJvciBvY2N1cmVkIHBsZWFzZSB0cnkgYWdhaW5gKVxuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNsdWcgVGhlIHBhZ2UncyBzbHVnXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgVGhlIGN1cnJlbnQgbG9jYWxlIHNwZWNpZmllZCBpbiByb3V0ZXIubG9jYWxlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMucHJldmlldyByb3V0ZXIgaXNQcmV2aWV3IHZhbHVlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlRGF0YSh7IHNsdWcsIGxvY2FsZSwgcHJldmlldyB9KSB7XG4gIC8vIEZpbmQgdGhlIHBhZ2VzIHRoYXQgbWF0Y2ggdGhpcyBzbHVnXG4gIGNvbnN0IGdxbEVuZHBvaW50ID0gZ2V0U3RyYXBpVVJMKFwiL2dyYXBocWxcIilcbiAgY29uc3QgcGFnZXNSZXMgPSBhd2FpdCBmZXRjaChncWxFbmRwb2ludCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogYFxuICAgICAgICBmcmFnbWVudCBGaWxlUGFydHMgb24gVXBsb2FkRmlsZUVudGl0eVJlc3BvbnNlIHtcbiAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XG4gICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgICBtaW1lXG4gICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICBmb3JtYXRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXJ5IEdldFBhZ2VzKFxuICAgICAgICAgICRzbHVnOiBTdHJpbmchXG4gICAgICAgICAgJHB1YmxpY2F0aW9uU3RhdGU6IFB1YmxpY2F0aW9uU3RhdGUhXG4gICAgICAgICAgJGxvY2FsZTogSTE4TkxvY2FsZUNvZGUhXG4gICAgICAgICkgeyAgICAgICAgXG4gICAgICAgICAgcGFnZXMoXG4gICAgICAgICAgICBmaWx0ZXJzOiB7IHNsdWc6IHsgZXE6ICRzbHVnIH0gfVxuICAgICAgICAgICAgcHVibGljYXRpb25TdGF0ZTogJHB1YmxpY2F0aW9uU3RhdGVcbiAgICAgICAgICAgIGxvY2FsZTogJGxvY2FsZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbnMge1xuICAgICAgICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSB7XG4gICAgICAgICAgICAgICAgICBtZXRhVGl0bGVcbiAgICAgICAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgc2hhcmVJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdHdpdHRlckNhcmRUeXBlXG4gICAgICAgICAgICAgICAgICB0d2l0dGVyVXNlcm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudFNlY3Rpb25zIHtcbiAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0JvdHRvbUFjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBidXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0hlcm8ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVDb2x1bW5zR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVSb3dzR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNUZXN0aW1vbmlhbHNHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvZ29zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVzdGltb25pYWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICBhdXRob3JOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aG9yVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0xhcmdlVmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zUmljaFRleHQge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNQcmljaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgcGxhbnMge1xuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBpc1JlY29tbWVuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgcHJpY2VQZXJpb2RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zTGVhZEZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBlbWFpbFBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgXG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHNsdWcsXG4gICAgICAgIHB1YmxpY2F0aW9uU3RhdGU6IHByZXZpZXcgPyBcIlBSRVZJRVdcIiA6IFwiTElWRVwiLFxuICAgICAgICBsb2NhbGUsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KVxuXG4gIGNvbnN0IHBhZ2VzRGF0YSA9IGF3YWl0IHBhZ2VzUmVzLmpzb24oKVxuICAvLyBNYWtlIHN1cmUgd2UgZm91bmQgc29tZXRoaW5nLCBvdGhlcndpc2UgcmV0dXJuIG51bGxcbiAgaWYgKHBhZ2VzRGF0YS5kYXRhPy5wYWdlcyA9PSBudWxsIHx8IHBhZ2VzRGF0YS5kYXRhLnBhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IGl0ZW0gc2luY2UgdGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIHJlc3VsdCBwZXIgc2x1Z1xuICByZXR1cm4gcGFnZXNEYXRhLmRhdGEucGFnZXMuZGF0YVswXVxufVxuXG4vLyBHZXQgc2l0ZSBkYXRhIGZyb20gU3RyYXBpIChtZXRhZGF0YSwgbmF2YmFyLCBmb290ZXIuLi4pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2xvYmFsRGF0YShsb2NhbGUpIHtcbiAgY29uc3QgZ3FsRW5kcG9pbnQgPSBnZXRTdHJhcGlVUkwoXCIvZ3JhcGhxbFwiKVxuICBjb25zdCBnbG9iYWxSZXMgPSBhd2FpdCBmZXRjaChncWxFbmRwb2ludCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogYFxuICAgICAgICBmcmFnbWVudCBGaWxlUGFydHMgb24gVXBsb2FkRmlsZUVudGl0eVJlc3BvbnNlIHtcbiAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XG4gICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgICBtaW1lXG4gICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICBmb3JtYXRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXJ5IEdldEdsb2JhbCgkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSEpIHtcbiAgICAgICAgICBnbG9iYWwobG9jYWxlOiAkbG9jYWxlKSB7XG4gICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgZmF2aWNvbiB7XG4gICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEge1xuICAgICAgICAgICAgICAgICAgbWV0YVRpdGxlXG4gICAgICAgICAgICAgICAgICBtZXRhRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIHNoYXJlSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJDYXJkVHlwZVxuICAgICAgICAgICAgICAgICAgdHdpdHRlclVzZXJuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1ldGFUaXRsZVN1ZmZpeFxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkJhbm5lciB7XG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5hdmJhciB7XG4gICAgICAgICAgICAgICAgICBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsaW5rcyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICBuZXdUYWJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNtYWxsVGV4dFxuICAgICAgICAgICAgICAgICAgY29sdW1ucyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgIFxuICAgICAgYCxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBsb2NhbGUsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KVxuXG4gIGNvbnN0IGdsb2JhbCA9IGF3YWl0IGdsb2JhbFJlcy5qc29uKClcbiAgcmV0dXJuIGdsb2JhbC5kYXRhLmdsb2JhbFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaU1lZGlhKHVybCkge1xuICBpZiAodXJsID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBmdWxsIFVSTCBpZiB0aGUgbWVkaWEgaXMgaG9zdGVkIG9uIGFuIGV4dGVybmFsIHByb3ZpZGVyXG4gIGlmICh1cmwuc3RhcnRzV2l0aChcImh0dHBcIikgfHwgdXJsLnN0YXJ0c1dpdGgoXCIvL1wiKSkge1xuICAgIHJldHVybiB1cmxcbiAgfVxuXG4gIC8vIE90aGVyd2lzZSBwcmVwZW5kIHRoZSBVUkwgcGF0aCB3aXRoIHRoZSBTdHJhcGkgVVJMXG4gIHJldHVybiBgJHtcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiXG4gIH0ke3VybH1gXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciAkaW5kZXhPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mJykpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCb3VuZEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0dmFyIGludHJpbnNpYyA9IEdldEludHJpbnNpYyhuYW1lLCAhIWFsbG93TWlzc2luZyk7XG5cdGlmICh0eXBlb2YgaW50cmluc2ljID09PSAnZnVuY3Rpb24nICYmICRpbmRleE9mKG5hbWUsICcucHJvdG90eXBlLicpID4gLTEpIHtcblx0XHRyZXR1cm4gY2FsbEJpbmQoaW50cmluc2ljKTtcblx0fVxuXHRyZXR1cm4gaW50cmluc2ljO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGFwcGx5ID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5JScpO1xudmFyICRjYWxsID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwlJyk7XG52YXIgJHJlZmxlY3RBcHBseSA9IEdldEludHJpbnNpYygnJVJlZmxlY3QuYXBwbHklJywgdHJ1ZSkgfHwgYmluZC5jYWxsKCRjYWxsLCAkYXBwbHkpO1xuXG52YXIgJGdPUEQgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJScsIHRydWUpO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcbnZhciAkbWF4ID0gR2V0SW50cmluc2ljKCclTWF0aC5tYXglJyk7XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0JGRlZmluZVByb3BlcnR5ID0gbnVsbDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKG9yaWdpbmFsRnVuY3Rpb24pIHtcblx0dmFyIGZ1bmMgPSAkcmVmbGVjdEFwcGx5KGJpbmQsICRjYWxsLCBhcmd1bWVudHMpO1xuXHRpZiAoJGdPUEQgJiYgJGRlZmluZVByb3BlcnR5KSB7XG5cdFx0dmFyIGRlc2MgPSAkZ09QRChmdW5jLCAnbGVuZ3RoJyk7XG5cdFx0aWYgKGRlc2MuY29uZmlndXJhYmxlKSB7XG5cdFx0XHQvLyBvcmlnaW5hbCBsZW5ndGgsIHBsdXMgdGhlIHJlY2VpdmVyLCBtaW51cyBhbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgKGFmdGVyIHRoZSByZWNlaXZlcilcblx0XHRcdCRkZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0ZnVuYyxcblx0XHRcdFx0J2xlbmd0aCcsXG5cdFx0XHRcdHsgdmFsdWU6IDEgKyAkbWF4KDAsIG9yaWdpbmFsRnVuY3Rpb24ubGVuZ3RoIC0gKGFyZ3VtZW50cy5sZW5ndGggLSAxKSkgfVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZ1bmM7XG59O1xuXG52YXIgYXBwbHlCaW5kID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gJHJlZmxlY3RBcHBseShiaW5kLCAkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdCRkZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2FwcGx5JywgeyB2YWx1ZTogYXBwbHlCaW5kIH0pO1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMuYXBwbHkgPSBhcHBseUJpbmQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBuby1pbnZhbGlkLXRoaXM6IDEgKi9cblxudmFyIEVSUk9SX01FU1NBR0UgPSAnRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jVHlwZSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbCh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBib3VuZDtcbiAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gTWF0aC5tYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJncy5wdXNoKCckJyArIGkpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOyB9JykoYmluZGVyKTtcblxuICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge307XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IG5ldyBFbXB0eSgpO1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVuZGVmaW5lZDtcblxudmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xudmFyICRGdW5jdGlvbiA9IEZ1bmN0aW9uO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxudmFyIGdldEV2YWxsZWRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChleHByZXNzaW9uU3ludGF4KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuICRGdW5jdGlvbignXCJ1c2Ugc3RyaWN0XCI7IHJldHVybiAoJyArIGV4cHJlc3Npb25TeW50YXggKyAnKS5jb25zdHJ1Y3RvcjsnKSgpO1xuXHR9IGNhdGNoIChlKSB7fVxufTtcblxudmFyICRnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbmlmICgkZ09QRCkge1xuXHR0cnkge1xuXHRcdCRnT1BEKHt9LCAnJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQkZ09QRCA9IG51bGw7IC8vIHRoaXMgaXMgSUUgOCwgd2hpY2ggaGFzIGEgYnJva2VuIGdPUERcblx0fVxufVxuXG52YXIgdGhyb3dUeXBlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyAkVHlwZUVycm9yKCk7XG59O1xudmFyIFRocm93VHlwZUVycm9yID0gJGdPUERcblx0PyAoZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zLCBuby1jYWxsZXIsIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuXHRcdFx0YXJndW1lbnRzLmNhbGxlZTsgLy8gSUUgOCBkb2VzIG5vdCB0aHJvdyBoZXJlXG5cdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0fSBjYXRjaCAoY2FsbGVlVGhyb3dzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBJRSA4IHRocm93cyBvbiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFyZ3VtZW50cywgJycpXG5cdFx0XHRcdHJldHVybiAkZ09QRChhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7XG5cdFx0XHR9IGNhdGNoIChnT1BEdGhyb3dzKSB7XG5cdFx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH0oKSlcblx0OiB0aHJvd1R5cGVFcnJvcjtcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5fX3Byb3RvX187IH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxudmFyIG5lZWRzRXZhbCA9IHt9O1xuXG52YXIgVHlwZWRBcnJheSA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKFVpbnQ4QXJyYXkpO1xuXG52YXIgSU5UUklOU0lDUyA9IHtcblx0JyVBZ2dyZWdhdGVFcnJvciUnOiB0eXBlb2YgQWdncmVnYXRlRXJyb3IgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQWdncmVnYXRlRXJyb3IsXG5cdCclQXJyYXklJzogQXJyYXksXG5cdCclQXJyYXlCdWZmZXIlJzogdHlwZW9mIEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEFycmF5QnVmZmVyLFxuXHQnJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclQXN5bmNGcm9tU3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Z1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0dlbmVyYXRvciUnOiBuZWVkc0V2YWwsXG5cdCclQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBuZWVkc0V2YWwsXG5cdCclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBuZWVkc0V2YWwsXG5cdCclQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJUJpZ0ludCUnOiB0eXBlb2YgQmlnSW50ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEJpZ0ludCxcblx0JyVCb29sZWFuJSc6IEJvb2xlYW4sXG5cdCclRGF0YVZpZXclJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LFxuXHQnJURhdGUlJzogRGF0ZSxcblx0JyVkZWNvZGVVUkklJzogZGVjb2RlVVJJLFxuXHQnJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCclZW5jb2RlVVJJJSc6IGVuY29kZVVSSSxcblx0JyVlbmNvZGVVUklDb21wb25lbnQlJzogZW5jb2RlVVJJQ29tcG9uZW50LFxuXHQnJUVycm9yJSc6IEVycm9yLFxuXHQnJWV2YWwlJzogZXZhbCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG5cdCclRXZhbEVycm9yJSc6IEV2YWxFcnJvcixcblx0JyVGbG9hdDMyQXJyYXklJzogdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDMyQXJyYXksXG5cdCclRmxvYXQ2NEFycmF5JSc6IHR5cGVvZiBGbG9hdDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQ2NEFycmF5LFxuXHQnJUZpbmFsaXphdGlvblJlZ2lzdHJ5JSc6IHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGaW5hbGl6YXRpb25SZWdpc3RyeSxcblx0JyVGdW5jdGlvbiUnOiAkRnVuY3Rpb24sXG5cdCclR2VuZXJhdG9yRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUludDhBcnJheSUnOiB0eXBlb2YgSW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheSxcblx0JyVJbnQxNkFycmF5JSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDE2QXJyYXksXG5cdCclSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJWlzTmFOJSc6IGlzTmFOLFxuXHQnJUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSA6IHVuZGVmaW5lZCxcblx0JyVKU09OJSc6IHR5cGVvZiBKU09OID09PSAnb2JqZWN0JyA/IEpTT04gOiB1bmRlZmluZWQsXG5cdCclTWFwJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLFxuXHQnJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclTWF0aCUnOiBNYXRoLFxuXHQnJU51bWJlciUnOiBOdW1iZXIsXG5cdCclT2JqZWN0JSc6IE9iamVjdCxcblx0JyVwYXJzZUZsb2F0JSc6IHBhcnNlRmxvYXQsXG5cdCclcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCclUHJvbWlzZSUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLFxuXHQnJVByb3h5JSc6IHR5cGVvZiBQcm94eSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm94eSxcblx0JyVSYW5nZUVycm9yJSc6IFJhbmdlRXJyb3IsXG5cdCclUmVmZXJlbmNlRXJyb3IlJzogUmVmZXJlbmNlRXJyb3IsXG5cdCclUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJVJlZ0V4cCUnOiBSZWdFeHAsXG5cdCclU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJVNldEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IFNldCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclU2hhcmVkQXJyYXlCdWZmZXIlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLFxuXHQnJVN0cmluZyUnOiBTdHJpbmcsXG5cdCclU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKCcnW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclU3ltYm9sJSc6IGhhc1N5bWJvbHMgPyBTeW1ib2wgOiB1bmRlZmluZWQsXG5cdCclU3ludGF4RXJyb3IlJzogJFN5bnRheEVycm9yLFxuXHQnJVRocm93VHlwZUVycm9yJSc6IFRocm93VHlwZUVycm9yLFxuXHQnJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyVUeXBlRXJyb3IlJzogJFR5cGVFcnJvcixcblx0JyVVaW50OEFycmF5JSc6IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4QXJyYXksXG5cdCclVWludDhDbGFtcGVkQXJyYXklJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHQnJVVpbnQxNkFycmF5JSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheSxcblx0JyVVaW50MzJBcnJheSUnOiB0eXBlb2YgVWludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDMyQXJyYXksXG5cdCclVVJJRXJyb3IlJzogVVJJRXJyb3IsXG5cdCclV2Vha01hcCUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLFxuXHQnJVdlYWtSZWYlJzogdHlwZW9mIFdlYWtSZWYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1JlZixcblx0JyVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXRcbn07XG5cbnZhciBkb0V2YWwgPSBmdW5jdGlvbiBkb0V2YWwobmFtZSkge1xuXHR2YXIgdmFsdWU7XG5cdGlmIChuYW1lID09PSAnJUFzeW5jRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yJScpIHtcblx0XHR2YXIgZm4gPSBkb0V2YWwoJyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJScpO1xuXHRcdGlmIChmbikge1xuXHRcdFx0dmFsdWUgPSBmbi5wcm90b3R5cGU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnKSB7XG5cdFx0dmFyIGdlbiA9IGRvRXZhbCgnJUFzeW5jR2VuZXJhdG9yJScpO1xuXHRcdGlmIChnZW4pIHtcblx0XHRcdHZhbHVlID0gZ2V0UHJvdG8oZ2VuLnByb3RvdHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0SU5UUklOU0lDU1tuYW1lXSA9IHZhbHVlO1xuXG5cdHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBMRUdBQ1lfQUxJQVNFUyA9IHtcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ0FycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG90eXBlJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b19lbnRyaWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2VudHJpZXMnXSxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZm9yRWFjaCddLFxuXHQnJUFycmF5UHJvdG9fa2V5cyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdrZXlzJ10sXG5cdCclQXJyYXlQcm90b192YWx1ZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAndmFsdWVzJ10sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0FzeW5jRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclQm9vbGVhblByb3RvdHlwZSUnOiBbJ0Jvb2xlYW4nLCAncHJvdG90eXBlJ10sXG5cdCclRGF0YVZpZXdQcm90b3R5cGUlJzogWydEYXRhVmlldycsICdwcm90b3R5cGUnXSxcblx0JyVEYXRlUHJvdG90eXBlJSc6IFsnRGF0ZScsICdwcm90b3R5cGUnXSxcblx0JyVFcnJvclByb3RvdHlwZSUnOiBbJ0Vycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBbJ0V2YWxFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQ2NEFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQ2NEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IFsnRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDhBcnJheVByb3RvdHlwZSUnOiBbJ0ludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnSW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnSW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVKU09OUGFyc2UlJzogWydKU09OJywgJ3BhcnNlJ10sXG5cdCclSlNPTlN0cmluZ2lmeSUnOiBbJ0pTT04nLCAnc3RyaW5naWZ5J10sXG5cdCclTWFwUHJvdG90eXBlJSc6IFsnTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJU51bWJlclByb3RvdHlwZSUnOiBbJ051bWJlcicsICdwcm90b3R5cGUnXSxcblx0JyVPYmplY3RQcm90b3R5cGUlJzogWydPYmplY3QnLCAncHJvdG90eXBlJ10sXG5cdCclT2JqUHJvdG9fdG9TdHJpbmclJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3RvU3RyaW5nJ10sXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndmFsdWVPZiddLFxuXHQnJVByb21pc2VQcm90b3R5cGUlJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZSddLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnLCAndGhlbiddLFxuXHQnJVByb21pc2VfYWxsJSc6IFsnUHJvbWlzZScsICdhbGwnXSxcblx0JyVQcm9taXNlX3JlamVjdCUnOiBbJ1Byb21pc2UnLCAncmVqZWN0J10sXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IFsnUHJvbWlzZScsICdyZXNvbHZlJ10sXG5cdCclUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBbJ1JhbmdlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogWydSZWZlcmVuY2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWdFeHBQcm90b3R5cGUlJzogWydSZWdFeHAnLCAncHJvdG90eXBlJ10sXG5cdCclU2V0UHJvdG90eXBlJSc6IFsnU2V0JywgJ3Byb3RvdHlwZSddLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnU2hhcmVkQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclU3RyaW5nUHJvdG90eXBlJSc6IFsnU3RyaW5nJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bWJvbFByb3RvdHlwZSUnOiBbJ1N5bWJvbCcsICdwcm90b3R5cGUnXSxcblx0JyVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBbJ1N5bnRheEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogWydUeXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVFcnJvclByb3RvdHlwZSUnOiBbJ1R5cGVFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4Q2xhbXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnVWludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDMyQXJyYXlQcm90b3R5cGUlJzogWydVaW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVUklFcnJvclByb3RvdHlwZSUnOiBbJ1VSSUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtNYXBQcm90b3R5cGUlJzogWydXZWFrTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtTZXRQcm90b3R5cGUlJzogWydXZWFrU2V0JywgJ3Byb3RvdHlwZSddXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCdoYXMnKTtcbnZhciAkY29uY2F0ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5jb25jYXQpO1xudmFyICRzcGxpY2VBcHBseSA9IGJpbmQuY2FsbChGdW5jdGlvbi5hcHBseSwgQXJyYXkucHJvdG90eXBlLnNwbGljZSk7XG52YXIgJHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciAkc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG5cbi8qIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iLzQuMTcuMTUvZGlzdC9sb2Rhc2guanMjTDY3MzUtTDY3NDQgKi9cbnZhciByZVByb3BOYW1lID0gL1teJS5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwlJCkpL2c7XG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7IC8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IGZ1bmN0aW9uIHN0cmluZ1RvUGF0aChzdHJpbmcpIHtcblx0dmFyIGZpcnN0ID0gJHN0clNsaWNlKHN0cmluZywgMCwgMSk7XG5cdHZhciBsYXN0ID0gJHN0clNsaWNlKHN0cmluZywgLTEpO1xuXHRpZiAoZmlyc3QgPT09ICclJyAmJiBsYXN0ICE9PSAnJScpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdpbnZhbGlkIGludHJpbnNpYyBzeW50YXgsIGV4cGVjdGVkIGNsb3NpbmcgYCVgJyk7XG5cdH0gZWxzZSBpZiAobGFzdCA9PT0gJyUnICYmIGZpcnN0ICE9PSAnJScpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdpbnZhbGlkIGludHJpbnNpYyBzeW50YXgsIGV4cGVjdGVkIG9wZW5pbmcgYCVgJyk7XG5cdH1cblx0dmFyIHJlc3VsdCA9IFtdO1xuXHQkcmVwbGFjZShzdHJpbmcsIHJlUHJvcE5hbWUsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG5cdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gcXVvdGUgPyAkcmVwbGFjZShzdWJTdHJpbmcsIHJlRXNjYXBlQ2hhciwgJyQxJykgOiBudW1iZXIgfHwgbWF0Y2g7XG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbi8qIGVuZCBhZGFwdGF0aW9uICovXG5cbnZhciBnZXRCYXNlSW50cmluc2ljID0gZnVuY3Rpb24gZ2V0QmFzZUludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0dmFyIGludHJpbnNpY05hbWUgPSBuYW1lO1xuXHR2YXIgYWxpYXM7XG5cdGlmIChoYXNPd24oTEVHQUNZX0FMSUFTRVMsIGludHJpbnNpY05hbWUpKSB7XG5cdFx0YWxpYXMgPSBMRUdBQ1lfQUxJQVNFU1tpbnRyaW5zaWNOYW1lXTtcblx0XHRpbnRyaW5zaWNOYW1lID0gJyUnICsgYWxpYXNbMF0gKyAnJSc7XG5cdH1cblxuXHRpZiAoaGFzT3duKElOVFJJTlNJQ1MsIGludHJpbnNpY05hbWUpKSB7XG5cdFx0dmFyIHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNOYW1lXTtcblx0XHRpZiAodmFsdWUgPT09IG5lZWRzRXZhbCkge1xuXHRcdFx0dmFsdWUgPSBkb0V2YWwoaW50cmluc2ljTmFtZSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnICYmICFhbGxvd01pc3NpbmcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRhbGlhczogYWxpYXMsXG5cdFx0XHRuYW1lOiBpbnRyaW5zaWNOYW1lLFxuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fTtcblx0fVxuXG5cdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZG9lcyBub3QgZXhpc3QhJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpbnRyaW5zaWMgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgYWxsb3dNaXNzaW5nICE9PSAnYm9vbGVhbicpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignXCJhbGxvd01pc3NpbmdcIiBhcmd1bWVudCBtdXN0IGJlIGEgYm9vbGVhbicpO1xuXHR9XG5cblx0dmFyIHBhcnRzID0gc3RyaW5nVG9QYXRoKG5hbWUpO1xuXHR2YXIgaW50cmluc2ljQmFzZU5hbWUgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJztcblxuXHR2YXIgaW50cmluc2ljID0gZ2V0QmFzZUludHJpbnNpYygnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJywgYWxsb3dNaXNzaW5nKTtcblx0dmFyIGludHJpbnNpY1JlYWxOYW1lID0gaW50cmluc2ljLm5hbWU7XG5cdHZhciB2YWx1ZSA9IGludHJpbnNpYy52YWx1ZTtcblx0dmFyIHNraXBGdXJ0aGVyQ2FjaGluZyA9IGZhbHNlO1xuXG5cdHZhciBhbGlhcyA9IGludHJpbnNpYy5hbGlhcztcblx0aWYgKGFsaWFzKSB7XG5cdFx0aW50cmluc2ljQmFzZU5hbWUgPSBhbGlhc1swXTtcblx0XHQkc3BsaWNlQXBwbHkocGFydHMsICRjb25jYXQoWzAsIDFdLCBhbGlhcykpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDEsIGlzT3duID0gdHJ1ZTsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0c1tpXTtcblx0XHR2YXIgZmlyc3QgPSAkc3RyU2xpY2UocGFydCwgMCwgMSk7XG5cdFx0dmFyIGxhc3QgPSAkc3RyU2xpY2UocGFydCwgLTEpO1xuXHRcdGlmIChcblx0XHRcdChcblx0XHRcdFx0KGZpcnN0ID09PSAnXCInIHx8IGZpcnN0ID09PSBcIidcIiB8fCBmaXJzdCA9PT0gJ2AnKVxuXHRcdFx0XHR8fCAobGFzdCA9PT0gJ1wiJyB8fCBsYXN0ID09PSBcIidcIiB8fCBsYXN0ID09PSAnYCcpXG5cdFx0XHQpXG5cdFx0XHQmJiBmaXJzdCAhPT0gbGFzdFxuXHRcdCkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcigncHJvcGVydHkgbmFtZXMgd2l0aCBxdW90ZXMgbXVzdCBoYXZlIG1hdGNoaW5nIHF1b3RlcycpO1xuXHRcdH1cblx0XHRpZiAocGFydCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhaXNPd24pIHtcblx0XHRcdHNraXBGdXJ0aGVyQ2FjaGluZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW50cmluc2ljQmFzZU5hbWUgKz0gJy4nICsgcGFydDtcblx0XHRpbnRyaW5zaWNSZWFsTmFtZSA9ICclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnO1xuXG5cdFx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNSZWFsTmFtZSkpIHtcblx0XHRcdHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoIShwYXJ0IGluIHZhbHVlKSkge1xuXHRcdFx0XHRpZiAoIWFsbG93TWlzc2luZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdiYXNlIGludHJpbnNpYyBmb3IgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IHRoZSBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2b2lkIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkZ09QRCAmJiAoaSArIDEpID49IHBhcnRzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgZGVzYyA9ICRnT1BEKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0aXNPd24gPSAhIWRlc2M7XG5cblx0XHRcdFx0Ly8gQnkgY29udmVudGlvbiwgd2hlbiBhIGRhdGEgcHJvcGVydHkgaXMgY29udmVydGVkIHRvIGFuIGFjY2Vzc29yXG5cdFx0XHRcdC8vIHByb3BlcnR5IHRvIGVtdWxhdGUgYSBkYXRhIHByb3BlcnR5IHRoYXQgZG9lcyBub3Qgc3VmZmVyIGZyb21cblx0XHRcdFx0Ly8gdGhlIG92ZXJyaWRlIG1pc3Rha2UsIHRoYXQgYWNjZXNzb3IncyBnZXR0ZXIgaXMgbWFya2VkIHdpdGhcblx0XHRcdFx0Ly8gYW4gYG9yaWdpbmFsVmFsdWVgIHByb3BlcnR5LiBIZXJlLCB3aGVuIHdlIGRldGVjdCB0aGlzLCB3ZVxuXHRcdFx0XHQvLyB1cGhvbGQgdGhlIGlsbHVzaW9uIGJ5IHByZXRlbmRpbmcgdG8gc2VlIHRoYXQgb3JpZ2luYWwgZGF0YVxuXHRcdFx0XHQvLyBwcm9wZXJ0eSwgaS5lLiwgcmV0dXJuaW5nIHRoZSB2YWx1ZSByYXRoZXIgdGhhbiB0aGUgZ2V0dGVyXG5cdFx0XHRcdC8vIGl0c2VsZi5cblx0XHRcdFx0aWYgKGlzT3duICYmICdnZXQnIGluIGRlc2MgJiYgISgnb3JpZ2luYWxWYWx1ZScgaW4gZGVzYy5nZXQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBkZXNjLmdldDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpc093biA9IGhhc093bih2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc093biAmJiAhc2tpcEZ1cnRoZXJDYWNoaW5nKSB7XG5cdFx0XHRcdElOVFJJTlNJQ1NbaW50cmluc2ljUmVhbE5hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvcmlnU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMThdLCBtYXgtc3RhdGVtZW50czogWzIsIDMzXSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIG9iaiA9IHt9O1xuXHR2YXIgc3ltID0gU3ltYm9sKCd0ZXN0Jyk7XG5cdHZhciBzeW1PYmogPSBPYmplY3Qoc3ltKTtcblx0aWYgKHR5cGVvZiBzeW0gPT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltT2JqKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9vYmplY3QuYXNzaWduL2lzc3Vlcy8xN1xuXHQvLyBpZiAoc3ltIGluc3RhbmNlb2YgU3ltYm9sKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMvaXNzdWVzLzRcblx0Ly8gaWYgKCEoc3ltT2JqIGluc3RhbmNlb2YgU3ltYm9sKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBpZiAodHlwZW9mIFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIGlmIChTdHJpbmcoc3ltKSAhPT0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby11bnJlYWNoYWJsZS1sb29wXG5cdGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKTtcblx0aWYgKHN5bXMubGVuZ3RoICE9PSAxIHx8IHN5bXNbMF0gIT09IHN5bSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgc3ltKTtcblx0XHRpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gc3ltVmFsIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICB0ZW1wbGF0ZVRpdGxlOiAnJyxcbiAgbm9pbmRleDogZmFsc2UsXG4gIG5vZm9sbG93OiBmYWxzZSxcbiAgZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg6IDAsXG4gIGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodDogMCxcbiAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGg6IDAsXG4gIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodDogMFxufTtcblxudmFyIGJ1aWxkVGFncyA9IGZ1bmN0aW9uIGJ1aWxkVGFncyhjb25maWcpIHtcbiAgdmFyIHRhZ3NUb1JlbmRlciA9IFtdO1xuXG4gIGlmIChjb25maWcudGl0bGVUZW1wbGF0ZSkge1xuICAgIGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUgPSBjb25maWcudGl0bGVUZW1wbGF0ZTtcbiAgfVxuXG4gIHZhciB1cGRhdGVkVGl0bGUgPSAnJztcblxuICBpZiAoY29uZmlnLnRpdGxlKSB7XG4gICAgdXBkYXRlZFRpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgaWYgKGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUpIHtcbiAgICAgIHVwZGF0ZWRUaXRsZSA9IGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRpdGxlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIHtcbiAgICAgIGtleTogXCJ0aXRsZVwiXG4gICAgfSwgdXBkYXRlZFRpdGxlKSk7XG4gIH1cblxuICB2YXIgbm9pbmRleCA9IGNvbmZpZy5ub2luZGV4IHx8IGRlZmF1bHRzLm5vaW5kZXggfHwgY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXg7XG4gIHZhciBub2ZvbGxvdyA9IGNvbmZpZy5ub2ZvbGxvdyB8fCBkZWZhdWx0cy5ub2ZvbGxvdyB8fCBjb25maWcuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3c7XG5cbiAgaWYgKG5vaW5kZXggfHwgbm9mb2xsb3cpIHtcbiAgICBpZiAoY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXgpIHtcbiAgICAgIGRlZmF1bHRzLm5vaW5kZXggPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3cpIHtcbiAgICAgIGRlZmF1bHRzLm5vZm9sbG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwicm9ib3RzXCIsXG4gICAgICBuYW1lOiBcInJvYm90c1wiLFxuICAgICAgY29udGVudDogKG5vaW5kZXggPyAnbm9pbmRleCcgOiAnaW5kZXgnKSArIFwiLFwiICsgKG5vZm9sbG93ID8gJ25vZm9sbG93JyA6ICdmb2xsb3cnKVxuICAgIH0pKTtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZ29vZ2xlYm90XCIsXG4gICAgICBuYW1lOiBcImdvb2dsZWJvdFwiLFxuICAgICAgY29udGVudDogKG5vaW5kZXggPyAnbm9pbmRleCcgOiAnaW5kZXgnKSArIFwiLFwiICsgKG5vZm9sbG93ID8gJ25vZm9sbG93JyA6ICdmb2xsb3cnKVxuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwicm9ib3RzXCIsXG4gICAgICBuYW1lOiBcInJvYm90c1wiLFxuICAgICAgY29udGVudDogXCJpbmRleCxmb2xsb3dcIlxuICAgIH0pKTtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZ29vZ2xlYm90XCIsXG4gICAgICBuYW1lOiBcImdvb2dsZWJvdFwiLFxuICAgICAgY29udGVudDogXCJpbmRleCxmb2xsb3dcIlxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIGNvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcubW9iaWxlQWx0ZXJuYXRlKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgcmVsOiBcImFsdGVybmF0ZVwiLFxuICAgICAga2V5OiBcIm1vYmlsZUFsdGVybmF0ZVwiLFxuICAgICAgbWVkaWE6IGNvbmZpZy5tb2JpbGVBbHRlcm5hdGUubWVkaWEsXG4gICAgICBocmVmOiBjb25maWcubW9iaWxlQWx0ZXJuYXRlLmhyZWZcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmxhbmd1YWdlQWx0ZXJuYXRlcyAmJiBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmZvckVhY2goZnVuY3Rpb24gKGxhbmd1YWdlQWx0ZXJuYXRlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIHJlbDogXCJhbHRlcm5hdGVcIixcbiAgICAgICAga2V5OiBcImxhbmd1YWdlQWx0ZXJuYXRlLVwiICsgbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZkxhbmcsXG4gICAgICAgIGhyZWZMYW5nOiBsYW5ndWFnZUFsdGVybmF0ZS5ocmVmTGFuZyxcbiAgICAgICAgaHJlZjogbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50d2l0dGVyKSB7XG4gICAgaWYgKGNvbmZpZy50d2l0dGVyLmNhcmRUeXBlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuY2FyZFR5cGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuc2l0ZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIG5hbWU6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy50d2l0dGVyLnNpdGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuaGFuZGxlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuaGFuZGxlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5mYWNlYm9vaykge1xuICAgIGlmIChjb25maWcuZmFjZWJvb2suYXBwSWQpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcImZiOmFwcF9pZFwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJmYjphcHBfaWRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLmZhY2Vib29rLmFwcElkXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5vcGVuR3JhcGgpIHtcbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC51cmwgfHwgY29uZmlnLmNhbm9uaWNhbCkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6dXJsXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOnVybFwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnVybCB8fCBjb25maWcuY2Fub25pY2FsXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudHlwZSkge1xuICAgICAgdmFyIHR5cGUgPSBjb25maWcub3BlbkdyYXBoLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnR5cGVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6dHlwZVwiLFxuICAgICAgICBjb250ZW50OiB0eXBlXG4gICAgICB9KSk7XG5cbiAgICAgIGlmICh0eXBlID09PSAncHJvZmlsZScgJiYgY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInByb2ZpbGU6Zmlyc3RfbmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTpmaXJzdF9uYW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZmlyc3ROYW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5sYXN0TmFtZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJwcm9maWxlOmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTpsYXN0X25hbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5sYXN0TmFtZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUudXNlcm5hbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTp1c2VybmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTp1c2VybmFtZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLnVzZXJuYW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5nZW5kZXIpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTpnZW5kZXJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6Z2VuZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZ2VuZGVyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdib29rJyAmJiBjb25maWcub3BlbkdyYXBoLmJvb2spIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzICYmIGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzLmZvckVhY2goZnVuY3Rpb24gKGF1dGhvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImJvb2s6YXV0aG9yOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOmF1dGhvclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBhdXRob3JcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmJvb2suaXNibikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJib29rOmlzYm5cIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6aXNiblwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5ib29rLmlzYm5cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5ib29rLnJlbGVhc2VEYXRlKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImJvb2s6cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5ib29rLnJlbGVhc2VEYXRlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImJvb2s6dGFnOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOnRhZ1wiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0YWdcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYXJ0aWNsZScgJiYgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUucHVibGlzaGVkVGltZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOnB1Ymxpc2hlZF90aW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOnB1Ymxpc2hlZF90aW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUucHVibGlzaGVkVGltZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUubW9kaWZpZWRUaW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImFydGljbGU6bW9kaWZpZWRfdGltZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTptb2RpZmllZF90aW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUubW9kaWZpZWRUaW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5leHBpcmF0aW9uVGltZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOmV4cGlyYXRpb25fdGltZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTpleHBpcmF0aW9uX3RpbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5leHBpcmF0aW9uVGltZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycyAmJiBjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRob3IsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOmF1dGhvcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTphdXRob3JcIixcbiAgICAgICAgICAgICAgY29udGVudDogYXV0aG9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnNlY3Rpb24pIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTpzZWN0aW9uXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOnNlY3Rpb25cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5zZWN0aW9uXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImFydGljbGU6dGFnOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOnRhZ1wiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0YWdcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgodHlwZSA9PT0gJ3ZpZGVvLm1vdmllJyB8fCB0eXBlID09PSAndmlkZW8uZXBpc29kZScgfHwgdHlwZSA9PT0gJ3ZpZGVvLnR2X3Nob3cnIHx8IHR5cGUgPT09ICd2aWRlby5vdGhlcicpICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8pIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uYWN0b3JzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uYWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uYWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGFjdG9yLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjdG9yLnByb2ZpbGUpIHtcbiAgICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2aWRlbzphY3RvcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzphY3RvclwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdG9yLnByb2ZpbGVcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0b3Iucm9sZSkge1xuICAgICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInZpZGVvOmFjdG9yOnJvbGU6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86YWN0b3I6cm9sZVwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdG9yLnJvbGVcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZGlyZWN0b3JzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZGlyZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZGlyZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdG9yLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidmlkZW86ZGlyZWN0b3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOmRpcmVjdG9yXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGRpcmVjdG9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby53cml0ZXJzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ud3JpdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvLndyaXRlcnMuZm9yRWFjaChmdW5jdGlvbiAod3JpdGVyLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidmlkZW86d3JpdGVyOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzp3cml0ZXJcIixcbiAgICAgICAgICAgICAgY29udGVudDogd3JpdGVyXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5kdXJhdGlvbikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJ2aWRlbzpkdXJhdGlvblwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86ZHVyYXRpb25cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZHVyYXRpb24udG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLnJlbGVhc2VEYXRlKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInZpZGVvOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnJlbGVhc2VEYXRlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8udGFncyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC52aWRlby50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcInZpZGVvOnRhZzowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86dGFnXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRhZ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uc2VyaWVzKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInZpZGVvOnNlcmllc1wiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86c2VyaWVzXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnNlcmllc1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnRpdGxlIHx8IGNvbmZpZy50aXRsZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6dGl0bGVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6dGl0bGVcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC50aXRsZSB8fCB1cGRhdGVkVGl0bGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5kZXNjcmlwdGlvbiB8fCBjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOmRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOmRlc2NyaXB0aW9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguZGVzY3JpcHRpb24gfHwgY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICB9KSk7XG4gICAgfSAvLyBpbWFnZXNcblxuXG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCkge1xuICAgICAgZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGggPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzICYmIGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgY29uZmlnLm9wZW5HcmFwaC5pbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UsIGluZGV4KSB7XG4gICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6MFwiICsgaW5kZXgsXG4gICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2VcIixcbiAgICAgICAgICBjb250ZW50OiBpbWFnZS51cmxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChpbWFnZS5hbHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6YWx0MFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzppbWFnZTphbHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGltYWdlLmFsdFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbWFnZS53aWR0aCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzppbWFnZTp3aWR0aDBcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2U6d2lkdGhcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGltYWdlLndpZHRoLnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6d2lkdGgwXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOmltYWdlOndpZHRoXCIsXG4gICAgICAgICAgICBjb250ZW50OiBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltYWdlLmhlaWdodCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzppbWFnZTpoZWlnaHRcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2U6aGVpZ2h0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBpbWFnZS5oZWlnaHQudG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6aGVpZ2h0XCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOmltYWdlOmhlaWdodFwiLFxuICAgICAgICAgICAgY29udGVudDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0LnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gdmlkZW9zXG5cblxuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoID0gY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0KSB7XG4gICAgICBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQgPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvcyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvcy5sZW5ndGgpIHtcbiAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW9zLmZvckVhY2goZnVuY3Rpb24gKHZpZGVvLCBpbmRleCkge1xuICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAga2V5OiBcIm9nOnZpZGVvOjBcIiArIGluZGV4LFxuICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvXCIsXG4gICAgICAgICAgY29udGVudDogdmlkZW8udXJsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAodmlkZW8uYWx0KSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOmFsdDBcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6dmlkZW86YWx0XCIsXG4gICAgICAgICAgICBjb250ZW50OiB2aWRlby5hbHRcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlkZW8ud2lkdGgpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6dmlkZW86d2lkdGgwXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvOndpZHRoXCIsXG4gICAgICAgICAgICBjb250ZW50OiB2aWRlby53aWR0aC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOndpZHRoMFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlbzp3aWR0aFwiLFxuICAgICAgICAgICAgY29udGVudDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgudG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWRlby5oZWlnaHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6dmlkZW86aGVpZ2h0XCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvOmhlaWdodFwiLFxuICAgICAgICAgICAgY29udGVudDogdmlkZW8uaGVpZ2h0LnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0KSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOmhlaWdodFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlbzpoZWlnaHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5sb2NhbGUpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOmxvY2FsZVwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpsb2NhbGVcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5sb2NhbGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5zaXRlX25hbWUpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnNpdGVfbmFtZVwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpzaXRlX25hbWVcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5zaXRlX25hbWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29uZmlnLmNhbm9uaWNhbCkge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgIHJlbDogXCJjYW5vbmljYWxcIixcbiAgICAgIGhyZWY6IGNvbmZpZy5jYW5vbmljYWwsXG4gICAgICBrZXk6IFwiY2Fub25pY2FsXCJcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmFkZGl0aW9uYWxNZXRhVGFncyAmJiBjb25maWcuYWRkaXRpb25hbE1ldGFUYWdzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcuYWRkaXRpb25hbE1ldGFUYWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGtleTogdGFnLm5hbWUgPyB0YWcubmFtZSA6IHRhZy5wcm9wZXJ0eVxuICAgICAgfSwgdGFnKSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhZ3NUb1JlbmRlcjtcbn07XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShfZGVmYXVsdCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IF9kZWZhdWx0LnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHRpdGxlID0gX3RoaXMkcHJvcHMudGl0bGUsXG4gICAgICAgIHRpdGxlVGVtcGxhdGUgPSBfdGhpcyRwcm9wcy50aXRsZVRlbXBsYXRlLFxuICAgICAgICBfdGhpcyRwcm9wcyRkYW5nZXJvdXMgPSBfdGhpcyRwcm9wcy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4LFxuICAgICAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4ID0gX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF90aGlzJHByb3BzJGRhbmdlcm91cyxcbiAgICAgICAgX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzMiA9IF90aGlzJHByb3BzLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93LFxuICAgICAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyA9IF90aGlzJHByb3BzJGRhbmdlcm91czIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzMixcbiAgICAgICAgZGVzY3JpcHRpb24gPSBfdGhpcyRwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgY2Fub25pY2FsID0gX3RoaXMkcHJvcHMuY2Fub25pY2FsLFxuICAgICAgICBmYWNlYm9vayA9IF90aGlzJHByb3BzLmZhY2Vib29rLFxuICAgICAgICBvcGVuR3JhcGggPSBfdGhpcyRwcm9wcy5vcGVuR3JhcGgsXG4gICAgICAgIGFkZGl0aW9uYWxNZXRhVGFncyA9IF90aGlzJHByb3BzLmFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICAgICAgdHdpdHRlciA9IF90aGlzJHByb3BzLnR3aXR0ZXIsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoID0gX3RoaXMkcHJvcHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCA9IF90aGlzJHByb3BzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCxcbiAgICAgICAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGggPSBfdGhpcyRwcm9wcy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCxcbiAgICAgICAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0ID0gX3RoaXMkcHJvcHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0LFxuICAgICAgICBtb2JpbGVBbHRlcm5hdGUgPSBfdGhpcyRwcm9wcy5tb2JpbGVBbHRlcm5hdGUsXG4gICAgICAgIGxhbmd1YWdlQWx0ZXJuYXRlcyA9IF90aGlzJHByb3BzLmxhbmd1YWdlQWx0ZXJuYXRlcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBidWlsZFRhZ3Moe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGl0bGVUZW1wbGF0ZTogdGl0bGVUZW1wbGF0ZSxcbiAgICAgIGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXg6IGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXgsXG4gICAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdzogZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3csXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBjYW5vbmljYWw6IGNhbm9uaWNhbCxcbiAgICAgIGZhY2Vib29rOiBmYWNlYm9vayxcbiAgICAgIG9wZW5HcmFwaDogb3BlbkdyYXBoLFxuICAgICAgYWRkaXRpb25hbE1ldGFUYWdzOiBhZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgICB0d2l0dGVyOiB0d2l0dGVyLFxuICAgICAgZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg6IGRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoLFxuICAgICAgZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0OiBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQsXG4gICAgICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aDogZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgsXG4gICAgICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQ6IGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCxcbiAgICAgIG1vYmlsZUFsdGVybmF0ZTogbW9iaWxlQWx0ZXJuYXRlLFxuICAgICAgbGFuZ3VhZ2VBbHRlcm5hdGVzOiBsYW5ndWFnZUFsdGVybmF0ZXNcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShDb21wb25lbnQpO1xuXG52YXIgX2RlZmF1bHQkMSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShfZGVmYXVsdCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IF9kZWZhdWx0LnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHRpdGxlID0gX3RoaXMkcHJvcHMudGl0bGUsXG4gICAgICAgIF90aGlzJHByb3BzJG5vaW5kZXggPSBfdGhpcyRwcm9wcy5ub2luZGV4LFxuICAgICAgICBub2luZGV4ID0gX3RoaXMkcHJvcHMkbm9pbmRleCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfdGhpcyRwcm9wcyRub2luZGV4LFxuICAgICAgICBub2ZvbGxvdyA9IF90aGlzJHByb3BzLm5vZm9sbG93LFxuICAgICAgICBkZXNjcmlwdGlvbiA9IF90aGlzJHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYW5vbmljYWwgPSBfdGhpcyRwcm9wcy5jYW5vbmljYWwsXG4gICAgICAgIG9wZW5HcmFwaCA9IF90aGlzJHByb3BzLm9wZW5HcmFwaCxcbiAgICAgICAgZmFjZWJvb2sgPSBfdGhpcyRwcm9wcy5mYWNlYm9vayxcbiAgICAgICAgdHdpdHRlciA9IF90aGlzJHByb3BzLnR3aXR0ZXIsXG4gICAgICAgIGFkZGl0aW9uYWxNZXRhVGFncyA9IF90aGlzJHByb3BzLmFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICAgICAgdGl0bGVUZW1wbGF0ZSA9IF90aGlzJHByb3BzLnRpdGxlVGVtcGxhdGUsXG4gICAgICAgIG1vYmlsZUFsdGVybmF0ZSA9IF90aGlzJHByb3BzLm1vYmlsZUFsdGVybmF0ZSxcbiAgICAgICAgbGFuZ3VhZ2VBbHRlcm5hdGVzID0gX3RoaXMkcHJvcHMubGFuZ3VhZ2VBbHRlcm5hdGVzO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIGJ1aWxkVGFncyh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBub2luZGV4OiBub2luZGV4LFxuICAgICAgbm9mb2xsb3c6IG5vZm9sbG93LFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgY2Fub25pY2FsOiBjYW5vbmljYWwsXG4gICAgICBmYWNlYm9vazogZmFjZWJvb2ssXG4gICAgICBvcGVuR3JhcGg6IG9wZW5HcmFwaCxcbiAgICAgIGFkZGl0aW9uYWxNZXRhVGFnczogYWRkaXRpb25hbE1ldGFUYWdzLFxuICAgICAgdHdpdHRlcjogdHdpdHRlcixcbiAgICAgIHRpdGxlVGVtcGxhdGU6IHRpdGxlVGVtcGxhdGUsXG4gICAgICBtb2JpbGVBbHRlcm5hdGU6IG1vYmlsZUFsdGVybmF0ZSxcbiAgICAgIGxhbmd1YWdlQWx0ZXJuYXRlczogbGFuZ3VhZ2VBbHRlcm5hdGVzXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29tcG9uZW50KTtcblxudmFyIG1hcmt1cCA9IGZ1bmN0aW9uIG1hcmt1cChqc29ubGQpIHtcbiAgcmV0dXJuIHtcbiAgICBfX2h0bWw6IGpzb25sZFxuICB9O1xufTtcblxudmFyIEFydGljbGVKc29uTGQgPSBmdW5jdGlvbiBBcnRpY2xlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgX3JlZiRpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIGltYWdlcyA9IF9yZWYkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaW1hZ2VzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIF9yZWYkZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgICBkYXRlTW9kaWZpZWQgPSBfcmVmJGRhdGVNb2RpZmllZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZU1vZGlmaWVkLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHB1Ymxpc2hlck5hbWUgPSBfcmVmLnB1Ymxpc2hlck5hbWUsXG4gICAgICBwdWJsaXNoZXJMb2dvID0gX3JlZi5wdWJsaXNoZXJMb2dvO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQXJ0aWNsZVxcXCIsXFxuICAgIFxcXCJtYWluRW50aXR5T2ZQYWdlXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJXZWJQYWdlXFxcIixcXG4gICAgICBcXFwiQGlkXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFxcXCJoZWFkbGluZVxcXCI6IFxcXCJcIiArIHRpdGxlICsgXCJcXFwiLFxcbiAgICBcXFwiaW1hZ2VcXFwiOiBbXFxuICAgICAgXCIgKyBpbWFnZXMubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIGltYWdlICsgXCJcXFwiXCI7XG4gIH0pICsgXCJcXG4gICAgIF0sXFxuICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgXFxcImRhdGVNb2RpZmllZFxcXCI6IFxcXCJcIiArIChkYXRlTW9kaWZpZWQgfHwgZGF0ZVB1Ymxpc2hlZCkgKyBcIlxcXCIsXFxuICAgIFxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBlcnNvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBhdXRob3JOYW1lICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFxcXCJwdWJsaXNoZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXJOYW1lICsgXCJcXFwiLFxcbiAgICAgIFxcXCJsb2dvXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkltYWdlT2JqZWN0XFxcIixcXG4gICAgICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXJMb2dvICsgXCJcXFwiXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtYXJ0aWNsZVwiXG4gIH0pKTtcbn07XG5cbnZhciBCcmVhZENydW1iSnNvbkxkID0gZnVuY3Rpb24gQnJlYWRDcnVtYkpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJGl0ZW1MaXN0RWxlbWVudHMgPSBfcmVmLml0ZW1MaXN0RWxlbWVudHMsXG4gICAgICBpdGVtTGlzdEVsZW1lbnRzID0gX3JlZiRpdGVtTGlzdEVsZW1lbnRzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaXRlbUxpc3RFbGVtZW50cztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkJyZWFkY3J1bWJMaXN0XFxcIixcXG4gICAgXFxcIml0ZW1MaXN0RWxlbWVudFxcXCI6IFtcXG4gICAgICBcIiArIGl0ZW1MaXN0RWxlbWVudHMubWFwKGZ1bmN0aW9uIChpdGVtTGlzdEVsZW1lbnQpIHtcbiAgICByZXR1cm4gXCJ7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiTGlzdEl0ZW1cXFwiLFxcbiAgICAgICAgXFxcInBvc2l0aW9uXFxcIjogXCIgKyBpdGVtTGlzdEVsZW1lbnQucG9zaXRpb24gKyBcIixcXG4gICAgICAgIFxcXCJpdGVtXFxcIjoge1xcbiAgICAgICAgICBcXFwiQGlkXFxcIjogXFxcIlwiICsgaXRlbUxpc3RFbGVtZW50Lml0ZW0gKyBcIlxcXCIsXFxuICAgICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgaXRlbUxpc3RFbGVtZW50Lm5hbWUgKyBcIlxcXCJcXG4gICAgICAgIH1cXG4gICAgICB9XCI7XG4gIH0pICsgXCJcXG4gICAgIF1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWJyZWFkY3J1bWJcIlxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRRdWVzdGlvbnMgPSBmdW5jdGlvbiBidWlsZFF1ZXN0aW9ucyhtYWluRW50aXR5KSB7XG4gIHJldHVybiBcIlxcbiAgXCIgKyBtYWluRW50aXR5Lm1hcChmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gXCJ7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlF1ZXN0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHF1ZXN0aW9uLnF1ZXN0aW9uTmFtZSArIFwiXFxcIixcXG4gICAgICBcXFwiYWNjZXB0ZWRBbnN3ZXJcXFwiOiB7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQW5zd2VyXFxcIixcXG4gICAgICAgIFxcXCJ0ZXh0XFxcIjogXFxcIlwiICsgcXVlc3Rpb24uYWNjZXB0ZWRBbnN3ZXJUZXh0ICsgXCJcXFwiXFxuICAgICAgfVxcbiAgfVwiO1xuICB9KTtcbn07XG5cbnZhciBGQVFQYWdlSnNvbkxkID0gZnVuY3Rpb24gRkFRUGFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJG1haW5FbnRpdHkgPSBfcmVmLm1haW5FbnRpdHksXG4gICAgICBtYWluRW50aXR5ID0gX3JlZiRtYWluRW50aXR5ID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkbWFpbkVudGl0eTtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnL1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJGQVFQYWdlXFxcIixcXG4gICAgXFxcIm1haW5FbnRpdHlcXFwiOiBbXCIgKyBidWlsZFF1ZXN0aW9ucyhtYWluRW50aXR5KSArIFwiXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtZmFxLXBhZ2VcIlxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRCYXNlU2FsYXJ5ID0gZnVuY3Rpb24gYnVpbGRCYXNlU2FsYXJ5KGJhc2VTYWxhcnkpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYmFzZVNhbGFyeVxcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk1vbmV0YXJ5QW1vdW50XFxcIixcXG4gICAgXCIgKyAoYmFzZVNhbGFyeS5jdXJyZW5jeSA/IFwiXFxcImN1cnJlbmN5XFxcIjogXFxcIlwiICsgYmFzZVNhbGFyeS5jdXJyZW5jeSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJ2YWx1ZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUXVhbnRpdGF0aXZlVmFsdWVcXFwiLFxcbiAgICAgIFwiICsgKGJhc2VTYWxhcnkudmFsdWUgPyBcIlxcXCJ2YWx1ZVxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudmFsdWUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKGJhc2VTYWxhcnkudW5pdFRleHQgPyBcIlxcXCJ1bml0VGV4dFxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudW5pdFRleHQgKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgSm9iUG9zdGluZ0pzb25MZCA9IGZ1bmN0aW9uIEpvYlBvc3RpbmdKc29uTGQoX3JlZikge1xuICB2YXIgYmFzZVNhbGFyeSA9IF9yZWYuYmFzZVNhbGFyeSxcbiAgICAgIGRhdGVQb3N0ZWQgPSBfcmVmLmRhdGVQb3N0ZWQsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBlbXBsb3ltZW50VHlwZSA9IF9yZWYuZW1wbG95bWVudFR5cGUsXG4gICAgICBoaXJpbmdPcmdhbml6YXRpb24gPSBfcmVmLmhpcmluZ09yZ2FuaXphdGlvbixcbiAgICAgIGpvYkxvY2F0aW9uID0gX3JlZi5qb2JMb2NhdGlvbixcbiAgICAgIGFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzID0gX3JlZi5hcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyxcbiAgICAgIGpvYkxvY2F0aW9uVHlwZSA9IF9yZWYuam9iTG9jYXRpb25UeXBlLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgdmFsaWRUaHJvdWdoID0gX3JlZi52YWxpZFRocm91Z2g7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJKb2JQb3N0aW5nXFxcIixcXG4gICAgXCIgKyAoYmFzZVNhbGFyeSA/IGJ1aWxkQmFzZVNhbGFyeShiYXNlU2FsYXJ5KSA6ICcnKSArIFwiXFxuICAgIFxcXCJkYXRlUG9zdGVkXFxcIjogXFxcIlwiICsgZGF0ZVBvc3RlZCArIFwiXFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFwiICsgKGVtcGxveW1lbnRUeXBlID8gXCJcXFwiZW1wbG95bWVudFR5cGVcXFwiOiBcXFwiXCIgKyBlbXBsb3ltZW50VHlwZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJoaXJpbmdPcmdhbml6YXRpb25cXFwiIDoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCIgOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCIgOiBcXFwiXCIgKyBoaXJpbmdPcmdhbml6YXRpb24ubmFtZSArIFwiXFxcIixcXG4gICAgICBcXFwic2FtZUFzXFxcIiA6IFxcXCJcIiArIGhpcmluZ09yZ2FuaXphdGlvbi5zYW1lQXMgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxuICAgIFxcXCJqb2JMb2NhdGlvblxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGxhY2VcXFwiLFxcbiAgICAgIFxcXCJhZGRyZXNzXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBvc3RhbEFkZHJlc3NcXFwiLFxcbiAgICAgICAgXFxcImFkZHJlc3NMb2NhbGl0eVxcXCI6IFxcXCJcIiArIGpvYkxvY2F0aW9uLmFkZHJlc3NMb2NhbGl0eSArIFwiXFxcIixcXG4gICAgICAgIFxcXCJhZGRyZXNzUmVnaW9uXFxcIjogXFxcIlwiICsgam9iTG9jYXRpb24uYWRkcmVzc1JlZ2lvbiArIFwiXFxcIixcXG4gICAgICAgIFxcXCJwb3N0YWxDb2RlXFxcIiA6IFxcXCJcIiArIGpvYkxvY2F0aW9uLnBvc3RhbENvZGUgKyBcIlxcXCIsXFxuICAgICAgICBcXFwic3RyZWV0QWRkcmVzc1xcXCIgOiBcXFwiXCIgKyBqb2JMb2NhdGlvbi5zdHJlZXRBZGRyZXNzICsgXCJcXFwiLFxcbiAgICAgICAgXFxcImFkZHJlc3NDb3VudHJ5XFxcIiA6IFxcXCJcIiArIGpvYkxvY2F0aW9uLmFkZHJlc3NDb3VudHJ5ICsgXCJcXFwiXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBcIiArIChhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyA/IFwiIFxcXCJhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50c1xcXCI6IHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJDb3VudHJ5XFxcIixcXG4gICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHMgKyBcIlxcXCJcXG4gICAgfSxcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGpvYkxvY2F0aW9uVHlwZSA/IFwiXFxcImpvYkxvY2F0aW9uVHlwZVxcXCI6IFxcXCJcIiArIGpvYkxvY2F0aW9uVHlwZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHZhbGlkVGhyb3VnaCA/IFwiXFxcInZhbGlkVGhyb3VnaFxcXCI6IFxcXCJcIiArIHZhbGlkVGhyb3VnaCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJ0aXRsZVxcXCI6IFxcXCJcIiArIHRpdGxlICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1qb2JQb3N0aW5nXCJcbiAgfSkpO1xufTtcblxudmFyIEJsb2dKc29uTGQgPSBmdW5jdGlvbiBCbG9nSnNvbkxkKF9yZWYpIHtcbiAgdmFyIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgX3JlZiRpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIGltYWdlcyA9IF9yZWYkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaW1hZ2VzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIF9yZWYkZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgICBkYXRlTW9kaWZpZWQgPSBfcmVmJGRhdGVNb2RpZmllZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZU1vZGlmaWVkLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbjtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkJsb2dcXFwiLFxcbiAgICBcXFwibWFpbkVudGl0eU9mUGFnZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiV2ViUGFnZVxcXCIsXFxuICAgICAgXFxcIkBpZFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwiaGVhZGxpbmVcXFwiOiBcXFwiXCIgKyB0aXRsZSArIFwiXFxcIixcXG4gICAgXFxcImltYWdlXFxcIjogW1xcbiAgICAgIFwiICsgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICB9KSArIFwiXFxuICAgICBdLFxcbiAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlTW9kaWZpZWRcXFwiOiBcXFwiXCIgKyAoZGF0ZU1vZGlmaWVkIHx8IGRhdGVQdWJsaXNoZWQpICsgXCJcXFwiLFxcbiAgICBcXFwiYXV0aG9yXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYXV0aG9yTmFtZSArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtYmxvZ1wiXG4gIH0pKTtcbn07XG5cbnZhciBDb3Vyc2VKc29uTGQgPSBmdW5jdGlvbiBDb3Vyc2VKc29uTGQoX3JlZikge1xuICB2YXIgY291cnNlTmFtZSA9IF9yZWYuY291cnNlTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHByb3ZpZGVyTmFtZSA9IF9yZWYucHJvdmlkZXJOYW1lLFxuICAgICAgcHJvdmlkZXJVcmwgPSBfcmVmLnByb3ZpZGVyVXJsO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQ291cnNlXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBjb3Vyc2VOYW1lICsgXCJcXFwiLFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcXG4gICAgXFxcInByb3ZpZGVyXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcmdhbml6YXRpb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcHJvdmlkZXJOYW1lICsgXCJcXFwiXCIgKyAocHJvdmlkZXJVcmwgPyBcIixcXG4gICAgICBcXFwic2FtZUFzXFxcIjogXFxcIlwiICsgcHJvdmlkZXJVcmwgKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWNvdXJzZVwiXG4gIH0pKTtcbn07XG5cbnZhciBEYXRhc2V0SnNvbkxkID0gZnVuY3Rpb24gRGF0YXNldEpzb25MZChfcmVmKSB7XG4gIHZhciBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgbGljZW5zZSA9IF9yZWYubGljZW5zZTtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkRhdGFzZXRcXFwiLFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXCIgKyAobGljZW5zZSA/IFwiLFxcbiAgICAgICAgXFxcImxpY2Vuc2VcXFwiOiBcXFwiXCIgKyBsaWNlbnNlICsgXCJcXFwiXCIgOiAnJykgKyBcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtZGF0YXNldFwiXG4gIH0pKTtcbn07XG5cbnZhciBmb3JtYXRJZkFycmF5ID0gZnVuY3Rpb24gZm9ybWF0SWZBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBcIltcIiArIHZhbHVlLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgdmFsICsgXCJcXFwiXCI7XG4gIH0pICsgXCJdXCIgOiBcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCI7XG59O1xuXG52YXIgYnVpbGRBZGRyZXNzID0gKGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImFkZHJlc3NcXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQb3N0YWxBZGRyZXNzXFxcIixcXG4gICAgXFxcInN0cmVldEFkZHJlc3NcXFwiOiBcXFwiXCIgKyBhZGRyZXNzLnN0cmVldEFkZHJlc3MgKyBcIlxcXCIsXFxuICAgIFxcXCJhZGRyZXNzTG9jYWxpdHlcXFwiOiBcXFwiXCIgKyBhZGRyZXNzLmFkZHJlc3NMb2NhbGl0eSArIFwiXFxcIixcXG4gICAgXCIgKyAoYWRkcmVzcy5hZGRyZXNzUmVnaW9uID8gXCJcXFwiYWRkcmVzc1JlZ2lvblxcXCI6IFxcXCJcIiArIGFkZHJlc3MuYWRkcmVzc1JlZ2lvbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJwb3N0YWxDb2RlXFxcIjogXFxcIlwiICsgYWRkcmVzcy5wb3N0YWxDb2RlICsgXCJcXFwiLFxcbiAgICBcXFwiYWRkcmVzc0NvdW50cnlcXFwiOiBcXFwiXCIgKyBhZGRyZXNzLmFkZHJlc3NDb3VudHJ5ICsgXCJcXFwiXFxuICB9LFxcblwiO1xufSk7XG5cbnZhciBidWlsZEdlbyA9IGZ1bmN0aW9uIGJ1aWxkR2VvKGdlbykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJnZW9cXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJHZW9Db29yZGluYXRlc1xcXCIsXFxuICAgIFxcXCJsYXRpdHVkZVxcXCI6IFxcXCJcIiArIGdlby5sYXRpdHVkZSArIFwiXFxcIixcXG4gICAgXFxcImxvbmdpdHVkZVxcXCI6IFxcXCJcIiArIGdlby5sb25naXR1ZGUgKyBcIlxcXCJcXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgYnVpbGRSYXRpbmcgPSBmdW5jdGlvbiBidWlsZFJhdGluZyhyYXRpbmcpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYWdncmVnYXRlUmF0aW5nXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQWdncmVnYXRlUmF0aW5nXFxcIixcXG4gICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgcmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiLFxcbiAgICBcXFwicmF0aW5nQ291bnRcXFwiOiBcXFwiXCIgKyByYXRpbmcucmF0aW5nQ291bnQgKyBcIlxcXCJcXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgYnVpbGRPcGVuaW5nSG91cnMgPSBmdW5jdGlvbiBidWlsZE9wZW5pbmdIb3VycyhvcGVuaW5nSG91cnMpIHtcbiAgcmV0dXJuIFwiXFxuICB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXFxcIixcXG4gICAgXFxcIm9wZW5zXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLm9wZW5zICsgXCJcXFwiLFxcbiAgICBcXFwiY2xvc2VzXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLmNsb3NlcyArIFwiXFxcIixcXG4gICAgXCIgKyAob3BlbmluZ0hvdXJzLmRheU9mV2VlayA/IFwiXFxcImRheU9mV2Vla1xcXCI6IFwiICsgZm9ybWF0SWZBcnJheShvcGVuaW5nSG91cnMuZGF5T2ZXZWVrKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob3BlbmluZ0hvdXJzLnZhbGlkRnJvbSA/IFwiXFxcInZhbGlkRnJvbVxcXCI6IFxcXCJcIiArIG9wZW5pbmdIb3Vycy52YWxpZEZyb20gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvcGVuaW5nSG91cnMudmFsaWRUaHJvdWdoID8gXCJcXFwidmFsaWRUaHJvdWdoXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLnZhbGlkVGhyb3VnaCArIFwiXFxcIlwiIDogJycpICsgXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBMb2NhbEJ1c2luZXNzSnNvbkxkID0gZnVuY3Rpb24gTG9jYWxCdXNpbmVzc0pzb25MZChfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGVsZXBob25lID0gX3JlZi50ZWxlcGhvbmUsXG4gICAgICBhZGRyZXNzID0gX3JlZi5hZGRyZXNzLFxuICAgICAgZ2VvID0gX3JlZi5nZW8sXG4gICAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIHJhdGluZyA9IF9yZWYucmF0aW5nLFxuICAgICAgcHJpY2VSYW5nZSA9IF9yZWYucHJpY2VSYW5nZSxcbiAgICAgIHNhbWVBcyA9IF9yZWYuc2FtZUFzLFxuICAgICAgb3BlbmluZ0hvdXJzID0gX3JlZi5vcGVuaW5nSG91cnM7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJcIiArIHR5cGUgKyBcIlxcXCIsXFxuICAgIFxcXCJAaWRcXFwiOiBcXFwiXCIgKyBpZCArIFwiXFxcIixcXG4gICAgXCIgKyAoZGVzY3JpcHRpb24gPyBcIlxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAodXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAodGVsZXBob25lID8gXCJcXFwidGVsZXBob25lXFxcIjogXFxcIlwiICsgdGVsZXBob25lICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyBidWlsZEFkZHJlc3MoYWRkcmVzcykgKyBcIlxcbiAgICBcIiArIChnZW8gPyBcIlwiICsgYnVpbGRHZW8oZ2VvKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKHJhdGluZyA/IFwiXCIgKyBidWlsZFJhdGluZyhyYXRpbmcpIDogJycpICsgXCJcXG4gICAgXCIgKyAocHJpY2VSYW5nZSA/IFwiXFxcInByaWNlUmFuZ2VcXFwiOiBcXFwiXCIgKyBwcmljZVJhbmdlICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImltYWdlXFxcIjpcIiArIGZvcm1hdElmQXJyYXkoaW1hZ2VzKSArIFwiLFxcbiAgICBcIiArIChzYW1lQXMgPyBcIlxcXCJzYW1lQXNcXFwiOiBbXCIgKyBzYW1lQXMubWFwKGZ1bmN0aW9uICh1cmwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyB1cmwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIl0sXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvcGVuaW5nSG91cnMgPyBcIlxcXCJvcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShvcGVuaW5nSG91cnMpID8gXCJbXCIgKyBvcGVuaW5nSG91cnMubWFwKGZ1bmN0aW9uIChob3Vycykge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRPcGVuaW5nSG91cnMoaG91cnMpO1xuICB9KSArIFwiXVwiIDogYnVpbGRPcGVuaW5nSG91cnMob3BlbmluZ0hvdXJzKSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtbG9jYWwtYnVzaW5lc3NcIlxuICB9KSk7XG59O1xuXG52YXIgTG9nb0pzb25MZCA9IGZ1bmN0aW9uIExvZ29Kc29uTGQoX3JlZikge1xuICB2YXIgdXJsID0gX3JlZi51cmwsXG4gICAgICBsb2dvID0gX3JlZi5sb2dvO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcXG4gICAgXFxcImxvZ29cXFwiOiBcXFwiXCIgKyBsb2dvICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1sb2dvXCJcbiAgfSkpO1xufTtcblxudmFyIGJ1aWxkQnJhbmQgPSBmdW5jdGlvbiBidWlsZEJyYW5kKGJyYW5kKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImJyYW5kXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJUaGluZ1xcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBicmFuZCArIFwiXFxcIlxcbiAgICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkUmV2aWV3UmF0aW5nID0gZnVuY3Rpb24gYnVpbGRSZXZpZXdSYXRpbmcocmF0aW5nKSB7XG4gIHJldHVybiByYXRpbmcgPyBcIlxcXCJyZXZpZXdSYXRpbmdcXFwiOiB7XFxuICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSYXRpbmdcXFwiLFxcbiAgICAgICAgICBcIiArIChyYXRpbmcuYmVzdFJhdGluZyA/IFwiXFxcImJlc3RSYXRpbmdcXFwiOiBcXFwiXCIgKyByYXRpbmcuYmVzdFJhdGluZyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICAgIFwiICsgKHJhdGluZy53b3JzdFJhdGluZyA/IFwiXFxcIndvcnN0UmF0aW5nXFxcIjogXFxcIlwiICsgcmF0aW5nLndvcnN0UmF0aW5nICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgcmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiXFxuICAgICAgICB9XCIgOiAnJztcbn07XG5cbnZhciBidWlsZEF1dGhvciA9IGZ1bmN0aW9uIGJ1aWxkQXV0aG9yKGF1dGhvcikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgYXV0aG9yLnR5cGUgKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBhdXRob3IubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZFB1Ymxpc2hlciA9IGZ1bmN0aW9uIGJ1aWxkUHVibGlzaGVyKHB1Ymxpc2hlcikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJwdWJsaXNoZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgcHVibGlzaGVyLnR5cGUgKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXIubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZFJldmlld3MgPSBmdW5jdGlvbiBidWlsZFJldmlld3MocmV2aWV3cykge1xuICByZXR1cm4gXCJcXG5cXFwicmV2aWV3XFxcIjogW1xcbiAgXCIgKyByZXZpZXdzLm1hcChmdW5jdGlvbiAocmV2aWV3KSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSZXZpZXdcXFwiLFxcbiAgICAgIFwiICsgKHJldmlldy5hdXRob3IgPyBidWlsZEF1dGhvcihyZXZpZXcuYXV0aG9yKSA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAocmV2aWV3LnB1Ymxpc2hlciA/IGJ1aWxkUHVibGlzaGVyKHJldmlldy5wdWJsaXNoZXIpIDogJycpICsgXCJcXG4gICAgICBcIiArIChyZXZpZXcuZGF0ZVB1Ymxpc2hlZCA/IFwiXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyByZXZpZXcuZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAocmV2aWV3LnJldmlld0JvZHkgPyBcIlxcXCJyZXZpZXdCb2R5XFxcIjogXFxcIlwiICsgcmV2aWV3LnJldmlld0JvZHkgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKHJldmlldy5uYW1lID8gXCJcXFwibmFtZVxcXCI6IFxcXCJcIiArIHJldmlldy5uYW1lICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICBcIiArIGJ1aWxkUmV2aWV3UmF0aW5nKHJldmlldy5yZXZpZXdSYXRpbmcpICsgXCJcXG4gIH1cIjtcbiAgfSkgKyBcIl0sXCI7XG59O1xuXG52YXIgYnVpbGRBZ2dyZWdhdGVSYXRpbmcgPSBmdW5jdGlvbiBidWlsZEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYWdncmVnYXRlUmF0aW5nXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJBZ2dyZWdhdGVSYXRpbmdcXFwiLFxcbiAgICAgIFxcXCJyYXRpbmdWYWx1ZVxcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdWYWx1ZSArIFwiXFxcIixcXG4gICAgICBcXFwicmV2aWV3Q291bnRcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmV2aWV3Q291bnQgKyBcIlxcXCJcXG4gICAgfSxcXG5cIjtcbn07IC8vIFRPRE86IERvY3MgZm9yIG9mZmVycyBpdGVtQ29uZGl0aW9uICYgYXZhaWxhYmlsaXR5XG4vLyBUT0RPOiBTZWxsZXIgdHlwZSwgbWFrZSBkeW5hbWljXG5cblxudmFyIGJ1aWxkT2ZmZXJzID0gZnVuY3Rpb24gYnVpbGRPZmZlcnMob2ZmZXJzKSB7XG4gIHJldHVybiBcIlxcbiAge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT2ZmZXJcXFwiLFxcbiAgICBcXFwicHJpY2VDdXJyZW5jeVxcXCI6IFxcXCJcIiArIG9mZmVycy5wcmljZUN1cnJlbmN5ICsgXCJcXFwiLFxcbiAgICBcIiArIChvZmZlcnMucHJpY2VWYWxpZFVudGlsID8gXCJcXFwicHJpY2VWYWxpZFVudGlsXFxcIjogXFxcIlwiICsgb2ZmZXJzLnByaWNlVmFsaWRVbnRpbCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9mZmVycy5pdGVtQ29uZGl0aW9uID8gXCJcXFwiaXRlbUNvbmRpdGlvblxcXCI6IFxcXCJcIiArIG9mZmVycy5pdGVtQ29uZGl0aW9uICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzLmF2YWlsYWJpbGl0eSA/IFwiXFxcImF2YWlsYWJpbGl0eVxcXCI6IFxcXCJcIiArIG9mZmVycy5hdmFpbGFiaWxpdHkgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlcnMudXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgb2ZmZXJzLnVybCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9mZmVycy5zZWxsZXIgPyBcIlxcbiAgICAgIFxcXCJzZWxsZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBvZmZlcnMuc2VsbGVyLm5hbWUgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXCIgOiAnJykgKyBcIlxcbiAgICBcXFwicHJpY2VcXFwiOiBcXFwiXCIgKyBvZmZlcnMucHJpY2UgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBQcm9kdWN0SnNvbkxkID0gZnVuY3Rpb24gUHJvZHVjdEpzb25MZChfcmVmKSB7XG4gIHZhciBwcm9kdWN0TmFtZSA9IF9yZWYucHJvZHVjdE5hbWUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBza3UgPSBfcmVmLnNrdSxcbiAgICAgIGd0aW44ID0gX3JlZi5ndGluOCxcbiAgICAgIGd0aW4xMyA9IF9yZWYuZ3RpbjEzLFxuICAgICAgZ3RpbjE0ID0gX3JlZi5ndGluMTQsXG4gICAgICBtcG4gPSBfcmVmLm1wbixcbiAgICAgIGJyYW5kID0gX3JlZi5icmFuZCxcbiAgICAgIF9yZWYkcmV2aWV3cyA9IF9yZWYucmV2aWV3cyxcbiAgICAgIHJldmlld3MgPSBfcmVmJHJldmlld3MgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRyZXZpZXdzLFxuICAgICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICBvZmZlcnMgPSBfcmVmLm9mZmVycztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnL1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQcm9kdWN0XFxcIixcXG4gICAgXFxcImltYWdlXFxcIjpcIiArIGZvcm1hdElmQXJyYXkoaW1hZ2VzKSArIFwiLFxcbiAgICBcIiArIChkZXNjcmlwdGlvbiA/IFwiXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChtcG4gPyBcIlxcXCJtcG5cXFwiOiBcXFwiXCIgKyBtcG4gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChza3UgPyBcIlxcXCJza3VcXFwiOiBcXFwiXCIgKyBza3UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChndGluOCA/IFwiXFxcImd0aW44XFxcIjogXFxcIlwiICsgZ3RpbjggKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChndGluMTMgPyBcIlxcXCJndGluMTNcXFwiOiBcXFwiXCIgKyBndGluMTMgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChndGluMTQgPyBcIlxcXCJndGluMTRcXFwiOiBcXFwiXCIgKyBndGluMTQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChicmFuZCA/IGJ1aWxkQnJhbmQoYnJhbmQpIDogJycpICsgXCJcXG4gICAgXCIgKyAocmV2aWV3cy5sZW5ndGggPyBidWlsZFJldmlld3MocmV2aWV3cykgOiAnJykgKyBcIlxcbiAgICBcIiArIChhZ2dyZWdhdGVSYXRpbmcgPyBidWlsZEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpIDogJycpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzID8gXCJcXFwib2ZmZXJzXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShvZmZlcnMpID8gXCJbXCIgKyBvZmZlcnMubWFwKGZ1bmN0aW9uIChvZmZlcikge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRPZmZlcnMob2ZmZXIpO1xuICB9KSArIFwiXVwiIDogYnVpbGRPZmZlcnMob2ZmZXJzKSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcHJvZHVjdE5hbWUgKyBcIlxcXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLXByb2R1Y3RcIlxuICB9KSk7XG59O1xuXG52YXIgU29jaWFsUHJvZmlsZUpzb25MZCA9IGZ1bmN0aW9uIFNvY2lhbFByb2ZpbGVKc29uTGQoX3JlZikge1xuICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIF9yZWYkc2FtZUFzID0gX3JlZi5zYW1lQXMsXG4gICAgICBzYW1lQXMgPSBfcmVmJHNhbWVBcyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHNhbWVBcztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgdHlwZSArIFwiXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLFxcbiAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFxcbiAgICBcXFwic2FtZUFzXFxcIjogW1xcbiAgICAgIFwiICsgc2FtZUFzLm1hcChmdW5jdGlvbiAoc29jaWFsVXJsKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgc29jaWFsVXJsICsgXCJcXFwiXCI7XG4gIH0pICsgXCJcXG4gICAgIF1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLXNvY2lhbFwiXG4gIH0pKTtcbn07XG5cbnZhciBmb3JtYXRJZkFycmF5JDEgPSBmdW5jdGlvbiBmb3JtYXRJZkFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFwiW1wiICsgdmFsdWUubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIl1cIiA6IFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIjtcbn07XG5cbnZhciBidWlsZENvbnRhY3RQb2ludCA9IGZ1bmN0aW9uIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkge1xuICByZXR1cm4gY29udGFjdFBvaW50Lm1hcChmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIHJldHVybiBcIntcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkNvbnRhY3RQb2ludFxcXCIsXFxuICAgIFxcXCJ0ZWxlcGhvbmVcXFwiOiBcXFwiXCIgKyBjb250YWN0LnRlbGVwaG9uZSArIFwiXFxcIixcXG4gICAgXFxcImNvbnRhY3RUeXBlXFxcIjogXFxcIlwiICsgY29udGFjdC5jb250YWN0VHlwZSArIFwiXFxcIlwiICsgKGNvbnRhY3QuYXJlYVNlcnZlZCA/IFwiLFxcbiAgICBcXFwiYXJlYVNlcnZlZFxcXCI6IFwiICsgZm9ybWF0SWZBcnJheSQxKGNvbnRhY3QuYXJlYVNlcnZlZCkgOiAnJykgKyAoY29udGFjdC5hdmFpbGFibGVMYW5ndWFnZSA/IFwiLFxcbiAgICBcXFwiYXZhaWxhYmxlTGFuZ3VhZ2VcXFwiOiBcIiArIGZvcm1hdElmQXJyYXkkMShjb250YWN0LmF2YWlsYWJsZUxhbmd1YWdlKSA6ICcnKSArIChjb250YWN0LmNvbnRhY3RPcHRpb24gPyBcIixcXG4gICAgXFxcImNvbnRhY3RPcHRpb25cXFwiOiBcXFwiXCIgKyBjb250YWN0LmNvbnRhY3RPcHRpb24gKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cIjtcbiAgfSk7XG59O1xuXG52YXIgQ29ycG9yYXRlQ29udGFjdEpzb25MZCA9IGZ1bmN0aW9uIENvcnBvcmF0ZUNvbnRhY3RKc29uTGQoX3JlZikge1xuICB2YXIgdXJsID0gX3JlZi51cmwsXG4gICAgICBsb2dvID0gX3JlZi5sb2dvLFxuICAgICAgY29udGFjdFBvaW50ID0gX3JlZi5jb250YWN0UG9pbnQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcXG4gICAgXCIgKyAobG9nbyA/IFwiXFxcImxvZ29cXFwiOiBcXFwiXCIgKyBsb2dvICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImNvbnRhY3RQb2ludFxcXCI6IFtcIiArIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkgKyBcIl1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWNvcnBvcmF0ZS1jb250YWN0XCJcbiAgfSkpO1xufTtcblxudmFyIE5ld3NBcnRpY2xlSnNvbkxkID0gZnVuY3Rpb24gTmV3c0FydGljbGVKc29uTGQoX3JlZikge1xuICB2YXIgdXJsID0gX3JlZi51cmwsXG4gICAgICB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBzZWN0aW9uID0gX3JlZi5zZWN0aW9uLFxuICAgICAga2V5d29yZHMgPSBfcmVmLmtleXdvcmRzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIF9yZWYkZGF0ZUNyZWF0ZWQgPSBfcmVmLmRhdGVDcmVhdGVkLFxuICAgICAgZGF0ZUNyZWF0ZWQgPSBfcmVmJGRhdGVDcmVhdGVkID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRkYXRlQ3JlYXRlZCxcbiAgICAgIF9yZWYkZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgICBkYXRlTW9kaWZpZWQgPSBfcmVmJGRhdGVNb2RpZmllZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZU1vZGlmaWVkLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIGJvZHkgPSBfcmVmLmJvZHksXG4gICAgICBwdWJsaXNoZXJOYW1lID0gX3JlZi5wdWJsaXNoZXJOYW1lLFxuICAgICAgcHVibGlzaGVyTG9nbyA9IF9yZWYucHVibGlzaGVyTG9nbztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk5ld3NBcnRpY2xlXFxcIixcXG4gICAgXFxcIm1haW5FbnRpdHlPZlBhZ2VcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIldlYlBhZ2VcXFwiLFxcbiAgICAgIFxcXCJAaWRcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxcImhlYWRsaW5lXFxcIjogXFxcIlwiICsgdGl0bGUgKyBcIlxcXCIsXFxuICAgIFxcXCJpbWFnZVxcXCI6IFtcXG4gICAgICBcIiArIGltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgaW1hZ2UgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIlxcbiAgICAgXSxcXG4gICAgXFxcImFydGljbGVTZWN0aW9uXFxcIjpcXFwiXCIgKyBzZWN0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwia2V5d29yZHNcXFwiOiBcXFwiXCIgKyBrZXl3b3JkcyArIFwiXFxcIiwgICAgXFxuICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgXFxcImRhdGVDcmVhdGVkXFxcIjogXFxcIlwiICsgKGRhdGVDcmVhdGVkIHx8IGRhdGVQdWJsaXNoZWQpICsgXCJcXFwiLFxcbiAgICBcXFwiZGF0ZU1vZGlmaWVkXFxcIjogXFxcIlwiICsgKGRhdGVNb2RpZmllZCB8fCBkYXRlUHVibGlzaGVkKSArIFwiXFxcIixcXG4gICAgXFxcImF1dGhvclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGF1dGhvck5hbWUgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxcInB1Ymxpc2hlclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlck5hbWUgKyBcIlxcXCIsXFxuICAgICAgXFxcImxvZ29cXFwiOiB7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiSW1hZ2VPYmplY3RcXFwiLFxcbiAgICAgICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlckxvZ28gKyBcIlxcXCJcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwiYXJ0aWNsZUJvZHlcXFwiOiBcXFwiXCIgKyBib2R5ICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1uZXdzYXJ0aWNsZVwiXG4gIH0pKTtcbn07XG5cbnZhciBidWlsZExvY2F0aW9uID0gZnVuY3Rpb24gYnVpbGRMb2NhdGlvbihsb2NhdGlvbikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJsb2NhdGlvblxcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlBsYWNlXFxcIixcXG4gICAgXCIgKyBidWlsZEFkZHJlc3MobG9jYXRpb24uYWRkcmVzcykgKyBcIlxcbiAgICBcIiArIChsb2NhdGlvbi5zYW1lQXMgPyBcIlxcXCJzYW1lQXNcXFwiOiBcXFwiXCIgKyBsb2NhdGlvbi5zYW1lQXMgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbG9jYXRpb24ubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBFdmVudEpzb25MZCA9IGZ1bmN0aW9uIEV2ZW50SnNvbkxkKF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBzdGFydERhdGUgPSBfcmVmLnN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGUgPSBfcmVmLmVuZERhdGUsXG4gICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiRXZlbnRcXFwiLFxcbiAgICBcXFwic3RhcnREYXRlXFxcIjogXFxcIlwiICsgc3RhcnREYXRlICsgXCJcXFwiLFxcbiAgICBcXFwiZW5kRGF0ZVxcXCI6IFxcXCJcIiArIGVuZERhdGUgKyBcIlxcXCIsXFxuICAgIFwiICsgYnVpbGRMb2NhdGlvbihsb2NhdGlvbikgKyBcIlxcbiAgICBcIiArIChpbWFnZXMgPyBcIlxcXCJpbWFnZVxcXCI6XCIgKyBmb3JtYXRJZkFycmF5KGltYWdlcykgKyBcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAodXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChkZXNjcmlwdGlvbiA/IFwiXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtZXZlbnRcIlxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRBZ2dyZWdhdGVSYXRpbmckMSA9IGZ1bmN0aW9uIGJ1aWxkQWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhZ2dyZWdhdGVSYXRpbmdcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkFnZ3JlZ2F0ZVJhdGluZ1xcXCIsXFxuICAgICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgYWdncmVnYXRlUmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiLFxcbiAgICAgIFxcXCJyYXRpbmdDb3VudFxcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdDb3VudCArIFwiXFxcIlxcbiAgICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiBidWlsZEluc3RydWN0aW9uKGluc3RydWN0aW9uKSB7XG4gIHJldHVybiBcIntcXG4gIFxcXCJAdHlwZVxcXCI6IFxcXCJIb3dUb1N0ZXBcXFwiLFxcbiAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpbnN0cnVjdGlvbi5uYW1lICsgXCJcXFwiLFxcbiAgXFxcInRleHRcXFwiOiBcXFwiXCIgKyBpbnN0cnVjdGlvbi50ZXh0ICsgXCJcXFwiLFxcbiAgXFxcInVybFxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLnVybCArIFwiXFxcIixcXG4gIFxcXCJpbWFnZVxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLmltYWdlICsgXCJcXFwiXFxufVwiO1xufTtcblxudmFyIGJ1aWxkSW50ZXJhY3Rpb25TdGF0aXN0aWMgPSBmdW5jdGlvbiBidWlsZEludGVyYWN0aW9uU3RhdGlzdGljKHdhdGNoQ291bnQpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiaW50ZXJhY3Rpb25TdGF0aXN0aWNcXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJJbnRlcmFjdGlvbkNvdW50ZXJcXFwiLFxcbiAgICBcXFwiaW50ZXJhY3Rpb25UeXBlXFxcIjogeyBcXFwiQHR5cGVcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmcvV2F0Y2hBY3Rpb25cXFwiIH0sXFxuICAgIFxcXCJ1c2VySW50ZXJhY3Rpb25Db3VudFxcXCI6IFwiICsgd2F0Y2hDb3VudCArIFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgYnVpbGRWaWRlbyA9IGZ1bmN0aW9uIGJ1aWxkVmlkZW8odmlkZW8pIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwidmlkZW9cXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlZpZGVvT2JqZWN0XFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHZpZGVvLm5hbWUgKyBcIlxcXCIsXFxuICAgICAgXFxcInRodW1ibmFpbFVybFxcXCI6IFtcXG4gICAgICAgIFwiICsgKHZpZGVvLnRodW1ibmFpbFVybHMgfHwgW10pLm1hcChmdW5jdGlvbiAodGh1bWJuYWlsVXJsKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgdGh1bWJuYWlsVXJsICsgXCJcXFwiXCI7XG4gIH0pLmpvaW4oJywnKSArIFwiXFxuICAgICAgIF0sXFxuICAgICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgdmlkZW8uZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgICAgXFxcImNvbnRlbnRVcmxcXFwiOiBcXFwiXCIgKyB2aWRlby5jb250ZW50VXJsICsgXCJcXFwiLFxcbiAgICAgIFxcXCJ1cGxvYWREYXRlXFxcIjogXFxcIlwiICsgdmlkZW8udXBsb2FkRGF0ZSArIFwiXFxcIixcXG4gICAgICBcXFwiZHVyYXRpb25cXFwiOiBcXFwiXCIgKyB2aWRlby5kdXJhdGlvbiArIFwiXFxcIixcXG4gICAgICBcIiArICh2aWRlby5lbWJlZFVybCA/IFwiXFxcImVtYmVkVXJsXFxcIjogXFxcIlwiICsgdmlkZW8uZW1iZWRVcmwgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgICAgXCIgKyAodmlkZW8uZXhwaXJlcyA/IFwiXFxcImV4cGlyZXNcXFwiOiBcXFwiXCIgKyB2aWRlby5leHBpcmVzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgIFwiICsgKHZpZGVvLndhdGNoQ291bnQgPyBidWlsZEludGVyYWN0aW9uU3RhdGlzdGljKHZpZGVvLndhdGNoQ291bnQpIDogXCJcIikgKyBcIlxcbiAgICB9LFxcblwiO1xufTtcblxudmFyIFJlY2lwZUpzb25MZCA9IGZ1bmN0aW9uIFJlY2lwZUpzb25MZChfcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIF9yZWYkaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgICBpbWFnZXMgPSBfcmVmJGltYWdlcyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGltYWdlcyxcbiAgICAgIGRhdGVQdWJsaXNoZWQgPSBfcmVmLmRhdGVQdWJsaXNoZWQsXG4gICAgICBwcmVwVGltZSA9IF9yZWYucHJlcFRpbWUsXG4gICAgICBjb29rVGltZSA9IF9yZWYuY29va1RpbWUsXG4gICAgICB0b3RhbFRpbWUgPSBfcmVmLnRvdGFsVGltZSxcbiAgICAgIGtleXdvcmRzID0gX3JlZi5rZXl3b3JkcyxcbiAgICAgIHlpZWxkcyA9IF9yZWYueWllbGRzLFxuICAgICAgY2F0ZWdvcnkgPSBfcmVmLmNhdGVnb3J5LFxuICAgICAgY3Vpc2luZSA9IF9yZWYuY3Vpc2luZSxcbiAgICAgIGNhbG9yaWVzID0gX3JlZi5jYWxvcmllcyxcbiAgICAgIGluZ3JlZGllbnRzID0gX3JlZi5pbmdyZWRpZW50cyxcbiAgICAgIGluc3RydWN0aW9ucyA9IF9yZWYuaW5zdHJ1Y3Rpb25zLFxuICAgICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICB2aWRlbyA9IF9yZWYudmlkZW87XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmcvXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlJlY2lwZVxcXCIsXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgXFxcImF1dGhvclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGF1dGhvck5hbWUgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxcImltYWdlXFxcIjogW1xcbiAgICAgIFwiICsgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICB9KS5qb2luKCcsJykgKyBcIlxcbiAgICBdLFxcbiAgICBcIiArIChwcmVwVGltZSA/IFwiXFxcInByZXBUaW1lXFxcIjogXFxcIlwiICsgcHJlcFRpbWUgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGNvb2tUaW1lID8gXCJcXFwiY29va1RpbWVcXFwiOiBcXFwiXCIgKyBjb29rVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAodG90YWxUaW1lID8gXCJcXFwidG90YWxUaW1lXFxcIjogXFxcIlwiICsgdG90YWxUaW1lICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChrZXl3b3JkcyA/IFwiXFxcImtleXdvcmRzXFxcIjogXFxcIlwiICsga2V5d29yZHMgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKHlpZWxkcyA/IFwiXFxcInJlY2lwZVlpZWxkXFxcIjogXFxcIlwiICsgeWllbGRzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChjYXRlZ29yeSA/IFwiXFxcInJlY2lwZUNhdGVnb3J5XFxcIjogXFxcIlwiICsgY2F0ZWdvcnkgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGN1aXNpbmUgPyBcIlxcXCJyZWNpcGVDdWlzaW5lXFxcIjogXFxcIlwiICsgY3Vpc2luZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoY2Fsb3JpZXMgPyBcIlxcXCJudXRyaXRpb25cXFwiOiB7IFxcXCJAdHlwZVxcXCI6IFxcXCJOdXRyaXRpb25JbmZvcm1hdGlvblxcXCIsIFxcXCJjYWxvcmllc1xcXCI6IFxcXCJcIiArIGNhbG9yaWVzICsgXCIgY2Fsb3JpZXNcXFwiIH0sXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGFnZ3JlZ2F0ZVJhdGluZyA/IGJ1aWxkQWdncmVnYXRlUmF0aW5nJDEoYWdncmVnYXRlUmF0aW5nKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKHZpZGVvID8gYnVpbGRWaWRlbyh2aWRlbykgOiAnJykgKyBcIlxcbiAgICBcXFwicmVjaXBlSW5ncmVkaWVudFxcXCI6IFtcXG4gICAgICBcIiArIGluZ3JlZGllbnRzLm1hcChmdW5jdGlvbiAoaW5ncmVkaWVudCkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIGluZ3JlZGllbnQgKyBcIlxcXCJcIjtcbiAgfSkuam9pbignLCcpICsgXCJcXG4gICAgXSxcXG4gICAgXFxcInJlY2lwZUluc3RydWN0aW9uc1xcXCI6IFtcXG4gICAgICBcIiArIGluc3RydWN0aW9ucy5tYXAoYnVpbGRJbnN0cnVjdGlvbikuam9pbignLCcpICsgXCJcXG4gICAgXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtcmVjaXBlXCJcbiAgfSkpO1xufTtcblxuZXhwb3J0IHsgQXJ0aWNsZUpzb25MZCwgQmxvZ0pzb25MZCwgQnJlYWRDcnVtYkpzb25MZCBhcyBCcmVhZGNydW1iSnNvbkxkLCBDb3Jwb3JhdGVDb250YWN0SnNvbkxkLCBDb3Vyc2VKc29uTGQsIERhdGFzZXRKc29uTGQsIF9kZWZhdWx0IGFzIERlZmF1bHRTZW8sIEV2ZW50SnNvbkxkLCBGQVFQYWdlSnNvbkxkLCBKb2JQb3N0aW5nSnNvbkxkLCBMb2NhbEJ1c2luZXNzSnNvbkxkLCBMb2dvSnNvbkxkLCBOZXdzQXJ0aWNsZUpzb25MZCwgX2RlZmF1bHQkMSBhcyBOZXh0U2VvLCBQcm9kdWN0SnNvbkxkLCBSZWNpcGVKc29uTGQsIFNvY2lhbFByb2ZpbGVKc29uTGQgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vaW5kZXguY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIHRhaWx3aW5kY3NzIHYyLjIuNiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi8vKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcblxcbi8qXFxuRG9jdW1lbnRcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdC1vLXRhYi1zaXplOiA0O1xcblxcdCAgIHRhYi1zaXplOiA0O1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4qL1xcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHN5c3RlbS11aSxcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcblxcdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn0vKipcXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXFxuICogQSB0aGluIGxheWVyIG9uIHRvcCBvZiBub3JtYWxpemUuY3NzIHRoYXQgcHJvdmlkZXMgYSBzdGFydGluZyBwb2ludCBtb3JlXFxuICogc3VpdGFibGUgZm9yIHdlYiBhcHBsaWNhdGlvbnMuXFxuICovXFxuXFxuLyoqXFxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFRhaWx3aW5kIGN1c3RvbSByZXNldCBzdHlsZXNcXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSAod2l0aCBUYWlsd2luZCdzIGRlZmF1bHRcXG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXFxuICogMi4gVXNlIFRhaWx3aW5kJ3MgZGVmYXVsdCBcXFwibm9ybWFsXFxcIiBsaW5lLWhlaWdodCBzbyB0aGUgdXNlciBpc24ndCBmb3JjZWRcXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKipcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxuICpcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXG4gKlxcbiAqXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxuICpcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXG4gKiAgICBzdHlsZXNoZWV0LlxcbiAqXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxuICogb3B0LW91dC5cXG4gKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXG4gKiBub3JtYWxpemUuY3NzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcbiAqL1xcblxcbnByZSxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyoqXFxuICogMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQgYXMgdGhhdCdzXFxuICogICAgdGhlIGJlaGF2aW9yIHlvdSB3YW50IGFsbW9zdCBhbGwgb2YgdGhlIHRpbWUuIEluc3BpcmVkIGJ5XFxuICogICAgQ1NTIFJlbWVkeSwgd2l0aCBgc3ZnYCBhZGRlZCBhcyB3ZWxsLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqIFxcbiAqIDIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZVxcbiAqICAgIHNlbnNpYmx5IGJ5IGRlZmF1bHQgd2hlbiBvdmVycmlkaW5nIGBkaXNwbGF5YCBieSBhZGRpbmcgYVxcbiAqICAgIHV0aWxpdHkgbGlrZSBgaW5saW5lYC5cXG4gKlxcbiAqICAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50aW5nIGVycm9yIGluIHNvbWVcXG4gKiAgICB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiAqIFxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMFxcbiAqL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlXFxuICogdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBFbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50cmFuc2Zvcm0ge1xcblxcdC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuXFx0LS10dy10cmFuc2xhdGUteTogMDtcXG5cXHQtLXR3LXJvdGF0ZTogMDtcXG5cXHQtLXR3LXNrZXcteDogMDtcXG5cXHQtLXR3LXNrZXcteTogMDtcXG5cXHQtLXR3LXNjYWxlLXg6IDE7XFxuXFx0LS10dy1zY2FsZS15OiAxO1xcblxcdC0tdHctdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXR3LXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcblxcbi5ib3JkZXItMiwgLmJvcmRlci1iLTIge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcblxcbi5zaGFkb3ctbGcsIC5zaGFkb3ctMnhsLCAuc2hhZG93LW1kLCAuc21cXFxcOnNoYWRvdy14bCB7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG5cXHQtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDY0MHB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0LmNvbnRhaW5lciB7XFxuXFx0XFx0bWF4LXdpZHRoOiA3NjhweDtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAycmVtO1xcblxcdFxcdHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDEwMjRweDtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDEyODBweDtcXG5cXHR9XFxufVxcbi5wcm9zZSB7XFxuXFx0Y29sb3I6ICMzNzQxNTE7XFxuXFx0bWF4LXdpZHRoOiA2NWNoO1xcbn1cXG4ucHJvc2UgW2NsYXNzfj1cXFwibGVhZFxcXCJdIHtcXG5cXHRjb2xvcjogIzRiNTU2MztcXG5cXHRmb250LXNpemU6IDEuMjVlbTtcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcblxcdG1hcmdpbi10b3A6IDEuMmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuMmVtO1xcbn1cXG4ucHJvc2UgYSB7XFxuXFx0Y29sb3I6ICMxMTE4Mjc7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnByb3NlIHN0cm9uZyB7XFxuXFx0Y29sb3I6ICMxMTE4Mjc7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnByb3NlIG9sW3R5cGU9XFxcIkFcXFwiXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IHVwcGVyLWFscGhhO1xcbn1cXG4ucHJvc2Ugb2xbdHlwZT1cXFwiYVxcXCJdIHtcXG5cXHQtLWxpc3QtY291bnRlci1zdHlsZTogbG93ZXItYWxwaGE7XFxufVxcbi5wcm9zZSBvbFt0eXBlPVxcXCJBXFxcIiBzXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IHVwcGVyLWFscGhhO1xcbn1cXG4ucHJvc2Ugb2xbdHlwZT1cXFwiYVxcXCIgc10ge1xcblxcdC0tbGlzdC1jb3VudGVyLXN0eWxlOiBsb3dlci1hbHBoYTtcXG59XFxuLnByb3NlIG9sW3R5cGU9XFxcIklcXFwiXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IHVwcGVyLXJvbWFuO1xcbn1cXG4ucHJvc2Ugb2xbdHlwZT1cXFwiaVxcXCJdIHtcXG5cXHQtLWxpc3QtY291bnRlci1zdHlsZTogbG93ZXItcm9tYW47XFxufVxcbi5wcm9zZSBvbFt0eXBlPVxcXCJJXFxcIiBzXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IHVwcGVyLXJvbWFuO1xcbn1cXG4ucHJvc2Ugb2xbdHlwZT1cXFwiaVxcXCIgc10ge1xcblxcdC0tbGlzdC1jb3VudGVyLXN0eWxlOiBsb3dlci1yb21hbjtcXG59XFxuLnByb3NlIG9sW3R5cGU9XFxcIjFcXFwiXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IGRlY2ltYWw7XFxufVxcbi5wcm9zZSBvbCA+IGxpIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjc1ZW07XFxufVxcbi5wcm9zZSBvbCA+IGxpOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IGNvdW50ZXIobGlzdC1pdGVtLCBkZWNpbWFsKSBcXFwiLlxcXCI7XFxuXFx0Y29udGVudDogY291bnRlcihsaXN0LWl0ZW0sIHZhcigtLWxpc3QtY291bnRlci1zdHlsZSwgZGVjaW1hbCkpIFxcXCIuXFxcIjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRjb2xvcjogIzZiNzI4MDtcXG5cXHRsZWZ0OiAwO1xcbn1cXG4ucHJvc2UgdWwgPiBsaSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmctbGVmdDogMS43NWVtO1xcbn1cXG4ucHJvc2UgdWwgPiBsaTo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0d2lkdGg6IDAuMzc1ZW07XFxuXFx0aGVpZ2h0OiAwLjM3NWVtO1xcblxcdHRvcDogY2FsYygwLjg3NWVtIC0gMC4xODc1ZW0pO1xcblxcdGxlZnQ6IDAuMjVlbTtcXG59XFxuLnByb3NlIGhyIHtcXG5cXHRib3JkZXItY29sb3I6ICNlNWU3ZWI7XFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogMXB4O1xcblxcdG1hcmdpbi10b3A6IDNlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcbi5wcm9zZSBibG9ja3F1b3RlIHtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRjb2xvcjogIzExMTgyNztcXG5cXHRib3JkZXItbGVmdC13aWR0aDogMC4yNXJlbTtcXG5cXHRib3JkZXItbGVmdC1jb2xvcjogI2U1ZTdlYjtcXG5cXHRxdW90ZXM6IFxcXCJcXFxcMjAxQ1xcXCJcXFwiXFxcXDIwMURcXFwiXFxcIlxcXFwyMDE4XFxcIlxcXCJcXFxcMjAxOVxcXCI7XFxuXFx0bWFyZ2luLXRvcDogMS42ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMS42ZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAxZW07XFxufVxcbi5wcm9zZSBibG9ja3F1b3RlIHA6Zmlyc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBvcGVuLXF1b3RlO1xcbn1cXG4ucHJvc2UgYmxvY2txdW90ZSBwOmxhc3Qtb2YtdHlwZTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xcbn1cXG4ucHJvc2UgaDEge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0Zm9udC1zaXplOiAyLjI1ZW07XFxuXFx0bWFyZ2luLXRvcDogMDtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjg4ODg4ODllbTtcXG5cXHRsaW5lLWhlaWdodDogMS4xMTExMTExO1xcbn1cXG4ucHJvc2UgaDIge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRtYXJnaW4tdG9wOiAyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XFxufVxcbi5wcm9zZSBoMyB7XFxuXFx0Y29sb3I6ICMxMTE4Mjc7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXNpemU6IDEuMjVlbTtcXG5cXHRtYXJnaW4tdG9wOiAxLjZlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcbn1cXG4ucHJvc2UgaDQge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLXRvcDogMS41ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuLnByb3NlIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG5cXHRjb2xvcjogIzZiNzI4MDtcXG5cXHRmb250LXNpemU6IDAuODc1ZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDI4NTcxNDtcXG5cXHRtYXJnaW4tdG9wOiAwLjg1NzE0MjllbTtcXG59XFxuLnByb3NlIGNvZGUge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1zaXplOiAwLjg3NWVtO1xcbn1cXG4ucHJvc2UgY29kZTo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiYFxcXCI7XFxufVxcbi5wcm9zZSBjb2RlOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcImBcXFwiO1xcbn1cXG4ucHJvc2UgYSBjb2RlIHtcXG5cXHRjb2xvcjogIzExMTgyNztcXG59XFxuLnByb3NlIHByZSB7XFxuXFx0Y29sb3I6ICNlNWU3ZWI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNztcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGZvbnQtc2l6ZTogMC44NzVlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43MTQyODU3O1xcblxcdG1hcmdpbi10b3A6IDEuNzE0Mjg1N2VtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuNzE0Mjg1N2VtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcblxcdHBhZGRpbmctdG9wOiAwLjg1NzE0MjllbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxLjE0Mjg1NzFlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC44NTcxNDI5ZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjE0Mjg1NzFlbTtcXG59XFxuLnByb3NlIHByZSBjb2RlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItd2lkdGg6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4ucHJvc2UgcHJlIGNvZGU6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxuLnByb3NlIHByZSBjb2RlOjphZnRlciB7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxuLnByb3NlIHRhYmxlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR0YWJsZS1sYXlvdXQ6IGF1dG87XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRtYXJnaW4tdG9wOiAyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMmVtO1xcblxcdGZvbnQtc2l6ZTogMC44NzVlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43MTQyODU3O1xcbn1cXG4ucHJvc2UgdGhlYWQge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcblxcdGJvcmRlci1ib3R0b20tY29sb3I6ICNkMWQ1ZGI7XFxufVxcbi5wcm9zZSB0aGVhZCB0aCB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjU3MTQyODZlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41NzE0Mjg2ZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjU3MTQyODZlbTtcXG59XFxuLnByb3NlIHRib2R5IHRyIHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2U1ZTdlYjtcXG59XFxuLnByb3NlIHRib2R5IHRyOmxhc3QtY2hpbGQge1xcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxufVxcbi5wcm9zZSB0Ym9keSB0ZCB7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG5cXHRwYWRkaW5nLXRvcDogMC41NzE0Mjg2ZW07XFxuXFx0cGFkZGluZy1yaWdodDogMC41NzE0Mjg2ZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDAuNTcxNDI4NmVtO1xcblxcdHBhZGRpbmctbGVmdDogMC41NzE0Mjg2ZW07XFxufVxcbi5wcm9zZSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1O1xcbn1cXG4ucHJvc2UgcCB7XFxuXFx0bWFyZ2luLXRvcDogMS4yNWVtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuLnByb3NlIGltZyB7XFxuXFx0bWFyZ2luLXRvcDogMmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuLnByb3NlIHZpZGVvIHtcXG5cXHRtYXJnaW4tdG9wOiAyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG4ucHJvc2UgZmlndXJlIHtcXG5cXHRtYXJnaW4tdG9wOiAyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG4ucHJvc2UgZmlndXJlID4gKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ucHJvc2UgaDIgY29kZSB7XFxuXFx0Zm9udC1zaXplOiAwLjg3NWVtO1xcbn1cXG4ucHJvc2UgaDMgY29kZSB7XFxuXFx0Zm9udC1zaXplOiAwLjllbTtcXG59XFxuLnByb3NlIG9sIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjI1ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4yNWVtO1xcbn1cXG4ucHJvc2UgdWwge1xcblxcdG1hcmdpbi10b3A6IDEuMjVlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcbi5wcm9zZSBsaSB7XFxuXFx0bWFyZ2luLXRvcDogMC41ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5wcm9zZSA+IHVsID4gbGkgcCB7XFxuXFx0bWFyZ2luLXRvcDogMC43NWVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNzVlbTtcXG59XFxuLnByb3NlID4gdWwgPiBsaSA+ICo6Zmlyc3QtY2hpbGQge1xcblxcdG1hcmdpbi10b3A6IDEuMjVlbTtcXG59XFxuLnByb3NlID4gdWwgPiBsaSA+ICo6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4yNWVtO1xcbn1cXG4ucHJvc2UgPiBvbCA+IGxpID4gKjpmaXJzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLXRvcDogMS4yNWVtO1xcbn1cXG4ucHJvc2UgPiBvbCA+IGxpID4gKjpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcbi5wcm9zZSB1bCB1bCwgLnByb3NlIHVsIG9sLCAucHJvc2Ugb2wgdWwsIC5wcm9zZSBvbCBvbCB7XFxuXFx0bWFyZ2luLXRvcDogMC43NWVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNzVlbTtcXG59XFxuLnByb3NlIGhyICsgKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlIGgyICsgKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlIGgzICsgKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlIGg0ICsgKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5wcm9zZSB0aGVhZCB0aDpsYXN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG4ucHJvc2UgdGJvZHkgdGQ6Zmlyc3QtY2hpbGQge1xcblxcdHBhZGRpbmctbGVmdDogMDtcXG59XFxuLnByb3NlIHRib2R5IHRkOmxhc3QtY2hpbGQge1xcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbi5wcm9zZSA+IDpmaXJzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlID4gOmxhc3QtY2hpbGQge1xcblxcdG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5wcm9zZS1sZyB7XFxuXFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43Nzc3Nzc4O1xcbn1cXG4ucHJvc2UtbGcgcCB7XFxuXFx0bWFyZ2luLXRvcDogMS4zMzMzMzMzZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4zMzMzMzMzZW07XFxufVxcbi5wcm9zZS1sZyBbY2xhc3N+PVxcXCJsZWFkXFxcIl0ge1xcblxcdGZvbnQtc2l6ZTogMS4yMjIyMjIyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDU0NTQ1NTtcXG5cXHRtYXJnaW4tdG9wOiAxLjA5MDkwOTFlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjA5MDkwOTFlbTtcXG59XFxuLnByb3NlLWxnIGJsb2NrcXVvdGUge1xcblxcdG1hcmdpbi10b3A6IDEuNjY2NjY2N2VtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuNjY2NjY2N2VtO1xcblxcdHBhZGRpbmctbGVmdDogMWVtO1xcbn1cXG4ucHJvc2UtbGcgaDEge1xcblxcdGZvbnQtc2l6ZTogMi42NjY2NjY3ZW07XFxuXFx0bWFyZ2luLXRvcDogMDtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjgzMzMzMzNlbTtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuLnByb3NlLWxnIGgyIHtcXG5cXHRmb250LXNpemU6IDEuNjY2NjY2N2VtO1xcblxcdG1hcmdpbi10b3A6IDEuODY2NjY2N2VtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuMDY2NjY2N2VtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XFxufVxcbi5wcm9zZS1sZyBoMyB7XFxuXFx0Zm9udC1zaXplOiAxLjMzMzMzMzNlbTtcXG5cXHRtYXJnaW4tdG9wOiAxLjY2NjY2NjdlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjY2NjY2NjdlbTtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcbn1cXG4ucHJvc2UtbGcgaDQge1xcblxcdG1hcmdpbi10b3A6IDEuNzc3Nzc3OGVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNDQ0NDQ0NGVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU1NTU1NTY7XFxufVxcbi5wcm9zZS1sZyBpbWcge1xcblxcdG1hcmdpbi10b3A6IDEuNzc3Nzc3OGVtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuNzc3Nzc3OGVtO1xcbn1cXG4ucHJvc2UtbGcgdmlkZW8ge1xcblxcdG1hcmdpbi10b3A6IDEuNzc3Nzc3OGVtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuNzc3Nzc3OGVtO1xcbn1cXG4ucHJvc2UtbGcgZmlndXJlIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjc3Nzc3NzhlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjc3Nzc3NzhlbTtcXG59XFxuLnByb3NlLWxnIGZpZ3VyZSA+ICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnByb3NlLWxnIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG5cXHRmb250LXNpemU6IDAuODg4ODg4OWVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcbn1cXG4ucHJvc2UtbGcgY29kZSB7XFxuXFx0Zm9udC1zaXplOiAwLjg4ODg4ODllbTtcXG59XFxuLnByb3NlLWxnIGgyIGNvZGUge1xcblxcdGZvbnQtc2l6ZTogMC44NjY2NjY3ZW07XFxufVxcbi5wcm9zZS1sZyBoMyBjb2RlIHtcXG5cXHRmb250LXNpemU6IDAuODc1ZW07XFxufVxcbi5wcm9zZS1sZyBwcmUge1xcblxcdGZvbnQtc2l6ZTogMC44ODg4ODg5ZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzU7XFxuXFx0bWFyZ2luLXRvcDogMmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG5cXHRwYWRkaW5nLXRvcDogMWVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjVlbTtcXG59XFxuLnByb3NlLWxnIG9sIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjMzMzMzMzNlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjMzMzMzMzNlbTtcXG59XFxuLnByb3NlLWxnIHVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjMzMzMzMzNlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjMzMzMzMzNlbTtcXG59XFxuLnByb3NlLWxnIGxpIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjY2NjY2NjdlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjY2NjY2NjdlbTtcXG59XFxuLnByb3NlLWxnIG9sID4gbGkge1xcblxcdHBhZGRpbmctbGVmdDogMS42NjY2NjY3ZW07XFxufVxcbi5wcm9zZS1sZyBvbCA+IGxpOjpiZWZvcmUge1xcblxcdGxlZnQ6IDA7XFxufVxcbi5wcm9zZS1sZyB1bCA+IGxpIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEuNjY2NjY2N2VtO1xcbn1cXG4ucHJvc2UtbGcgdWwgPiBsaTo6YmVmb3JlIHtcXG5cXHR3aWR0aDogMC4zMzMzMzMzZW07XFxuXFx0aGVpZ2h0OiAwLjMzMzMzMzNlbTtcXG5cXHR0b3A6IGNhbGMoMC44ODg4ODg5ZW0gLSAwLjE2NjY2NjdlbSk7XFxuXFx0bGVmdDogMC4yMjIyMjIyZW07XFxufVxcbi5wcm9zZS1sZyA+IHVsID4gbGkgcCB7XFxuXFx0bWFyZ2luLXRvcDogMC44ODg4ODg5ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC44ODg4ODg5ZW07XFxufVxcbi5wcm9zZS1sZyA+IHVsID4gbGkgPiAqOmZpcnN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjMzMzMzMzNlbTtcXG59XFxuLnByb3NlLWxnID4gdWwgPiBsaSA+ICo6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4zMzMzMzMzZW07XFxufVxcbi5wcm9zZS1sZyA+IG9sID4gbGkgPiAqOmZpcnN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjMzMzMzMzNlbTtcXG59XFxuLnByb3NlLWxnID4gb2wgPiBsaSA+ICo6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4zMzMzMzMzZW07XFxufVxcbi5wcm9zZS1sZyB1bCB1bCwgLnByb3NlLWxnIHVsIG9sLCAucHJvc2UtbGcgb2wgdWwsIC5wcm9zZS1sZyBvbCBvbCB7XFxuXFx0bWFyZ2luLXRvcDogMC44ODg4ODg5ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC44ODg4ODg5ZW07XFxufVxcbi5wcm9zZS1sZyBociB7XFxuXFx0bWFyZ2luLXRvcDogMy4xMTExMTExZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMy4xMTExMTExZW07XFxufVxcbi5wcm9zZS1sZyBociArICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyBoMiArICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyBoMyArICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyBoNCArICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyB0YWJsZSB7XFxuXFx0Zm9udC1zaXplOiAwLjg4ODg4ODllbTtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcbn1cXG4ucHJvc2UtbGcgdGhlYWQgdGgge1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC43NWVtO1xcblxcdHBhZGRpbmctbGVmdDogMC43NWVtO1xcbn1cXG4ucHJvc2UtbGcgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xcblxcdHBhZGRpbmctbGVmdDogMDtcXG59XFxuLnByb3NlLWxnIHRoZWFkIHRoOmxhc3QtY2hpbGQge1xcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbi5wcm9zZS1sZyB0Ym9keSB0ZCB7XFxuXFx0cGFkZGluZy10b3A6IDAuNzVlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDAuNzVlbTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcXG59XFxuLnByb3NlLWxnIHRib2R5IHRkOmZpcnN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5wcm9zZS1sZyB0Ym9keSB0ZDpsYXN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG4ucHJvc2UtbGcgPiA6Zmlyc3QtY2hpbGQge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyA+IDpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uc3RhdGljIHtcXG5cXHRwb3NpdGlvbjogc3RhdGljO1xcbn1cXG4uZml4ZWQge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLmFic29sdXRlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5yZWxhdGl2ZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udG9wLTAge1xcblxcdHRvcDogMHB4O1xcbn1cXG4ubGVmdC0wIHtcXG5cXHRsZWZ0OiAwcHg7XFxufVxcbi56LTEwIHtcXG5cXHR6LWluZGV4OiAxMDtcXG59XFxuLi1teC0xIHtcXG5cXHRtYXJnaW4tbGVmdDogLTAuMjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAtMC4yNXJlbTtcXG59XFxuLm14LWF1dG8ge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm15LTYge1xcblxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbi5tbC00IHtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLm1sLTEge1xcblxcdG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbn1cXG4ubXQtMSB7XFxuXFx0bWFyZ2luLXRvcDogMC4yNXJlbTtcXG59XFxuLm1iLTEwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxufVxcbi5tdC0xMCB7XFxuXFx0bWFyZ2luLXRvcDogMi41cmVtO1xcbn1cXG4ubXQtMiB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubXItMiB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5tbC0xMCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG59XFxuLm10LTQge1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5tYi00IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubWItNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG4ubXQtNiB7XFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG4ubWItMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ubWwtMiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuLmJsb2NrIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuLmZsZXgge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oLWZ1bGwge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuLmgtNSB7XFxuXFx0aGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4uaC1zY3JlZW4ge1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcbi5oLTgge1xcblxcdGhlaWdodDogMnJlbTtcXG59XFxuLmgtNiB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxufVxcbi5oLTQge1xcblxcdGhlaWdodDogMXJlbTtcXG59XFxuLmgtMTAge1xcblxcdGhlaWdodDogMi41cmVtO1xcbn1cXG4uaC1hdXRvIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcbi5oLTEyIHtcXG5cXHRoZWlnaHQ6IDNyZW07XFxufVxcbi5oLTMge1xcblxcdGhlaWdodDogMC43NXJlbTtcXG59XFxuLm1heC1oLWZ1bGwge1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcbi5taW4taC1zY3JlZW4ge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4udy0yMCB7XFxuXFx0d2lkdGg6IDVyZW07XFxufVxcbi53LWZ1bGwge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4udy02XFxcXC8xMiB7XFxuXFx0d2lkdGg6IDUwJTtcXG59XFxuLnctNSB7XFxuXFx0d2lkdGg6IDEuMjVyZW07XFxufVxcbi53LXNjcmVlbiB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcbn1cXG4udy1hdXRvIHtcXG5cXHR3aWR0aDogYXV0bztcXG59XFxuLnctOVxcXFwvMTIge1xcblxcdHdpZHRoOiA3NSU7XFxufVxcbi53LTMyIHtcXG5cXHR3aWR0aDogOHJlbTtcXG59XFxuLnctNCB7XFxuXFx0d2lkdGg6IDFyZW07XFxufVxcbi53LTEwIHtcXG5cXHR3aWR0aDogMi41cmVtO1xcbn1cXG4udy04XFxcXC8xMiB7XFxuXFx0d2lkdGg6IDY2LjY2NjY2NyU7XFxufVxcbi53LTMge1xcblxcdHdpZHRoOiAwLjc1cmVtO1xcbn1cXG4ubWF4LXctNXhsIHtcXG5cXHRtYXgtd2lkdGg6IDY0cmVtO1xcbn1cXG4uZmxleC0xIHtcXG5cXHRmbGV4OiAxIDE7XFxufVxcbi5mbGV4LXNocmluay0wIHtcXG5cXHRmbGV4LXNocmluazogMDtcXG59XFxuLnRyYW5zZm9ybSB7XFxuXFx0dHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuXFxuXFx0dG8ge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblxcdH1cXG59XFxuLmFuaW1hdGUtc3BpbiB7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcblxcdCAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLmN1cnNvci1wb2ludGVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saXN0LW5vbmUge1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLmZsZXgtcm93IHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uZmxleC1jb2wge1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mbGV4LXdyYXAge1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLml0ZW1zLXN0YXJ0IHtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLml0ZW1zLWJhc2VsaW5lIHtcXG5cXHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcbi5qdXN0aWZ5LXN0YXJ0IHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5qdXN0aWZ5LWVuZCB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmp1c3RpZnktY2VudGVyIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZ2FwLTYge1xcblxcdGdhcDogMS41cmVtO1xcbn1cXG4uZ2FwLTQge1xcblxcdGdhcDogMXJlbTtcXG59XFxuLmdhcC0xMiB7XFxuXFx0Z2FwOiAzcmVtO1xcbn1cXG4uZ2FwLTEwIHtcXG5cXHRnYXA6IDIuNXJlbTtcXG59XFxuLmdhcC0zIHtcXG5cXHRnYXA6IDAuNzVyZW07XFxufVxcbi5vdmVyZmxvdy1oaWRkZW4ge1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5vdmVyZmxvdy15LXNjcm9sbCB7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4ucm91bmRlZC1tZCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxufVxcbi5yb3VuZGVkLWZ1bGwge1xcblxcdGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG59XFxuLmJvcmRlci0yIHtcXG5cXHRib3JkZXItd2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1iLTIge1xcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1wcmltYXJ5LTYwMCB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoNzksIDcwLCAyMjksIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItd2hpdGUge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItZ3JheS0yMDAge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItZ3JheS0zMDAge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDIwOSwgMjEzLCAyMTksIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItcHJpbWFyeS0zMDAge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE2NSwgMTgwLCAyNTIsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5iZy13aGl0ZSB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctcmVkLTYwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAzOCwgMzgsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXByaW1hcnktNjAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OSwgNzAsIDIyOSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS0xMDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktMjAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ibHVlLTYwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDk5LCAyMzUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXByaW1hcnktODAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSwgNDgsIDE2MywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctcHJpbWFyeS0xMDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjMxLCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktNTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5maWxsLWN1cnJlbnQge1xcblxcdGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuLnN0cm9rZS1jdXJyZW50IHtcXG5cXHRzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG59XFxuLnAtMSB7XFxuXFx0cGFkZGluZzogMC4yNXJlbTtcXG59XFxuLnAtMiB7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcbn1cXG4ucHgtMiB7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG4ucHktMiB7XFxuXFx0cGFkZGluZy10b3A6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ucHktNCB7XFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5weC04IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDJyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuLnB4LTYge1xcblxcdHBhZGRpbmctbGVmdDogMS41cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXG59XFxuLnB5LTEge1xcblxcdHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ucHgtMSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5weS02IHtcXG5cXHRwYWRkaW5nLXRvcDogMS41cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxufVxcbi5weS0yMCB7XFxuXFx0cGFkZGluZy10b3A6IDVyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDVyZW07XFxufVxcbi5weS0xMiB7XFxuXFx0cGFkZGluZy10b3A6IDNyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcbi5weS0xMCB7XFxuXFx0cGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG4ucHgtNCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbi5wdC0xMiB7XFxuXFx0cGFkZGluZy10b3A6IDNyZW07XFxufVxcbi5wYi02IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1cXG4ucGItMTYge1xcblxcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbn1cXG4udGV4dC1sZWZ0IHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4udGV4dC1jZW50ZXIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFsaWduLXRvcCB7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFsaWduLW1pZGRsZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnRleHQtYmFzZSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcbi50ZXh0LXNtIHtcXG5cXHRmb250LXNpemU6IDAuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGV4dC14bCB7XFxuXFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC1sZyB7XFxuXFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuLnRleHQtM3hsIHtcXG5cXHRmb250LXNpemU6IDEuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG4udGV4dC00eGwge1xcblxcdGZvbnQtc2l6ZTogMi4yNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4udGV4dC0yeGwge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG4uZm9udC1zZW1pYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZvbnQtYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZvbnQtbWVkaXVtIHtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG4udXBwZXJjYXNlIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uY2FwaXRhbGl6ZSB7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbi5pdGFsaWMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLnRyYWNraW5nLXdpZGUge1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xcbn1cXG4udGV4dC1wcmltYXJ5LTYwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNzksIDcwLCAyMjksIDEpO1xcblxcdGNvbG9yOiByZ2JhKDc5LCA3MCwgMjI5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcmVkLTEwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjU0LCAyMjYsIDIyNiwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoMjU0LCAyMjYsIDIyNiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXdoaXRlIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG5cXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS03MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDU1LCA2NSwgODEsIDEpO1xcblxcdGNvbG9yOiByZ2JhKDU1LCA2NSwgODEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ibHVlLTYwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMzcsIDk5LCAyMzUsIDEpO1xcblxcdGNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcmVkLTUwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIDEpO1xcblxcdGNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS05MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIDEpO1xcblxcdGNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1wcmltYXJ5LTkwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNDksIDQ2LCAxMjksIDEpO1xcblxcdGNvbG9yOiByZ2JhKDQ5LCA0NiwgMTI5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcHJpbWFyeS03MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDY3LCA1NiwgMjAyLCAxKTtcXG5cXHRjb2xvcjogcmdiYSg2NywgNTYsIDIwMiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWJsdWUtNzAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyOSwgNzgsIDIxNiwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoMjksIDc4LCAyMTYsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udW5kZXJsaW5lIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnNoYWRvdy1sZyB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcblxcdGJveC1zaGFkb3c6IDAgMCAjMDAwMCwgMCAwICMwMDAwLCB2YXIoLS10dy1zaGFkb3cpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctMnhsIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG5cXHRib3gtc2hhZG93OiAwIDAgIzAwMDAsIDAgMCAjMDAwMCwgdmFyKC0tdHctc2hhZG93KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LW1kIHtcXG5cXHQtLXR3LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcblxcdGJveC1zaGFkb3c6IDAgMCAjMDAwMCwgMCAwICMwMDAwLCB2YXIoLS10dy1zaGFkb3cpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgxNywgMjQsIDM5LCAxKTtcXG4gIGNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICB9XFxufVxcbi5yaWNoLXRleHQtaGVybyBhIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgzNywgOTksIDIzNSwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoMzcsIDk5LCAyMzUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ucmljaC10ZXh0LWJhbm5lciB7XFxuXFx0d2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgYSB7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0fVxcbn1cXG4udGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMi4yNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMi41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMzc1O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC50aXRsZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdH1cXG59XFxuLndpdGgtYXJyb3c6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMGZpbGwlM0QlMjJub25lJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlM0UlM0NwYXRoJTIwZCUzRCUyMk0xJTIwNmEuNS41JTIwMCUyMDAlMjAwJTIwMCUyMDFWNnpNMTIuODU0LjY0NmEuNS41JTIwMCUyMDAlMjAwLS43MDguNzA4bC43MDgtLjcwOHpNMTglMjA2LjVsLjM1NC4zNTRhLjUuNSUyMDAlMjAwJTIwMCUyMDAtLjcwOEwxOCUyMDYuNXptLTUuODU0JTIwNS4xNDZhLjUuNSUyMDAlMjAwJTIwMCUyMC43MDguNzA4bC0uNzA4LS43MDh6TTElMjA3aDE2LjVWNkgxdjF6bTE2LjY0Ni0uODU0bC01LjUlMjA1LjUuNzA4LjcwOCUyMDUuNS01LjUtLjcwOC0uNzA4em0tNS41LTQuNzkybDIuNzUlMjAyLjc1LjcwOC0uNzA4LTIuNzUtMi43NS0uNzA4LjcwOHptMi43NSUyMDIuNzVsMi43NSUyMDIuNzUuNzA4LS43MDgtMi43NS0yLjc1LS43MDguNzA4eiUyMiUyMGZpbGwlM0QlMjIlMjMxMjY0QTMlMjIlMkYlM0UlM0MlMkZzdmclM0UpO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTNweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuLmhvdmVyXFxcXDpiZy1wcmltYXJ5LTUwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDI0MiwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6dGV4dC1wcmltYXJ5LTYwMDpob3ZlciB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNzksIDcwLCAyMjksIDEpO1xcblxcdGNvbG9yOiByZ2JhKDc5LCA3MCwgMjI5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LWdyYXktOTAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNywgMjQsIDM5LCAxKTtcXG5cXHRjb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp1bmRlcmxpbmU6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uZm9jdXNcXFxcOmJnLXByaW1hcnktNTA6Zm9jdXMge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjQyLCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzXFxcXDp0ZXh0LXByaW1hcnktNjAwOmZvY3VzIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg3OSwgNzAsIDIyOSwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoNzksIDcwLCAyMjksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxuXFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcblxcdC5zbVxcXFw6bXQtMCB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOm1iLTIge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnNtXFxcXDptdC0zIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwLjc1cmVtO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnctOFxcXFwvMTIge1xcblxcdFxcdHdpZHRoOiA2Ni42NjY2NjclO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOmZsZXgtcm93IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOmdhcC0yMCB7XFxuXFx0XFx0Z2FwOiA1cmVtO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnNlbGYtZW5kIHtcXG5cXHRcXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHR9XFxuXFxuXFx0LnNtXFxcXDpweS0yIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuXFx0fVxcblxcblxcdC5zbVxcXFw6cHgtMTIge1xcblxcdFxcdHBhZGRpbmctbGVmdDogM3JlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnB4LTAge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMHB4O1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDBweDtcXG5cXHR9XFxuXFxuXFx0LnNtXFxcXDpwci04IHtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAycmVtO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnB0LTEyIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogM3JlbTtcXG5cXHR9XFxuXFxuXFx0LnNtXFxcXDpwYi00IHtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnNtXFxcXDp0ZXh0LXNtIHtcXG5cXHRcXHRmb250LXNpemU6IDAuODc1cmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnNoYWRvdy14bCB7XFxuXFx0XFx0LS10dy1zaGFkb3c6IDAgMjBweCAyNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwICMwMDAwLCAwIDAgIzAwMDAsIHZhcigtLXR3LXNoYWRvdyk7XFxuXFx0XFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcblxcdC5tZFxcXFw6bXQtMCB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmJsb2NrIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpmbGV4IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmhpZGRlbiB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDp3LTZcXFxcLzEyIHtcXG5cXHRcXHR3aWR0aDogNTAlO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnctNFxcXFwvMTIge1xcblxcdFxcdHdpZHRoOiAzMy4zMzMzMzMlO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmZsZXgtcm93IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOml0ZW1zLWNlbnRlciB7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpqdXN0aWZ5LWJldHdlZW4ge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpweS0wIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMHB4O1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAwcHg7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6dGV4dC1zbSB7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjg3NXJlbTtcXG5cXHRcXHRsaW5lLWhlaWdodDogMS4yNXJlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG5cXHQubGdcXFxcOm10LTAge1xcblxcdFxcdG1hcmdpbi10b3A6IDBweDtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDp3LWF1dG8ge1xcblxcdFxcdHdpZHRoOiBhdXRvO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOnctNlxcXFwvMTIge1xcblxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6dy00XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDMzLjMzMzMzMyU7XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6dy05XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDc1JTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpmbGV4LXJvdyB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpmbGV4LXJvdy1yZXZlcnNlIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6ZmxleC13cmFwIHtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6anVzdGlmeS1lbmQge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6anVzdGlmeS1jZW50ZXIge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOmp1c3RpZnktYmV0d2VlbiB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOmdhcC0yMCB7XFxuXFx0XFx0Z2FwOiA1cmVtO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOnByLTYge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvaW5kZXguY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzLyUzQ2lucHV0JTIwY3NzJTIwSkdVVFFTJTNFXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzLyUzQ2lucHV0JTIwY3NzJTIwS1V1NWVTJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnRUFBYyxDQUFkLDhGQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7Q0FBYzs7QUFBZDs7O0NDY0Msc0JBQXNCO0FEZFQ7O0FBQWQ7O0NBQWM7O0FBQWQ7Q0NzQkMsZ0JBQWdCO0NBQ2hCLGNBQVc7SUFBWCxX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QSxpQkFBQTtDSG94REM7O0NHcHhERDtFQUFBLFVBQUE7Q0h3eERDOztDR3h4REQ7RUFBQSxtQkFBQTtDSDR4REM7O0NHNXhERDtFQUFBLDJCQUFBO0NIZ3lEQzs7Q0doeUREO0VBQUEsZUFBQTtDSG95REM7O0NHcHlERDtFQUFBLHlCQUFBO0NId3lEQzs7Q0d4eUREO0VBQUEsdUJBQUE7Q0g0eURDOztDRzV5REQ7RUFBQSw4QkFBQTtDSGd6REM7O0NHaHpERDtFQUFBLFNBQUE7Q0hvekRDOztDR3B6REQ7RUFBQSxxQkFBQTtDSHd6REM7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgQGFwcGx5IHRleHQtZ3JheS05MDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG59XFxuXFxuLnJpY2gtdGV4dC1oZXJvIGEge1xcbiAgQGFwcGx5IHRleHQtYmx1ZS02MDAgdW5kZXJsaW5lO1xcbn1cXG5cXG4ucmljaC10ZXh0LWJhbm5lciB7XFxuICBAYXBwbHkgd2hpdGVzcGFjZS1wcmUtbGluZTtcXG4gIGEge1xcbiAgICBAYXBwbHkgdW5kZXJsaW5lO1xcbiAgfVxcbn1cXG5cXG4udGl0bGUge1xcbiAgQGFwcGx5IHRleHQtNHhsIGxlYWRpbmctc251ZyBmb250LXNlbWlib2xkO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC50aXRsZSB7XFxuICAgIEBhcHBseSB0ZXh0LTV4bDtcXG4gIH1cXG59XFxuXFxuLndpdGgtYXJyb3c6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMGZpbGwlM0QlMjJub25lJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlM0UlM0NwYXRoJTIwZCUzRCUyMk0xJTIwNmEuNS41JTIwMCUyMDAlMjAwJTIwMCUyMDFWNnpNMTIuODU0LjY0NmEuNS41JTIwMCUyMDAlMjAwLS43MDguNzA4bC43MDgtLjcwOHpNMTglMjA2LjVsLjM1NC4zNTRhLjUuNSUyMDAlMjAwJTIwMCUyMDAtLjcwOEwxOCUyMDYuNXptLTUuODU0JTIwNS4xNDZhLjUuNSUyMDAlMjAwJTIwMCUyMC43MDguNzA4bC0uNzA4LS43MDh6TTElMjA3aDE2LjVWNkgxdjF6bTE2LjY0Ni0uODU0bC01LjUlMjA1LjUuNzA4LjcwOCUyMDUuNS01LjUtLjcwOC0uNzA4em0tNS41LTQuNzkybDIuNzUlMjAyLjc1LjcwOC0uNzA4LTIuNzUtMi43NS0uNzA4LjcwOHptMi43NSUyMDIuNzVsMi43NSUyMDIuNzUuNzA4LS43MDgtMi43NS0yLjc1LS43MDguNzA4eiUyMiUyMGZpbGwlM0QlMjIlMjMxMjY0QTMlMjIlMkYlM0UlM0MlMkZzdmclM0UpO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTNweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXCIsXCIvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcblxcbi8qXFxuRG9jdW1lbnRcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdHRhYi1zaXplOiA0O1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4qL1xcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHN5c3RlbS11aSxcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxuXFx0XFx0Q29uc29sYXMsXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxuXFx0XFx0TWVubG8sXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG5UYWJ1bGFyIGRhdGFcXG49PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbiovXFxuXFxudGFibGUge1xcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuRm9ybXNcXG49PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4qL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG5cXHRib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuSW50ZXJhY3RpdmVcXG49PT09PT09PT09PVxcbiovXFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXCIsXCIvKipcXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXFxuICogQSB0aGluIGxheWVyIG9uIHRvcCBvZiBub3JtYWxpemUuY3NzIHRoYXQgcHJvdmlkZXMgYSBzdGFydGluZyBwb2ludCBtb3JlXFxuICogc3VpdGFibGUgZm9yIHdlYiBhcHBsaWNhdGlvbnMuXFxuICovXFxuXFxuLyoqXFxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFRhaWx3aW5kIGN1c3RvbSByZXNldCBzdHlsZXNcXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSAod2l0aCBUYWlsd2luZCdzIGRlZmF1bHRcXG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXFxuICogMi4gVXNlIFRhaWx3aW5kJ3MgZGVmYXVsdCBcXFwibm9ybWFsXFxcIiBsaW5lLWhlaWdodCBzbyB0aGUgdXNlciBpc24ndCBmb3JjZWRcXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5LnNhbnMnLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCIpOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAyICovXFxufVxcblxcblxcbi8qKlxcbiAqIEluaGVyaXQgZm9udC1mYW1pbHkgYW5kIGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhc1xcbiAqIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiAqL1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC5cXG4gKlxcbiAqICAgIFdlIHVzZWQgdG8gc2V0IHRoaXMgaW4gdGhlIGh0bWwgZWxlbWVudCBhbmQgaW5oZXJpdCBmcm9tXFxuICogICAgdGhlIHBhcmVudCBlbGVtZW50IGZvciBldmVyeXRoaW5nIGVsc2UuIFRoaXMgY2F1c2VkIGlzc3Vlc1xcbiAqICAgIGluIHNoYWRvdy1kb20tZW5oYW5jZWQgZWxlbWVudHMgbGlrZSA8ZGV0YWlscz4gd2hlcmUgdGhlIGNvbnRlbnRcXG4gKiAgICBpcyB3cmFwcGVkIGJ5IGEgZGl2IHdpdGggYm94LXNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNFxcbiAqXFxuICpcXG4gKiAyLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC5cXG4gKlxcbiAqICAgIEJ5IGRlZmF1bHQsIHRoZSB3YXkgdGhlIGJyb3dzZXIgc3BlY2lmaWVzIHRoYXQgYW4gZWxlbWVudCBzaG91bGQgaGF2ZSBub1xcbiAqICAgIGJvcmRlciBpcyBieSBzZXR0aW5nIGl0J3MgYm9yZGVyLXN0eWxlIHRvIGBub25lYCBpbiB0aGUgdXNlci1hZ2VudFxcbiAqICAgIHN0eWxlc2hlZXQuXFxuICpcXG4gKiAgICBJbiBvcmRlciB0byBlYXNpbHkgYWRkIGJvcmRlcnMgdG8gZWxlbWVudHMgYnkganVzdCBzZXR0aW5nIHRoZSBgYm9yZGVyLXdpZHRoYFxcbiAqICAgIHByb3BlcnR5LCB3ZSBjaGFuZ2UgdGhlIGRlZmF1bHQgYm9yZGVyLXN0eWxlIGZvciBhbGwgZWxlbWVudHMgdG8gYHNvbGlkYCwgYW5kXFxuICogICAgdXNlIGJvcmRlci13aWR0aCB0byBoaWRlIHRoZW0gaW5zdGVhZC4gVGhpcyB3YXkgb3VyIGBib3JkZXJgIHV0aWxpdGllcyBvbmx5XFxuICogICAgbmVlZCB0byBzZXQgdGhlIGBib3JkZXItd2lkdGhgIHByb3BlcnR5IGluc3RlYWQgb2YgdGhlIGVudGlyZSBgYm9yZGVyYFxcbiAqICAgIHNob3J0aGFuZCwgbWFraW5nIG91ciBib3JkZXIgdXRpbGl0aWVzIG11Y2ggbW9yZSBzdHJhaWdodGZvcndhcmQgdG8gY29tcG9zZS5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNlxcbiAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yOyAvKiAyICovXFxufVxcblxcbi8qXFxuICogRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdFxcbiAqL1xcblxcbmhyIHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuXFxuLyoqXFxuICogVW5kbyB0aGUgYGJvcmRlci1zdHlsZTogbm9uZWAgcmVzZXQgdGhhdCBOb3JtYWxpemUgYXBwbGllcyB0byBpbWFnZXMgc28gdGhhdFxcbiAqIG91ciBgYm9yZGVyLXt3aWR0aH1gIHV0aWxpdGllcyBoYXZlIHRoZSBleHBlY3RlZCBlZmZlY3QuXFxuICpcXG4gKiBUaGUgTm9ybWFsaXplIHJlc2V0IGlzIHVubmVjZXNzYXJ5IGZvciB1cyBzaW5jZSB3ZSBkZWZhdWx0IHRoZSBib3JkZXItd2lkdGhcXG4gKiB0byAwIG9uIGFsbCBlbGVtZW50cy5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9pc3N1ZXMvMzYyXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiB0aGVtZSgnY29sb3JzLmdyYXkuNDAwJywgI2ExYTFhYSk7XFxufVxcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2ZcXG4gKiBvcHQtb3V0LlxcbiAqL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGZvcm0gZWxlbWVudCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gZm9yZ2V0IHRvXFxuICogc3R5bGUgZXhwbGljaXRseSBzbyB5b3UgZG9uJ3QgaW5hZHZlcnRlbnRseSBpbnRyb2R1Y2VcXG4gKiBzdHlsZXMgdGhhdCBkZXZpYXRlIGZyb20geW91ciBkZXNpZ24gc3lzdGVtLiBUaGVzZSBzdHlsZXNcXG4gKiBzdXBwbGVtZW50IGEgcGFydGlhbCByZXNldCB0aGF0IGlzIGFscmVhZHkgYXBwbGllZCBieVxcbiAqIG5vcm1hbGl6ZS5jc3MuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogVXNlIHRoZSBjb25maWd1cmVkICdtb25vJyBmb250IGZhbWlseSBmb3IgZWxlbWVudHMgdGhhdFxcbiAqIGFyZSBleHBlY3RlZCB0byBiZSByZW5kZXJlZCB3aXRoIGEgbW9ub3NwYWNlIGZvbnQsIGZhbGxpbmdcXG4gKiBiYWNrIHRvIHRoZSBzeXN0ZW0gbW9ub3NwYWNlIHN0YWNrIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWRcXG4gKiAnbW9ubycgZm9udCBmYW1pbHkuXFxuICovXFxuXFxucHJlLFxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5Lm1vbm8nLCB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZSk7XFxufVxcblxcbi8qKlxcbiAqIDEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0IGFzIHRoYXQnc1xcbiAqICAgIHRoZSBiZWhhdmlvciB5b3Ugd2FudCBhbG1vc3QgYWxsIG9mIHRoZSB0aW1lLiBJbnNwaXJlZCBieVxcbiAqICAgIENTUyBSZW1lZHksIHdpdGggYHN2Z2AgYWRkZWQgYXMgd2VsbC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKiBcXG4gKiAyLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmVcXG4gKiAgICBzZW5zaWJseSBieSBkZWZhdWx0IHdoZW4gb3ZlcnJpZGluZyBgZGlzcGxheWAgYnkgYWRkaW5nIGFcXG4gKiAgICB1dGlsaXR5IGxpa2UgYGlubGluZWAuXFxuICpcXG4gKiAgICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludGluZyBlcnJvciBpbiBzb21lXFxuICogICAgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4gKiBcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTBcXG4gKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZVxcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZXJyb3InKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsInZhciBoYXNNYXAgPSB0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIE1hcC5wcm90b3R5cGU7XG52YXIgbWFwU2l6ZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIGhhc01hcCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTWFwLnByb3RvdHlwZSwgJ3NpemUnKSA6IG51bGw7XG52YXIgbWFwU2l6ZSA9IGhhc01hcCAmJiBtYXBTaXplRGVzY3JpcHRvciAmJiB0eXBlb2YgbWFwU2l6ZURlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nID8gbWFwU2l6ZURlc2NyaXB0b3IuZ2V0IDogbnVsbDtcbnZhciBtYXBGb3JFYWNoID0gaGFzTWFwICYmIE1hcC5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBoYXNTZXQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nICYmIFNldC5wcm90b3R5cGU7XG52YXIgc2V0U2l6ZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIGhhc1NldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU2V0LnByb3RvdHlwZSwgJ3NpemUnKSA6IG51bGw7XG52YXIgc2V0U2l6ZSA9IGhhc1NldCAmJiBzZXRTaXplRGVzY3JpcHRvciAmJiB0eXBlb2Ygc2V0U2l6ZURlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nID8gc2V0U2l6ZURlc2NyaXB0b3IuZ2V0IDogbnVsbDtcbnZhciBzZXRGb3JFYWNoID0gaGFzU2V0ICYmIFNldC5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBoYXNXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgV2Vha01hcC5wcm90b3R5cGU7XG52YXIgd2Vha01hcEhhcyA9IGhhc1dlYWtNYXAgPyBXZWFrTWFwLnByb3RvdHlwZS5oYXMgOiBudWxsO1xudmFyIGhhc1dlYWtTZXQgPSB0eXBlb2YgV2Vha1NldCA9PT0gJ2Z1bmN0aW9uJyAmJiBXZWFrU2V0LnByb3RvdHlwZTtcbnZhciB3ZWFrU2V0SGFzID0gaGFzV2Vha1NldCA/IFdlYWtTZXQucHJvdG90eXBlLmhhcyA6IG51bGw7XG52YXIgaGFzV2Vha1JlZiA9IHR5cGVvZiBXZWFrUmVmID09PSAnZnVuY3Rpb24nICYmIFdlYWtSZWYucHJvdG90eXBlO1xudmFyIHdlYWtSZWZEZXJlZiA9IGhhc1dlYWtSZWYgPyBXZWFrUmVmLnByb3RvdHlwZS5kZXJlZiA6IG51bGw7XG52YXIgYm9vbGVhblZhbHVlT2YgPSBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mO1xudmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG1hdGNoID0gU3RyaW5nLnByb3RvdHlwZS5tYXRjaDtcbnZhciBiaWdJbnRWYWx1ZU9mID0gdHlwZW9mIEJpZ0ludCA9PT0gJ2Z1bmN0aW9uJyA/IEJpZ0ludC5wcm90b3R5cGUudmFsdWVPZiA6IG51bGw7XG52YXIgZ09QUyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgc3ltVG9TdHJpbmcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnID8gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA6IG51bGw7XG52YXIgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxudmFyIGdQTyA9ICh0eXBlb2YgUmVmbGVjdCA9PT0gJ2Z1bmN0aW9uJyA/IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YgOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YpIHx8IChcbiAgICBbXS5fX3Byb3RvX18gPT09IEFycmF5LnByb3RvdHlwZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG4gICAgICAgID8gZnVuY3Rpb24gKE8pIHtcbiAgICAgICAgICAgIHJldHVybiBPLl9fcHJvdG9fXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuICAgICAgICB9XG4gICAgICAgIDogbnVsbFxuKTtcblxudmFyIGluc3BlY3RDdXN0b20gPSByZXF1aXJlKCcuL3V0aWwuaW5zcGVjdCcpLmN1c3RvbTtcbnZhciBpbnNwZWN0U3ltYm9sID0gaW5zcGVjdEN1c3RvbSAmJiBpc1N5bWJvbChpbnNwZWN0Q3VzdG9tKSA/IGluc3BlY3RDdXN0b20gOiBudWxsO1xudmFyIHRvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJyA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IG51bGw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5zcGVjdF8ob2JqLCBvcHRpb25zLCBkZXB0aCwgc2Vlbikge1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmIChoYXMob3B0cywgJ3F1b3RlU3R5bGUnKSAmJiAob3B0cy5xdW90ZVN0eWxlICE9PSAnc2luZ2xlJyAmJiBvcHRzLnF1b3RlU3R5bGUgIT09ICdkb3VibGUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gXCJxdW90ZVN0eWxlXCIgbXVzdCBiZSBcInNpbmdsZVwiIG9yIFwiZG91YmxlXCInKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgICBoYXMob3B0cywgJ21heFN0cmluZ0xlbmd0aCcpICYmICh0eXBlb2Ygb3B0cy5tYXhTdHJpbmdMZW5ndGggPT09ICdudW1iZXInXG4gICAgICAgICAgICA/IG9wdHMubWF4U3RyaW5nTGVuZ3RoIDwgMCAmJiBvcHRzLm1heFN0cmluZ0xlbmd0aCAhPT0gSW5maW5pdHlcbiAgICAgICAgICAgIDogb3B0cy5tYXhTdHJpbmdMZW5ndGggIT09IG51bGxcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gXCJtYXhTdHJpbmdMZW5ndGhcIiwgaWYgcHJvdmlkZWQsIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLCBJbmZpbml0eSwgb3IgYG51bGxgJyk7XG4gICAgfVxuICAgIHZhciBjdXN0b21JbnNwZWN0ID0gaGFzKG9wdHMsICdjdXN0b21JbnNwZWN0JykgPyBvcHRzLmN1c3RvbUluc3BlY3QgOiB0cnVlO1xuICAgIGlmICh0eXBlb2YgY3VzdG9tSW5zcGVjdCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBcImN1c3RvbUluc3BlY3RcIiwgaWYgcHJvdmlkZWQsIG11c3QgYmUgYHRydWVgIG9yIGBmYWxzZWAnKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGhhcyhvcHRzLCAnaW5kZW50JylcbiAgICAgICAgJiYgb3B0cy5pbmRlbnQgIT09IG51bGxcbiAgICAgICAgJiYgb3B0cy5pbmRlbnQgIT09ICdcXHQnXG4gICAgICAgICYmICEocGFyc2VJbnQob3B0cy5pbmRlbnQsIDEwKSA9PT0gb3B0cy5pbmRlbnQgJiYgb3B0cy5pbmRlbnQgPiAwKVxuICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIFwiaW5kZW50XCIgbXVzdCBiZSBcIlxcXFx0XCIsIGFuIGludGVnZXIgPiAwLCBvciBgbnVsbGAnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIG9iaiA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpbnNwZWN0U3RyaW5nKG9iaiwgb3B0cyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAob2JqID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gSW5maW5pdHkgLyBvYmogPiAwID8gJzAnIDogJy0wJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RyaW5nKG9iaik7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYmlnaW50Jykge1xuICAgICAgICByZXR1cm4gU3RyaW5nKG9iaikgKyAnbic7XG4gICAgfVxuXG4gICAgdmFyIG1heERlcHRoID0gdHlwZW9mIG9wdHMuZGVwdGggPT09ICd1bmRlZmluZWQnID8gNSA6IG9wdHMuZGVwdGg7XG4gICAgaWYgKHR5cGVvZiBkZXB0aCA9PT0gJ3VuZGVmaW5lZCcpIHsgZGVwdGggPSAwOyB9XG4gICAgaWYgKGRlcHRoID49IG1heERlcHRoICYmIG1heERlcHRoID4gMCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ1tBcnJheV0nIDogJ1tPYmplY3RdJztcbiAgICB9XG5cbiAgICB2YXIgaW5kZW50ID0gZ2V0SW5kZW50KG9wdHMsIGRlcHRoKTtcblxuICAgIGlmICh0eXBlb2Ygc2VlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VlbiA9IFtdO1xuICAgIH0gZWxzZSBpZiAoaW5kZXhPZihzZWVuLCBvYmopID49IDApIHtcbiAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0KHZhbHVlLCBmcm9tLCBub0luZGVudCkge1xuICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgc2VlbiA9IHNlZW4uc2xpY2UoKTtcbiAgICAgICAgICAgIHNlZW4ucHVzaChmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9JbmRlbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXdPcHRzID0ge1xuICAgICAgICAgICAgICAgIGRlcHRoOiBvcHRzLmRlcHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGhhcyhvcHRzLCAncXVvdGVTdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgbmV3T3B0cy5xdW90ZVN0eWxlID0gb3B0cy5xdW90ZVN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluc3BlY3RfKHZhbHVlLCBuZXdPcHRzLCBkZXB0aCArIDEsIHNlZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNwZWN0Xyh2YWx1ZSwgb3B0cywgZGVwdGggKyAxLCBzZWVuKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgbmFtZSA9IG5hbWVPZihvYmopO1xuICAgICAgICB2YXIga2V5cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgcmV0dXJuICdbRnVuY3Rpb24nICsgKG5hbWUgPyAnOiAnICsgbmFtZSA6ICcgKGFub255bW91cyknKSArICddJyArIChrZXlzLmxlbmd0aCA+IDAgPyAnIHsgJyArIGtleXMuam9pbignLCAnKSArICcgfScgOiAnJyk7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChvYmopKSB7XG4gICAgICAgIHZhciBzeW1TdHJpbmcgPSBzeW1Ub1N0cmluZy5jYWxsKG9iaik7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyA/IG1hcmtCb3hlZChzeW1TdHJpbmcpIDogc3ltU3RyaW5nO1xuICAgIH1cbiAgICBpZiAoaXNFbGVtZW50KG9iaikpIHtcbiAgICAgICAgdmFyIHMgPSAnPCcgKyBTdHJpbmcob2JqLm5vZGVOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgYXR0cnMgPSBvYmouYXR0cmlidXRlcyB8fCBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcyArPSAnICcgKyBhdHRyc1tpXS5uYW1lICsgJz0nICsgd3JhcFF1b3RlcyhxdW90ZShhdHRyc1tpXS52YWx1ZSksICdkb3VibGUnLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBzICs9ICc+JztcbiAgICAgICAgaWYgKG9iai5jaGlsZE5vZGVzICYmIG9iai5jaGlsZE5vZGVzLmxlbmd0aCkgeyBzICs9ICcuLi4nOyB9XG4gICAgICAgIHMgKz0gJzwvJyArIFN0cmluZyhvYmoubm9kZU5hbWUpLnRvTG93ZXJDYXNlKCkgKyAnPic7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGlmIChvYmoubGVuZ3RoID09PSAwKSB7IHJldHVybiAnW10nOyB9XG4gICAgICAgIHZhciB4cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgaWYgKGluZGVudCAmJiAhc2luZ2xlTGluZVZhbHVlcyh4cykpIHtcbiAgICAgICAgICAgIHJldHVybiAnWycgKyBpbmRlbnRlZEpvaW4oeHMsIGluZGVudCkgKyAnXSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdbICcgKyB4cy5qb2luKCcsICcpICsgJyBdJztcbiAgICB9XG4gICAgaWYgKGlzRXJyb3Iob2JqKSkge1xuICAgICAgICB2YXIgcGFydHMgPSBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHsgcmV0dXJuICdbJyArIFN0cmluZyhvYmopICsgJ10nOyB9XG4gICAgICAgIHJldHVybiAneyBbJyArIFN0cmluZyhvYmopICsgJ10gJyArIHBhcnRzLmpvaW4oJywgJykgKyAnIH0nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgY3VzdG9tSW5zcGVjdCkge1xuICAgICAgICBpZiAoaW5zcGVjdFN5bWJvbCAmJiB0eXBlb2Ygb2JqW2luc3BlY3RTeW1ib2xdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2luc3BlY3RTeW1ib2xdKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iai5pbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLmluc3BlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNNYXAob2JqKSkge1xuICAgICAgICB2YXIgbWFwUGFydHMgPSBbXTtcbiAgICAgICAgbWFwRm9yRWFjaC5jYWxsKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIG1hcFBhcnRzLnB1c2goaW5zcGVjdChrZXksIG9iaiwgdHJ1ZSkgKyAnID0+ICcgKyBpbnNwZWN0KHZhbHVlLCBvYmopKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uT2YoJ01hcCcsIG1hcFNpemUuY2FsbChvYmopLCBtYXBQYXJ0cywgaW5kZW50KTtcbiAgICB9XG4gICAgaWYgKGlzU2V0KG9iaikpIHtcbiAgICAgICAgdmFyIHNldFBhcnRzID0gW107XG4gICAgICAgIHNldEZvckVhY2guY2FsbChvYmosIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc2V0UGFydHMucHVzaChpbnNwZWN0KHZhbHVlLCBvYmopKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uT2YoJ1NldCcsIHNldFNpemUuY2FsbChvYmopLCBzZXRQYXJ0cywgaW5kZW50KTtcbiAgICB9XG4gICAgaWYgKGlzV2Vha01hcChvYmopKSB7XG4gICAgICAgIHJldHVybiB3ZWFrQ29sbGVjdGlvbk9mKCdXZWFrTWFwJyk7XG4gICAgfVxuICAgIGlmIChpc1dlYWtTZXQob2JqKSkge1xuICAgICAgICByZXR1cm4gd2Vha0NvbGxlY3Rpb25PZignV2Vha1NldCcpO1xuICAgIH1cbiAgICBpZiAoaXNXZWFrUmVmKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHdlYWtDb2xsZWN0aW9uT2YoJ1dlYWtSZWYnKTtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChpbnNwZWN0KE51bWJlcihvYmopKSk7XG4gICAgfVxuICAgIGlmIChpc0JpZ0ludChvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoaW5zcGVjdChiaWdJbnRWYWx1ZU9mLmNhbGwob2JqKSkpO1xuICAgIH1cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChib29sZWFuVmFsdWVPZi5jYWxsKG9iaikpO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGluc3BlY3QoU3RyaW5nKG9iaikpKTtcbiAgICB9XG4gICAgaWYgKCFpc0RhdGUob2JqKSAmJiAhaXNSZWdFeHAob2JqKSkge1xuICAgICAgICB2YXIgeXMgPSBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCk7XG4gICAgICAgIHZhciBpc1BsYWluT2JqZWN0ID0gZ1BPID8gZ1BPKG9iaikgPT09IE9iamVjdC5wcm90b3R5cGUgOiBvYmogaW5zdGFuY2VvZiBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG4gICAgICAgIHZhciBwcm90b1RhZyA9IG9iaiBpbnN0YW5jZW9mIE9iamVjdCA/ICcnIDogJ251bGwgcHJvdG90eXBlJztcbiAgICAgICAgdmFyIHN0cmluZ1RhZyA9ICFpc1BsYWluT2JqZWN0ICYmIHRvU3RyaW5nVGFnICYmIE9iamVjdChvYmopID09PSBvYmogJiYgdG9TdHJpbmdUYWcgaW4gb2JqID8gdG9TdHIob2JqKS5zbGljZSg4LCAtMSkgOiBwcm90b1RhZyA/ICdPYmplY3QnIDogJyc7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvclRhZyA9IGlzUGxhaW5PYmplY3QgfHwgdHlwZW9mIG9iai5jb25zdHJ1Y3RvciAhPT0gJ2Z1bmN0aW9uJyA/ICcnIDogb2JqLmNvbnN0cnVjdG9yLm5hbWUgPyBvYmouY29uc3RydWN0b3IubmFtZSArICcgJyA6ICcnO1xuICAgICAgICB2YXIgdGFnID0gY29uc3RydWN0b3JUYWcgKyAoc3RyaW5nVGFnIHx8IHByb3RvVGFnID8gJ1snICsgW10uY29uY2F0KHN0cmluZ1RhZyB8fCBbXSwgcHJvdG9UYWcgfHwgW10pLmpvaW4oJzogJykgKyAnXSAnIDogJycpO1xuICAgICAgICBpZiAoeXMubGVuZ3RoID09PSAwKSB7IHJldHVybiB0YWcgKyAne30nOyB9XG4gICAgICAgIGlmIChpbmRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0YWcgKyAneycgKyBpbmRlbnRlZEpvaW4oeXMsIGluZGVudCkgKyAnfSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhZyArICd7ICcgKyB5cy5qb2luKCcsICcpICsgJyB9JztcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhvYmopO1xufTtcblxuZnVuY3Rpb24gd3JhcFF1b3RlcyhzLCBkZWZhdWx0U3R5bGUsIG9wdHMpIHtcbiAgICB2YXIgcXVvdGVDaGFyID0gKG9wdHMucXVvdGVTdHlsZSB8fCBkZWZhdWx0U3R5bGUpID09PSAnZG91YmxlJyA/ICdcIicgOiBcIidcIjtcbiAgICByZXR1cm4gcXVvdGVDaGFyICsgcyArIHF1b3RlQ2hhcjtcbn1cblxuZnVuY3Rpb24gcXVvdGUocykge1xuICAgIHJldHVybiBTdHJpbmcocykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzRGF0ZShvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzUmVnRXhwKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5mdW5jdGlvbiBpc0Vycm9yKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5mdW5jdGlvbiBpc051bWJlcihvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNCb29sZWFuKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuXG4vLyBTeW1ib2wgYW5kIEJpZ0ludCBkbyBoYXZlIFN5bWJvbC50b1N0cmluZ1RhZyBieSBzcGVjLCBzbyB0aGF0IGNhbid0IGJlIHVzZWQgdG8gZWxpbWluYXRlIGZhbHNlIHBvc2l0aXZlc1xuZnVuY3Rpb24gaXNTeW1ib2wob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCAhc3ltVG9TdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBzeW1Ub1N0cmluZy5jYWxsKG9iaik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0JpZ0ludChvYmopIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCAhYmlnSW50VmFsdWVPZikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJpZ0ludFZhbHVlT2YuY2FsbChvYmopO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgfHwgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5IGluIHRoaXM7IH07XG5mdW5jdGlvbiBoYXMob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufVxuXG5mdW5jdGlvbiB0b1N0cihvYmopIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmopO1xufVxuXG5mdW5jdGlvbiBuYW1lT2YoZikge1xuICAgIGlmIChmLm5hbWUpIHsgcmV0dXJuIGYubmFtZTsgfVxuICAgIHZhciBtID0gbWF0Y2guY2FsbChmdW5jdGlvblRvU3RyaW5nLmNhbGwoZiksIC9eZnVuY3Rpb25cXHMqKFtcXHckXSspLyk7XG4gICAgaWYgKG0pIHsgcmV0dXJuIG1bMV07IH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZih4cywgeCkge1xuICAgIGlmICh4cy5pbmRleE9mKSB7IHJldHVybiB4cy5pbmRleE9mKHgpOyB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKHhzW2ldID09PSB4KSB7IHJldHVybiBpOyB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gaXNNYXAoeCkge1xuICAgIGlmICghbWFwU2l6ZSB8fCAheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBtYXBTaXplLmNhbGwoeCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRTaXplLmNhbGwoeCk7XG4gICAgICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgTWFwOyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNXZWFrTWFwKHgpIHtcbiAgICBpZiAoIXdlYWtNYXBIYXMgfHwgIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgd2Vha01hcEhhcy5jYWxsKHgsIHdlYWtNYXBIYXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2Vha1NldEhhcy5jYWxsKHgsIHdlYWtTZXRIYXMpO1xuICAgICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFdlYWtNYXA7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1dlYWtSZWYoeCkge1xuICAgIGlmICghd2Vha1JlZkRlcmVmIHx8ICF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHdlYWtSZWZEZXJlZi5jYWxsKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNTZXQoeCkge1xuICAgIGlmICghc2V0U2l6ZSB8fCAheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBzZXRTaXplLmNhbGwoeCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtYXBTaXplLmNhbGwoeCk7XG4gICAgICAgIH0gY2F0Y2ggKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgU2V0OyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNXZWFrU2V0KHgpIHtcbiAgICBpZiAoIXdlYWtTZXRIYXMgfHwgIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgd2Vha1NldEhhcy5jYWxsKHgsIHdlYWtTZXRIYXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2Vha01hcEhhcy5jYWxsKHgsIHdlYWtNYXBIYXMpO1xuICAgICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFdlYWtTZXQ7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQoeCkge1xuICAgIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgeCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHgubm9kZU5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB4LmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaW5zcGVjdFN0cmluZyhzdHIsIG9wdHMpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA+IG9wdHMubWF4U3RyaW5nTGVuZ3RoKSB7XG4gICAgICAgIHZhciByZW1haW5pbmcgPSBzdHIubGVuZ3RoIC0gb3B0cy5tYXhTdHJpbmdMZW5ndGg7XG4gICAgICAgIHZhciB0cmFpbGVyID0gJy4uLiAnICsgcmVtYWluaW5nICsgJyBtb3JlIGNoYXJhY3RlcicgKyAocmVtYWluaW5nID4gMSA/ICdzJyA6ICcnKTtcbiAgICAgICAgcmV0dXJuIGluc3BlY3RTdHJpbmcoc3RyLnNsaWNlKDAsIG9wdHMubWF4U3RyaW5nTGVuZ3RoKSwgb3B0cykgKyB0cmFpbGVyO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxuICAgIHZhciBzID0gc3RyLnJlcGxhY2UoLyhbJ1xcXFxdKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvW1xceDAwLVxceDFmXS9nLCBsb3dieXRlKTtcbiAgICByZXR1cm4gd3JhcFF1b3RlcyhzLCAnc2luZ2xlJywgb3B0cyk7XG59XG5cbmZ1bmN0aW9uIGxvd2J5dGUoYykge1xuICAgIHZhciBuID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIHZhciB4ID0ge1xuICAgICAgICA4OiAnYicsXG4gICAgICAgIDk6ICd0JyxcbiAgICAgICAgMTA6ICduJyxcbiAgICAgICAgMTI6ICdmJyxcbiAgICAgICAgMTM6ICdyJ1xuICAgIH1bbl07XG4gICAgaWYgKHgpIHsgcmV0dXJuICdcXFxcJyArIHg7IH1cbiAgICByZXR1cm4gJ1xcXFx4JyArIChuIDwgMHgxMCA/ICcwJyA6ICcnKSArIG4udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG1hcmtCb3hlZChzdHIpIHtcbiAgICByZXR1cm4gJ09iamVjdCgnICsgc3RyICsgJyknO1xufVxuXG5mdW5jdGlvbiB3ZWFrQ29sbGVjdGlvbk9mKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSArICcgeyA/IH0nO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0aW9uT2YodHlwZSwgc2l6ZSwgZW50cmllcywgaW5kZW50KSB7XG4gICAgdmFyIGpvaW5lZEVudHJpZXMgPSBpbmRlbnQgPyBpbmRlbnRlZEpvaW4oZW50cmllcywgaW5kZW50KSA6IGVudHJpZXMuam9pbignLCAnKTtcbiAgICByZXR1cm4gdHlwZSArICcgKCcgKyBzaXplICsgJykgeycgKyBqb2luZWRFbnRyaWVzICsgJ30nO1xufVxuXG5mdW5jdGlvbiBzaW5nbGVMaW5lVmFsdWVzKHhzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5kZXhPZih4c1tpXSwgJ1xcbicpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZW50KG9wdHMsIGRlcHRoKSB7XG4gICAgdmFyIGJhc2VJbmRlbnQ7XG4gICAgaWYgKG9wdHMuaW5kZW50ID09PSAnXFx0Jykge1xuICAgICAgICBiYXNlSW5kZW50ID0gJ1xcdCc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5pbmRlbnQgPT09ICdudW1iZXInICYmIG9wdHMuaW5kZW50ID4gMCkge1xuICAgICAgICBiYXNlSW5kZW50ID0gQXJyYXkob3B0cy5pbmRlbnQgKyAxKS5qb2luKCcgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6IGJhc2VJbmRlbnQsXG4gICAgICAgIHByZXY6IEFycmF5KGRlcHRoICsgMSkuam9pbihiYXNlSW5kZW50KVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGluZGVudGVkSm9pbih4cywgaW5kZW50KSB7XG4gICAgaWYgKHhzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gJyc7IH1cbiAgICB2YXIgbGluZUpvaW5lciA9ICdcXG4nICsgaW5kZW50LnByZXYgKyBpbmRlbnQuYmFzZTtcbiAgICByZXR1cm4gbGluZUpvaW5lciArIHhzLmpvaW4oJywnICsgbGluZUpvaW5lcikgKyAnXFxuJyArIGluZGVudC5wcmV2O1xufVxuXG5mdW5jdGlvbiBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCkge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkob2JqKTtcbiAgICB2YXIgeHMgPSBbXTtcbiAgICBpZiAoaXNBcnIpIHtcbiAgICAgICAgeHMubGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHhzW2ldID0gaGFzKG9iaiwgaSkgPyBpbnNwZWN0KG9ialtpXSwgb2JqKSA6ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBpZiAoIWhhcyhvYmosIGtleSkpIHsgY29udGludWU7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tY29udGludWVcbiAgICAgICAgaWYgKGlzQXJyICYmIFN0cmluZyhOdW1iZXIoa2V5KSkgPT09IGtleSAmJiBrZXkgPCBvYmoubGVuZ3RoKSB7IGNvbnRpbnVlOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLWNvbnRpbnVlXG4gICAgICAgIGlmICgoL1teXFx3JF0vKS50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgIHhzLnB1c2goaW5zcGVjdChrZXksIG9iaikgKyAnOiAnICsgaW5zcGVjdChvYmpba2V5XSwgb2JqKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4cy5wdXNoKGtleSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldLCBvYmopKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGdPUFMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHN5bXMgPSBnT1BTKG9iaik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3ltcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGlzRW51bWVyYWJsZS5jYWxsKG9iaiwgc3ltc1tqXSkpIHtcbiAgICAgICAgICAgICAgICB4cy5wdXNoKCdbJyArIGluc3BlY3Qoc3ltc1tqXSkgKyAnXTogJyArIGluc3BlY3Qob2JqW3N5bXNbal1dLCBvYmopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geHM7XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBwZXJjZW50VHdlbnRpZXMgPSAvJTIwL2c7XG5cbnZhciBGb3JtYXQgPSB7XG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ2RlZmF1bHQnOiBGb3JtYXQuUkZDMzk4NixcbiAgICBmb3JtYXR0ZXJzOiB7XG4gICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2UuY2FsbCh2YWx1ZSwgcGVyY2VudFR3ZW50aWVzLCAnKycpO1xuICAgICAgICB9LFxuICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBSRkMxNzM4OiBGb3JtYXQuUkZDMTczOCxcbiAgICBSRkMzOTg2OiBGb3JtYXQuUkZDMzk4NlxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXRzOiBmb3JtYXRzLFxuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBzdHJpbmdpZnk6IHN0cmluZ2lmeVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgYWxsb3dQcm90b3R5cGVzOiBmYWxzZSxcbiAgICBhbGxvd1NwYXJzZTogZmFsc2UsXG4gICAgYXJyYXlMaW1pdDogMjAsXG4gICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICBjaGFyc2V0U2VudGluZWw6IGZhbHNlLFxuICAgIGNvbW1hOiBmYWxzZSxcbiAgICBkZWNvZGVyOiB1dGlscy5kZWNvZGUsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZGVwdGg6IDUsXG4gICAgaWdub3JlUXVlcnlQcmVmaXg6IGZhbHNlLFxuICAgIGludGVycHJldE51bWVyaWNFbnRpdGllczogZmFsc2UsXG4gICAgcGFyYW1ldGVyTGltaXQ6IDEwMDAsXG4gICAgcGFyc2VBcnJheXM6IHRydWUsXG4gICAgcGxhaW5PYmplY3RzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJiMoXFxkKyk7L2csIGZ1bmN0aW9uICgkMCwgbnVtYmVyU3RyKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KG51bWJlclN0ciwgMTApKTtcbiAgICB9KTtcbn07XG5cbnZhciBwYXJzZUFycmF5VmFsdWUgPSBmdW5jdGlvbiAodmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmNvbW1hICYmIHZhbC5pbmRleE9mKCcsJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdmFsLnNwbGl0KCcsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbn07XG5cbi8vIFRoaXMgaXMgd2hhdCBicm93c2VycyB3aWxsIHN1Ym1pdCB3aGVuIHRoZSDinJMgY2hhcmFjdGVyIG9jY3VycyBpbiBhblxuLy8gYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIGJvZHkgYW5kIHRoZSBlbmNvZGluZyBvZiB0aGUgcGFnZSBjb250YWluaW5nXG4vLyB0aGUgZm9ybSBpcyBpc28tODg1OS0xLCBvciB3aGVuIHRoZSBzdWJtaXR0ZWQgZm9ybSBoYXMgYW4gYWNjZXB0LWNoYXJzZXRcbi8vIGF0dHJpYnV0ZSBvZiBpc28tODg1OS0xLiBQcmVzdW1hYmx5IGFsc28gd2l0aCBvdGhlciBjaGFyc2V0cyB0aGF0IGRvIG5vdCBjb250YWluXG4vLyB0aGUg4pyTIGNoYXJhY3Rlciwgc3VjaCBhcyB1cy1hc2NpaS5cbnZhciBpc29TZW50aW5lbCA9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJzsgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCcmIzEwMDAzOycpXG5cbi8vIFRoZXNlIGFyZSB0aGUgcGVyY2VudC1lbmNvZGVkIHV0Zi04IG9jdGV0cyByZXByZXNlbnRpbmcgYSBjaGVja21hcmssIGluZGljYXRpbmcgdGhhdCB0aGUgcmVxdWVzdCBhY3R1YWxseSBpcyB1dGYtOCBlbmNvZGVkLlxudmFyIGNoYXJzZXRTZW50aW5lbCA9ICd1dGY4PSVFMiU5QyU5Myc7IC8vIGVuY29kZVVSSUNvbXBvbmVudCgn4pyTJylcblxudmFyIHBhcnNlVmFsdWVzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ1ZhbHVlcyhzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIGNsZWFuU3RyID0gb3B0aW9ucy5pZ25vcmVRdWVyeVByZWZpeCA/IHN0ci5yZXBsYWNlKC9eXFw/LywgJycpIDogc3RyO1xuICAgIHZhciBsaW1pdCA9IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09IEluZmluaXR5ID8gdW5kZWZpbmVkIDogb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdDtcbiAgICB2YXIgcGFydHMgPSBjbGVhblN0ci5zcGxpdChvcHRpb25zLmRlbGltaXRlciwgbGltaXQpO1xuICAgIHZhciBza2lwSW5kZXggPSAtMTsgLy8gS2VlcCB0cmFjayBvZiB3aGVyZSB0aGUgdXRmOCBzZW50aW5lbCB3YXMgZm91bmRcbiAgICB2YXIgaTtcblxuICAgIHZhciBjaGFyc2V0ID0gb3B0aW9ucy5jaGFyc2V0O1xuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0c1tpXS5pbmRleE9mKCd1dGY4PScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzW2ldID09PSBjaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0c1tpXSA9PT0gaXNvU2VudGluZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldCA9ICdpc28tODg1OS0xJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2tpcEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBpID0gcGFydHMubGVuZ3RoOyAvLyBUaGUgZXNsaW50IHNldHRpbmdzIGRvIG5vdCBhbGxvdyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoaSA9PT0gc2tpcEluZGV4KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuXG4gICAgICAgIHZhciBicmFja2V0RXF1YWxzUG9zID0gcGFydC5pbmRleE9mKCddPScpO1xuICAgICAgICB2YXIgcG9zID0gYnJhY2tldEVxdWFsc1BvcyA9PT0gLTEgPyBwYXJ0LmluZGV4T2YoJz0nKSA6IGJyYWNrZXRFcXVhbHNQb3MgKyAxO1xuXG4gICAgICAgIHZhciBrZXksIHZhbDtcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0LCAna2V5Jyk7XG4gICAgICAgICAgICB2YWwgPSBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA/IG51bGwgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKDAsIHBvcyksIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQsICdrZXknKTtcbiAgICAgICAgICAgIHZhbCA9IHV0aWxzLm1heWJlTWFwKFxuICAgICAgICAgICAgICAgIHBhcnNlQXJyYXlWYWx1ZShwYXJ0LnNsaWNlKHBvcyArIDEpLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZW5jb2RlZFZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kZWNvZGVyKGVuY29kZWRWYWwsIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQsICd2YWx1ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIG9wdGlvbnMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzICYmIGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAgICAgdmFsID0gaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzKHZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydC5pbmRleE9mKCdbXT0nKSA+IC0xKSB7XG4gICAgICAgICAgICB2YWwgPSBpc0FycmF5KHZhbCkgPyBbdmFsXSA6IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdXRpbHMuY29tYmluZShvYmpba2V5XSwgdmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBwYXJzZU9iamVjdCA9IGZ1bmN0aW9uIChjaGFpbiwgdmFsLCBvcHRpb25zLCB2YWx1ZXNQYXJzZWQpIHtcbiAgICB2YXIgbGVhZiA9IHZhbHVlc1BhcnNlZCA/IHZhbCA6IHBhcnNlQXJyYXlWYWx1ZSh2YWwsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaSA9IGNoYWluLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIHZhciByb290ID0gY2hhaW5baV07XG5cbiAgICAgICAgaWYgKHJvb3QgPT09ICdbXScgJiYgb3B0aW9ucy5wYXJzZUFycmF5cykge1xuICAgICAgICAgICAgb2JqID0gW10uY29uY2F0KGxlYWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdC5jaGFyQXQoMCkgPT09ICdbJyAmJiByb290LmNoYXJBdChyb290Lmxlbmd0aCAtIDEpID09PSAnXScgPyByb290LnNsaWNlKDEsIC0xKSA6IHJvb3Q7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wYXJzZUFycmF5cyAmJiBjbGVhblJvb3QgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb2JqID0geyAwOiBsZWFmIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICFpc05hTihpbmRleClcbiAgICAgICAgICAgICAgICAmJiByb290ICE9PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBTdHJpbmcoaW5kZXgpID09PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBpbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgJiYgKG9wdGlvbnMucGFyc2VBcnJheXMgJiYgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICAgICAgb2JqW2luZGV4XSA9IGxlYWY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsZWFuUm9vdCAhPT0gJ19fcHJvdG9fXycpIHtcbiAgICAgICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IGxlYWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZWFmID0gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiBsZWFmO1xufTtcblxudmFyIHBhcnNlS2V5cyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdLZXlzKGdpdmVuS2V5LCB2YWwsIG9wdGlvbnMsIHZhbHVlc1BhcnNlZCkge1xuICAgIGlmICghZ2l2ZW5LZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBkb3Qgbm90YXRpb24gdG8gYnJhY2tldCBub3RhdGlvblxuICAgIHZhciBrZXkgPSBvcHRpb25zLmFsbG93RG90cyA/IGdpdmVuS2V5LnJlcGxhY2UoL1xcLihbXi5bXSspL2csICdbJDFdJykgOiBnaXZlbktleTtcblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBicmFja2V0cyA9IC8oXFxbW15bXFxdXSpdKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXltcXF1dKl0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBvcHRpb25zLmRlcHRoID4gMCAmJiBicmFja2V0cy5leGVjKGtleSk7XG4gICAgdmFyIHBhcmVudCA9IHNlZ21lbnQgPyBrZXkuc2xpY2UoMCwgc2VnbWVudC5pbmRleCkgOiBrZXk7XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCB1c2luZyBwbGFpbiBvYmplY3RzLCBvcHRpb25hbGx5IHByZWZpeCBrZXlzIHRoYXQgd291bGQgb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHBhcmVudCkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzLnB1c2gocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYXBwZW5kaW5nIHRvIHRoZSBhcnJheSB1bnRpbCB3ZSBoaXQgZGVwdGhcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAob3B0aW9ucy5kZXB0aCA+IDAgJiYgKHNlZ21lbnQgPSBjaGlsZC5leGVjKGtleSkpICE9PSBudWxsICYmIGkgPCBvcHRpb25zLmRlcHRoKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzZWdtZW50WzFdLnNsaWNlKDEsIC0xKSkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMsIHZhbHVlc1BhcnNlZCk7XG59O1xuXG52YXIgbm9ybWFsaXplUGFyc2VPcHRpb25zID0gZnVuY3Rpb24gbm9ybWFsaXplUGFyc2VPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmRlY29kZXIgIT09IG51bGwgJiYgb3B0cy5kZWNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdHMuZGVjb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdEZWNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5jaGFyc2V0ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRzLmNoYXJzZXQgIT09ICd1dGYtOCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNoYXJzZXQgb3B0aW9uIG11c3QgYmUgZWl0aGVyIHV0Zi04LCBpc28tODg1OS0xLCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdmFyIGNoYXJzZXQgPSB0eXBlb2Ygb3B0cy5jaGFyc2V0ID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmNoYXJzZXQgOiBvcHRzLmNoYXJzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxvd0RvdHM6IHR5cGVvZiBvcHRzLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5hbGxvd0RvdHMgOiAhIW9wdHMuYWxsb3dEb3RzLFxuICAgICAgICBhbGxvd1Byb3RvdHlwZXM6IHR5cGVvZiBvcHRzLmFsbG93UHJvdG90eXBlcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hbGxvd1Byb3RvdHlwZXMgOiBkZWZhdWx0cy5hbGxvd1Byb3RvdHlwZXMsXG4gICAgICAgIGFsbG93U3BhcnNlOiB0eXBlb2Ygb3B0cy5hbGxvd1NwYXJzZSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hbGxvd1NwYXJzZSA6IGRlZmF1bHRzLmFsbG93U3BhcnNlLFxuICAgICAgICBhcnJheUxpbWl0OiB0eXBlb2Ygb3B0cy5hcnJheUxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMuYXJyYXlMaW1pdCA6IGRlZmF1bHRzLmFycmF5TGltaXQsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgY29tbWE6IHR5cGVvZiBvcHRzLmNvbW1hID09PSAnYm9vbGVhbicgPyBvcHRzLmNvbW1hIDogZGVmYXVsdHMuY29tbWEsXG4gICAgICAgIGRlY29kZXI6IHR5cGVvZiBvcHRzLmRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRzLmRlY29kZXIgOiBkZWZhdWx0cy5kZWNvZGVyLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgdXRpbHMuaXNSZWdFeHAob3B0cy5kZWxpbWl0ZXIpID8gb3B0cy5kZWxpbWl0ZXIgOiBkZWZhdWx0cy5kZWxpbWl0ZXIsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvbiwgbm8tZXh0cmEtcGFyZW5zXG4gICAgICAgIGRlcHRoOiAodHlwZW9mIG9wdHMuZGVwdGggPT09ICdudW1iZXInIHx8IG9wdHMuZGVwdGggPT09IGZhbHNlKSA/ICtvcHRzLmRlcHRoIDogZGVmYXVsdHMuZGVwdGgsXG4gICAgICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBvcHRzLmlnbm9yZVF1ZXJ5UHJlZml4ID09PSB0cnVlLFxuICAgICAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IHR5cGVvZiBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgOiBkZWZhdWx0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMsXG4gICAgICAgIHBhcmFtZXRlckxpbWl0OiB0eXBlb2Ygb3B0cy5wYXJhbWV0ZXJMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRzLnBhcmFtZXRlckxpbWl0IDogZGVmYXVsdHMucGFyYW1ldGVyTGltaXQsXG4gICAgICAgIHBhcnNlQXJyYXlzOiBvcHRzLnBhcnNlQXJyYXlzICE9PSBmYWxzZSxcbiAgICAgICAgcGxhaW5PYmplY3RzOiB0eXBlb2Ygb3B0cy5wbGFpbk9iamVjdHMgPT09ICdib29sZWFuJyA/IG9wdHMucGxhaW5PYmplY3RzIDogZGVmYXVsdHMucGxhaW5PYmplY3RzLFxuICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IHR5cGVvZiBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmdcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cyk7XG5cbiAgICBpZiAoc3RyID09PSAnJyB8fCBzdHIgPT09IG51bGwgfHwgdHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIH1cblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBwYXJzZVZhbHVlcyhzdHIsIG9wdGlvbnMpIDogc3RyO1xuICAgIHZhciBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5cyBhbmQgc2V0dXAgdGhlIG5ldyBvYmplY3RcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iaik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgbmV3T2JqID0gcGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zLCB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyk7XG4gICAgICAgIG9iaiA9IHV0aWxzLm1lcmdlKG9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5hbGxvd1NwYXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiB1dGlscy5jb21wYWN0KG9iaik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0U2lkZUNoYW5uZWwgPSByZXF1aXJlKCdzaWRlLWNoYW5uZWwnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGFycmF5UHJlZml4R2VuZXJhdG9ycyA9IHtcbiAgICBicmFja2V0czogZnVuY3Rpb24gYnJhY2tldHMocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgIH0sXG4gICAgY29tbWE6ICdjb21tYScsXG4gICAgaW5kaWNlczogZnVuY3Rpb24gaW5kaWNlcyhwcmVmaXgsIGtleSkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgIH0sXG4gICAgcmVwZWF0OiBmdW5jdGlvbiByZXBlYXQocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfVxufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIHNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdDtcbnZhciBwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG52YXIgcHVzaFRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCB2YWx1ZU9yQXJyYXkpIHtcbiAgICBwdXNoLmFwcGx5KGFyciwgaXNBcnJheSh2YWx1ZU9yQXJyYXkpID8gdmFsdWVPckFycmF5IDogW3ZhbHVlT3JBcnJheV0pO1xufTtcblxudmFyIHRvSVNPID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG5cbnZhciBkZWZhdWx0Rm9ybWF0ID0gZm9ybWF0c1snZGVmYXVsdCddO1xudmFyIGRlZmF1bHRzID0ge1xuICAgIGFkZFF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBlbmNvZGU6IHRydWUsXG4gICAgZW5jb2RlcjogdXRpbHMuZW5jb2RlLFxuICAgIGVuY29kZVZhbHVlc09ubHk6IGZhbHNlLFxuICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdCxcbiAgICBmb3JtYXR0ZXI6IGZvcm1hdHMuZm9ybWF0dGVyc1tkZWZhdWx0Rm9ybWF0XSxcbiAgICAvLyBkZXByZWNhdGVkXG4gICAgaW5kaWNlczogZmFsc2UsXG4gICAgc2VyaWFsaXplRGF0ZTogZnVuY3Rpb24gc2VyaWFsaXplRGF0ZShkYXRlKSB7XG4gICAgICAgIHJldHVybiB0b0lTTy5jYWxsKGRhdGUpO1xuICAgIH0sXG4gICAgc2tpcE51bGxzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgaXNOb25OdWxsaXNoUHJpbWl0aXZlID0gZnVuY3Rpb24gaXNOb25OdWxsaXNoUHJpbWl0aXZlKHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnc3ltYm9sJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2JpZ2ludCc7XG59O1xuXG52YXIgc2VudGluZWwgPSB7fTtcblxudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShcbiAgICBvYmplY3QsXG4gICAgcHJlZml4LFxuICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgY29tbWFSb3VuZFRyaXAsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgIHNraXBOdWxscyxcbiAgICBlbmNvZGVyLFxuICAgIGZpbHRlcixcbiAgICBzb3J0LFxuICAgIGFsbG93RG90cyxcbiAgICBzZXJpYWxpemVEYXRlLFxuICAgIGZvcm1hdCxcbiAgICBmb3JtYXR0ZXIsXG4gICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICBjaGFyc2V0LFxuICAgIHNpZGVDaGFubmVsXG4pIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuXG4gICAgdmFyIHRtcFNjID0gc2lkZUNoYW5uZWw7XG4gICAgdmFyIHN0ZXAgPSAwO1xuICAgIHZhciBmaW5kRmxhZyA9IGZhbHNlO1xuICAgIHdoaWxlICgodG1wU2MgPSB0bXBTYy5nZXQoc2VudGluZWwpKSAhPT0gdm9pZCB1bmRlZmluZWQgJiYgIWZpbmRGbGFnKSB7XG4gICAgICAgIC8vIFdoZXJlIG9iamVjdCBsYXN0IGFwcGVhcmVkIGluIHRoZSByZWYgdHJlZVxuICAgICAgICB2YXIgcG9zID0gdG1wU2MuZ2V0KG9iamVjdCk7XG4gICAgICAgIHN0ZXAgKz0gMTtcbiAgICAgICAgaWYgKHR5cGVvZiBwb3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAocG9zID09PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0N5Y2xpYyBvYmplY3QgdmFsdWUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmluZEZsYWcgPSB0cnVlOyAvLyBCcmVhayB3aGlsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdG1wU2MuZ2V0KHNlbnRpbmVsKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHN0ZXAgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqID0gZmlsdGVyKHByZWZpeCwgb2JqKTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gc2VyaWFsaXplRGF0ZShvYmopO1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqID0gdXRpbHMubWF5YmVNYXAob2JqLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmljdE51bGxIYW5kbGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZXIgJiYgIWVuY29kZVZhbHVlc09ubHkgPyBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCwgJ2tleScsIGZvcm1hdCkgOiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNOb25OdWxsaXNoUHJpbWl0aXZlKG9iaikgfHwgdXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlID0gZW5jb2RlVmFsdWVzT25seSA/IHByZWZpeCA6IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAna2V5JywgZm9ybWF0KTtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGVuY29kZVZhbHVlc09ubHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdC5jYWxsKFN0cmluZyhvYmopLCAnLCcpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXNKb2luZWQgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlc0FycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc0pvaW5lZCArPSAoaSA9PT0gMCA/ICcnIDogJywnKSArIGZvcm1hdHRlcihlbmNvZGVyKHZhbHVlc0FycmF5W2ldLCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAndmFsdWUnLCBmb3JtYXQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIoa2V5VmFsdWUpICsgKGNvbW1hUm91bmRUcmlwICYmIGlzQXJyYXkob2JqKSAmJiB2YWx1ZXNBcnJheS5sZW5ndGggPT09IDEgPyAnW10nIDogJycpICsgJz0nICsgdmFsdWVzSm9pbmVkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaiwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCwgJ3ZhbHVlJywgZm9ybWF0KSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZm9ybWF0dGVyKHByZWZpeCkgKyAnPScgKyBmb3JtYXR0ZXIoU3RyaW5nKG9iaikpXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICB2YXIgb2JqS2V5cztcbiAgICBpZiAoZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgLy8gd2UgbmVlZCB0byBqb2luIGVsZW1lbnRzIGluXG4gICAgICAgIG9iaktleXMgPSBbeyB2YWx1ZTogb2JqLmxlbmd0aCA+IDAgPyBvYmouam9pbignLCcpIHx8IG51bGwgOiB2b2lkIHVuZGVmaW5lZCB9XTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIHZhciBhZGp1c3RlZFByZWZpeCA9IGNvbW1hUm91bmRUcmlwICYmIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxID8gcHJlZml4ICsgJ1tdJyA6IHByZWZpeDtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgb2JqS2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tqXTtcbiAgICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGtleS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBrZXkudmFsdWUgOiBvYmpba2V5XTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBpc0FycmF5KG9iailcbiAgICAgICAgICAgID8gdHlwZW9mIGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdmdW5jdGlvbicgPyBnZW5lcmF0ZUFycmF5UHJlZml4KGFkanVzdGVkUHJlZml4LCBrZXkpIDogYWRqdXN0ZWRQcmVmaXhcbiAgICAgICAgICAgIDogYWRqdXN0ZWRQcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKTtcblxuICAgICAgICBzaWRlQ2hhbm5lbC5zZXQob2JqZWN0LCBzdGVwKTtcbiAgICAgICAgdmFyIHZhbHVlU2lkZUNoYW5uZWwgPSBnZXRTaWRlQ2hhbm5lbCgpO1xuICAgICAgICB2YWx1ZVNpZGVDaGFubmVsLnNldChzZW50aW5lbCwgc2lkZUNoYW5uZWwpO1xuICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAga2V5UHJlZml4LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIGNvbW1hUm91bmRUcmlwLFxuICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgIGNoYXJzZXQsXG4gICAgICAgICAgICB2YWx1ZVNpZGVDaGFubmVsXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG52YXIgbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5jb2RlciAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgZGVmYXVsdHMuY2hhcnNldDtcbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbiAgICBpZiAodHlwZW9mIG9wdHMuZm9ybWF0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoIWhhcy5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0cy5mb3JtYXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gb3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgIHZhciBmaWx0ZXIgPSBkZWZhdWx0cy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0FycmF5KG9wdHMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRRdWVyeVByZWZpeDogdHlwZW9mIG9wdHMuYWRkUXVlcnlQcmVmaXggPT09ICdib29sZWFuJyA/IG9wdHMuYWRkUXVlcnlQcmVmaXggOiBkZWZhdWx0cy5hZGRRdWVyeVByZWZpeCxcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRzLmRlbGltaXRlcixcbiAgICAgICAgZW5jb2RlOiB0eXBlb2Ygb3B0cy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlLFxuICAgICAgICBlbmNvZGVyOiB0eXBlb2Ygb3B0cy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcixcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHlwZW9mIG9wdHMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdHRlcixcbiAgICAgICAgc2VyaWFsaXplRGF0ZTogdHlwZW9mIG9wdHMuc2VyaWFsaXplRGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc2VyaWFsaXplRGF0ZSA6IGRlZmF1bHRzLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgIHNraXBOdWxsczogdHlwZW9mIG9wdHMuc2tpcE51bGxzID09PSAnYm9vbGVhbicgPyBvcHRzLnNraXBOdWxscyA6IGRlZmF1bHRzLnNraXBOdWxscyxcbiAgICAgICAgc29ydDogdHlwZW9mIG9wdHMuc29ydCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc29ydCA6IG51bGwsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdHMpIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKTtcblxuICAgIHZhciBvYmpLZXlzO1xuICAgIHZhciBmaWx0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmogPSBmaWx0ZXIoJycsIG9iaik7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRzICYmIG9wdHMuYXJyYXlGb3JtYXQgaW4gYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0cy5hcnJheUZvcm1hdDtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgJ2luZGljZXMnIGluIG9wdHMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG4gICAgaWYgKG9wdHMgJiYgJ2NvbW1hUm91bmRUcmlwJyBpbiBvcHRzICYmIHR5cGVvZiBvcHRzLmNvbW1hUm91bmRUcmlwICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYGNvbW1hUm91bmRUcmlwYCBtdXN0IGJlIGEgYm9vbGVhbiwgb3IgYWJzZW50Jyk7XG4gICAgfVxuICAgIHZhciBjb21tYVJvdW5kVHJpcCA9IGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdjb21tYScgJiYgb3B0cyAmJiBvcHRzLmNvbW1hUm91bmRUcmlwO1xuXG4gICAgaWYgKCFvYmpLZXlzKSB7XG4gICAgICAgIG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNvcnQpIHtcbiAgICAgICAgb2JqS2V5cy5zb3J0KG9wdGlvbnMuc29ydCk7XG4gICAgfVxuXG4gICAgdmFyIHNpZGVDaGFubmVsID0gZ2V0U2lkZUNoYW5uZWwoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoVG9BcnJheShrZXlzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICBjb21tYVJvdW5kVHJpcCxcbiAgICAgICAgICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgb3B0aW9ucy5za2lwTnVsbHMsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZSA/IG9wdGlvbnMuZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuc29ydCxcbiAgICAgICAgICAgIG9wdGlvbnMuYWxsb3dEb3RzLFxuICAgICAgICAgICAgb3B0aW9ucy5zZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQsXG4gICAgICAgICAgICBvcHRpb25zLmZvcm1hdHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgIG9wdGlvbnMuY2hhcnNldCxcbiAgICAgICAgICAgIHNpZGVDaGFubmVsXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHZhciBqb2luZWQgPSBrZXlzLmpvaW4ob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICAgIHZhciBwcmVmaXggPSBvcHRpb25zLmFkZFF1ZXJ5UHJlZml4ID09PSB0cnVlID8gJz8nIDogJyc7XG5cbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JyksIHRoZSBcIm51bWVyaWMgZW50aXR5XCIgcmVwcmVzZW50YXRpb24gb2YgYSBjaGVja21hcmtcbiAgICAgICAgICAgIHByZWZpeCArPSAndXRmOD0lMjYlMjMxMDAwMyUzQiYnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSVFMiU5QyU5MyYnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGpvaW5lZC5sZW5ndGggPiAwID8gcHJlZml4ICsgam9pbmVkIDogJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxudmFyIGhleFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGFycmF5LnB1c2goJyUnICsgKChpIDwgMTYgPyAnMCcgOiAnJykgKyBpLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufSgpKTtcblxudmFyIGNvbXBhY3RRdWV1ZSA9IGZ1bmN0aW9uIGNvbXBhY3RRdWV1ZShxdWV1ZSkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWUucG9wKCk7XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmoubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtqXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0ub2JqW2l0ZW0ucHJvcF0gPSBjb21wYWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIGFycmF5VG9PYmplY3Qoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAvKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IDAgKi9cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKChvcHRpb25zICYmIChvcHRpb25zLnBsYWluT2JqZWN0cyB8fCBvcHRpb25zLmFsbG93UHJvdG90eXBlcykpIHx8ICFoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFt0YXJnZXQsIHNvdXJjZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0IHx8IHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VUYXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiAhaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIG1lcmdlVGFyZ2V0ID0gYXJyYXlUb09iamVjdCh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGFyZ2V0LCBpKSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRJdGVtID0gdGFyZ2V0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJdGVtICYmIHR5cGVvZiB0YXJnZXRJdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBtZXJnZSh0YXJnZXRJdGVtLCBpdGVtLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKGFjYywga2V5KSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBtZXJnZShhY2Nba2V5XSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIG1lcmdlVGFyZ2V0KTtcbn07XG5cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiBhc3NpZ25TaW5nbGVTb3VyY2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdGFyZ2V0KTtcbn07XG5cbnZhciBkZWNvZGUgPSBmdW5jdGlvbiAoc3RyLCBkZWNvZGVyLCBjaGFyc2V0KSB7XG4gICAgdmFyIHN0cldpdGhvdXRQbHVzID0gc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgLy8gdW5lc2NhcGUgbmV2ZXIgdGhyb3dzLCBubyB0cnkuLi5jYXRjaCBuZWVkZWQ6XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cy5yZXBsYWNlKC8lWzAtOWEtZl17Mn0vZ2ksIHVuZXNjYXBlKTtcbiAgICB9XG4gICAgLy8gdXRmLThcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cldpdGhvdXRQbHVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cztcbiAgICB9XG59O1xuXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKHN0ciwgZGVmYXVsdEVuY29kZXIsIGNoYXJzZXQsIGtpbmQsIGZvcm1hdCkge1xuICAgIC8vIFRoaXMgY29kZSB3YXMgb3JpZ2luYWxseSB3cml0dGVuIGJ5IEJyaWFuIFdoaXRlIChtc2NkZXgpIGZvciB0aGUgaW8uanMgY29yZSBxdWVyeXN0cmluZyBsaWJyYXJ5LlxuICAgIC8vIEl0IGhhcyBiZWVuIGFkYXB0ZWQgaGVyZSBmb3Igc3RyaWN0ZXIgYWRoZXJlbmNlIHRvIFJGQyAzOTg2XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5nID0gc3RyO1xuICAgIGlmICh0eXBlb2Ygc3RyID09PSAnc3ltYm9sJykge1xuICAgICAgICBzdHJpbmcgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3RyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0cmluZyA9IFN0cmluZyhzdHIpO1xuICAgIH1cblxuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZShzdHJpbmcpLnJlcGxhY2UoLyV1WzAtOWEtZl17NH0vZ2ksIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICAgICAgcmV0dXJuICclMjYlMjMnICsgcGFyc2VJbnQoJDAuc2xpY2UoMiksIDE2KSArICclM0InO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjID09PSAweDJEIC8vIC1cbiAgICAgICAgICAgIHx8IGMgPT09IDB4MkUgLy8gLlxuICAgICAgICAgICAgfHwgYyA9PT0gMHg1RiAvLyBfXG4gICAgICAgICAgICB8fCBjID09PSAweDdFIC8vIH5cbiAgICAgICAgICAgIHx8IChjID49IDB4MzAgJiYgYyA8PSAweDM5KSAvLyAwLTlcbiAgICAgICAgICAgIHx8IChjID49IDB4NDEgJiYgYyA8PSAweDVBKSAvLyBhLXpcbiAgICAgICAgICAgIHx8IChjID49IDB4NjEgJiYgYyA8PSAweDdBKSAvLyBBLVpcbiAgICAgICAgICAgIHx8IChmb3JtYXQgPT09IGZvcm1hdHMuUkZDMTczOCAmJiAoYyA9PT0gMHgyOCB8fCBjID09PSAweDI5KSkgLy8gKCApXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3V0ICs9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgaGV4VGFibGVbY107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEMwIHwgKGMgPj4gNildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweEQ4MDAgfHwgYyA+PSAweEUwMDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEUwIHwgKGMgPj4gMTIpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IDE7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyaW5nLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xuICAgICAgICAvKiBlc2xpbnQgb3BlcmF0b3ItbGluZWJyZWFrOiBbMiwgXCJiZWZvcmVcIl0gKi9cbiAgICAgICAgb3V0ICs9IGhleFRhYmxlWzB4RjAgfCAoYyA+PiAxOCldXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gMTIpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG52YXIgY29tcGFjdCA9IGZ1bmN0aW9uIGNvbXBhY3QodmFsdWUpIHtcbiAgICB2YXIgcXVldWUgPSBbeyBvYmo6IHsgbzogdmFsdWUgfSwgcHJvcDogJ28nIH1dO1xuICAgIHZhciByZWZzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWVbaV07XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwgJiYgcmVmcy5pbmRleE9mKHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaCh7IG9iajogb2JqLCBwcm9wOiBrZXkgfSk7XG4gICAgICAgICAgICAgICAgcmVmcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYWN0UXVldWUocXVldWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIGlzUmVnRXhwID0gZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbnZhciBpc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEob2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKSk7XG59O1xuXG52YXIgY29tYmluZSA9IGZ1bmN0aW9uIGNvbWJpbmUoYSwgYikge1xuICAgIHJldHVybiBbXS5jb25jYXQoYSwgYik7XG59O1xuXG52YXIgbWF5YmVNYXAgPSBmdW5jdGlvbiBtYXliZU1hcCh2YWwsIGZuKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YXIgbWFwcGVkID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBtYXBwZWQucHVzaChmbih2YWxbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwcGVkO1xuICAgIH1cbiAgICByZXR1cm4gZm4odmFsKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFycmF5VG9PYmplY3Q6IGFycmF5VG9PYmplY3QsXG4gICAgYXNzaWduOiBhc3NpZ24sXG4gICAgY29tYmluZTogY29tYmluZSxcbiAgICBjb21wYWN0OiBjb21wYWN0LFxuICAgIGRlY29kZTogZGVjb2RlLFxuICAgIGVuY29kZTogZW5jb2RlLFxuICAgIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgICBpc1JlZ0V4cDogaXNSZWdFeHAsXG4gICAgbWF5YmVNYXA6IG1heWJlTWFwLFxuICAgIG1lcmdlOiBtZXJnZVxufTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xudmFyIGluc3BlY3QgPSByZXF1aXJlKCdvYmplY3QtaW5zcGVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkV2Vha01hcCA9IEdldEludHJpbnNpYygnJVdlYWtNYXAlJywgdHJ1ZSk7XG52YXIgJE1hcCA9IEdldEludHJpbnNpYygnJU1hcCUnLCB0cnVlKTtcblxudmFyICR3ZWFrTWFwR2V0ID0gY2FsbEJvdW5kKCdXZWFrTWFwLnByb3RvdHlwZS5nZXQnLCB0cnVlKTtcbnZhciAkd2Vha01hcFNldCA9IGNhbGxCb3VuZCgnV2Vha01hcC5wcm90b3R5cGUuc2V0JywgdHJ1ZSk7XG52YXIgJHdlYWtNYXBIYXMgPSBjYWxsQm91bmQoJ1dlYWtNYXAucHJvdG90eXBlLmhhcycsIHRydWUpO1xudmFyICRtYXBHZXQgPSBjYWxsQm91bmQoJ01hcC5wcm90b3R5cGUuZ2V0JywgdHJ1ZSk7XG52YXIgJG1hcFNldCA9IGNhbGxCb3VuZCgnTWFwLnByb3RvdHlwZS5zZXQnLCB0cnVlKTtcbnZhciAkbWFwSGFzID0gY2FsbEJvdW5kKCdNYXAucHJvdG90eXBlLmhhcycsIHRydWUpO1xuXG4vKlxuICogVGhpcyBmdW5jdGlvbiB0cmF2ZXJzZXMgdGhlIGxpc3QgcmV0dXJuaW5nIHRoZSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlXG4gKiBnaXZlbiBrZXkuXG4gKlxuICogVGhhdCBub2RlIGlzIGFsc28gbW92ZWQgdG8gdGhlIGhlYWQgb2YgdGhlIGxpc3QsIHNvIHRoYXQgaWYgaXQncyBhY2Nlc3NlZFxuICogYWdhaW4gd2UgZG9uJ3QgbmVlZCB0byB0cmF2ZXJzZSB0aGUgd2hvbGUgbGlzdC4gQnkgZG9pbmcgc28sIGFsbCB0aGUgcmVjZW50bHlcbiAqIHVzZWQgbm9kZXMgY2FuIGJlIGFjY2Vzc2VkIHJlbGF0aXZlbHkgcXVpY2tseS5cbiAqL1xudmFyIGxpc3RHZXROb2RlID0gZnVuY3Rpb24gKGxpc3QsIGtleSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5cdGZvciAodmFyIHByZXYgPSBsaXN0LCBjdXJyOyAoY3VyciA9IHByZXYubmV4dCkgIT09IG51bGw7IHByZXYgPSBjdXJyKSB7XG5cdFx0aWYgKGN1cnIua2V5ID09PSBrZXkpIHtcblx0XHRcdHByZXYubmV4dCA9IGN1cnIubmV4dDtcblx0XHRcdGN1cnIubmV4dCA9IGxpc3QubmV4dDtcblx0XHRcdGxpc3QubmV4dCA9IGN1cnI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0XHRcdHJldHVybiBjdXJyO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGxpc3RHZXQgPSBmdW5jdGlvbiAob2JqZWN0cywga2V5KSB7XG5cdHZhciBub2RlID0gbGlzdEdldE5vZGUob2JqZWN0cywga2V5KTtcblx0cmV0dXJuIG5vZGUgJiYgbm9kZS52YWx1ZTtcbn07XG52YXIgbGlzdFNldCA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXksIHZhbHVlKSB7XG5cdHZhciBub2RlID0gbGlzdEdldE5vZGUob2JqZWN0cywga2V5KTtcblx0aWYgKG5vZGUpIHtcblx0XHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUHJlcGVuZCB0aGUgbmV3IG5vZGUgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuXHRcdG9iamVjdHMubmV4dCA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHRcdFx0a2V5OiBrZXksXG5cdFx0XHRuZXh0OiBvYmplY3RzLm5leHQsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9XG59O1xudmFyIGxpc3RIYXMgPSBmdW5jdGlvbiAob2JqZWN0cywga2V5KSB7XG5cdHJldHVybiAhIWxpc3RHZXROb2RlKG9iamVjdHMsIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFNpZGVDaGFubmVsKCkge1xuXHR2YXIgJHdtO1xuXHR2YXIgJG07XG5cdHZhciAkbztcblx0dmFyIGNoYW5uZWwgPSB7XG5cdFx0YXNzZXJ0OiBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRpZiAoIWNoYW5uZWwuaGFzKGtleSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1NpZGUgY2hhbm5lbCBkb2VzIG5vdCBjb250YWluICcgKyBpbnNwZWN0KGtleSkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Z2V0OiBmdW5jdGlvbiAoa2V5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cblx0XHRcdGlmICgkV2Vha01hcCAmJiBrZXkgJiYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdGlmICgkd20pIHtcblx0XHRcdFx0XHRyZXR1cm4gJHdlYWtNYXBHZXQoJHdtLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCRNYXApIHtcblx0XHRcdFx0aWYgKCRtKSB7XG5cdFx0XHRcdFx0cmV0dXJuICRtYXBHZXQoJG0sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICgkbykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmVseS1pZlxuXHRcdFx0XHRcdHJldHVybiBsaXN0R2V0KCRvLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRoYXM6IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdGlmICgkV2Vha01hcCAmJiBrZXkgJiYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdGlmICgkd20pIHtcblx0XHRcdFx0XHRyZXR1cm4gJHdlYWtNYXBIYXMoJHdtLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCRNYXApIHtcblx0XHRcdFx0aWYgKCRtKSB7XG5cdFx0XHRcdFx0cmV0dXJuICRtYXBIYXMoJG0sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICgkbykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmVseS1pZlxuXHRcdFx0XHRcdHJldHVybiBsaXN0SGFzKCRvLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRpZiAoJFdlYWtNYXAgJiYga2V5ICYmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyB8fCB0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRpZiAoISR3bSkge1xuXHRcdFx0XHRcdCR3bSA9IG5ldyAkV2Vha01hcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCR3ZWFrTWFwU2V0KCR3bSwga2V5LCB2YWx1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKCRNYXApIHtcblx0XHRcdFx0aWYgKCEkbSkge1xuXHRcdFx0XHRcdCRtID0gbmV3ICRNYXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkbWFwU2V0KCRtLCBrZXksIHZhbHVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghJG8pIHtcblx0XHRcdFx0XHQvKlxuXHRcdFx0XHRcdCAqIEluaXRpYWxpemUgdGhlIGxpbmtlZCBsaXN0IGFzIGFuIGVtcHR5IG5vZGUsIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZVxuXHRcdFx0XHRcdCAqIHRvIHNwZWNpYWwtY2FzZSBoYW5kbGluZyBvZiB0aGUgZmlyc3Qgbm9kZTogd2UgY2FuIGFsd2F5cyByZWZlciB0b1xuXHRcdFx0XHRcdCAqIGl0IGFzIChwcmV2aW91cyBub2RlKS5uZXh0LCBpbnN0ZWFkIG9mIHNvbWV0aGluZyBsaWtlIChsaXN0KS5oZWFkXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0JG8gPSB7IGtleToge30sIG5leHQ6IG51bGwgfTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0U2V0KCRvLCBrZXksIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBjaGFubmVsO1xufTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=