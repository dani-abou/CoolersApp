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

var _jsxFileName = "C:\\Users\\abouh\\OneDrive\\Desktop\\sampleApp\\pages\\_app.js";















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
    let currentRef = _firebase_js__WEBPACK_IMPORTED_MODULE_10__["default"].collection(databaseName).doc(id);
    batch.set(currentRef, {
      status: 'inventory',
      employee: 'inventory'
    });
  });
  let res = await batch.commit();
  Object(_CoolerCount_js__WEBPACK_IMPORTED_MODULE_15__["updateInCoolerCount"])(order);
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
      lineNumber: 120,
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
          lineNumber: 124,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
          lineNumber: 133,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
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
          lineNumber: 142,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
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
        lineNumber: 151,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Employee Order Number: ", employeeNum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Current Order Number: ", orderNum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Current Cooler Number: ", coolerNum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
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
      lineNumber: 198,
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
          lineNumber: 202,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "subSectionIn",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "numOfCools",
        children: ["There are ", coolers.length, " coolers in this batch"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "inSubmitButton",
        onClick: handleInSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 197,
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["Tabs"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["TabList"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["Tab"], {
            children: "Assigning Cooler"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["Tab"], {
            children: "Inbound Cooler"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["TabPanel"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OutboundPage, {
            employeeLength: 3,
            orderLength: 13,
            coolerLength: 4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_tabs__WEBPACK_IMPORTED_MODULE_13__["TabPanel"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InboundPage, {
            coolerLength: 4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import hostURL from './../server.js'

const DEFAULT_API_VERSION = '2020-04';
const DEFAULT_ACCESSTOKEN = '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';
const DEFAULT_STORENAME = 'svenfish-test-store.myshopify.com'; //Sends the POST to the graphQL

async function graphqlRequest(gql, shop = DEFAULT_STORENAME, accessToken = DEFAULT_ACCESSTOKEN, apiVersion = DEFAULT_API_VERSION) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0Nvb2xlckNvdW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwidXBkYXRlSW5Db29sZXJDb3VudCIsIm9yZGVyIiwiY3VzdG9tZXJJZCIsImNvb2xlcnNGcm9tT3JkZXIiLCJyZWR1Y2VDb29sZXJDb3VudCIsInVwZGF0ZU91dENvb2xlckNvdW50IiwiY29vbGVyIiwiaW5jcmVhc2VDb29sZXJDb3VudCIsImFkZFRvT3JkZXIiLCJkYXRhYmFzZU5hbWUiLCJ1cGRhdGVPdXRib3VuZENvb2xlciIsImVtcGxveWVlTm8iLCJyZXMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXQiLCJzdGF0dXMiLCJlbXBsb3llZSIsInVwZGF0ZUluYm91bmRDb29sZXIiLCJjb29sZXJzIiwiYmF0Y2giLCJtYXAiLCJpZCIsImN1cnJlbnRSZWYiLCJjb21taXQiLCJPdXRib3VuZFBhZ2UiLCJwcm9wcyIsImVtcGxveWVlTnVtIiwic2V0RW1wbG95ZWUiLCJ1c2VTdGF0ZSIsIm9yZGVyTnVtIiwic2V0T3JkZXIiLCJjb29sZXJOdW0iLCJzZXRDb29sZXIiLCJpbkVWYWx1ZSIsInNldEluRVZhbHVlIiwiaW5PVmFsdWUiLCJzZXRJbk9WYWx1ZSIsImluQ1ZhbHVlIiwic2V0SW5DVmFsdWUiLCJlcnJvck1zZyIsInNldEVycm9yIiwiZU51bWJlckZpZWxkIiwiY3JlYXRlUmVmIiwib051bWJlckZpZWxkIiwiY051bWJlckZpZWxkIiwiaGFuZGxlT0NoYW5nZSIsImUiLCJpbnB1dCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwib3JkZXJMZW5ndGgiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVDQ2hhbmdlIiwiY29vbGVyTGVuZ3RoIiwiaGFuZGxlRUNoYW5nZSIsImVtcGxveWVlTGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwiY29sb3IiLCJJbmJvdW5kUGFnZSIsInNldENvb2xlcnMiLCJoYW5kbGVDaGFuZ2UiLCJpbmNsdWRlcyIsImhhbmRsZUluU3VibWl0IiwicHJldmVudEVudGVyU3VibWl0IiwiYWxlcnQiLCJoZXJlIiwicHJldmVudERlZmF1bHQiLCJNeUFwcCIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwiYXBpS2V5IiwiQVBJX0tFWSIsInNob3BPcmlnaW4iLCJDb29raWVzIiwiZ2V0IiwiZm9yY2VkUmVkaXJlY3QiLCJmaXJlYmFzZUNvbmZpZyIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmIiLCJmaXJlYmFzZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiYXBwIiwiZmlyZXN0b3JlIiwiREVGQVVMVF9BUElfVkVSU0lPTiIsIkRFRkFVTFRfQUNDRVNTVE9LRU4iLCJERUZBVUxUX1NUT1JFTkFNRSIsImdyYXBocWxSZXF1ZXN0IiwiZ3FsIiwic2hvcCIsImFjY2Vzc1Rva2VuIiwiYXBpVmVyc2lvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJlcnJvcnMiLCJqc29uIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlckVycm9ycyIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJ2Iiwib3JkZXJJZCIsImN1c3RvbWVyIiwidGFncyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElB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OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsIlxyXG5pbXBvcnQgeyBncmFwaHFsUmVxdWVzdCwgY29vbGVyc0Zyb21PcmRlciwgaW5jcmVhc2VDb29sZXJDb3VudCwgcmVkdWNlQ29vbGVyQ291bnQsIGFkZFRvT3JkZXJ9IGZyb20gJy4vc3RvcmUuanMnXHJcblxyXG4vL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5Db29sZXJDb3VudChvcmRlcikge1xyXG4gIGxldCBjdXN0b21lcklkID0gYXdhaXQgY29vbGVyc0Zyb21PcmRlcihvcmRlcik7XHJcbiAgYXdhaXQgcmVkdWNlQ29vbGVyQ291bnQoY3VzdG9tZXJJZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVPdXRDb29sZXJDb3VudChvcmRlciwgY29vbGVyKSB7XHJcbiAgbGV0IGN1c3RvbWVySWQgPSBhd2FpdCBjb29sZXJzRnJvbU9yZGVyKG9yZGVyKTtcclxuICBhd2FpdCBpbmNyZWFzZUNvb2xlckNvdW50KGN1c3RvbWVySWQpO1xyXG4gIGF3YWl0IGFkZFRvT3JkZXIob3JkZXIsIGNvb2xlcik7XHJcbn1cclxuIiwiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCAnLi9hcHAuY3NzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0J1xyXG5pbXBvcnQgJ0BzaG9waWZ5L3BvbGFyaXMvZGlzdC9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICdAc2hvcGlmeS9wb2xhcmlzL2xvY2FsZXMvZW4uanNvbic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGRiIGZyb20gJy4vZmlyZWJhc2UuanMnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAncmVhY3QtdGFicyc7XHJcbmltcG9ydCAncmVhY3QtdGFicy9zdHlsZS9yZWFjdC10YWJzLmNzcydcclxuaW1wb3J0IHsgdXBkYXRlSW5Db29sZXJDb3VudCwgdXBkYXRlT3V0Q29vbGVyQ291bnQgfSBmcm9tICcuL0Nvb2xlckNvdW50LmpzJ1xyXG5pbXBvcnQgeyBncmFwaHFsUmVxdWVzdCwgY29vbGVyc0Zyb21PcmRlciB9IGZyb20gJy4vc3RvcmUuanMnXHJcblxyXG5cclxuLy9UaGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvbiBvZiB0aGUgY29vbGVyIGRhdGFiYXNlXHJcbi8vS2VwdCBnbG9iYWxseSBzbyBpdCdzIGVhc2lseSBjaGFuZ2VhYmxlXHJcbmNvbnN0IGRhdGFiYXNlTmFtZSA9ICdjb29sZXItdHJhY2tpbmcnO1xyXG5cclxuLy9VcGRhdGUgY29vbGVyIHdpdGggZ2l2ZW4gaWQgdG8gb3V0IHdpdGggdGhlIGdpdmVuIG9yZGVyIG51bWJlclxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVPdXRib3VuZENvb2xlcihvcmRlciwgY29vbGVyLCBlbXBsb3llZU5vKSB7XHJcbiAgbGV0IHJlcyA9IGRiLmNvbGxlY3Rpb24oZGF0YWJhc2VOYW1lKS5kb2MoY29vbGVyKVxyXG4gICAgLnNldCh7c3RhdHVzOiBvcmRlciwgZW1wbG95ZWU6IGVtcGxveWVlTm99KTtcclxuICBjb29sZXJzRnJvbU9yZGVyKG9yZGVyKTtcclxuICB1cGRhdGVPdXRDb29sZXJDb3VudChvcmRlciwgY29vbGVyKTtcclxufVxyXG5cclxuLy9VcGRhdGUgdGhlIGdpdmVuIGNvb2xlciBpZCB0byBpbnZlbnRvcnlcclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5ib3VuZENvb2xlcihjb29sZXJzKSB7XHJcbiAgY29uc3QgYmF0Y2ggPSBkYi5iYXRjaCgpO1xyXG4gIGNvb2xlcnMubWFwKFxyXG4gICAgKGlkKSA9PiB7XHJcbiAgICBsZXQgY3VycmVudFJlZiA9IGRiLmNvbGxlY3Rpb24oZGF0YWJhc2VOYW1lKS5kb2MoaWQpO1xyXG4gICAgYmF0Y2guc2V0KGN1cnJlbnRSZWYsIHtzdGF0dXM6ICdpbnZlbnRvcnknLCBlbXBsb3llZTogJ2ludmVudG9yeSd9KTtcclxuICB9XHJcbiAgKVxyXG4gIGxldCByZXMgPSBhd2FpdCBiYXRjaC5jb21taXQoKTtcclxuICB1cGRhdGVJbkNvb2xlckNvdW50KG9yZGVyKTtcclxufVxyXG5cclxuLy9JbnN0YW50aWF0ZXMgdGhlIHBhZ2UgdG8gYXNzb3NjaWF0ZSB0aGUgb3JkZXIgdG8gY29vbGVyXHJcbiBmdW5jdGlvbiBPdXRib3VuZFBhZ2UocHJvcHMpIHtcclxuICAgLy9TdGF0ZXMgdG8gcmVwcmVzZW50IHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBvcmRlciBhbmQgdGhlIGNvb2xlclxyXG4gIGNvbnN0IFtlbXBsb3llZU51bSwgc2V0RW1wbG95ZWVdID0gdXNlU3RhdGUoXCJOQVwiKVxyXG4gIGNvbnN0IFtvcmRlck51bSwgc2V0T3JkZXJdID0gdXNlU3RhdGUoXCJOQVwiKTtcclxuICBjb25zdCBbY29vbGVyTnVtLCBzZXRDb29sZXJdID0gdXNlU3RhdGUoXCJOQVwiKTtcclxuICAvL1N0YXRlcyB0byByZXByZXNlbnQgdGhlIHZhbHVlIGhlbGQgd2l0aGluIHRoZSBpbnB1dCBmaWVsZHNcclxuICBjb25zdCBbaW5FVmFsdWUsIHNldEluRVZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtpbk9WYWx1ZSwgc2V0SW5PVmFsdWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2luQ1ZhbHVlLCBzZXRJbkNWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAvL1N0YXRlIHRvIHJlcHJlc2VudCB0aGUgZXJyb3IgbWVzc2FnZXMgaWYgbmVlZGVkIChpZiBub25lLCB0aGVuIGtlZXAgZW1wdHkpXHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICAvL1JlZnMgdG8gZWFjaCBvZiB0aGUgZmllbGRzIHNvIHRvIHRyYWRlIG9mZiBmb2N1c2VzXHJcbiAgY29uc3QgZU51bWJlckZpZWxkID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgY29uc3Qgb051bWJlckZpZWxkID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgY29uc3QgY051bWJlckZpZWxkID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gIC8vSGFuZGxlcyB0aGUgY2hhbmdlcyBpbiB0aGUgb3JkZXIgaW5wdXQgZmllbGRcclxuICAvL09ubHkgc3RvcmVzIG5ldyBvcmRlciBpZiBpdCBpcyBvZiBjb3JyZWN0IGxlbmd0aFxyXG4gIGNvbnN0IGhhbmRsZU9DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGlucHV0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSBwcm9wcy5vcmRlckxlbmd0aCkge1xyXG4gICAgICAgc2V0T3JkZXIoaW5wdXQpO1xyXG4gICAgICAgc2V0SW5PVmFsdWUoJycpO1xyXG4gICAgICAgY051bWJlckZpZWxkLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW5PVmFsdWUoaW5wdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9IYW5kbGVzIHRoZSBjaGFuZ2dlcyB0byB0aGUgY29vbGVyIGlucHV0IGZpZWxkXHJcbiAgLy9Pbmx5IHN0b3JlcyBuZXcgY29vbGVyIGlmIGl0IGlzIG9mIGNvcnJlY3QgbGVuZ3RoXHJcbiAgY29uc3QgaGFuZGxlQ0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmIChpbnB1dC5sZW5ndGggPT0gcHJvcHMuY29vbGVyTGVuZ3RoKSB7XHJcbiAgICAgIHNldENvb2xlcihpbnB1dCk7XHJcbiAgICAgIHNldEluQ1ZhbHVlKCcnKTtcclxuICAgICAgZU51bWJlckZpZWxkLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEluQ1ZhbHVlKGlucHV0KTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0hhbmRsZXMgdGhlIGNoYW5nZ2VzIHRvIHRoZSBjb29sZXIgaW5wdXQgZmllbGRcclxuICAvL09ubHkgc3RvcmVzIG5ldyBjb29sZXIgaWYgaXQgaXMgb2YgY29ycmVjdCBsZW5ndGhcclxuICBjb25zdCBoYW5kbGVFQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PSBwcm9wcy5lbXBsb3llZUxlbmd0aCkge1xyXG4gICAgICBzZXRFbXBsb3llZShpbnB1dCk7XHJcbiAgICAgIHNldEluRVZhbHVlKCcnKTtcclxuICAgICAgb051bWJlckZpZWxkLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEluRVZhbHVlKGlucHV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vSGFuZGxlcyB0aGUgc3VibWl0IGJ1dHRvbidzIGZ1bmN0aW9uYWxpdHlcclxuICAvL1VwZGF0ZXMgdGhlIG91dGdvaW5nIGNvb2xlciB0aGVuIHJlc2V0cyB0aGUgc3RhdGVzIG9mIHRoZSBjb29sZXIgYW5kIG9yZGVyXHJcbiAgLy9QcmludHMgZXJyb3IgaWYgZWl0aGVyIGFyZSBOQVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGlmIChvcmRlck51bSAhPT0gJ05BJyAmJiBjb29sZXJOdW0gIT09ICdOQScgJiYgZW1wbG95ZWVOdW0gIT09ICdOQScpIHtcclxuICAgICAgdXBkYXRlT3V0Ym91bmRDb29sZXIob3JkZXJOdW0sIGNvb2xlck51bSwgZW1wbG95ZWVOdW0pO1xyXG4gICAgICBzZXRPcmRlcignTkEnKTtcclxuICAgICAgc2V0Q29vbGVyKCdOQScpO1xyXG4gICAgICBzZXRFbXBsb3llZSgnTkEnKTtcclxuICAgICAgc2V0RXJyb3IoJycpO1xyXG4gICAgICBvTnVtYmVyRmllbGQuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoJ05lZWQgdG8gaGF2ZSBhbiBlbXBsb3llZSBudW1iZXIsIG9yZGVyIG51bWJlciwgYW5kIGNvb2xlciBudW1iZXInKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9QcmludHMgdGhlIG91dGdvaW5nIHBhZ2VcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluT3V0UGFnZVwiID5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2VUaXRsZVwiPkNvb2xlciBTY2FubmluZzwvaDM+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZpZWxkRGl2XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNjYW5MYWJlbFwiPlxyXG4gICAgICAgICAgRW1wbG95ZWUgTnVtYmVyOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtpbkVWYWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0Qm94XCJcclxuICAgICAgICAgICAgcmVmID0ge2VOdW1iZXJGaWVsZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzY2FuTGFiZWxcIj5cclxuICAgICAgICAgIE9yZGVyIE51bWJlcjpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17aW5PVmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPQ2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dEJveFwiXHJcbiAgICAgICAgICAgIHJlZiA9IHtvTnVtYmVyRmllbGR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2NhbkxhYmVsXCI+XHJcbiAgICAgICAgICBDb29sZXIgTnVtYmVyOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtpbkNWYWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0Qm94XCJcclxuICAgICAgICAgICAgcmVmID0ge2NOdW1iZXJGaWVsZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyc0RpdlwiPlxyXG4gICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e2Vycm9yTXNnfTwvaDM+XHJcbiAgICAgICAgPGgzPkVtcGxveWVlIE9yZGVyIE51bWJlcjoge2VtcGxveWVlTnVtfTwvaDM+XHJcbiAgICAgICAgPGgzPkN1cnJlbnQgT3JkZXIgTnVtYmVyOiB7b3JkZXJOdW19PC9oMz5cclxuICAgICAgICA8aDM+Q3VycmVudCBDb29sZXIgTnVtYmVyOiB7Y29vbGVyTnVtfTwvaDM+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgU3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuLy9JbnN0YW50aWF0ZXMgdGhlIHBhZ2UgdG8gbWFyayB0aGUgY29vbGVyIGFzIHBpY2tlZCB1cFxyXG5mdW5jdGlvbiBJbmJvdW5kUGFnZShwcm9wcykge1xyXG4gIC8vU3RhdGUgdGhhdCByZXByZXNlbnRzIHRoZSB2YWx1ZSBpbiB0aGUgaW5wdXQgZmllbGRcclxuICBjb25zdCBbaW5DVmFsdWUsIHNldEluQ1ZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvL1JlcHJlc2VudHMgdGhlIGFjY3VtdWxhdGluZyBsaXN0IG9mIGNvb2xlcnMgdG8gYmUgdXBkYXRlZFxyXG4gIGNvbnN0IFtjb29sZXJzLCBzZXRDb29sZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy9IYW5kbGVzIHdoZW4gY29vbGVyIGZpZWxkIGhhcyBiZWVuIGNoYW5nZWRcclxuICAvLy0tIG9ubHkgaGFzIGFuIGVmZmVjdCBpZiB0aGUgY29vbGVyIGlkJ3MgbGVuZ3RoIGlzIHRoZSBkZXNpcmVkIG9uZVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmIChpbnB1dC5sZW5ndGggPT0gcHJvcHMuY29vbGVyTGVuZ3RoKSB7XHJcbiAgICAgIHNldEluQ1ZhbHVlKCcnKTtcclxuICAgICAgaWYgKCFjb29sZXJzLmluY2x1ZGVzKGlucHV0KSl7XHJcbiAgICAgICAgc2V0Q29vbGVycyhbLi4uY29vbGVycywgaW5wdXRdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW5DVmFsdWUoaW5wdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSW5TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVJbmJvdW5kQ29vbGVyKGNvb2xlcnMpO1xyXG4gICAgc2V0Q29vbGVycyhbXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmV2ZW50RW50ZXJTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgYWxlcnQoaGVyZSlcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcblxyXG4gIC8vUHJpbnRzIHRoaXMgcGFnZVxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlVGl0bGVcIj5Db29sZXIgU2Nhbm5pbmc8L2gzPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbk91dFBhZ2VcIiBvblN1Ym1pdD17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpO319PlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzY2FuTGFiZWxcIj5cclxuICAgICAgICAgIENvb2xlciBOdW1iZXI6XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e2luQ1ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJpbnB1dEJveFwiLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViU2VjdGlvbkluXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZSA9IFwibnVtT2ZDb29sc1wiPlxyXG4gICAgICAgICAgVGhlcmUgYXJlIHtjb29sZXJzLmxlbmd0aH0gY29vbGVycyBpbiB0aGlzIGJhdGNoPC9oMz5cclxuICAgICAgICA8YnV0dG9uIHR5cGUgPVwiYnV0dG9uXCIgY2xhc3NOYW1lID0gXCJpblN1Ym1pdEJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUluU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBjb25maWcgPSB7IGFwaUtleTogQVBJX0tFWSwgc2hvcE9yaWdpbjogQ29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSwgZm9yY2VkUmVkaXJlY3Q6IHRydWV9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgPFRhYkxpc3Q+XHJcbiAgICAgICAgICAgIDxUYWI+QXNzaWduaW5nIENvb2xlcjwvVGFiPlxyXG4gICAgICAgICAgICA8VGFiPkluYm91bmQgQ29vbGVyPC9UYWI+XHJcbiAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxPdXRib3VuZFBhZ2UgZW1wbG95ZWVMZW5ndGg9ezN9IG9yZGVyTGVuZ3RoPXsxM30gY29vbGVyTGVuZ3RoPXs0fSAvPlxyXG4gICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICA8SW5ib3VuZFBhZ2UgY29vbGVyTGVuZ3RoPXs0fSAvPlxyXG4gICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeURkSEFwTzc0elRXdlRyeFY2VjVSTjg2TXpQZXc3TVphb1wiLFxyXG4gIGF1dGhEb21haW46IFwid2lzZS1yZXNvbHZlci0yNzY0MTYuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly93aXNlLXJlc29sdmVyLTI3NjQxNi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ3aXNlLXJlc29sdmVyLTI3NjQxNlwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwid2lzZS1yZXNvbHZlci0yNzY0MTYuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMzIzOTU2NzcwNjlcIixcclxuICBhcHBJZDogXCIxOjEzMjM5NTY3NzA2OTp3ZWI6YzYzNzAyOWQyY2ExOGE2YTc4NzljNFwiXHJcbn07XHJcblxyXG5sZXQgZmIgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xyXG5sZXQgZGIgPSBmYi5maXJlc3RvcmUoKTtcclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG4vL2ltcG9ydCBob3N0VVJMIGZyb20gJy4vLi4vc2VydmVyLmpzJ1xyXG5cclxuY29uc3QgREVGQVVMVF9BUElfVkVSU0lPTiA9ICcyMDIwLTA0JztcclxuY29uc3QgREVGQVVMVF9BQ0NFU1NUT0tFTiA9ICdzaHBjYV8xODI2MTc2MGRkOGU3MjAyNTVhMjliNzE4YzU5NTM3NidcclxuY29uc3QgREVGQVVMVF9TVE9SRU5BTUUgPSAnc3ZlbmZpc2gtdGVzdC1zdG9yZS5teXNob3BpZnkuY29tJ1xyXG5cclxuLy9TZW5kcyB0aGUgUE9TVCB0byB0aGUgZ3JhcGhRTFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ3JhcGhxbFJlcXVlc3QoZ3FsLCAgc2hvcCA9IERFRkFVTFRfU1RPUkVOQU1FLFxyXG4gIGFjY2Vzc1Rva2VuID0gREVGQVVMVF9BQ0NFU1NUT0tFTiwgYXBpVmVyc2lvbj1ERUZBVUxUX0FQSV9WRVJTSU9OKSB7XHJcblxyXG4gIGNvbnN0IHVybCA9IGBodHRwczovLyR7c2hvcH0vYWRtaW4vYXBpLyR7YXBpVmVyc2lvbn0vZ3JhcGhxbC5qc29uYDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vZ3JhcGhxbFwiLFxyXG4gICAgICBcIlgtU2hvcGlmeS1BY2Nlc3MtVG9rZW5cIjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiXHJcbiAgICB9LFxyXG4gICAgYm9keTogZ3FsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAoZXJyb3JzKSB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSk7XHJcbiAgY29uc3QgdXNlckVycm9ycyA9IE9iamVjdC52YWx1ZXMoZGF0YSkuZmluZCh2ID0+IHYgJiYgdi51c2VyRXJyb3JzKTtcclxuICBpZiAodXNlckVycm9ycyAmJiB1c2VyRXJyb3JzLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh1c2VyRXJyb3JzKSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8vR2V0cyB0aGUgdGFncyBhbmQgaWQgb2YgdGhlIGN1c3RvbWVyIG9mIHRoZSBnaXZlbiBvcmRlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29vbGVyc0Zyb21PcmRlcihvcmRlcklkKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBocWxSZXF1ZXN0KFxyXG4gIGBxdWVyeSB7XHJcbiAgICBvcmRlcihpZDogZ2lkOi8vc2hvcGlmeS9PcmRlci8ke29yZGVySWR9KSB7XHJcbiAgICAgIGN1c3RvbWVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRhZ3NcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1gXHJcbilcclxuY29uc3QgaWQgPSBkYXRhLm9yZGVyLmN1c3RvbWVyLmlkO1xyXG5hbGVydChpZCk7XHJcbnJldHVybiB7Li4uZGF0YS5vcmRlciwgaWQ6IGRhdGEub3JkZXIuY3VzdG9tZXIuaWQsIHRhZ3M6IGRhdGEub3JkZXIuY3VzdG9tZXIudGFnc31cclxufVxyXG5cclxuLy9NYWtlcyB0aGUgZ3FsIHN0cmluZyB0aGF0IHJlZHVjZXMgdGhlIG51bWJlciBvZiBjb29sZXJzIGZvciB0aGVcclxuLy9jdXN0b21lciBvZiB0aGUgZ2l2ZW4gb3JkZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZHVjZUNvb2xlckNvdW50KGN1c3RvbWVyKSB7XHJcbiAgcmV0dXJuIGdyYXBocWxSZXF1ZXN0KFxyXG5cclxuICApXHJcbn1cclxuXHJcbi8vTWFrZXMgdGhlIGdxbCBzdHJpbmcgdGhhdCBpbmNyZWFzZXMgdGhlIG51bWJlciBvZiBjb29sZXJzIGZvciB0aGVcclxuLy9jdXN0b21lciBvZiB0aGUgZ2l2ZW4gb3JkZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluY3JlYXNlQ29vbGVyQ291bnQoY3VzdG9tZXIpIHtcclxuICByZXR1cm4gZ3JhcGhxbFJlcXVlc3QoXHJcblxyXG4gIClcclxufVxyXG5cclxuLy9NYWtlcyB0aGUgZ3FsIHN0cmluZyB0aGF0IGFkZHMgdGhlIGNvb2xlciB0byB0aGUgb3JkZXIncyBjdXN0b20gYXR0cmlidXRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb09yZGVyKG9yZGVyLCBjb29sZXIpIHtcclxuICByZXR1cm4gZ3JhcGhxbFJlcXVlc3QoXHJcblxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10YWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9