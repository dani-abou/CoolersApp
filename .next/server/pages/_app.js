module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@shopify/polaris/dist/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/polaris/dist/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@shopify/polaris/locales/en.json":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/polaris/locales/en.json ***!
  \*******************************************************/
/*! exports provided: Polaris, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Polaris\":{\"Actions\":{\"moreActions\":\"More actions\"},\"Avatar\":{\"label\":\"Avatar\",\"labelWithInitials\":\"Avatar with initials {initials}\"},\"Autocomplete\":{\"spinnerAccessibilityLabel\":\"Loading\"},\"Badge\":{\"PROGRESS_LABELS\":{\"incomplete\":\"Incomplete\",\"partiallyComplete\":\"Partially complete\",\"complete\":\"Complete\"},\"STATUS_LABELS\":{\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"critical\":\"Critical\",\"attention\":\"Attention\",\"new\":\"New\"},\"progressAndStatus\":\"{statusLabel} {progressLabel}\"},\"Button\":{\"spinnerAccessibilityLabel\":\"Loading\",\"connectedDisclosureAccessibilityLabel\":\"Related actions\"},\"Common\":{\"checkbox\":\"checkbox\",\"undo\":\"Undo\",\"cancel\":\"Cancel\",\"newWindowAccessibilityHint\":\"(opens a new window)\",\"clear\":\"Clear\",\"close\":\"Close\",\"submit\":\"Submit\",\"more\":\"More\"},\"ContextualSaveBar\":{\"save\":\"Save\",\"discard\":\"Discard\"},\"DataTable\":{\"sortAccessibilityLabel\":\"sort {direction} by\",\"navAccessibilityLabel\":\"Scroll table {direction} one column\",\"totalsRowHeading\":\"Totals\",\"totalRowHeading\":\"Total\"},\"DatePicker\":{\"previousMonth\":\"Show previous month, {previousMonthName} {showPreviousYear}\",\"nextMonth\":\"Show next month, {nextMonth} {nextYear}\",\"today\":\"Today \",\"start\":\"Start of range\",\"end\":\"End of range\",\"months\":{\"january\":\"January\",\"february\":\"February\",\"march\":\"March\",\"april\":\"April\",\"may\":\"May\",\"june\":\"June\",\"july\":\"July\",\"august\":\"August\",\"september\":\"September\",\"october\":\"October\",\"november\":\"November\",\"december\":\"December\"},\"days\":{\"monday\":\"Monday\",\"tuesday\":\"Tuesday\",\"wednesday\":\"Wednesday\",\"thursday\":\"Thursday\",\"friday\":\"Friday\",\"saturday\":\"Saturday\",\"sunday\":\"Sunday\"},\"daysAbbreviated\":{\"monday\":\"Mo\",\"tuesday\":\"Tu\",\"wednesday\":\"We\",\"thursday\":\"Th\",\"friday\":\"Fr\",\"saturday\":\"Sa\",\"sunday\":\"Su\"}},\"DiscardConfirmationModal\":{\"title\":\"Discard all unsaved changes\",\"message\":\"If you discard changes, you’ll delete any edits you made since you last saved.\",\"primaryAction\":\"Discard changes\",\"secondaryAction\":\"Continue editing\"},\"DropZone\":{\"overlayTextFile\":\"Drop file to upload\",\"overlayTextImage\":\"Drop image to upload\",\"errorOverlayTextFile\":\"File type is not valid\",\"errorOverlayTextImage\":\"Image type is not valid\",\"FileUpload\":{\"actionTitleFile\":\"Add file\",\"actionTitleImage\":\"Add image\",\"actionHintFile\":\"or drop files to upload\",\"actionHintImage\":\"or drop images to upload\",\"label\":\"Upload file\"}},\"EmptySearchResult\":{\"altText\":\"Empty search results\"},\"Frame\":{\"skipToContent\":\"Skip to content\",\"Navigation\":{\"closeMobileNavigationLabel\":\"Close navigation\"}},\"Icon\":{\"backdropWarning\":\"The {color} icon doesn’t accept backdrops. The icon colors that have backdrops are: {colorsWithBackDrops}\"},\"ActionMenu\":{\"RollupActions\":{\"rollupButton\":\"Actions\"}},\"Filters\":{\"moreFilters\":\"More filters\",\"moreFiltersWithCount\":\"More filters ({count})\",\"filter\":\"Filter {resourceName}\",\"noFiltersApplied\":\"No filters applied\",\"cancel\":\"Cancel\",\"done\":\"Done\",\"clearAllFilters\":\"Clear all filters\",\"clear\":\"Clear\",\"clearLabel\":\"Clear {filterName}\"},\"Loading\":{\"label\":\"Page loading bar\"},\"Modal\":{\"iFrameTitle\":\"body markup\",\"modalWarning\":\"These required properties are missing from Modal: {missingProps}\"},\"Pagination\":{\"previous\":\"Previous\",\"next\":\"Next\",\"pagination\":\"Pagination\"},\"ProgressBar\":{\"negativeWarningMessage\":\"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.\",\"exceedWarningMessage\":\"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100.\"},\"ResourceList\":{\"sortingLabel\":\"Sort by\",\"defaultItemSingular\":\"item\",\"defaultItemPlural\":\"items\",\"showing\":\"Showing {itemsCount} {resource}\",\"showingTotalCount\":\"Showing {itemsCount} of {totalItemsCount} {resource}\",\"loading\":\"Loading {resource}\",\"selected\":\"{selectedItemsCount} selected\",\"allItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} in your store are selected.\",\"allFilteredItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} in this filter are selected.\",\"selectAllItems\":\"Select all {itemsLength}+ {resourceNamePlural} in your store\",\"selectAllFilteredItems\":\"Select all {itemsLength}+ {resourceNamePlural} in this filter\",\"emptySearchResultTitle\":\"No {resourceNamePlural} found\",\"emptySearchResultDescription\":\"Try changing the filters or search term\",\"selectButtonText\":\"Select\",\"a11yCheckboxDeselectAllSingle\":\"Deselect {resourceNameSingular}\",\"a11yCheckboxSelectAllSingle\":\"Select {resourceNameSingular}\",\"a11yCheckboxDeselectAllMultiple\":\"Deselect all {itemsLength} {resourceNamePlural}\",\"a11yCheckboxSelectAllMultiple\":\"Select all {itemsLength} {resourceNamePlural}\",\"ariaLiveSingular\":\"{itemsLength} item\",\"ariaLivePlural\":\"{itemsLength} items\",\"Item\":{\"actionsDropdownLabel\":\"Actions for {accessibilityLabel}\",\"actionsDropdown\":\"Actions dropdown\",\"viewItem\":\"View details for {itemName}\"},\"BulkActions\":{\"actionsActivatorLabel\":\"Actions\",\"moreActionsActivatorLabel\":\"More actions\",\"warningMessage\":\"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions.\"},\"FilterCreator\":{\"filterButtonLabel\":\"Filter\",\"selectFilterKeyPlaceholder\":\"Select a filter…\",\"addFilterButtonLabel\":\"Add filter\",\"showAllWhere\":\"Show all {resourceNamePlural} where:\"},\"FilterControl\":{\"textFieldLabel\":\"Search {resourceNamePlural}\"},\"FilterValueSelector\":{\"selectFilterValuePlaceholder\":\"Select a filter…\"},\"DateSelector\":{\"dateFilterLabel\":\"Select a value\",\"dateValueLabel\":\"Date\",\"dateValueError\":\"Match YYYY-MM-DD format\",\"dateValuePlaceholder\":\"YYYY-MM-DD\",\"SelectOptions\":{\"PastWeek\":\"in the last week\",\"PastMonth\":\"in the last month\",\"PastQuarter\":\"in the last 3 months\",\"PastYear\":\"in the last year\",\"ComingWeek\":\"next week\",\"ComingMonth\":\"next month\",\"ComingQuarter\":\"in the next 3 months\",\"ComingYear\":\"in the next year\",\"OnOrBefore\":\"on or before\",\"OnOrAfter\":\"on or after\"},\"FilterLabelForValue\":{\"past_week\":\"in the last week\",\"past_month\":\"in the last month\",\"past_quarter\":\"in the last 3 months\",\"past_year\":\"in the last year\",\"coming_week\":\"next week\",\"coming_month\":\"next month\",\"coming_quarter\":\"in the next 3 months\",\"coming_year\":\"in the next year\",\"on_or_before\":\"before {date}\",\"on_or_after\":\"after {date}\"}}},\"SkeletonPage\":{\"loadingLabel\":\"Page loading\"},\"Spinner\":{\"warningMessage\":\"The color {color} is not meant to be used on {size} spinners. The colors available on large spinners are: {colors}\"},\"Tabs\":{\"toggleTabsLabel\":\"More tabs\"},\"Tag\":{\"ariaLabel\":\"Remove {children}\"},\"TextField\":{\"characterCount\":\"{count} characters\",\"characterCountWithMaxLength\":\"{count} of {limit} characters used\"},\"TooltipOverlay\":{\"accessibilityLabel\":\"Tooltip: {label}\"},\"TopBar\":{\"toggleMenuLabel\":\"Toggle menu\",\"SearchField\":{\"clearButtonLabel\":\"Clear\",\"search\":\"Search\"}},\"MediaCard\":{\"popoverButton\":\"Actions\"},\"VideoThumbnail\":{\"playButtonA11yLabel\":{\"default\":\"Play video\",\"defaultWithDuration\":\"Play video of length {duration}\",\"duration\":{\"hours\":{\"other\":{\"only\":\"{hourCount} hours\",\"andMinutes\":\"{hourCount} hours and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hours and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hours and {secondCount} seconds\",\"andSecond\":\"{hourCount} hours and {secondCount} second\"},\"one\":{\"only\":\"{hourCount} hour\",\"andMinutes\":\"{hourCount} hour and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hour and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hour and {secondCount} seconds\",\"andSecond\":\"{hourCount} hour and {secondCount} second\"}},\"minutes\":{\"other\":{\"only\":\"{minuteCount} minutes\",\"andSeconds\":\"{minuteCount} minutes and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minutes and {secondCount} second\"},\"one\":{\"only\":\"{minuteCount} minute\",\"andSeconds\":\"{minuteCount} minute and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minute and {secondCount} second\"}},\"seconds\":{\"other\":\"{secondCount} seconds\",\"one\":\"{secondCount} second\"}}}}}}");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/react-tabs/style/react-tabs.css":
/*!******************************************************!*\
  !*** ./node_modules/react-tabs/style/react-tabs.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/CoolerCount.js":
/*!******************************!*\
  !*** ./pages/CoolerCount.js ***!
  \******************************/
/*! exports provided: updateInCoolerCount, updateOutCoolerCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInCoolerCount", function() { return updateInCoolerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOutCoolerCount", function() { return updateOutCoolerCount; });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./pages/store.js");
 //

async function updateInCoolerCount(order) {
  let customerId = await Object(_store_js__WEBPACK_IMPORTED_MODULE_0__["coolersFromOrder"])(order);
  await Object(_store_js__WEBPACK_IMPORTED_MODULE_0__["reduceCoolerCount"])(customerId);
}
async function updateOutCoolerCount(order, cooler) {
  let customerId = await Object(_store_js__WEBPACK_IMPORTED_MODULE_0__["coolersFromOrder"])(order);
  await Object(_store_js__WEBPACK_IMPORTED_MODULE_0__["increaseCoolerCount"])(customerId);
  await Object(_store_js__WEBPACK_IMPORTED_MODULE_0__["addToOrder"])(order, cooler);
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css */ "./pages/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris/dist/styles.css */ "./node_modules/@shopify/polaris/dist/styles.css");
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./firebase.js */ "./pages/firebase.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-tabs/style/react-tabs.css */ "./node_modules/react-tabs/style/react-tabs.css");
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _CoolerCount_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CoolerCount.js */ "./pages/CoolerCount.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store.js */ "./pages/store.js");

var _jsxFileName = "C:\\Users\\abouh\\OneDrive\\Desktop\\CoolersApp\\pages\\_app.js";















 //The name of the collection of the cooler database
//Kept globally so it's easily changeable

const databaseName = 'cooler-tracking'; //Update cooler with given id to out with the given order number

async function updateOutboundCooler(order, cooler, employeeNo) {
  let res = _firebase_js__WEBPACK_IMPORTED_MODULE_10__["default"].collection(databaseName).doc(cooler).set({
    status: order,
    employee: employeeNo
  });
  Object(_store_js__WEBPACK_IMPORTED_MODULE_16__["coolersFromOrder"])(order);
  Object(_CoolerCount_js__WEBPACK_IMPORTED_MODULE_15__["updateOutCoolerCount"])(order, cooler);
} //Update the given cooler id to inventory


async function updateInboundCooler(coolers) {
  const batch = _firebase_js__WEBPACK_IMPORTED_MODULE_10__["default"].batch();
  coolers.map(id => {
    // let coolerTuple = await db.collection(databaseName).doc(id).get();
    // let order = coolerTuple.get('status');
    // if (order !== "inventory") {
    //     updateInCoolerCount(order);
    // }
    let currentRef = _firebase_js__WEBPACK_IMPORTED_MODULE_10__["default"].collection(databaseName).doc(id);
    batch.set(currentRef, {
      status: 'inventory',
      employee: 'inventory'
    });
  });
  let res = await batch.commit();
} //Instantiates the page to assosciate the order to cooler


function OutboundPage(props) {
  //States to represent the current value of the order and the cooler
  const {
    0: employeeNum,
    1: setEmployee
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])("NA");
  const {
    0: orderNum,
    1: setOrder
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])("NA");
  const {
    0: coolerNum,
    1: setCooler
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])("NA"); //States to represent the value held within the input fields

  const {
    0: inEValue,
    1: setInEValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('');
  const {
    0: inOValue,
    1: setInOValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('');
  const {
    0: inCValue,
    1: setInCValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''); //State to represent the error messages if needed (if none, then keep empty)

  const {
    0: errorMsg,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''); //Refs to each of the fields so to trade off focuses

  const eNumberField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
  const oNumberField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
  const cNumberField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef(); //Handles the changes in the order input field
  //Only stores new order if it is of correct length

  const handleOChange = e => {
    let input = e.target.value;

    if (input.length === props.orderLength) {
      setOrder(input);
      setInOValue('');
      cNumberField.current.focus();
    } else {
      setInOValue(input);
    }
  }; //Handles the changges to the cooler input field
  //Only stores new cooler if it is of correct length


  const handleCChange = e => {
    let input = e.target.value;

    if (input.length == props.coolerLength) {
      setCooler(input);
      setInCValue('');
      eNumberField.current.focus();
    } else {
      setInCValue(input);
    }
  }; //Handles the changges to the cooler input field
  //Only stores new cooler if it is of correct length


  const handleEChange = e => {
    let input = e.target.value;

    if (input.length == props.employeeLength) {
      setEmployee(input);
      setInEValue('');
      oNumberField.current.focus();
    } else {
      setInEValue(input);
    }
  }; //Handles the submit button's functionality
  //Updates the outgoing cooler then resets the states of the cooler and order
  //Prints error if either are NA


  const handleSubmit = () => {
    if (orderNum !== 'NA' && coolerNum !== 'NA' && employeeNum !== 'NA') {
      updateOutboundCooler(orderNum, coolerNum, employeeNum);
      setOrder('NA');
      setCooler('NA');
      setEmployee('NA');
      setError('');
      oNumberField.current.focus();
    } else {
      setError('Need to have an employee number, order number, and cooler number');
    }
  }; //Prints the outgoing page


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "inOutPage",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "pageTitle",
      children: "Cooler Scanning"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "fieldDiv",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "scanLabel",
        children: ["Employee Number:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: inEValue,
          onChange: handleEChange,
          className: "inputBox",
          ref: eNumberField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "scanLabel",
        children: ["Order Number:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: inOValue,
          onChange: handleOChange,
          className: "inputBox",
          ref: oNumberField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "scanLabel",
        children: ["Cooler Number:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: inCValue,
          onChange: handleCChange,
          className: "inputBox",
          ref: cNumberField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "numbersDiv",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        style: {
          color: "red"
        },
        children: errorMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Employee Order Number: ", employeeNum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Current Order Number: ", orderNum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Current Cooler Number: ", coolerNum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }, this);
} //Instantiates the page to mark the cooler as picked up


function InboundPage(props) {
  //State that represents the value in the input field
  const {
    0: inCValue,
    1: setInCValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''); //Represents the accumulating list of coolers to be updated

  const {
    0: coolers,
    1: setCoolers
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]); //Handles when cooler field has been changed
  //-- only has an effect if the cooler id's length is the desired one

  const handleChange = e => {
    let input = e.target.value;

    if (input.length == props.coolerLength) {
      setInCValue('');

      if (!coolers.includes(input)) {
        setCoolers([...coolers, input]);
      }
    } else {
      setInCValue(input);
    }
  };

  const handleInSubmit = () => {
    updateInboundCooler(coolers);
    setCoolers([]);
  };

  const preventEnterSubmit = e => {
    alert(here);
    e.preventDefault();
  }; //Prints this page


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "pageTitle",
      children: "Cooler Scanning"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "inOutPage",
      onSubmit: e => {
        e.preventDefault();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "scanLabel",
        children: ["Cooler Number:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: inCValue,
          onChange: handleChange,
          className: "inputBox"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "subSectionIn",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "numOfCools",
        children: ["There are ", coolers.length, " coolers in this batch"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "inSubmitButton",
        onClick: handleInSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 201,
    columnNumber: 5
  }, this);
}

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    const config = {
      apiKey: "0d384851f6bb0caff094edb28483088d",
      shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('shopOrigin'),
      forcedRedirect: true
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["AppProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "App",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["Tabs"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["TabList"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["Tab"], {
              children: "Assigning Cooler"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["Tab"], {
              children: "Inbound Cooler"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["TabPanel"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OutboundPage, {
              employeeLength: 3,
              orderLength: 13,
              coolerLength: 4
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["TabPanel"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InboundPage, {
              coolerLength: 4
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./pages/app.css":
/*!***********************!*\
  !*** ./pages/app.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/firebase.js":
/*!***************************!*\
  !*** ./pages/firebase.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfig = {
  apiKey: "AIzaSyDdHApO74zTWvTrxV6V5RN86MzPew7MZao",
  authDomain: "wise-resolver-276416.firebaseapp.com",
  databaseURL: "https://wise-resolver-276416.firebaseio.com",
  projectId: "wise-resolver-276416",
  storageBucket: "wise-resolver-276416.appspot.com",
  messagingSenderId: "132395677069",
  appId: "1:132395677069:web:c637029d2ca18a6a7879c4"
};
let fb = !firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
let db = fb.firestore();
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ "./pages/store.js":
/*!************************!*\
  !*** ./pages/store.js ***!
  \************************/
/*! exports provided: coolersFromOrder, reduceCoolerCount, increaseCoolerCount, addToOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coolersFromOrder", function() { return coolersFromOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceCoolerCount", function() { return reduceCoolerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseCoolerCount", function() { return increaseCoolerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToOrder", function() { return addToOrder; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const DEFAULT_API_VERSION = '2020-04'; //Sends the POST to the graphQL

async function graphqlRequest(gql, shop = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('shopOrigin'), accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('accessToken'), apiVersion = DEFAULT_API_VERSION) {
  const url = `https://${shop}/admin/api/${apiVersion}/graphql.json`;
  const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/graphql",
      "X-Shopify-Access-Token": accessToken,
      "Access-Control-Allow-Origin": "*"
    },
    body: gql
  });
  const {
    data,
    errors
  } = await response.json();
  console.log(data);
  console.log(errors);
  if (errors) throw new Error(JSON.stringify(errors));
  const userErrors = Object.values(data).find(v => v && v.userErrors);
  if (userErrors && userErrors.length > 0) throw new Error(JSON.stringify(userErrors));
  return data;
} //Gets the tags and id of the customer of the given order


async function coolersFromOrder(orderId) {
  const data = await graphqlRequest(`query {
    order(id: gid://shopify/Order/${orderId}) {
      customer {
        id
        tags
      }
    }
  }`);
  const id = data.order.customer.id;
  alert(id);
  return _objectSpread(_objectSpread({}, data.order), {}, {
    id: data.order.customer.id,
    tags: data.order.customer.tags
  });
} //Makes the gql string that reduces the number of coolers for the
//customer of the given order

async function reduceCoolerCount(customer) {
  return graphqlRequest();
} //Makes the gql string that increases the number of coolers for the
//customer of the given order

async function increaseCoolerCount(customer) {
  return graphqlRequest();
} //Makes the gql string that adds the cooler to the order's custom attribute

async function addToOrder(order, cooler) {
  return graphqlRequest();
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0Nvb2xlckNvdW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwidXBkYXRlSW5Db29sZXJDb3VudCIsIm9yZGVyIiwiY3VzdG9tZXJJZCIsImNvb2xlcnNGcm9tT3JkZXIiLCJyZWR1Y2VDb29sZXJDb3VudCIsInVwZGF0ZU91dENvb2xlckNvdW50IiwiY29vbGVyIiwiaW5jcmVhc2VDb29sZXJDb3VudCIsImFkZFRvT3JkZXIiLCJkYXRhYmFzZU5hbWUiLCJ1cGRhdGVPdXRib3VuZENvb2xlciIsImVtcGxveWVlTm8iLCJyZXMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXQiLCJzdGF0dXMiLCJlbXBsb3llZSIsInVwZGF0ZUluYm91bmRDb29sZXIiLCJjb29sZXJzIiwiYmF0Y2giLCJtYXAiLCJpZCIsImN1cnJlbnRSZWYiLCJjb21taXQiLCJPdXRib3VuZFBhZ2UiLCJwcm9wcyIsImVtcGxveWVlTnVtIiwic2V0RW1wbG95ZWUiLCJ1c2VTdGF0ZSIsIm9yZGVyTnVtIiwic2V0T3JkZXIiLCJjb29sZXJOdW0iLCJzZXRDb29sZXIiLCJpbkVWYWx1ZSIsInNldEluRVZhbHVlIiwiaW5PVmFsdWUiLCJzZXRJbk9WYWx1ZSIsImluQ1ZhbHVlIiwic2V0SW5DVmFsdWUiLCJlcnJvck1zZyIsInNldEVycm9yIiwiZU51bWJlckZpZWxkIiwiY3JlYXRlUmVmIiwib051bWJlckZpZWxkIiwiY051bWJlckZpZWxkIiwiaGFuZGxlT0NoYW5nZSIsImUiLCJpbnB1dCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwib3JkZXJMZW5ndGgiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVDQ2hhbmdlIiwiY29vbGVyTGVuZ3RoIiwiaGFuZGxlRUNoYW5nZSIsImVtcGxveWVlTGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwiY29sb3IiLCJJbmJvdW5kUGFnZSIsInNldENvb2xlcnMiLCJoYW5kbGVDaGFuZ2UiLCJpbmNsdWRlcyIsImhhbmRsZUluU3VibWl0IiwicHJldmVudEVudGVyU3VibWl0IiwiYWxlcnQiLCJoZXJlIiwicHJldmVudERlZmF1bHQiLCJNeUFwcCIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwiYXBpS2V5IiwiQVBJX0tFWSIsInNob3BPcmlnaW4iLCJDb29raWVzIiwiZ2V0IiwiZm9yY2VkUmVkaXJlY3QiLCJmaXJlYmFzZUNvbmZpZyIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmIiLCJmaXJlYmFzZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiYXBwIiwiZmlyZXN0b3JlIiwiREVGQVVMVF9BUElfVkVSU0lPTiIsImdyYXBocWxSZXF1ZXN0IiwiZ3FsIiwic2hvcCIsImFjY2Vzc1Rva2VuIiwiYXBpVmVyc2lvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJlcnJvcnMiLCJqc29uIiwibG9nIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlckVycm9ycyIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJ2Iiwib3JkZXJJZCIsImN1c3RvbWVyIiwidGFncyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1Qzs7QUFDQTs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxrQ0FBa0M7QUFBQTtBQUFsQztBQUFrQyxDQUFsQyxFQUd5QztBQUN2QyxRQUFNQSxTQUFTLEdBQUcsTUFBTSwyQ0FBeEIsR0FBd0IsQ0FBeEI7QUFDQSxTQUFPO0FBQVA7QUFBTyxHQUFQO0FBR2E7O0FBQUEsa0JBQTJDQyxlQUFNQyxTQUFqRCxDQUdiO0FBSUE7QUFDQTtBQUNBO0FBQ0FDLG1CQUFpQixvQkFBNEM7QUFDM0Q7QUFHRkM7O0FBQUFBLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBcUQsS0FBM0Q7QUFHQSx3QkFDRSxxRUFHSTtBQUNBO0FBQ0ksTUFBRUMsT0FBTyxJQUFULFdBQXdCO0FBQUVDLFNBQUcsRUFBRUMsU0FBUyxDQUF4QyxNQUF3QztBQUFoQixLQUF4QixHQU5WLEVBQ0UsRUFERjtBQWZGOztBQUFBOzs7QUFIbUJDLEcsQ0FJWkMsbUJBSllELEdBSVVFLGtCQUpWRjtBQUFBQSxHLENBS1pHLGVBTFlILEdBS01FLGtCQUxORjtBQStCckI7QUFDQTs7QUFFQSxVQUEyQztBQUN6Q0ksZUFBYSxHQUFHLHFCQUFTLE1BQU07QUFDN0JDLFdBQU8sQ0FBUEE7QUFERkQsR0FBZ0IsQ0FBaEJBO0FBTUFFLFNBQU8sR0FBRyxxQkFBUyxNQUFNO0FBQ3ZCRCxXQUFPLENBQVBBO0FBREZDLEdBQVUsQ0FBVkE7QUFPRixDLENBQUE7OztBQUNPLHNCQUEyQjtBQUNoQyxZQUEyQ0YsYUFBYTtBQUN4RCxTQUFPRyxDQUFDLENBQVI7QUFHSzs7QUFBQSwyQkFBbUM7QUFDeEM7QUFDQSxRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUNBLFNBQU87QUFDTCxnQkFBWTtBQUNWLGdCQUEyQ0QsT0FBTztBQUNsRDtBQUhHOztBQUtMLG1CQUFlO0FBQ2IsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBUEc7O0FBU0wsaUJBQWE7QUFDWCxnQkFBMkNBLE9BQU87QUFDbEQ7QUFYRzs7QUFhTEUsUUFBSSxFQUFFLE1BQU07QUFDVixnQkFBMkNGLE9BQU87QUFDbERHLFlBQU0sQ0FBTkE7QUFmRztBQWlCTEMsUUFBSSxFQUFFLGFBQThCO0FBQ2xDLGdCQUEyQ0osT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLFVBQVAsRUFBT0EsQ0FBUDtBQW5CRztBQXFCTEUsVUFBTSxFQUFFLGNBQStCO0FBQ3JDLGdCQUEyQ0wsT0FBTztBQUNsRCxZQUFNTSxTQUFTLEdBQUdDLEVBQUUsVUFBcEI7QUFDQSxZQUFNQyxPQUFPLEdBQUdELEVBQUUsSUFBbEI7QUFFQSxhQUFPSixNQUFNLENBQU5BLGdCQUFQLE9BQU9BLENBQVA7QUExQkc7QUE0QkxNLFdBQU8sRUFBRSxhQUE4QjtBQUNyQyxnQkFBMkNULE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxhQUFQLEVBQU9BLENBQVA7QUE5Qkc7QUFnQ0xPLGFBQVMsRUFBRSxjQUErQjtBQUN4QyxnQkFBMkNWLE9BQU87QUFDbEQsWUFBTVcsWUFBWSxHQUFHSixFQUFFLFVBQXZCO0FBQ0EsWUFBTUssVUFBVSxHQUFHTCxFQUFFLElBQXJCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxzQkFBUCxVQUFPQSxDQUFQO0FBckNKO0FBQU8sR0FBUDtBQXdDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IRDtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNPLGVBQWVVLG1CQUFmLENBQW1DQyxLQUFuQyxFQUEwQztBQUMvQyxNQUFJQyxVQUFVLEdBQUcsTUFBTUMsa0VBQWdCLENBQUNGLEtBQUQsQ0FBdkM7QUFDQSxRQUFNRyxtRUFBaUIsQ0FBQ0YsVUFBRCxDQUF2QjtBQUNEO0FBRU0sZUFBZUcsb0JBQWYsQ0FBb0NKLEtBQXBDLEVBQTJDSyxNQUEzQyxFQUFtRDtBQUN4RCxNQUFJSixVQUFVLEdBQUcsTUFBTUMsa0VBQWdCLENBQUNGLEtBQUQsQ0FBdkM7QUFDQSxRQUFNTSxxRUFBbUIsQ0FBQ0wsVUFBRCxDQUF6QjtBQUNBLFFBQU1NLDREQUFVLENBQUNQLEtBQUQsRUFBUUssTUFBUixDQUFoQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTtBQUNBOztBQUNBLE1BQU1HLFlBQVksR0FBRyxpQkFBckIsQyxDQUVBOztBQUNBLGVBQWVDLG9CQUFmLENBQW9DVCxLQUFwQyxFQUEyQ0ssTUFBM0MsRUFBbURLLFVBQW5ELEVBQStEO0FBQzdELE1BQUlDLEdBQUcsR0FBR0MscURBQUUsQ0FBQ0MsVUFBSCxDQUFjTCxZQUFkLEVBQTRCTSxHQUE1QixDQUFnQ1QsTUFBaEMsRUFDUFUsR0FETyxDQUNIO0FBQUNDLFVBQU0sRUFBRWhCLEtBQVQ7QUFBZ0JpQixZQUFRLEVBQUVQO0FBQTFCLEdBREcsQ0FBVjtBQUVBUixxRUFBZ0IsQ0FBQ0YsS0FBRCxDQUFoQjtBQUNBSSwrRUFBb0IsQ0FBQ0osS0FBRCxFQUFRSyxNQUFSLENBQXBCO0FBQ0QsQyxDQUVEOzs7QUFDQSxlQUFlYSxtQkFBZixDQUFtQ0MsT0FBbkMsRUFBNEM7QUFDMUMsUUFBTUMsS0FBSyxHQUFHUixxREFBRSxDQUFDUSxLQUFILEVBQWQ7QUFDQUQsU0FBTyxDQUFDRSxHQUFSLENBQ0dDLEVBQUQsSUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJQyxVQUFVLEdBQUdYLHFEQUFFLENBQUNDLFVBQUgsQ0FBY0wsWUFBZCxFQUE0Qk0sR0FBNUIsQ0FBZ0NRLEVBQWhDLENBQWpCO0FBQ0FGLFNBQUssQ0FBQ0wsR0FBTixDQUFVUSxVQUFWLEVBQXNCO0FBQUNQLFlBQU0sRUFBRSxXQUFUO0FBQXNCQyxjQUFRLEVBQUU7QUFBaEMsS0FBdEI7QUFDRCxHQVREO0FBV0EsTUFBSU4sR0FBRyxHQUFHLE1BQU1TLEtBQUssQ0FBQ0ksTUFBTixFQUFoQjtBQUNELEMsQ0FFRDs7O0FBQ0MsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0I7QUFDRCxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBNkJDLHNEQUFRLENBQUMsSUFBRCxDQUEzQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUF1QkYsc0RBQVEsQ0FBQyxJQUFELENBQXJDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQXlCSixzREFBUSxDQUFDLElBQUQsQ0FBdkMsQ0FKNEIsQ0FLNUI7O0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJSLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDUyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlYsc0RBQVEsQ0FBQyxFQUFELENBQXhDLENBUjRCLENBUzVCOztBQUNBLFFBQU07QUFBQSxPQUFDVyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUF1Qlosc0RBQVEsQ0FBQyxFQUFELENBQXJDLENBVjRCLENBVzVCOztBQUNBLFFBQU1hLFlBQVksZ0JBQUdyRSw0Q0FBSyxDQUFDc0UsU0FBTixFQUFyQjtBQUNBLFFBQU1DLFlBQVksZ0JBQUd2RSw0Q0FBSyxDQUFDc0UsU0FBTixFQUFyQjtBQUNBLFFBQU1FLFlBQVksZ0JBQUd4RSw0Q0FBSyxDQUFDc0UsU0FBTixFQUFyQixDQWQ0QixDQWdCNUI7QUFDQTs7QUFDQSxRQUFNRyxhQUFhLEdBQUlDLENBQUQsSUFBTztBQUMzQixRQUFJQyxLQUFLLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFyQjs7QUFDQSxRQUFJRixLQUFLLENBQUNHLE1BQU4sS0FBaUJ6QixLQUFLLENBQUMwQixXQUEzQixFQUF3QztBQUNyQ3JCLGNBQVEsQ0FBQ2lCLEtBQUQsQ0FBUjtBQUNBWCxpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBUSxrQkFBWSxDQUFDUSxPQUFiLENBQXFCQyxLQUFyQjtBQUNGLEtBSkQsTUFJTztBQUNMakIsaUJBQVcsQ0FBQ1csS0FBRCxDQUFYO0FBQ0Q7QUFDRixHQVRELENBbEI0QixDQTZCNUI7QUFDQTs7O0FBQ0EsUUFBTU8sYUFBYSxHQUFJUixDQUFELElBQU87QUFDM0IsUUFBSUMsS0FBSyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBckI7O0FBQ0EsUUFBSUYsS0FBSyxDQUFDRyxNQUFOLElBQWdCekIsS0FBSyxDQUFDOEIsWUFBMUIsRUFBd0M7QUFDdEN2QixlQUFTLENBQUNlLEtBQUQsQ0FBVDtBQUNBVCxpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRyxrQkFBWSxDQUFDVyxPQUFiLENBQXFCQyxLQUFyQjtBQUNELEtBSkQsTUFJTztBQUNMZixpQkFBVyxDQUFDUyxLQUFELENBQVg7QUFFRDtBQUNGLEdBVkQsQ0EvQjRCLENBMkM1QjtBQUNBOzs7QUFDQSxRQUFNUyxhQUFhLEdBQUlWLENBQUQsSUFBTztBQUMzQixRQUFJQyxLQUFLLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFyQjs7QUFDQSxRQUFJRixLQUFLLENBQUNHLE1BQU4sSUFBZ0J6QixLQUFLLENBQUNnQyxjQUExQixFQUEwQztBQUN4QzlCLGlCQUFXLENBQUNvQixLQUFELENBQVg7QUFDQWIsaUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQVMsa0JBQVksQ0FBQ1MsT0FBYixDQUFxQkMsS0FBckI7QUFDRCxLQUpELE1BSU87QUFDTG5CLGlCQUFXLENBQUNhLEtBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FURCxDQTdDNEIsQ0F3RDVCO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBTVcsWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBSTdCLFFBQVEsS0FBSyxJQUFiLElBQXFCRSxTQUFTLEtBQUssSUFBbkMsSUFBMkNMLFdBQVcsS0FBSyxJQUEvRCxFQUFxRTtBQUNuRWxCLDBCQUFvQixDQUFDcUIsUUFBRCxFQUFXRSxTQUFYLEVBQXNCTCxXQUF0QixDQUFwQjtBQUNBSSxjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FFLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUwsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQWEsY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRyxrQkFBWSxDQUFDUyxPQUFiLENBQXFCQyxLQUFyQjtBQUNELEtBUEQsTUFPTztBQUNMYixjQUFRLENBQUMsa0VBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FYRCxDQTNENEIsQ0F3RTVCOzs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQSw4QkFDRTtBQUFPLGlCQUFTLEVBQUMsV0FBakI7QUFBQSxvREFFRTtBQUNFLGVBQUssRUFBRVAsUUFEVDtBQUVFLGtCQUFRLEVBQUV1QixhQUZaO0FBR0UsbUJBQVMsRUFBQyxVQUhaO0FBSUUsYUFBRyxFQUFJZjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRTtBQUFPLGlCQUFTLEVBQUMsV0FBakI7QUFBQSxpREFFRTtBQUNFLGVBQUssRUFBRU4sUUFEVDtBQUVFLGtCQUFRLEVBQUVVLGFBRlo7QUFHRSxtQkFBUyxFQUFDLFVBSFo7QUFJRSxhQUFHLEVBQUlGO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQW1CRTtBQUFPLGlCQUFTLEVBQUMsV0FBakI7QUFBQSxrREFFRTtBQUNFLGVBQUssRUFBRU4sUUFEVDtBQUVFLGtCQUFRLEVBQUVpQixhQUZaO0FBR0UsbUJBQVMsRUFBQyxVQUhaO0FBSUUsYUFBRyxFQUFJVjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBK0JFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw4QkFDRTtBQUFJLGFBQUssRUFBRTtBQUFDZSxlQUFLLEVBQUU7QUFBUixTQUFYO0FBQUEsa0JBQTRCcEI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSw4Q0FBNEJiLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBQSw2Q0FBMkJHLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBQSw4Q0FBNEJFLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBUSxlQUFPLEVBQUUyQixZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRCxDLENBR0Q7OztBQUNBLFNBQVNFLFdBQVQsQ0FBcUJuQyxLQUFyQixFQUE0QjtBQUMxQjtBQUNBLFFBQU07QUFBQSxPQUFDWSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlYsc0RBQVEsQ0FBQyxFQUFELENBQXhDLENBRjBCLENBRzFCOztBQUNBLFFBQU07QUFBQSxPQUFDVixPQUFEO0FBQUEsT0FBVTJDO0FBQVYsTUFBd0JqQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEMsQ0FKMEIsQ0FNMUI7QUFDQTs7QUFDQSxRQUFNa0MsWUFBWSxHQUFJaEIsQ0FBRCxJQUFPO0FBQzFCLFFBQUlDLEtBQUssR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQXJCOztBQUNBLFFBQUlGLEtBQUssQ0FBQ0csTUFBTixJQUFnQnpCLEtBQUssQ0FBQzhCLFlBQTFCLEVBQXdDO0FBQ3RDakIsaUJBQVcsQ0FBQyxFQUFELENBQVg7O0FBQ0EsVUFBSSxDQUFDcEIsT0FBTyxDQUFDNkMsUUFBUixDQUFpQmhCLEtBQWpCLENBQUwsRUFBNkI7QUFDM0JjLGtCQUFVLENBQUMsQ0FBQyxHQUFHM0MsT0FBSixFQUFhNkIsS0FBYixDQUFELENBQVY7QUFDRDtBQUNGLEtBTEQsTUFLTztBQUNMVCxpQkFBVyxDQUFDUyxLQUFELENBQVg7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsUUFBTWlCLGNBQWMsR0FBRyxNQUFNO0FBQzNCL0MsdUJBQW1CLENBQUNDLE9BQUQsQ0FBbkI7QUFDQTJDLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDRCxHQUhEOztBQUtBLFFBQU1JLGtCQUFrQixHQUFJbkIsQ0FBRCxJQUFPO0FBQ2hDb0IsU0FBSyxDQUFDQyxJQUFELENBQUw7QUFDQXJCLEtBQUMsQ0FBQ3NCLGNBQUY7QUFDRCxHQUhELENBekIwQixDQStCMUI7OztBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxlQUFTLEVBQUMsV0FBaEI7QUFBNEIsY0FBUSxFQUFFdEIsQ0FBQyxJQUFJO0FBQUNBLFNBQUMsQ0FBQ3NCLGNBQUY7QUFBb0IsT0FBaEU7QUFBQSw2QkFDRTtBQUFPLGlCQUFTLEVBQUMsV0FBakI7QUFBQSxrREFFRTtBQUFPLGVBQUssRUFBRS9CLFFBQWQ7QUFBd0Isa0JBQVEsRUFBRXlCLFlBQWxDO0FBQWdELG1CQUFTLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFRRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFHLFlBQWhCO0FBQUEsaUNBQ2E1QyxPQUFPLENBQUNnQyxNQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQVEsWUFBSSxFQUFFLFFBQWQ7QUFBdUIsaUJBQVMsRUFBRyxnQkFBbkM7QUFDSSxlQUFPLEVBQUVjLGNBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7QUFHRCxNQUFNSyxLQUFOLFNBQW9CMUYsK0NBQXBCLENBQXdCO0FBQ3RCMkYsYUFBVyxDQUFDN0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFRGxELFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUYsZUFBRjtBQUFhRjtBQUFiLFFBQTJCLEtBQUtzRCxLQUF0QztBQUNBLFVBQU04QyxNQUFNLEdBQUc7QUFBRUMsWUFBTSxFQUFFQyxrQ0FBVjtBQUFtQkMsZ0JBQVUsRUFBRUMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBL0I7QUFBMERDLG9CQUFjLEVBQUU7QUFBMUUsS0FBZjtBQUNBLHdCQUNFLHFFQUFDLDREQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFBLGtDQUNFLHFFQUFDLG1EQUFEO0FBQUEsb0NBQ0UscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFLRSxxRUFBQyxvREFBRDtBQUFBLG1DQUNFLHFFQUFDLFlBQUQ7QUFBYyw0QkFBYyxFQUFFLENBQTlCO0FBQWlDLHlCQUFXLEVBQUUsRUFBOUM7QUFBa0QsMEJBQVksRUFBRTtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQVFFLHFFQUFDLG9EQUFEO0FBQUEsbUNBQ0kscUVBQUMsV0FBRDtBQUFhLDBCQUFZLEVBQUU7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWtCRDs7QUExQnFCOztBQTZCVFIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNUyxjQUFjLEdBQUc7QUFDckJOLFFBQU0sRUFBRSx5Q0FEYTtBQUVyQk8sWUFBVSxFQUFFLHNDQUZTO0FBR3JCQyxhQUFXLEVBQUUsNkNBSFE7QUFJckJDLFdBQVMsRUFBRSxzQkFKVTtBQUtyQkMsZUFBYSxFQUFFLGtDQUxNO0FBTXJCQyxtQkFBaUIsRUFBRSxjQU5FO0FBT3JCQyxPQUFLLEVBQUU7QUFQYyxDQUF2QjtBQVVBLElBQUlDLEVBQUUsR0FBRyxDQUFDQyxtREFBUSxDQUFDQyxJQUFULENBQWNyQyxNQUFmLEdBQXdCb0MsbURBQVEsQ0FBQ0UsYUFBVCxDQUF1QlYsY0FBdkIsQ0FBeEIsR0FBaUVRLG1EQUFRLENBQUNHLEdBQVQsRUFBMUU7QUFDQSxJQUFJOUUsRUFBRSxHQUFHMEUsRUFBRSxDQUFDSyxTQUFILEVBQVQ7QUFDZS9FLGlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUEsTUFBTWdGLG1CQUFtQixHQUFHLFNBQTVCLEMsQ0FHQTs7QUFFQSxlQUFlQyxjQUFmLENBQThCQyxHQUE5QixFQUFvQ0MsSUFBSSxHQUFHbkIsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBM0MsRUFDRW1CLFdBQVcsR0FBR3BCLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLENBRGhCLEVBQzRDb0IsVUFBVSxHQUFDTCxtQkFEdkQsRUFDNEU7QUFFMUUsUUFBTWxILEdBQUcsR0FBSSxXQUFVcUgsSUFBSyxjQUFhRSxVQUFXLGVBQXBEO0FBR0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLGlEQUFLLENBQUN6SCxHQUFELEVBQU07QUFDaEMwSCxVQUFNLEVBQUUsTUFEd0I7QUFFaENDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQixxQkFEVDtBQUVQLGdDQUEwQkwsV0FGbkI7QUFHUCxxQ0FBK0I7QUFIeEIsS0FGdUI7QUFPaENNLFFBQUksRUFBRVI7QUFQMEIsR0FBTixDQUE1QjtBQVdBLFFBQU07QUFBRVMsUUFBRjtBQUFRQztBQUFSLE1BQW1CLE1BQU1OLFFBQVEsQ0FBQ08sSUFBVCxFQUEvQjtBQUNBeEgsU0FBTyxDQUFDeUgsR0FBUixDQUFZSCxJQUFaO0FBQ0F0SCxTQUFPLENBQUN5SCxHQUFSLENBQVlGLE1BQVo7QUFDQSxNQUFJQSxNQUFKLEVBQVksTUFBTSxJQUFJRyxLQUFKLENBQVVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxNQUFmLENBQVYsQ0FBTjtBQUNaLFFBQU1NLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNULElBQWQsRUFBb0JVLElBQXBCLENBQXlCQyxDQUFDLElBQUlBLENBQUMsSUFBSUEsQ0FBQyxDQUFDSixVQUFyQyxDQUFuQjtBQUNBLE1BQUlBLFVBQVUsSUFBSUEsVUFBVSxDQUFDM0QsTUFBWCxHQUFvQixDQUF0QyxFQUF5QyxNQUFNLElBQUl3RCxLQUFKLENBQVVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxVQUFmLENBQVYsQ0FBTjtBQUN6QyxTQUFPUCxJQUFQO0FBQ0QsQyxDQUVEOzs7QUFDTyxlQUFlckcsZ0JBQWYsQ0FBZ0NpSCxPQUFoQyxFQUF5QztBQUM5QyxRQUFNWixJQUFJLEdBQUcsTUFBTVYsY0FBYyxDQUNoQztBQUNILG9DQUFvQ3NCLE9BQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBUm1DLENBQWpDO0FBVUYsUUFBTTdGLEVBQUUsR0FBR2lGLElBQUksQ0FBQ3ZHLEtBQUwsQ0FBV29ILFFBQVgsQ0FBb0I5RixFQUEvQjtBQUNBNkMsT0FBSyxDQUFDN0MsRUFBRCxDQUFMO0FBQ0EseUNBQVdpRixJQUFJLENBQUN2RyxLQUFoQjtBQUF1QnNCLE1BQUUsRUFBRWlGLElBQUksQ0FBQ3ZHLEtBQUwsQ0FBV29ILFFBQVgsQ0FBb0I5RixFQUEvQztBQUFtRCtGLFFBQUksRUFBRWQsSUFBSSxDQUFDdkcsS0FBTCxDQUFXb0gsUUFBWCxDQUFvQkM7QUFBN0U7QUFDQyxDLENBRUQ7QUFDQTs7QUFDTyxlQUFlbEgsaUJBQWYsQ0FBaUNpSCxRQUFqQyxFQUEyQztBQUNoRCxTQUFPdkIsY0FBYyxFQUFyQjtBQUdELEMsQ0FFRDtBQUNBOztBQUNPLGVBQWV2RixtQkFBZixDQUFtQzhHLFFBQW5DLEVBQTZDO0FBQ2xELFNBQU92QixjQUFjLEVBQXJCO0FBR0QsQyxDQUVEOztBQUNPLGVBQWV0RixVQUFmLENBQTBCUCxLQUExQixFQUFpQ0ssTUFBakMsRUFBeUM7QUFDOUMsU0FBT3dGLGNBQWMsRUFBckI7QUFHRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFRCxzRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJcclxuaW1wb3J0IHsgZ3JhcGhxbFJlcXVlc3QsIGNvb2xlcnNGcm9tT3JkZXIsIGluY3JlYXNlQ29vbGVyQ291bnQsIHJlZHVjZUNvb2xlckNvdW50LCBhZGRUb09yZGVyfSBmcm9tICcuL3N0b3JlLmpzJ1xyXG5cclxuLy9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluQ29vbGVyQ291bnQob3JkZXIpIHtcclxuICBsZXQgY3VzdG9tZXJJZCA9IGF3YWl0IGNvb2xlcnNGcm9tT3JkZXIob3JkZXIpO1xyXG4gIGF3YWl0IHJlZHVjZUNvb2xlckNvdW50KGN1c3RvbWVySWQpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT3V0Q29vbGVyQ291bnQob3JkZXIsIGNvb2xlcikge1xyXG4gIGxldCBjdXN0b21lcklkID0gYXdhaXQgY29vbGVyc0Zyb21PcmRlcihvcmRlcik7XHJcbiAgYXdhaXQgaW5jcmVhc2VDb29sZXJDb3VudChjdXN0b21lcklkKTtcclxuICBhd2FpdCBhZGRUb09yZGVyKG9yZGVyLCBjb29sZXIpO1xyXG59XHJcbiIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgJy4vYXBwLmNzcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCdcclxuaW1wb3J0ICdAc2hvcGlmeS9wb2xhcmlzL2Rpc3Qvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnQHNob3BpZnkvcG9sYXJpcy9sb2NhbGVzL2VuLmpzb24nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBkYiBmcm9tICcuL2ZpcmViYXNlLmpzJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5pbXBvcnQgJ3JlYWN0LXRhYnMvc3R5bGUvcmVhY3QtdGFicy5jc3MnXHJcbmltcG9ydCB7IHVwZGF0ZUluQ29vbGVyQ291bnQsIHVwZGF0ZU91dENvb2xlckNvdW50IH0gZnJvbSAnLi9Db29sZXJDb3VudC5qcydcclxuaW1wb3J0IHsgZ3JhcGhxbFJlcXVlc3QsIGNvb2xlcnNGcm9tT3JkZXIgfSBmcm9tICcuL3N0b3JlLmpzJ1xyXG5cclxuXHJcbi8vVGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gb2YgdGhlIGNvb2xlciBkYXRhYmFzZVxyXG4vL0tlcHQgZ2xvYmFsbHkgc28gaXQncyBlYXNpbHkgY2hhbmdlYWJsZVxyXG5jb25zdCBkYXRhYmFzZU5hbWUgPSAnY29vbGVyLXRyYWNraW5nJztcclxuXHJcbi8vVXBkYXRlIGNvb2xlciB3aXRoIGdpdmVuIGlkIHRvIG91dCB3aXRoIHRoZSBnaXZlbiBvcmRlciBudW1iZXJcclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlT3V0Ym91bmRDb29sZXIob3JkZXIsIGNvb2xlciwgZW1wbG95ZWVObykge1xyXG4gIGxldCByZXMgPSBkYi5jb2xsZWN0aW9uKGRhdGFiYXNlTmFtZSkuZG9jKGNvb2xlcilcclxuICAgIC5zZXQoe3N0YXR1czogb3JkZXIsIGVtcGxveWVlOiBlbXBsb3llZU5vfSk7XHJcbiAgY29vbGVyc0Zyb21PcmRlcihvcmRlcik7XHJcbiAgdXBkYXRlT3V0Q29vbGVyQ291bnQob3JkZXIsIGNvb2xlcik7XHJcbn1cclxuXHJcbi8vVXBkYXRlIHRoZSBnaXZlbiBjb29sZXIgaWQgdG8gaW52ZW50b3J5XHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluYm91bmRDb29sZXIoY29vbGVycykge1xyXG4gIGNvbnN0IGJhdGNoID0gZGIuYmF0Y2goKTtcclxuICBjb29sZXJzLm1hcChcclxuICAgIChpZCkgPT4ge1xyXG4gICAgLy8gbGV0IGNvb2xlclR1cGxlID0gYXdhaXQgZGIuY29sbGVjdGlvbihkYXRhYmFzZU5hbWUpLmRvYyhpZCkuZ2V0KCk7XHJcbiAgICAvLyBsZXQgb3JkZXIgPSBjb29sZXJUdXBsZS5nZXQoJ3N0YXR1cycpO1xyXG4gICAgLy8gaWYgKG9yZGVyICE9PSBcImludmVudG9yeVwiKSB7XHJcbiAgICAvLyAgICAgdXBkYXRlSW5Db29sZXJDb3VudChvcmRlcik7XHJcbiAgICAvLyB9XHJcbiAgICBsZXQgY3VycmVudFJlZiA9IGRiLmNvbGxlY3Rpb24oZGF0YWJhc2VOYW1lKS5kb2MoaWQpO1xyXG4gICAgYmF0Y2guc2V0KGN1cnJlbnRSZWYsIHtzdGF0dXM6ICdpbnZlbnRvcnknLCBlbXBsb3llZTogJ2ludmVudG9yeSd9KTtcclxuICB9XHJcbiAgKVxyXG4gIGxldCByZXMgPSBhd2FpdCBiYXRjaC5jb21taXQoKTtcclxufVxyXG5cclxuLy9JbnN0YW50aWF0ZXMgdGhlIHBhZ2UgdG8gYXNzb3NjaWF0ZSB0aGUgb3JkZXIgdG8gY29vbGVyXHJcbiBmdW5jdGlvbiBPdXRib3VuZFBhZ2UocHJvcHMpIHtcclxuICAgLy9TdGF0ZXMgdG8gcmVwcmVzZW50IHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBvcmRlciBhbmQgdGhlIGNvb2xlclxyXG4gIGNvbnN0IFtlbXBsb3llZU51bSwgc2V0RW1wbG95ZWVdID0gdXNlU3RhdGUoXCJOQVwiKVxyXG4gIGNvbnN0IFtvcmRlck51bSwgc2V0T3JkZXJdID0gdXNlU3RhdGUoXCJOQVwiKTtcclxuICBjb25zdCBbY29vbGVyTnVtLCBzZXRDb29sZXJdID0gdXNlU3RhdGUoXCJOQVwiKTtcclxuICAvL1N0YXRlcyB0byByZXByZXNlbnQgdGhlIHZhbHVlIGhlbGQgd2l0aGluIHRoZSBpbnB1dCBmaWVsZHNcclxuICBjb25zdCBbaW5FVmFsdWUsIHNldEluRVZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtpbk9WYWx1ZSwgc2V0SW5PVmFsdWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2luQ1ZhbHVlLCBzZXRJbkNWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAvL1N0YXRlIHRvIHJlcHJlc2VudCB0aGUgZXJyb3IgbWVzc2FnZXMgaWYgbmVlZGVkIChpZiBub25lLCB0aGVuIGtlZXAgZW1wdHkpXHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICAvL1JlZnMgdG8gZWFjaCBvZiB0aGUgZmllbGRzIHNvIHRvIHRyYWRlIG9mZiBmb2N1c2VzXHJcbiAgY29uc3QgZU51bWJlckZpZWxkID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgY29uc3Qgb051bWJlckZpZWxkID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgY29uc3QgY051bWJlckZpZWxkID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gIC8vSGFuZGxlcyB0aGUgY2hhbmdlcyBpbiB0aGUgb3JkZXIgaW5wdXQgZmllbGRcclxuICAvL09ubHkgc3RvcmVzIG5ldyBvcmRlciBpZiBpdCBpcyBvZiBjb3JyZWN0IGxlbmd0aFxyXG4gIGNvbnN0IGhhbmRsZU9DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGlucHV0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSBwcm9wcy5vcmRlckxlbmd0aCkge1xyXG4gICAgICAgc2V0T3JkZXIoaW5wdXQpO1xyXG4gICAgICAgc2V0SW5PVmFsdWUoJycpO1xyXG4gICAgICAgY051bWJlckZpZWxkLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW5PVmFsdWUoaW5wdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9IYW5kbGVzIHRoZSBjaGFuZ2dlcyB0byB0aGUgY29vbGVyIGlucHV0IGZpZWxkXHJcbiAgLy9Pbmx5IHN0b3JlcyBuZXcgY29vbGVyIGlmIGl0IGlzIG9mIGNvcnJlY3QgbGVuZ3RoXHJcbiAgY29uc3QgaGFuZGxlQ0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmIChpbnB1dC5sZW5ndGggPT0gcHJvcHMuY29vbGVyTGVuZ3RoKSB7XHJcbiAgICAgIHNldENvb2xlcihpbnB1dCk7XHJcbiAgICAgIHNldEluQ1ZhbHVlKCcnKTtcclxuICAgICAgZU51bWJlckZpZWxkLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEluQ1ZhbHVlKGlucHV0KTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0hhbmRsZXMgdGhlIGNoYW5nZ2VzIHRvIHRoZSBjb29sZXIgaW5wdXQgZmllbGRcclxuICAvL09ubHkgc3RvcmVzIG5ldyBjb29sZXIgaWYgaXQgaXMgb2YgY29ycmVjdCBsZW5ndGhcclxuICBjb25zdCBoYW5kbGVFQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PSBwcm9wcy5lbXBsb3llZUxlbmd0aCkge1xyXG4gICAgICBzZXRFbXBsb3llZShpbnB1dCk7XHJcbiAgICAgIHNldEluRVZhbHVlKCcnKTtcclxuICAgICAgb051bWJlckZpZWxkLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEluRVZhbHVlKGlucHV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vSGFuZGxlcyB0aGUgc3VibWl0IGJ1dHRvbidzIGZ1bmN0aW9uYWxpdHlcclxuICAvL1VwZGF0ZXMgdGhlIG91dGdvaW5nIGNvb2xlciB0aGVuIHJlc2V0cyB0aGUgc3RhdGVzIG9mIHRoZSBjb29sZXIgYW5kIG9yZGVyXHJcbiAgLy9QcmludHMgZXJyb3IgaWYgZWl0aGVyIGFyZSBOQVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGlmIChvcmRlck51bSAhPT0gJ05BJyAmJiBjb29sZXJOdW0gIT09ICdOQScgJiYgZW1wbG95ZWVOdW0gIT09ICdOQScpIHtcclxuICAgICAgdXBkYXRlT3V0Ym91bmRDb29sZXIob3JkZXJOdW0sIGNvb2xlck51bSwgZW1wbG95ZWVOdW0pO1xyXG4gICAgICBzZXRPcmRlcignTkEnKTtcclxuICAgICAgc2V0Q29vbGVyKCdOQScpO1xyXG4gICAgICBzZXRFbXBsb3llZSgnTkEnKTtcclxuICAgICAgc2V0RXJyb3IoJycpO1xyXG4gICAgICBvTnVtYmVyRmllbGQuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoJ05lZWQgdG8gaGF2ZSBhbiBlbXBsb3llZSBudW1iZXIsIG9yZGVyIG51bWJlciwgYW5kIGNvb2xlciBudW1iZXInKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9QcmludHMgdGhlIG91dGdvaW5nIHBhZ2VcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluT3V0UGFnZVwiID5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2VUaXRsZVwiPkNvb2xlciBTY2FubmluZzwvaDM+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZpZWxkRGl2XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNjYW5MYWJlbFwiPlxyXG4gICAgICAgICAgRW1wbG95ZWUgTnVtYmVyOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtpbkVWYWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0Qm94XCJcclxuICAgICAgICAgICAgcmVmID0ge2VOdW1iZXJGaWVsZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzY2FuTGFiZWxcIj5cclxuICAgICAgICAgIE9yZGVyIE51bWJlcjpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17aW5PVmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPQ2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dEJveFwiXHJcbiAgICAgICAgICAgIHJlZiA9IHtvTnVtYmVyRmllbGR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2NhbkxhYmVsXCI+XHJcbiAgICAgICAgICBDb29sZXIgTnVtYmVyOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtpbkNWYWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0Qm94XCJcclxuICAgICAgICAgICAgcmVmID0ge2NOdW1iZXJGaWVsZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyc0RpdlwiPlxyXG4gICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e2Vycm9yTXNnfTwvaDM+XHJcbiAgICAgICAgPGgzPkVtcGxveWVlIE9yZGVyIE51bWJlcjoge2VtcGxveWVlTnVtfTwvaDM+XHJcbiAgICAgICAgPGgzPkN1cnJlbnQgT3JkZXIgTnVtYmVyOiB7b3JkZXJOdW19PC9oMz5cclxuICAgICAgICA8aDM+Q3VycmVudCBDb29sZXIgTnVtYmVyOiB7Y29vbGVyTnVtfTwvaDM+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgU3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuLy9JbnN0YW50aWF0ZXMgdGhlIHBhZ2UgdG8gbWFyayB0aGUgY29vbGVyIGFzIHBpY2tlZCB1cFxyXG5mdW5jdGlvbiBJbmJvdW5kUGFnZShwcm9wcykge1xyXG4gIC8vU3RhdGUgdGhhdCByZXByZXNlbnRzIHRoZSB2YWx1ZSBpbiB0aGUgaW5wdXQgZmllbGRcclxuICBjb25zdCBbaW5DVmFsdWUsIHNldEluQ1ZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvL1JlcHJlc2VudHMgdGhlIGFjY3VtdWxhdGluZyBsaXN0IG9mIGNvb2xlcnMgdG8gYmUgdXBkYXRlZFxyXG4gIGNvbnN0IFtjb29sZXJzLCBzZXRDb29sZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy9IYW5kbGVzIHdoZW4gY29vbGVyIGZpZWxkIGhhcyBiZWVuIGNoYW5nZWRcclxuICAvLy0tIG9ubHkgaGFzIGFuIGVmZmVjdCBpZiB0aGUgY29vbGVyIGlkJ3MgbGVuZ3RoIGlzIHRoZSBkZXNpcmVkIG9uZVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmIChpbnB1dC5sZW5ndGggPT0gcHJvcHMuY29vbGVyTGVuZ3RoKSB7XHJcbiAgICAgIHNldEluQ1ZhbHVlKCcnKTtcclxuICAgICAgaWYgKCFjb29sZXJzLmluY2x1ZGVzKGlucHV0KSl7XHJcbiAgICAgICAgc2V0Q29vbGVycyhbLi4uY29vbGVycywgaW5wdXRdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW5DVmFsdWUoaW5wdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSW5TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVJbmJvdW5kQ29vbGVyKGNvb2xlcnMpO1xyXG4gICAgc2V0Q29vbGVycyhbXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmV2ZW50RW50ZXJTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgYWxlcnQoaGVyZSlcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcblxyXG4gIC8vUHJpbnRzIHRoaXMgcGFnZVxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlVGl0bGVcIj5Db29sZXIgU2Nhbm5pbmc8L2gzPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbk91dFBhZ2VcIiBvblN1Ym1pdD17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpO319PlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzY2FuTGFiZWxcIj5cclxuICAgICAgICAgIENvb2xlciBOdW1iZXI6XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e2luQ1ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJpbnB1dEJveFwiLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViU2VjdGlvbkluXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZSA9IFwibnVtT2ZDb29sc1wiPlxyXG4gICAgICAgICAgVGhlcmUgYXJlIHtjb29sZXJzLmxlbmd0aH0gY29vbGVycyBpbiB0aGlzIGJhdGNoPC9oMz5cclxuICAgICAgICA8YnV0dG9uIHR5cGUgPVwiYnV0dG9uXCIgY2xhc3NOYW1lID0gXCJpblN1Ym1pdEJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUluU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBjb25maWcgPSB7IGFwaUtleTogQVBJX0tFWSwgc2hvcE9yaWdpbjogQ29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSwgZm9yY2VkUmVkaXJlY3Q6IHRydWV9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QXBwUHJvdmlkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgICA8VGFiTGlzdD5cclxuICAgICAgICAgICAgICA8VGFiPkFzc2lnbmluZyBDb29sZXI8L1RhYj5cclxuICAgICAgICAgICAgICA8VGFiPkluYm91bmQgQ29vbGVyPC9UYWI+XHJcbiAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxPdXRib3VuZFBhZ2UgZW1wbG95ZWVMZW5ndGg9ezN9IG9yZGVyTGVuZ3RoPXsxM30gY29vbGVyTGVuZ3RoPXs0fSAvPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5ib3VuZFBhZ2UgY29vbGVyTGVuZ3RoPXs0fSAvPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0FwcFByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeURkSEFwTzc0elRXdlRyeFY2VjVSTjg2TXpQZXc3TVphb1wiLFxyXG4gIGF1dGhEb21haW46IFwid2lzZS1yZXNvbHZlci0yNzY0MTYuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly93aXNlLXJlc29sdmVyLTI3NjQxNi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ3aXNlLXJlc29sdmVyLTI3NjQxNlwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwid2lzZS1yZXNvbHZlci0yNzY0MTYuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMzIzOTU2NzcwNjlcIixcclxuICBhcHBJZDogXCIxOjEzMjM5NTY3NzA2OTp3ZWI6YzYzNzAyOWQyY2ExOGE2YTc4NzljNFwiXHJcbn07XHJcblxyXG5sZXQgZmIgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xyXG5sZXQgZGIgPSBmYi5maXJlc3RvcmUoKTtcclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3QgREVGQVVMVF9BUElfVkVSU0lPTiA9ICcyMDIwLTA0JztcclxuXHJcblxyXG4vL1NlbmRzIHRoZSBQT1NUIHRvIHRoZSBncmFwaFFMXHJcblxyXG5hc3luYyBmdW5jdGlvbiBncmFwaHFsUmVxdWVzdChncWwsICBzaG9wID0gQ29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSxcclxuICBhY2Nlc3NUb2tlbiA9IENvb2tpZXMuZ2V0KCdhY2Nlc3NUb2tlbicpLCBhcGlWZXJzaW9uPURFRkFVTFRfQVBJX1ZFUlNJT04pIHtcclxuXHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vJHtzaG9wfS9hZG1pbi9hcGkvJHthcGlWZXJzaW9ufS9ncmFwaHFsLmpzb25gO1xyXG5cclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2dyYXBocWxcIixcclxuICAgICAgXCJYLVNob3BpZnktQWNjZXNzLVRva2VuXCI6IGFjY2Vzc1Rva2VuLFxyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxyXG4gICAgfSxcclxuICAgIGJvZHk6IGdxbFxyXG4gIH0pO1xyXG5cclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gIGlmIChlcnJvcnMpIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShlcnJvcnMpKTtcclxuICBjb25zdCB1c2VyRXJyb3JzID0gT2JqZWN0LnZhbHVlcyhkYXRhKS5maW5kKHYgPT4gdiAmJiB2LnVzZXJFcnJvcnMpO1xyXG4gIGlmICh1c2VyRXJyb3JzICYmIHVzZXJFcnJvcnMubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHVzZXJFcnJvcnMpKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy9HZXRzIHRoZSB0YWdzIGFuZCBpZCBvZiB0aGUgY3VzdG9tZXIgb2YgdGhlIGdpdmVuIG9yZGVyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb29sZXJzRnJvbU9yZGVyKG9yZGVySWQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhxbFJlcXVlc3QoXHJcbiAgYHF1ZXJ5IHtcclxuICAgIG9yZGVyKGlkOiBnaWQ6Ly9zaG9waWZ5L09yZGVyLyR7b3JkZXJJZH0pIHtcclxuICAgICAgY3VzdG9tZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgdGFnc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfWBcclxuKVxyXG5jb25zdCBpZCA9IGRhdGEub3JkZXIuY3VzdG9tZXIuaWQ7XHJcbmFsZXJ0KGlkKTtcclxucmV0dXJuIHsuLi5kYXRhLm9yZGVyLCBpZDogZGF0YS5vcmRlci5jdXN0b21lci5pZCwgdGFnczogZGF0YS5vcmRlci5jdXN0b21lci50YWdzfVxyXG59XHJcblxyXG4vL01ha2VzIHRoZSBncWwgc3RyaW5nIHRoYXQgcmVkdWNlcyB0aGUgbnVtYmVyIG9mIGNvb2xlcnMgZm9yIHRoZVxyXG4vL2N1c3RvbWVyIG9mIHRoZSBnaXZlbiBvcmRlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkdWNlQ29vbGVyQ291bnQoY3VzdG9tZXIpIHtcclxuICByZXR1cm4gZ3JhcGhxbFJlcXVlc3QoXHJcblxyXG4gIClcclxufVxyXG5cclxuLy9NYWtlcyB0aGUgZ3FsIHN0cmluZyB0aGF0IGluY3JlYXNlcyB0aGUgbnVtYmVyIG9mIGNvb2xlcnMgZm9yIHRoZVxyXG4vL2N1c3RvbWVyIG9mIHRoZSBnaXZlbiBvcmRlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5jcmVhc2VDb29sZXJDb3VudChjdXN0b21lcikge1xyXG4gIHJldHVybiBncmFwaHFsUmVxdWVzdChcclxuXHJcbiAgKVxyXG59XHJcblxyXG4vL01ha2VzIHRoZSBncWwgc3RyaW5nIHRoYXQgYWRkcyB0aGUgY29vbGVyIHRvIHRoZSBvcmRlcidzIGN1c3RvbSBhdHRyaWJ1dGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRvT3JkZXIob3JkZXIsIGNvb2xlcikge1xyXG4gIHJldHVybiBncmFwaHFsUmVxdWVzdChcclxuXHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRhYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=