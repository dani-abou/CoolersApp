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




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 //import hostURL from './../server.js'

var DEFAULT_API_VERSION = '2020-04';
var DEFAULT_ACCESSTOKEN = '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';
var DEFAULT_STORENAME = 'svenfish-test-store.myshopify.com'; //Sends the POST to the graphQL

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
        _yield$response$json,
        data,
        errors,
        userErrors,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shop = _args.length > 1 && _args[1] !== undefined ? _args[1] : DEFAULT_STORENAME;
            accessToken = _args.length > 2 && _args[2] !== undefined ? _args[2] : DEFAULT_ACCESSTOKEN;
            apiVersion = _args.length > 3 && _args[3] !== undefined ? _args[3] : DEFAULT_API_VERSION;
            url = "https://".concat(shop, "/admin/api/").concat(apiVersion, "/graphql.json");
            _context.next = 6;
            return node_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
              method: 'POST',
              headers: {
                "Content-Type": "application/graphql",
                "X-Shopify-Access-Token": accessToken
              },
              body: gql
            });

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            _yield$response$json = _context.sent;
            data = _yield$response$json.data;
            errors = _yield$response$json.errors;

            if (!errors) {
              _context.next = 14;
              break;
            }

            throw new Error(JSON.stringify(errors));

          case 14:
            userErrors = Object.values(data).find(function (v) {
              return v && v.userErrors;
            });

            if (!(userErrors && userErrors.length > 0)) {
              _context.next = 17;
              break;
            }

            throw new Error(JSON.stringify(userErrors));

          case 17:
            return _context.abrupt("return", data);

          case 18:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUuanMiXSwibmFtZXMiOlsiREVGQVVMVF9BUElfVkVSU0lPTiIsIkRFRkFVTFRfQUNDRVNTVE9LRU4iLCJERUZBVUxUX1NUT1JFTkFNRSIsImdyYXBocWxSZXF1ZXN0IiwiZ3FsIiwic2hvcCIsImFjY2Vzc1Rva2VuIiwiYXBpVmVyc2lvbiIsInVybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3JzIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlckVycm9ycyIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJ2IiwibGVuZ3RoIiwiY29vbGVyc0Zyb21PcmRlciIsIm9yZGVySWQiLCJpZCIsIm9yZGVyIiwiY3VzdG9tZXIiLCJhbGVydCIsInRhZ3MiLCJyZWR1Y2VDb29sZXJDb3VudCIsImluY3JlYXNlQ29vbGVyQ291bnQiLCJhZGRUb09yZGVyIiwiY29vbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsd0NBQTVCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUNBQTFCLEMsQ0FFQTs7U0FFZUMsYzs7RUFtQmY7Ozs7cU1BbkJBLGlCQUE4QkMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQ0MsZ0JBQXBDLDJEQUEyQ0gsaUJBQTNDO0FBQ0VJLHVCQURGLDJEQUNnQkwsbUJBRGhCO0FBQ3FDTSxzQkFEckMsMkRBQ2dEUCxtQkFEaEQ7QUFHUVEsZUFIUixxQkFHeUJILElBSHpCLHdCQUcyQ0UsVUFIM0M7QUFBQTtBQUFBLG1CQUl5QkUsaURBQUssQ0FBQ0QsR0FBRCxFQUFNO0FBQ2hDRSxvQkFBTSxFQUFFLE1BRHdCO0FBRWhDQyxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCLHFCQURUO0FBRVAsMENBQTBCTDtBQUZuQixlQUZ1QjtBQU1oQ00sa0JBQUksRUFBRVI7QUFOMEIsYUFBTixDQUo5Qjs7QUFBQTtBQUlRUyxvQkFKUjtBQUFBO0FBQUEsbUJBWWlDQSxRQUFRLENBQUNDLElBQVQsRUFaakM7O0FBQUE7QUFBQTtBQVlVQyxnQkFaVix3QkFZVUEsSUFaVjtBQVlnQkMsa0JBWmhCLHdCQVlnQkEsTUFaaEI7O0FBQUEsaUJBYU1BLE1BYk47QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBYW9CLElBQUlDLEtBQUosQ0FBVUMsSUFBSSxDQUFDQyxTQUFMLENBQWVILE1BQWYsQ0FBVixDQWJwQjs7QUFBQTtBQWNRSSxzQkFkUixHQWNxQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNQLElBQWQsRUFBb0JRLElBQXBCLENBQXlCLFVBQUFDLENBQUM7QUFBQSxxQkFBSUEsQ0FBQyxJQUFJQSxDQUFDLENBQUNKLFVBQVg7QUFBQSxhQUExQixDQWRyQjs7QUFBQSxrQkFlTUEsVUFBVSxJQUFJQSxVQUFVLENBQUNLLE1BQVgsR0FBb0IsQ0FmeEM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBZWlELElBQUlSLEtBQUosQ0FBVUMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLFVBQWYsQ0FBVixDQWZqRDs7QUFBQTtBQUFBLDZDQWdCU0wsSUFoQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQW9CTyxTQUFlVyxnQkFBdEI7QUFBQTtBQUFBLEMsQ0FnQkE7QUFDQTs7O3VNQWpCTyxrQkFBZ0NDLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2N4QixjQUFjLHNEQUVDd0IsT0FGRCwwRUFENUI7O0FBQUE7QUFDQ1osZ0JBREQ7QUFXRGEsY0FYQyxHQVdJYixJQUFJLENBQUNjLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsRUFYeEI7QUFZUEcsaUJBQUssQ0FBQ0gsRUFBRCxDQUFMO0FBWk8sOEVBYUliLElBQUksQ0FBQ2MsS0FiVDtBQWFnQkQsZ0JBQUUsRUFBRWIsSUFBSSxDQUFDYyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEVBYnhDO0FBYTRDSSxrQkFBSSxFQUFFakIsSUFBSSxDQUFDYyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JFO0FBYnRFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFrQkEsU0FBZUMsaUJBQXRCO0FBQUE7QUFBQSxDLENBTUE7QUFDQTs7O3dNQVBPLGtCQUFpQ0gsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNFM0IsY0FBYyxFQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBUUEsU0FBZStCLG1CQUF0QjtBQUFBO0FBQUEsQyxDQU1BOzs7ME1BTk8sa0JBQW1DSixRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ0UzQixjQUFjLEVBRGhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFPQSxTQUFlZ0MsVUFBdEI7QUFBQTtBQUFBOzs7aU1BQU8sa0JBQTBCTixLQUExQixFQUFpQ08sTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNFakMsY0FBYyxFQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTI0NWZhOWVhNjlkZDBjMzFhODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG4vL2ltcG9ydCBob3N0VVJMIGZyb20gJy4vLi4vc2VydmVyLmpzJ1xyXG5cclxuY29uc3QgREVGQVVMVF9BUElfVkVSU0lPTiA9ICcyMDIwLTA0JztcclxuY29uc3QgREVGQVVMVF9BQ0NFU1NUT0tFTiA9ICdzaHBjYV8xODI2MTc2MGRkOGU3MjAyNTVhMjliNzE4YzU5NTM3NidcclxuY29uc3QgREVGQVVMVF9TVE9SRU5BTUUgPSAnc3ZlbmZpc2gtdGVzdC1zdG9yZS5teXNob3BpZnkuY29tJ1xyXG5cclxuLy9TZW5kcyB0aGUgUE9TVCB0byB0aGUgZ3JhcGhRTFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ3JhcGhxbFJlcXVlc3QoZ3FsLCAgc2hvcCA9IERFRkFVTFRfU1RPUkVOQU1FLFxyXG4gIGFjY2Vzc1Rva2VuID0gREVGQVVMVF9BQ0NFU1NUT0tFTiwgYXBpVmVyc2lvbj1ERUZBVUxUX0FQSV9WRVJTSU9OKSB7XHJcblxyXG4gIGNvbnN0IHVybCA9IGBodHRwczovLyR7c2hvcH0vYWRtaW4vYXBpLyR7YXBpVmVyc2lvbn0vZ3JhcGhxbC5qc29uYDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vZ3JhcGhxbFwiLFxyXG4gICAgICBcIlgtU2hvcGlmeS1BY2Nlc3MtVG9rZW5cIjogYWNjZXNzVG9rZW5cclxuICAgIH0sXHJcbiAgICBib2R5OiBncWxcclxuICB9KTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9ycyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGlmIChlcnJvcnMpIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShlcnJvcnMpKTtcclxuICBjb25zdCB1c2VyRXJyb3JzID0gT2JqZWN0LnZhbHVlcyhkYXRhKS5maW5kKHYgPT4gdiAmJiB2LnVzZXJFcnJvcnMpO1xyXG4gIGlmICh1c2VyRXJyb3JzICYmIHVzZXJFcnJvcnMubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHVzZXJFcnJvcnMpKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy9HZXRzIHRoZSB0YWdzIGFuZCBpZCBvZiB0aGUgY3VzdG9tZXIgb2YgdGhlIGdpdmVuIG9yZGVyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb29sZXJzRnJvbU9yZGVyKG9yZGVySWQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhxbFJlcXVlc3QoXHJcbiAgYHF1ZXJ5IHtcclxuICAgIG9yZGVyKGlkOiBnaWQ6Ly9zaG9waWZ5L09yZGVyLyR7b3JkZXJJZH0pIHtcclxuICAgICAgY3VzdG9tZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgdGFnc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfWBcclxuKVxyXG5jb25zdCBpZCA9IGRhdGEub3JkZXIuY3VzdG9tZXIuaWQ7XHJcbmFsZXJ0KGlkKTtcclxucmV0dXJuIHsuLi5kYXRhLm9yZGVyLCBpZDogZGF0YS5vcmRlci5jdXN0b21lci5pZCwgdGFnczogZGF0YS5vcmRlci5jdXN0b21lci50YWdzfVxyXG59XHJcblxyXG4vL01ha2VzIHRoZSBncWwgc3RyaW5nIHRoYXQgcmVkdWNlcyB0aGUgbnVtYmVyIG9mIGNvb2xlcnMgZm9yIHRoZVxyXG4vL2N1c3RvbWVyIG9mIHRoZSBnaXZlbiBvcmRlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkdWNlQ29vbGVyQ291bnQoY3VzdG9tZXIpIHtcclxuICByZXR1cm4gZ3JhcGhxbFJlcXVlc3QoXHJcblxyXG4gIClcclxufVxyXG5cclxuLy9NYWtlcyB0aGUgZ3FsIHN0cmluZyB0aGF0IGluY3JlYXNlcyB0aGUgbnVtYmVyIG9mIGNvb2xlcnMgZm9yIHRoZVxyXG4vL2N1c3RvbWVyIG9mIHRoZSBnaXZlbiBvcmRlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5jcmVhc2VDb29sZXJDb3VudChjdXN0b21lcikge1xyXG4gIHJldHVybiBncmFwaHFsUmVxdWVzdChcclxuXHJcbiAgKVxyXG59XHJcblxyXG4vL01ha2VzIHRoZSBncWwgc3RyaW5nIHRoYXQgYWRkcyB0aGUgY29vbGVyIHRvIHRoZSBvcmRlcidzIGN1c3RvbSBhdHRyaWJ1dGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRvT3JkZXIob3JkZXIsIGNvb2xlcikge1xyXG4gIHJldHVybiBncmFwaHFsUmVxdWVzdChcclxuXHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=