(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/backdrop/backdrop.ts":
/*!*************************************************!*\
  !*** ./src/app/components/backdrop/backdrop.ts ***!
  \*************************************************/
/*! exports provided: Backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backdrop", function() { return Backdrop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _backdrop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backdrop.component */ "./src/app/components/backdrop/backdrop.component.ts");


class Backdrop {
    createBackdrop(componentFactoryResolver, injector) {
        var backdropRef = componentFactoryResolver
            .resolveComponentFactory(_backdrop_component__WEBPACK_IMPORTED_MODULE_1__["BackdropComponent"])
            .create(injector);
        return backdropRef;
    }
}


/***/ }),

/***/ "./src/app/components/modal/Modal.ts":
/*!*******************************************!*\
  !*** ./src/app/components/modal/Modal.ts ***!
  \*******************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _backdrop_backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backdrop/backdrop */ "./src/app/components/backdrop/backdrop.ts");



class Modal extends _backdrop_backdrop__WEBPACK_IMPORTED_MODULE_2__["Backdrop"] {
    constructor(controller, componentFactoryResolver, injector, applicationRef, modalOptions) {
        super();
        this._controller = controller;
        this._componentFactoryResolver = componentFactoryResolver;
        this._injector = injector;
        this._applicationRef = applicationRef;
        this._modaOptions = modalOptions;
        this.createReference();
        this.attachOption();
        this.attachReferenceToApplicationRef();
        this.createElement();
    }
    open() {
        this.attachModalToDOM();
        if (this._modaOptions.animate)
            this._modalRef.instance.openAnimate(this._modalContainerElement);
    }
    close() {
        this._controller.remove(this.id);
        if (this._modaOptions.animate) {
            this._modalRef.instance.closeAnimate(this._modalContainerElement)
                .then(_ => this._modalRef.destroy());
        }
        else
            this._modalRef.destroy();
    }
    createReference() {
        this._modalRef = this._componentFactoryResolver
            .resolveComponentFactory(_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"])
            .create(this._injector);
        this._componentRef = this._componentFactoryResolver
            .resolveComponentFactory(this._modaOptions.component)
            .create(this._injector);
        this._backdropRef = this.createBackdrop(this._componentFactoryResolver, this._injector);
        this._modalRef.instance.closeModal.subscribe(_ => this.close());
        this._backdropRef.instance.closeComponent.subscribe(_ => this.close());
    }
    attachOption() {
        this._modalRef.instance.header = this._modaOptions.header;
        this._modalRef.instance.footer = this._modaOptions.footer;
        this._modalRef.instance.showHeader = this._modaOptions.showHeader;
        var instance = this._componentRef.instance;
        Object.assign(instance, this._modaOptions.props);
        this.id = this._modaOptions.id;
    }
    attachReferenceToApplicationRef() {
        this._applicationRef.attachView(this._modalRef.hostView);
        this._applicationRef.attachView(this._componentRef.hostView);
    }
    createElement() {
        this._modalElement = this._modalRef.hostView.rootNodes[0];
        this._modalContainerElement = this._modalElement.querySelector('.modal-container');
        this._modalContentElement = this._modalElement.querySelector('.modal-content');
        this._componentElement = this._componentRef.hostView.rootNodes[0];
        this._backdropElement = this._backdropRef.hostView.rootNodes[0];
    }
    attachModalToDOM() {
        this._modalElement.prepend(this._backdropElement);
        this._modalContentElement.appendChild(this._componentElement);
        document.body.appendChild(this._modalElement);
    }
}


/***/ }),

/***/ "./src/app/components/modal/services/modal-controller.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/modal/services/modal-controller.service.ts ***!
  \***********************************************************************/
/*! exports provided: ModalControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalControllerService", function() { return ModalControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ "./src/app/components/modal/Modal.ts");



let ModalControllerService = class ModalControllerService {
    constructor(_componentFactoryResolver, _injector, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this._applicationRef = _applicationRef;
        this._modals = [];
    }
    ngOnInit() {
    }
    create(modalOptions) {
        var controller = this;
        var modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["Modal"](controller, this._componentFactoryResolver, this._injector, this._applicationRef, modalOptions);
        this._modals.push(modal);
    }
    open(id) {
        var modal = this.find(id);
        if (modal) {
            modal.open();
        }
    }
    close(id) {
        var modal = this.find(id);
        this.remove(id);
        if (modal) {
            modal.close();
        }
    }
    find(id) {
        return this._modals.filter(modal => modal.id === id)[0];
    }
    remove(id) {
        this._modals = this._modals
            .filter(modal => modal.id != id);
    }
};
ModalControllerService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
ModalControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalControllerService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map