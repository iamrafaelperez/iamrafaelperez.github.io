function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contact-contact-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\"></app-header>\n<div class=\"page-component\">\n    <div class=\"contact\">\n        <div class=\"information\">\n            <button class=\"font-n\" (click)=\"goto('https://www.linkedin.com/in/iamrafaelperez/')\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\">\n                    <path d=\"M27.857,2.25H2.136A2.152,2.152,0,0,0,0,4.413V30.087A2.152,2.152,0,0,0,2.136,32.25H27.857A2.158,2.158,0,0,0,30,30.087V4.413A2.158,2.158,0,0,0,27.857,2.25ZM9.067,27.964H4.621V13.647H9.074V27.964ZM6.844,11.692A2.578,2.578,0,1,1,9.422,9.114a2.579,2.579,0,0,1-2.578,2.578ZM25.734,27.964H21.288V21c0-1.661-.033-3.8-2.31-3.8-2.317,0-2.672,1.808-2.672,3.676v7.085H11.859V13.647h4.266V15.6h.06a4.683,4.683,0,0,1,4.212-2.31c4.5,0,5.337,2.967,5.337,6.824Z\" transform=\"translate(0 -2.25)\"/>\n                </svg>\n                linkedin.com/in/iamrafaelperez\n            </button>\n            <button class=\"font-n\" (click)=\"goto('mailto:iamperezrafael@gmail.com')\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 20\">\n                    <path d=\"M.072,22.3V5.839q0-.029.087-.543l9.807,8.286L.188,22.868A2.4,2.4,0,0,1,.072,22.3Zm1.3-18.143a1.261,1.261,0,0,1,.492-.086H28.278a1.657,1.657,0,0,1,.521.086l-9.836,8.314-1.3,1.029-2.575,2.086L12.512,13.5l-1.3-1.029ZM1.4,23.982l9.865-9.343L15.086,17.7l3.819-3.057,9.865,9.343a1.4,1.4,0,0,1-.492.086H1.866a1.325,1.325,0,0,1-.463-.086Zm18.8-10.4L29.985,5.3a1.686,1.686,0,0,1,.087.543V22.3a2.165,2.165,0,0,1-.087.571Z\" transform=\"translate(-0.072 -4.068)\"/>\n                </svg>\n                iamperezrafael@gmail.com                  \n            </button>\n            <button class=\"font-n\" (click)=\"goto('https://github.com/iamrafaelperez')\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\">\n                    <path d=\"M26.786,2.25H3.214A3.215,3.215,0,0,0,0,5.464V29.036A3.215,3.215,0,0,0,3.214,32.25H26.786A3.215,3.215,0,0,0,30,29.036V5.464A3.215,3.215,0,0,0,26.786,2.25ZM18.569,27.944c-.563.1-.77-.248-.77-.536,0-.362.013-2.21.013-3.7a2.609,2.609,0,0,0-.757-2.056c2.478-.275,5.089-.616,5.089-4.9A3.438,3.438,0,0,0,21,14.143a4.188,4.188,0,0,0-.114-3.013c-.931-.288-3.06,1.2-3.06,1.2a10.534,10.534,0,0,0-5.571,0s-2.129-1.487-3.06-1.2a4.156,4.156,0,0,0-.114,3.013,3.363,3.363,0,0,0-1.045,2.612c0,4.259,2.5,4.621,4.975,4.9a2.427,2.427,0,0,0-.71,1.493,2.35,2.35,0,0,1-3.234-.931,2.333,2.333,0,0,0-1.708-1.145c-1.085-.013-.074.683-.074.683.723.335,1.232,1.621,1.232,1.621.65,1.989,3.757,1.319,3.757,1.319,0,.931.013,2.444.013,2.719s-.2.636-.77.536A11.11,11.11,0,0,1,4,17.344,10.627,10.627,0,0,1,14.853,6.529,10.864,10.864,0,0,1,25.982,17.344,11.008,11.008,0,0,1,18.569,27.944ZM12,23.853c-.127.027-.248-.027-.261-.114s.074-.187.2-.214.248.04.261.127S12.134,23.826,12,23.853Zm-.636-.06c0,.087-.1.161-.234.161s-.248-.06-.248-.161.1-.161.234-.161S11.364,23.692,11.364,23.792Zm-.917-.074c-.027.087-.161.127-.275.087s-.214-.127-.187-.214.161-.127.275-.1C10.393,23.531,10.48,23.632,10.446,23.719Zm-.824-.362c-.06.074-.187.06-.288-.04s-.127-.214-.06-.275.188-.06.288.04S9.683,23.3,9.623,23.357Zm-.609-.609c-.06.04-.174,0-.248-.1s-.074-.214,0-.261.188-.013.248.087a.2.2,0,0,1,0,.275Zm-.435-.65c-.06.06-.161.027-.234-.04-.074-.087-.087-.187-.027-.234s.161-.027.234.04C8.625,21.951,8.638,22.051,8.578,22.1Zm-.449-.5a.126.126,0,0,1-.187.027c-.087-.04-.127-.114-.1-.174a.158.158,0,0,1,.187-.027C8.116,21.475,8.156,21.549,8.129,21.6Z\" transform=\"translate(0 -2.25)\" />\n                </svg>\n                github.com/iamrafaelperez              \n            </button>\n            <button class=\"font-n\" (click)=\"goto('https://www.facebook.com/iamrafaelperez')\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\">\n                    <path d=\"M26.786,2.25H3.214A3.214,3.214,0,0,0,0,5.464V29.036A3.214,3.214,0,0,0,3.214,32.25h9.191v-10.2H8.186v-4.8h4.219V13.591c0-4.162,2.478-6.461,6.273-6.461a25.558,25.558,0,0,1,3.718.324v4.085H20.3a2.4,2.4,0,0,0-2.707,2.594V17.25H22.2l-.737,4.8H17.595v10.2h9.191A3.214,3.214,0,0,0,30,29.036V5.464A3.214,3.214,0,0,0,26.786,2.25Z\" transform=\"translate(0 -2.25)\" />\n                </svg>  \n                facebook.com/iamrafaelperez                              \n            </button>\n        </div>\n        <form class=\"form\" [formGroup]=\"contactForm\">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <label class=\"font-xs\" for=\"firstName\">First Name</label>\n                    <input formControlName=\"firstName\" class=\"input font-sm\" id=\"firstName\" type=\"text\" placeholder=\"Enter your first name\" maxlength=\"50\">\n                    <span *ngIf=\"hasInvalidTouchedDirty('firstName', 'required')\" class=\"error font-xs\">First name is required</span>\n                    <span *ngIf=\"hasInvalidTouchedDirty('firstName', 'maxlength')\" class=\"error font-xs\">50 characters only</span>\n                </div>\n                <div class=\"input-group\">\n                    <label class=\"font-xs\" for=\"lastName\">Last Name</label>\n                    <input formControlName=\"lastName\" class=\"input font-sm\" id=\"lastName\" type=\"text\" placeholder=\"Enter your last name\" maxlength=\"50\">\n                    <span *ngIf=\"hasInvalidTouchedDirty('lastName', 'required')\" class=\"error font-xs\">Last name is required</span>\n                    <span *ngIf=\"hasInvalidTouchedDirty('lastName', 'maxlength')\" class=\"error font-xs\">50 characters only</span>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <label class=\"font-xs\" for=\"email\">Email</label>\n                    <input formControlName=\"email\" class=\"input font-sm\" id=\"email\" type=\"email\" placeholder=\"Enter your email\" maxlength=\"50\">\n                    <span *ngIf=\"hasInvalidTouchedDirty('email', 'required')\" class=\"error font-xs\">Email is required</span>\n                    <span *ngIf=\"hasInvalidTouchedDirty('email', 'maxlength')\" class=\"error font-xs\">50 characters only</span>\n                </div>\n                <div class=\"input-group\">\n                    <label class=\"font-xs\" for=\"contactNo\">Contact No. (preferred mobile)</label>\n                    <input formControlName=\"contactNo\" class=\"input font-sm\" id=\"contactNo\" type=\"text\" placeholder=\"Enter your contact no.\" maxlength=\"25\">\n                    <span *ngIf=\"hasInvalidTouchedDirty('contactNo', 'required')\" class=\"error font-xs\">Contact no is required</span>\n                    <span *ngIf=\"hasInvalidTouchedDirty('contactNo', 'maxlength')\" class=\"error font-xs\">25 characters only</span>\n                </div>\n            </div>\n            <div class=\"input-group\">\n                <label class=\"font-xs\" for=\"message\">Message ({{ getValue('message')?.length || 0 }}/750)</label>\n                <textarea formControlName=\"message\" class=\"input font-sm\" id=\"message\" cols=\"10\" rows=\"5\" placeholder=\"Enter your message\" maxlength=\"750\"></textarea>\n                <span *ngIf=\"hasInvalidTouchedDirty('message', 'required')\" class=\"error font-xs\">Message is required</span>\n                <span *ngIf=\"hasInvalidTouchedDirty('message', 'maxlength')\" class=\"error font-xs\">750 characters only</span>\n            </div>\n\n            <button class=\"button-sm button-primary\" (click)=\"send()\">Send</button>\n\n            <div class=\"not-available\">\n                <h2>Sorry, API Not Availble.</h2>\n                <p>Please sent message to my email. Thank you.</p>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/config/regex.ts":
  /*!*********************************!*\
    !*** ./src/app/config/regex.ts ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigRegexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      email: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
    };
    /***/
  },

  /***/
  "./src/app/modules/contact/contact-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/contact/contact-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ContactRoutingModule */

  /***/
  function srcAppModulesContactContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function () {
      return ContactRoutingModule;
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


    var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact.component */
    "./src/app/modules/contact/contact.component.ts");

    var routes = [{
      path: '',
      component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }];

    var ContactRoutingModule = function ContactRoutingModule() {
      _classCallCheck(this, ContactRoutingModule);
    };

    ContactRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/contact/contact.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/modules/contact/contact.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Media Queries in Mobile First Approach */\n/* Media Queries in Web First Approach */\n.contact {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n}\n.contact .information {\n  padding-top: 3rem;\n  max-width: 400px;\n}\n.contact .information button {\n  display: flex;\n  align-items: center;\n  margin: 1rem 1rem;\n}\n.contact .information button svg {\n  margin-right: 1rem;\n  width: 2rem;\n  border-radius: 0.25rem;\n}\n.contact .information button:hover {\n  color: var(--accent);\n}\n.contact .information button:hover svg {\n  box-shadow: var(--button-icon-black-shadow);\n}\n.contact .form {\n  max-width: 500px;\n  min-width: 20rem;\n  padding-top: 3rem;\n  display: grid;\n  position: relative;\n  /* .input-group {\n      display: grid;\n  } */\n}\n.contact .form .not-available {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  background-color: var(--black-50);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.contact .form .not-available h2,\n.contact .form .not-available p {\n  color: var(--white);\n  text-align: center;\n}\n.contact .form .input-group * {\n  width: 100%;\n  display: block;\n}\n.contact .form .input-group .error {\n  color: var(--danger);\n}\n.contact .form label,\n.contact .form .input {\n  margin-bottom: 0.2rem;\n}\n.contact .form .input:last-child {\n  margin-bottom: 0.5rem;\n}\n.contact .form .error {\n  margin-bottom: 0.5rem;\n}\n.contact .form button {\n  margin-top: 0.5rem;\n}\n.contact .form .form-group {\n  display: grid;\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n  grid-template-columns: 1fr;\n}\n@media (min-width : 768px) {\n  .contact {\n    grid-template-columns: 1fr 1fr;\n  }\n  .contact .form .form-group {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/* @media (min-width : 500px) {\n    .contact {\n        .information {\n            grid-template-columns: 1fr 1fr;\n        }\n    }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YWN0L0Y6XFxGaWxlc1xcRCBEcml2ZVxcU2l0ZXNcXGlhbXJhZmFlbHBlcmV6L3NyY1xcYXBwXFxzdHlsZXNcXGJyZWFrcG9pbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb250YWN0L0Y6XFxGaWxlc1xcRCBEcml2ZVxcU2l0ZXNcXGlhbXJhZmFlbHBlcmV6L3NyY1xcYXBwXFxtb2R1bGVzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBQTtBQXFDQSx3Q0FBQTtBQ25DQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDWjtBRENZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDaEI7QURFWTtFQUNJLG9CQUFBO0FDQWhCO0FERWdCO0VBR0ksMkNBQUE7QUNBcEI7QURNSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQXdEQTs7S0FBQTtBQ3pEUjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDRFo7QURHWTs7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0FDRGhCO0FET1k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0xoQjtBRFFZO0VBQ0ksb0JBQUE7QUNOaEI7QURVUTs7RUFFSSxxQkFBQTtBQ1JaO0FEV1E7RUFDSSxxQkFBQTtBQ1RaO0FEWVE7RUFDSSxxQkFBQTtBQ1ZaO0FEYVE7RUFDSSxrQkFBQTtBQ1haO0FEY1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7T0FBQSxrQkFBQTtFQUNBLDBCQUFBO0FDWlo7QUZ0RFE7RUM0RUo7SUFDSSw4QkFBQTtFQ2xCTjtFRG9CVTtJQUNJLDhCQUFBO0VDbEJkO0FBQ0Y7QUR1QkE7Ozs7OztHQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNZWRpYSBRdWVyaWVzIGluIE1vYmlsZSBGaXJzdCBBcHByb2FjaCAqL1xyXG5cclxuQG1peGluIG1pbi1icmVha3BvaW50KCRzaXplKSB7XHJcblxyXG4gICAgJHh4bDogJyhtaW4td2lkdGggOiAxODAwcHgpJztcclxuICAgICR4bDogJyhtaW4td2lkdGggOiAxNDQwcHgpJztcclxuICAgICRsZzogJyhtaW4td2lkdGggOiAxMjAwcHgpJztcclxuICAgICRtZDogJyhtaW4td2lkdGggOiA5OTJweCknO1xyXG4gICAgJHNtOiAnKG1pbi13aWR0aCA6IDc2OHB4KSc7XHJcbiAgICAkeHM6ICcobWluLXdpZHRoIDogNDgwcHgpJztcclxuXHJcbiAgICAkd2ViOiAnKG1pbi13aWR0aCA6IDgwMHB4KSc7XHJcblxyXG4gICAgQGlmICRzaXplID09IHh4bCB7XHJcbiAgICAgICAgQG1lZGlhICN7JHh4bH0geyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0geGwge1xyXG4gICAgICAgIEBtZWRpYSAjeyR4bH0geyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0gbGcge1xyXG4gICAgICAgIEBtZWRpYSAjeyRsZ30geyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0gbWQge1xyXG4gICAgICAgIEBtZWRpYSAjeyRtZH0geyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0gc20ge1xyXG4gICAgICAgIEBtZWRpYSAjeyRzbX0gIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHhzIHtcclxuICAgICAgICBAbWVkaWEgI3skeHN9ICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSB3ZWIge1xyXG4gICAgICAgIEBtZWRpYSAjeyR3ZWJ9ICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBNZWRpYSBRdWVyaWVzIGluIFdlYiBGaXJzdCBBcHByb2FjaCAqL1xyXG5cclxuQG1peGluIG1heC1icmVha3BvaW50KCRzaXplKSB7XHJcblxyXG4gICAgJHh4bDogJyhtYXgtd2lkdGggOiAxODAwcHgpJztcclxuICAgICR4bDogJyhtYXgtd2lkdGggOiAxNDQwcHgpJztcclxuICAgICRsZzogJyhtYXgtd2lkdGggOiAxMjAwcHgpJztcclxuICAgICRtZDogJyhtYXgtd2lkdGggOiA5OTJweCknO1xyXG4gICAgJHNtOiAnKG1heC13aWR0aCA6IDc2OHB4KSc7XHJcbiAgICAkeHM6ICcobWF4LXdpZHRoIDogNDgwcHgpJztcclxuXHJcbiAgICAkd2ViOiAnKG1heC13aWR0aCA6IDgwMCknO1xyXG5cclxuICAgIEBpZiAkc2l6ZSA9PSB4eGwge1xyXG4gICAgICAgIEBtZWRpYSAjeyR4eGx9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHhsIHtcclxuICAgICAgICBAbWVkaWEgI3skeGx9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IGxnIHtcclxuICAgICAgICBAbWVkaWEgI3skbGd9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IG1kIHtcclxuICAgICAgICBAbWVkaWEgI3skbWR9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHNtIHtcclxuICAgICAgICBAbWVkaWEgI3skc219ICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XHJcbiAgICAgICAgQG1lZGlhICN7JHhzfSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0gd2ViIHtcclxuICAgICAgICBAbWVkaWEgI3skd2VifSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzL2JyZWFrcG9pbnQuc2Nzcyc7XHJcblxyXG4uY29udGFjdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmluZm9ybWF0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDFyZW07XHJcblxyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiB2YXIoLS1idXR0b24taWNvbi1ibGFjay1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLWljb24tYmxhY2stc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24taWNvbi1ibGFjay1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjByZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLTUwKTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXJyb3Ige1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDAuNXJlbTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIH0gKi9cclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWluLWJyZWFrcG9pbnQoc20pIHtcclxuICAgIC5jb250YWN0IHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEBtZWRpYSAobWluLXdpZHRoIDogNTAwcHgpIHtcclxuICAgIC5jb250YWN0IHtcclxuICAgICAgICAuaW5mb3JtYXRpb24ge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICovIiwiLyogTWVkaWEgUXVlcmllcyBpbiBNb2JpbGUgRmlyc3QgQXBwcm9hY2ggKi9cbi8qIE1lZGlhIFF1ZXJpZXMgaW4gV2ViIEZpcnN0IEFwcHJvYWNoICovXG4uY29udGFjdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdCAuaW5mb3JtYXRpb24ge1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5jb250YWN0IC5pbmZvcm1hdGlvbiBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDFyZW0gMXJlbTtcbn1cbi5jb250YWN0IC5pbmZvcm1hdGlvbiBidXR0b24gc3ZnIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB3aWR0aDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5jb250YWN0IC5pbmZvcm1hdGlvbiBidXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cbi5jb250YWN0IC5pbmZvcm1hdGlvbiBidXR0b246aG92ZXIgc3ZnIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiB2YXIoLS1idXR0b24taWNvbi1ibGFjay1zaGFkb3cpO1xuICAtbW96LWJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1pY29uLWJsYWNrLXNoYWRvdyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1pY29uLWJsYWNrLXNoYWRvdyk7XG59XG4uY29udGFjdCAuZm9ybSB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1pbi13aWR0aDogMjByZW07XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIC5pbnB1dC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICB9ICovXG59XG4uY29udGFjdCAuZm9ybSAubm90LWF2YWlsYWJsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay01MCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRhY3QgLmZvcm0gLm5vdC1hdmFpbGFibGUgaDIsXG4uY29udGFjdCAuZm9ybSAubm90LWF2YWlsYWJsZSBwIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QgLmZvcm0gLmlucHV0LWdyb3VwICoge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGFjdCAuZm9ybSAuaW5wdXQtZ3JvdXAgLmVycm9yIHtcbiAgY29sb3I6IHZhcigtLWRhbmdlcik7XG59XG4uY29udGFjdCAuZm9ybSBsYWJlbCxcbi5jb250YWN0IC5mb3JtIC5pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cbi5jb250YWN0IC5mb3JtIC5pbnB1dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmNvbnRhY3QgLmZvcm0gLmVycm9yIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmNvbnRhY3QgLmZvcm0gYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLmNvbnRhY3QgLmZvcm0gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aCA6IDc2OHB4KSB7XG4gIC5jb250YWN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbiAgLmNvbnRhY3QgLmZvcm0gLmZvcm0tZ3JvdXAge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuLyogQG1lZGlhIChtaW4td2lkdGggOiA1MDBweCkge1xuICAgIC5jb250YWN0IHtcbiAgICAgICAgLmluZm9ybWF0aW9uIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgfVxuICAgIH1cbn0gKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/contact/contact.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/contact/contact.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppModulesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
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
    /* harmony import */


    var _config_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/regex */
    "./src/app/config/regex.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_components_modal_services_modal_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/modal/services/modal-controller.service */
    "./src/app/components/modal/services/modal-controller.service.ts");
    /* harmony import */


    var src_app_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/alert/alert.component */
    "./src/app/components/alert/alert.component.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(form, apiService, modal) {
        _classCallCheck(this, ContactComponent);

        this.form = form;
        this.apiService = apiService;
        this.modal = modal;
        this.title = 'Contact';
        this.createForm();
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createForm",
        value: function createForm() {
          this.contactForm = this.form.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_config_regex__WEBPACK_IMPORTED_MODULE_3__["default"].email)]),
            contactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(750), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "send",
        value: function send() {
          var _this = this;

          this.contactForm.markAllAsTouched();
          this.contactForm.markAsDirty();
          this.contactForm.updateValueAndValidity();

          if (this.contactForm.valid) {
            this.apiService.contactSend(this.contactForm.value).then(function (_) {
              return _this.contactForm.reset();
            }).then(function (_) {
              return _this.sent();
            });
          }
        }
      }, {
        key: "sent",
        value: function sent() {
          var _this2 = this;

          var okay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          okay.subscribe(function (_) {
            return _this2.modal.close('contact-message-sent-alert');
          });
          this.modal.create({
            id: 'contact-message-sent-alert',
            header: 'I got your message',
            component: src_app_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
            props: {
              content: 'Thank you for sending me a message.',
              subContent: 'It is nice to have opportunity doing business with you.',
              okay: okay
            },
            animate: true
          });
          this.modal.open('contact-message-sent-alert');
        }
      }, {
        key: "getValue",
        value: function getValue(formControlName) {
          return this.contactForm.controls[formControlName].value;
        }
      }, {
        key: "hasInvalidTouchedDirty",
        value: function hasInvalidTouchedDirty(formControlName, error) {
          return this.contactForm.controls[formControlName].invalid && (this.contactForm.controls[formControlName].dirty || this.contactForm.controls[formControlName].touched) && this.contactForm.controls[formControlName].hasError(error);
        }
      }, {
        key: "goto",
        value: function goto(url) {
          window.open(url, '_blank');
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: src_app_components_modal_services_modal_controller_service__WEBPACK_IMPORTED_MODULE_5__["ModalControllerService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/modules/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/modules/contact/contact.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/contact/contact.module.ts ***!
    \***************************************************/

  /*! exports provided: ContactModule */

  /***/
  function srcAppModulesContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactModule", function () {
      return ContactModule;
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


    var _contact_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact-routing.module */
    "./src/app/modules/contact/contact-routing.module.ts");
    /* harmony import */


    var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact.component */
    "./src/app/modules/contact/contact.component.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ContactModule = function ContactModule() {
      _classCallCheck(this, ContactModule);
    };

    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    })], ContactModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-contact-contact-module-es5.js.map