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
            alert(shop);
            url = "https://".concat(shop, "/admin/api/").concat(apiVersion, "/graphql.json");
            _context.next = 7;
            return node_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
              method: 'POST',
              headers: {
                "Content-Type": "application/graphql",
                "X-Shopify-Access-Token": accessToken,
                "Access-Control-Allow-Origin": "*"
              },
              body: gql
            });

          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();

          case 10:
            _yield$response$json = _context.sent;
            data = _yield$response$json.data;
            errors = _yield$response$json.errors;

            if (!errors) {
              _context.next = 15;
              break;
            }

            throw new Error(JSON.stringify(errors));

          case 15:
            userErrors = Object.values(data).find(function (v) {
              return v && v.userErrors;
            });

            if (!(userErrors && userErrors.length > 0)) {
              _context.next = 18;
              break;
            }

            throw new Error(JSON.stringify(userErrors));

          case 18:
            return _context.abrupt("return", data);

          case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUuanMiXSwibmFtZXMiOlsiREVGQVVMVF9BUElfVkVSU0lPTiIsImdyYXBocWxSZXF1ZXN0IiwiZ3FsIiwic2hvcCIsIkNvb2tpZXMiLCJnZXQiLCJhY2Nlc3NUb2tlbiIsImFwaVZlcnNpb24iLCJhbGVydCIsInVybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3JzIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlckVycm9ycyIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJ2IiwibGVuZ3RoIiwiY29vbGVyc0Zyb21PcmRlciIsIm9yZGVySWQiLCJpZCIsIm9yZGVyIiwiY3VzdG9tZXIiLCJ0YWdzIiwicmVkdWNlQ29vbGVyQ291bnQiLCJpbmNyZWFzZUNvb2xlckNvdW50IiwiYWRkVG9PcmRlciIsImNvb2xlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUE1QixDLENBRUE7O1NBRWVDLGM7O0VBc0JmOzs7O3FNQXRCQSxpQkFBOEJDLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0NDLGdCQUFwQywyREFBMkNDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQTNDO0FBQ0VDLHVCQURGLDJEQUNnQkYsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosQ0FEaEI7QUFDNENFLHNCQUQ1QywyREFDdURQLG1CQUR2RDtBQUVFUSxpQkFBSyxDQUFDTCxJQUFELENBQUw7QUFDTU0sZUFIUixxQkFHeUJOLElBSHpCLHdCQUcyQ0ksVUFIM0M7QUFBQTtBQUFBLG1CQUt5QkcsaURBQUssQ0FBQ0QsR0FBRCxFQUFNO0FBQ2hDRSxvQkFBTSxFQUFFLE1BRHdCO0FBRWhDQyxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCLHFCQURUO0FBRVAsMENBQTBCTixXQUZuQjtBQUdQLCtDQUErQjtBQUh4QixlQUZ1QjtBQU9oQ08sa0JBQUksRUFBRVg7QUFQMEIsYUFBTixDQUw5Qjs7QUFBQTtBQUtRWSxvQkFMUjtBQUFBO0FBQUEsbUJBZWlDQSxRQUFRLENBQUNDLElBQVQsRUFmakM7O0FBQUE7QUFBQTtBQWVVQyxnQkFmVix3QkFlVUEsSUFmVjtBQWVnQkMsa0JBZmhCLHdCQWVnQkEsTUFmaEI7O0FBQUEsaUJBZ0JNQSxNQWhCTjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFnQm9CLElBQUlDLEtBQUosQ0FBVUMsSUFBSSxDQUFDQyxTQUFMLENBQWVILE1BQWYsQ0FBVixDQWhCcEI7O0FBQUE7QUFpQlFJLHNCQWpCUixHQWlCcUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxJQUFkLEVBQW9CUSxJQUFwQixDQUF5QixVQUFBQyxDQUFDO0FBQUEscUJBQUlBLENBQUMsSUFBSUEsQ0FBQyxDQUFDSixVQUFYO0FBQUEsYUFBMUIsQ0FqQnJCOztBQUFBLGtCQWtCTUEsVUFBVSxJQUFJQSxVQUFVLENBQUNLLE1BQVgsR0FBb0IsQ0FsQnhDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQWtCaUQsSUFBSVIsS0FBSixDQUFVQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsVUFBZixDQUFWLENBbEJqRDs7QUFBQTtBQUFBLDZDQW1CU0wsSUFuQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXVCTyxTQUFlVyxnQkFBdEI7QUFBQTtBQUFBLEMsQ0FnQkE7QUFDQTs7O3VNQWpCTyxrQkFBZ0NDLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2MzQixjQUFjLHNEQUVDMkIsT0FGRCwwRUFENUI7O0FBQUE7QUFDQ1osZ0JBREQ7QUFXRGEsY0FYQyxHQVdJYixJQUFJLENBQUNjLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsRUFYeEI7QUFZUHJCLGlCQUFLLENBQUNxQixFQUFELENBQUw7QUFaTyw4RUFhSWIsSUFBSSxDQUFDYyxLQWJUO0FBYWdCRCxnQkFBRSxFQUFFYixJQUFJLENBQUNjLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsRUFieEM7QUFhNENHLGtCQUFJLEVBQUVoQixJQUFJLENBQUNjLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkM7QUFidEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWtCQSxTQUFlQyxpQkFBdEI7QUFBQTtBQUFBLEMsQ0FNQTtBQUNBOzs7d01BUE8sa0JBQWlDRixRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ0U5QixjQUFjLEVBRGhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFRQSxTQUFlaUMsbUJBQXRCO0FBQUE7QUFBQSxDLENBTUE7OzswTUFOTyxrQkFBbUNILFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FDRTlCLGNBQWMsRUFEaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9BLFNBQWVrQyxVQUF0QjtBQUFBO0FBQUE7OztpTUFBTyxrQkFBMEJMLEtBQTFCLEVBQWlDTSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ0VuQyxjQUFjLEVBRGhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYzVmMjY5NGQ1Yzk1NDdkNjkzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBERUZBVUxUX0FQSV9WRVJTSU9OID0gJzIwMjAtMDQnO1xyXG5cclxuLy9TZW5kcyB0aGUgUE9TVCB0byB0aGUgZ3JhcGhRTFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ3JhcGhxbFJlcXVlc3QoZ3FsLCAgc2hvcCA9IENvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJyksXHJcbiAgYWNjZXNzVG9rZW4gPSBDb29raWVzLmdldCgnYWNjZXNzVG9rZW4nKSwgYXBpVmVyc2lvbj1ERUZBVUxUX0FQSV9WRVJTSU9OKSB7XHJcbiAgYWxlcnQoc2hvcClcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly8ke3Nob3B9L2FkbWluL2FwaS8ke2FwaVZlcnNpb259L2dyYXBocWwuanNvbmA7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9ncmFwaHFsXCIsXHJcbiAgICAgIFwiWC1TaG9waWZ5LUFjY2Vzcy1Ub2tlblwiOiBhY2Nlc3NUb2tlbixcclxuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcclxuICAgIH0sXHJcbiAgICBib2R5OiBncWxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAoZXJyb3JzKSB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSk7XHJcbiAgY29uc3QgdXNlckVycm9ycyA9IE9iamVjdC52YWx1ZXMoZGF0YSkuZmluZCh2ID0+IHYgJiYgdi51c2VyRXJyb3JzKTtcclxuICBpZiAodXNlckVycm9ycyAmJiB1c2VyRXJyb3JzLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh1c2VyRXJyb3JzKSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8vR2V0cyB0aGUgdGFncyBhbmQgaWQgb2YgdGhlIGN1c3RvbWVyIG9mIHRoZSBnaXZlbiBvcmRlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29vbGVyc0Zyb21PcmRlcihvcmRlcklkKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBocWxSZXF1ZXN0KFxyXG4gIGBxdWVyeSB7XHJcbiAgICBvcmRlcihpZDogZ2lkOi8vc2hvcGlmeS9PcmRlci8ke29yZGVySWR9KSB7XHJcbiAgICAgIGN1c3RvbWVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRhZ3NcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1gXHJcbilcclxuY29uc3QgaWQgPSBkYXRhLm9yZGVyLmN1c3RvbWVyLmlkO1xyXG5hbGVydChpZCk7XHJcbnJldHVybiB7Li4uZGF0YS5vcmRlciwgaWQ6IGRhdGEub3JkZXIuY3VzdG9tZXIuaWQsIHRhZ3M6IGRhdGEub3JkZXIuY3VzdG9tZXIudGFnc31cclxufVxyXG5cclxuLy9NYWtlcyB0aGUgZ3FsIHN0cmluZyB0aGF0IHJlZHVjZXMgdGhlIG51bWJlciBvZiBjb29sZXJzIGZvciB0aGVcclxuLy9jdXN0b21lciBvZiB0aGUgZ2l2ZW4gb3JkZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZHVjZUNvb2xlckNvdW50KGN1c3RvbWVyKSB7XHJcbiAgcmV0dXJuIGdyYXBocWxSZXF1ZXN0KFxyXG5cclxuICApXHJcbn1cclxuXHJcbi8vTWFrZXMgdGhlIGdxbCBzdHJpbmcgdGhhdCBpbmNyZWFzZXMgdGhlIG51bWJlciBvZiBjb29sZXJzIGZvciB0aGVcclxuLy9jdXN0b21lciBvZiB0aGUgZ2l2ZW4gb3JkZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluY3JlYXNlQ29vbGVyQ291bnQoY3VzdG9tZXIpIHtcclxuICByZXR1cm4gZ3JhcGhxbFJlcXVlc3QoXHJcblxyXG4gIClcclxufVxyXG5cclxuLy9NYWtlcyB0aGUgZ3FsIHN0cmluZyB0aGF0IGFkZHMgdGhlIGNvb2xlciB0byB0aGUgb3JkZXIncyBjdXN0b20gYXR0cmlidXRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb09yZGVyKG9yZGVyLCBjb29sZXIpIHtcclxuICByZXR1cm4gZ3JhcGhxbFJlcXVlc3QoXHJcblxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9