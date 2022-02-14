(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-education-education-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/education/education.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/education/education.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\"></app-header>\n\n<div class=\"page-component\">\n    <div class=\"education\">\n        <app-timeline [timeline]=\"timeline\"></app-timeline>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/education/education-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/education/education-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EducationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationRoutingModule", function() { return EducationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education.component */ "./src/app/modules/education/education.component.ts");




const routes = [{ path: '', component: _education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"] }];
let EducationRoutingModule = class EducationRoutingModule {
};
EducationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EducationRoutingModule);



/***/ }),

/***/ "./src/app/modules/education/education.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/education/education.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".education {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 1.5rem auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lZHVjYXRpb24vRjpcXEZpbGVzXFxEIERyaXZlXFxTaXRlc1xcaWFtcmFmYWVscGVyZXovc3JjXFxhcHBcXG1vZHVsZXNcXGVkdWNhdGlvblxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkdWNhdGlvbiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDEuNXJlbSBhdXRvIDA7XHJcbn1cclxuIiwiLmVkdWNhdGlvbiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAxLjVyZW0gYXV0byAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/education/education.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationComponent = class EducationComponent {
    constructor() {
        this.title = 'Education';
        this.timeline = [
            {
                id: 1,
                date: '2014 - 2018',
                title: 'STI Academic Center - Las Piñas',
                subtitle: 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY',
                location: {
                    line: 'Pamplona 3',
                    cityAndStateOrProvince: 'Las Piñas City, Metro Manila'
                },
                keypoint: {
                    label: 'Achievement',
                    points: ['Dean’s List AY 2014 – 2015', 'Cum Laude']
                }
            },
            {
                id: 2,
                date: '2010 - 2014',
                title: 'Eastern Bacoor National High School',
                subtitle: 'HIGH SCHOOL DIPLOMA',
                location: {
                    line: 'Queens Row Central',
                    cityAndStateOrProvince: 'Bacoor City, Cavite'
                }
            }
        ];
    }
    ngOnInit() {
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/modules/education/education.component.scss")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/modules/education/education.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/education/education.module.ts ***!
  \*******************************************************/
/*! exports provided: EducationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationModule", function() { return EducationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _education_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education-routing.module */ "./src/app/modules/education/education-routing.module.ts");
/* harmony import */ var _education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education.component */ "./src/app/modules/education/education.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");






let EducationModule = class EducationModule {
};
EducationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _education_routing_module__WEBPACK_IMPORTED_MODULE_3__["EducationRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]
    })
], EducationModule);



/***/ })

}]);
//# sourceMappingURL=modules-education-education-module-es2015.js.map