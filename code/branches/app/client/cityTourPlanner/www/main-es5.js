function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <!-- menu item -->\n  <ion-menu side=\"start\">\n    <ion-header>\n      <ion-toolbar translucent>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item ion-item *ngFor=\"let page of pages\" (click)=\"openPage(page.link); closeMenu();\">\n          <ion-label>{{page.title}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!-- end of menu item -->\n\n  <ion-router-outlet main></ion-router-outlet>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row ion-padding\">\n      <h5>{{userProfile.firstName}}, Ready to plan your next tour?</h5>\n    </div>\n\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n        <br>\n      <ion-item>\n        <ion-text>Share your travel preferences, by filling out a simple form!</ion-text>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-text>Tell us how long you will like to spend on each spot during your tour</ion-text>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-text>We generate an itinerary for a day tour in city of your choice!</ion-text>\n      </ion-item>\n    </ion-list>\n    <br>\n    <ion-button expand=\"block\" (click)=\"goToCreateTour()\">\n      Plan my tour\n    </ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <ion-header translucent>\n    <ion-toolbar>\n      <h3>City Tour PLanner</h3>\n      <p>Signin or create account to continue</p>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content fullscreen padding>\n    <!-- tabset -->\n    <ngb-tabset type=\"pills\">\n      <ngb-tab title=\"Login\">\n        <ng-template ngbTabContent>\n          <form #loginAdminForm=\"ngForm\">\n            <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n              <ion-item>\n                <ion-label position=\"stacked\">Email <ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n                <ion-input required type=\"email\" [(ngModel)]=\"loginCredentials.email\" name=\"email\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Password<ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n                <ion-input required type=\"Password\" [(ngModel)]=\"loginCredentials.password\" name=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n\n            <div class=\"ion-padding\">\n              <ion-button expand=\"block\" class=\"ion-no-margin\" (click)=\"userLogin(loginCredentials)\">\n                Login\n              </ion-button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Create account\">\n        <ng-template ngbTabContent>\n          <form #loginAdminForm=\"ngForm\">\n            <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n              <ion-item>\n                <ion-label position=\"stacked\">First name <ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"userAccountDetails.firstName\" name=\"firstName\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Email <ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n                <ion-input required type=\"email\" [(ngModel)]=\"userAccountDetails.email\" name=\"email\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Password<ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n                <ion-input required type=\"Password\" [(ngModel)]=\"userAccountDetails.password\" name=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n\n            <div class=\"ion-padding\">\n              <ion-button expand=\"block\" class=\"ion-no-margin\" (click)=\"createAccount(userAccountDetails)\">\n                Creat account\n              </ion-button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n\n\n  </ion-content>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/create-tour/create-tour.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secured/create-tour/create-tour.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecuredCreateTourCreateTourComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Create tour</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" menuToggle></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\" *ngIf=\"!itenarnaryDraftGenerated && !tourItenaryGenerated\">\n    <p class=\"text-warning\" *ngIf=\"showWarning\">Please select city</p>\n    <div>\n      <br />\n      <div class=\"form-group\">\n        <label for=\"selectCity\">Please select city</label>\n        <select class=\"form-control\" id=\"selectCity\" [(ngModel)]=\"city\">\n          <option *ngFor=\"let city of cities\" [value]=\"city.value\">{{ city.name }}</option>\n        </select>\n      </div>\n    </div>\n    <p>What meals would you like to have on your tour</p>\n    <div *ngFor=\"let meal of mealOptions\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" value=\"meal.value\" id=\"mealCheckbox\" (change)=\"selectMeal(meal)\"\n          [(ngModel)]=\"meal.selected\">\n        <label class=\"form-check-label\" for=\"mealCheckbox\">\n          {{meal.name}}\n        </label>\n      </div>\n    </div>\n\n    <br>\n    <div>\n      <h6>What is important to you on your tour?</h6>\n      <p>Please select at least four</p>\n    </div>\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n      <!-- museum -->\n      <ngb-panel title=\"Museum\">\n        <ng-template ngbPanelContent>\n          <p>What kind of museums do you like?</p>\n          <div *ngFor=\"let museumOption of museumOptions\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"museumOption.value\" id=\"museumCheckbox\"\n                (change)=\"updateTotalSelected(museumOption, 'museum')\" [(ngModel)]=\"museumOption.selected\">\n              <label class=\"form-check-label\" for=\"museumCheckbox\">\n                {{museumOption.name}}\n              </label>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-panel>\n      <!-- entertainment -->\n      <ngb-panel title=\"Entertainment\">\n        <ng-template ngbPanelContent>\n          <p>What would you like to do for entertainment?</p>\n          <div *ngFor=\"let entertainmentOption of entertainmentOptions\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"entertainmentOption.value\"\n                id=\"entertainmentOptionCheckbox\" [(ngModel)]=\"entertainmentOption.selected\"\n                (change)=\"updateTotalSelected(entertainmentOption, 'entertainment')\">\n              <label class=\"form-check-label\" for=\"entertainmentOptionCheckbox\">\n                {{entertainmentOption.name}}\n              </label>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-panel>\n      <!-- food -->\n      <ngb-panel title=\"Food\">\n        <ng-template ngbPanelContent>\n          <p>Where we bout to eat at?</p>\n          <div *ngFor=\"let foodOption of foodOptions\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"foodOption.value\" id=\"foodOptionCheckbox\"\n                (change)=\"updateTotalSelected(foodOption, 'food')\" [(ngModel)]=\"foodOption.selected\">\n              <label class=\"form-check-label\" for=\"foodOptionCheckbox\">\n                {{foodOption.name}}\n              </label>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-panel>\n      <!-- Outdoor and Recreation -->\n      <ngb-panel title=\"Outdoor and Recreation\">\n        <ng-template ngbPanelContent>\n          <p>Which outdoor and recreational activities interest you?</p>\n          <div *ngFor=\"let outdoorAndRecreationOption of outdoorsAndRecreationOptions\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"outdoorsAndRecreationOption.value\"\n                id=\"outdoorsAndRecreationOptionCheckbox\"\n                (change)=\"updateTotalSelected(outdoorAndRecreationOption, 'outdoorAndRecreation')\"\n                [(ngModel)]=\"outdoorAndRecreationOption.selected\">\n              <label class=\"form-check-label\" for=\"outdoorsAndRecreationOptionCheckbox\">\n                {{outdoorAndRecreationOption.name}}\n              </label>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-panel>\n      <!-- shopping -->\n      <ngb-panel title=\"Shopping\">\n        <ng-template ngbPanelContent>\n          <p>For shopping, I like:</p>\n          <div *ngFor=\"let shoppingOption of shoppingOptions\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"shoppingOption.value\" id=\"shoppingOptionCheckbox\"\n                (change)=\"updateTotalSelected(shoppingOption, 'shopping')\" [(ngModel)]=\"shoppingOption.selected\">\n              <label class=\"form-check-label\" for=\"shoppingOptionCheckbox\">\n                {{shoppingOption.name}}\n              </label>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-panel>\n      <!-- performing arts -->\n      <ngb-panel title=\"Performing Arts\">\n        <ng-template ngbPanelContent>\n          <p>I like thees forms of performing arts:</p>\n          <div *ngFor=\"let performingArtsOption of performingArtsOptions\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"performingArtsOption.value\"\n                id=\"performingArtsOptionCheckbox\" (change)=\"updateTotalSelected(performingArtsOption, 'performingArts')\"\n                [(ngModel)]=\"performingArtsOption.selected\">\n              <label class=\"form-check-label\" for=\"performingArtsOptionCheckbox\">\n                {{performingArtsOption.name}}\n              </label>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-panel>\n      <!-- buildings -->\n      <ngb-panel title=\"Buildings\">\n        <ng-template ngbPanelContent>\n          <p>For Buildings, I would like to see:</p>\n          <div *ngFor=\"let buildingsOption of buildingsOptions\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"buildingsOption.value\"\n                id=\"buildingsOptionsCheckbox\" (change)=\"updateTotalSelected(buildingsOption, 'buildings')\"\n                [(ngModel)]=\"buildingsOption.selected\">\n              <label class=\"form-check-label\" for=\"buildingsOptionsOptionCheckbox\">\n                {{buildingsOption.name}}\n              </label>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n    <br />\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitPreference(formData)\" [disabled]=\"disableButton\">\n      Create tour\n    </button>\n    <br />\n    <br />\n  </div>\n\n  <!-- When tour itenary draft is loaded from API -->\n  <div class=\"container\" *ngIf=\"itenarnaryDraftGenerated\">\n    <br>\n    <p class=\"text-warning\" *ngIf=\"showWarning\">How long will you lik to spend on each spot?</p>\n    <div>\n      <br />\n      <p *ngIf=\"noOfTourItemsToSelect == 0\">\n        <mark>You have to select a time option to be able to select venues below</mark>\n      </p>\n      <p *ngIf=\"noOfTourItemsToSelect != 0\">\n        <mark>You have to select {{noOfTourItemsToSelect}} venues below</mark>\n      </p>\n\n      <div class=\"form-group\">\n        <label for=\"selectTime\">Please select time for each spot</label>\n        <select class=\"form-control\" id=\"selectTime\" [(ngModel)]=\"time\" (change)=\"updateSpotSelectionCount(time)\">\n          <option *ngFor=\"let time of timeOptions\" [value]=\"time.spotsCount\">{{ time.name }}</option>\n        </select>\n      </div>\n    </div>\n    <!-- meal options selection -->\n    <p class=\"text-warning\" *ngIf=\"showSelectMealWarning\">Please select meals to create your itinerary</p>\n    <h5>Please select meal from the options below</h5>\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"0\">\n      <ngb-panel *ngFor=\"let meal of meals;index as index\" id={{index}} [disabled]=\"disbaleAccordion\">\n        <div *ngFor=\"let mealItems of meal | keyvalue\">\n          <ng-template ngbPanelTitle>\n            <span>{{mealItems.key}}</span>\n          </ng-template>\n          <ng-template ngbPanelContent>\n            <div *ngFor=\"let mealItem of mealItems.value\">\n              <div class=\"form-check\">\n                <h5>{{mealItem.venue.name}} - {{mealItem.venue.categories[0].name}}</h5>\n                <input class=\"form-check-input\" type=\"radio\" value={{mealItem.id}} id={{mealItems.key}}\n                  (change)=\"selectMealOption($event, mealItem, mealItems.key)\" [(ngModel)]=\"mealItem.selected\">\n                <label class=\"form-check-label\" for={{mealItems.key}}>\n                  <div class=\"card\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top\" src={{getImageUrl(mealItem.photo)}} class=\"img-fluid\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">{{mealItem.venue.name}}</h5>\n                      <p class=\"card-text\">\n                        <strong>Address:</strong>\n                        {{getFormattedAddress(mealItem.venue.location.formattedAddress)}}\n                      </p>\n                    </div>\n                  </div>\n                </label>\n              </div>\n              <br>\n            </div>\n          </ng-template>\n        </div>\n        <br>\n      </ngb-panel>\n    </ngb-accordion>\n\n    <h5>Please select from the options below</h5>\n    <br>\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"0\">\n      <ngb-panel *ngFor=\"let draft of itenarnaryDraft;index as index\" id={{index}} [disabled]=\"disbaleAccordion\">\n        <ng-template ngbPanelTitle>\n          <span>{{draft.items[0].venue.categories[0].pluralName}}</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n          <div *ngFor=\"let item of draft.items\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"item.venue.id\" id=\"itenarnaryDraftItem\"\n                (change)=\"updateSelectedDraftItems($event, item)\">\n              <div class=\"card\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src={{getImageUrl(item.photo)}} class=\"img-fluid\" alt=\"\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">{{item.venue.name}}</h5>\n                  <p class=\"card-text\">\n                    <strong>Address:</strong>\n                    {{getFormattedAddress(item.venue.location.formattedAddress)}}\n                  </p>\n                </div>\n              </div>\n            </div>\n            <br>\n          </div>\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n\n    <br>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"createTourItinerary()\" [disabled]=\"disableCreateButton\">\n      Create Itenary\n    </button>\n  </div>\n\n</ion-content>\n<br />";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/logout/logout.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secured/logout/logout.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecuredLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  Logging you out...\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/multi-step-form/multi-step-form.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secured/multi-step-form/multi-step-form.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecuredMultiStepFormMultiStepFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <h1 class=\"form-heading\">{{ stepItems[activeStepIndex].label }}</h1>\n\n  <ng-container *ngFor=\"let form of masterForm; let i = index; trackBy: trackByFn\">\n    <form action=\"\" [formGroup]=\"masterForm[i]\" *ngIf=\"i === activeStepIndex || masterForm.length === 1\">\n      <div class=\"\">\n        <div class=\"fields-container\">\n          <div *ngFor=\"let field of formFields[i]; trackBy: trackByFn\" [ngSwitch]=\"currentFormContent[i][field].type\">\n            <div class=\"full-width\">\n              <label class=\"field-label text-bold\"\n                [for]=\"field\">{{ currentFormContent[i][field].label | formatTitle }}</label>\n\n              <br />\n              <br />\n\n              <ng-container *ngSwitchCase=\"'textarea'\">\n                <textarea [id]=\"field\" [formControlName]=\"field\"\n                  [placeholder]=\"currentFormContent[i][field].placeholder\"></textarea>\n              </ng-container>\n\n              <ng-container *ngSwitchCase=\"'select'\">\n                <select [formControlName]=\"field\" [id]=\"field\">\n                  <option value=\"\">{{ currentFormContent[i][field].placeholder }}</option>\n                  <option *ngFor=\"let option of currentFormContent[i][field].options; trackBy: trackByFn\"\n                    [value]=\"option.value\">{{ option.name }}</option>\n                </select>\n              </ng-container>\n\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <!-- <select [formControlName]=\"field\" [id]=\"field\">\n                  <option value=\"\">{{ currentFormContent[i][field].placeholder }}</option>\n                  <option *ngFor=\"let option of currentFormContent[i][field].options; trackBy: trackByFn\"\n                    [value]=\"option.value\">{{ option.name }}</option>\n                </select> -->\n                <input [type]=\"currentFormContent[i][field].type\" [formControlName]=\"field\" [id]=\"field\"\n                  [placeholder]=\"currentFormContent[i][field].placeholder\"\n                  [value]=\"currentFormContent[i][field].placeholder.value\" />\n                  <label class=\"form-check-label\" for=\"inlineCheckbox1\">{{currentFormContent[i][field].placeholder}}</label>\n              </ng-container>\n\n              <ng-container *ngSwitchDefault>\n                <input [type]=\"currentFormContent[i][field].type\" [formControlName]=\"field\" [id]=\"field\"\n                  [placeholder]=\"currentFormContent[i][field].placeholder\"\n                  [value]=\"currentFormContent[i][field].placeholder.value\" />\n              </ng-container>\n            </div>\n\n            <p class=\"validation-error\" *ngIf=\"\n                  (masterForm[i].get(field).dirty ||\n                    masterForm[i].get(field).touched) &&\n                  masterForm[i].get(field).invalid &&\n                  masterForm[i].get(field).errors\n                \">\n              {{ getValidationMessage(i, field) }}\n            </p>\n          </div>\n        </div>\n\n        <br />\n        <br />\n\n        <!-- preview container -->\n        <div class=\"preview-container\" *ngIf=\"activeStepIndex === stepItems.length - 1\">\n          <p>\n            You can click previous to review your selections <br />\n            Or submit your preferences.\n          </p>\n        </div>\n\n\n        <div class=\"button-container\">\n          <button type=\"button\" [disabled]=\"!activeStepIndex\" (click)=\"goToStep('prev')\">Previous</button>\n          <button *ngIf=\"activeStepIndex === stepItems.length - 1\" type=\"button\"\n            (click)=\"onFormSubmit()\">Submit</button>\n          <button type=\"button\" [disabled]=\"activeStepIndex === stepItems.length - 1 || masterForm[i].invalid\"\n            (click)=\"goToStep('next')\">Next</button>\n        </div>\n      </div>\n    </form>\n  </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/profile/profile.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secured/profile/profile.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecuredProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" menuToggle></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-3 center\">\n        <span class=\"profile-picture\">\n          <img src=\"../../../assets/avatar.png\" class=\"img-fluid\" alt=\"City tour planner - user profile\">\n        </span>\n\n        <div class=\"space space-4\"></div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-9\">\n        <h4 class=\"blue\">\n          <span class=\"middle\">{{user.firstName}}</span>\n        </h4>\n\n        <div class=\"profile-user-info\">\n          <div class=\"profile-info-row\">\n            <div class=\"profile-info-name\"> Email </div>\n\n            <div class=\"profile-info-value\">\n              <span>{{user.email}}</span>\n            </div>\n          </div>\n\n          <div class=\"profile-info-row\">\n            <div class=\"profile-info-name\"> Date of birth </div>\n\n            <div class=\"profile-info-value\">\n              <span>{{user.dateOfBirth | date: 'dd/MM/yyyy'}}</span>\n            </div>\n          </div>\n\n          <div class=\"profile-info-row\">\n            <div class=\"profile-info-name\"> Joined </div>\n\n            <div class=\"profile-info-value\">\n              <span>{{user.createdAt | date: 'dd/MM/yyyy'}}</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"hr hr-8 dotted\"></div>\n      </div>\n    </div>\n\n    <br>\n    <p>\n      <button class=\"btn btn-primary\" (click)=\"open(editProfileModal)\">Edit profile</button>\n    </p>\n  </div>\n\n</ion-content>\n<br />\n\n<!-- venue detail modal -->\n<ng-template #editProfileModal let-modal>\n  <div class=\"modal-header\">\n    <h6 class=\"modal-title\" id=\"modal-basic-title\">Edit profile</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <!-- edit profile form -->\n    <form #loginAdminForm=\"ngForm\">\n      <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n        <ion-item>\n          <ion-label position=\"stacked\">Email <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input required type=\"email\" [(ngModel)]=\"user.email\" name=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">First name <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input required type=\"text\" [(ngModel)]=\"user.firstName\" name=\"firstName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Last name</ion-label>\n          <ion-input required type=\"text\" [(ngModel)]=\"user.lastName\" name=\"lastName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Date of birth</ion-label>\n          <ion-input required type=\"date\" [(ngModel)]=\"user.dateOfBirth\" name=\"dateOfBirth\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Gender</ion-label>\n          <ion-input required type=\"text\" [(ngModel)]=\"user.gender\" name=\"gender\"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)=\"editProfile(user)\">\n          Update profile\n        </ion-button>\n      </div>\n    </form>\n  </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/tour-itenary/tour-itenary.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secured/tour-itenary/tour-itenary.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecuredTourItenaryTourItenaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Tour Itinerary</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" menuToggle></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"container mt-5 mb-5\" *ngIf=\"tourReady\">\n  <!-- <div class=\"container mt-5 mb-5\"> -->\n    <div class=\"row\">\n      <div class=\"col-md-11 offset-md-1\">\n        <h4>Tour Itinerary </h4>\n        <button class=\"btn\" (click)=\"shareItinerary()\">Share Itinerary</button>\n\n        <br>\n        <ul class=\"timeline\">\n          <li *ngFor=\"let item of tourItinerary; index as index\">\n            <ion-icon name=\"train\"></ion-icon>\n            <a *ngIf=\"index != 0\" target=\"_blank\" href={{getDirectionsUrl(index,tourItinerary)}}>Get directions</a>\n            <h6>\n              <span *ngIf=\"item.label\">{{item.label}} at</span>\n              <button class=\"btn place-detail\" (click)=\"open(venueDetail)\">{{item.venue.name}}</button>\n            </h6>\n\n            <!-- venue detail modal -->\n            <ng-template #venueDetail let-modal>\n              <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"modal-basic-title\">Venue details</h6>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <h5 class=\"modal-title\" id=\"modal-basic-title\">{{item.venue.name}}</h5>\n                <br>\n                <img class=\"card-img-top\" src={{getImageUrl(item.photo)}} class=\"img-fluid\" width=\"250\" height=\"250\"\n                  alt=\"\">\n\n                <br>\n                <br>\n                <h5>Address:</h5>\n                <p>{{getFormattedAddress(item.venue.location.formattedAddress)}}</p>\n              </div>\n            </ng-template>\n          </li>\n        </ul>\n\n        <br>\n        <button class=\"btn\" (click)=\"endTour()\">End Tour</button>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n\n</ion-content>\n<br />";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _public_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./public/login/login.component */
    "./src/app/public/login/login.component.ts");
    /* harmony import */


    var _secured_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./secured/logout/logout.component */
    "./src/app/secured/logout/logout.component.ts");
    /* harmony import */


    var _secured_create_tour_create_tour_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./secured/create-tour/create-tour.component */
    "./src/app/secured/create-tour/create-tour.component.ts");
    /* harmony import */


    var _secured_multi_step_form_multi_step_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./secured/multi-step-form/multi-step-form.component */
    "./src/app/secured/multi-step-form/multi-step-form.component.ts");
    /* harmony import */


    var _secured_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./secured/profile/profile.component */
    "./src/app/secured/profile/profile.component.ts");
    /* harmony import */


    var _secured_tour_itenary_tour_itenary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./secured/tour-itenary/tour-itenary.component */
    "./src/app/secured/tour-itenary/tour-itenary.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _public_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'logout',
      component: _secured_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]
    }, {
      path: 'create',
      component: _secured_create_tour_create_tour_component__WEBPACK_IMPORTED_MODULE_5__["CreateTourComponent"]
    }, {
      path: 'profile',
      component: _secured_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    }, {
      path: 'itinerary',
      component: _secured_tour_itenary_tour_itenary_component__WEBPACK_IMPORTED_MODULE_8__["TourItenaryComponent"]
    }, {
      path: 'form',
      component: _secured_multi_step_form_multi_step_form_component__WEBPACK_IMPORTED_MODULE_6__["MultiStepFormComponent"]
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\np {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvc2FuZGJveC9tc2NfcHJvamVjdC9jb2RlL2JyYW5jaGVzL2FwcC9jbGllbnQvY2l0eVRvdXJQbGFubmVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxucCB7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG59XG4iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _secured_create_tour_create_tour_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./secured/create-tour/create-tour.component */
    "./src/app/secured/create-tour/create-tour.component.ts");
    /* harmony import */


    var _secured_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./secured/profile/profile.component */
    "./src/app/secured/profile/profile.component.ts");
    /* harmony import */


    var _secured_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./secured/logout/logout.component */
    "./src/app/secured/logout/logout.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, router, menu) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.menu = menu;
        this.initializeApp();
        this.pages = [{
          title: 'Home',
          component: _home_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
          link: 'home'
        }, {
          title: 'Create Tour',
          component: _secured_create_tour_create_tour_component__WEBPACK_IMPORTED_MODULE_7__["CreateTourComponent"],
          link: 'create'
        }, {
          title: 'Profile',
          component: _secured_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
          link: 'profile'
        }, {
          title: 'Logout',
          component: _secured_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"],
          link: 'logout'
        } // { title: 'Tour Itinerary', component: TourItenaryComponent, link: 'itinerary' }
        ];
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "openPage",
        value: function openPage(link) {
          this.router.navigate(["/".concat(link)]);
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.menu.close();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @yaga/leaflet-ng2 */
    "./node_modules/@yaga/leaflet-ng2/lib/index.js");
    /* harmony import */


    var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(_yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _public_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./public/login/login.component */
    "./src/app/public/login/login.component.ts");
    /* harmony import */


    var _secured_create_tour_create_tour_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./secured/create-tour/create-tour.component */
    "./src/app/secured/create-tour/create-tour.component.ts");
    /* harmony import */


    var _secured_multi_step_form_multi_step_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./secured/multi-step-form/multi-step-form.component */
    "./src/app/secured/multi-step-form/multi-step-form.component.ts");
    /* harmony import */


    var _secured_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./secured/profile/profile.component */
    "./src/app/secured/profile/profile.component.ts");
    /* harmony import */


    var _secured_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./secured/logout/logout.component */
    "./src/app/secured/logout/logout.component.ts");
    /* harmony import */


    var _secured_tour_itenary_tour_itenary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./secured/tour-itenary/tour-itenary.component */
    "./src/app/secured/tour-itenary/tour-itenary.component.ts");
    /* harmony import */


    var _pipes_format_title_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../pipes/format-title.pipe */
    "./src/pipes/format-title.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _public_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _secured_create_tour_create_tour_component__WEBPACK_IMPORTED_MODULE_14__["CreateTourComponent"], _secured_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"], _secured_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"], _secured_tour_itenary_tour_itenary_component__WEBPACK_IMPORTED_MODULE_18__["TourItenaryComponent"], _secured_multi_step_form_multi_step_form_component__WEBPACK_IMPORTED_MODULE_15__["MultiStepFormComponent"], _pipes_format_title_pipe__WEBPACK_IMPORTED_MODULE_19__["FormatTitlePipe"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_10__["YagaModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"] // ngBootstrap
      ],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth-service.service */
    "./src/services/auth-service.service.ts"); // Third party imports
    // Local imports


    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(authservice, router, loadingController) {
        _classCallCheck(this, HomePage);

        this.authservice = authservice;
        this.router = router;
        this.loadingController = loadingController;
        this.userProfile = {};
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log(this.router.getCurrentNavigation().extras.state, 'this os from itinerary page');
          var user = this.authservice.getUserFromStorage();

          if (!user) {
            this.router.navigate(['login']);
          } else {
            this.getUserProfile();
          }
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 2:
                    loader = _context.sent;
                    loader.present();
                    this.authservice.getUserProfile().then(function (response) {
                      loader.dismiss();
                      _this2.userProfile = response.user;
                    }).catch(function (error) {
                      var status = error.status,
                          statusText = error.statusText;

                      if (status == 401 && statusText == 'Unauthorized') {
                        localStorage.removeItem('user');

                        _this2.router.navigate(['login']);
                      } else {
                        console.log(error, 'Error getting user profile'); // throw Error(error)
                      }
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goToCreateTour",
        value: function goToCreateTour() {
          this.router.navigate(['create']);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/public/login/login.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/public/login/login.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/public/login/login.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/public/login/login.component.ts ***!
    \*************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPublicLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/auth-service.service */
    "./src/services/auth-service.service.ts"); // Third party imports
    // Local imports


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, authservice) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authservice = authservice;
        this.loginCredentials = {
          email: '',
          password: ''
        };
        this.userAccountDetails = {
          firstName: '',
          email: '',
          password: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = this.authservice.getUserFromStorage();

          if (user) {
            this.router.navigate(['home']);
          }
        }
      }, {
        key: "userLogin",
        value: function userLogin(loginCredentials) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.authservice.loginUser(loginCredentials);

                  case 2:
                    response = _context2.sent;

                    // User successfully logged in
                    if (response) {
                      this.router.navigate(['home']);
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "createAccount",
        value: function createAccount(userAccountDetails) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.authservice.createUser(userAccountDetails);

                  case 2:
                    response = _context3.sent;

                    // User successfully logged in after account created
                    if (response) {
                      this.router.navigate(['home']);
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/public/login/login.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/secured/create-tour/constants.ts":
  /*!**************************************************!*\
    !*** ./src/app/secured/create-tour/constants.ts ***!
    \**************************************************/

  /*! exports provided: CITIES, entertainmentOptions, outdoorsAndRecreationOptions, shoppingOptions, museumOptions, eventOptions, foodOptions, buildingsOptions, nightlifeOptions, performingArtsOptions */

  /***/
  function srcAppSecuredCreateTourConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CITIES", function () {
      return CITIES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "entertainmentOptions", function () {
      return entertainmentOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "outdoorsAndRecreationOptions", function () {
      return outdoorsAndRecreationOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shoppingOptions", function () {
      return shoppingOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "museumOptions", function () {
      return museumOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "eventOptions", function () {
      return eventOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "foodOptions", function () {
      return foodOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "buildingsOptions", function () {
      return buildingsOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nightlifeOptions", function () {
      return nightlifeOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "performingArtsOptions", function () {
      return performingArtsOptions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CITIES = [{
      name: 'Berlin, Germany',
      value: 'Berlin'
    }, {
      name: 'Munich, Germany',
      value: 'Munich'
    }, {
      name: 'Hamburg, Germany',
      value: 'Hamburg'
    }, {
      name: 'Frankfurt, Germany',
      value: 'Frankfurt'
    }, {
      name: 'Leipzig, Germany',
      value: 'Leipzig'
    }, {
      name: 'London, UK',
      value: 'London'
    }];
    var museumOptions = [{
      name: 'Art Museum',
      value: '4bf58dd8d48988d18f941735',
      selected: false
    }, {
      name: 'History Museum',
      value: '4bf58dd8d48988d190941735',
      selected: false
    }, {
      name: 'Science Museum',
      value: '4bf58dd8d48988d191941735',
      selected: false
    }];
    var entertainmentOptions = [{
      name: 'Art Gallery',
      value: '4bf58dd8d48988d1e2931735',
      selected: false
    }, {
      name: 'Casino',
      value: '4bf58dd8d48988d17c941735',
      selected: false
    }, {
      name: 'Movie Theater',
      value: '4bf58dd8d48988d17f941735',
      selected: false
    }, {
      name: 'Performing Arts',
      value: '4bf58dd8d48988d1f2931735',
      selected: false
    }];
    var outdoorsAndRecreationOptions = [{
      name: 'Beach',
      value: '4bf58dd8d48988d1e2941735',
      selected: false
    }, {
      name: 'Hill',
      value: '5bae9231bedf3950379f89cd',
      selected: false
    }, {
      name: 'Lake',
      value: '4bf58dd8d48988d161941735',
      selected: false
    }, {
      name: 'Mountain',
      value: '4eb1d4d54b900d56c88a45fc',
      selected: false
    }, {
      name: 'Park And Gardens',
      value: '4bf58dd8d48988d163941735',
      selected: false
    }];
    var shoppingOptions = [{
      name: 'Fabric Shop',
      value: '52f2ab2ebcbc57f1066b8b26',
      selected: false
    }, {
      name: 'Cosmetics Shop',
      value: '4bf58dd8d48988d10c951735',
      selected: false
    }, {
      name: 'Comic Shop',
      value: '52f2ab2ebcbc57f1066b8b18',
      selected: false
    }, {
      name: 'Clothing Store',
      value: '4bf58dd8d48988d103951735',
      selected: false
    }, {
      name: 'Arts & Crafts Store',
      value: '4bf58dd8d48988d127951735',
      selected: false
    }, {
      name: 'Automotive Shop',
      value: '4bf58dd8d48988d124951735',
      selected: false
    }];
    var eventOptions = [{
      name: 'Christmas Market',
      value: '52f2ab2ebcbc57f1066b8b3b',
      selected: false
    }, {
      name: 'Festival',
      value: '5267e4d9e4b0ec79466e48c7',
      selected: false
    }, {
      name: 'Music Festival',
      value: '5267e4d9e4b0ec79466e48d1',
      selected: false
    }, {
      name: 'Stoop Sale',
      value: '52f2ab2ebcbc57f1066b8b54',
      selected: false
    }, {
      name: 'Street Fair',
      value: '5267e4d8e4b0ec79466e48c5',
      selected: false
    }, {
      name: 'Trade Fair',
      value: '5bae9231bedf3950379f89c3',
      selected: false
    }];
    var foodOptions = [{
      name: 'American Restaurant',
      value: '4bf58dd8d48988d14e941735',
      selected: false
    }, {
      name: 'Asian Restaurant',
      value: '4bf58dd8d48988d142941735',
      selected: false
    }, {
      name: 'Indonesian Restaurant',
      value: '4deefc054765f83613cdba6f',
      selected: false
    }, {
      name: 'Japanese Restaurant',
      value: '4bf58dd8d48988d111941735',
      selected: false
    }, {
      name: 'Korean Restaurant',
      value: '4bf58dd8d48988d113941735',
      selected: false
    }];
    var performingArtsOptions = [{
      name: 'Dance Studio',
      value: '4bf58dd8d48988d134941735',
      selected: false
    }, {
      name: 'Indie Theater',
      value: '4bf58dd8d48988d135941735',
      selected: false
    }, {
      name: 'Opera House',
      value: '4bf58dd8d48988d136941735',
      selected: false
    }, {
      name: 'Theater',
      value: '4bf58dd8d48988d137941735',
      selected: false
    }];
    var buildingsOptions = [{
      name: 'College Arts Building',
      value: '4bf58dd8d48988d199941735',
      selected: false
    }, {
      name: 'City Hall',
      value: '4bf58dd8d48988d129941735',
      selected: false
    }, {
      name: 'Historic Site',
      value: '4deefb944765f83613cdba6e',
      selected: false
    }, {
      name: 'Monument / Landmark',
      value: '4bf58dd8d48988d12d941735',
      selected: false
    }];
    var nightlifeOptions = [{
      name: 'Bar',
      value: '4bf58dd8d48988d116941735',
      selected: false
    }, {
      name: 'Lounge',
      value: '4bf58dd8d48988d121941735',
      selected: false
    }, {
      name: 'Nightclub',
      value: '4bf58dd8d48988d11f941735',
      selected: false
    }];
    /***/
  },

  /***/
  "./src/app/secured/create-tour/create-tour.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/secured/create-tour/create-tour.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecuredCreateTourCreateTourComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZWQvY3JlYXRlLXRvdXIvY3JlYXRlLXRvdXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/secured/create-tour/create-tour.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/secured/create-tour/create-tour.component.ts ***!
    \**************************************************************/

  /*! exports provided: CreateTourComponent */

  /***/
  function srcAppSecuredCreateTourCreateTourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTourComponent", function () {
      return CreateTourComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _turf_turf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @turf/turf */
    "./node_modules/@turf/turf/turf.min.js");
    /* harmony import */


    var _turf_turf__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/api-service.service */
    "./src/services/api-service.service.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./constants */
    "./src/app/secured/create-tour/constants.ts");

    var mealOptions = [{
      name: 'Breakfast',
      value: 'breakfast',
      selected: false
    }, {
      name: 'Lunch',
      value: 'lunch',
      selected: false
    }, {
      name: 'Dinner',
      value: 'dinner',
      selected: false
    }];
    var timeOptions = [{
      name: '1 hour',
      value: '1',
      spotsCount: 18,
      mealIndexes: {
        breakfast: 3,
        lunch: 7,
        dinner: 12
      }
    }, {
      name: '1 hour 30',
      value: '1:30',
      spotsCount: 12,
      mealIndexes: {
        breakfast: 3,
        lunch: 6,
        dinner: 10
      }
    }, {
      name: '2 hours',
      value: '2',
      spotsCount: 8,
      mealIndexes: {
        breakfast: 0,
        lunch: 4,
        dinner: 7
      }
    }];

    var CreateTourComponent =
    /*#__PURE__*/
    function () {
      function CreateTourComponent(config, apiService, router) {
        _classCallCheck(this, CreateTourComponent);

        this.apiService = apiService;
        this.router = router;
        this.totalSelected = 0;
        this.minSelectCount = 4;
        this.maxSelectCount = 8; // buttons status

        this.disableCreateButton = true;
        this.disableButton = true; // enable venues accordion

        this.disbaleAccordion = true;
        this.city = '';
        this.time = '';
        this.showWarning = false;
        this.showAdressWarning = false;
        this.showSelectMealWarning = false;
        this.tourItenaryGenerated = false; // values for min and max based on time selection

        this.totalTourItems = 0;
        this.noOfTourItemsToSelect = 0;
        this.tourItemsSelected = 0;
        this.selectedTourItems = 0;
        this.selectedDraftItems = []; // selectedDraftItemsIds: Array<any> = [];
        // meals and venuesId

        this.selectedMealId = [];
        this.selectedDraftItemsIds = [];
        this.tourItenary = [];
        this.selectedMealOptions = [];
        this.selectedMeals = {};
        this.itenarnaryDraftGenerated = false;
        this.itenarnaryDraft = [];
        this.meals = [];
        this.itenarnaryCreated = false;
        this.cities = _constants__WEBPACK_IMPORTED_MODULE_6__["CITIES"]; // Preference options

        this.museumOptions = _constants__WEBPACK_IMPORTED_MODULE_6__["museumOptions"];
        this.entertainmentOptions = _constants__WEBPACK_IMPORTED_MODULE_6__["entertainmentOptions"];
        this.foodOptions = _constants__WEBPACK_IMPORTED_MODULE_6__["foodOptions"];
        this.outdoorsAndRecreationOptions = _constants__WEBPACK_IMPORTED_MODULE_6__["outdoorsAndRecreationOptions"];
        this.shoppingOptions = _constants__WEBPACK_IMPORTED_MODULE_6__["shoppingOptions"];
        this.buildingsOptions = _constants__WEBPACK_IMPORTED_MODULE_6__["buildingsOptions"];
        this.performingArtsOptions = _constants__WEBPACK_IMPORTED_MODULE_6__["performingArtsOptions"];
        this.mealOptions = mealOptions;
        this.timeOptions = timeOptions;
        config.closeOthers = true;
      }

      _createClass(CreateTourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formData = {};
        }
      }, {
        key: "selectMeal",
        value: function selectMeal(meal) {
          if (meal.selected && this.selectedMealOptions.indexOf(meal.value) == -1) {
            this.selectedMealOptions.push(meal.value);
          }

          if (!meal.selected && this.selectedMealOptions.indexOf(meal.value) != -1) {
            this.selectedMealOptions.splice(this.selectedMealOptions.indexOf(meal.value), 1);
          }
        }
      }, {
        key: "selectMealOption",
        value: function selectMealOption(event, meal, key) {
          var spotsCount = this.noOfTourItemsToSelect + this.totalMeal;
          var mealOption = this.timeOptions.find(function (option) {
            return option.spotsCount == spotsCount;
          });
          meal['index'] = mealOption.mealIndexes[key];
          meal['label'] = key;

          if (meal.selected && event.target.checked) {
            this.selectedMeals[key] = meal;
          }
        }
      }, {
        key: "addItemToInterests",
        value: function addItemToInterests(item) {
          if (this.formData['interests'] && this.formData['interests'].indexOf(item) == -1) {
            this.formData['interests'].push(item);
          } else {
            this.formData['interests'] = [item];
          }
        }
      }, {
        key: "removeItemFromInterests",
        value: function removeItemFromInterests(item) {
          if (this.formData['interests'] && this.formData['interests'].indexOf(item) > -1) {
            this.formData['interests'].splice(this.formData['interests'].indexOf(item), 1);
          }
        }
      }, {
        key: "updateButtonStatus",
        value: function updateButtonStatus() {
          this.totalSelected < this.minSelectCount || this.totalSelected > this.maxSelectCount ? this.disableButton = true : this.disableButton = false;
        }
      }, {
        key: "updateCreateTourButtonStatus",
        value: function updateCreateTourButtonStatus() {
          this.totalSelected < this.minSelectCount || this.totalSelected > this.maxSelectCount ? this.disableButton = true : this.disableButton = false;
        }
      }, {
        key: "updateTotalSelected",
        value: function updateTotalSelected(item, category) {
          if (item.selected) {
            this.totalSelected++;
            this.addItemToInterests(item.value);
          } else {
            this.totalSelected--;
            this.removeItemFromInterests(item.value);
          }

          this.updateButtonStatus();
        }
      }, {
        key: "submitPreference",
        value: function submitPreference(formData) {
          var _this3 = this;

          if (!this.city) {
            this.showWarning = true;
          } else {
            this.showWarning = false;
            this.apiService.createTour({
              city: this.city,
              interests: formData.interests,
              meals: this.selectedMealOptions
            }).then(function (responses) {
              _this3.itenarnaryDraftGenerated = true;
              _this3.itenarnaryDraft = responses.response;
              _this3.meals = responses.meals;
              _this3.totalMeal = _this3.meals.length;
            }).catch(function (error) {
              console.log(error, 'API error');
            });
          }
        }
      }, {
        key: "getImageUrl",
        value: function getImageUrl(photo) {
          return photo.prefix && photo.suffix ? "".concat(photo.prefix).concat(photo.width, "x").concat(photo.height).concat(photo.suffix) : '';
        }
      }, {
        key: "getFormattedAddress",
        value: function getFormattedAddress(formattedAddress) {
          return formattedAddress.join(', ');
        } // add third parameter of key, if it has key, add it to meals, else tour items

      }, {
        key: "updateSelectedDraftItems",
        value: function updateSelectedDraftItems(event, item) {
          var itemIndex = this.selectedDraftItems.map(function (item) {
            return item.venue.id;
          }).indexOf(item.venue.id);

          if (event.target.checked) {
            this.selectedDraftItems.push(item);
          } else {
            this.selectedDraftItems.splice(itemIndex, 1);
          }

          this.noOfTourItemsToSelect == this.selectedDraftItems.length ? this.disableCreateButton = false : this.disableCreateButton = true;
        }
      }, {
        key: "sortByDistance",
        value: function sortByDistance(startLocation) {
          var startPoint = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["point"])([startLocation.venue.location.lng, startLocation.venue.location.lat]);
          return this.selectedDraftItems.sort(function (a, b) {
            a.distance = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["distance"])(startPoint, Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["point"])([a.venue.location.lng, a.venue.location.lat]), {
              units: 'kilometers'
            });
            b.distance = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["distance"])(startPoint, Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["point"])([b.venue.location.lng, b.venue.location.lat]), {
              units: 'kilometers'
            });
            return a.distance - b.distance;
          });
        }
      }, {
        key: "createTourItinerary",
        value: function createTourItinerary() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var newItems;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (Object.keys(this.selectedMeals).length != this.totalMeal) {
                      this.showSelectMealWarning = true;
                    } else {
                      this.showSelectMealWarning = false;
                      this.tourItenaryGenerated = true;
                      this.itenarnaryDraftGenerated = false;
                      this.tourItenary = this.sortByDistance(this.selectedDraftItems[0]);
                      newItems = this.calculateDistanceBetweenVenues(this.tourItenary);
                      this.router.navigate(['itinerary'], {
                        state: {
                          data: newItems,
                          meals: Object.values(this.selectedMeals)
                        }
                      });
                    }

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "calculateDistanceBetweenVenues",
        value: function calculateDistanceBetweenVenues(items) {
          return items.map(function (item, index) {
            if (index != 0) {
              // round off the distance to the nearest decimal place
              item.newDistance = Math.round(Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["distance"])(Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["point"])([items[index - 1].venue.location.lng, items[index - 1].venue.location.lat]), Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["point"])([item.venue.location.lng, item.venue.location.lat]), {
                units: 'kilometers'
              }) * 10) / 10;
            }

            return item;
          });
        }
      }, {
        key: "updateSpotSelectionCount",
        value: function updateSpotSelectionCount(spotsCount) {
          this.noOfTourItemsToSelect = spotsCount - this.totalMeal;
          this.disbaleAccordion = false;
        }
      }]);

      return CreateTourComponent;
    }();

    CreateTourComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]
      }, {
        type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CreateTourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-tour',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-tour.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/create-tour/create-tour.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-tour.component.scss */
      "./src/app/secured/create-tour/create-tour.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"], _services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], CreateTourComponent);
    /***/
  },

  /***/
  "./src/app/secured/logout/logout.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/secured/logout/logout.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecuredLogoutLogoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZWQvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/secured/logout/logout.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/secured/logout/logout.component.ts ***!
    \****************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppSecuredLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(router) {
        _classCallCheck(this, LogoutComponent);

        this.router = router;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logout();
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('user');
          this.router.navigate(['login']);
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.scss */
      "./src/app/secured/logout/logout.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/secured/multi-step-form/multi-step-form.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/secured/multi-step-form/multi-step-form.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecuredMultiStepFormMultiStepFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".field-label {\n  font-size: 0.875em;\n}\n\n.validation-error {\n  color: #cc3c3c;\n  font-size: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvc2FuZGJveC9tc2NfcHJvamVjdC9jb2RlL2JyYW5jaGVzL2FwcC9jbGllbnQvY2l0eVRvdXJQbGFubmVyL3NyYy9hcHAvc2VjdXJlZC9tdWx0aS1zdGVwLWZvcm0vbXVsdGktc3RlcC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN1cmVkL211bHRpLXN0ZXAtZm9ybS9tdWx0aS1zdGVwLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWN1cmVkL211bHRpLXN0ZXAtZm9ybS9tdWx0aS1zdGVwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcbn1cblxuLnZhbGlkYXRpb24tZXJyb3Ige1xuICAgIGNvbG9yOiAjY2MzYzNjO1xuICAgIGZvbnQtc2l6ZTogMC43NTBlbTtcbn1cbiAgIiwiLmZpZWxkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xufVxuXG4udmFsaWRhdGlvbi1lcnJvciB7XG4gIGNvbG9yOiAjY2MzYzNjO1xuICBmb250LXNpemU6IDAuNzVlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/secured/multi-step-form/multi-step-form.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/secured/multi-step-form/multi-step-form.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MultiStepFormComponent */

  /***/
  function srcAppSecuredMultiStepFormMultiStepFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiStepFormComponent", function () {
      return MultiStepFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MultiStepFormComponent =
    /*#__PURE__*/
    function () {
      function MultiStepFormComponent(_formBuilder) {
        _classCallCheck(this, MultiStepFormComponent);

        this._formBuilder = _formBuilder;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      } // ngOnInit() { }


      _createClass(MultiStepFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          // TODO: add interfaces and enums wherever appropriate
          this.activeStepIndex = 0;
          this.masterForm = [];
          this.currentFormContent = [];
          this.formFields = [];
          this.stepItems = this.formContent; // NOTE: this can be cofigured to create a single form when needed

          this.stepItems.forEach(function (data, i) {
            console.log(data, 'data'); // holds name, validators, placeholder of all steps

            _this4.currentFormContent.push(_this4.stepItems[i]['data']); // holds string values for each field of all steps


            _this4.formFields.push(Object.keys(_this4.currentFormContent[i]));

            console.log(_this4.formFields, 'formFields'); // add labels to config and use in html
            // holds all form groups

            _this4.masterForm.push(_this4.buildForm(_this4.currentFormContent[i]));
          });
        } // build separate FormGroups for each form

      }, {
        key: "buildForm",
        value: function buildForm(currentFormContent) {
          var _this5 = this;

          var formDetails = Object.keys(currentFormContent).reduce(function (obj, key) {
            obj[key] = ['', _this5.getValidators(currentFormContent[key])];
            return obj;
          }, {});
          return this._formBuilder.group(formDetails);
        } // get validator(s) for each field, if any

      }, {
        key: "getValidators",
        value: function getValidators(formField) {
          var fieldValidators = Object.keys(formField.validations).map(function (validator) {
            if (validator === 'required') {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"][validator];
            } else {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"][validator](formField.validations[validator]);
            }
          });
          return fieldValidators;
        } // get validation error messages per error, per field

      }, {
        key: "getValidationMessage",
        value: function getValidationMessage(formIndex, formFieldName) {
          var formErrors = this.masterForm[formIndex].get(formFieldName).errors;
          var errorMessages = this.currentFormContent[formIndex][formFieldName].errors;
          var validationError = errorMessages[Object.keys(formErrors)[0]];
          return validationError;
        }
      }, {
        key: "goToStep",
        value: function goToStep(step) {
          this.activeStepIndex = step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;
          this.setFormPreview();
        }
      }, {
        key: "setFormPreview",
        value: function setFormPreview() {
          this.formData = this.masterForm.reduce(function (masterForm, currentForm) {
            return Object.assign({}, masterForm, currentForm.value);
          }, {});
          this.masterFormFields = Object.keys(this.formData);
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          // emit aggregate form data to parent component, where we POST
          this.formSubmit.emit(this.formData);
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index) {
          return index;
        }
      }]);

      return MultiStepFormComponent;
    }();

    MultiStepFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MultiStepFormComponent.prototype, "formContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiStepFormComponent.prototype, "formSubmit", void 0);
    MultiStepFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-multi-step-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./multi-step-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/multi-step-form/multi-step-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multi-step-form.component.scss */
      "./src/app/secured/multi-step-form/multi-step-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], MultiStepFormComponent);
    /***/
  },

  /***/
  "./src/app/secured/profile/profile.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/secured/profile/profile.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecuredProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  margin-top: 20px;\n}\n\n.align-center, .center {\n  text-align: center !important;\n}\n\n.profile-user-info {\n  display: table;\n  width: 98%;\n  width: calc(100% - 24px);\n  margin: 0 auto;\n}\n\n.profile-info-row {\n  display: table-row;\n}\n\n.profile-info-name,\n.profile-info-value {\n  display: table-cell;\n  border-top: 1px dotted #D5E4F1;\n}\n\n.profile-info-name {\n  text-align: right;\n  padding: 6px 10px 6px 4px;\n  font-weight: 400;\n  color: #667E99;\n  background-color: transparent;\n  width: 110px;\n  vertical-align: middle;\n}\n\n.profile-info-value {\n  padding: 6px 4px 6px 6px;\n}\n\n.profile-info-value > span + span:before {\n  display: inline;\n  content: \",\";\n  margin-left: 1px;\n  margin-right: 3px;\n  color: #666;\n  border-bottom: 1px solid #FFF;\n}\n\n.profile-info-value > span + span.editable-container:before {\n  display: none;\n}\n\n.profile-info-row:first-child .profile-info-name,\n.profile-info-row:first-child .profile-info-value {\n  border-top: none;\n}\n\n.profile-user-info-striped {\n  border: 1px solid #DCEBF7;\n}\n\n.profile-user-info-striped .profile-info-name {\n  color: #336199;\n  background-color: #EDF3F4;\n  border-top: 1px solid #F7FBFF;\n}\n\n.profile-user-info-striped .profile-info-value {\n  border-top: 1px dotted #DCEBF7;\n  padding-left: 12px;\n}\n\n.profile-picture {\n  border: 1px solid #CCC;\n  background-color: #FFF;\n  padding: 4px;\n  display: inline-block;\n  max-width: 100%;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);\n}\n\n.dd-empty,\n.dd-handle,\n.dd-placeholder,\n.dd2-content {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n.profile-activity {\n  padding: 10px 4px;\n  border-bottom: 1px dotted #D0D8E0;\n  position: relative;\n  border-left: 1px dotted #FFF;\n  border-right: 1px dotted #FFF;\n}\n\n.profile-activity:first-child {\n  border-top: 1px dotted transparent;\n}\n\n.profile-activity:first-child:hover {\n  border-top-color: #D0D8E0;\n}\n\n.profile-activity:hover {\n  background-color: #F4F9FD;\n  border-left: 1px dotted #D0D8E0;\n  border-right: 1px dotted #D0D8E0;\n}\n\n.profile-activity img {\n  border: 2px solid #C9D6E5;\n  border-radius: 100%;\n  max-width: 40px;\n  margin-right: 10px;\n  margin-left: 0;\n  box-shadow: none;\n}\n\n.profile-activity .thumbicon {\n  background-color: #74ABD7;\n  display: inline-block;\n  border-radius: 100%;\n  width: 38px;\n  height: 38px;\n  color: #FFF;\n  font-size: 18px;\n  text-align: center;\n  line-height: 38px;\n  margin-right: 10px;\n  margin-left: 0;\n  text-shadow: none !important;\n}\n\n.profile-activity .time {\n  display: block;\n  margin-top: 4px;\n  color: #777;\n}\n\n.profile-activity a.user {\n  font-weight: 700;\n  color: #9585BF;\n}\n\n.profile-activity .tools {\n  position: absolute;\n  right: 12px;\n  bottom: 8px;\n  display: none;\n}\n\n.profile-activity:hover .tools {\n  display: block;\n}\n\n.user-profile .ace-thumbnails li {\n  border: 1px solid #CCC;\n  padding: 3px;\n  margin: 6px;\n}\n\n.user-profile .ace-thumbnails li .tools {\n  left: 3px;\n  right: 3px;\n}\n\n.user-profile .ace-thumbnails li:hover .tools {\n  bottom: 3px;\n}\n\n.user-title-label:hover {\n  text-decoration: none;\n}\n\n.user-title-label + .dropdown-menu {\n  margin-left: -12px;\n}\n\n.profile-contact-links {\n  padding: 4px 2px 5px;\n  border: 1px solid #E0E2E5;\n  background-color: #F8FAFC;\n}\n\n.btn-link:hover .ace-icon {\n  text-decoration: none !important;\n}\n\n.profile-social-links > a:hover > .ace-icon,\n.profile-users .memberdiv .name a:hover .ace-icon,\n.profile-users .memberdiv .tools > a:hover {\n  text-decoration: none;\n}\n\n.profile-social-links > a {\n  text-decoration: none;\n  margin: 0 1px;\n}\n\n.profile-skills .progress {\n  height: 26px;\n  margin-bottom: 2px;\n  background-color: transparent;\n}\n\n.profile-skills .progress .progress-bar {\n  line-height: 26px;\n  font-size: 13px;\n  font-weight: 700;\n  font-family: \"Open Sans\";\n  padding: 0 8px;\n}\n\n.profile-users .user {\n  display: block;\n  position: static;\n  text-align: center;\n  width: auto;\n}\n\n.profile-users .user img {\n  padding: 2px;\n  border-radius: 100%;\n  border: 1px solid #AAA;\n  max-width: none;\n  width: 64px;\n  -webkit-transition: all 0.1s;\n  transition: all 0.1s;\n}\n\n.profile-users .user img:hover {\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.33);\n}\n\n.profile-users .memberdiv {\n  background-color: #FFF;\n  width: 100px;\n  box-sizing: border-box;\n  border: none;\n  text-align: center;\n  margin: 0 8px 24px;\n}\n\n.profile-users .memberdiv .body {\n  display: inline-block;\n  margin: 8px 0 0;\n}\n\n.profile-users .memberdiv .popover {\n  visibility: hidden;\n  min-width: 0;\n  max-height: 0;\n  max-width: 0;\n  margin-left: 0;\n  margin-right: 0;\n  top: -5%;\n  left: auto;\n  right: auto;\n  opacity: 0;\n  display: none;\n  position: absolute;\n  -webkit-transition: opacity 0.2s linear 0s, visibility 0s linear 0.2s, max-height 0s linear 0.2s, max-width 0s linear 0.2s, min-width 0s linear 0.2s;\n  transition: opacity 0.2s linear 0s, visibility 0s linear 0.2s, max-height 0s linear 0.2s, max-width 0s linear 0.2s, min-width 0s linear 0.2s;\n}\n\n.profile-users .memberdiv .popover.right {\n  left: 100%;\n  right: auto;\n  display: block;\n}\n\n.profile-users .memberdiv .popover.left {\n  left: auto;\n  right: 100%;\n  display: block;\n}\n\n.profile-users .memberdiv > :first-child:hover .popover {\n  visibility: visible;\n  opacity: 1;\n  z-index: 1060;\n  max-height: 250px;\n  max-width: 250px;\n  min-width: 150px;\n  -webkit-transition-delay: 0s;\n  transition-delay: 0s;\n}\n\n.profile-users .memberdiv .tools {\n  position: static;\n  display: block;\n  width: 100%;\n  margin-top: 2px;\n}\n\n.profile-users .memberdiv .tools > a {\n  margin: 0 2px;\n}\n\n.user-status {\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  background-color: #FFF;\n  border: 3px solid #AAA;\n  border-radius: 100%;\n  vertical-align: middle;\n  margin-right: 1px;\n}\n\n.user-status.status-online {\n  border-color: #8AC16C;\n}\n\n.user-status.status-busy {\n  border-color: #E07F69;\n}\n\n.user-status.status-idle {\n  border-color: #FFB752;\n}\n\n.tab-content.profile-edit-tab-content {\n  border: 1px solid #DDD;\n  padding: 8px 32px 32px;\n  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.2);\n  background-color: #FFF;\n}\n\n@media only screen and (max-width: 480px) {\n  .profile-info-name {\n    width: 80px;\n  }\n\n  .profile-user-info-striped .profile-info-name {\n    float: none;\n    width: auto;\n    text-align: left;\n    padding: 6px 4px 6px 10px;\n    display: block;\n  }\n\n  .profile-user-info-striped .profile-info-value {\n    margin-left: 10px;\n    display: block;\n  }\n\n  .user-profile .memberdiv {\n    width: 50%;\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n.itemdiv {\n  padding-right: 3px;\n  min-height: 66px;\n}\n\n.itemdiv > .user {\n  display: inline-block;\n  width: 42px;\n  position: absolute;\n  left: 0;\n}\n\n.itemdiv > .user > .img,\n.itemdiv > .user > img {\n  border-radius: 100%;\n  border: 2px solid #5293C4;\n  max-width: 40px;\n  position: relative;\n}\n\n.itemdiv > .user > .img {\n  padding: 2px;\n}\n\n.itemdiv > .body {\n  width: auto;\n  margin-left: 50px;\n  margin-right: 12px;\n  position: relative;\n}\n\n.itemdiv > .body > .time {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #666;\n  position: absolute;\n  right: 9px;\n  top: 0;\n}\n\n.itemdiv > .body > .time .ace-icon {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.itemdiv > .body > .name {\n  display: block;\n  color: #999;\n}\n\n.itemdiv > .body > .name > b {\n  color: #777;\n}\n\n.itemdiv > .body > .text {\n  display: block;\n  position: relative;\n  margin-top: 2px;\n  padding-bottom: 19px;\n  padding-left: 7px;\n  font-size: 13px;\n}\n\n.itemdiv.dialogdiv:before,\n.itemdiv.dialogdiv > .body:before,\n.itemdiv > .body > .text:after {\n  content: \"\";\n  position: absolute;\n}\n\n.itemdiv > .body > .text:after {\n  display: block;\n  height: 1px;\n  font-size: 0;\n  overflow: hidden;\n  left: 16px;\n  right: -12px;\n  margin-top: 9px;\n  border-top: 1px solid #E4ECF3;\n}\n\n.itemdiv > .body > .text > .ace-icon:first-child {\n  color: #DCE3ED;\n  margin-right: 4px;\n}\n\n.itemdiv:last-child > .body > .text {\n  border-bottom-width: 0;\n}\n\n.itemdiv:last-child > .body > .text:after {\n  display: none;\n}\n\n.itemdiv.dialogdiv {\n  padding-bottom: 14px;\n}\n\n.itemdiv.dialogdiv:before {\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 19px;\n  width: 3px;\n  max-width: 3px;\n  background-color: #E1E6ED;\n  border: 1px solid #D7DBDD;\n  border-width: 0 1px;\n}\n\n.itemdiv.dialogdiv:last-child {\n  padding-bottom: 0;\n}\n\n.itemdiv.dialogdiv:last-child:before {\n  display: none;\n}\n\n.itemdiv.dialogdiv > .user > img {\n  border-color: #C9D6E5;\n}\n\n.itemdiv.dialogdiv > .body {\n  border: 1px solid #DDE4ED;\n  padding: 5px 8px 8px;\n  border-left-width: 2px;\n  margin-right: 1px;\n}\n\n.itemdiv.dialogdiv > .body:before {\n  display: block;\n  left: -7px;\n  top: 11px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #DDE4ED;\n  border-width: 2px 0 0 2px;\n  background-color: #FFF;\n  box-sizing: content-box;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n.itemdiv.dialogdiv > .body > .time {\n  position: static;\n  float: right;\n}\n\n.itemdiv.dialogdiv > .body > .text {\n  padding-left: 0;\n  padding-bottom: 0;\n}\n\n.itemdiv.dialogdiv > .body > .text:after {\n  display: none;\n}\n\n.itemdiv.dialogdiv .tooltip-inner {\n  word-break: break-all;\n}\n\n.itemdiv.memberdiv {\n  width: 175px;\n  padding: 2px;\n  margin: 3px 0;\n  float: left;\n  border-bottom: 1px solid #E8E8E8;\n}\n\n@media (min-width: 992px) {\n  .itemdiv.memberdiv {\n    max-width: 50%;\n  }\n}\n\n@media (max-width: 991px) {\n  .itemdiv.memberdiv {\n    min-width: 33.333%;\n  }\n}\n\n.itemdiv.memberdiv > .user > img {\n  border-color: #DCE3ED;\n}\n\n.itemdiv.memberdiv > .body > .time {\n  position: static;\n}\n\n.itemdiv.memberdiv > .body > .name {\n  line-height: 18px;\n  height: 18px;\n  margin-bottom: 0;\n}\n\n.itemdiv.memberdiv > .body > .name > a {\n  display: inline-block;\n  max-width: 100px;\n  max-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n}\n\n.itemdiv .tools {\n  position: absolute;\n  right: 5px;\n  bottom: 10px;\n  display: none;\n}\n\n.item-list > li > .checkbox,\n.item-list > li > label.inline,\n.itemdiv:hover .tools {\n  display: inline-block;\n}\n\n.itemdiv .tools .btn {\n  border-radius: 36px;\n  margin: 1px 0;\n}\n\n.itemdiv .body .tools {\n  bottom: 4px;\n}\n\n.itemdiv.commentdiv .tools {\n  right: 9px;\n}\n\n.item-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.item-list > li {\n  padding: 9px;\n  background-color: #FFF;\n  margin-top: -1px;\n  position: relative;\n}\n\n.item-list > li.selected {\n  color: #8090A0;\n  background-color: #F4F9FC;\n}\n\n.item-list > li.selected .lbl,\n.item-list > li.selected label {\n  text-decoration: line-through;\n  color: #8090A0;\n}\n\n.item-list > li label {\n  font-size: 13px;\n}\n\n.item-list > li .percentage {\n  font-size: 11px;\n  font-weight: 700;\n  color: #777;\n}\n\n.ace-thumbnails > li,\n.ace-thumbnails > li > :first-child {\n  display: block;\n  position: relative;\n}\n\n.ace-thumbnails {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.ace-thumbnails > li {\n  float: left;\n  overflow: hidden;\n  margin: 2px;\n  border: 2px solid #333;\n}\n\n.ace-thumbnails > li > :first-child:focus {\n  outline: 0;\n}\n\n.ace-thumbnails > li .tags {\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  overflow: visible;\n  direction: rtl;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  background-color: transparent;\n  border-width: 0;\n  vertical-align: inherit;\n}\n\n.ace-thumbnails > li .tags > .label-holder {\n  opacity: 0.92;\n  filter: alpha(opacity=92);\n  display: table;\n  margin: 1px 0 0;\n  direction: ltr;\n  text-align: left;\n}\n\n.ace-thumbnails > li > .tools,\n.ace-thumbnails > li > :first-child > .text {\n  position: absolute;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55);\n}\n\n.ace-thumbnails > li .tags > .label-holder:hover {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.ace-thumbnails > li > .tools {\n  top: 0;\n  bottom: 0;\n  left: -30px;\n  width: 24px;\n  vertical-align: middle;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.ace-thumbnails > li > .tools.tools-right {\n  left: auto;\n  right: -30px;\n}\n\n.ace-thumbnails > li > .tools.tools-bottom {\n  width: auto;\n  height: 28px;\n  left: 0;\n  right: 0;\n  top: auto;\n  bottom: -30px;\n}\n\n.ace-thumbnails > li > .tools.tools-top {\n  width: auto;\n  height: 28px;\n  left: 0;\n  right: 0;\n  top: -30px;\n  bottom: auto;\n}\n\n.ace-thumbnails > li:hover > .tools {\n  left: 0;\n  right: 0;\n}\n\n.ace-thumbnails > li:hover > .tools.tools-bottom {\n  top: auto;\n  bottom: 0;\n}\n\n.ace-thumbnails > li:hover > .tools.tools-top {\n  bottom: auto;\n  top: 0;\n}\n\n.ace-thumbnails > li:hover > .tools.tools-right {\n  left: auto;\n  right: 0;\n}\n\n.ace-thumbnails > li > .in.tools {\n  left: 0;\n  right: 0;\n}\n\n.ace-thumbnails > li > .in.tools.tools-bottom {\n  top: auto;\n  bottom: 0;\n}\n\n.ace-thumbnails > li > .in.tools.tools-top {\n  bottom: auto;\n  top: 0;\n}\n\n.ace-thumbnails > li > .in.tools.tools-right {\n  left: auto;\n  right: 0;\n}\n\n.ace-thumbnails > li > .tools > a,\n.ace-thumbnails > li > :first-child .inner a {\n  display: inline-block;\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 0 4px;\n}\n\n.ace-thumbnails > li > .tools > a:hover,\n.ace-thumbnails > li > :first-child .inner a:hover {\n  text-decoration: none;\n  color: #C9E2EA;\n}\n\n.ace-thumbnails > li .tools.tools-bottom > a,\n.ace-thumbnails > li .tools.tools-top > a {\n  display: inline-block;\n}\n\n.ace-thumbnails > li > :first-child > .text {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  color: #FFF;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.dialogs,\n.itemdiv {\n  position: relative;\n}\n\n.ace-thumbnails > li > :first-child > .text:before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: 0;\n}\n\n.ace-thumbnails > li > :first-child > .text > .inner {\n  padding: 4px 0;\n  margin: 0;\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 90%;\n}\n\n.ace-thumbnails > li:hover > :first-child > .text {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n@media only screen and (max-width: 480px) {\n  .ace-thumbnails {\n    text-align: center;\n  }\n\n  .ace-thumbnails > li {\n    float: none;\n    display: inline-block;\n  }\n}\n\n.tab-content {\n  border: 1px solid #C5D0DC;\n  padding: 16px 12px;\n  position: relative;\n}\n\n.tab-content.no-padding {\n  padding: 0;\n}\n\n.tab-content.no-border {\n  border: none;\n  padding: 12px;\n}\n\n.tab-content.padding-32 {\n  padding: 32px 24px;\n}\n\n.tab-content.no-border.padding-32 {\n  padding: 32px;\n}\n\n.tab-content.padding-30 {\n  padding: 30px 23px;\n}\n\n.tab-content.no-border.padding-30 {\n  padding: 30px;\n}\n\n.tab-content.padding-28 {\n  padding: 28px 21px;\n}\n\n.tab-content.no-border.padding-28 {\n  padding: 28px;\n}\n\n.tab-content.padding-26 {\n  padding: 26px 20px;\n}\n\n.tab-content.no-border.padding-26 {\n  padding: 26px;\n}\n\n.tab-content.padding-24 {\n  padding: 24px 18px;\n}\n\n.tab-content.no-border.padding-24 {\n  padding: 24px;\n}\n\n.tab-content.padding-22 {\n  padding: 22px 17px;\n}\n\n.tab-content.no-border.padding-22 {\n  padding: 22px;\n}\n\n.tab-content.padding-20 {\n  padding: 20px 15px;\n}\n\n.tab-content.no-border.padding-20 {\n  padding: 20px;\n}\n\n.tab-content.padding-18 {\n  padding: 18px 14px;\n}\n\n.tab-content.no-border.padding-18 {\n  padding: 18px;\n}\n\n.tab-content.padding-16 {\n  padding: 16px 12px;\n}\n\n.tab-content.no-border.padding-16 {\n  padding: 16px;\n}\n\n.tab-content.padding-14 {\n  padding: 14px 11px;\n}\n\n.tab-content.no-border.padding-14 {\n  padding: 14px;\n}\n\n.tab-content.padding-12 {\n  padding: 12px 9px;\n}\n\n.tab-content.no-border.padding-12 {\n  padding: 12px;\n}\n\n.tab-content.padding-10 {\n  padding: 10px 8px;\n}\n\n.tab-content.no-border.padding-10 {\n  padding: 10px;\n}\n\n.tab-content.padding-8 {\n  padding: 8px 6px;\n}\n\n.tab-content.no-border.padding-8 {\n  padding: 8px;\n}\n\n.tab-content.padding-6 {\n  padding: 6px 5px;\n}\n\n.tab-content.no-border.padding-6 {\n  padding: 6px;\n}\n\n.tab-content.padding-4 {\n  padding: 4px 3px;\n}\n\n.tab-content.no-border.padding-4 {\n  padding: 4px;\n}\n\n.tab-content.no-border.padding-2,\n.tab-content.padding-2 {\n  padding: 2px;\n}\n\n.tab-content.no-border.padding-0,\n.tab-content.padding-0 {\n  padding: 0;\n}\n\n.nav.nav-tabs.padding-28 {\n  padding-left: 28px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-28,\n.tabs-right > .nav.nav-tabs.padding-28 {\n  padding-left: 0;\n  padding-top: 28px;\n}\n\n.nav.nav-tabs.padding-26 {\n  padding-left: 26px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-26,\n.tabs-right > .nav.nav-tabs.padding-26 {\n  padding-left: 0;\n  padding-top: 26px;\n}\n\n.nav.nav-tabs.padding-24 {\n  padding-left: 24px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-24,\n.tabs-right > .nav.nav-tabs.padding-24 {\n  padding-left: 0;\n  padding-top: 24px;\n}\n\n.nav.nav-tabs.padding-22 {\n  padding-left: 22px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-22,\n.tabs-right > .nav.nav-tabs.padding-22 {\n  padding-left: 0;\n  padding-top: 22px;\n}\n\n.nav.nav-tabs.padding-20 {\n  padding-left: 20px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-20,\n.tabs-right > .nav.nav-tabs.padding-20 {\n  padding-left: 0;\n  padding-top: 20px;\n}\n\n.nav.nav-tabs.padding-18 {\n  padding-left: 18px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-18,\n.tabs-right > .nav.nav-tabs.padding-18 {\n  padding-left: 0;\n  padding-top: 18px;\n}\n\n.nav.nav-tabs.padding-16 {\n  padding-left: 16px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-16,\n.tabs-right > .nav.nav-tabs.padding-16 {\n  padding-left: 0;\n  padding-top: 16px;\n}\n\n.nav.nav-tabs.padding-14 {\n  padding-left: 14px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-14,\n.tabs-right > .nav.nav-tabs.padding-14 {\n  padding-left: 0;\n  padding-top: 14px;\n}\n\n.nav.nav-tabs.padding-12 {\n  padding-left: 12px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-12,\n.tabs-right > .nav.nav-tabs.padding-12 {\n  padding-left: 0;\n  padding-top: 12px;\n}\n\n.nav.nav-tabs.padding-10 {\n  padding-left: 10px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-10,\n.tabs-right > .nav.nav-tabs.padding-10 {\n  padding-left: 0;\n  padding-top: 10px;\n}\n\n.nav.nav-tabs.padding-8 {\n  padding-left: 8px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-8,\n.tabs-right > .nav.nav-tabs.padding-8 {\n  padding-left: 0;\n  padding-top: 8px;\n}\n\n.nav.nav-tabs.padding-6 {\n  padding-left: 6px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-6,\n.tabs-right > .nav.nav-tabs.padding-6 {\n  padding-left: 0;\n  padding-top: 6px;\n}\n\n.nav.nav-tabs.padding-4 {\n  padding-left: 4px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-4,\n.tabs-right > .nav.nav-tabs.padding-4 {\n  padding-left: 0;\n  padding-top: 4px;\n}\n\n.nav.nav-tabs.padding-2 {\n  padding-left: 2px;\n}\n\n.tabs-left > .nav.nav-tabs.padding-2,\n.tabs-right > .nav.nav-tabs.padding-2 {\n  padding-left: 0;\n  padding-top: 2px;\n}\n\n.nav-tabs {\n  border-color: #C5D0DC;\n  margin-bottom: 0 !important;\n  position: relative;\n  top: 1px;\n}\n\n.nav-tabs > li > a {\n  padding: 7px 12px 8px;\n}\n\n.nav-tabs > li > a,\n.nav-tabs > li > a:focus {\n  border-radius: 0 !important;\n  border-color: #C5D0DC;\n  background-color: #F9F9F9;\n  color: #999;\n  margin-right: -1px;\n  line-height: 18px;\n  position: relative;\n}\n\n.nav-tabs > li > a:hover {\n  background-color: #FFF;\n  color: #4C8FBD;\n  border-color: #C5D0DC;\n}\n\n.nav-tabs > li > a:active,\n.nav-tabs > li > a:focus {\n  outline: 0 !important;\n}\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #576373;\n  border-color: #C5D0DC #C5D0DC transparent;\n  border-top: 2px solid #4C8FBD;\n  background-color: #FFF;\n  z-index: 1;\n  line-height: 18px;\n  margin-top: -1px;\n  box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.15);\n}\n\n.tabs-below > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  margin-top: -1px;\n  border-color: #C5D0DC;\n  border-bottom-width: 0;\n}\n\n.tabs-below > .nav-tabs > li > a,\n.tabs-below > .nav-tabs > li > a:focus,\n.tabs-below > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC;\n}\n\n.tabs-below > .nav-tabs > li.active > a,\n.tabs-below > .nav-tabs > li.active > a:focus,\n.tabs-below > .nav-tabs > li.active > a:hover {\n  border-color: transparent #C5D0DC #C5D0DC;\n  border-top-width: 1px;\n  border-bottom: 2px solid #4C8FBD;\n  margin-top: 0;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);\n}\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a {\n  min-width: 60px;\n}\n\n.tabs-left > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  border-color: #C5D0DC;\n  float: left;\n}\n\n.tabs-left > .nav-tabs > li {\n  float: none !important;\n}\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-left > .nav-tabs > li > a:focus,\n.tabs-left > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC;\n  margin: 0 -1px 0 0;\n}\n\n.tabs-left > .nav-tabs > li.active > a,\n.tabs-left > .nav-tabs > li.active > a:focus,\n.tabs-left > .nav-tabs > li.active > a:hover {\n  border-color: #C5D0DC transparent #C5D0DC #C5D0DC;\n  border-top-width: 1px;\n  border-left: 2px solid #4C8FBD;\n  margin: 0 -1px;\n  box-shadow: -2px 0 3px 0 rgba(0, 0, 0, 0.15) !important;\n}\n\n.tabs-right > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  border-color: #C5D0DC;\n  float: right;\n}\n\n.tabs-right > .nav-tabs > li {\n  float: none !important;\n}\n\n.tabs-right > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a:focus,\n.tabs-right > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC;\n  margin: 0 -1px;\n}\n\n.tabs-right > .nav-tabs > li.active > a,\n.tabs-right > .nav-tabs > li.active > a:focus,\n.tabs-right > .nav-tabs > li.active > a:hover {\n  border-color: #C5D0DC #C5D0DC #C5D0DC transparent;\n  border-top-width: 1px;\n  border-right: 2px solid #4C8FBD;\n  margin: 0 -2px 0 -1px;\n  box-shadow: 2px 0 3px 0 rgba(0, 0, 0, 0.15);\n}\n\n.nav-tabs > li > a .badge {\n  padding: 1px 5px;\n  line-height: 15px;\n  opacity: 0.75;\n  vertical-align: initial;\n}\n\n.nav-tabs > li > a .ace-icon {\n  opacity: 0.75;\n}\n\n.nav-tabs > li.active > a .ace-icon,\n.nav-tabs > li.active > a .badge {\n  opacity: 1;\n}\n\n.nav-tabs li .ace-icon {\n  width: 1.25em;\n  display: inline-block;\n  text-align: center;\n}\n\n.nav-tabs > li.open .dropdown-toggle {\n  background-color: #4F99C6;\n  border-color: #4F99C6;\n  color: #FFF;\n}\n\n.nav-tabs > li.open .dropdown-toggle > .ace-icon {\n  color: #FFF !important;\n}\n\n.tabs-left .tab-content,\n.tabs-right .tab-content {\n  overflow: auto;\n}\n\n.dark {\n  color: #333 !important;\n}\n\n.white {\n  color: #FFF !important;\n}\n\n.red {\n  color: #DD5A43 !important;\n}\n\n.red2 {\n  color: #E08374 !important;\n}\n\n.light-red {\n  color: #F77 !important;\n}\n\n.blue {\n  color: #478FCA !important;\n}\n\n.light-blue {\n  color: #93CBF9 !important;\n}\n\n.green {\n  color: #69AA46 !important;\n}\n\n.light-green {\n  color: #B0D877 !important;\n}\n\n.orange {\n  color: #FF892A !important;\n}\n\n.orange2 {\n  color: #FEB902 !important;\n}\n\n.light-orange {\n  color: #FCAC6F !important;\n}\n\n.purple {\n  color: #A069C3 !important;\n}\n\n.pink {\n  color: #C6699F !important;\n}\n\n.pink2 {\n  color: #D6487E !important;\n}\n\n.brown {\n  color: brown !important;\n}\n\n.grey {\n  color: #777 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvc2FuZGJveC9tc2NfcHJvamVjdC9jb2RlL2JyYW5jaGVzL2FwcC9jbGllbnQvY2l0eVRvdXJQbGFubmVyL3NyYy9hcHAvc2VjdXJlZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlY3VyZWQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQUssZ0JBQUE7QUNDTDs7QURDQTtFQUNJLDZCQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTs7RUFFSSxtQkFBQTtFQUNBLDhCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURDQTtFQUNJLHdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURDQTs7RUFFSSxnQkFBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FDRUo7O0FEQ0E7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUdBLHNCQUFBO0VBQ0EsMkNBQUE7QUNFSjs7QURDQTs7OztFQUlJLDhCQUFBO0VBQ0EsMkJBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDQTtFQUNJLGtDQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENBO0VBQ0ksZ0NBQUE7QUNFSjs7QURDQTs7O0VBR0kscUJBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUVBLG9CQUFBO0FDRUo7O0FEQ0E7RUFFSSwyQ0FBQTtBQ0VKOztBRENBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBR0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9KQUFBO0VBRUEsNElBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFHQSxvQkFBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBRUEsMENBQUE7RUFDQSxzQkFBQTtBQ0VKOztBRENBO0VBQ0k7SUFDSSxXQUFBO0VDRU47O0VEQUU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VDR047O0VEREU7SUFDSSxpQkFBQTtJQUNBLGNBQUE7RUNJTjs7RURGRTtJQUNJLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0tOO0FBQ0Y7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNFSjs7QURDQTs7RUFFSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBOzs7RUFHSSxXQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksc0JBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURDQTtFQUNJLG9CQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUdBLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0VKOztBRENBO0VBQ0k7SUFDSSxjQUFBO0VDRU47QUFDRjs7QURDQTtFQUNJO0lBQ0ksa0JBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBOzs7RUFHSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0FDQUo7O0FER0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTs7RUFFSSw2QkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURJQTs7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBOztFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0FDREo7O0FESUE7RUFDSSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUVBLHlCQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLE9BQUE7RUFDQSxRQUFBO0FDREo7O0FESUE7RUFDSSxTQUFBO0VBQ0EsU0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLE1BQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSxRQUFBO0FDREo7O0FESUE7RUFDSSxPQUFBO0VBQ0EsUUFBQTtBQ0RKOztBRElBO0VBQ0ksU0FBQTtFQUNBLFNBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxNQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtBQ0RKOztBRElBOztFQUVJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTs7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTs7RUFFSSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUVBLHlCQUFBO0FDREo7O0FESUE7O0VBRUksa0JBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSwwQkFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxrQkFBQTtFQ0ROOztFREdFO0lBQ0ksV0FBQTtJQUNBLHFCQUFBO0VDQU47QUFDRjs7QURJQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURLQTs7RUFFSSxZQUFBO0FDRko7O0FES0E7O0VBRUksVUFBQTtBQ0ZKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURNQTs7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FETUE7O0VBRUksZUFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtBQ0hKOztBRE1BOztFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURNQTs7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FETUE7O0VBRUksZUFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtBQ0hKOztBRE1BOztFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURNQTs7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FETUE7O0VBRUksZUFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtBQ0hKOztBRE1BOztFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURNQTs7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0FDSEo7O0FETUE7O0VBRUksZUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSxpQkFBQTtBQ0hKOztBRE1BOztFQUVJLGVBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7QUNISjs7QURNQTs7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0FDSEo7O0FETUE7O0VBRUksZUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSEo7O0FETUE7RUFDSSxxQkFBQTtBQ0hKOztBRE1BOztFQUVJLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDSEo7O0FETUE7O0VBRUkscUJBQUE7QUNISjs7QURNQTs7O0VBR0ksY0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUNISjs7QURNQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0hKOztBRE1BOzs7RUFHSSxxQkFBQTtBQ0hKOztBRE1BOzs7RUFHSSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUNISjs7QURNQTs7RUFFSSxlQUFBO0FDSEo7O0FETUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJLHNCQUFBO0FDSEo7O0FETUE7OztFQUdJLHFCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTs7O0VBR0ksaURBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUVBLHVEQUFBO0FDSEo7O0FETUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUNJLHNCQUFBO0FDSEo7O0FETUE7OztFQUdJLHFCQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BOzs7RUFHSSxpREFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUVBLDJDQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0FDSEo7O0FETUE7O0VBRUksVUFBQTtBQ0hKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDSSxzQkFBQTtBQ0hKOztBRE1BOztFQUVJLGNBQUE7QUNISjs7QURNQTtFQUNJLHNCQUFBO0FDSEo7O0FETUE7RUFDSSxzQkFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0FDSEo7O0FETUE7RUFDSSxzQkFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0FDSEo7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0FDSEo7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0FDSEo7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURNQTtFQUNJLHVCQUFBO0FDSEo7O0FETUE7RUFDSSxzQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvc2VjdXJlZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJvZHl7bWFyZ2luLXRvcDoyMHB4O31cblxuLmFsaWduLWNlbnRlciwgLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtdXNlci1pbmZvIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogOTglO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcbiAgICBtYXJnaW46IDAgYXV0b1xufVxuXG4ucHJvZmlsZS1pbmZvLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93XG59XG5cbi5wcm9maWxlLWluZm8tbmFtZSxcbi5wcm9maWxlLWluZm8tdmFsdWUge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjRDVFNEYxXG59XG5cbi5wcm9maWxlLWluZm8tbmFtZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogNnB4IDEwcHggNnB4IDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNjY3RTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG59XG5cbi5wcm9maWxlLWluZm8tdmFsdWUge1xuICAgIHBhZGRpbmc6IDZweCA0cHggNnB4IDZweFxufVxuXG4ucHJvZmlsZS1pbmZvLXZhbHVlPnNwYW4rc3BhbjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjb250ZW50OiBcIixcIjtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGXG59XG5cbi5wcm9maWxlLWluZm8tdmFsdWU+c3BhbitzcGFuLmVkaXRhYmxlLWNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnByb2ZpbGUtaW5mby1yb3c6Zmlyc3QtY2hpbGQgLnByb2ZpbGUtaW5mby1uYW1lLFxuLnByb2ZpbGUtaW5mby1yb3c6Zmlyc3QtY2hpbGQgLnByb2ZpbGUtaW5mby12YWx1ZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZVxufVxuXG4ucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RDRUJGN1xufVxuXG4ucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCAucHJvZmlsZS1pbmZvLW5hbWUge1xuICAgIGNvbG9yOiAjMzM2MTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREYzRjQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGN0ZCRkZcbn1cblxuLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQgLnByb2ZpbGUtaW5mby12YWx1ZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjRENFQkY3O1xuICAgIHBhZGRpbmctbGVmdDogMTJweFxufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjE1KVxufVxuXG4uZGQtZW1wdHksXG4uZGQtaGFuZGxlLFxuLmRkLXBsYWNlaG9sZGVyLFxuLmRkMi1jb250ZW50IHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94XG59XG5cbi5wcm9maWxlLWFjdGl2aXR5IHtcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNEMEQ4RTA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICNGRkY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkICNGRkZcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgdHJhbnNwYXJlbnRcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6Zmlyc3QtY2hpbGQ6aG92ZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNEMEQ4RTBcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY5RkQ7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgI0QwRDhFMDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgI0QwRDhFMFxufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSBpbWcge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOUQ2RTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmVcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkgLnRodW1iaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0QUJENztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50XG59XG5cbi5wcm9maWxlLWFjdGl2aXR5IC50aW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgY29sb3I6ICM3Nzdcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkgYS51c2VyIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjOTU4NUJGXG59XG5cbi5wcm9maWxlLWFjdGl2aXR5IC50b29scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGJvdHRvbTogOHB4O1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6aG92ZXIgLnRvb2xzIHtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4udXNlci1wcm9maWxlIC5hY2UtdGh1bWJuYWlscyBsaSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOiA2cHhcbn1cblxuLnVzZXItcHJvZmlsZSAuYWNlLXRodW1ibmFpbHMgbGkgLnRvb2xzIHtcbiAgICBsZWZ0OiAzcHg7XG4gICAgcmlnaHQ6IDNweFxufVxuXG4udXNlci1wcm9maWxlIC5hY2UtdGh1bWJuYWlscyBsaTpob3ZlciAudG9vbHMge1xuICAgIGJvdHRvbTogM3B4XG59XG5cbi51c2VyLXRpdGxlLWxhYmVsOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbn1cblxuLnVzZXItdGl0bGUtbGFiZWwrLmRyb3Bkb3duLW1lbnUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTJweFxufVxuXG4ucHJvZmlsZS1jb250YWN0LWxpbmtzIHtcbiAgICBwYWRkaW5nOiA0cHggMnB4IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMkU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEZBRkNcbn1cblxuLmJ0bi1saW5rOmhvdmVyIC5hY2UtaWNvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudFxufVxuXG4ucHJvZmlsZS1zb2NpYWwtbGlua3M+YTpob3Zlcj4uYWNlLWljb24sXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5uYW1lIGE6aG92ZXIgLmFjZS1pY29uLFxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAudG9vbHM+YTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG59XG5cbi5wcm9maWxlLXNvY2lhbC1saW5rcz5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAwIDFweFxufVxuXG4ucHJvZmlsZS1za2lsbHMgLnByb2dyZXNzIHtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG59XG5cbi5wcm9maWxlLXNraWxscyAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgcGFkZGluZzogMCA4cHhcbn1cblxuLnByb2ZpbGUtdXNlcnMgLnVzZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBhdXRvXG59XG5cbi5wcm9maWxlLXVzZXJzIC51c2VyIGltZyB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0FBQTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xc1xufVxuXG4ucHJvZmlsZS11c2VycyAudXNlciBpbWc6aG92ZXIge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMzMpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMzKVxufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgOHB4IDI0cHhcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAuYm9keSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogOHB4IDAgMFxufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5wb3BvdmVyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB0b3A6IC01JTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBsaW5lYXIgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIC4ycywgbWF4LWhlaWdodCAwcyBsaW5lYXIgLjJzLCBtYXgtd2lkdGggMHMgbGluZWFyIC4ycywgbWluLXdpZHRoIDBzIGxpbmVhciAuMnM7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgbGluZWFyIDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAuMnMsIG1heC1oZWlnaHQgMHMgbGluZWFyIC4ycywgbWF4LXdpZHRoIDBzIGxpbmVhciAuMnMsIG1pbi13aWR0aCAwcyBsaW5lYXIgLjJzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGxpbmVhciAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjJzLCBtYXgtaGVpZ2h0IDBzIGxpbmVhciAuMnMsIG1heC13aWR0aCAwcyBsaW5lYXIgLjJzLCBtaW4td2lkdGggMHMgbGluZWFyIC4yc1xufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5wb3BvdmVyLnJpZ2h0IHtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrXG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnBvcG92ZXIubGVmdCB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2PjpmaXJzdC1jaGlsZDpob3ZlciAucG9wb3ZlciB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDEwNjA7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwc1xufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC50b29scyB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAycHhcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAudG9vbHM+YSB7XG4gICAgbWFyZ2luOiAwIDJweFxufVxuXG4udXNlci1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTFweDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjQUFBO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFweFxufVxuXG4udXNlci1zdGF0dXMuc3RhdHVzLW9ubGluZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjOEFDMTZDXG59XG5cbi51c2VyLXN0YXR1cy5zdGF0dXMtYnVzeSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjRTA3RjY5XG59XG5cbi51c2VyLXN0YXR1cy5zdGF0dXMtaWRsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkZCNzUyXG59XG5cbi50YWItY29udGVudC5wcm9maWxlLWVkaXQtdGFiLWNvbnRlbnQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gICAgcGFkZGluZzogOHB4IDMycHggMzJweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KSB7XG4gICAgLnByb2ZpbGUtaW5mby1uYW1lIHtcbiAgICAgICAgd2lkdGg6IDgwcHhcbiAgICB9XG4gICAgLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQgLnByb2ZpbGUtaW5mby1uYW1lIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA2cHggNHB4IDZweCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgIH1cbiAgICAucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCAucHJvZmlsZS1pbmZvLXZhbHVlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgfVxuICAgIC51c2VyLXByb2ZpbGUgLm1lbWJlcmRpdiB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBcbiAgICB9XG59XG5cblxuXG4uaXRlbWRpdiB7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIG1pbi1oZWlnaHQ6IDY2cHhcbn1cblxuLml0ZW1kaXY+LnVzZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMFxufVxuXG4uaXRlbWRpdj4udXNlcj4uaW1nLFxuLml0ZW1kaXY+LnVzZXI+aW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MjkzQzQ7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uaXRlbWRpdj4udXNlcj4uaW1nIHtcbiAgICBwYWRkaW5nOiAycHhcbn1cblxuLml0ZW1kaXY+LmJvZHkge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLml0ZW1kaXY+LmJvZHk+LnRpbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOXB4O1xuICAgIHRvcDogMFxufVxuXG4uaXRlbWRpdj4uYm9keT4udGltZSAuYWNlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwXG59XG5cbi5pdGVtZGl2Pi5ib2R5Pi5uYW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzk5OVxufVxuXG4uaXRlbWRpdj4uYm9keT4ubmFtZT5iIHtcbiAgICBjb2xvcjogIzc3N1xufVxuXG4uaXRlbWRpdj4uYm9keT4udGV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTlweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBmb250LXNpemU6IDEzcHhcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2OmJlZm9yZSxcbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keTpiZWZvcmUsXG4uaXRlbWRpdj4uYm9keT4udGV4dDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbn1cblxuLml0ZW1kaXY+LmJvZHk+LnRleHQ6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGxlZnQ6IDE2cHg7XG4gICAgcmlnaHQ6IC0xMnB4O1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0U0RUNGM1xufVxuXG4uaXRlbWRpdj4uYm9keT4udGV4dD4uYWNlLWljb246Zmlyc3QtY2hpbGQge1xuICAgIGNvbG9yOiAjRENFM0VEO1xuICAgIG1hcmdpbi1yaWdodDogNHB4XG59XG5cbi5pdGVtZGl2Omxhc3QtY2hpbGQ+LmJvZHk+LnRleHQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBcbn1cblxuLml0ZW1kaXY6bGFzdC1jaGlsZD4uYm9keT4udGV4dDphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXYge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMTlweDtcbiAgICB3aWR0aDogM3B4O1xuICAgIG1heC13aWR0aDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUU2RUQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q3REJERDtcbiAgICBib3JkZXItd2lkdGg6IDAgMXB4XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY6bGFzdC1jaGlsZDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Pi51c2VyPmltZyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzlENkU1XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RERTRFRDtcbiAgICBwYWRkaW5nOiA1cHggOHB4IDhweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxlZnQ6IC03cHg7XG4gICAgdG9wOiAxMXB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0RERTRFRDtcbiAgICBib3JkZXItd2lkdGg6IDJweCAwIDAgMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZylcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Pi5ib2R5Pi50aW1lIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGZsb2F0OiByaWdodFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHk+LnRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHk+LnRleHQ6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2IC50b29sdGlwLWlubmVyIHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGxcbn1cblxuLml0ZW1kaXYubWVtYmVyZGl2IHtcbiAgICB3aWR0aDogMTc1cHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIG1hcmdpbjogM3B4IDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RThcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpIHtcbiAgICAuaXRlbWRpdi5tZW1iZXJkaXYge1xuICAgICAgICBtYXgtd2lkdGg6IDUwJVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgICAuaXRlbWRpdi5tZW1iZXJkaXYge1xuICAgICAgICBtaW4td2lkdGg6IDMzLjMzMyVcbiAgICB9XG59XG5cbi5pdGVtZGl2Lm1lbWJlcmRpdj4udXNlcj5pbWcge1xuICAgIGJvcmRlci1jb2xvcjogI0RDRTNFRFxufVxuXG4uaXRlbWRpdi5tZW1iZXJkaXY+LmJvZHk+LnRpbWUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWNcbn1cblxuLml0ZW1kaXYubWVtYmVyZGl2Pi5ib2R5Pi5uYW1lIHtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMFxufVxuXG4uaXRlbWRpdi5tZW1iZXJkaXY+LmJvZHk+Lm5hbWU+YSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgbWF4LWhlaWdodDogMThweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbFxufVxuXG4uaXRlbWRpdiAudG9vbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5pdGVtLWxpc3Q+bGk+LmNoZWNrYm94LFxuLml0ZW0tbGlzdD5saT5sYWJlbC5pbmxpbmUsXG4uaXRlbWRpdjpob3ZlciAudG9vbHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4uaXRlbWRpdiAudG9vbHMgLmJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgICBtYXJnaW46IDFweCAwXG59XG5cbi5pdGVtZGl2IC5ib2R5IC50b29scyB7XG4gICAgYm90dG9tOiA0cHhcbn1cblxuLml0ZW1kaXYuY29tbWVudGRpdiAudG9vbHMge1xuICAgIHJpZ2h0OiA5cHhcbn1cblxuLml0ZW0tbGlzdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZVxufVxuXG4uaXRlbS1saXN0PmxpIHtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uaXRlbS1saXN0PmxpLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogIzgwOTBBMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGOUZDXG59XG5cbi5pdGVtLWxpc3Q+bGkuc2VsZWN0ZWQgLmxibCxcbi5pdGVtLWxpc3Q+bGkuc2VsZWN0ZWQgbGFiZWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjODA5MEEwXG59XG5cbi5pdGVtLWxpc3Q+bGkgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTNweFxufVxuXG4uaXRlbS1saXN0PmxpIC5wZXJjZW50YWdlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzc3N1xufVxuXG5cbi5hY2UtdGh1bWJuYWlscz5saSxcbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uYWNlLXRodW1ibmFpbHMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzNcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZDpmb2N1cyB7XG4gICAgb3V0bGluZTogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRhZ3Mge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXRcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpIC50YWdzPi5sYWJlbC1ob2xkZXIge1xuICAgIG9wYWNpdHk6IC45MjtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTIpO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG1hcmdpbjogMXB4IDAgMDtcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHMsXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkPi50ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU1KVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRhZ3M+LmxhYmVsLWhvbGRlcjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzIHtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IC0zMHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzLnRvb2xzLXJpZ2h0IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtMzBweFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzLnRvb2xzLWJvdHRvbSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogLTMwcHhcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scy50b29scy10b3Age1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogLTMwcHg7XG4gICAgYm90dG9tOiBhdXRvXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saTpob3Zlcj4udG9vbHMge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpOmhvdmVyPi50b29scy50b29scy1ib3R0b20ge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpOmhvdmVyPi50b29scy50b29scy10b3Age1xuICAgIGJvdHRvbTogYXV0bztcbiAgICB0b3A6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpOmhvdmVyPi50b29scy50b29scy1yaWdodCB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LmluLnRvb2xzIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4uaW4udG9vbHMudG9vbHMtYm90dG9tIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4uaW4udG9vbHMudG9vbHMtdG9wIHtcbiAgICBib3R0b206IGF1dG87XG4gICAgdG9wOiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4uaW4udG9vbHMudG9vbHMtcmlnaHQge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scz5hLFxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZCAuaW5uZXIgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDAgNHB4XG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHM+YTpob3Zlcixcbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQgLmlubmVyIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI0M5RTJFQVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRvb2xzLnRvb2xzLWJvdHRvbT5hLFxuLmFjZS10aHVtYm5haWxzPmxpIC50b29scy50b29scy10b3A+YSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQ+LnRleHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlXG59XG5cbi5kaWFsb2dzLFxuLml0ZW1kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkPi50ZXh0OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkPi50ZXh0Pi5pbm5lciB7XG4gICAgcGFkZGluZzogNHB4IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1heC13aWR0aDogOTAlXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saTpob3Zlcj46Zmlyc3QtY2hpbGQ+LnRleHQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMClcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KSB7XG4gICAgLmFjZS10aHVtYm5haWxzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuICAgIC5hY2UtdGh1bWJuYWlscz5saSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICB9XG59XG5cblxuLnRhYi1jb250ZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzVEMERDO1xuICAgIHBhZGRpbmc6IDE2cHggMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLnRhYi1jb250ZW50Lm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEycHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMzIge1xuICAgIHBhZGRpbmc6IDMycHggMjRweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMzIge1xuICAgIHBhZGRpbmc6IDMycHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMzAge1xuICAgIHBhZGRpbmc6IDMwcHggMjNweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMzAge1xuICAgIHBhZGRpbmc6IDMwcHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMjgge1xuICAgIHBhZGRpbmc6IDI4cHggMjFweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMjgge1xuICAgIHBhZGRpbmc6IDI4cHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMjYge1xuICAgIHBhZGRpbmc6IDI2cHggMjBweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMjYge1xuICAgIHBhZGRpbmc6IDI2cHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMjQge1xuICAgIHBhZGRpbmc6IDI0cHggMThweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMjQge1xuICAgIHBhZGRpbmc6IDI0cHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMjIge1xuICAgIHBhZGRpbmc6IDIycHggMTdweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMjIge1xuICAgIHBhZGRpbmc6IDIycHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMjAge1xuICAgIHBhZGRpbmc6IDIwcHggMTVweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMjAge1xuICAgIHBhZGRpbmc6IDIwcHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMTgge1xuICAgIHBhZGRpbmc6IDE4cHggMTRweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMTgge1xuICAgIHBhZGRpbmc6IDE4cHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMTYge1xuICAgIHBhZGRpbmc6IDE2cHggMTJweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMTYge1xuICAgIHBhZGRpbmc6IDE2cHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMTQge1xuICAgIHBhZGRpbmc6IDE0cHggMTFweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMTQge1xuICAgIHBhZGRpbmc6IDE0cHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMTIge1xuICAgIHBhZGRpbmc6IDEycHggOXB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0xMiB7XG4gICAgcGFkZGluZzogMTJweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0xMCB7XG4gICAgcGFkZGluZzogMTBweCA4cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTEwIHtcbiAgICBwYWRkaW5nOiAxMHB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTgge1xuICAgIHBhZGRpbmc6IDhweCA2cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTgge1xuICAgIHBhZGRpbmc6IDhweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy02IHtcbiAgICBwYWRkaW5nOiA2cHggNXB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy02IHtcbiAgICBwYWRkaW5nOiA2cHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctNCB7XG4gICAgcGFkZGluZzogNHB4IDNweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctNCB7XG4gICAgcGFkZGluZzogNHB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0yLFxuLnRhYi1jb250ZW50LnBhZGRpbmctMiB7XG4gICAgcGFkZGluZzogMnB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0wLFxuLnRhYi1jb250ZW50LnBhZGRpbmctMCB7XG4gICAgcGFkZGluZzogMFxufVxuXG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0yOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTI4LFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTI4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDI4cHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTI2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjYsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjYge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMjZweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjQge1xuICAgIHBhZGRpbmctbGVmdDogMjRweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yNCxcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAyNHB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0yMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTIyLFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTIyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDIycHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTIwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjAsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjAge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMjBweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTgge1xuICAgIHBhZGRpbmctbGVmdDogMThweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xOCxcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAxOHB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0xNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTE2LFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTE2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDE2cHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTE0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTQsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMTRweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTIge1xuICAgIHBhZGRpbmctbGVmdDogMTJweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xMixcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAxMnB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTEwLFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTgge1xuICAgIHBhZGRpbmctbGVmdDogOHB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTgsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA4cHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTYge1xuICAgIHBhZGRpbmctbGVmdDogNnB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTYsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA2cHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTQge1xuICAgIHBhZGRpbmctbGVmdDogNHB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTQsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA0cHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTIge1xuICAgIHBhZGRpbmctbGVmdDogMnB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTIsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAycHhcbn1cblxuLm5hdi10YWJzIHtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREM7XG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMXB4XG59XG5cbi5uYXYtdGFicz5saT5hIHtcbiAgICBwYWRkaW5nOiA3cHggMTJweCA4cHhcbn1cblxuLm5hdi10YWJzPmxpPmEsXG4ubmF2LXRhYnM+bGk+YTpmb2N1cyB7XG4gICAgYm9yZGVyLXJhZGl1czogMCFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4ubmF2LXRhYnM+bGk+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBjb2xvcjogIzRDOEZCRDtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwRENcbn1cblxuLm5hdi10YWJzPmxpPmE6YWN0aXZlLFxuLm5hdi10YWJzPmxpPmE6Zm9jdXMge1xuICAgIG91dGxpbmU6IDAhaW1wb3J0YW50XG59XG5cbi5uYXYtdGFicz5saS5hY3RpdmU+YSxcbi5uYXYtdGFicz5saS5hY3RpdmU+YTpmb2N1cyxcbi5uYXYtdGFicz5saS5hY3RpdmU+YTpob3ZlciB7XG4gICAgY29sb3I6ICM1NzYzNzM7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDICNDNUQwREMgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM0QzhGQkQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgYm94LXNoYWRvdzogMCAtMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgLjE1KVxufVxuXG4udGFicy1iZWxvdz4ubmF2LXRhYnMge1xuICAgIHRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBcbn1cblxuLnRhYnMtYmVsb3c+Lm5hdi10YWJzPmxpPmEsXG4udGFicy1iZWxvdz4ubmF2LXRhYnM+bGk+YTpmb2N1cyxcbi50YWJzLWJlbG93Pi5uYXYtdGFicz5saT5hOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwRENcbn1cblxuLnRhYnMtYmVsb3c+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hLFxuLnRhYnMtYmVsb3c+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hOmZvY3VzLFxuLnRhYnMtYmVsb3c+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNDNUQwREMgI0M1RDBEQztcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0QzhGQkQ7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xNSlcbn1cblxuLnRhYnMtbGVmdD4ubmF2LXRhYnM+bGk+YSxcbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saT5hIHtcbiAgICBtaW4td2lkdGg6IDYwcHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2LXRhYnMge1xuICAgIHRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcbiAgICBmbG9hdDogbGVmdFxufVxuXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saSB7XG4gICAgZmxvYXQ6IG5vbmUhaW1wb3J0YW50XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpPmEsXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saT5hOmZvY3VzLFxuLnRhYnMtbGVmdD4ubmF2LXRhYnM+bGk+YTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICAgIG1hcmdpbjogMCAtMXB4IDAgMFxufVxuXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saS5hY3RpdmU+YSxcbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hOmZvY3VzLFxuLnRhYnMtbGVmdD4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQyB0cmFuc3BhcmVudCAjQzVEMERDICNDNUQwREM7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzRDOEZCRDtcbiAgICBtYXJnaW46IDAgLTFweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0ycHggMCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xNSkhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IC0ycHggMCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xNSkhaW1wb3J0YW50XG59XG5cbi50YWJzLXJpZ2h0Pi5uYXYtdGFicyB7XG4gICAgdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICAgIGZsb2F0OiByaWdodFxufVxuXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGkge1xuICAgIGZsb2F0OiBub25lIWltcG9ydGFudFxufVxuXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGk+YSxcbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saT5hOmZvY3VzLFxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpPmE6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcbiAgICBtYXJnaW46IDAgLTFweFxufVxuXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGkuYWN0aXZlPmEsXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQyAjQzVEMERDICNDNUQwREMgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM0QzhGQkQ7XG4gICAgbWFyZ2luOiAwIC0ycHggMCAtMXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAgIGJveC1zaGFkb3c6IDJweCAwIDNweCAwIHJnYmEoMCwgMCwgMCwgLjE1KVxufVxuXG4ubmF2LXRhYnM+bGk+YSAuYmFkZ2Uge1xuICAgIHBhZGRpbmc6IDFweCA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgb3BhY2l0eTogLjc1O1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsXG59XG5cbi5uYXYtdGFicz5saT5hIC5hY2UtaWNvbiB7XG4gICAgb3BhY2l0eTogLjc1XG59XG5cbi5uYXYtdGFicz5saS5hY3RpdmU+YSAuYWNlLWljb24sXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmEgLmJhZGdlIHtcbiAgICBvcGFjaXR5OiAxXG59XG5cbi5uYXYtdGFicyBsaSAuYWNlLWljb24ge1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4ubmF2LXRhYnM+bGkub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY5OUM2O1xuICAgIGJvcmRlci1jb2xvcjogIzRGOTlDNjtcbiAgICBjb2xvcjogI0ZGRlxufVxuXG4ubmF2LXRhYnM+bGkub3BlbiAuZHJvcGRvd24tdG9nZ2xlPi5hY2UtaWNvbiB7XG4gICAgY29sb3I6ICNGRkYhaW1wb3J0YW50XG59XG5cbi50YWJzLWxlZnQgLnRhYi1jb250ZW50LFxuLnRhYnMtcmlnaHQgLnRhYi1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogYXV0b1xufVxuXG4uZGFyayB7XG4gICAgY29sb3I6ICMzMzMhaW1wb3J0YW50XG59XG5cbi53aGl0ZSB7XG4gICAgY29sb3I6ICNGRkYhaW1wb3J0YW50XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiAjREQ1QTQzIWltcG9ydGFudFxufVxuXG4ucmVkMiB7XG4gICAgY29sb3I6ICNFMDgzNzQhaW1wb3J0YW50XG59XG5cbi5saWdodC1yZWQge1xuICAgIGNvbG9yOiAjRjc3IWltcG9ydGFudFxufVxuXG4uYmx1ZSB7XG4gICAgY29sb3I6ICM0NzhGQ0EhaW1wb3J0YW50XG59XG5cbi5saWdodC1ibHVlIHtcbiAgICBjb2xvcjogIzkzQ0JGOSFpbXBvcnRhbnRcbn1cblxuLmdyZWVuIHtcbiAgICBjb2xvcjogIzY5QUE0NiFpbXBvcnRhbnRcbn1cblxuLmxpZ2h0LWdyZWVuIHtcbiAgICBjb2xvcjogI0IwRDg3NyFpbXBvcnRhbnRcbn1cblxuLm9yYW5nZSB7XG4gICAgY29sb3I6ICNGRjg5MkEhaW1wb3J0YW50XG59XG5cbi5vcmFuZ2UyIHtcbiAgICBjb2xvcjogI0ZFQjkwMiFpbXBvcnRhbnRcbn1cblxuLmxpZ2h0LW9yYW5nZSB7XG4gICAgY29sb3I6ICNGQ0FDNkYhaW1wb3J0YW50XG59XG5cbi5wdXJwbGUge1xuICAgIGNvbG9yOiAjQTA2OUMzIWltcG9ydGFudFxufVxuXG4ucGluayB7XG4gICAgY29sb3I6ICNDNjY5OUYhaW1wb3J0YW50XG59XG5cbi5waW5rMiB7XG4gICAgY29sb3I6ICNENjQ4N0UhaW1wb3J0YW50XG59XG5cbi5icm93biB7XG4gICAgY29sb3I6IGJyb3duIWltcG9ydGFudFxufVxuXG4uZ3JleSB7XG4gICAgY29sb3I6ICM3NzchaW1wb3J0YW50XG59IiwiYm9keSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hbGlnbi1jZW50ZXIsIC5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtdXNlci1pbmZvIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiA5OCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wcm9maWxlLWluZm8tcm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuXG4ucHJvZmlsZS1pbmZvLW5hbWUsXG4ucHJvZmlsZS1pbmZvLXZhbHVlIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjRDVFNEYxO1xufVxuXG4ucHJvZmlsZS1pbmZvLW5hbWUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogNnB4IDEwcHggNnB4IDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2NjdFOTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wcm9maWxlLWluZm8tdmFsdWUge1xuICBwYWRkaW5nOiA2cHggNHB4IDZweCA2cHg7XG59XG5cbi5wcm9maWxlLWluZm8tdmFsdWUgPiBzcGFuICsgc3BhbjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNvbnRlbnQ6IFwiLFwiO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgY29sb3I6ICM2NjY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGO1xufVxuXG4ucHJvZmlsZS1pbmZvLXZhbHVlID4gc3BhbiArIHNwYW4uZWRpdGFibGUtY29udGFpbmVyOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9maWxlLWluZm8tcm93OmZpcnN0LWNoaWxkIC5wcm9maWxlLWluZm8tbmFtZSxcbi5wcm9maWxlLWluZm8tcm93OmZpcnN0LWNoaWxkIC5wcm9maWxlLWluZm8tdmFsdWUge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4ucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEQ0VCRjc7XG59XG5cbi5wcm9maWxlLXVzZXItaW5mby1zdHJpcGVkIC5wcm9maWxlLWluZm8tbmFtZSB7XG4gIGNvbG9yOiAjMzM2MTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGM0Y0O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Y3RkJGRjtcbn1cblxuLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQgLnByb2ZpbGUtaW5mby12YWx1ZSB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI0RDRUJGNztcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5kZC1lbXB0eSxcbi5kZC1oYW5kbGUsXG4uZGQtcGxhY2Vob2xkZXIsXG4uZGQyLWNvbnRlbnQge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkge1xuICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjRDBEOEUwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICNGRkY7XG4gIGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCAjRkZGO1xufVxuXG4ucHJvZmlsZS1hY3Rpdml0eTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5wcm9maWxlLWFjdGl2aXR5OmZpcnN0LWNoaWxkOmhvdmVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI0QwRDhFMDtcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGOUZEO1xuICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCAjRDBEOEUwO1xuICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgI0QwRDhFMDtcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkgaW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0M5RDZFNTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSAudGh1bWJpY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0QUJENztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSAudGltZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSBhLnVzZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzk1ODVCRjtcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkgLnRvb2xzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9maWxlLWFjdGl2aXR5OmhvdmVyIC50b29scyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXNlci1wcm9maWxlIC5hY2UtdGh1bWJuYWlscyBsaSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOiA2cHg7XG59XG5cbi51c2VyLXByb2ZpbGUgLmFjZS10aHVtYm5haWxzIGxpIC50b29scyB7XG4gIGxlZnQ6IDNweDtcbiAgcmlnaHQ6IDNweDtcbn1cblxuLnVzZXItcHJvZmlsZSAuYWNlLXRodW1ibmFpbHMgbGk6aG92ZXIgLnRvb2xzIHtcbiAgYm90dG9tOiAzcHg7XG59XG5cbi51c2VyLXRpdGxlLWxhYmVsOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udXNlci10aXRsZS1sYWJlbCArIC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xufVxuXG4ucHJvZmlsZS1jb250YWN0LWxpbmtzIHtcbiAgcGFkZGluZzogNHB4IDJweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUyRTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEZBRkM7XG59XG5cbi5idG4tbGluazpob3ZlciAuYWNlLWljb24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtc29jaWFsLWxpbmtzID4gYTpob3ZlciA+IC5hY2UtaWNvbixcbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLm5hbWUgYTpob3ZlciAuYWNlLWljb24sXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC50b29scyA+IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9maWxlLXNvY2lhbC1saW5rcyA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMCAxcHg7XG59XG5cbi5wcm9maWxlLXNraWxscyAucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wcm9maWxlLXNraWxscyAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLnByb2ZpbGUtdXNlcnMgLnVzZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnByb2ZpbGUtdXNlcnMgLnVzZXIgaW1nIHtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUFBO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIHdpZHRoOiA2NHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG5cbi5wcm9maWxlLXVzZXJzIC51c2VyIGltZzpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHdpZHRoOiAxMDBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgOHB4IDI0cHg7XG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLmJvZHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogOHB4IDAgMDtcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAucG9wb3ZlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWluLXdpZHRoOiAwO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBtYXgtd2lkdGg6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHRvcDogLTUlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXIgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMnMsIG1heC1oZWlnaHQgMHMgbGluZWFyIDAuMnMsIG1heC13aWR0aCAwcyBsaW5lYXIgMC4ycywgbWluLXdpZHRoIDBzIGxpbmVhciAwLjJzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyIDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjJzLCBtYXgtaGVpZ2h0IDBzIGxpbmVhciAwLjJzLCBtYXgtd2lkdGggMHMgbGluZWFyIDAuMnMsIG1pbi13aWR0aCAwcyBsaW5lYXIgMC4ycztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhciAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4ycywgbWF4LWhlaWdodCAwcyBsaW5lYXIgMC4ycywgbWF4LXdpZHRoIDBzIGxpbmVhciAwLjJzLCBtaW4td2lkdGggMHMgbGluZWFyIDAuMnM7XG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnBvcG92ZXIucmlnaHQge1xuICBsZWZ0OiAxMDAlO1xuICByaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnBvcG92ZXIubGVmdCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiA+IDpmaXJzdC1jaGlsZDpob3ZlciAucG9wb3ZlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwNjA7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAtby10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnRvb2xzIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnRvb2xzID4gYSB7XG4gIG1hcmdpbjogMCAycHg7XG59XG5cbi51c2VyLXN0YXR1cyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDExcHg7XG4gIGhlaWdodDogMTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAzcHggc29saWQgI0FBQTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi51c2VyLXN0YXR1cy5zdGF0dXMtb25saW5lIHtcbiAgYm9yZGVyLWNvbG9yOiAjOEFDMTZDO1xufVxuXG4udXNlci1zdGF0dXMuc3RhdHVzLWJ1c3kge1xuICBib3JkZXItY29sb3I6ICNFMDdGNjk7XG59XG5cbi51c2VyLXN0YXR1cy5zdGF0dXMtaWRsZSB7XG4gIGJvcmRlci1jb2xvcjogI0ZGQjc1Mjtcbn1cblxuLnRhYi1jb250ZW50LnByb2ZpbGUtZWRpdC10YWItY29udGVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gIHBhZGRpbmc6IDhweCAzMnB4IDMycHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnByb2ZpbGUtaW5mby1uYW1lIHtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuXG4gIC5wcm9maWxlLXVzZXItaW5mby1zdHJpcGVkIC5wcm9maWxlLWluZm8tbmFtZSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA2cHggNHB4IDZweCAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQgLnByb2ZpbGUtaW5mby12YWx1ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudXNlci1wcm9maWxlIC5tZW1iZXJkaXYge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG4uaXRlbWRpdiB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgbWluLWhlaWdodDogNjZweDtcbn1cblxuLml0ZW1kaXYgPiAudXNlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cblxuLml0ZW1kaXYgPiAudXNlciA+IC5pbWcsXG4uaXRlbWRpdiA+IC51c2VyID4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzUyOTNDNDtcbiAgbWF4LXdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pdGVtZGl2ID4gLnVzZXIgPiAuaW1nIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uaXRlbWRpdiA+IC5ib2R5IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLml0ZW1kaXYgPiAuYm9keSA+IC50aW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM2NjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDlweDtcbiAgdG9wOiAwO1xufVxuXG4uaXRlbWRpdiA+IC5ib2R5ID4gLnRpbWUgLmFjZS1pY29uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaXRlbWRpdiA+IC5ib2R5ID4gLm5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5pdGVtZGl2ID4gLmJvZHkgPiAubmFtZSA+IGIge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLml0ZW1kaXYgPiAuYm9keSA+IC50ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTlweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2OmJlZm9yZSxcbi5pdGVtZGl2LmRpYWxvZ2RpdiA+IC5ib2R5OmJlZm9yZSxcbi5pdGVtZGl2ID4gLmJvZHkgPiAudGV4dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLml0ZW1kaXYgPiAuYm9keSA+IC50ZXh0OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICBmb250LXNpemU6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxlZnQ6IDE2cHg7XG4gIHJpZ2h0OiAtMTJweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U0RUNGMztcbn1cblxuLml0ZW1kaXYgPiAuYm9keSA+IC50ZXh0ID4gLmFjZS1pY29uOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICNEQ0UzRUQ7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uaXRlbWRpdjpsYXN0LWNoaWxkID4gLmJvZHkgPiAudGV4dCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5pdGVtZGl2Omxhc3QtY2hpbGQgPiAuYm9keSA+IC50ZXh0OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2IHtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDE5cHg7XG4gIHdpZHRoOiAzcHg7XG4gIG1heC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFNkVEO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDdEQkREO1xuICBib3JkZXItd2lkdGg6IDAgMXB4O1xufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY6bGFzdC1jaGlsZDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXYgPiAudXNlciA+IGltZyB7XG4gIGJvcmRlci1jb2xvcjogI0M5RDZFNTtcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2ID4gLmJvZHkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRERFNEVEO1xuICBwYWRkaW5nOiA1cHggOHB4IDhweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdiA+IC5ib2R5OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAtN3B4O1xuICB0b3A6IDExcHg7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRERFNEVEO1xuICBib3JkZXItd2lkdGg6IDJweCAwIDAgMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2ID4gLmJvZHkgPiAudGltZSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2ID4gLmJvZHkgPiAudGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdiA+IC5ib2R5ID4gLnRleHQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXYgLnRvb2x0aXAtaW5uZXIge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5pdGVtZGl2Lm1lbWJlcmRpdiB7XG4gIHdpZHRoOiAxNzVweDtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW46IDNweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaXRlbWRpdi5tZW1iZXJkaXYge1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLml0ZW1kaXYubWVtYmVyZGl2IHtcbiAgICBtaW4td2lkdGg6IDMzLjMzMyU7XG4gIH1cbn1cbi5pdGVtZGl2Lm1lbWJlcmRpdiA+IC51c2VyID4gaW1nIHtcbiAgYm9yZGVyLWNvbG9yOiAjRENFM0VEO1xufVxuXG4uaXRlbWRpdi5tZW1iZXJkaXYgPiAuYm9keSA+IC50aW1lIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLml0ZW1kaXYubWVtYmVyZGl2ID4gLmJvZHkgPiAubmFtZSB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pdGVtZGl2Lm1lbWJlcmRpdiA+IC5ib2R5ID4gLm5hbWUgPiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uaXRlbWRpdiAudG9vbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLml0ZW0tbGlzdCA+IGxpID4gLmNoZWNrYm94LFxuLml0ZW0tbGlzdCA+IGxpID4gbGFiZWwuaW5saW5lLFxuLml0ZW1kaXY6aG92ZXIgLnRvb2xzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaXRlbWRpdiAudG9vbHMgLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIG1hcmdpbjogMXB4IDA7XG59XG5cbi5pdGVtZGl2IC5ib2R5IC50b29scyB7XG4gIGJvdHRvbTogNHB4O1xufVxuXG4uaXRlbWRpdi5jb21tZW50ZGl2IC50b29scyB7XG4gIHJpZ2h0OiA5cHg7XG59XG5cbi5pdGVtLWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5pdGVtLWxpc3QgPiBsaSB7XG4gIHBhZGRpbmc6IDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXRlbS1saXN0ID4gbGkuc2VsZWN0ZWQge1xuICBjb2xvcjogIzgwOTBBMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjlGQztcbn1cblxuLml0ZW0tbGlzdCA+IGxpLnNlbGVjdGVkIC5sYmwsXG4uaXRlbS1saXN0ID4gbGkuc2VsZWN0ZWQgbGFiZWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICM4MDkwQTA7XG59XG5cbi5pdGVtLWxpc3QgPiBsaSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLml0ZW0tbGlzdCA+IGxpIC5wZXJjZW50YWdlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzc3Nztcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGksXG4uYWNlLXRodW1ibmFpbHMgPiBsaSA+IDpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY2UtdGh1bWJuYWlscyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGkge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG59XG5cbi5hY2UtdGh1bWJuYWlscyA+IGxpID4gOmZpcnN0LWNoaWxkOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGkgLnRhZ3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xufVxuXG4uYWNlLXRodW1ibmFpbHMgPiBsaSAudGFncyA+IC5sYWJlbC1ob2xkZXIge1xuICBvcGFjaXR5OiAwLjkyO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTIpO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAxcHggMCAwO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGkgPiAudG9vbHMsXG4uYWNlLXRodW1ibmFpbHMgPiBsaSA+IDpmaXJzdC1jaGlsZCA+IC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG59XG5cbi5hY2UtdGh1bWJuYWlscyA+IGxpIC50YWdzID4gLmxhYmVsLWhvbGRlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuXG4uYWNlLXRodW1ibmFpbHMgPiBsaSA+IC50b29scyB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAtMzBweDtcbiAgd2lkdGg6IDI0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGkgPiAudG9vbHMudG9vbHMtcmlnaHQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTMwcHg7XG59XG5cbi5hY2UtdGh1bWJuYWlscyA+IGxpID4gLnRvb2xzLnRvb2xzLWJvdHRvbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDI4cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogLTMwcHg7XG59XG5cbi5hY2UtdGh1bWJuYWlscyA+IGxpID4gLnRvb2xzLnRvb2xzLXRvcCB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDI4cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC0zMHB4O1xuICBib3R0b206IGF1dG87XG59XG5cbi5hY2UtdGh1bWJuYWlscyA+IGxpOmhvdmVyID4gLnRvb2xzIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5hY2UtdGh1bWJuYWlscyA+IGxpOmhvdmVyID4gLnRvb2xzLnRvb2xzLWJvdHRvbSB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xufVxuXG4uYWNlLXRodW1ibmFpbHMgPiBsaTpob3ZlciA+IC50b29scy50b29scy10b3Age1xuICBib3R0b206IGF1dG87XG4gIHRvcDogMDtcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGk6aG92ZXIgPiAudG9vbHMudG9vbHMtcmlnaHQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMDtcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGkgPiAuaW4udG9vbHMge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGkgPiAuaW4udG9vbHMudG9vbHMtYm90dG9tIHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDA7XG59XG5cbi5hY2UtdGh1bWJuYWlscyA+IGxpID4gLmluLnRvb2xzLnRvb2xzLXRvcCB7XG4gIGJvdHRvbTogYXV0bztcbiAgdG9wOiAwO1xufVxuXG4uYWNlLXRodW1ibmFpbHMgPiBsaSA+IC5pbi50b29scy50b29scy1yaWdodCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xufVxuXG4uYWNlLXRodW1ibmFpbHMgPiBsaSA+IC50b29scyA+IGEsXG4uYWNlLXRodW1ibmFpbHMgPiBsaSA+IDpmaXJzdC1jaGlsZCAuaW5uZXIgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMCA0cHg7XG59XG5cbi5hY2UtdGh1bWJuYWlscyA+IGxpID4gLnRvb2xzID4gYTpob3Zlcixcbi5hY2UtdGh1bWJuYWlscyA+IGxpID4gOmZpcnN0LWNoaWxkIC5pbm5lciBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0M5RTJFQTtcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGkgLnRvb2xzLnRvb2xzLWJvdHRvbSA+IGEsXG4uYWNlLXRodW1ibmFpbHMgPiBsaSAudG9vbHMudG9vbHMtdG9wID4gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFjZS10aHVtYm5haWxzID4gbGkgPiA6Zmlyc3QtY2hpbGQgPiAudGV4dCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uZGlhbG9ncyxcbi5pdGVtZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWNlLXRodW1ibmFpbHMgPiBsaSA+IDpmaXJzdC1jaGlsZCA+IC50ZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5hY2UtdGh1bWJuYWlscyA+IGxpID4gOmZpcnN0LWNoaWxkID4gLnRleHQgPiAuaW5uZXIge1xuICBwYWRkaW5nOiA0cHggMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogOTAlO1xufVxuXG4uYWNlLXRodW1ibmFpbHMgPiBsaTpob3ZlciA+IDpmaXJzdC1jaGlsZCA+IC50ZXh0IHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmFjZS10aHVtYm5haWxzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWNlLXRodW1ibmFpbHMgPiBsaSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG4udGFiLWNvbnRlbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzVEMERDO1xuICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhYi1jb250ZW50Lm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0zMiB7XG4gIHBhZGRpbmc6IDMycHggMjRweDtcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTMyIHtcbiAgcGFkZGluZzogMzJweDtcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMzAge1xuICBwYWRkaW5nOiAzMHB4IDIzcHg7XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0zMCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTI4IHtcbiAgcGFkZGluZzogMjhweCAyMXB4O1xufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMjgge1xuICBwYWRkaW5nOiAyOHB4O1xufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0yNiB7XG4gIHBhZGRpbmc6IDI2cHggMjBweDtcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTI2IHtcbiAgcGFkZGluZzogMjZweDtcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMjQge1xuICBwYWRkaW5nOiAyNHB4IDE4cHg7XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0yNCB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTIyIHtcbiAgcGFkZGluZzogMjJweCAxN3B4O1xufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMjIge1xuICBwYWRkaW5nOiAyMnB4O1xufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0yMCB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTIwIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMTgge1xuICBwYWRkaW5nOiAxOHB4IDE0cHg7XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0xOCB7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTE2IHtcbiAgcGFkZGluZzogMTZweCAxMnB4O1xufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMTYge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0xNCB7XG4gIHBhZGRpbmc6IDE0cHggMTFweDtcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTE0IHtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMTIge1xuICBwYWRkaW5nOiAxMnB4IDlweDtcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTEyIHtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMTAge1xuICBwYWRkaW5nOiAxMHB4IDhweDtcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTEwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctOCB7XG4gIHBhZGRpbmc6IDhweCA2cHg7XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy04IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy02IHtcbiAgcGFkZGluZzogNnB4IDVweDtcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTYge1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTQge1xuICBwYWRkaW5nOiA0cHggM3B4O1xufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctNCB7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTIsXG4udGFiLWNvbnRlbnQucGFkZGluZy0yIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMCxcbi50YWItY29udGVudC5wYWRkaW5nLTAge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjgge1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctMjgsXG4udGFicy1yaWdodCA+IC5uYXYubmF2LXRhYnMucGFkZGluZy0yOCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDI4cHg7XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0yNiB7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbn1cblxuLnRhYnMtbGVmdCA+IC5uYXYubmF2LXRhYnMucGFkZGluZy0yNixcbi50YWJzLXJpZ2h0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTI2IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogMjZweDtcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTI0IHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4udGFicy1sZWZ0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTI0LFxuLnRhYnMtcmlnaHQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctMjQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjIge1xuICBwYWRkaW5nLWxlZnQ6IDIycHg7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctMjIsXG4udGFicy1yaWdodCA+IC5uYXYubmF2LXRhYnMucGFkZGluZy0yMiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0yMCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnRhYnMtbGVmdCA+IC5uYXYubmF2LXRhYnMucGFkZGluZy0yMCxcbi50YWJzLXJpZ2h0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTIwIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTE4IHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xufVxuXG4udGFicy1sZWZ0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTE4LFxuLnRhYnMtcmlnaHQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctMTgge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTYge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctMTYsXG4udGFicy1yaWdodCA+IC5uYXYubmF2LXRhYnMucGFkZGluZy0xNiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0xNCB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbn1cblxuLnRhYnMtbGVmdCA+IC5uYXYubmF2LXRhYnMucGFkZGluZy0xNCxcbi50YWJzLXJpZ2h0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTE0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTEyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuXG4udGFicy1sZWZ0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTEyLFxuLnRhYnMtcmlnaHQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctMTIge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctMTAsXG4udGFicy1yaWdodCA+IC5uYXYubmF2LXRhYnMucGFkZGluZy0xMCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctOCxcbi50YWJzLXJpZ2h0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTgge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy02IHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctNixcbi50YWJzLXJpZ2h0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTYge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy00IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctNCxcbi50YWJzLXJpZ2h0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0yIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2Lm5hdi10YWJzLnBhZGRpbmctMixcbi50YWJzLXJpZ2h0ID4gLm5hdi5uYXYtdGFicy5wYWRkaW5nLTIge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5uYXYtdGFicyB7XG4gIGJvcmRlci1jb2xvcjogI0M1RDBEQztcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG4ubmF2LXRhYnMgPiBsaSA+IGEge1xuICBwYWRkaW5nOiA3cHggMTJweCA4cHg7XG59XG5cbi5uYXYtdGFicyA+IGxpID4gYSxcbi5uYXYtdGFicyA+IGxpID4gYTpmb2N1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2LXRhYnMgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBjb2xvcjogIzRDOEZCRDtcbiAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xufVxuXG4ubmF2LXRhYnMgPiBsaSA+IGE6YWN0aXZlLFxuLm5hdi10YWJzID4gbGkgPiBhOmZvY3VzIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhLFxuLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYTpmb2N1cyxcbi5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIge1xuICBjb2xvcjogIzU3NjM3MztcbiAgYm9yZGVyLWNvbG9yOiAjQzVEMERDICNDNUQwREMgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNEM4RkJEO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB6LWluZGV4OiAxO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgYm94LXNoYWRvdzogMCAtMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi50YWJzLWJlbG93ID4gLm5hdi10YWJzIHtcbiAgdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBib3JkZXItY29sb3I6ICNDNUQwREM7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi50YWJzLWJlbG93ID4gLm5hdi10YWJzID4gbGkgPiBhLFxuLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMgPiBsaSA+IGE6Zm9jdXMsXG4udGFicy1iZWxvdyA+IC5uYXYtdGFicyA+IGxpID4gYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI0M1RDBEQztcbn1cblxuLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhLFxuLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzLFxuLnRhYnMtYmVsb3cgPiAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjQzVEMERDICNDNUQwREM7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0QzhGQkQ7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2LXRhYnMgPiBsaSA+IGEsXG4udGFicy1yaWdodCA+IC5uYXYtdGFicyA+IGxpID4gYSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRhYnMtbGVmdCA+IC5uYXYtdGFicyB7XG4gIHRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRhYnMtbGVmdCA+IC5uYXYtdGFicyA+IGxpIHtcbiAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRhYnMtbGVmdCA+IC5uYXYtdGFicyA+IGxpID4gYSxcbi50YWJzLWxlZnQgPiAubmF2LXRhYnMgPiBsaSA+IGE6Zm9jdXMsXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzID4gbGkgPiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICBtYXJnaW46IDAgLTFweCAwIDA7XG59XG5cbi50YWJzLWxlZnQgPiAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhLFxuLnRhYnMtbGVmdCA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMsXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI0M1RDBEQyB0cmFuc3BhcmVudCAjQzVEMERDICNDNUQwREM7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNEM4RkJEO1xuICBtYXJnaW46IDAgLTFweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMnB4IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAtMnB4IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuXG4udGFicy1yaWdodCA+IC5uYXYtdGFicyB7XG4gIHRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50YWJzLXJpZ2h0ID4gLm5hdi10YWJzID4gbGkge1xuICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udGFicy1yaWdodCA+IC5uYXYtdGFicyA+IGxpID4gYSxcbi50YWJzLXJpZ2h0ID4gLm5hdi10YWJzID4gbGkgPiBhOmZvY3VzLFxuLnRhYnMtcmlnaHQgPiAubmF2LXRhYnMgPiBsaSA+IGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNDNUQwREM7XG4gIG1hcmdpbjogMCAtMXB4O1xufVxuXG4udGFicy1yaWdodCA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGEsXG4udGFicy1yaWdodCA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMsXG4udGFicy1yaWdodCA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNDNUQwREMgI0M1RDBEQyAjQzVEMERDIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM0QzhGQkQ7XG4gIG1hcmdpbjogMCAtMnB4IDAgLTFweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2hhZG93OiAycHggMCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4ubmF2LXRhYnMgPiBsaSA+IGEgLmJhZGdlIHtcbiAgcGFkZGluZzogMXB4IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xufVxuXG4ubmF2LXRhYnMgPiBsaSA+IGEgLmFjZS1pY29uIHtcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSAuYWNlLWljb24sXG4ubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhIC5iYWRnZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5uYXYtdGFicyBsaSAuYWNlLWljb24ge1xuICB3aWR0aDogMS4yNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdi10YWJzID4gbGkub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGOTlDNjtcbiAgYm9yZGVyLWNvbG9yOiAjNEY5OUM2O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLm5hdi10YWJzID4gbGkub3BlbiAuZHJvcGRvd24tdG9nZ2xlID4gLmFjZS1pY29uIHtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbn1cblxuLnRhYnMtbGVmdCAudGFiLWNvbnRlbnQsXG4udGFicy1yaWdodCAudGFiLWNvbnRlbnQge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRhcmsge1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNERDVBNDMgIWltcG9ydGFudDtcbn1cblxuLnJlZDIge1xuICBjb2xvcjogI0UwODM3NCAhaW1wb3J0YW50O1xufVxuXG4ubGlnaHQtcmVkIHtcbiAgY29sb3I6ICNGNzcgIWltcG9ydGFudDtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogIzQ3OEZDQSAhaW1wb3J0YW50O1xufVxuXG4ubGlnaHQtYmx1ZSB7XG4gIGNvbG9yOiAjOTNDQkY5ICFpbXBvcnRhbnQ7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjNjlBQTQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5saWdodC1ncmVlbiB7XG4gIGNvbG9yOiAjQjBEODc3ICFpbXBvcnRhbnQ7XG59XG5cbi5vcmFuZ2Uge1xuICBjb2xvcjogI0ZGODkyQSAhaW1wb3J0YW50O1xufVxuXG4ub3JhbmdlMiB7XG4gIGNvbG9yOiAjRkVCOTAyICFpbXBvcnRhbnQ7XG59XG5cbi5saWdodC1vcmFuZ2Uge1xuICBjb2xvcjogI0ZDQUM2RiAhaW1wb3J0YW50O1xufVxuXG4ucHVycGxlIHtcbiAgY29sb3I6ICNBMDY5QzMgIWltcG9ydGFudDtcbn1cblxuLnBpbmsge1xuICBjb2xvcjogI0M2Njk5RiAhaW1wb3J0YW50O1xufVxuXG4ucGluazIge1xuICBjb2xvcjogI0Q2NDg3RSAhaW1wb3J0YW50O1xufVxuXG4uYnJvd24ge1xuICBjb2xvcjogYnJvd24gIWltcG9ydGFudDtcbn1cblxuLmdyZXkge1xuICBjb2xvcjogIzc3NyAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/secured/profile/profile.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/secured/profile/profile.component.ts ***!
    \******************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppSecuredProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/auth-service.service */
    "./src/services/auth-service.service.ts"); // Local imports


    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(authservice, modalService) {
        _classCallCheck(this, ProfileComponent);

        this.authservice = authservice;
        this.modalService = modalService;
        this.user = {
          email: '',
          password: ''
        };
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserProfile();
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var userProfile;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.authservice.getUserProfile();

                  case 2:
                    userProfile = _context5.sent;
                    this.user = userProfile.user;

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "editProfile",
        value: function editProfile(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var response;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.authservice.updateUserProfile(user);

                  case 2:
                    response = _context6.sent;

                    if (response.status = 200) {
                      window.location.reload();
                    }

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "open",
        value: function open(content) {
          this.modalService.open(content);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/secured/profile/profile.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/secured/tour-itenary/tour-itenary.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/secured/tour-itenary/tour-itenary.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecuredTourItenaryTourItenaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".yaga-map {\n  min-height: 260px;\n}\n\n.input-group-text.fixed-space {\n  min-width: 110px;\n}\n\n.footer {\n  margin-top: 5em;\n}\n\n.footer span a {\n  padding-right: 1em;\n}\n\n.map {\n  margin-bottom: 2em;\n}\n\nul.timeline {\n  list-style-type: none;\n  position: relative;\n}\n\nul.timeline:before {\n  content: \" \";\n  background: #d4d9df;\n  display: inline-block;\n  position: absolute;\n  left: 29px;\n  width: 2px;\n  height: 100%;\n  z-index: 400;\n}\n\nul.timeline > li {\n  margin: 20px 0;\n  padding-left: 20px;\n}\n\nul.timeline > li:before {\n  content: \" \";\n  background: white;\n  display: inline-block;\n  position: absolute;\n  border-radius: 50%;\n  border: 3px solid #22c0e8;\n  left: 20px;\n  width: 20px;\n  height: 20px;\n  z-index: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvc2FuZGJveC9tc2NfcHJvamVjdC9jb2RlL2JyYW5jaGVzL2FwcC9jbGllbnQvY2l0eVRvdXJQbGFubmVyL3NyYy9hcHAvc2VjdXJlZC90b3VyLWl0ZW5hcnkvdG91ci1pdGVuYXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN1cmVkL3RvdXItaXRlbmFyeS90b3VyLWl0ZW5hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtBQ0FKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9zZWN1cmVkL3RvdXItaXRlbmFyeS90b3VyLWl0ZW5hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXAgY3NzXG4ueWFnYS1tYXAge1xuICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xufVxuLmlucHV0LWdyb3VwLXRleHQuZml4ZWQtc3BhY2Uge1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG59XG5cbi5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDVlbTtcbn1cbi5mb290ZXIgc3BhbiBhe1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cblxuLm1hcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG4vLyBsaXN0IGNzc1xudWwudGltZWxpbmUge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG51bC50aW1lbGluZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBiYWNrZ3JvdW5kOiAjZDRkOWRmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjlweDtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA0MDA7XG59XG51bC50aW1lbGluZSA+IGxpIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG51bC50aW1lbGluZSA+IGxpOmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyMmMwZTg7XG4gICAgbGVmdDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogNDAwO1xufVxuIiwiLnlhZ2EtbWFwIHtcbiAgbWluLWhlaWdodDogMjYwcHg7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0LmZpeGVkLXNwYWNlIHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cblxuLmZvb3RlciBzcGFuIGEge1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG5cbi5tYXAge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbnVsLnRpbWVsaW5lIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnVsLnRpbWVsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjZDRkOWRmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjlweDtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA0MDA7XG59XG5cbnVsLnRpbWVsaW5lID4gbGkge1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG51bC50aW1lbGluZSA+IGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzIyYzBlODtcbiAgbGVmdDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgei1pbmRleDogNDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/secured/tour-itenary/tour-itenary.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/secured/tour-itenary/tour-itenary.component.ts ***!
    \****************************************************************/

  /*! exports provided: TourItenaryComponent */

  /***/
  function srcAppSecuredTourItenaryTourItenaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TourItenaryComponent", function () {
      return TourItenaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var TourItenaryComponent =
    /*#__PURE__*/
    function () {
      function TourItenaryComponent(router, modalService, elRef) {
        _classCallCheck(this, TourItenaryComponent);

        this.router = router;
        this.modalService = modalService;
        this.tourItinerary = {};
        this.elRef = elRef;
      }

      _createClass(TourItenaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // add meals to tourItinerary and poof!
          // remove distance calculation and use only show directions
          this.tourReady = false;
          var itineraryData = this.router.getCurrentNavigation().extras.state.data;
          this.meals = this.router.getCurrentNavigation().extras.state.meals;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.meals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var meal = _step.value;
              itineraryData.splice(meal['index'], 0, meal);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.tourReady = true;
          this.tourItinerary = itineraryData;
        }
      }, {
        key: "open",
        value: function open(content) {
          this.modalService.open(content);
        }
      }, {
        key: "getDirectionsUrl",
        value: function getDirectionsUrl(currentIndex, allItems) {
          var start = allItems[currentIndex - 1].venue.location;
          var end = allItems[currentIndex].venue.location;
          var googleMapsApiUrl = 'https://www.google.com/maps/dir/?api=1';
          return "".concat(googleMapsApiUrl, "&origin=").concat(start.lat, ",").concat(start.lng, "&destination=").concat(end.lat, ",").concat(end.lng);
        }
      }, {
        key: "endTour",
        value: function endTour() {
          this.router.navigate(['home'], {
            state: {
              data: {
                endTour: true
              }
            }
          });
        }
      }, {
        key: "getImageUrl",
        value: function getImageUrl(photo) {
          return photo.prefix && photo.suffix ? "".concat(photo.prefix).concat(photo.width, "x").concat(photo.height).concat(photo.suffix) : '';
        }
      }, {
        key: "getFormattedAddress",
        value: function getFormattedAddress(formattedAddress) {
          return formattedAddress.join(', ');
        }
      }]);

      return TourItenaryComponent;
    }();

    TourItenaryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    TourItenaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tour-itenary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tour-itenary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secured/tour-itenary/tour-itenary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tour-itenary.component.scss */
      "./src/app/secured/tour-itenary/tour-itenary.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], TourItenaryComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: API_URL, environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_URL", function () {
      return API_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    // export const API_URL = 'http://localhost:5000';
    // Mobile API URL


    var API_URL = 'http://10.0.2.2:5000';
    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/pipes/format-title.pipe.ts":
  /*!****************************************!*\
    !*** ./src/pipes/format-title.pipe.ts ***!
    \****************************************/

  /*! exports provided: FormatTitlePipe */

  /***/
  function srcPipesFormatTitlePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatTitlePipe", function () {
      return FormatTitlePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormatTitlePipe =
    /*#__PURE__*/
    function () {
      function FormatTitlePipe() {
        _classCallCheck(this, FormatTitlePipe);
      }

      _createClass(FormatTitlePipe, [{
        key: "transform",
        value: function transform(title) {
          var result = title.replace(/([A-Z])/g, ' $1');
          var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
          return finalResult;
        }
      }]);

      return FormatTitlePipe;
    }();

    FormatTitlePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'formatTitle'
    })], FormatTitlePipe);
    /***/
  },

  /***/
  "./src/services/api-service.service.ts":
  /*!*********************************************!*\
    !*** ./src/services/api-service.service.ts ***!
    \*********************************************/

  /*! exports provided: ApiServiceService */

  /***/
  function srcServicesApiServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiServiceService", function () {
      return ApiServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var ApiServiceService =
    /*#__PURE__*/
    function () {
      function ApiServiceService(http) {
        _classCallCheck(this, ApiServiceService);

        this.http = http;
      }

      _createClass(ApiServiceService, [{
        key: "createTour",
        value: function createTour(userPreference) {
          var user = JSON.parse(localStorage.getItem('user'));
          var authHeader = {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Authorization': user.token
            }
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/tour/"), userPreference, authHeader).toPromise().then(function (response) {
            return response;
          }).catch(function (error) {
            console.log(error);
            return false;
          });
        }
      }]);

      return ApiServiceService;
    }();

    ApiServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiServiceService);
    /***/
  },

  /***/
  "./src/services/auth-service.service.ts":
  /*!**********************************************!*\
    !*** ./src/services/auth-service.service.ts ***!
    \**********************************************/

  /*! exports provided: AuthServiceService */

  /***/
  function srcServicesAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthServiceService", function () {
      return AuthServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': ''
      }
    };

    var AuthServiceService =
    /*#__PURE__*/
    function () {
      function AuthServiceService(http, platform) {
        _classCallCheck(this, AuthServiceService);

        this.http = http;
        this.platform = platform;
        var loggedInUser = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(AuthServiceService, [{
        key: "isUserAuthenticated",
        value: function isUserAuthenticated() {
          return true;
        }
      }, {
        key: "getUserFromStorage",
        value: function getUserFromStorage() {
          return JSON.parse(localStorage.getItem('user'));
        }
      }, {
        key: "authHttpOption",
        value: function authHttpOption(httpOptions) {
          var authHeaders = httpOptions;
          var user = JSON.parse(localStorage.getItem('user'));
          return authHeaders['headers']['Authorization'] = user.token;
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var user = JSON.parse(localStorage.getItem('user'));
          var authHeader = {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Authorization': user.token
            }
          };
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_URL"], "/users/profile "), authHeader).toPromise();
        }
      }, {
        key: "loginUser",
        value: function loginUser(loginCredentials) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_URL"], "/users/login "), loginCredentials, httpOptions).toPromise().then(function (response) {
            if (response.success) {
              localStorage.setItem("user", JSON.stringify(response));
              return true;
            }
          }).catch(function (error) {
            console.log(error, 'error logging user in');
            return false;
          });
        }
      }, {
        key: "createUser",
        value: function createUser(userCredentials) {
          var _this6 = this;

          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_URL"], "/users/ "), userCredentials, httpOptions).toPromise().then(function (response) {
            if (response.status == 200 && response.response.id) {
              return _this6.loginUser({
                email: userCredentials.email,
                password: userCredentials.password
              });
            }
          }).catch(function (error) {
            console.log(error, 'error creating user');
            return false;
          });
        }
      }, {
        key: "updateUserProfile",
        value: function updateUserProfile(userData) {
          var user = JSON.parse(localStorage.getItem('user'));
          var authHeader = {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Authorization': user.token
            }
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_URL"], "/users/").concat(userData.id, " "), userData, authHeader).toPromise();
        }
      }]);

      return AuthServiceService;
    }();

    AuthServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    AuthServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], AuthServiceService);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Applications/sandbox/msc_project/code/branches/app/client/cityTourPlanner/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map