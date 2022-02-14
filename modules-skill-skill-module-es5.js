function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-skill-skill-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill/skill.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill/skill.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSkillSkillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\"></app-header>\n\n<div class=\"page-component\">\n    <div class=\"skill\">\n        <div class=\"skill-item\">\n            <h2 class=\"font-md\">Design</h2>\n            <p class=\"font-n\">I have participated in building application prototypes from the business requirements using <span>Adobe XD</span>. I am detail oriented when it comes to business standard UI but creativity is the most challenging part of software development for me. I create designs based on research and experience. Please, feel free to message me what do you think of my website.</p>\n        </div>\n        <div class=\"skill-item\">\n            <h2 class=\"font-md\">Front-end Development</h2>\n            <p class=\"font-n\">I love converting prototypes into working UI components. I have been working in different front-end web and mobile technologies, <span>Angular/Ionic Framework</span>, <span>React/React Native</span>, <span>Webcomponents/Custom Elements</span>.</p>\n            <p class=\"font-n\">I have used libraries such as <span>jQuery/Mootools</span> and <span>Bootstrap</span> for building responsive web applications but I still prefer building front-end in vanilla to avoid unnecessary codes in <span>HTML</span>, <span>CSS/SASS</span> and <span>Javascript</span>.</p>\n        </div>\n        <div class=\"skill-item\">\n            <h2 class=\"font-md\">Back-end Development</h2>\n            <p class=\"font-n\">I am into the opportunity of contributing in an organization using <span>.NET</span> and <span>NodeJS</span> stacks. I love both frameworks for I can easily read <span>C#</span> and <span>Javascript/Typescript</span> programming/scripting language.</p>\n            <p class=\"font-n\">I am able to build <i>MVC</i> and <i>Web API (with JWT)</i> in both stack, <i>Webforms</i> and <i>Winforms</i> in .NET and <i>ApolloJS</i> in NodeJS.</p>\n        </div>\n        <div class=\"skill-item\">\n            <h2 class=\"font-md\">Database</h2>\n            <p class=\"font-n\">I am working more on relational (sql) databases like <span>MySQL/MariaDB</span> and <span>MSSQL</span> but I still have ideas on document (nosql) databases like Firebase and <span>MongoDB</span>. I have used <span>Firebase</span> in developing a real time application. I am more used to the concept of normalization in relational databases than denormalization in document databases.</p>\n        </div>\n        <div class=\"skill-item\">\n            <h2 class=\"font-md\">Project Management Tools</h2>\n            <p class=\"font-n\">I have participated in agile software development with the help of <span>Jira</span> and <span>Trello</span>. I only use <span>Azure Boards</span> in recording tasks for personal projects which also serves as my documentation aside from <span>Azure Wiki</span>.</p>\n        </div>\n        <div class=\"skill-item\">\n            <h2 class=\"font-md\">Other Tools</h2>\n            <p class=\"font-n\">I managed source codes using <span>Git</span> and <span>SVN</span>. I have used <span>XAMPP</span> and <span>Nginx</span> in Linux servers and <span>IIS</span> for Window servers. I have set up basic pipelines of CI/CD for Angular and .NET Core Applications in <span>Azure Pipelines</span>. I have used the free tier of <span>Amazon Web Services</span> such as EC2 and S3 to deploy practice applications.</p>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/skill/skill-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/skill/skill-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SkillRoutingModule */

  /***/
  function srcAppModulesSkillSkillRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillRoutingModule", function () {
      return SkillRoutingModule;
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


    var _skill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./skill.component */
    "./src/app/modules/skill/skill.component.ts");

    var routes = [{
      path: '',
      component: _skill_component__WEBPACK_IMPORTED_MODULE_3__["SkillComponent"]
    }];

    var SkillRoutingModule = function SkillRoutingModule() {
      _classCallCheck(this, SkillRoutingModule);
    };

    SkillRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SkillRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/skill/skill.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/modules/skill/skill.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSkillSkillComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Media Queries in Mobile First Approach */\n/* Media Queries in Web First Approach */\n.page-component .skill {\n  line-height: 1.25rem;\n}\n.page-component .skill .skill-item {\n  padding: 2rem 0;\n}\n.page-component .skill .skill-item h2 {\n  letter-spacing: 0.25rem;\n}\n.page-component .skill .skill-item p {\n  padding-top: 1rem;\n  text-align: justify;\n}\n.page-component .skill .skill-item p span {\n  color: var(--accent);\n}\n@media (min-width : 480px) {\n  .skill .skill-item {\n    padding: 2rem 5rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9za2lsbC9GOlxcRmlsZXNcXEQgRHJpdmVcXFNpdGVzXFxpYW1yYWZhZWxwZXJlei9zcmNcXGFwcFxcc3R5bGVzXFxicmVha3BvaW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2tpbGwvRjpcXEZpbGVzXFxEIERyaXZlXFxTaXRlc1xcaWFtcmFmYWVscGVyZXovc3JjXFxhcHBcXG1vZHVsZXNcXHNraWxsXFxza2lsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBQTtBQXFDQSx3Q0FBQTtBQ2xDSTtFQUNJLG9CQUFBO0FDQVI7QURFUTtFQUNJLGVBQUE7QUNBWjtBREVZO0VBQ0ksdUJBQUE7QUNBaEI7QURFWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNBaEI7QURFZ0I7RUFDSSxvQkFBQTtBQ0FwQjtBRllRO0VDRkE7SUFDSSw2QkFBQTtFQ05WO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NraWxsL3NraWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVkaWEgUXVlcmllcyBpbiBNb2JpbGUgRmlyc3QgQXBwcm9hY2ggKi9cclxuXHJcbkBtaXhpbiBtaW4tYnJlYWtwb2ludCgkc2l6ZSkge1xyXG5cclxuICAgICR4eGw6ICcobWluLXdpZHRoIDogMTgwMHB4KSc7XHJcbiAgICAkeGw6ICcobWluLXdpZHRoIDogMTQ0MHB4KSc7XHJcbiAgICAkbGc6ICcobWluLXdpZHRoIDogMTIwMHB4KSc7XHJcbiAgICAkbWQ6ICcobWluLXdpZHRoIDogOTkycHgpJztcclxuICAgICRzbTogJyhtaW4td2lkdGggOiA3NjhweCknO1xyXG4gICAgJHhzOiAnKG1pbi13aWR0aCA6IDQ4MHB4KSc7XHJcblxyXG4gICAgJHdlYjogJyhtaW4td2lkdGggOiA4MDBweCknO1xyXG5cclxuICAgIEBpZiAkc2l6ZSA9PSB4eGwge1xyXG4gICAgICAgIEBtZWRpYSAjeyR4eGx9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHhsIHtcclxuICAgICAgICBAbWVkaWEgI3skeGx9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IGxnIHtcclxuICAgICAgICBAbWVkaWEgI3skbGd9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IG1kIHtcclxuICAgICAgICBAbWVkaWEgI3skbWR9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHNtIHtcclxuICAgICAgICBAbWVkaWEgI3skc219ICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSB4cyB7XHJcbiAgICAgICAgQG1lZGlhICN7JHhzfSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0gd2ViIHtcclxuICAgICAgICBAbWVkaWEgI3skd2VifSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogTWVkaWEgUXVlcmllcyBpbiBXZWIgRmlyc3QgQXBwcm9hY2ggKi9cclxuXHJcbkBtaXhpbiBtYXgtYnJlYWtwb2ludCgkc2l6ZSkge1xyXG5cclxuICAgICR4eGw6ICcobWF4LXdpZHRoIDogMTgwMHB4KSc7XHJcbiAgICAkeGw6ICcobWF4LXdpZHRoIDogMTQ0MHB4KSc7XHJcbiAgICAkbGc6ICcobWF4LXdpZHRoIDogMTIwMHB4KSc7XHJcbiAgICAkbWQ6ICcobWF4LXdpZHRoIDogOTkycHgpJztcclxuICAgICRzbTogJyhtYXgtd2lkdGggOiA3NjhweCknO1xyXG4gICAgJHhzOiAnKG1heC13aWR0aCA6IDQ4MHB4KSc7XHJcblxyXG4gICAgJHdlYjogJyhtYXgtd2lkdGggOiA4MDApJztcclxuXHJcbiAgICBAaWYgJHNpemUgPT0geHhsIHtcclxuICAgICAgICBAbWVkaWEgI3skeHhsfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSB4bCB7XHJcbiAgICAgICAgQG1lZGlhICN7JHhsfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSBsZyB7XHJcbiAgICAgICAgQG1lZGlhICN7JGxnfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSBtZCB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1kfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PSBzbSB7XHJcbiAgICAgICAgQG1lZGlhICN7JHNtfSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHNpemUgPT0geHMge1xyXG4gICAgICAgIEBtZWRpYSAjeyR4c30gIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRzaXplID09IHdlYiB7XHJcbiAgICAgICAgQG1lZGlhICN7JHdlYn0gIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9icmVha3BvaW50LnNjc3MnO1xyXG5cclxuLnBhZ2UtY29tcG9uZW50IHtcclxuICAgIC5za2lsbCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XHJcblxyXG4gICAgICAgIC5za2lsbC1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AaW5jbHVkZSBtaW4tYnJlYWtwb2ludCh4cykge1xyXG4gICAgLnNraWxsIHtcclxuICAgICAgICAuc2tpbGwtaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qIE1lZGlhIFF1ZXJpZXMgaW4gTW9iaWxlIEZpcnN0IEFwcHJvYWNoICovXG4vKiBNZWRpYSBRdWVyaWVzIGluIFdlYiBGaXJzdCBBcHByb2FjaCAqL1xuLnBhZ2UtY29tcG9uZW50IC5za2lsbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xufVxuLnBhZ2UtY29tcG9uZW50IC5za2lsbCAuc2tpbGwtaXRlbSB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cbi5wYWdlLWNvbXBvbmVudCAuc2tpbGwgLnNraWxsLWl0ZW0gaDIge1xuICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcbn1cbi5wYWdlLWNvbXBvbmVudCAuc2tpbGwgLnNraWxsLWl0ZW0gcCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnBhZ2UtY29tcG9uZW50IC5za2lsbCAuc2tpbGwtaXRlbSBwIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGggOiA0ODBweCkge1xuICAuc2tpbGwgLnNraWxsLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDJyZW0gNXJlbSAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/skill/skill.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/skill/skill.component.ts ***!
    \**************************************************/

  /*! exports provided: SkillComponent */

  /***/
  function srcAppModulesSkillSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
      return SkillComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkillComponent = /*#__PURE__*/function () {
      function SkillComponent() {
        _classCallCheck(this, SkillComponent);

        this.title = 'Skill';
      }

      _createClass(SkillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillComponent;
    }();

    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skill',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill/skill.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skill.component.scss */
      "./src/app/modules/skill/skill.component.scss"))["default"]]
    })], SkillComponent);
    /***/
  },

  /***/
  "./src/app/modules/skill/skill.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/skill/skill.module.ts ***!
    \***********************************************/

  /*! exports provided: SkillModule */

  /***/
  function srcAppModulesSkillSkillModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillModule", function () {
      return SkillModule;
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


    var _skill_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./skill-routing.module */
    "./src/app/modules/skill/skill-routing.module.ts");
    /* harmony import */


    var _skill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./skill.component */
    "./src/app/modules/skill/skill.component.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var SkillModule = function SkillModule() {
      _classCallCheck(this, SkillModule);
    };

    SkillModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_skill_component__WEBPACK_IMPORTED_MODULE_4__["SkillComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _skill_routing_module__WEBPACK_IMPORTED_MODULE_3__["SkillRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
    })], SkillModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-skill-skill-module-es5.js.map