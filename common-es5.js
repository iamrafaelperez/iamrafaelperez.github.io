function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/components/backdrop/backdrop.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/backdrop/backdrop.ts ***!
    \*************************************************/

  /*! exports provided: Backdrop */

  /***/
  function srcAppComponentsBackdropBackdropTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Backdrop", function () {
      return Backdrop;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _backdrop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./backdrop.component */
    "./src/app/components/backdrop/backdrop.component.ts");

    var Backdrop = /*#__PURE__*/function () {
      function Backdrop() {
        _classCallCheck(this, Backdrop);
      }

      _createClass(Backdrop, [{
        key: "createBackdrop",
        value: function createBackdrop(componentFactoryResolver, injector) {
          var backdropRef = componentFactoryResolver.resolveComponentFactory(_backdrop_component__WEBPACK_IMPORTED_MODULE_1__["BackdropComponent"]).create(injector);
          return backdropRef;
        }
      }]);

      return Backdrop;
    }();
    /***/

  },

  /***/
  "./src/app/components/modal/Modal.ts":
  /*!*******************************************!*\
    !*** ./src/app/components/modal/Modal.ts ***!
    \*******************************************/

  /*! exports provided: Modal */

  /***/
  function srcAppComponentsModalModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Modal", function () {
      return Modal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modal.component */
    "./src/app/components/modal/modal.component.ts");
    /* harmony import */


    var _backdrop_backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../backdrop/backdrop */
    "./src/app/components/backdrop/backdrop.ts");

    var Modal = /*#__PURE__*/function (_backdrop_backdrop__W) {
      _inherits(Modal, _backdrop_backdrop__W);

      var _super = _createSuper(Modal);

      function Modal(controller, componentFactoryResolver, injector, applicationRef, modalOptions) {
        var _this;

        _classCallCheck(this, Modal);

        _this = _super.call(this);
        _this._controller = controller;
        _this._componentFactoryResolver = componentFactoryResolver;
        _this._injector = injector;
        _this._applicationRef = applicationRef;
        _this._modaOptions = modalOptions;

        _this.createReference();

        _this.attachOption();

        _this.attachReferenceToApplicationRef();

        _this.createElement();

        return _this;
      }

      _createClass(Modal, [{
        key: "open",
        value: function open() {
          this.attachModalToDOM();
          if (this._modaOptions.animate) this._modalRef.instance.openAnimate(this._modalContainerElement);
        }
      }, {
        key: "close",
        value: function close() {
          var _this2 = this;

          this._controller.remove(this.id);

          if (this._modaOptions.animate) {
            this._modalRef.instance.closeAnimate(this._modalContainerElement).then(function (_) {
              return _this2._modalRef.destroy();
            });
          } else this._modalRef.destroy();
        }
      }, {
        key: "createReference",
        value: function createReference() {
          var _this3 = this;

          this._modalRef = this._componentFactoryResolver.resolveComponentFactory(_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]).create(this._injector);
          this._componentRef = this._componentFactoryResolver.resolveComponentFactory(this._modaOptions.component).create(this._injector);
          this._backdropRef = this.createBackdrop(this._componentFactoryResolver, this._injector);

          this._modalRef.instance.closeModal.subscribe(function (_) {
            return _this3.close();
          });

          this._backdropRef.instance.closeComponent.subscribe(function (_) {
            return _this3.close();
          });
        }
      }, {
        key: "attachOption",
        value: function attachOption() {
          this._modalRef.instance.header = this._modaOptions.header;
          this._modalRef.instance.footer = this._modaOptions.footer;
          this._modalRef.instance.showHeader = this._modaOptions.showHeader;
          var instance = this._componentRef.instance;
          Object.assign(instance, this._modaOptions.props);
          this.id = this._modaOptions.id;
        }
      }, {
        key: "attachReferenceToApplicationRef",
        value: function attachReferenceToApplicationRef() {
          this._applicationRef.attachView(this._modalRef.hostView);

          this._applicationRef.attachView(this._componentRef.hostView);
        }
      }, {
        key: "createElement",
        value: function createElement() {
          this._modalElement = this._modalRef.hostView.rootNodes[0];
          this._modalContainerElement = this._modalElement.querySelector('.modal-container');
          this._modalContentElement = this._modalElement.querySelector('.modal-content');
          this._componentElement = this._componentRef.hostView.rootNodes[0];
          this._backdropElement = this._backdropRef.hostView.rootNodes[0];
        }
      }, {
        key: "attachModalToDOM",
        value: function attachModalToDOM() {
          this._modalElement.prepend(this._backdropElement);

          this._modalContentElement.appendChild(this._componentElement);

          document.body.appendChild(this._modalElement);
        }
      }]);

      return Modal;
    }(_backdrop_backdrop__WEBPACK_IMPORTED_MODULE_2__["Backdrop"]);
    /***/

  },

  /***/
  "./src/app/components/modal/services/modal-controller.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/modal/services/modal-controller.service.ts ***!
    \***********************************************************************/

  /*! exports provided: ModalControllerService */

  /***/
  function srcAppComponentsModalServicesModalControllerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalControllerService", function () {
      return ModalControllerService;
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


    var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Modal */
    "./src/app/components/modal/Modal.ts");

    var ModalControllerService = /*#__PURE__*/function () {
      function ModalControllerService(_componentFactoryResolver, _injector, _applicationRef) {
        _classCallCheck(this, ModalControllerService);

        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this._applicationRef = _applicationRef;
        this._modals = [];
      }

      _createClass(ModalControllerService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "create",
        value: function create(modalOptions) {
          var controller = this;
          var modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["Modal"](controller, this._componentFactoryResolver, this._injector, this._applicationRef, modalOptions);

          this._modals.push(modal);
        }
      }, {
        key: "open",
        value: function open(id) {
          var modal = this.find(id);

          if (modal) {
            modal.open();
          }
        }
      }, {
        key: "close",
        value: function close(id) {
          var modal = this.find(id);
          this.remove(id);

          if (modal) {
            modal.close();
          }
        }
      }, {
        key: "find",
        value: function find(id) {
          return this._modals.filter(function (modal) {
            return modal.id === id;
          })[0];
        }
      }, {
        key: "remove",
        value: function remove(id) {
          this._modals = this._modals.filter(function (modal) {
            return modal.id != id;
          });
        }
      }]);

      return ModalControllerService;
    }();

    ModalControllerService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    ModalControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ModalControllerService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map