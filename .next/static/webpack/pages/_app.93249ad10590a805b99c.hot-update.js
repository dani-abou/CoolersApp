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
        _yield$response$json,
        data,
        errors,
        userErrors,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUuanMiXSwibmFtZXMiOlsiREVGQVVMVF9BUElfVkVSU0lPTiIsImdyYXBocWxSZXF1ZXN0IiwiZ3FsIiwic2hvcCIsIkNvb2tpZXMiLCJnZXQiLCJhY2Nlc3NUb2tlbiIsImFwaVZlcnNpb24iLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImVycm9ycyIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJFcnJvcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmaW5kIiwidiIsImxlbmd0aCIsImNvb2xlcnNGcm9tT3JkZXIiLCJvcmRlcklkIiwiaWQiLCJvcmRlciIsImN1c3RvbWVyIiwiYWxlcnQiLCJ0YWdzIiwicmVkdWNlQ29vbGVyQ291bnQiLCJpbmNyZWFzZUNvb2xlckNvdW50IiwiYWRkVG9PcmRlciIsImNvb2xlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUE1QixDLENBRUE7O1NBRWVDLGM7O0VBc0JmOzs7O3FNQXRCQSxpQkFBOEJDLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0NDLGdCQUFwQywyREFBMkNDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQTNDO0FBQ0VDLHVCQURGLDJEQUNnQkYsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosQ0FEaEI7QUFDNENFLHNCQUQ1QywyREFDdURQLG1CQUR2RDtBQUdRUSxlQUhSLHFCQUd5QkwsSUFIekIsd0JBRzJDSSxVQUgzQztBQUFBO0FBQUEsbUJBS3lCRSxpREFBSyxDQUFDRCxHQUFELEVBQU07QUFDaENFLG9CQUFNLEVBQUUsTUFEd0I7QUFFaENDLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0IscUJBRFQ7QUFFUCwwQ0FBMEJMLFdBRm5CO0FBR1AsK0NBQStCO0FBSHhCLGVBRnVCO0FBT2hDTSxrQkFBSSxFQUFFVjtBQVAwQixhQUFOLENBTDlCOztBQUFBO0FBS1FXLG9CQUxSO0FBQUE7QUFBQSxtQkFlaUNBLFFBQVEsQ0FBQ0MsSUFBVCxFQWZqQzs7QUFBQTtBQUFBO0FBZVVDLGdCQWZWLHdCQWVVQSxJQWZWO0FBZWdCQyxrQkFmaEIsd0JBZWdCQSxNQWZoQjs7QUFBQSxpQkFnQk1BLE1BaEJOO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQWdCb0IsSUFBSUMsS0FBSixDQUFVQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsTUFBZixDQUFWLENBaEJwQjs7QUFBQTtBQWlCUUksc0JBakJSLEdBaUJxQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNQLElBQWQsRUFBb0JRLElBQXBCLENBQXlCLFVBQUFDLENBQUM7QUFBQSxxQkFBSUEsQ0FBQyxJQUFJQSxDQUFDLENBQUNKLFVBQVg7QUFBQSxhQUExQixDQWpCckI7O0FBQUEsa0JBa0JNQSxVQUFVLElBQUlBLFVBQVUsQ0FBQ0ssTUFBWCxHQUFvQixDQWxCeEM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBa0JpRCxJQUFJUixLQUFKLENBQVVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxVQUFmLENBQVYsQ0FsQmpEOztBQUFBO0FBQUEsNkNBbUJTTCxJQW5CVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBdUJPLFNBQWVXLGdCQUF0QjtBQUFBO0FBQUEsQyxDQWdCQTtBQUNBOzs7dU1BakJPLGtCQUFnQ0MsT0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYzFCLGNBQWMsc0RBRUMwQixPQUZELDBFQUQ1Qjs7QUFBQTtBQUNDWixnQkFERDtBQVdEYSxjQVhDLEdBV0liLElBQUksQ0FBQ2MsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixFQVh4QjtBQVlQRyxpQkFBSyxDQUFDSCxFQUFELENBQUw7QUFaTyw4RUFhSWIsSUFBSSxDQUFDYyxLQWJUO0FBYWdCRCxnQkFBRSxFQUFFYixJQUFJLENBQUNjLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsRUFieEM7QUFhNENJLGtCQUFJLEVBQUVqQixJQUFJLENBQUNjLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkU7QUFidEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWtCQSxTQUFlQyxpQkFBdEI7QUFBQTtBQUFBLEMsQ0FNQTtBQUNBOzs7d01BUE8sa0JBQWlDSCxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ0U3QixjQUFjLEVBRGhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFRQSxTQUFlaUMsbUJBQXRCO0FBQUE7QUFBQSxDLENBTUE7OzswTUFOTyxrQkFBbUNKLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FDRTdCLGNBQWMsRUFEaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9BLFNBQWVrQyxVQUF0QjtBQUFBO0FBQUE7OztpTUFBTyxrQkFBMEJOLEtBQTFCLEVBQWlDTyxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ0VuQyxjQUFjLEVBRGhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MzI0OWFkMTA1OTBhODA1Yjk5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBERUZBVUxUX0FQSV9WRVJTSU9OID0gJzIwMjAtMDQnO1xyXG5cclxuLy9TZW5kcyB0aGUgUE9TVCB0byB0aGUgZ3JhcGhRTFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ3JhcGhxbFJlcXVlc3QoZ3FsLCAgc2hvcCA9IENvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJyksXHJcbiAgYWNjZXNzVG9rZW4gPSBDb29raWVzLmdldCgnYWNjZXNzVG9rZW4nKSwgYXBpVmVyc2lvbj1ERUZBVUxUX0FQSV9WRVJTSU9OKSB7XHJcblxyXG4gIGNvbnN0IHVybCA9IGBodHRwczovLyR7c2hvcH0vYWRtaW4vYXBpLyR7YXBpVmVyc2lvbn0vZ3JhcGhxbC5qc29uYDtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2dyYXBocWxcIixcclxuICAgICAgXCJYLVNob3BpZnktQWNjZXNzLVRva2VuXCI6IGFjY2Vzc1Rva2VuLFxyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxyXG4gICAgfSxcclxuICAgIGJvZHk6IGdxbFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9ycyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGlmIChlcnJvcnMpIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShlcnJvcnMpKTtcclxuICBjb25zdCB1c2VyRXJyb3JzID0gT2JqZWN0LnZhbHVlcyhkYXRhKS5maW5kKHYgPT4gdiAmJiB2LnVzZXJFcnJvcnMpO1xyXG4gIGlmICh1c2VyRXJyb3JzICYmIHVzZXJFcnJvcnMubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHVzZXJFcnJvcnMpKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy9HZXRzIHRoZSB0YWdzIGFuZCBpZCBvZiB0aGUgY3VzdG9tZXIgb2YgdGhlIGdpdmVuIG9yZGVyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb29sZXJzRnJvbU9yZGVyKG9yZGVySWQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhxbFJlcXVlc3QoXHJcbiAgYHF1ZXJ5IHtcclxuICAgIG9yZGVyKGlkOiBnaWQ6Ly9zaG9waWZ5L09yZGVyLyR7b3JkZXJJZH0pIHtcclxuICAgICAgY3VzdG9tZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgdGFnc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfWBcclxuKVxyXG5jb25zdCBpZCA9IGRhdGEub3JkZXIuY3VzdG9tZXIuaWQ7XHJcbmFsZXJ0KGlkKTtcclxucmV0dXJuIHsuLi5kYXRhLm9yZGVyLCBpZDogZGF0YS5vcmRlci5jdXN0b21lci5pZCwgdGFnczogZGF0YS5vcmRlci5jdXN0b21lci50YWdzfVxyXG59XHJcblxyXG4vL01ha2VzIHRoZSBncWwgc3RyaW5nIHRoYXQgcmVkdWNlcyB0aGUgbnVtYmVyIG9mIGNvb2xlcnMgZm9yIHRoZVxyXG4vL2N1c3RvbWVyIG9mIHRoZSBnaXZlbiBvcmRlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkdWNlQ29vbGVyQ291bnQoY3VzdG9tZXIpIHtcclxuICByZXR1cm4gZ3JhcGhxbFJlcXVlc3QoXHJcblxyXG4gIClcclxufVxyXG5cclxuLy9NYWtlcyB0aGUgZ3FsIHN0cmluZyB0aGF0IGluY3JlYXNlcyB0aGUgbnVtYmVyIG9mIGNvb2xlcnMgZm9yIHRoZVxyXG4vL2N1c3RvbWVyIG9mIHRoZSBnaXZlbiBvcmRlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5jcmVhc2VDb29sZXJDb3VudChjdXN0b21lcikge1xyXG4gIHJldHVybiBncmFwaHFsUmVxdWVzdChcclxuXHJcbiAgKVxyXG59XHJcblxyXG4vL01ha2VzIHRoZSBncWwgc3RyaW5nIHRoYXQgYWRkcyB0aGUgY29vbGVyIHRvIHRoZSBvcmRlcidzIGN1c3RvbSBhdHRyaWJ1dGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRvT3JkZXIob3JkZXIsIGNvb2xlcikge1xyXG4gIHJldHVybiBncmFwaHFsUmVxdWVzdChcclxuXHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=