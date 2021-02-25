function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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


    __webpack_exports__["default"] = "<div>\n<app-nav-bar></app-nav-bar>\n<app-screen></app-screen>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul>\n  <li (click)=\"MakeShorting('merg')\">Merg Short</li>\n  <li (click)=\"MakeShorting('quick')\">Quick Short</li>\n  <li (click)=\"MakeShorting('bubble')\">Bubble Short</li>\n  <li (click)=\"MakeShorting('heap')\">Heap Short</li>\n  <li (click)=\"MakeShorting('re-define')\" style=\"float:right\">Redefine Array</li>\n  <li (click)=\"ChangeSize(slider.value)\"><input #slider type=\"range\" min=\"3\" value=\"150\" max=\"150\" style=\"background: white; cursor: po inter;\"></li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screen/screen.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screen/screen.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreenScreenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"array-container\">\n  <div class=\"array-bar\" *ngFor=\"let i of Array;\" [ngStyle]=\"{'height': i+'px','background-color':PRIMARY_COLOR}\">\n  </div>\n</div>\n\n<div class=\"score\" style=\"display: block;\">\n  <table>\n    <tr>\n      <th>Swap</th>\n      <th>Algorithm</th>\n    </tr>\n    <tr>\n      <td>{{NUMBER_OF_SWAP}}</td>\n      <td>{{SELECTED_ALGORITHM}}</td>\n    </tr>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
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
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
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
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

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
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#body-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgb(230, 230, 230);\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib2R5LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'sort-visualizer';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _screen_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./screen/screen.component */
    "./src/app/screen/screen.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _screen_screen_component__WEBPACK_IMPORTED_MODULE_5__["ScreenComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\n\r\nli {\r\n  float: left;\r\n  border-right:1px solid #bbb;\r\n}\r\n\r\nli:last-child {\r\n  border-right: none;\r\n}\r\n\r\nli {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli:hover:not(.active) {\r\n  background-color: #111;\r\n}\r\n\r\n.active {\r\n  background-color: #4CAF50;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYmJiO1xyXG59XHJcblxyXG5saTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
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


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(sharedService, changeSizeSerive) {
        _classCallCheck(this, NavBarComponent);

        this.sharedService = sharedService;
        this.changeSizeSerive = changeSizeSerive;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "MakeShorting",
        value: function MakeShorting(shortType) {
          this.sharedService.sendClickEvent(shortType);
        }
      }, {
        key: "ChangeSize",
        value: function ChangeSize(changeSize) {
          this.changeSizeSerive.sendSizeChangeEvent(changeSize);
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }];
    };

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.css */
      "./src/app/nav-bar/nav-bar.component.css"))["default"]]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/screen/Algo/bubbleSort.js":
  /*!*******************************************!*\
    !*** ./src/app/screen/Algo/bubbleSort.js ***!
    \*******************************************/

  /*! exports provided: getAnimationsForBubbleSort */

  /***/
  function srcAppScreenAlgoBubbleSortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAnimationsForBubbleSort", function () {
      return getAnimationsForBubbleSort;
    });

    var animations = [];

    function getAnimationsForBubbleSort(array) {
      var tempArray = array.slice();
      bubbleSort(tempArray);
      var tempAnimations = animations.slice();
      animations = [];
      return tempAnimations;
    }

    function bubbleSort(array) {
      var arrayLength = array.length;

      for (var i = 0; i < arrayLength - 1; i++) {
        for (var j = 0; j < arrayLength - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            var temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            animations.push(["HighLightOn", j, j + 1]);
            animations.push(["HighLightOff", j, j + 1]);
            animations.push(["Swap", j, array[j], j + 1, array[j + 1]]);
          }
        }
      }

      console.log(array);
    }
    /***/

  },

  /***/
  "./src/app/screen/Algo/heapSort.js":
  /*!*****************************************!*\
    !*** ./src/app/screen/Algo/heapSort.js ***!
    \*****************************************/

  /*! exports provided: getAnimationsForHeapSort */

  /***/
  function srcAppScreenAlgoHeapSortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAnimationsForHeapSort", function () {
      return getAnimationsForHeapSort;
    });

    var animations = [];
    var array_length = 0;

    function getAnimationsForHeapSort(unsortedArray) {
      var array = unsortedArray.slice();
      heapSort(array);
      var tempAnimations = animations.slice();
      animations = [];
      return tempAnimations;
    }

    function heap_root(input, i) {
      var left = 2 * i + 1;
      var right = 2 * i + 2;
      var max = i;

      if (left < array_length && input[left] > input[max]) {
        max = left;
      }

      if (right < array_length && input[right] > input[max]) {
        max = right;
      }

      if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
      }
    }

    function swap(input, index_A, index_B) {
      var temp = input[index_A];
      input[index_A] = input[index_B];
      input[index_B] = temp;
      animations.push(["HighLightOn", index_A, index_B]);
      animations.push(["HighLightOff", index_A, index_B]);
      animations.push(["Swap", index_A, input[index_A], index_B, input[index_B]]);
    }

    function heapSort(input) {
      array_length = input.length;

      for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        heap_root(input, i);
      }

      for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        animations.push([]);
        array_length--;
        heap_root(input, 0);
      }
    }
    /***/

  },

  /***/
  "./src/app/screen/Algo/mergSort.js":
  /*!*****************************************!*\
    !*** ./src/app/screen/Algo/mergSort.js ***!
    \*****************************************/

  /*! exports provided: getMergeSortAnimations */

  /***/
  function srcAppScreenAlgoMergSortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMergeSortAnimations", function () {
      return getMergeSortAnimations;
    }); // This Algorithm is from (https://github.com/clementmihailescu)


    function getMergeSortAnimations(array) {
      var animations = [];
      if (array.length <= 1) return array;
      var auxiliaryArray = array.slice();
      var copyOfArray = array.slice();
      mergeSortHelper(copyOfArray, 0, copyOfArray.length - 1, auxiliaryArray, animations);
      return animations;
    }

    function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
      if (startIdx === endIdx) return;
      var middleIdx = Math.floor((startIdx + endIdx) / 2);
      mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
      mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
      doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
    }

    function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
      var k = startIdx;
      var i = startIdx;
      var j = middleIdx + 1;
      console.log("Before Ever iteration k = " + k);

      while (i <= middleIdx && j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j]); // These are the values that we're comparing; we push them a second
        // time to revert their color.

        animations.push([i, j]);

        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
          // We overwrite the value at index k in the original array with the
          // value at index i in the auxiliary array.
          animations.push([k, auxiliaryArray[i]]);
          mainArray[k++] = auxiliaryArray[i++];
        } else {
          // We overwrite the value at index k in the original array with the
          // value at index j in the auxiliary array.
          animations.push([k, auxiliaryArray[j]]);
          mainArray[k++] = auxiliaryArray[j++];
        }
      }

      while (i <= middleIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, i]); // These are the values that we're comparing; we push them a second
        // time to revert their color.

        animations.push([i, i]); // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.

        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      }

      while (j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j]); // These are the values that we're comparing; we push them a second
        // time to revert their color.

        animations.push([j, j]); // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.

        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    /***/

  },

  /***/
  "./src/app/screen/Algo/quickSort.js":
  /*!******************************************!*\
    !*** ./src/app/screen/Algo/quickSort.js ***!
    \******************************************/

  /*! exports provided: getAnimationsForQuickSort */

  /***/
  function srcAppScreenAlgoQuickSortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAnimationsForQuickSort", function () {
      return getAnimationsForQuickSort;
    });

    var animations = [];

    function getAnimationsForQuickSort(array) {
      var newArray = array.slice();
      quickSort(0, newArray.length, newArray);
      var tempArray = animations.slice();
      animations = [];
      return tempArray;
    }

    function quickSort(low, high, array) {
      //Checking If low is less than High or not
      if (low < high) {
        // Make partation in which on left side all the smaller elemnts of partation and on the right hand side all the greater elements
        var j = partation(low, high, array); // Divinding the array with pivote taken as a partation

        quickSort(low, j, array);
        quickSort(j + 1, high, array);
      }

      return array;
    }

    function partation(low, high, unsortedArray) {
      var pivote = unsortedArray[low];
      animations.push(["pivoton", low]);
      var i = low;
      var j = high;

      while (i < j) {
        do {
          i++;
        } while (unsortedArray[i] <= pivote);

        do {
          j--;
        } while (unsortedArray[j] > pivote);

        if (i < j) {
          swap(i, j, unsortedArray); //Logic for animating highlihts and swaping

          animations.push(["highLighton", i, j]);
          animations.push(["highLightoff", i, j]);
          animations.push(["swap", i, j]);
        }
      }

      swap(low, j, unsortedArray);
      animations.push(["highLighton", low, j]);
      animations.push(["highLightoff", low, j]);
      animations.push(["swap", low, unsortedArray[low], j, unsortedArray[j]]);
      animations.push(["pivotOff", low]);
      return j;
    }

    function swap(i, j, unsortedArray) {
      var temp = unsortedArray[i];
      unsortedArray[i] = unsortedArray[j];
      unsortedArray[j] = temp;
    }
    /***/

  },

  /***/
  "./src/app/screen/screen.component.css":
  /*!*********************************************!*\
    !*** ./src/app/screen/screen.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreenScreenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".array-container {\r\n  margin-top: 40px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.array-bar {\r\n  width: 4px;\r\n  display: inline-block;\r\n  margin: 0 2px;\r\n}\r\n\r\n.score{\r\n  position: relative;\r\n  margin: 10px;\r\n}\r\n\r\ntable {\r\nmargin: 0 auto;\r\n}\r\n\r\ntd, th {\r\n  border: 1px solid #ddd;\r\n  padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntr:hover {background-color: #ddd;}\r\n\r\nth {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVuL3NjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBLG1CQUFtQix5QkFBeUIsQ0FBQzs7QUFFN0MsVUFBVSxzQkFBc0IsQ0FBQzs7QUFFakM7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVuL3NjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFycmF5LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnJheS1iYXIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAycHg7XHJcbn1cclxuXHJcbi5zY29yZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcblxyXG50aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/screen/screen.component.ts":
  /*!********************************************!*\
    !*** ./src/app/screen/screen.component.ts ***!
    \********************************************/

  /*! exports provided: ScreenComponent */

  /***/
  function srcAppScreenScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreenComponent", function () {
      return ScreenComponent;
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


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _Algo_mergSort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Algo/mergSort.js */
    "./src/app/screen/Algo/mergSort.js");
    /* harmony import */


    var _Algo_quickSort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Algo/quickSort.js */
    "./src/app/screen/Algo/quickSort.js");
    /* harmony import */


    var _Algo_bubbleSort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Algo/bubbleSort */
    "./src/app/screen/Algo/bubbleSort.js");
    /* harmony import */


    var _Algo_heapSort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Algo/heapSort */
    "./src/app/screen/Algo/heapSort.js");

    var ScreenComponent = /*#__PURE__*/function () {
      function ScreenComponent(sharedService) {
        var _this = this;

        _classCallCheck(this, ScreenComponent);

        this.sharedService = sharedService;
        this.NUMBER_OF_ARRAY_BARS = 150;
        this.Array = []; // This is the main color of the array bars.

        this.PRIMARY_COLOR = '#0080FF'; // This is the color of array bars that are being compared throughout the animations.

        this.SECONDARY_COLOR = 'red';
        this.ANIMATION_SPEED_MS = 10;
        this.PIVOT_COLOR = "green";
        this.NUMBER_OF_SWAP = 0;
        this.SELECTED_ALGORITHM = "";
        this.resetArray();
        this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(function (shortType) {
          _this.NUMBER_OF_SWAP = 0;

          switch (shortType) {
            case "re-define":
              {
                _this.resetArray();

                break;
              }

            case "merg":
              {
                _this.SELECTED_ALGORITHM = "MERGE SORT";

                _this.mergSort();

                break;
              }

            case "quick":
              {
                _this.SELECTED_ALGORITHM = "QUICK SORT";

                _this.quickSort();

                break;
              }

            case "bubble":
              {
                _this.SELECTED_ALGORITHM = "BUBBLE SORT";

                _this.bubbleSort();

                break;
              }

            case "heap":
              {
                _this.SELECTED_ALGORITHM = "HEAP SORT";

                _this.heapSort();

                break;
              }
          }
        });
        this.sharedService.getChangeInSize().subscribe(function (size) {
          _this.NUMBER_OF_ARRAY_BARS = size;

          _this.resetArray();
        });
      }

      _createClass(ScreenComponent, [{
        key: "resetArray",
        value: function resetArray() {
          var array = [];

          for (var i = 0; i < this.NUMBER_OF_ARRAY_BARS; i++) {
            array.push(this.randomIntFromInterval(5, 730));
          }

          this.Array = array;
        }
      }, {
        key: "mergSort",
        value: function mergSort() {
          var _this2 = this;

          var arrayBars = document.getElementsByClassName('array-bar');
          var animations = Object(_Algo_mergSort_js__WEBPACK_IMPORTED_MODULE_3__["getMergeSortAnimations"])(this.Array);

          var _loop = function _loop(i) {
            var isColorChange = i % 3 !== 2;

            if (isColorChange) {
              var _animations$i = _slicedToArray(animations[i], 2),
                  barOneIdx = _animations$i[0],
                  barTwoIdx = _animations$i[1];

              var barOneStyle = arrayBars[barOneIdx];
              var barTwoStyle = arrayBars[barTwoIdx];
              var color = i % 3 === 0 ? _this2.SECONDARY_COLOR : _this2.PRIMARY_COLOR;
              setTimeout(function () {
                barOneStyle.style.backgroundColor = color;
                barTwoStyle.style.backgroundColor = color;
              }, i * _this2.ANIMATION_SPEED_MS);
            } else {
              setTimeout(function () {
                var _animations$i2 = _slicedToArray(animations[i], 2),
                    barOneIdx = _animations$i2[0],
                    newHeight = _animations$i2[1];

                var barOneStyle = arrayBars[barOneIdx];
                barOneStyle.style.height = "".concat(newHeight, "px");
                _this2.NUMBER_OF_SWAP++;
              }, i * _this2.ANIMATION_SPEED_MS);
            }
          };

          for (var i = 0; i < animations.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "quickSort",
        value: function quickSort() {
          var _this3 = this;

          console.log(this.Array);
          var arrayBars = document.getElementsByClassName('array-bar');
          var animations = Object(_Algo_quickSort_js__WEBPACK_IMPORTED_MODULE_4__["getAnimationsForQuickSort"])(this.Array);

          for (var i = 0; i < animations.length; i++) {
            var check = animations[i][0];

            if (check === "pivoton") {
              (function () {
                var pivotBar = animations[i][1];
                var barPivotStyle = arrayBars[pivotBar];
                setTimeout(function () {
                  barPivotStyle.style.backgroundColor = _this3.PIVOT_COLOR;
                }, i * _this3.ANIMATION_SPEED_MS);
              })();
            } else if (check === "highLighton") {
              (function () {
                var _animations$i$slice = animations[i].slice(1),
                    _animations$i$slice2 = _slicedToArray(_animations$i$slice, 2),
                    barOneIdx = _animations$i$slice2[0],
                    barTwoIdx = _animations$i$slice2[1];

                var barOneStyle = arrayBars[barOneIdx];
                var barTwoeStyle = arrayBars[barTwoIdx];
                setTimeout(function () {
                  barOneStyle.style.backgroundColor = _this3.SECONDARY_COLOR;
                  barTwoeStyle.style.backgroundColor = _this3.SECONDARY_COLOR;
                }, i * _this3.ANIMATION_SPEED_MS);
              })();
            } else if (check === "highLightoff") {
              (function () {
                var _animations$i$slice3 = animations[i].slice(1),
                    _animations$i$slice4 = _slicedToArray(_animations$i$slice3, 2),
                    barOneIdx = _animations$i$slice4[0],
                    barTwoIdx = _animations$i$slice4[1];

                var barOneStyle = arrayBars[barOneIdx];
                var barTwoeStyle = arrayBars[barTwoIdx];
                setTimeout(function () {
                  barOneStyle.style.backgroundColor = _this3.PRIMARY_COLOR;
                  barTwoeStyle.style.backgroundColor = _this3.PRIMARY_COLOR;
                }, i * _this3.ANIMATION_SPEED_MS);
              })();
            } else if (check === "pivotOff") {
              (function () {
                var pivotBar = animations[i][1];
                var barPivotStyle = arrayBars[pivotBar];
                setTimeout(function () {
                  barPivotStyle.style.backgroundColor = _this3.PRIMARY_COLOR;
                }, i * _this3.ANIMATION_SPEED_MS);
              })();
            } else if (check === "swap") {
              (function () {
                var _animations$i$slice5 = animations[i].slice(1),
                    _animations$i$slice6 = _slicedToArray(_animations$i$slice5, 4),
                    barIndexOne = _animations$i$slice6[0],
                    barValueOne = _animations$i$slice6[1],
                    barIndexTwo = _animations$i$slice6[2],
                    barValueTwo = _animations$i$slice6[3];

                var barOneStyle = arrayBars[barIndexOne];
                var barTwoeStyle = arrayBars[barIndexTwo];
                setTimeout(function () {
                  barOneStyle.style.height = "".concat(barValueOne, "px");
                  barTwoeStyle.style.height = "".concat(barValueTwo, "px");
                  _this3.NUMBER_OF_SWAP++;
                }, i * _this3.ANIMATION_SPEED_MS);
              })();
            }
          }
        }
      }, {
        key: "bubbleSort",
        value: function bubbleSort() {
          var _this4 = this;

          var animations = Object(_Algo_bubbleSort__WEBPACK_IMPORTED_MODULE_5__["getAnimationsForBubbleSort"])(this.Array);
          var arrayBars = document.getElementsByClassName('array-bar');

          var _loop2 = function _loop2(i) {
            var _animations$i$slice7 = animations[i].slice(),
                _animations$i$slice8 = _slicedToArray(_animations$i$slice7, 5),
                check = _animations$i$slice8[0],
                v1 = _animations$i$slice8[1],
                v2 = _animations$i$slice8[2],
                v3 = _animations$i$slice8[3],
                v4 = _animations$i$slice8[4];

            if (check === "HighLightOn") {
              var barOneStyle = arrayBars[v1];
              var barTwoStyle = arrayBars[v2];
              setTimeout(function () {
                barOneStyle.style.backgroundColor = _this4.SECONDARY_COLOR;
                barTwoStyle.style.backgroundColor = _this4.SECONDARY_COLOR;
              }, i * _this4.ANIMATION_SPEED_MS);
            } else if (check === "HighLightOff") {
              var _barOneStyle = arrayBars[v1];
              var _barTwoStyle = arrayBars[v2];
              setTimeout(function () {
                _barOneStyle.style.backgroundColor = _this4.PRIMARY_COLOR;
                _barTwoStyle.style.backgroundColor = _this4.PRIMARY_COLOR;
              }, i * _this4.ANIMATION_SPEED_MS);
            } else if (check === "Swap") {
              var _barOneStyle2 = arrayBars[v1];
              var _barTwoStyle2 = arrayBars[v3];
              setTimeout(function () {
                _barOneStyle2.style.height = "".concat(v2, "px");
                _barTwoStyle2.style.height = "".concat(v4, "px");
                _this4.NUMBER_OF_SWAP++;
              }, i * _this4.ANIMATION_SPEED_MS);
            }
          };

          for (var i = 0; i < animations.length; i++) {
            _loop2(i);
          }
        }
      }, {
        key: "heapSort",
        value: function heapSort() {
          var _this5 = this;

          var animations = Object(_Algo_heapSort__WEBPACK_IMPORTED_MODULE_6__["getAnimationsForHeapSort"])(this.Array);
          var arrayBars = document.getElementsByClassName('array-bar');

          var _loop3 = function _loop3(i) {
            var _animations$i$slice9 = animations[i].slice(),
                _animations$i$slice10 = _slicedToArray(_animations$i$slice9, 5),
                check = _animations$i$slice10[0],
                v1 = _animations$i$slice10[1],
                v2 = _animations$i$slice10[2],
                v3 = _animations$i$slice10[3],
                v4 = _animations$i$slice10[4];

            if (check === "HighLightOn") {
              var barOneStyle = arrayBars[v1];
              var barTwoStyle = arrayBars[v2];
              setTimeout(function () {
                barOneStyle.style.backgroundColor = _this5.SECONDARY_COLOR;
                barTwoStyle.style.backgroundColor = _this5.SECONDARY_COLOR;
              }, i * _this5.ANIMATION_SPEED_MS);
            } else if (check === "HighLightOff") {
              var _barOneStyle3 = arrayBars[v1];
              var _barTwoStyle3 = arrayBars[v2];
              setTimeout(function () {
                _barOneStyle3.style.backgroundColor = _this5.PRIMARY_COLOR;
                _barTwoStyle3.style.backgroundColor = _this5.PRIMARY_COLOR;
              }, i * _this5.ANIMATION_SPEED_MS);
            } else if (check === "Swap") {
              var _barOneStyle4 = arrayBars[v1];
              var _barTwoStyle4 = arrayBars[v3];
              setTimeout(function () {
                _barOneStyle4.style.height = "".concat(v2, "px");
                _barTwoStyle4.style.height = "".concat(v4, "px");
                _this5.NUMBER_OF_SWAP++;
              }, i * _this5.ANIMATION_SPEED_MS);
            }
          };

          for (var i = 0; i < animations.length; i++) {
            _loop3(i);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

      }, {
        key: "randomIntFromInterval",
        value: function randomIntFromInterval(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
      }]);

      return ScreenComponent;
    }();

    ScreenComponent.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }];
    };

    ScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-screen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./screen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screen/screen.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./screen.component.css */
      "./src/app/screen/screen.component.css"))["default"]]
    })], ScreenComponent);
    /***/
  },

  /***/
  "./src/app/shared.service.ts":
  /*!***********************************!*\
    !*** ./src/app/shared.service.ts ***!
    \***********************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService() {
        _classCallCheck(this, SharedService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sizeAsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(SharedService, [{
        key: "sendClickEvent",
        value: function sendClickEvent(shortType) {
          this.subject.next(shortType);
        }
      }, {
        key: "sendSizeChangeEvent",
        value: function sendSizeChangeEvent(size) {
          this.sizeAsSubject.next(size);
        }
      }, {
        key: "getClickEvent",
        value: function getClickEvent() {
          return this.subject.asObservable();
        }
      }, {
        key: "getChangeInSize",
        value: function getChangeInSize() {
          return this.sizeAsSubject.asObservable();
        }
      }]);

      return SharedService;
    }();

    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SharedService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\Users\Shyam\Desktop\CodeLab\Sorting-visualizer-angular\sort-visualizer\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map