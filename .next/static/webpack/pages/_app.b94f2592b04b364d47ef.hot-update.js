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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUuanMiXSwibmFtZXMiOlsiREVGQVVMVF9BUElfVkVSU0lPTiIsIkRFRkFVTFRfQUNDRVNTVE9LRU4iLCJERUZBVUxUX1NUT1JFTkFNRSIsImdyYXBocWxSZXF1ZXN0IiwiZ3FsIiwic2hvcCIsImFjY2Vzc1Rva2VuIiwiYXBpVmVyc2lvbiIsInVybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3JzIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlckVycm9ycyIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJ2IiwibGVuZ3RoIiwiY29vbGVyc0Zyb21PcmRlciIsIm9yZGVySWQiLCJpZCIsIm9yZGVyIiwiY3VzdG9tZXIiLCJhbGVydCIsInRhZ3MiLCJyZWR1Y2VDb29sZXJDb3VudCIsImluY3JlYXNlQ29vbGVyQ291bnQiLCJhZGRUb09yZGVyIiwiY29vbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsd0NBQTVCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUNBQTFCLEMsQ0FFQTs7U0FFZUMsYzs7RUFvQmY7Ozs7cU1BcEJBLGlCQUE4QkMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQ0MsZ0JBQXBDLDJEQUEyQ0gsaUJBQTNDO0FBQ0VJLHVCQURGLDJEQUNnQkwsbUJBRGhCO0FBQ3FDTSxzQkFEckMsMkRBQ2dEUCxtQkFEaEQ7QUFHUVEsZUFIUixxQkFHeUJILElBSHpCLHdCQUcyQ0UsVUFIM0M7QUFBQTtBQUFBLG1CQUl5QkUsaURBQUssQ0FBQ0QsR0FBRCxFQUFNO0FBQ2hDRSxvQkFBTSxFQUFFLE1BRHdCO0FBRWhDQyxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCLHFCQURUO0FBRVAsMENBQTBCTCxXQUZuQjtBQUdQLCtDQUErQjtBQUh4QixlQUZ1QjtBQU9oQ00sa0JBQUksRUFBRVI7QUFQMEIsYUFBTixDQUo5Qjs7QUFBQTtBQUlRUyxvQkFKUjtBQUFBO0FBQUEsbUJBYWlDQSxRQUFRLENBQUNDLElBQVQsRUFiakM7O0FBQUE7QUFBQTtBQWFVQyxnQkFiVix3QkFhVUEsSUFiVjtBQWFnQkMsa0JBYmhCLHdCQWFnQkEsTUFiaEI7O0FBQUEsaUJBY01BLE1BZE47QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBY29CLElBQUlDLEtBQUosQ0FBVUMsSUFBSSxDQUFDQyxTQUFMLENBQWVILE1BQWYsQ0FBVixDQWRwQjs7QUFBQTtBQWVRSSxzQkFmUixHQWVxQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNQLElBQWQsRUFBb0JRLElBQXBCLENBQXlCLFVBQUFDLENBQUM7QUFBQSxxQkFBSUEsQ0FBQyxJQUFJQSxDQUFDLENBQUNKLFVBQVg7QUFBQSxhQUExQixDQWZyQjs7QUFBQSxrQkFnQk1BLFVBQVUsSUFBSUEsVUFBVSxDQUFDSyxNQUFYLEdBQW9CLENBaEJ4QztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFnQmlELElBQUlSLEtBQUosQ0FBVUMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLFVBQWYsQ0FBVixDQWhCakQ7O0FBQUE7QUFBQSw2Q0FpQlNMLElBakJUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFxQk8sU0FBZVcsZ0JBQXRCO0FBQUE7QUFBQSxDLENBZ0JBO0FBQ0E7Ozt1TUFqQk8sa0JBQWdDQyxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNjeEIsY0FBYyxzREFFQ3dCLE9BRkQsMEVBRDVCOztBQUFBO0FBQ0NaLGdCQUREO0FBV0RhLGNBWEMsR0FXSWIsSUFBSSxDQUFDYyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEVBWHhCO0FBWVBHLGlCQUFLLENBQUNILEVBQUQsQ0FBTDtBQVpPLDhFQWFJYixJQUFJLENBQUNjLEtBYlQ7QUFhZ0JELGdCQUFFLEVBQUViLElBQUksQ0FBQ2MsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixFQWJ4QztBQWE0Q0ksa0JBQUksRUFBRWpCLElBQUksQ0FBQ2MsS0FBTCxDQUFXQyxRQUFYLENBQW9CRTtBQWJ0RTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBa0JBLFNBQWVDLGlCQUF0QjtBQUFBO0FBQUEsQyxDQU1BO0FBQ0E7Ozt3TUFQTyxrQkFBaUNILFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FDRTNCLGNBQWMsRUFEaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVFBLFNBQWUrQixtQkFBdEI7QUFBQTtBQUFBLEMsQ0FNQTs7OzBNQU5PLGtCQUFtQ0osUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNFM0IsY0FBYyxFQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBT0EsU0FBZWdDLFVBQXRCO0FBQUE7QUFBQTs7O2lNQUFPLGtCQUEwQk4sS0FBMUIsRUFBaUNPLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FDRWpDLGNBQWMsRUFEaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI5NGYyNTkyYjA0YjM2NGQ0N2VmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuLy9pbXBvcnQgaG9zdFVSTCBmcm9tICcuLy4uL3NlcnZlci5qcydcclxuXHJcbmNvbnN0IERFRkFVTFRfQVBJX1ZFUlNJT04gPSAnMjAyMC0wNCc7XHJcbmNvbnN0IERFRkFVTFRfQUNDRVNTVE9LRU4gPSAnc2hwY2FfMTgyNjE3NjBkZDhlNzIwMjU1YTI5YjcxOGM1OTUzNzYnXHJcbmNvbnN0IERFRkFVTFRfU1RPUkVOQU1FID0gJ3N2ZW5maXNoLXRlc3Qtc3RvcmUubXlzaG9waWZ5LmNvbSdcclxuXHJcbi8vU2VuZHMgdGhlIFBPU1QgdG8gdGhlIGdyYXBoUUxcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdyYXBocWxSZXF1ZXN0KGdxbCwgIHNob3AgPSBERUZBVUxUX1NUT1JFTkFNRSxcclxuICBhY2Nlc3NUb2tlbiA9IERFRkFVTFRfQUNDRVNTVE9LRU4sIGFwaVZlcnNpb249REVGQVVMVF9BUElfVkVSU0lPTikge1xyXG5cclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly8ke3Nob3B9L2FkbWluL2FwaS8ke2FwaVZlcnNpb259L2dyYXBocWwuanNvbmA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2dyYXBocWxcIixcclxuICAgICAgXCJYLVNob3BpZnktQWNjZXNzLVRva2VuXCI6IGFjY2Vzc1Rva2VuLFxyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxyXG4gICAgfSxcclxuICAgIGJvZHk6IGdxbFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3JzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgaWYgKGVycm9ycykgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KGVycm9ycykpO1xyXG4gIGNvbnN0IHVzZXJFcnJvcnMgPSBPYmplY3QudmFsdWVzKGRhdGEpLmZpbmQodiA9PiB2ICYmIHYudXNlckVycm9ycyk7XHJcbiAgaWYgKHVzZXJFcnJvcnMgJiYgdXNlckVycm9ycy5sZW5ndGggPiAwKSB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkodXNlckVycm9ycykpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vL0dldHMgdGhlIHRhZ3MgYW5kIGlkIG9mIHRoZSBjdXN0b21lciBvZiB0aGUgZ2l2ZW4gb3JkZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvb2xlcnNGcm9tT3JkZXIob3JkZXJJZCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBncmFwaHFsUmVxdWVzdChcclxuICBgcXVlcnkge1xyXG4gICAgb3JkZXIoaWQ6IGdpZDovL3Nob3BpZnkvT3JkZXIvJHtvcmRlcklkfSkge1xyXG4gICAgICBjdXN0b21lciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0YWdzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9YFxyXG4pXHJcbmNvbnN0IGlkID0gZGF0YS5vcmRlci5jdXN0b21lci5pZDtcclxuYWxlcnQoaWQpO1xyXG5yZXR1cm4gey4uLmRhdGEub3JkZXIsIGlkOiBkYXRhLm9yZGVyLmN1c3RvbWVyLmlkLCB0YWdzOiBkYXRhLm9yZGVyLmN1c3RvbWVyLnRhZ3N9XHJcbn1cclxuXHJcbi8vTWFrZXMgdGhlIGdxbCBzdHJpbmcgdGhhdCByZWR1Y2VzIHRoZSBudW1iZXIgb2YgY29vbGVycyBmb3IgdGhlXHJcbi8vY3VzdG9tZXIgb2YgdGhlIGdpdmVuIG9yZGVyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWR1Y2VDb29sZXJDb3VudChjdXN0b21lcikge1xyXG4gIHJldHVybiBncmFwaHFsUmVxdWVzdChcclxuXHJcbiAgKVxyXG59XHJcblxyXG4vL01ha2VzIHRoZSBncWwgc3RyaW5nIHRoYXQgaW5jcmVhc2VzIHRoZSBudW1iZXIgb2YgY29vbGVycyBmb3IgdGhlXHJcbi8vY3VzdG9tZXIgb2YgdGhlIGdpdmVuIG9yZGVyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmNyZWFzZUNvb2xlckNvdW50KGN1c3RvbWVyKSB7XHJcbiAgcmV0dXJuIGdyYXBocWxSZXF1ZXN0KFxyXG5cclxuICApXHJcbn1cclxuXHJcbi8vTWFrZXMgdGhlIGdxbCBzdHJpbmcgdGhhdCBhZGRzIHRoZSBjb29sZXIgdG8gdGhlIG9yZGVyJ3MgY3VzdG9tIGF0dHJpYnV0ZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVG9PcmRlcihvcmRlciwgY29vbGVyKSB7XHJcbiAgcmV0dXJuIGdyYXBocWxSZXF1ZXN0KFxyXG5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==