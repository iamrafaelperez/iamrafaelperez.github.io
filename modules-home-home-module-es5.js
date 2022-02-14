function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-header></app-header>\n -->\n<div class=\"page-component\">\n\n    <div class=\"home\">\n        <div class=\"home-header\">\n            <app-toggle-menu></app-toggle-menu>\n            <div class=\"logo\"></div>\n        </div>\n        <div class=\"greeting\">\n            <div>\n                Hello, I am\n            </div>\n            <div>\n                Rafael Perez\n            </div>\n        </div>\n        <div class=\"home-footer\">\n            <!-- <button></button> -->\n            <div class=\"title\">\n                <div>Software Engineer</div>\n            </div>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/home/home-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/home/home-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppModulesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
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


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/modules/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/home/home.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/modules/home/home.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Media Queries in Mobile First Approach */\n/* Media Queries in Web First Approach */\n.page-component {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem !important;\n}\n.page-component .home {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.page-component .home .home-header {\n  display: flex;\n}\n.page-component .home .home-header app-toggle-menu {\n  width: 3rem;\n  height: 100%;\n}\n.page-component .home .home-header .logo {\n  flex: 1;\n  width: 8rem;\n  height: 4.75rem;\n  background-image: url(\"/assets/images/logo-dark.png\");\n  background-size: contain;\n  background-position: right center;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transform: translate(-50%) scale(2);\n  -webkit-animation: show-logo 250ms linear 1s forwards;\n          animation: show-logo 250ms linear 1s forwards;\n}\n.page-component .home .greeting {\n  flex: 1;\n  padding: 4rem 0 7rem;\n  text-align: center;\n}\n.page-component .home .greeting :first-child {\n  font-size: 1.25rem;\n  /* width: 0; */\n  margin: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  /* \n\n  animation: say-hello 2s linear 1s forwards; */\n}\n.page-component .home .greeting :last-child {\n  font-size: 5rem;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.page-component .home .home-footer {\n  position: relative;\n  overflow: hidden;\n  height: 7rem;\n  border-left: 0.15rem solid var(--black);\n  /* \n  animation: border-blink 2s infinite; */\n  align-self: flex-end;\n  width: 100%;\n  height: 0;\n  -webkit-animation: line-grow 250ms ease-in 1s forwards, line-fade 250ms ease-in 2s forwards;\n          animation: line-grow 250ms ease-in 1s forwards, line-fade 250ms ease-in 2s forwards;\n}\n.page-component .home .home-footer .title {\n  font-size: 1.75rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  white-space: nowrap;\n  opacity: 0;\n  padding: 1rem 0 0.5rem 3rem;\n  border-bottom: 0.15rem solid var(--black);\n  overflow: hidden;\n  -webkit-animation: show-borderline 500ms linear 1500ms forwards;\n          animation: show-borderline 500ms linear 1500ms forwards;\n}\n.page-component .home .home-footer .title div {\n  text-align: right;\n  transform: translateY(125%);\n  -webkit-animation: show-title 250ms linear 2s forwards;\n          animation: show-title 250ms linear 2s forwards;\n}\n@-webkit-keyframes show-logo {\n  from {\n    opacity: 0;\n    transform: translate(-50%) scale(2);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0) scale(1);\n  }\n}\n@keyframes show-logo {\n  from {\n    opacity: 0;\n    transform: translate(-50%) scale(2);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0) scale(1);\n  }\n}\n@-webkit-keyframes say-hello {\n  from {\n    transform: scale(1.5);\n    width: 0;\n  }\n  75% {\n    transform: scale(1.5);\n    width: 75%;\n  }\n  to {\n    transform: scale(1);\n    width: 100%;\n  }\n}\n@keyframes say-hello {\n  from {\n    transform: scale(1.5);\n    width: 0;\n  }\n  75% {\n    transform: scale(1.5);\n    width: 75%;\n  }\n  to {\n    transform: scale(1);\n    width: 100%;\n  }\n}\n@-webkit-keyframes show-borderline {\n  from {\n    opacity: 1;\n    transform: translateX(-100%);\n  }\n  75% {\n    opacity: 1;\n    transform: translateX(-50%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes show-borderline {\n  from {\n    opacity: 1;\n    transform: translateX(-100%);\n  }\n  75% {\n    opacity: 1;\n    transform: translateX(-50%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@-webkit-keyframes show-title {\n  from {\n    opacity: 0;\n    transform: translateY(125%);\n  }\n  50% {\n    opacity: 0.25;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes show-title {\n  from {\n    opacity: 0;\n    transform: translateY(125%);\n  }\n  50% {\n    opacity: 0.25;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes line-grow {\n  from {\n    height: 0;\n  }\n  to {\n    height: 5rem;\n  }\n}\n@keyframes line-grow {\n  from {\n    height: 0;\n  }\n  to {\n    height: 5rem;\n  }\n}\n@-webkit-keyframes line-fade {\n  from {\n    opacity: var(--black);\n  }\n  to {\n    border-color: var(--transparent);\n  }\n}\n@keyframes line-fade {\n  from {\n    opacity: var(--black);\n  }\n  to {\n    border-color: var(--transparent);\n  }\n}\n@media (min-width : 480px) {\n  .home .home-footer .title {\n    font-size: 2rem !important;\n  }\n}\n@media (min-width : 992px) {\n  app-toggle-menu {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL0Y6XFxGaWxlc1xcRCBEcml2ZVxcU2l0ZXNcXGlhbXJhZmFlbHBlcmV6L3NyY1xcYXBwXFxzdHlsZXNcXGJyZWFrcG9pbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL0Y6XFxGaWxlc1xcRCBEcml2ZVxcU2l0ZXNcXGlhbXJhZmFlbHBlcmV6L3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBQTtBQXFDQSx3Q0FBQTtBQ25DQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUNDSjtBRENJO0VBQ0ksT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDUjtBRENRO0VBQ0ksYUFBQTtBQ0NaO0FEQ1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NoQjtBREVZO0VBQ0ksT0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFFQSxxREFBQTtVQUFBLDZDQUFBO0FDRGhCO0FES1E7RUFDSSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0haO0FES1k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUFvQjs7K0NBQUE7QUNBcEM7QURJWTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDRmhCO0FETVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQXdDO3dDQUFBO0VBRXhDLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSwyRkFBQTtVQUFBLG1GQUFBO0FDSlo7QURPWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUVBLCtEQUFBO1VBQUEsdURBQUE7QUNOaEI7QURRZ0I7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0RBQUE7VUFBQSw4Q0FBQTtBQ05wQjtBRFlBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsbUNBQUE7RUNUTjtFRFdFO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0VDVE47QUFDRjtBRENBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsbUNBQUE7RUNUTjtFRFdFO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0VDVE47QUFDRjtBRFlBO0VBQ0k7SUFDSSxxQkFBQTtJQUNBLFFBQUE7RUNWTjtFRFlFO0lBQ0kscUJBQUE7SUFDQSxVQUFBO0VDVk47RURZRTtJQUNJLG1CQUFBO0lBQ0EsV0FBQTtFQ1ZOO0FBQ0Y7QURGQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxRQUFBO0VDVk47RURZRTtJQUNJLHFCQUFBO0lBQ0EsVUFBQTtFQ1ZOO0VEWUU7SUFDSSxtQkFBQTtJQUNBLFdBQUE7RUNWTjtBQUNGO0FEYUE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQ1hOO0VEYUU7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUNYTjtFRGFFO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VDWE47QUFDRjtBRERBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUNYTjtFRGFFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VDWE47RURhRTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFQ1hOO0FBQ0Y7QURjQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VDWk47RURjRTtJQUNJLGFBQUE7RUNaTjtFRGNFO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VDWk47QUFDRjtBRENBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUNaTjtFRGNFO0lBQ0ksYUFBQTtFQ1pOO0VEY0U7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUNaTjtBQUNGO0FEZUE7RUFDSTtJQUNJLFNBQUE7RUNiTjtFRGVFO0lBQ0ksWUFBQTtFQ2JOO0FBQ0Y7QURPQTtFQUNJO0lBQ0ksU0FBQTtFQ2JOO0VEZUU7SUFDSSxZQUFBO0VDYk47QUFDRjtBRGdCQTtFQUNJO0lBQ0kscUJBQUE7RUNkTjtFRGdCRTtJQUNJLGdDQUFBO0VDZE47QUFDRjtBRFFBO0VBQ0k7SUFDSSxxQkFBQTtFQ2ROO0VEZ0JFO0lBQ0ksZ0NBQUE7RUNkTjtBQUNGO0FGdkhRO0VDMklJO0lBQ0ksMEJBQUE7RUNqQmQ7QUFDRjtBRmxJUTtFQ3lKSjtJQUNJLGFBQUE7RUNwQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVkaWEgUXVlcmllcyBpbiBNb2JpbGUgRmlyc3QgQXBwcm9hY2ggKi9cclxuXHJcbkBtaXhpbiBtaW4tYnJlYWtwb2ludCgkc2l6ZSkge1xyXG5cclxuICAgICR4eGw6ICcobWluLXdpZHRoIDogMTgwMHB4KSc7XHJcbiAgICAkeGw6ICcobWluLXdpZHRoIDogMTQ0MHB4KSc7XHJcbiAgICAkbGc6ICcobWluLXdpZHRoIDogMTIwMHB4KSc7XHJcbiAgICAkbWQ6ICcobWluLXdpZHRoIDogOTkycHgpJztcclxuICAgICRzbTogJyhtaW4td2lkdGggOiA3NjhweCknO1xyXG4gICAgJHhzOiAnKG1pbi13aWR0aCA6IDQ4MHB4KSc7XHJcblxyXG4gICAgJHdlYjogJyhtaW4td2lkdGggOiA4MDBweCknO1xyXG5cclxuICAgIEBpZiAkc2l6ZSA9PSB4eGwge1xyXG4gICAgICAgIEBtZWRpYSAjeyR4eGx9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHhsIHtcclxuICAgICAgICBAbWVkaWEgI3skeGx9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IGxnIHtcclxuICAgICAgICBAbWVkaWEgI3skbGd9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IG1kIHtcclxuICAgICAgICBAbWVkaWEgI3skbWR9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHNtIHtcclxuICAgICAgICBAbWVkaWEgI3skc219ICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XHJcbiAgICAgICAgQG1lZGlhICN7JHhzfSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0gd2ViIHtcclxuICAgICAgICBAbWVkaWEgI3skd2VifSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogTWVkaWEgUXVlcmllcyBpbiBXZWIgRmlyc3QgQXBwcm9hY2ggKi9cclxuXHJcbkBtaXhpbiBtYXgtYnJlYWtwb2ludCgkc2l6ZSkge1xyXG5cclxuICAgICR4eGw6ICcobWF4LXdpZHRoIDogMTgwMHB4KSc7XHJcbiAgICAkeGw6ICcobWF4LXdpZHRoIDogMTQ0MHB4KSc7XHJcbiAgICAkbGc6ICcobWF4LXdpZHRoIDogMTIwMHB4KSc7XHJcbiAgICAkbWQ6ICcobWF4LXdpZHRoIDogOTkycHgpJztcclxuICAgICRzbTogJyhtYXgtd2lkdGggOiA3NjhweCknO1xyXG4gICAgJHhzOiAnKG1heC13aWR0aCA6IDQ4MHB4KSc7XHJcblxyXG4gICAgJHdlYjogJyhtYXgtd2lkdGggOiA4MDApJztcclxuXHJcbiAgICBAaWYgJHNpemUgPT0geHhsIHtcclxuICAgICAgICBAbWVkaWEgI3skeHhsfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSB4bCB7XHJcbiAgICAgICAgQG1lZGlhICN7JHhsfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XHJcbiAgICAgICAgQG1lZGlhICN7JGxnfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSBtZCB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1kfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XHJcbiAgICAgICAgQG1lZGlhICN7JHNtfSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0geHMge1xyXG4gICAgICAgIEBtZWRpYSAjeyR4c30gIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHdlYiB7XHJcbiAgICAgICAgQG1lZGlhICN7JHdlYn0gIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9icmVha3BvaW50LnNjc3MnO1xyXG5cclxuLnBhZ2UtY29tcG9uZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAuaG9tZSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICAgICAgLmhvbWUtaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIGFwcC10b2dnbGUtbWVudSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0Ljc1cmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9sb2dvLWRhcmsucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpIHNjYWxlKDIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvdy1sb2dvIDI1MG1zIGxpbmVhciAxcyBmb3J3YXJkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5ncmVldGluZyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRyZW0gMCA3cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICAgICAgOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgIC8qIHdpZHRoOiAwOyAqL1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7LyogXHJcblxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzYXktaGVsbG8gMnMgbGluZWFyIDFzIGZvcndhcmRzOyAqL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5ob21lLWZvb3RlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMC4xNXJlbSBzb2xpZCB2YXIoLS1ibGFjayk7LyogXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYm9yZGVyLWJsaW5rIDJzIGluZmluaXRlOyAqL1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbGluZS1ncm93IDI1MG1zIGVhc2UtaW4gMXMgZm9yd2FyZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtZmFkZSAyNTBtcyBlYXNlLWluIDJzIGZvcndhcmRzO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMCAwLjVyZW0gM3JlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgdmFyKC0tYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHNob3ctYm9yZGVybGluZSA1MDBtcyBsaW5lYXIgMTUwMG1zIGZvcndhcmRzO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvdy10aXRsZSAyNTBtcyBsaW5lYXIgMnMgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzaG93LWxvZ28ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKSBzY2FsZSgyKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApIHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNheS1oZWxsbyB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdy1ib3JkZXJsaW5lIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdy10aXRsZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjUlKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsaW5lLWdyb3cge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsaW5lLWZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tYmxhY2spO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtaW4tYnJlYWtwb2ludCh4cykge1xyXG4gICAgLmhvbWUge1xyXG4gICAgICAgIC5ob21lLWZvb3RlciB7XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWluLWJyZWFrcG9pbnQobWQpIHtcclxuICAgIGFwcC10b2dnbGUtbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSIsIi8qIE1lZGlhIFF1ZXJpZXMgaW4gTW9iaWxlIEZpcnN0IEFwcHJvYWNoICovXG4vKiBNZWRpYSBRdWVyaWVzIGluIFdlYiBGaXJzdCBBcHByb2FjaCAqL1xuLnBhZ2UtY29tcG9uZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW0gMnJlbSAhaW1wb3J0YW50O1xufVxuLnBhZ2UtY29tcG9uZW50IC5ob21lIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBhZ2UtY29tcG9uZW50IC5ob21lIC5ob21lLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnZS1jb21wb25lbnQgLmhvbWUgLmhvbWUtaGVhZGVyIGFwcC10b2dnbGUtbWVudSB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucGFnZS1jb21wb25lbnQgLmhvbWUgLmhvbWUtaGVhZGVyIC5sb2dvIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogNC43NXJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby1kYXJrLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpIHNjYWxlKDIpO1xuICBhbmltYXRpb246IHNob3ctbG9nbyAyNTBtcyBsaW5lYXIgMXMgZm9yd2FyZHM7XG59XG4ucGFnZS1jb21wb25lbnQgLmhvbWUgLmdyZWV0aW5nIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogNHJlbSAwIDdyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWdlLWNvbXBvbmVudCAuaG9tZSAuZ3JlZXRpbmcgOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAvKiB3aWR0aDogMDsgKi9cbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAvKiBcblxuICBhbmltYXRpb246IHNheS1oZWxsbyAycyBsaW5lYXIgMXMgZm9yd2FyZHM7ICovXG59XG4ucGFnZS1jb21wb25lbnQgLmhvbWUgLmdyZWV0aW5nIDpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYWdlLWNvbXBvbmVudCAuaG9tZSAuaG9tZS1mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogN3JlbTtcbiAgYm9yZGVyLWxlZnQ6IDAuMTVyZW0gc29saWQgdmFyKC0tYmxhY2spO1xuICAvKiBcbiAgYW5pbWF0aW9uOiBib3JkZXItYmxpbmsgMnMgaW5maW5pdGU7ICovXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBhbmltYXRpb246IGxpbmUtZ3JvdyAyNTBtcyBlYXNlLWluIDFzIGZvcndhcmRzLCBsaW5lLWZhZGUgMjUwbXMgZWFzZS1pbiAycyBmb3J3YXJkcztcbn1cbi5wYWdlLWNvbXBvbmVudCAuaG9tZSAuaG9tZS1mb290ZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogMXJlbSAwIDAuNXJlbSAzcmVtO1xuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkIHZhcigtLWJsYWNrKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzaG93LWJvcmRlcmxpbmUgNTAwbXMgbGluZWFyIDE1MDBtcyBmb3J3YXJkcztcbn1cbi5wYWdlLWNvbXBvbmVudCAuaG9tZSAuaG9tZS1mb290ZXIgLnRpdGxlIGRpdiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTI1JSk7XG4gIGFuaW1hdGlvbjogc2hvdy10aXRsZSAyNTBtcyBsaW5lYXIgMnMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2hvdy1sb2dvIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKSBzY2FsZSgyKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzYXktaGVsbG8ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBzaG93LWJvcmRlcmxpbmUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgNzUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hvdy10aXRsZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyNSUpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGluZS1ncm93IHtcbiAgZnJvbSB7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIHRvIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGluZS1mYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogdmFyKC0tYmxhY2spO1xuICB9XG4gIHRvIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGggOiA0ODBweCkge1xuICAuaG9tZSAuaG9tZS1mb290ZXIgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGggOiA5OTJweCkge1xuICBhcHAtdG9nZ2xlLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/modules/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/modules/home/home.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/home/home.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/modules/home/home-routing.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
    })], HomeModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-home-home-module-es5.js.map