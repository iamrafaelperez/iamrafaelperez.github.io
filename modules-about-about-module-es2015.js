(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/about/about.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/about/about.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\"></app-header>\n<div class=\"page-component\">\n    <div class=\"about\">\n        <p class=\"font-n\">I started web programming back when I was high school. I attended all free IT events that I saw back when I was college. It helped me explore different technologies and decide <span>where to focus in wide world of technology</span>.</p>\n        <p class=\"font-n\">Now, I am sure that I am very into full stack <span>mobile development</span> and <span>web development</span>. I enjoy working from <span>server-side to client-side</span> of applications, particular in <span>.NET and NodeJS</span> stacks.\n        </p>\n        <p class=\"font-n\">I <span>learn</span> to work on <span>minimal supervision</span> in joining free events. All I just need to <span>know</span> is the <span>building blocks</span> and I will <span>study</span> the rest with <span>all resources</span> I can get on my <span>workplace</span> or on the <span>internet</span>.\n        </p>\n        <p class=\"font-n\">I also enjoy <span>collaborating</span> with the team. I enjoy not just <span>learning</span> but also <span>sharing</span>. I am <span>glad</span> when <span>I learn</span> and apply new ideas. I am <span>proud</span> when <span>people learn</span> from me and decide to apply what they learn from me.</p>\n\n        <button class=\"button-sm button-primary\" (click)=\"openAttendedEvents()\">\n            VIEW EVENTS ATTENDED\n        </button>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/about/about-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/about/about-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/modules/about/about.component.ts");




const routes = [{ path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }];
let AboutRoutingModule = class AboutRoutingModule {
};
AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutRoutingModule);



/***/ }),

/***/ "./src/app/modules/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/about/about.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Media Queries in Mobile First Approach */\n/* Media Queries in Web First Approach */\n.about {\n  text-align: right;\n  padding-top: 1rem;\n}\n.about p {\n  text-align: justify;\n  text-indent: 5rem;\n  padding: 1.5rem 0;\n  line-height: 1.5rem;\n}\n.about p span {\n  color: var(--accent);\n}\n.about button {\n  margin-top: 1.5rem;\n}\n@media (min-width : 480px) {\n  .about p {\n    padding: 1rem 4.5rem;\n  }\n  .about button {\n    margin-right: 4.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYm91dC9GOlxcRmlsZXNcXEQgRHJpdmVcXFNpdGVzXFxpYW1yYWZhZWxwZXJlei9zcmNcXGFwcFxcc3R5bGVzXFxicmVha3BvaW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWJvdXQvRjpcXEZpbGVzXFxEIERyaXZlXFxTaXRlc1xcaWFtcmFmYWVscGVyZXovc3JjXFxhcHBcXG1vZHVsZXNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBQTtBQXFDQSx3Q0FBQTtBQ25DQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBRENRO0VBQ0ksb0JBQUE7QUNDWjtBREdJO0VBQ0ksa0JBQUE7QUNEUjtBRllRO0VDSEE7SUFDSSxvQkFBQTtFQ0xWO0VEUU07SUFDSSxvQkFBQTtFQ05WO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVkaWEgUXVlcmllcyBpbiBNb2JpbGUgRmlyc3QgQXBwcm9hY2ggKi9cclxuXHJcbkBtaXhpbiBtaW4tYnJlYWtwb2ludCgkc2l6ZSkge1xyXG5cclxuICAgICR4eGw6ICcobWluLXdpZHRoIDogMTgwMHB4KSc7XHJcbiAgICAkeGw6ICcobWluLXdpZHRoIDogMTQ0MHB4KSc7XHJcbiAgICAkbGc6ICcobWluLXdpZHRoIDogMTIwMHB4KSc7XHJcbiAgICAkbWQ6ICcobWluLXdpZHRoIDogOTkycHgpJztcclxuICAgICRzbTogJyhtaW4td2lkdGggOiA3NjhweCknO1xyXG4gICAgJHhzOiAnKG1pbi13aWR0aCA6IDQ4MHB4KSc7XHJcblxyXG4gICAgJHdlYjogJyhtaW4td2lkdGggOiA4MDBweCknO1xyXG5cclxuICAgIEBpZiAkc2l6ZSA9PSB4eGwge1xyXG4gICAgICAgIEBtZWRpYSAjeyR4eGx9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHhsIHtcclxuICAgICAgICBAbWVkaWEgI3skeGx9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IGxnIHtcclxuICAgICAgICBAbWVkaWEgI3skbGd9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IG1kIHtcclxuICAgICAgICBAbWVkaWEgI3skbWR9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHNtIHtcclxuICAgICAgICBAbWVkaWEgI3skc219ICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XHJcbiAgICAgICAgQG1lZGlhICN7JHhzfSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0gd2ViIHtcclxuICAgICAgICBAbWVkaWEgI3skd2VifSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogTWVkaWEgUXVlcmllcyBpbiBXZWIgRmlyc3QgQXBwcm9hY2ggKi9cclxuXHJcbkBtaXhpbiBtYXgtYnJlYWtwb2ludCgkc2l6ZSkge1xyXG5cclxuICAgICR4eGw6ICcobWF4LXdpZHRoIDogMTgwMHB4KSc7XHJcbiAgICAkeGw6ICcobWF4LXdpZHRoIDogMTQ0MHB4KSc7XHJcbiAgICAkbGc6ICcobWF4LXdpZHRoIDogMTIwMHB4KSc7XHJcbiAgICAkbWQ6ICcobWF4LXdpZHRoIDogOTkycHgpJztcclxuICAgICRzbTogJyhtYXgtd2lkdGggOiA3NjhweCknO1xyXG4gICAgJHhzOiAnKG1heC13aWR0aCA6IDQ4MHB4KSc7XHJcblxyXG4gICAgJHdlYjogJyhtYXgtd2lkdGggOiA4MDApJztcclxuXHJcbiAgICBAaWYgJHNpemUgPT0geHhsIHtcclxuICAgICAgICBAbWVkaWEgI3skeHhsfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSB4bCB7XHJcbiAgICAgICAgQG1lZGlhICN7JHhsfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XHJcbiAgICAgICAgQG1lZGlhICN7JGxnfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSBtZCB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1kfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XHJcbiAgICAgICAgQG1lZGlhICN7JHNtfSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0geHMge1xyXG4gICAgICAgIEBtZWRpYSAjeyR4c30gIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHdlYiB7XHJcbiAgICAgICAgQG1lZGlhICN7JHdlYn0gIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9icmVha3BvaW50LnNjc3MnO1xyXG5cclxuLmFib3V0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5AaW5jbHVkZSBtaW4tYnJlYWtwb2ludCh4cykge1xyXG4gICAgLmFib3V0IHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSA0LjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1pbi1icmVha3BvaW50KG1kKSB7XHJcbiAgICAuYWJvdXQge1xyXG4gICAgICAgIHAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKiBNZWRpYSBRdWVyaWVzIGluIE1vYmlsZSBGaXJzdCBBcHByb2FjaCAqL1xuLyogTWVkaWEgUXVlcmllcyBpbiBXZWIgRmlyc3QgQXBwcm9hY2ggKi9cbi5hYm91dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cbi5hYm91dCBwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1pbmRlbnQ6IDVyZW07XG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuLmFib3V0IHAgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuLmFib3V0IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGggOiA0ODBweCkge1xuICAuYWJvdXQgcCB7XG4gICAgcGFkZGluZzogMXJlbSA0LjVyZW07XG4gIH1cbiAgLmFib3V0IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0LjVyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_modal_services_modal_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/modal/services/modal-controller.service */ "./src/app/components/modal/services/modal-controller.service.ts");
/* harmony import */ var _components_attended_event_attended_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/attended-event/attended-event.component */ "./src/app/modules/about/components/attended-event/attended-event.component.ts");




let AboutComponent = class AboutComponent {
    constructor(modal) {
        this.modal = modal;
        this.title = 'About';
    }
    ngOnInit() {
    }
    openAttendedEvents() {
        this.modal.create({
            id: 'about-events-attended',
            component: _components_attended_event_attended_event_component__WEBPACK_IMPORTED_MODULE_3__["AttendedEventComponent"],
            header: 'Events Attended',
            animate: true
        });
        this.modal.open('about-events-attended');
    }
};
AboutComponent.ctorParameters = () => [
    { type: src_app_components_modal_services_modal_controller_service__WEBPACK_IMPORTED_MODULE_2__["ModalControllerService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/modules/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/modules/about/about.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/about/about.module.ts ***!
  \***********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/modules/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/modules/about/about.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/modal/modal.module */ "./src/app/components/modal/modal.module.ts");







let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            src_app_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]
        ]
    })
], AboutModule);



/***/ })

}]);
//# sourceMappingURL=modules-about-about-module-es2015.js.map