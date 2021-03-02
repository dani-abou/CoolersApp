webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/store.js":
/*!************************!*\
  !*** ./pages/store.js ***!
  \************************/
/*! exports provided: coolersFromOrder, reduceCoolerCount, increaseCoolerCount, addToOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coolersFromOrder", function() { return coolersFromOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceCoolerCount", function() { return reduceCoolerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseCoolerCount", function() { return increaseCoolerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToOrder", function() { return addToOrder; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var DEFAULT_API_VERSION = '2020-04'; //Sends the POST to the graphQL

function graphqlRequest(_x) {
  return _graphqlRequest.apply(this, arguments);
} //Gets the tags and id of the customer of the given order


function _graphqlRequest() {
  _graphqlRequest = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(gql) {
    var shop,
        accessToken,
        apiVersion,
        url,
        response,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shop = _args.length > 1 && _args[1] !== undefined ? _args[1] : js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('shopOrigin');
            accessToken = _args.length > 2 && _args[2] !== undefined ? _args[2] : js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('accessToken');
            apiVersion = _args.length > 3 && _args[3] !== undefined ? _args[3] : DEFAULT_API_VERSION;
            url = "https://".concat(shop, "/admin/api/").concat(apiVersion, "/graphql.json");
            _context.next = 6;
            return node_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
              method: 'POST',
              headers: {
                "Content-Type": "application/graphql",
                "X-Shopify-Access-Token": accessToken,
                "Access-Control-Allow-Origin": "*"
              },
              body: gql
            });

          case 6:
            response = _context.sent;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _graphqlRequest.apply(this, arguments);
}

function coolersFromOrder(_x2) {
  return _coolersFromOrder.apply(this, arguments);
} //Makes the gql string that reduces the number of coolers for the
//customer of the given order

function _coolersFromOrder() {
  _coolersFromOrder = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(orderId) {
    var data, id;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return graphqlRequest("query {\n    order(id: gid://shopify/Order/".concat(orderId, ") {\n      customer {\n        id\n        tags\n      }\n    }\n  }"));

          case 2:
            data = _context2.sent;
            id = data.order.customer.id;
            alert(id);
            return _context2.abrupt("return", _objectSpread(_objectSpread({}, data.order), {}, {
              id: data.order.customer.id,
              tags: data.order.customer.tags
            }));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _coolersFromOrder.apply(this, arguments);
}

function reduceCoolerCount(_x3) {
  return _reduceCoolerCount.apply(this, arguments);
} //Makes the gql string that increases the number of coolers for the
//customer of the given order

function _reduceCoolerCount() {
  _reduceCoolerCount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(customer) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", graphqlRequest());

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _reduceCoolerCount.apply(this, arguments);
}

function increaseCoolerCount(_x4) {
  return _increaseCoolerCount.apply(this, arguments);
} //Makes the gql string that adds the cooler to the order's custom attribute

function _increaseCoolerCount() {
  _increaseCoolerCount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(customer) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", graphqlRequest());

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _increaseCoolerCount.apply(this, arguments);
}

function addToOrder(_x5, _x6) {
  return _addToOrder.apply(this, arguments);
}

function _addToOrder() {
  _addToOrder = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(order, cooler) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", graphqlRequest());

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _addToOrder.apply(this, arguments);
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUuanMiXSwibmFtZXMiOlsiREVGQVVMVF9BUElfVkVSU0lPTiIsImdyYXBocWxSZXF1ZXN0IiwiZ3FsIiwic2hvcCIsIkNvb2tpZXMiLCJnZXQiLCJhY2Nlc3NUb2tlbiIsImFwaVZlcnNpb24iLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJjb29sZXJzRnJvbU9yZGVyIiwib3JkZXJJZCIsImRhdGEiLCJpZCIsIm9yZGVyIiwiY3VzdG9tZXIiLCJhbGVydCIsInRhZ3MiLCJyZWR1Y2VDb29sZXJDb3VudCIsImluY3JlYXNlQ29vbGVyQ291bnQiLCJhZGRUb09yZGVyIiwiY29vbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQTVCLEMsQ0FHQTs7U0FFZUMsYzs7RUEwQmY7Ozs7cU1BMUJBLGlCQUE4QkMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQ0MsZ0JBQXBDLDJEQUEyQ0MsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBM0M7QUFDRUMsdUJBREYsMkRBQ2dCRixnREFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixDQURoQjtBQUM0Q0Usc0JBRDVDLDJEQUN1RFAsbUJBRHZEO0FBR1FRLGVBSFIscUJBR3lCTCxJQUh6Qix3QkFHMkNJLFVBSDNDO0FBQUE7QUFBQSxtQkFNeUJFLGlEQUFLLENBQUNELEdBQUQsRUFBTTtBQUNoQ0Usb0JBQU0sRUFBRSxNQUR3QjtBQUVoQ0MscUJBQU8sRUFBRTtBQUNQLGdDQUFnQixxQkFEVDtBQUVQLDBDQUEwQkwsV0FGbkI7QUFHUCwrQ0FBK0I7QUFIeEIsZUFGdUI7QUFPaENNLGtCQUFJLEVBQUVWO0FBUDBCLGFBQU4sQ0FOOUI7O0FBQUE7QUFNUVcsb0JBTlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQTJCTyxTQUFlQyxnQkFBdEI7QUFBQTtBQUFBLEMsQ0FnQkE7QUFDQTs7O3VNQWpCTyxrQkFBZ0NDLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2NkLGNBQWMsc0RBRUNjLE9BRkQsMEVBRDVCOztBQUFBO0FBQ0NDLGdCQUREO0FBV0RDLGNBWEMsR0FXSUQsSUFBSSxDQUFDRSxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEVBWHhCO0FBWVBHLGlCQUFLLENBQUNILEVBQUQsQ0FBTDtBQVpPLDhFQWFJRCxJQUFJLENBQUNFLEtBYlQ7QUFhZ0JELGdCQUFFLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixFQWJ4QztBQWE0Q0ksa0JBQUksRUFBRUwsSUFBSSxDQUFDRSxLQUFMLENBQVdDLFFBQVgsQ0FBb0JFO0FBYnRFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFrQkEsU0FBZUMsaUJBQXRCO0FBQUE7QUFBQSxDLENBTUE7QUFDQTs7O3dNQVBPLGtCQUFpQ0gsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNFbEIsY0FBYyxFQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBUUEsU0FBZXNCLG1CQUF0QjtBQUFBO0FBQUEsQyxDQU1BOzs7ME1BTk8sa0JBQW1DSixRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ0VsQixjQUFjLEVBRGhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFPQSxTQUFldUIsVUFBdEI7QUFBQTtBQUFBOzs7aU1BQU8sa0JBQTBCTixLQUExQixFQUFpQ08sTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNFeEIsY0FBYyxFQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWNjN2RkMzVhOGRhZjM1M2VlODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3QgREVGQVVMVF9BUElfVkVSU0lPTiA9ICcyMDIwLTA0JztcclxuXHJcblxyXG4vL1NlbmRzIHRoZSBQT1NUIHRvIHRoZSBncmFwaFFMXHJcblxyXG5hc3luYyBmdW5jdGlvbiBncmFwaHFsUmVxdWVzdChncWwsICBzaG9wID0gQ29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSxcclxuICBhY2Nlc3NUb2tlbiA9IENvb2tpZXMuZ2V0KCdhY2Nlc3NUb2tlbicpLCBhcGlWZXJzaW9uPURFRkFVTFRfQVBJX1ZFUlNJT04pIHtcclxuXHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vJHtzaG9wfS9hZG1pbi9hcGkvJHthcGlWZXJzaW9ufS9ncmFwaHFsLmpzb25gO1xyXG5cclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2dyYXBocWxcIixcclxuICAgICAgXCJYLVNob3BpZnktQWNjZXNzLVRva2VuXCI6IGFjY2Vzc1Rva2VuLFxyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxyXG4gICAgfSxcclxuICAgIGJvZHk6IGdxbFxyXG4gIH0pO1xyXG5cclxuICAvL1xyXG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3JzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gY29uc29sZS5sb2coZXJyb3JzKTtcclxuICAvLyBpZiAoZXJyb3JzKSB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSk7XHJcbiAgLy8gY29uc3QgdXNlckVycm9ycyA9IE9iamVjdC52YWx1ZXMoZGF0YSkuZmluZCh2ID0+IHYgJiYgdi51c2VyRXJyb3JzKTtcclxuICAvLyBpZiAodXNlckVycm9ycyAmJiB1c2VyRXJyb3JzLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh1c2VyRXJyb3JzKSk7XHJcbiAgLy8gcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8vR2V0cyB0aGUgdGFncyBhbmQgaWQgb2YgdGhlIGN1c3RvbWVyIG9mIHRoZSBnaXZlbiBvcmRlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29vbGVyc0Zyb21PcmRlcihvcmRlcklkKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBocWxSZXF1ZXN0KFxyXG4gIGBxdWVyeSB7XHJcbiAgICBvcmRlcihpZDogZ2lkOi8vc2hvcGlmeS9PcmRlci8ke29yZGVySWR9KSB7XHJcbiAgICAgIGN1c3RvbWVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRhZ3NcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1gXHJcbilcclxuY29uc3QgaWQgPSBkYXRhLm9yZGVyLmN1c3RvbWVyLmlkO1xyXG5hbGVydChpZCk7XHJcbnJldHVybiB7Li4uZGF0YS5vcmRlciwgaWQ6IGRhdGEub3JkZXIuY3VzdG9tZXIuaWQsIHRhZ3M6IGRhdGEub3JkZXIuY3VzdG9tZXIudGFnc31cclxufVxyXG5cclxuLy9NYWtlcyB0aGUgZ3FsIHN0cmluZyB0aGF0IHJlZHVjZXMgdGhlIG51bWJlciBvZiBjb29sZXJzIGZvciB0aGVcclxuLy9jdXN0b21lciBvZiB0aGUgZ2l2ZW4gb3JkZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZHVjZUNvb2xlckNvdW50KGN1c3RvbWVyKSB7XHJcbiAgcmV0dXJuIGdyYXBocWxSZXF1ZXN0KFxyXG5cclxuICApXHJcbn1cclxuXHJcbi8vTWFrZXMgdGhlIGdxbCBzdHJpbmcgdGhhdCBpbmNyZWFzZXMgdGhlIG51bWJlciBvZiBjb29sZXJzIGZvciB0aGVcclxuLy9jdXN0b21lciBvZiB0aGUgZ2l2ZW4gb3JkZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluY3JlYXNlQ29vbGVyQ291bnQoY3VzdG9tZXIpIHtcclxuICByZXR1cm4gZ3JhcGhxbFJlcXVlc3QoXHJcblxyXG4gIClcclxufVxyXG5cclxuLy9NYWtlcyB0aGUgZ3FsIHN0cmluZyB0aGF0IGFkZHMgdGhlIGNvb2xlciB0byB0aGUgb3JkZXIncyBjdXN0b20gYXR0cmlidXRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb09yZGVyKG9yZGVyLCBjb29sZXIpIHtcclxuICByZXR1cm4gZ3JhcGhxbFJlcXVlc3QoXHJcblxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9