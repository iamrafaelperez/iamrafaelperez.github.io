function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-experience-experience-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/experience/experience.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/experience/experience.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\"></app-header>\n\n<div class=\"page-component\">\n    <div class=\"experience\">\n        <app-timeline [timeline]=\"timeline\"></app-timeline>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/experience/experience-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/experience/experience-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ExperienceRoutingModule */

  /***/
  function srcAppModulesExperienceExperienceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceRoutingModule", function () {
      return ExperienceRoutingModule;
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


    var _experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./experience.component */
    "./src/app/modules/experience/experience.component.ts");

    var routes = [{
      path: '',
      component: _experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"]
    }];

    var ExperienceRoutingModule = function ExperienceRoutingModule() {
      _classCallCheck(this, ExperienceRoutingModule);
    };

    ExperienceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExperienceRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/experience/experience.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modules/experience/experience.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesExperienceExperienceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".experience {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  margin: 1.5rem auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlcmllbmNlL0Y6XFxGaWxlc1xcRCBEcml2ZVxcU2l0ZXNcXGlhbXJhZmFlbHBlcmV6L3NyY1xcYXBwXFxtb2R1bGVzXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZXJpZW5jZSB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW46IDEuNXJlbSBhdXRvIDA7XHJcbn1cclxuIiwiLmV4cGVyaWVuY2Uge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luOiAxLjVyZW0gYXV0byAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/experience/experience.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/experience/experience.component.ts ***!
    \************************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppModulesExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);

        this.title = 'Experience';
        this.timeline = [{
          id: 1,
          date: '2020 - Now',
          title: 'VeritasPay Philippines Inc.',
          subtitle: 'SOFTWARE DEVELOPER',
          location: {
            line: 'Bagong Ilog',
            cityAndStateOrProvince: 'Pasig City, Metro Manila'
          },
          description: 'A web and mobile terminal platform solution for merchant to accept card present and online payments. I learn deeper software concepts and Clean Architecture by Jason Taylor.',
          moreDescriptions: ['Participate on back office web platform development', 'Involved in revamping web applications to improve business solutions and migrate technical solutions, from MVC to Blazor Web Assembly.', 'Create common components using Razor Class Library, Blazor components, existing Javascript libraries etc.', 'Developed working proof of concepts to solve technical problems such as real-time data transfer (SignalR), authentication (JWT), Hangfire etc.', 'Integrate third party Restful APIs such Grab Web Pay.'],
          keypoint: {
            label: 'Technologies',
            points: ['Clean Architecture by Jason Taylor', 'CQRS Pattern', 'IIS', 'Git', 'MSSQL', 'EF Core', 'LINQ', '.NET Framework/.NET Core', 'Angular Framework', 'Typescript', 'JWT', 'SignalR', 'Hangfire', 'Javascript', 'Blazor Web Assembly', 'JQuery']
          }
        }, {
          id: 2,
          date: '2019 - 2020',
          title: 'First Oceanic Property Management',
          subtitle: 'SOFTWARE DEVELOPER',
          location: {
            line: 'Uptown Bonifacio',
            cityAndStateOrProvince: 'Taguig City, Metro Manila'
          },
          description: 'A web and mobile platform solution for managing BPO and residential properties in Philippines. I learn to participate in all phases of software development lifecycle for the team is in growing stage.',
          moreDescriptions: ['Gathering business requirements and creating technical solutions.', 'Creating or participating in creation of UI prototypes from technical solutions.', 'Developing application from front-end to backend.', 'Designing database table structure.', 'Collaborating with the team on researching and applying necessary updates in technologies, tools, practices, patterns, and other development related resources.', 'Setup pipelines for CI/CD.'],
          keypoint: {
            label: 'Technologies',
            points: ['Azure Devops', 'IIS', 'MSSQL', '.NET Framework/.NET Core', 'Angular Framework', 'Ionic  Framework', 'React Native', 'Adobe XD']
          }
        }, {
          id: 3,
          date: '2018 - 2019',
          title: 'Campaigntrack',
          subtitle: 'SOFTWARE ENGINEER',
          location: {
            line: 'Ayala Avenue',
            cityAndStateOrProvince: 'Makati City, Metro Manila'
          },
          description: 'A web platform solution for advertising/marketing services for real estate properties in Australia. I participated in both support and development team and learn to code in convention for maintainable applications.',
          moreDescriptions: ['Involved in development of new projects and maintenance of existing projects.', 'Involved in collaboration of UI/UX standards components.', 'Participated in estimation of work items in team sprint planning.', 'Involved in maintenance of existing project from third-party team.'],
          keypoint: {
            label: 'Technologies',
            points: ['Jira', 'SVN', 'IIS', 'MSSQL', '.NET Framework/.NET Core', 'jQuery/Mootools', 'VanillaJS/EcmaScript', 'Webcomponents/Custom Elements', 'Typescript', 'React']
          }
        }, {
          id: 4,
          date: '2017 - 2018',
          title: 'Msgme Enterprise',
          subtitle: 'SOFTWARE DEVELOPER - INTERN',
          location: {
            cityAndStateOrProvince: 'Makati City, Metro Manila'
          },
          description: 'A startup mobile application platform that provide wellness services. I worked like a freelance developer from the company\'s website to the mobile application.',
          moreDescriptions: ['Involved in development of website and web admin of the company.', 'Researched for open-source or less expensive way of development to reduce company expense.', 'Involved in development of cross-platform mobile application.', 'Involved in converting wireframes designs into UI components.', 'Setup pipelines for CI/CD.'],
          keypoint: {
            label: 'Technologies',
            points: ['Azure Devops', 'Amazon Web Services', 'Nginx', 'MySQL/MariaDB', 'Firebase', 'NodeJS/ExpressJS', 'GraphQL', 'React Native/Redux', 'Ionic Framework']
          }
        }];
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-experience',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/experience/experience.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experience.component.scss */
      "./src/app/modules/experience/experience.component.scss"))["default"]]
    })], ExperienceComponent);
    /***/
  },

  /***/
  "./src/app/modules/experience/experience.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/experience/experience.module.ts ***!
    \*********************************************************/

  /*! exports provided: ExperienceModule */

  /***/
  function srcAppModulesExperienceExperienceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceModule", function () {
      return ExperienceModule;
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


    var _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./experience-routing.module */
    "./src/app/modules/experience/experience-routing.module.ts");
    /* harmony import */


    var _experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./experience.component */
    "./src/app/modules/experience/experience.component.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var ExperienceModule = function ExperienceModule() {
      _classCallCheck(this, ExperienceModule);
    };

    ExperienceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExperienceRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
    })], ExperienceModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-experience-experience-module-es5.js.map