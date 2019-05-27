(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    width: 80%;\r\n    margin:0 auto;\r\n}\r\nbutton{\r\n    margin: 10px;\r\n}\r\n.form-control{\r\n    width: 80%;\r\n}\r\n.containor{\r\n    width: 80%;\r\n    margin:0 auto;\r\n    padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi1lZGl0LXByb2ZpbGUvYWRtaW4tZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2FkbWluLWVkaXQtcHJvZmlsZS9hZG1pbi1lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLmNvbnRhaW5vcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outercontainor\">\n  <div class=\"containor\">\n    <form [formGroup]=\"userDetailsFrom\">\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">User Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"userName\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">Email</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" [readOnly]=\"readOnly\">\n          </div>\n      </div>\n      <button mat-raised-button color=\"warn\" (click)=\"onPasswordChangeClick()\">Change Password</button>\n      <br>\n      <div class=\"password-containor\" *ngIf=\"passwordDisplay\">\n        <div class=\"form-group row\">\n          <label  class=\"col-sm-2 col-form-label\">New Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"newPassword\" >\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label  class=\"col-sm-2 col-form-label\">Confirm Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"confirmPassword\" >\n          </div>\n        </div>\n        <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\"\n             class=\"alert alert-danger\">\n          <div *ngIf=\"confirmPassword.errors.required\">\n            Confirm Password required.\n          </div>\n          <div *ngIf=\"confirmPassword.errors.mustMatch\">Passwords must match</div>\n        </div>\n      </div>\n\n        <button mat-raised-button color='primary' (click)=\"updateUserDetails()\">Save Changes</button>\n        <button mat-raised-button color='primary' (click)=\"edit()\">Edit</button>\n        <button mat-raised-button color='primary' (click)=\"reset()\">Reset</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminEditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditProfileComponent", function() { return AdminEditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/must-match.validator */ "./src/app/helpers/must-match.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AdminEditProfileComponent = /** @class */ (function () {
    function AdminEditProfileComponent(fb, userService, router, ar) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.ar = ar;
        this.readOnly = true;
        this.passwordDisplay = false;
        this.userDetailsFrom = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: [''],
            confirmPassword: ['']
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('newPassword', 'confirmPassword')
        });
    }
    AdminEditProfileComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
    };
    AdminEditProfileComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.user);
            _this.setvalues(_this.user);
        });
    };
    AdminEditProfileComponent.prototype.setvalues = function (data) {
        this.userDetailsFrom.get('userName').setValue(data.user.userName);
        this.userDetailsFrom.get('email').setValue(data.user.email);
        this.userDetailsFrom.get('firstName').setValue(data.user.firstName);
        this.userDetailsFrom.get('lastName').setValue(data.user.lastName);
    };
    AdminEditProfileComponent.prototype.edit = function () {
        console.log('edit clicked');
        if (this.readOnly === true) {
            this.readOnly = false;
        }
        else {
            this.readOnly = true;
        }
    };
    AdminEditProfileComponent.prototype.onPasswordChangeClick = function () {
        if (this.passwordDisplay === false) {
            this.passwordDisplay = true;
        }
        else {
            this.passwordDisplay = false;
            this.newPassword.reset();
            this.confirmPassword.reset();
        }
    };
    AdminEditProfileComponent.prototype.reset = function () {
        this.setvalues(this.user);
        this.readOnly = true;
    };
    Object.defineProperty(AdminEditProfileComponent.prototype, "newPassword", {
        get: function () { return this.userDetailsFrom.get('newPassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminEditProfileComponent.prototype, "confirmPassword", {
        get: function () { return this.userDetailsFrom.get('confirmPassword'); },
        enumerable: true,
        configurable: true
    });
    AdminEditProfileComponent.prototype.updateUserDetails = function () {
        if (this.readOnly === false) {
            if (this.passwordDisplay === false && !this.userDetailsFrom.invalid) {
                this.userService.updateUser(this.userDetailsFrom.value).subscribe();
            }
        }
        this.userService.updateUser(this.userDetailsFrom.value).subscribe();
        this.router.navigate(['../admin-profile'], { relativeTo: this.ar });
    };
    AdminEditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-profile',
            template: __webpack_require__(/*! ./admin-edit-profile.component.html */ "./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-profile.component.css */ "./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AdminEditProfileComponent);
    return AdminEditProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-profile/admin-profile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/components/admin-profile/admin-profile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-actions .flex-spacer {\r\n    width: 100%;\r\n  }\r\n.outer{\r\n    padding:100px;\r\n}\r\n.adminLinks{\r\n    margin-left: 220px;\r\n    \r\n}\r\n.mycard {\r\n    border: 1px solid #d3d3d3;\r\n    border-radius: 0rem;\r\n    background: linear-gradient(#BBBBBF,#E1E1E1)\r\n  }\r\n.bg-img {\r\n    background-size: cover;\r\n    min-height: 180px;\r\n    background-position: center;\r\n    background-color: #ccc;\r\n}\r\n.my-img{\r\n    margin: 0 auto;\r\n    width: 128px;\r\n    height: 128px;\r\n}\r\n.my-img img{\r\n    margin:0 auto;\r\n}\r\n.content{\r\n    text-align: center;\r\n}\r\nh4{\r\n    color: black;\r\n    font-family: sans-serif;\r\n}\r\n.outer-containor{\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    margin-top: 150px;\r\n    margin-bottom: auto;\r\n}\r\n.containor{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi1wcm9maWxlL2FkbWluLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjtBQUNGO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQjtFQUNGO0FBRUY7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tcHJvZmlsZS9hZG1pbi1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtYWN0aW9ucyAuZmxleC1zcGFjZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4ub3V0ZXJ7XHJcbiAgICBwYWRkaW5nOjEwMHB4O1xyXG59XHJcbi5hZG1pbkxpbmtze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5teWNhcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDByZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0JCQkJCRiwjRTFFMUUxKVxyXG4gIH1cclxuICBcclxuLmJnLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi5teS1pbWd7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbn1cclxuLm15LWltZyBpbWd7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmg0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuLm91dGVyLWNvbnRhaW5vcntcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuLmNvbnRhaW5vcntcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/components/admin-profile/admin-profile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/admin-profile/admin-profile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"outer-containor\">\n    <div class=\"containor\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"5%\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"20%\">\n        <a [routerLink]=\"[ '../register']\" style=\"text-decoration:none\">\n          <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/team.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Add User</h4>\n            </div>\n          </div>\n        </a>\n\n      </div>\n      <div fxFlex=\"20%\">\n        <a [routerLink]=\"[ '../create-test']\" style=\"text-decoration:none\">\n          <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/test-tube.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Create Test</h4>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div fxFlex=\"20%\">\n        <a [routerLink]=\"[ '../load-test']\" style=\"text-decoration:none\">\n          <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/flask.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Add Test Results</h4>\n            </div>\n          </div>\n        </a>\n      </div>\n\n\n    </div>\n    <div class=\"containor\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"5%\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"20%\">\n        <a [routerLink]=\"[ '../create-observation']\" style=\"text-decoration:none\">\n          <div class=\"mycard mat-elevation-z5\" >\n            <div class=\"my-img\">\n              <img src=\"assets/images/petri-dish.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Add Observation</h4>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div fxFlex=\"20%\">\n        <a [routerLink]=\"[ '../admin-edit-profile']\" style=\"text-decoration:none\">\n          <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/curriculum.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Edit Profile</h4>\n            </div>\n          </div>\n        </a>\n\n      </div>\n      <div fxFlex=\"20%\">\n        <a [routerLink]=\"[ '../edit-test']\" style=\"text-decoration:none\">\n          <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/flask_delete.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Delete Test</h4>\n            </div>\n          </div>\n        </a>\n\n      </div>\n\n    </div>\n    <div class=\"containor\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"5%\" fxLayoutAlign=\"center center\">\n\n      <div fxFlex=\"20%\">\n        <a [routerLink]=\"[ '../edit-observation']\" style=\"text-decoration:none\">\n          <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/petri-dish-delete.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Delete Observation</h4>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div fxFlex=\"20%\">\n        <a [routerLink]=\"[ '../testList']\" style=\"text-decoration:none\">\n          <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/archive.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>View Added Test Results</h4>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div fxFlex=\"20%\">\n        <a [routerLink]=\"[ '../view-patients']\" style=\"text-decoration:none\">\n          <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/find-my-friend.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>View Patients</h4>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/admin-profile/admin-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/admin-profile/admin-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminProfileComponent = /** @class */ (function () {
    function AdminProfileComponent() {
    }
    AdminProfileComponent.prototype.ngOnInit = function () {
    };
    AdminProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-profile',
            template: __webpack_require__(/*! ./admin-profile.component.html */ "./src/app/admin/components/admin-profile/admin-profile.component.html"),
            styles: [__webpack_require__(/*! ./admin-profile.component.css */ "./src/app/admin/components/admin-profile/admin-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminProfileComponent);
    return AdminProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-toolbar/admin-toolbar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/components/admin-toolbar/admin-toolbar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.header{\r\n  /* position: absolute; */\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n}\r\n\r\nimg{\r\n  width: 200px;\r\n}\r\n\r\nbutton{\r\n  outline: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi10b29sYmFyL2FkbWluLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2FkbWluLXRvb2xiYXIvYWRtaW4tdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbmltZ3tcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/admin-toolbar/admin-toolbar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/admin-toolbar/admin-toolbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color='primary' class=\"header mat-elevation-z5 \" >\n  <span><img src=\"assets/images/logo.jpg\" alt=\"\"></span>\n  <span class=\"example-fill-remaining-space\"></span>\n  <span>\n      <button mat-button [matMenuTriggerFor]=\"menu1\"><mat-icon aria-label=\"label\">menu</mat-icon></button>\n        <mat-menu #menu1=\"matMenu\">\n          <button mat-menu-item routerLink=\"register\">Add User</button>\n          <button mat-menu-item routerLink=\"create-test\">Create Test</button>\n          <button mat-menu-item routerLink=\"load-test\">Add Test Results</button>\n          <button mat-menu-item routerLink=\"create-observation\">Add New Observation</button>\n          <button mat-menu-item routerLink=\"admin-edit-profile\">Edit Profile</button>\n          <button mat-menu-item routerLink=\"edit-test\">EditTest</button>\n          <button mat-menu-item routerLink=\"edit-observation\">Edit Observation</button>\n        </mat-menu>\n    </span>\n  <span><button mat-icon-button [routerLink]=\"['admin-profile']\">\n        <mat-icon aria-label=\"label\">home</mat-icon>\n    </button>\n  </span>\n  <span>\n        <button mat-icon-button (click)=\"logout()\">\n        <mat-icon aria-label=\"label\">logout</mat-icon>\n    </button>\n  </span>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/components/admin-toolbar/admin-toolbar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/admin-toolbar/admin-toolbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminToolbarComponent", function() { return AdminToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app-login.service */ "./src/app/services/app-login.service.ts");





var AdminToolbarComponent = /** @class */ (function () {
    function AdminToolbarComponent(userService, router, appLoginService) {
        this.userService = userService;
        this.router = router;
        this.appLoginService = appLoginService;
    }
    AdminToolbarComponent.prototype.ngOnInit = function () {
    };
    AdminToolbarComponent.prototype.logout = function () {
        this.userService.deleteToken();
        this.router.navigateByUrl('/login');
    };
    AdminToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-toolbar',
            template: __webpack_require__(/*! ./admin-toolbar.component.html */ "./src/app/admin/components/admin-toolbar/admin-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./admin-toolbar.component.css */ "./src/app/admin/components/admin-toolbar/admin-toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_app_login_service__WEBPACK_IMPORTED_MODULE_4__["AppLoginService"]])
    ], AdminToolbarComponent);
    return AdminToolbarComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/create-observation/create-observation.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/create-observation/create-observation.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containor{\r\n  margin-top: 10%;\r\n}\r\n.o-containor{\r\n    width: 50%;\r\n    margin: auto;\r\n    padding: 50px;\r\n    background-color: #eaf3ee;\r\n}\r\n.mycard {\r\n    text-align: center;\r\n    padding: 10px;\r\n    border: 1px solid #d3d3d3;\r\n}\r\n.my-img {\r\n    margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jcmVhdGUtb2JzZXJ2YXRpb24vY3JlYXRlLW9ic2VydmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jcmVhdGUtb2JzZXJ2YXRpb24vY3JlYXRlLW9ic2VydmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbm9ye1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4uby1jb250YWlub3J7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWYzZWU7XHJcbn1cclxuLm15Y2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcclxufVxyXG4gIFxyXG4ubXktaW1nIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/components/create-observation/create-observation.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/components/create-observation/create-observation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <div class=\"o-containor mat-elevation-z4\">\n    <form  [formGroup]=\"observationDetails\" style=\"text-align: center\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder='Observation Name' formControlName=\"observationName\">\n      </mat-form-field>\n      <div *ngIf=\"observationName.invalid && (observationName.dirty || observationName.touched)\"\n           class=\"alert alert-danger\">\n        <div *ngIf=\"observationName.errors.required\">\n          Observation Name is required.\n        </div>\n      </div>\n      <br>\n      <mat-form-field>\n\n        <mat-select placeholder=\"Data Type\" formControlName=\"dataType\" >\n          <mat-option value='numaric'>Numeric</mat-option>\n          <mat-option value='coded'>Coded</mat-option>\n        </mat-select>\n        <mat-icon\n          matSuffix\n          matTooltip=\"Info about the action\"\n        >info</mat-icon>\n      </mat-form-field>\n      <br>\n\n      <mat-form-field *ngIf=\"observationDetails.value.dataType==='numaric'\">\n        <input type=\"text\" matInput placeholder='Unit' formControlName=\"unit\">\n      </mat-form-field>\n      <br *ngIf=\"observationDetails.value.dataType==='numaric'\">\n      <mat-form-field *ngIf=\"observationDetails.value.dataType==='numaric'\">\n        <input type=\"text\" matInput placeholder='Reference Range' formControlName=\"referenceRange\">\n      </mat-form-field>\n\n\n      <mat-card *ngIf=\"observationDetails.value.dataType==='coded'\">\n        <mat-card-header>\n          <mat-card-title>Add coded values</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <div formArrayName=\"codedValues\" *ngFor=\"let coedValue of observationDetails.get('codedValues').controls; let j=index\">\n            <div [formGroupName]='j'>\n              <mat-form-field>\n                <input matInput placeholder=\"Value\" formControlName=\"codedValue\">\n                <button mat-icon-button matSuffix>\n                  <mat-icon aria-label=\"label\" (click)=\"deleteCodeValue(j)\">cancel</mat-icon>\n                </button>\n              </mat-form-field>\n            </div>\n          </div>\n\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button color=\"primary\" (click)=\"addCodedValues()\">Add value</button>\n        </mat-card-actions>\n      </mat-card>\n      <br>\n      <button mat-raised-button color=\"primary\" (click)=\"addObservation()\">Add Observation</button>\n    </form>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/create-observation/create-observation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/components/create-observation/create-observation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateObservationComponent, ErrorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObservationComponent", function() { return CreateObservationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialog", function() { return ErrorDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/observation.service */ "./src/app/services/observation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var CreateObservationComponent = /** @class */ (function () {
    function CreateObservationComponent(fb, observationService, router, ar, dialog) {
        this.fb = fb;
        this.observationService = observationService;
        this.router = router;
        this.ar = ar;
        this.dialog = dialog;
    }
    CreateObservationComponent.prototype.ngOnInit = function () {
        this.observationDetails = this.fb.group({
            observationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataType: [],
            unit: [''],
            referenceRange: [''],
            codedValues: this.fb.array([])
        });
        this.dataTypeValueChanges();
    };
    CreateObservationComponent.prototype.addCodedValues = function (i) {
        (this.observationDetails.get('codedValues')).push(this.createNewCodeValue());
    };
    CreateObservationComponent.prototype.createNewCodeValue = function () {
        return this.fb.group({
            codedValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreateObservationComponent.prototype.deleteCodeValue = function (j) {
        this.observationDetails.get('codedValues').removeAt(j);
    };
    CreateObservationComponent.prototype.addObservation = function () {
        var _this = this;
        console.log("add observation");
        if (this.observationDetails.invalid) {
            alert('Please insert correct information');
            return;
        }
        else {
            this.observationService.addObservations(this.observationDetails.value).subscribe(function (res) {
                console.log(res);
                if (res.code === 11000) {
                    _this.openDialog('h');
                }
                else {
                    _this.router.navigate(['../admin-profile'], { relativeTo: _this.ar });
                }
            });
            //
        }
    };
    Object.defineProperty(CreateObservationComponent.prototype, "observationName", {
        get: function () { return this.observationDetails.get('observationName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateObservationComponent.prototype, "dataType", {
        get: function () { return this.observationDetails.get('dataType'); },
        enumerable: true,
        configurable: true
    });
    CreateObservationComponent.prototype.dataTypeValueChanges = function () {
        var _this = this;
        this.observationDetails.get('dataType').valueChanges.subscribe(function (typeofdata) {
            if (typeofdata === 'numaric') {
                _this.observationDetails.get('unit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                _this.observationDetails.get('referenceRange').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                while (_this.observationDetails.get('codedValues').length !== 0) {
                    _this.observationDetails.get('codedValues').removeAt(0);
                }
            }
            else {
                _this.observationDetails.get('unit').clearValidators();
                _this.observationDetails.get('referenceRange').clearValidators();
            }
            _this.observationDetails.get('unit').updateValueAndValidity();
            _this.observationDetails.get('referenceRange').updateValueAndValidity();
        });
    };
    CreateObservationComponent.prototype.openDialog = function (message) {
        var _this = this;
        var dialogRef = this.dialog.open(ErrorDialog, {
            width: '300px',
            data: message
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.observationDetails.reset();
        });
    };
    CreateObservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-observation',
            template: __webpack_require__(/*! ./create-observation.component.html */ "./src/app/admin/components/create-observation/create-observation.component.html"),
            styles: [__webpack_require__(/*! ./create-observation.component.css */ "./src/app/admin/components/create-observation/create-observation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_3__["ObservationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], CreateObservationComponent);
    return CreateObservationComponent;
}());

var ErrorDialog = /** @class */ (function () {
    function ErrorDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ErrorDialog.prototype.onClick = function () {
        this.dialogRef.close();
    };
    ErrorDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'error-dialog',
            template: __webpack_require__(/*! ./error-dialog.html */ "./src/app/admin/components/create-observation/error-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], ErrorDialog);
    return ErrorDialog;
}());



/***/ }),

/***/ "./src/app/admin/components/create-observation/error-dialog.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/create-observation/error-dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>This is already exist</h3>\r\n  <button mat-button (click)=\"onClick()\">OK</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/components/create-test/create-test.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/components/create-test/create-test.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-containor{\r\n    margin-top: 50px;\r\n}\r\n.containor{\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    background-color: #ebebeb;\r\n}\r\n.observationField{\r\n    margin-bottom: 20px;\r\n}\r\n.formbutton{\r\n    margin: 10px;\r\n    max-width: 400px;\r\n}\r\n#addNewObs{\r\n    margin-bottom: 25px;\r\n    margin-top: 5px\r\n}\r\n.mat-card .observation-containor{\r\n    margin:20px;\r\n}\r\n.existing-observation{\r\n  margin: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jcmVhdGUtdGVzdC9jcmVhdGUtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2NyZWF0ZS10ZXN0L2NyZWF0ZS10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50LWNvbnRhaW5vcntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmNvbnRhaW5vcntcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5vYnNlcnZhdGlvbkZpZWxke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm1idXR0b257XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4jYWRkTmV3T2Jze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweFxyXG59XHJcbi5tYXQtY2FyZCAub2JzZXJ2YXRpb24tY29udGFpbm9ye1xyXG4gICAgbWFyZ2luOjIwcHg7XHJcbn1cclxuXHJcbi5leGlzdGluZy1vYnNlcnZhdGlvbntcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/components/create-test/create-test.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/create-test/create-test.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-containor\">\n    <div class=\"containor\">\n        <mat-card>\n            <mat-card-header >\n              <mat-card-title >\n                <span class=\"example-fill-remaining-space\"></span>\n                <span>Create Test</span>\n              </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n              \n              <form fxLayout=\"column\" [formGroup]='createTest'>\n                <div class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n                  <mat-form-field>\n                    <input type=\"text\" matInput placeholder=\"Test Name\" formControlName='testName'>\n                  </mat-form-field>\n                </div>\n\n                  <div *ngIf=\"testName.invalid && (testName.dirty || testName.touched)\"\n                       class=\"alert alert-danger\">\n                    <div *ngIf=\"testName.errors?.required\">\n                      Test Name is required.\n                    </div>\n                  </div>\n    \n                  <br>\n    \n                  \n                  <div formArrayName=\"observations\" *ngFor=\"let observation of createTest.get('observations').controls; let i=index\">\n                    <div [formGroupName]=\"i\">\n                        <mat-card class=\"observation-containor\" *ngIf=\"createTest.value.observations[i].hasOwnProperty('observationName')\">\n                          <mat-card-content>\n                              \n                              <br>\n                              <div class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n                                <mat-form-field>\n                                  <input type=\"text\" matInput placeholder='Observation Name'formControlName=\"observationName\">\n                                </mat-form-field>\n                              </div>\n\n                            <div *ngIf=\"getobservationName(i).invalid && (getobservationName(i).dirty || getobservationName(i).touched)\"\n                                 class=\"alert alert-danger\">\n                              <div *ngIf=\"getobservationName(i).errors?.required\">\n                                Observation Name is required.\n                              </div>\n                            </div>\n                              <br>\n                              <div class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n                                <mat-form-field>\n                                  <mat-select placeholder=\"Data Type\" formControlName=\"dataType\" (change)=\"addDatatype()\">\n                                    <mat-option value='numaric'>Numeric</mat-option>\n                                    <mat-option value='coded'>Coded</mat-option>\n                                  </mat-select>\n                                  <mat-icon\n                                    matSuffix\n                                    matTooltip=\"Info about the action\"\n                                  >info</mat-icon>\n                                </mat-form-field>\n                              </div>\n\n                              <br>\n\n                              <div class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n                                <mat-form-field *ngIf=\"createTest.value.observations[i].dataType==='numaric'\">\n                                  <input type=\"text\" matInput placeholder='Unit' formControlName=\"unit\">\n                                </mat-form-field>\n                              </div>\n\n                              <div *ngIf=\"getunit(i).invalid && (getunit(i).dirty || getunit(i).touched) && createTest.value.observations[i].dataType==='numaric'\"\n                                   class=\"alert alert-danger\">\n                                <div *ngIf=\"getunit(i).errors?.required\">\n                                  Unit Name is required.\n                                </div>\n                              </div>\n                              <br *ngIf=\"createTest.value.observations[i].dataType==='numaric'\">\n                              <div class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n                                <mat-form-field *ngIf=\"createTest.value.observations[i].dataType==='numaric'\">\n                                  <input type=\"text\" matInput placeholder='Reference Range' formControlName=\"referenceRange\">\n                                </mat-form-field>\n                              </div>\n\n                              <div *ngIf=\"getreferenceRange(i).invalid && (getreferenceRange(i).dirty || getreferenceRange(i).touched) && createTest.value.observations[i].dataType==='numaric'\"\n                                   class=\"alert alert-danger\">\n                                <div *ngIf=\"getreferenceRange(i).errors?.required\">\n                                  Refference Range is required.\n                                </div>\n                              </div>\n    \n    \n                              <mat-card *ngIf=\"createTest.value.observations[i].dataType==='coded'\">\n                                <mat-card-header>       \n                                  <mat-card-title>Add coded values</mat-card-title>                             \n                                </mat-card-header>\n                                <mat-card-content>\n                                  <div formArrayName=\"codedValues\" *ngFor=\"let coedValue of createTest.get('observations').at(i).get('codedValues').controls; let j=index\">\n                                    <div [formGroupName]='j'>\n                                      <div class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n                                        <mat-form-field>\n                                          <input matInput placeholder=\"Value\" formControlName=\"codedValue\">\n                                          <button mat-icon-button matSuffix>\n                                            <mat-icon aria-label=\"label\" (click)=\"deleteCodeValue(i,j)\">cancel</mat-icon>\n                                          </button>\n                                        </mat-form-field>\n                                      </div>\n\n                                      <div *ngIf=\"getcodedValue(i,j).invalid && (getcodedValue(i,j).dirty || getcodedValue(i,j).touched)\"\n                                           class=\"alert alert-danger\">\n                                        <div *ngIf=\"getcodedValue(i,j).errors?.required\">\n                                          Refference Range is required.\n                                        </div>\n                                        <p>Coded Value Name is required.</p>\n\n                                      </div>\n                                    </div>\n                                  </div>\n                                  \n                                </mat-card-content>\n                                <mat-card-actions>\n                                  <button mat-raised-button color=\"primary\" (click)=\"addCodedValues(i)\">Add value</button>\n                                </mat-card-actions>\n                              </mat-card>\n                              \n        \n                              <br>\n              \n          \n                            </mat-card-content>\n                             <mat-card-actions>\n                              <div class=\"flex-spacer\"></div>\n                              <button mat-icon-button (click)=\"removeField(i)\" matTooltip=\"Delete\">\n                                  <mat-icon aria-label=\"label\">delete</mat-icon>\n                              </button>\n                          </mat-card-actions>\n                        </mat-card>\n                        \n                        <div *ngIf=\"createTest.value.observations[i].hasOwnProperty('existingObservation')\">\n                          <mat-card class=\"existing-observation\">\n                            <div>\n                              <p>{{createTest.value.observations[i].existingObservation.observationName}}</p>\n                              <button mat-icon-button>\n                                <mat-icon aria-label=\"label\" (click)=\"removeField(i)\">delete</mat-icon>\n                              </button>\n                            </div>\n                          </mat-card>\n                        </div>\n                    </div>\n                    \n                  </div>\n                  \n          \n                  <button type=\"button\" mat-raised-button (click)=\"addNewMetaTest()\" color='warn' class=formbutton\n                            matTooltip=\"Info about the action\">Submit</button>\n                  <button id=addNewObs mat-raised-button (click)=\"addNewObsClick()\" color='primary' class=formbutton>Add New Observation</button>\n                  <button  mat-raised-button (click)=\"addExistingObsClick()\" color='primary' class=formbutton>Add Existing Observation</button>\n                </form>\n            </mat-card-content>\n          </mat-card>\n          \n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/components/create-test/create-test.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/create-test/create-test.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateTestComponent, AddObservationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTestComponent", function() { return CreateTestComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddObservationDialog", function() { return AddObservationDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_meta_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/meta-test.service */ "./src/app/services/meta-test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/event-emitter.service */ "./src/app/services/event-emitter.service.ts");
/* harmony import */ var _services_observation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/observation.service */ "./src/app/services/observation.service.ts");








var CreateTestComponent = /** @class */ (function () {
    function CreateTestComponent(fb, metaTestService, router, dialog, eventEmitterService, ar, observationService) {
        this.fb = fb;
        this.metaTestService = metaTestService;
        this.router = router;
        this.dialog = dialog;
        this.eventEmitterService = eventEmitterService;
        this.ar = ar;
        this.observationService = observationService;
        this.observationList = [];
        this.selectedOptions = [];
    }
    CreateTestComponent.prototype.ngOnInit = function () {
        this.createTest = this.fb.group({
            testName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            observations: this.fb.array([
                this.createNewObservation()
            ])
        });
        // if (this.eventEmitterService.subsVar==undefined) {
        //   this.eventEmitterService.subsVar = this.eventEmitterService.
        //   invokeCreateTestComponentFunction.subscribe((selectedOptions) => {
        //     this.addExistingObs(selectedOptions);
        //   });
        // }
        this.dataTypeValueChanges();
    };
    CreateTestComponent.prototype.createNewObservation = function () {
        return this.fb.group({
            observationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataType: [],
            unit: [''],
            referenceRange: [''],
            codedValues: this.fb.array([])
        });
    };
    CreateTestComponent.prototype.createNewCodeValue = function () {
        return this.fb.group({
            codedValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreateTestComponent.prototype.createExistingObservation = function (element) {
        console.log("pushed");
        return this.fb.group({
            existingObservation: [element]
        });
    };
    CreateTestComponent.prototype.addNewObsClick = function () {
        this.createTest.get('observations').push(this.createNewObservation());
        console.log(this.createTest.value);
    };
    CreateTestComponent.prototype.addExistingObs = function (obsid) {
        var _this = this;
        console.log('addExistingObs');
        console.log(obsid);
        if (obsid !== undefined) {
            obsid.forEach(function (element) {
                console.log("element " + element);
                _this.createTest.get('observations').push(_this.createExistingObservation(element));
                console.log(_this.createTest.value);
            });
        }
    };
    CreateTestComponent.prototype.addNewMetaTest = function () {
        var _this = this;
        if (this.createTest.invalid || this.createTest.get('observations').length === 0) {
            alert("Please Fill the form");
            return;
        }
        else {
            console.log("observation length " + this.createTest.get('observations').length);
            this.metaTestService.addTestTemplate(this.createTest.value).subscribe(function (res) {
                console.log("test save " + JSON.stringify(res));
                if (res.code === 11000) {
                    alert("Name of the test is allready exist!");
                }
                else if (res.code === 11001) {
                    alert(res.dupObsName + " is allready exist");
                }
                else {
                    console.log("Test Added");
                    _this.router.navigate(["../admin-profile"], { relativeTo: _this.ar });
                }
            });
            console.log('on addnewTest');
            console.log(this.createTest.value);
        }
    };
    CreateTestComponent.prototype.removeField = function (i) {
        this.createTest.get('observations').removeAt(i);
    };
    CreateTestComponent.prototype.addCodedValues = function (i) {
        (this.createTest.get('observations').at(i)).get('codedValues').push(this.createNewCodeValue());
    };
    CreateTestComponent.prototype.deleteCodeValue = function (i, j) {
        (this.createTest.get('observations').at(i)).get('codedValues').removeAt(j);
    };
    CreateTestComponent.prototype.addExistingObsClick = function () {
        // this.dialog.open(PopupAddComponent);
        this.openDialog();
    };
    Object.defineProperty(CreateTestComponent.prototype, "testName", {
        get: function () { return this.createTest.get('testName'); },
        enumerable: true,
        configurable: true
    });
    CreateTestComponent.prototype.getobservationName = function (i) { return this.createTest.get('observations').at(i).get('observationName'); };
    CreateTestComponent.prototype.getunit = function (i) { return this.createTest.get('observations').at(i).get('unit'); };
    CreateTestComponent.prototype.getreferenceRange = function (i) { return this.createTest.get('observations').at(i).get('referenceRange'); };
    CreateTestComponent.prototype.getcodedValueArray = function (i) { return this.createTest.get('observations').at(i).get('codedValues'); };
    CreateTestComponent.prototype.getcodedValue = function (i, j) { return this.createTest.get('observations').at(i).get('codedValues').at(j); };
    CreateTestComponent.prototype.dataTypeValueChanges = function () {
        var _this = this;
        this.createTest.get('observations').valueChanges.subscribe(function (typeofdata) {
            console.log("array value change " + JSON.stringify(typeofdata));
            console.log(typeofdata.length);
            for (var i = 0; i < typeofdata.length; i++) {
                if (typeofdata[i].dataType === "numaric") {
                    console.log('numaric');
                    _this.getunit(i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                    _this.getreferenceRange(i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                    while (_this.getcodedValueArray(i).length !== 0) {
                        _this.getcodedValueArray(i).removeAt(0);
                    }
                }
                else {
                    console.log('coded');
                    if (_this.getunit(i) !== null && _this.getreferenceRange(i) !== null) {
                        _this.getunit(i).clearValidators();
                        _this.getreferenceRange(i).clearValidators();
                        _this.getunit(i).updateValueAndValidity({ onlySelf: true });
                        _this.getreferenceRange(i).updateValueAndValidity({ onlySelf: true });
                    }
                }
            }
        });
    };
    CreateTestComponent.prototype.loadObservationList = function () {
        var _this = this;
        this.observationList.length = 0;
        this.observationService.getObservationList().subscribe(function (data) {
            data.forEach(function (element) {
                _this.observationList.push(element);
            });
        });
        console.log(this.observationList);
    };
    CreateTestComponent.prototype.openDialog = function () {
        var _this = this;
        this.loadObservationList();
        this.selectedOptions.length = 0;
        var dialogRef = this.dialog.open(AddObservationDialog, {
            data: { observationList: this.observationList, selectedOptions: this.selectedOptions }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.addExistingObs(result);
        });
    };
    CreateTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-test',
            template: __webpack_require__(/*! ./create-test.component.html */ "./src/app/admin/components/create-test/create-test.component.html"),
            styles: [__webpack_require__(/*! ./create-test.component.css */ "./src/app/admin/components/create-test/create-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_meta_test_service__WEBPACK_IMPORTED_MODULE_3__["MetaTestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_services_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_observation_service__WEBPACK_IMPORTED_MODULE_7__["ObservationService"]])
    ], CreateTestComponent);
    return CreateTestComponent;
}());

var AddObservationDialog = /** @class */ (function () {
    function AddObservationDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddObservationDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddObservationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'popup-add.component',
            template: __webpack_require__(/*! ./popup-add.component.html */ "./src/app/admin/components/create-test/popup-add.component.html"),
            styles: [__webpack_require__(/*! ./popup-add.component.css */ "./src/app/admin/components/create-test/popup-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], AddObservationDialog);
    return AddObservationDialog;
}());



/***/ }),

/***/ "./src/app/admin/components/create-test/popup-add.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/components/create-test/popup-add.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    outline: none !important;\r\n    box-shadow: none;\r\n }\r\n\r\n.spacefill {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n.containor{\r\n    width: 500px;\r\n\r\n}\r\n\r\n.list{\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jcmVhdGUtdGVzdC9wb3B1cC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0VBQ2hCOztBQUVGO0lBQ0ksWUFBWTs7QUFFaEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY3JlYXRlLXRlc3QvcG9wdXAtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuIH1cclxuXHJcbi5zcGFjZWZpbGwge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuLmNvbnRhaW5vcntcclxuICAgIHdpZHRoOiA1MDBweDtcclxuXHJcbn1cclxuLmxpc3R7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/components/create-test/popup-add.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/create-test/popup-add.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <div class=\"header\">\n    <span class=\"spacefill\"></span>\n    <span>\n      <button mat-icon-button>\n        <mat-icon (click)=\"onNoClick()\">cancel</mat-icon>\n      </button>\n    </span>\n  </div>\n  <div class=\"filterx\">\n    <mat-form-field>\n      <input matInput placeholder=\"Filter\" [(ngModel)]=\"searchText\">\n    </mat-form-field>\n  </div>\n  <div class=\"list\" *ngIf=\"data.observationList.length!=0\">\n    <mat-selection-list #observations [(ngModel)]=\"data.selectedOptions\">\n      <mat-list-option *ngFor=\"let element of data.observationList | filter:searchText\" [value]=\"element\">\n        {{element.observationName}}\n      </mat-list-option>\n    </mat-selection-list>\n    \n  </div>\n\n  <div class=\"action\">\n    <button mat-raised-button color=\"primary\"  [mat-dialog-close]=\"data.selectedOptions\">Add Observation</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/components/create-test/popup-filter.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/create-test/popup-filter.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        return items.filter(function (item) {
            return Object.keys(item).some(function (key) {
                return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
            });
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/admin/components/edit-observation/delete-observation-confirmation-dialog.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/components/edit-observation/delete-observation-confirmation-dialog.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div mat-dialog-content>\r\n\r\n  <div *ngIf=\"data.datalist.length!==0\">\r\n    <mat-list >\r\n      <mat-list-item *ngFor=\"let item of data.datalist\">\r\n        {{item.testName}}\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <h5>Above tests has this observation</h5>\r\n    <h5>Do you want to delete this with them</h5>\r\n  </div>\r\n  <div *ngIf=\"data.datalist.length===0\">\r\n    <h5>Do you want to delete this</h5>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"true\" >Yes</button>\r\n  <button mat-button [mat-dialog-close]=\"false\"  >No</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/components/edit-observation/edit-observation.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/components/edit-observation/edit-observation.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.containor{\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9lZGl0LW9ic2VydmF0aW9uL2VkaXQtb2JzZXJ2YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2VkaXQtb2JzZXJ2YXRpb24vZWRpdC1vYnNlcnZhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbm9ye1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/components/edit-observation/edit-observation.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/edit-observation/edit-observation.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <div *ngIf=\"observationNames.length!==0\">\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"searchText\"\n             placeholder=\"Filter\">\n    </mat-form-field>\n    <mat-list >\n      <mat-list-item *ngFor=\"let item of observationNames|filter:searchText;let i=index \">\n        <span>{{item.observationName}}</span>\n        <span class=\"example-fill-remaining-space\"></span>\n        <button mat-icon-button (click)=\"deleteObservation(item._id,i)\">\n          <mat-icon class=\"mat-18\">delete</mat-icon>\n        </button>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n\n    </mat-list>\n  </div>\n  <div *ngIf=\"observationNames.length===0\">\n    <h3>No Observations!</h3>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/edit-observation/edit-observation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/edit-observation/edit-observation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditObservationComponent, DeleteObservationConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditObservationComponent", function() { return EditObservationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteObservationConfirmationDialog", function() { return DeleteObservationConfirmationDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_observation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/observation.service */ "./src/app/services/observation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var EditObservationComponent = /** @class */ (function () {
    function EditObservationComponent(observationService, dialog) {
        this.observationService = observationService;
        this.dialog = dialog;
        this.observationNames = [];
        this.testWithObservations = [];
    }
    EditObservationComponent.prototype.ngOnInit = function () {
        this.getObservationList();
    };
    EditObservationComponent.prototype.getObservationList = function () {
        var _this = this;
        this.observationService.getObservationList().subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.observationNames.push(data[i]);
            }
            console.log(_this.observationNames);
        });
    };
    EditObservationComponent.prototype.deleteObservation = function (id, i) {
        var _this = this;
        console.log(id);
        this.observationService.deleteClickObservation(id).subscribe(function (res) {
            console.log("response " + JSON.stringify(res));
            if (res.length !== 0) {
                _this.testWithObservations.length = 0;
                for (var j = 0; j < res.length; j++) {
                    console.log(res[j].testName);
                    _this.testWithObservations.push({ 'testName': res[j].testName, 'id': res[j]._id });
                }
                console.log(_this.testWithObservations);
                _this.openConfirmationDialog().afterClosed().subscribe(function (result) {
                    if (result === true) {
                        _this.observationService.deleteObservation(id).subscribe();
                        _this.observationNames.splice(i, 1);
                    }
                    else {
                    }
                });
            }
            else {
                _this.openConfirmationDialog().afterClosed().subscribe(function (result) {
                    if (result === true) {
                        _this.observationService.deleteObservation(id).subscribe();
                        console.log("length " + _this.observationNames.length);
                        _this.observationNames.splice(i, 1);
                        console.log("length " + _this.observationNames.length);
                    }
                });
            }
        });
    };
    EditObservationComponent.prototype.openConfirmationDialog = function () {
        return this.dialog.open(DeleteObservationConfirmationDialog, {
            width: '400px',
            data: { 'datalist': this.testWithObservations }
        });
    };
    EditObservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-observation',
            template: __webpack_require__(/*! ./edit-observation.component.html */ "./src/app/admin/components/edit-observation/edit-observation.component.html"),
            styles: [__webpack_require__(/*! ./edit-observation.component.css */ "./src/app/admin/components/edit-observation/edit-observation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_observation_service__WEBPACK_IMPORTED_MODULE_2__["ObservationService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EditObservationComponent);
    return EditObservationComponent;
}());

var DeleteObservationConfirmationDialog = /** @class */ (function () {
    function DeleteObservationConfirmationDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteObservationConfirmationDialog.prototype.onButtonClick = function () {
        this.dialogRef.close();
    };
    DeleteObservationConfirmationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-observation-confirmation-dialog',
            template: __webpack_require__(/*! ./delete-observation-confirmation-dialog.html */ "./src/app/admin/components/edit-observation/delete-observation-confirmation-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], DeleteObservationConfirmationDialog);
    return DeleteObservationConfirmationDialog;
}());



/***/ }),

/***/ "./src/app/admin/components/edit-test/delete-confirmation-dialog.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/components/edit-test/delete-confirmation-dialog.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div mat-dialog-content>\r\n  <p>Are you sure to delete this?</p>\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"true\" >Yes</button>\r\n  <button mat-button [mat-dialog-close]=\"false\"  >No</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/components/edit-test/edit-test.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/components/edit-test/edit-test.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.containor{\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9lZGl0LXRlc3QvZWRpdC10ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9lZGl0LXRlc3QvZWRpdC10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5jb250YWlub3J7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/edit-test/edit-test.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/edit-test/edit-test.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <div *ngIf=\"testNames.length!==0\">\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"searchText\"\n             placeholder=\"Filter\">\n    </mat-form-field>\n    <mat-list >\n      <mat-list-item *ngFor=\"let item of testNames|filter:searchText;let i=index \">\n        <span>{{item.testName}}</span>\n        <span class=\"example-fill-remaining-space\"></span>\n        <button mat-icon-button (click)=\"delete(item._id,i)\">\n          <mat-icon class=\"mat-18\">delete</mat-icon>\n        </button>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n\n    </mat-list>\n  </div>\n  <div *ngIf=\"testNames.length===0\">\n    <h3>No Tests!</h3>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/edit-test/edit-test.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/edit-test/edit-test.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditTestComponent, DeleteConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTestComponent", function() { return EditTestComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationDialog", function() { return DeleteConfirmationDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_meta_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/meta-test.service */ "./src/app/services/meta-test.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var EditTestComponent = /** @class */ (function () {
    function EditTestComponent(metaTestService, dialog) {
        this.metaTestService = metaTestService;
        this.dialog = dialog;
        this.testNames = [];
    }
    EditTestComponent.prototype.ngOnInit = function () {
        this.getTestName();
    };
    EditTestComponent.prototype.getTestName = function () {
        var _this = this;
        this.metaTestService.getMetaTestName().subscribe(function (data) {
            console.log(data.length);
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].testName);
                _this.testNames.push(data[i]);
            }
            // console.log("test names "+JSON.stringify(data));
        });
    };
    EditTestComponent.prototype.delete = function (id, i) {
        var _this = this;
        this.openConfirmationDialog().afterClosed().subscribe(function (result) {
            if (result === true) {
                console.log('True');
                _this.metaTestService.deleteMetaTest(id).subscribe(function (data) {
                    console.log(data);
                    _this.testNames.splice(i, 1);
                    console.log(_this.testNames);
                }, function (error) {
                    console.log(error.status);
                });
            }
            else {
                console.log('False');
            }
        });
    };
    EditTestComponent.prototype.openConfirmationDialog = function () {
        return this.dialog.open(DeleteConfirmationDialog, {
            width: '250px'
        });
    };
    EditTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-test',
            template: __webpack_require__(/*! ./edit-test.component.html */ "./src/app/admin/components/edit-test/edit-test.component.html"),
            styles: [__webpack_require__(/*! ./edit-test.component.css */ "./src/app/admin/components/edit-test/edit-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_meta_test_service__WEBPACK_IMPORTED_MODULE_2__["MetaTestService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EditTestComponent);
    return EditTestComponent;
}());

var DeleteConfirmationDialog = /** @class */ (function () {
    function DeleteConfirmationDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteConfirmationDialog.prototype.onButtonClick = function () {
        this.dialogRef.close();
    };
    DeleteConfirmationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-confirmation-dialog',
            template: __webpack_require__(/*! ./delete-confirmation-dialog.html */ "./src/app/admin/components/edit-test/delete-confirmation-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], DeleteConfirmationDialog);
    return DeleteConfirmationDialog;
}());



/***/ }),

/***/ "./src/app/admin/components/register/register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/admin/components/register/register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containor{\r\n    margin-top:100px;\r\n}\r\n.register-containor{\r\n    width:70%;\r\n    margin: 0 auto;\r\n    background-color: #f5f5f5;\r\n}\r\n.login-form{\r\n    padding: 10px;\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n\r\n}\r\n.title{\r\n  text-align: center;\r\n}\r\n.button-containor{\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    margin: 0 auto;\r\n}\r\nmat-card-header{\r\n    text-align: center;\r\n}\r\nmat-form-field{\r\n    max-width: 400px;\r\n    min-width: 50px;\r\n    margin-left: 10px;\r\n}\r\nbutton{\r\n    background-color: rgb(32, 103, 209);\r\n    margin:0 auto;\r\n}\r\nmat-icon{\r\n    margin-right: 5px;\r\n    \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCOztBQUV0QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWlub3J7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG59XHJcbi5yZWdpc3Rlci1jb250YWlub3J7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3Jte1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbm9ye1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxubWF0LWNhcmQtaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDEwMywgMjA5KTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbn1cclxubWF0LWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n    <div class=\"register-containor mat-elevation-z5\" >\n      <div class=\"title\">\n        <h4>Add User</h4>\n      </div>\n      <div class=\"login-form\">\n        <form fxLayout=\"column\" [formGroup]=\"registerForm\">\n          <div class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n            <!-- <mat-icon>person</mat-icon> -->\n            <mat-form-field>\n              <input matInput placeholder=\"First Name\" type=\"text\" formControlName=\"firstName\">\n            </mat-form-field>\n            <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf=\"firstName.errors.required\">\n                First Name is required.\n              </div>\n            </div>\n\n          </div>\n          <div  class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n            <!-- <mat-icon>person</mat-icon> -->\n            <mat-form-field>\n              <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"lastName\">\n            </mat-form-field>\n            <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf=\"lastName.errors.required\">\n                Last Name is required.\n              </div>\n            </div>\n          </div>\n          <div  class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n            <!-- <mat-icon>person</mat-icon> -->\n            <mat-form-field>\n              <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"userName\">\n            </mat-form-field>\n            <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf=\"userName.errors.required\">\n                User Name is required.\n              </div>\n            </div>\n          </div>\n\n          <div  class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n            <!-- <mat-icon>email</mat-icon> -->\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"email\">\n            </mat-form-field>\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf=\"email.errors.required\">\n                Email is required.\n              </div>\n            </div>\n          </div>\n          <div  class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n            <!-- <mat-icon>email</mat-icon> -->\n            <mat-form-field>\n              <mat-select placeholder=\"User Type\" formControlName=\"userType\">\n                <mat-option value='patient'>Patient</mat-option>\n                <mat-option value='labEmployee'>Lab Employee</mat-option>\n                <mat-option value='admin'>Admin</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div  class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n            <mat-form-field>\n              <mat-select  placeholder=\"Sex\" formControlName=\"sex\">\n                <mat-option value='male'>Male</mat-option>\n                <mat-option value='female'>Female</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div  class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n            <!-- <mat-icon>email</mat-icon> -->\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" formControlName=\"birthDay\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n            <div *ngIf=\"birthDay.invalid && (birthDay.dirty || birthDay.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf=\"birthDay.errors.required\">\n                Date of Birth is required\n              </div>\n            </div>\n          </div>\n\n          <div  class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n            <!-- <mat-icon>vpn_key</mat-icon> -->\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n            </mat-form-field>\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf=\"password.errors.required\">\n                Password required.\n              </div>\n            </div>\n          </div>\n\n          <div  class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n            <!-- <mat-icon>vpn_key</mat-icon> -->\n            <mat-form-field>\n              <input matInput placeholder=\"Confirm Password\" type=\"password\" formControlName=\"confirmPassword\">\n            </mat-form-field>\n            <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf=\"confirmPassword.errors.required\">\n                Confirm Password required.\n              </div>\n              <div *ngIf=\"confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n          </div>\n\n          <div class=\"button-containor\">\n            <button mat-button mat-raised-color=\"primary\" (click)='register()'>Add</button>\n          </div>\n        </form>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/components/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/must-match.validator */ "./src/app/helpers/must-match.validator.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, registerService, router, ar) {
        this.fb = fb;
        this.registerService = registerService;
        this.router = router;
        this.ar = ar;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            birthDay: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirmPassword')
        });
    };
    RegisterComponent.prototype.register = function () {
        if (this.registerForm.invalid) {
            alert('Please enter correct information');
            return;
        }
        else {
            this.registerService.register(this.registerForm.value).subscribe();
            this.router.navigate(['../admin-profile'], { relativeTo: this.ar });
        }
    };
    Object.defineProperty(RegisterComponent.prototype, "firstName", {
        get: function () { return this.registerForm.get('firstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "lastName", {
        get: function () { return this.registerForm.get('lastName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "userName", {
        get: function () { return this.registerForm.get('userName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "userType", {
        get: function () { return this.registerForm.get('userType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "sex", {
        get: function () { return this.registerForm.get('sex'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "birthDay", {
        get: function () { return this.registerForm.get('birthDay'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () { return this.registerForm.get('confirmPassword'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/admin/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/admin/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/view-patientinfo/view-patientinfo.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/components/view-patientinfo/view-patientinfo.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field label{\r\n  width: 100px;\r\n  display: inline-block;\r\n  font-weight: 500;\r\n}\r\n\r\n.field span{\r\n  margin-left: 10px;\r\n}\r\n\r\n.field{\r\n  margin: 20px;\r\n}\r\n\r\n.testList{\r\n  width: 100%;\r\n}\r\n\r\n.split {\r\n  margin-top: 50px;\r\n  height: 100%;\r\n  width: 50%;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n/* Control the left side */\r\n\r\n.left {\r\n  left: 0;\r\n\r\n}\r\n\r\n/* Control the right side */\r\n\r\n.right {\r\n  right: 0;\r\n\r\n}\r\n\r\n.containor{\r\n  height:100%;\r\n}\r\n\r\n.col{\r\n  width: 50%;\r\n  height: 100%;\r\n  float: left;\r\n}\r\n\r\n.tests{\r\n  max-height: 90vh;\r\n}\r\n\r\n.header{\r\n  background-color: #dedede;\r\n}\r\n\r\n.clearfix{\r\n  overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy92aWV3LXBhdGllbnRpbmZvL3ZpZXctcGF0aWVudGluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0UsT0FBTzs7QUFFVDs7QUFFQSwyQkFBMkI7O0FBQzNCO0VBQ0UsUUFBUTs7QUFFVjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdmlldy1wYXRpZW50aW5mby92aWV3LXBhdGllbnRpbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQgbGFiZWx7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZmllbGQgc3BhbntcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcbi5maWVsZHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi50ZXN0TGlzdHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwbGl0IHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi8qIENvbnRyb2wgdGhlIGxlZnQgc2lkZSAqL1xyXG4ubGVmdCB7XHJcbiAgbGVmdDogMDtcclxuXHJcbn1cclxuXHJcbi8qIENvbnRyb2wgdGhlIHJpZ2h0IHNpZGUgKi9cclxuLnJpZ2h0IHtcclxuICByaWdodDogMDtcclxuXHJcbn1cclxuLmNvbnRhaW5vcntcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG4uY29se1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50ZXN0c3tcclxuICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxufVxyXG4uY2xlYXJmaXh7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/components/view-patientinfo/view-patientinfo.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/view-patientinfo/view-patientinfo.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <div class=\"col clearfix\">\n    <div class=\"header \">\n      <h3>User details</h3>\n    </div>\n    <div class=\"info\">\n      <div class=\"field\">\n        <label >First Name</label>\n        <span>{{patient?.firstName}}</span>\n\n      </div>\n      <div class=\"field\">\n        <label >Last Name</label>\n        <span>{{patient?.lastName}}</span>\n\n      </div>\n      <div class=\"field\">\n        <label >User Name</label>\n        <span>{{patient?.userName}}</span>\n\n      </div>\n      <div class=\"field\">\n        <label >Sex</label>\n        <span>{{patient?.sex}}</span>\n      </div>\n      <div class=\"field\">\n        <label >email</label>\n        <span>{{patient?.email}}</span>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col clearfix\">\n    <div class=\"header\">\n      <h3>Test Results</h3>\n    </div>\n    <div class=\"tests\">\n      <mat-nav-list>\n        <mat-list-item *ngFor=\"let item of patientstestlis;let i=index\" (click)=\"navigate(i)\">\n          <h3 mat-line>{{item?.testName}}</h3>\n          <p mat-line>{{item?.date|date}}</p>\n        </mat-list-item>\n        <mat-divider></mat-divider>\n      </mat-nav-list>\n    </div>\n  </div>\n</div>\n\n<!--<mat-grid-list cols=\"2\" >-->\n<!--  <mat-grid-tile>-->\n<!--    <mat-grid-tile-header>User Details</mat-grid-tile-header>-->\n<!--    <div class=\"patients-info\">-->\n<!--      <div class=\"field\">-->\n<!--        <label >First Name</label>-->\n<!--        <span>{{patient?.firstName}}</span>-->\n\n<!--      </div>-->\n<!--      <div class=\"field\">-->\n<!--        <label >Last Name</label>-->\n<!--        <span>{{patient?.lastName}}</span>-->\n\n<!--      </div>-->\n<!--      <div class=\"field\">-->\n<!--        <label >User Name</label>-->\n<!--        <span>{{patient?.userName}}</span>-->\n\n<!--      </div>-->\n<!--      <div class=\"field\">-->\n<!--        <label >Sex</label>-->\n<!--        <span>{{patient?.sex}}</span>-->\n<!--      </div>-->\n<!--      <div class=\"field\">-->\n<!--        <label >email</label>-->\n<!--        <span>{{patient?.email}}</span>-->\n\n<!--      </div>-->\n<!--    </div>-->\n<!--  </mat-grid-tile>-->\n<!--  <mat-grid-tile colspan=\"1\" rowspan=\"1\">-->\n<!--    <mat-grid-tile-header>Tests</mat-grid-tile-header>-->\n<!--    <mat-nav-list>-->\n<!--      <mat-list-item *ngFor=\"let item of patientstestlis;let i=index\" (click)=\"navigate(i)\">-->\n<!--        <h3 mat-line>{{item?.testName}}</h3>-->\n<!--        <p mat-line>{{item?.date|date}}</p>-->\n<!--      </mat-list-item>-->\n<!--      <mat-divider></mat-divider>-->\n<!--    </mat-nav-list>-->\n<!--  </mat-grid-tile>-->\n<!--</mat-grid-list>-->\n"

/***/ }),

/***/ "./src/app/admin/components/view-patientinfo/view-patientinfo.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/view-patientinfo/view-patientinfo.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewPatientinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPatientinfoComponent", function() { return ViewPatientinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_test_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/test-form.service */ "./src/app/services/test-form.service.ts");





var ViewPatientinfoComponent = /** @class */ (function () {
    function ViewPatientinfoComponent(route, userService, testFormService, router) {
        this.route = route;
        this.userService = userService;
        this.testFormService = testFormService;
        this.router = router;
    }
    ViewPatientinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log("ID " + params._id);
            _this.userService.getPatient(params._id).subscribe(function (res) {
                console.log('patient ' + JSON.stringify(res));
                _this.patient = res;
            });
            _this.testFormService.getPatientsTestRecords(params._id).subscribe(function (res) {
                console.log("patient tests " + JSON.stringify(res));
                _this.patientstestlis = res;
            });
        });
    };
    ViewPatientinfoComponent.prototype.navigate = function (i) {
        this.router.navigate(['../view-patient-test'], { queryParams: { id: this.patientstestlis[i]._id, patientName: this.patient.userName }, relativeTo: this.route });
    };
    ViewPatientinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-patientinfo',
            template: __webpack_require__(/*! ./view-patientinfo.component.html */ "./src/app/admin/components/view-patientinfo/view-patientinfo.component.html"),
            styles: [__webpack_require__(/*! ./view-patientinfo.component.css */ "./src/app/admin/components/view-patientinfo/view-patientinfo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_test_form_service__WEBPACK_IMPORTED_MODULE_4__["TestFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewPatientinfoComponent);
    return ViewPatientinfoComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/view-patients/view-patients.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/components/view-patients/view-patients.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdmlldy1wYXRpZW50cy92aWV3LXBhdGllbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/view-patients/view-patients.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/view-patients/view-patients.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <mat-nav-list >\n    <mat-list-item *ngFor=\"let item of patientsList;let i=index\" (click)=\"navigate(i)\">\n      {{item?.userName}}\n    </mat-list-item>\n    <mat-divider></mat-divider>\n  </mat-nav-list>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/view-patients/view-patients.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/view-patients/view-patients.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewPatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPatientsComponent", function() { return ViewPatientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewPatientsComponent = /** @class */ (function () {
    function ViewPatientsComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    ViewPatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllPatients().subscribe(function (res) {
            if (res) {
                console.log("res " + JSON.stringify(res));
                _this.patientsList = res;
            }
        });
    };
    ViewPatientsComponent.prototype.navigate = function (i) {
        this.router.navigate(['../view-patientinfo'], { queryParams: { _id: this.patientsList[i]._id }, relativeTo: this.route });
    };
    ViewPatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-patients',
            template: __webpack_require__(/*! ./view-patients.component.html */ "./src/app/admin/components/view-patients/view-patients.component.html"),
            styles: [__webpack_require__(/*! ./view-patients.component.css */ "./src/app/admin/components/view-patients/view-patients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewPatientsComponent);
    return ViewPatientsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _load_test_load_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-test/load-test.component */ "./src/app/load-test/load-test.component.ts");
/* harmony import */ var _admin_components_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/components/create-test/create-test.component */ "./src/app/admin/components/create-test/create-test.component.ts");
/* harmony import */ var _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-form/test-form.component */ "./src/app/test-form/test-form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/components/register/register.component */ "./src/app/admin/components/register/register.component.ts");
/* harmony import */ var _admin_components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/components/admin-profile/admin-profile.component */ "./src/app/admin/components/admin-profile/admin-profile.component.ts");
/* harmony import */ var _patient_components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patient/components/patient-profile/patient-profile.component */ "./src/app/patient/components/patient-profile/patient-profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-admin.guard */ "./src/app/auth/auth-admin.guard.ts");
/* harmony import */ var _admin_components_create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/components/create-observation/create-observation.component */ "./src/app/admin/components/create-observation/create-observation.component.ts");
/* harmony import */ var _patient_components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patient/components/edit-profile/edit-profile.component */ "./src/app/patient/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _patient_components_view_patient_testlist_view_patient_testlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patient/components/view-patient-testlist/view-patient-testlist.component */ "./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.ts");
/* harmony import */ var _lab_employee_components_lab_employee_profile_lab_employee_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lab-employee/components/lab-employee-profile/lab-employee-profile.component */ "./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.ts");
/* harmony import */ var _patient_components_view_test_view_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patient/components/view-test/view-test.component */ "./src/app/patient/components/view-test/view-test.component.ts");
/* harmony import */ var _lab_employee_components_lab_employee_edit_profile_lab_employee_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component */ "./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.ts");
/* harmony import */ var _admin_components_admin_edit_profile_admin_edit_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/components/admin-edit-profile/admin-edit-profile.component */ "./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.ts");
/* harmony import */ var _admin_components_edit_test_edit_test_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/components/edit-test/edit-test.component */ "./src/app/admin/components/edit-test/edit-test.component.ts");
/* harmony import */ var _admin_components_edit_observation_edit_observation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/components/edit-observation/edit-observation.component */ "./src/app/admin/components/edit-observation/edit-observation.component.ts");
/* harmony import */ var _admin_components_admin_toolbar_admin_toolbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/components/admin-toolbar/admin-toolbar.component */ "./src/app/admin/components/admin-toolbar/admin-toolbar.component.ts");
/* harmony import */ var _lab_employee_components_lab_employee_toolbar_lab_employee_toolbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component */ "./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.ts");
/* harmony import */ var _patient_components_patient_toolbar_patient_toolbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./patient/components/patient-toolbar/patient-toolbar.component */ "./src/app/patient/components/patient-toolbar/patient-toolbar.component.ts");
/* harmony import */ var _patient_components_download_multiple_pdf_download_multiple_pdf_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./patient/components/download-multiple-pdf/download-multiple-pdf.component */ "./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.ts");
/* harmony import */ var _view_added_test_results_list_view_added_test_results_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view-added-test-results-list/view-added-test-results-list.component */ "./src/app/view-added-test-results-list/view-added-test-results-list.component.ts");
/* harmony import */ var _view_patient_test_view_patient_test_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./view-patient-test/view-patient-test.component */ "./src/app/view-patient-test/view-patient-test.component.ts");
/* harmony import */ var _admin_components_view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/components/view-patients/view-patients.component */ "./src/app/admin/components/view-patients/view-patients.component.ts");
/* harmony import */ var _admin_components_view_patientinfo_view_patientinfo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/components/view-patientinfo/view-patientinfo.component */ "./src/app/admin/components/view-patientinfo/view-patientinfo.component.ts");





























var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "admin-home", component: _admin_components_admin_toolbar_admin_toolbar_component__WEBPACK_IMPORTED_MODULE_21__["AdminToolbarComponent"], canActivate: [_auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]], children: [
            { path: '', redirectTo: "admin-profile", pathMatch: 'full' },
            { path: "admin-profile", component: _admin_components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_8__["AdminProfileComponent"], canActivate: [_auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]] },
            { path: "register", component: _admin_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], canActivate: [_auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]] },
            { path: "test-form", component: _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_5__["TestFormComponent"] },
            { path: "create-test", component: _admin_components_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_4__["CreateTestComponent"], canActivate: [_auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]] },
            { path: "admin-edit-profile", component: _admin_components_admin_edit_profile_admin_edit_profile_component__WEBPACK_IMPORTED_MODULE_18__["AdminEditProfileComponent"], canActivate: [_auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]] },
            { path: "edit-test", component: _admin_components_edit_test_edit_test_component__WEBPACK_IMPORTED_MODULE_19__["EditTestComponent"], canActivate: [_auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]] },
            { path: "edit-observation", component: _admin_components_edit_observation_edit_observation_component__WEBPACK_IMPORTED_MODULE_20__["EditObservationComponent"], canActivate: [_auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]] },
            { path: "load-test", component: _load_test_load_test_component__WEBPACK_IMPORTED_MODULE_3__["LoadTestComponent"] },
            { path: "create-observation", component: _admin_components_create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_12__["CreateObservationComponent"], canActivate: [_auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]] },
            { path: "testList", component: _view_added_test_results_list_view_added_test_results_list_component__WEBPACK_IMPORTED_MODULE_25__["ViewAddedTestResultsListComponent"] },
            { path: "view-patient-test", component: _view_patient_test_view_patient_test_component__WEBPACK_IMPORTED_MODULE_26__["ViewPatientTestComponent"] },
            { path: "view-patients", component: _admin_components_view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_27__["ViewPatientsComponent"] },
            { path: "view-patientinfo", component: _admin_components_view_patientinfo_view_patientinfo_component__WEBPACK_IMPORTED_MODULE_28__["ViewPatientinfoComponent"] },
        ] },
    { path: "labemployee-home", component: _lab_employee_components_lab_employee_toolbar_lab_employee_toolbar_component__WEBPACK_IMPORTED_MODULE_22__["LabEmployeeToolbarComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], children: [
            { path: '', redirectTo: 'lab-empolyee-profile', pathMatch: 'full' },
            { path: "lab-empolyee-profile", component: _lab_employee_components_lab_employee_profile_lab_employee_profile_component__WEBPACK_IMPORTED_MODULE_15__["LabEmployeeProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
            { path: "lab-empolyee-edit-profile", component: _lab_employee_components_lab_employee_edit_profile_lab_employee_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__["LabEmployeeEditProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
            { path: "load-test", component: _load_test_load_test_component__WEBPACK_IMPORTED_MODULE_3__["LoadTestComponent"] },
            { path: "test-form", component: _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_5__["TestFormComponent"] },
        ] },
    { path: "patient-home", component: _patient_components_patient_toolbar_patient_toolbar_component__WEBPACK_IMPORTED_MODULE_23__["PatientToolbarComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], children: [
            { path: '', redirectTo: 'patient-profile', pathMatch: 'full' },
            { path: "patient-profile", component: _patient_components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_9__["PatientProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
            { path: "view-testList", component: _patient_components_view_patient_testlist_view_patient_testlist_component__WEBPACK_IMPORTED_MODULE_14__["ViewPatientTestlistComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
            { path: "view-myTest", component: _patient_components_view_test_view_test_component__WEBPACK_IMPORTED_MODULE_16__["ViewTestComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
            { path: "edit-profile", component: _patient_components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__["EditProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
            { path: "download-multiple", component: _patient_components_download_multiple_pdf_download_multiple_pdf_component__WEBPACK_IMPORTED_MODULE_24__["DownloadMultiplePdfComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
        ] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n.header{\r\n  /* position: absolute; */\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n}\r\n\r\nimg{\r\n  width: 200px;\r\n}\r\n\r\nbutton{\r\n  outline: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCOztBQUVGO0VBQ0Usd0JBQXdCO0VBQ3hCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtBQUNaOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4uaGVhZGVye1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbmltZ3tcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/app-login.service */ "./src/app/services/app-login.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router, appLoginService) {
        this.userService = userService;
        this.router = router;
        this.appLoginService = appLoginService;
        this.title = 'frontend';
        this.isLoggedIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.appLoginService.isLoggedIN.subscribe(isLoggedIn=>this.isLoggedIn=isLoggedIn);
        this.userService.isUserLoggedIn();
    };
    AppComponent.prototype.logout = function () {
        this.userService.deleteToken();
        this.appLoginService.logoutTrigger(false);
        this.router.navigateByUrl('/login');
    };
    AppComponent.prototype.home = function () {
        var _this = this;
        console.log("inside home click");
        var gotData;
        this.userService.getUserType().subscribe(function (data) {
            gotData = data;
            console.log(gotData.userType);
            if (gotData.userType === "patient") {
                _this.router.navigateByUrl('/patient-profile');
            }
            else if (gotData.userType === "admin") {
                console.log("inside admin if");
                _this.router.navigateByUrl('/admin-profile');
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_app_login_service__WEBPACK_IMPORTED_MODULE_4__["AppLoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_meta_test_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/meta-test.service */ "./src/app/services/meta-test.service.ts");
/* harmony import */ var _services_load_test_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/load-test.service */ "./src/app/services/load-test.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _services_app_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/app-login.service */ "./src/app/services/app-login.service.ts");
/* harmony import */ var _admin_components_create_test_popup_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/components/create-test/popup-filter.pipe */ "./src/app/admin/components/create-test/popup-filter.pipe.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/event-emitter.service */ "./src/app/services/event-emitter.service.ts");
/* harmony import */ var _services_create_test_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/create-test.service */ "./src/app/services/create-test.service.ts");
/* harmony import */ var _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./test-form/test-form.component */ "./src/app/test-form/test-form.component.ts");
/* harmony import */ var _load_test_load_test_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./load-test/load-test.component */ "./src/app/load-test/load-test.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_components_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/components/register/register.component */ "./src/app/admin/components/register/register.component.ts");
/* harmony import */ var _admin_components_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/components/create-test/create-test.component */ "./src/app/admin/components/create-test/create-test.component.ts");
/* harmony import */ var _admin_components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/components/admin-profile/admin-profile.component */ "./src/app/admin/components/admin-profile/admin-profile.component.ts");
/* harmony import */ var _patient_components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./patient/components/patient-profile/patient-profile.component */ "./src/app/patient/components/patient-profile/patient-profile.component.ts");
/* harmony import */ var _admin_components_create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/components/create-observation/create-observation.component */ "./src/app/admin/components/create-observation/create-observation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _patient_components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./patient/components/edit-profile/edit-profile.component */ "./src/app/patient/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _patient_components_view_test_view_test_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./patient/components/view-test/view-test.component */ "./src/app/patient/components/view-test/view-test.component.ts");
/* harmony import */ var _patient_components_view_patient_testlist_view_patient_testlist_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./patient/components/view-patient-testlist/view-patient-testlist.component */ "./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.ts");
/* harmony import */ var _lab_employee_components_lab_employee_profile_lab_employee_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lab-employee/components/lab-employee-profile/lab-employee-profile.component */ "./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.ts");
/* harmony import */ var _lab_employee_components_lab_employee_edit_profile_lab_employee_edit_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component */ "./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.ts");
/* harmony import */ var _admin_components_admin_edit_profile_admin_edit_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/components/admin-edit-profile/admin-edit-profile.component */ "./src/app/admin/components/admin-edit-profile/admin-edit-profile.component.ts");
/* harmony import */ var _admin_components_edit_test_edit_test_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/components/edit-test/edit-test.component */ "./src/app/admin/components/edit-test/edit-test.component.ts");
/* harmony import */ var _admin_components_edit_observation_edit_observation_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/components/edit-observation/edit-observation.component */ "./src/app/admin/components/edit-observation/edit-observation.component.ts");
/* harmony import */ var _admin_components_admin_toolbar_admin_toolbar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/components/admin-toolbar/admin-toolbar.component */ "./src/app/admin/components/admin-toolbar/admin-toolbar.component.ts");
/* harmony import */ var _lab_employee_components_lab_employee_toolbar_lab_employee_toolbar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component */ "./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.ts");
/* harmony import */ var _patient_components_patient_toolbar_patient_toolbar_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./patient/components/patient-toolbar/patient-toolbar.component */ "./src/app/patient/components/patient-toolbar/patient-toolbar.component.ts");
/* harmony import */ var _patient_components_download_multiple_pdf_download_multiple_pdf_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./patient/components/download-multiple-pdf/download-multiple-pdf.component */ "./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_added_test_results_list_view_added_test_results_list_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./view-added-test-results-list/view-added-test-results-list.component */ "./src/app/view-added-test-results-list/view-added-test-results-list.component.ts");
/* harmony import */ var _view_patient_test_view_patient_test_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./view-patient-test/view-patient-test.component */ "./src/app/view-patient-test/view-patient-test.component.ts");
/* harmony import */ var _admin_components_view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/components/view-patients/view-patients.component */ "./src/app/admin/components/view-patients/view-patients.component.ts");
/* harmony import */ var _admin_components_view_patientinfo_view_patientinfo_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/components/view-patientinfo/view-patientinfo.component */ "./src/app/admin/components/view-patientinfo/view-patientinfo.component.ts");


















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _admin_components_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_23__["CreateTestComponent"],
                _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_19__["TestFormComponent"],
                _load_test_load_test_component__WEBPACK_IMPORTED_MODULE_20__["LoadTestComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _admin_components_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                _admin_components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_24__["AdminProfileComponent"],
                _patient_components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_25__["PatientProfileComponent"],
                _patient_components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_29__["EditProfileComponent"],
                _admin_components_create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_26__["CreateObservationComponent"],
                _patient_components_view_test_view_test_component__WEBPACK_IMPORTED_MODULE_30__["ViewTestComponent"],
                _patient_components_view_patient_testlist_view_patient_testlist_component__WEBPACK_IMPORTED_MODULE_31__["ViewPatientTestlistComponent"],
                _admin_components_create_test_popup_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterPipe"],
                _lab_employee_components_lab_employee_profile_lab_employee_profile_component__WEBPACK_IMPORTED_MODULE_32__["LabEmployeeProfileComponent"],
                _lab_employee_components_lab_employee_edit_profile_lab_employee_edit_profile_component__WEBPACK_IMPORTED_MODULE_33__["LabEmployeeEditProfileComponent"],
                _admin_components_admin_edit_profile_admin_edit_profile_component__WEBPACK_IMPORTED_MODULE_34__["AdminEditProfileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["PopupError"],
                _admin_components_edit_test_edit_test_component__WEBPACK_IMPORTED_MODULE_35__["EditTestComponent"],
                _admin_components_edit_test_edit_test_component__WEBPACK_IMPORTED_MODULE_35__["DeleteConfirmationDialog"],
                _admin_components_edit_observation_edit_observation_component__WEBPACK_IMPORTED_MODULE_36__["EditObservationComponent"],
                _admin_components_edit_observation_edit_observation_component__WEBPACK_IMPORTED_MODULE_36__["DeleteObservationConfirmationDialog"],
                _admin_components_admin_toolbar_admin_toolbar_component__WEBPACK_IMPORTED_MODULE_37__["AdminToolbarComponent"],
                _lab_employee_components_lab_employee_toolbar_lab_employee_toolbar_component__WEBPACK_IMPORTED_MODULE_38__["LabEmployeeToolbarComponent"],
                _patient_components_patient_toolbar_patient_toolbar_component__WEBPACK_IMPORTED_MODULE_39__["PatientToolbarComponent"],
                _admin_components_create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_26__["ErrorDialog"],
                _admin_components_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_23__["AddObservationDialog"],
                _patient_components_download_multiple_pdf_download_multiple_pdf_component__WEBPACK_IMPORTED_MODULE_40__["DownloadMultiplePdfComponent"],
                _view_added_test_results_list_view_added_test_results_list_component__WEBPACK_IMPORTED_MODULE_42__["ViewAddedTestResultsListComponent"],
                _view_patient_test_view_patient_test_component__WEBPACK_IMPORTED_MODULE_43__["ViewPatientTestComponent"],
                _admin_components_view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_44__["ViewPatientsComponent"],
                _admin_components_view_patientinfo_view_patientinfo_component__WEBPACK_IMPORTED_MODULE_45__["ViewPatientinfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_41__["DatePipe"], _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_17__["EventEmitterService"], _services_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"], _services_create_test_service__WEBPACK_IMPORTED_MODULE_18__["CreateTestService"], _services_meta_test_service__WEBPACK_IMPORTED_MODULE_10__["MetaTestService"], _services_load_test_service__WEBPACK_IMPORTED_MODULE_11__["LoadTestService"], _services_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _services_app_login_service__WEBPACK_IMPORTED_MODULE_15__["AppLoginService"], _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                    multi: true
                }],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_21__["PopupError"], _admin_components_edit_test_edit_test_component__WEBPACK_IMPORTED_MODULE_35__["DeleteConfirmationDialog"], _admin_components_edit_observation_edit_observation_component__WEBPACK_IMPORTED_MODULE_36__["DeleteObservationConfirmationDialog"], _admin_components_create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_26__["ErrorDialog"], _admin_components_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_23__["AddObservationDialog"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-admin.guard.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-admin.guard.ts ***!
  \******************************************/
/*! exports provided: AuthAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function() { return AuthAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var AuthAdminGuard = /** @class */ (function () {
    function AuthAdminGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthAdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        this.userService.getUserType().subscribe(function (data) {
            _this.usertype = data;
            if (!(_this.usertype.userType === "admin") || !_this.userService.isUserLoggedIn()) {
                console.log("route error");
                _this.router.navigateByUrl('/login');
                _this.userService.deleteToken();
                return false;
            }
        });
        // if(!this.userService.isUserLoggedIn() && !(this.usertype==="admin") ){
        //   this.router.navigateByUrl('/login');
        //   this.userService.deleteToken();
        //   return false;
        // }
        return true;
    };
    AuthAdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthAdminGuard);
    return AuthAdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.userService.isUserLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth')) {
            return next.handle(req.clone());
        }
        else {
            var clonedReq = req.clone({
                headers: req.headers.set('autherization', 'Bearer ' + this.userService.getToken())
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/must-match.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/must-match.validator.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  width: 80%;\r\n  margin:0 auto;\r\n}\r\nbutton{\r\n  margin: 10px;\r\n}\r\n.form-control{\r\n  width: 80%;\r\n}\r\n.containor{\r\n  width: 80%;\r\n  margin:0 auto;\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFiLWVtcGxveWVlL2NvbXBvbmVudHMvbGFiLWVtcGxveWVlLWVkaXQtcHJvZmlsZS9sYWItZW1wbG95ZWUtZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sYWItZW1wbG95ZWUvY29tcG9uZW50cy9sYWItZW1wbG95ZWUtZWRpdC1wcm9maWxlL2xhYi1lbXBsb3llZS1lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46MCBhdXRvO1xyXG59XHJcbmJ1dHRvbntcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbi5jb250YWlub3J7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outercontainor\">\n  <div class=\"containor\">\n    <form [formGroup]=\"userDetailsFrom\">\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">User Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"userName\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n      <button mat-raised-button color=\"warn\" (click)=\"onPasswordChangeClick()\">Change Password</button>\n      <br>\n      <div class=\"password-containor\" *ngIf=\"passwordDisplay\">\n        <div class=\"form-group row\">\n          <label  class=\"col-sm-2 col-form-label\">New Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"newPassword\" >\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label  class=\"col-sm-2 col-form-label\">Confirm Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"confirmPassword\" >\n          </div>\n        </div>\n        <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\"\n             class=\"alert alert-danger\">\n          <div *ngIf=\"confirmPassword.errors.required\">\n            Confirm Password required.\n          </div>\n          <div *ngIf=\"confirmPassword.errors.mustMatch\">Passwords must match</div>\n        </div>\n      </div>\n\n      <button mat-raised-button color='primary' (click)=\"updateUserDetails()\">Save Changes</button>\n      <button mat-raised-button color='primary' (click)=\"edit()\">Edit</button>\n      <button mat-raised-button color='primary' (click)=\"reset()\">Reset</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LabEmployeeEditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabEmployeeEditProfileComponent", function() { return LabEmployeeEditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/must-match.validator */ "./src/app/helpers/must-match.validator.ts");





var LabEmployeeEditProfileComponent = /** @class */ (function () {
    function LabEmployeeEditProfileComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.readOnly = true;
        this.passwordDisplay = false;
        this.userDetailsFrom = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            newPassword: [''],
            confirmPassword: ['']
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('newPassword', 'confirmPassword')
        });
    }
    LabEmployeeEditProfileComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
    };
    LabEmployeeEditProfileComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.user);
            _this.setvalues(_this.user);
        });
    };
    LabEmployeeEditProfileComponent.prototype.setvalues = function (data) {
        this.userDetailsFrom.get('userName').setValue(data.user.userName);
        this.userDetailsFrom.get('email').setValue(data.user.email);
        this.userDetailsFrom.get('firstName').setValue(data.user.firstName);
        this.userDetailsFrom.get('lastName').setValue(data.user.lastName);
    };
    LabEmployeeEditProfileComponent.prototype.edit = function () {
        console.log('edit clicked');
        if (this.readOnly === true) {
            this.readOnly = false;
        }
        else {
            this.readOnly = true;
        }
    };
    LabEmployeeEditProfileComponent.prototype.onPasswordChangeClick = function () {
        if (this.passwordDisplay === false) {
            this.passwordDisplay = true;
        }
        else {
            this.passwordDisplay = false;
            this.newPassword.reset();
            this.confirmPassword.reset();
        }
    };
    LabEmployeeEditProfileComponent.prototype.reset = function () {
        this.setvalues(this.user);
        this.readOnly = true;
    };
    Object.defineProperty(LabEmployeeEditProfileComponent.prototype, "newPassword", {
        get: function () { return this.userDetailsFrom.get('newPassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabEmployeeEditProfileComponent.prototype, "confirmPassword", {
        get: function () { return this.userDetailsFrom.get('confirmPassword'); },
        enumerable: true,
        configurable: true
    });
    LabEmployeeEditProfileComponent.prototype.updateUserDetails = function () {
        if (this.readOnly === false) {
            if (this.passwordDisplay === false && !this.userDetailsFrom.invalid) {
                this.userService.updateUser(this.userDetailsFrom.value).subscribe();
            }
        }
        this.userService.updateUser(this.userDetailsFrom.value).subscribe();
    };
    LabEmployeeEditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lab-employee-edit-profile',
            template: __webpack_require__(/*! ./lab-employee-edit-profile.component.html */ "./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./lab-employee-edit-profile.component.css */ "./src/app/lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LabEmployeeEditProfileComponent);
    return LabEmployeeEditProfileComponent;
}());



/***/ }),

/***/ "./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-actions .flex-spacer {\r\n    width: 100%;\r\n  }\r\n.outer{\r\n    padding:100px;\r\n}\r\n.adminLinks{\r\n    margin-left: 220px;\r\n    \r\n}\r\n.mycard {\r\n    border: 1px solid #d3d3d3;\r\n    border-radius: 0rem;\r\n    background: linear-gradient(#BBBBBF,#E1E1E1)\r\n  }\r\n.bg-img {\r\n    background-size: cover;\r\n    min-height: 180px;\r\n    background-position: center;\r\n    background-color: #ccc;\r\n}\r\n.my-img{\r\n    margin: 0 auto;\r\n    width: 128px;\r\n    height: 128px;\r\n}\r\n.my-img img{\r\n    margin:0 auto;\r\n}\r\n.content{\r\n    text-align: center;\r\n}\r\nh4{\r\n    color: black;\r\n    font-family: sans-serif;\r\n}\r\n.containor{\r\n    margin-top: 150px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFiLWVtcGxveWVlL2NvbXBvbmVudHMvbGFiLWVtcGxveWVlLXByb2ZpbGUvbGFiLWVtcGxveWVlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjtBQUNGO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQjtFQUNGO0FBRUY7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGFiLWVtcGxveWVlL2NvbXBvbmVudHMvbGFiLWVtcGxveWVlLXByb2ZpbGUvbGFiLWVtcGxveWVlLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1hY3Rpb25zIC5mbGV4LXNwYWNlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5vdXRlcntcclxuICAgIHBhZGRpbmc6MTAwcHg7XHJcbn1cclxuLmFkbWluTGlua3N7XHJcbiAgICBtYXJnaW4tbGVmdDogMjIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLm15Y2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQkJCQkJGLCNFMUUxRTEpXHJcbiAgfVxyXG4gIFxyXG4uYmctaW1nIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuLm15LWltZ3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxufVxyXG4ubXktaW1nIGltZ3tcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4uY29udGFpbm9ye1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <div class=\"containor\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"5%\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"20%\">\n      <a [routerLink]=\"[ '../lab-empolyee-edit-profile']\" style=\"text-decoration:none\">\n        <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/curriculum.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Edit Profile</h4>\n              </div>\n        </div>\n      </a>\n      \n    </div>\n    <div fxFlex=\"20%\">\n      <a [routerLink]=\"[ '../load-test']\" style=\"text-decoration:none\">\n        <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/flask.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Add Test Results</h4>\n              </div>\n        </div>\n      </a>\n    </div>\n    \n    \n  </div>\n  \n  \n</div>\n"

/***/ }),

/***/ "./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.ts ***!
  \************************************************************************************************/
/*! exports provided: LabEmployeeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabEmployeeProfileComponent", function() { return LabEmployeeProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LabEmployeeProfileComponent = /** @class */ (function () {
    function LabEmployeeProfileComponent() {
    }
    LabEmployeeProfileComponent.prototype.ngOnInit = function () {
    };
    LabEmployeeProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lab-employee-profile',
            template: __webpack_require__(/*! ./lab-employee-profile.component.html */ "./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.html"),
            styles: [__webpack_require__(/*! ./lab-employee-profile.component.css */ "./src/app/lab-employee/components/lab-employee-profile/lab-employee-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabEmployeeProfileComponent);
    return LabEmployeeProfileComponent;
}());



/***/ }),

/***/ "./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.header{\r\n  /* position: absolute; */\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n}\r\n\r\nimg{\r\n  width: 200px;\r\n}\r\n\r\nbutton{\r\n  outline: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFiLWVtcGxveWVlL2NvbXBvbmVudHMvbGFiLWVtcGxveWVlLXRvb2xiYXIvbGFiLWVtcGxveWVlLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYWItZW1wbG95ZWUvY29tcG9uZW50cy9sYWItZW1wbG95ZWUtdG9vbGJhci9sYWItZW1wbG95ZWUtdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbmltZ3tcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color='primary' class=\"header mat-elevation-z5 \" >\n  <span><img src=\"assets/images/logo.jpg\" alt=\"\"></span>\n  <span class=\"example-fill-remaining-space\"></span>\n  <span>\n      <button mat-button [matMenuTriggerFor]=\"menu1\"><mat-icon aria-label=\"label\">menu</mat-icon></button>\n        <mat-menu #menu1=\"matMenu\">\n          <button mat-menu-item routerLink=\"lab-empolyee-edit-profile\">Edit Profile</button>\n          <button mat-menu-item routerLink=\"load-test\">Add Test Results</button>\n        </mat-menu>\n    </span>\n  <span><button mat-icon-button [routerLink]=\"['lab-empolyee-profile']\">\n        <mat-icon aria-label=\"label\">home</mat-icon>\n    </button>\n  </span>\n  <span>\n        <button mat-icon-button (click)=\"logout()\">\n        <mat-icon aria-label=\"label\">logout</mat-icon>\n    </button>\n  </span>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.ts ***!
  \************************************************************************************************/
/*! exports provided: LabEmployeeToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabEmployeeToolbarComponent", function() { return LabEmployeeToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app-login.service */ "./src/app/services/app-login.service.ts");





var LabEmployeeToolbarComponent = /** @class */ (function () {
    function LabEmployeeToolbarComponent(userService, router, appLoginService) {
        this.userService = userService;
        this.router = router;
        this.appLoginService = appLoginService;
    }
    LabEmployeeToolbarComponent.prototype.ngOnInit = function () {
    };
    LabEmployeeToolbarComponent.prototype.logout = function () {
        this.userService.deleteToken();
        this.router.navigateByUrl('/login');
    };
    LabEmployeeToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lab-employee-toolbar',
            template: __webpack_require__(/*! ./lab-employee-toolbar.component.html */ "./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./lab-employee-toolbar.component.css */ "./src/app/lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_app_login_service__WEBPACK_IMPORTED_MODULE_4__["AppLoginService"]])
    ], LabEmployeeToolbarComponent);
    return LabEmployeeToolbarComponent;
}());



/***/ }),

/***/ "./src/app/load-test/load-test.component.css":
/*!***************************************************!*\
  !*** ./src/app/load-test/load-test.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containor{\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZC10ZXN0L2xvYWQtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9hZC10ZXN0L2xvYWQtdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5vcntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/load-test/load-test.component.html":
/*!****************************************************!*\
  !*** ./src/app/load-test/load-test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"searchText\"\n           placeholder=\"Filter\">\n  </mat-form-field>\n  <div *ngIf=\"testNames.length!==0\">\n    <mat-nav-list>\n      <mat-list-item *ngFor=\"let item of testNames|filter:searchText;let i=index\" (click)=\"navigateAddTestResults(i)\">\n        {{ item[0] }}\n        <mat-divider></mat-divider>\n      </mat-list-item>\n\n    </mat-nav-list>\n  </div>\n  <div *ngIf=\"testNames.length===0\">\n    <h3>No Tests</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/load-test/load-test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/load-test/load-test.component.ts ***!
  \**************************************************/
/*! exports provided: LoadTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTestComponent", function() { return LoadTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_load_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/load-test.service */ "./src/app/services/load-test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoadTestComponent = /** @class */ (function () {
    function LoadTestComponent(loadTestService, router, ar) {
        this.loadTestService = loadTestService;
        this.router = router;
        this.ar = ar;
        this.test = [];
        this.testNames = [];
    }
    LoadTestComponent.prototype.ngOnInit = function () {
        this.loadTestNames();
    };
    LoadTestComponent.prototype.loadTestNames = function () {
        var _this = this;
        this.loadTestService.loadTest().subscribe(function (res) {
            _this.test = res;
            for (var i = 0; i < _this.test.length; i++) {
                //console.log(this.test[i].testName)
                _this.testNames.push([_this.test[i].testName, _this.test[i]._id]);
            }
        });
    };
    LoadTestComponent.prototype.navigateAddTestResults = function (i) {
        this.router.navigate(['../test-form'], { queryParams: { id: this.test[i]._id, testName: this.test[i].testName }, relativeTo: this.ar });
    };
    LoadTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-load-test',
            template: __webpack_require__(/*! ./load-test.component.html */ "./src/app/load-test/load-test.component.html"),
            styles: [__webpack_require__(/*! ./load-test.component.css */ "./src/app/load-test/load-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_load_test_service__WEBPACK_IMPORTED_MODULE_2__["LoadTestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoadTestComponent);
    return LoadTestComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n/*.containor{*/\n/*    margin-top: 150px;*/\n/*}*/\n/*.login-containor{*/\n/*    width: 50%;*/\n/*    margin: 0 auto;*/\n/*}*/\n/*.login-form{*/\n/*    width: 300px;*/\n/*    margin: 0 auto;*/\n/*}*/\n/*.button-containor{*/\n/*    width: max-content;*/\n/*    margin: 0 auto;*/\n/*}*/\n/*mat-card-header{*/\n/*    text-align: center;*/\n/*}*/\n/*input{*/\n/*    margin-left: 10px;*/\n/*}*/\n/*button{*/\n/*    background-color: rgb(32, 103, 209);*/\n/*    margin:0 auto;*/\n/*}*/\n/*mat-icon{*/\n/*    margin-right: 5px;*/\n/*    */\n/*}*/\n.page{\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-image: url('8766_edit_1.jpg');\r\n  background-size: 100% 100%;\r\n}\n.login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n\r\n}\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: #4CAF50;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\n.form button:hover,.form button:active,.form button:focus {\r\n  background: #43A047;\r\n}\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\n.form .message a {\r\n  color: #4CAF50;\r\n  text-decoration: none;\r\n}\n.form .register-form {\r\n  display: none;\r\n}\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\n.container .info span .fa {\r\n  color: #EF3B3A;\r\n}\nbody {\r\n  background: #76b852; /* fallback for old browsers */\r\n  background: linear-gradient(to left, #76b852, #8DC26F);\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBK0JBLCtEQUErRDtBQS9CL0QsY0FBYztBQUNkLHlCQUF5QjtBQUV6QixJQUFJO0FBQ0osb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsSUFBSTtBQUNKLGVBQWU7QUFDZixvQkFBb0I7QUFDcEIsc0JBQXNCO0FBQ3RCLElBQUk7QUFDSixxQkFBcUI7QUFDckIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0QixJQUFJO0FBQ0osbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQixJQUFJO0FBQ0osU0FBUztBQUNULHlCQUF5QjtBQUN6QixJQUFJO0FBRUosVUFBVTtBQUNWLDJDQUEyQztBQUMzQyxxQkFBcUI7QUFDckIsSUFBSTtBQUNKLFlBQVk7QUFDWix5QkFBeUI7QUFDekIsT0FBTztBQUNQLElBQUk7QUFHSjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0NBQTJEO0VBQzNELDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZOztBQUVkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEVBQTBFO0FBQzVFO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUVmLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUIsRUFBRSw4QkFBOEI7RUFJbkQsc0RBQXNEO0VBQ3RELGlDQUFpQztFQUNqQyxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmNvbnRhaW5vcnsqL1xyXG4vKiAgICBtYXJnaW4tdG9wOiAxNTBweDsqL1xyXG5cclxuLyp9Ki9cclxuLyoubG9naW4tY29udGFpbm9yeyovXHJcbi8qICAgIHdpZHRoOiA1MCU7Ki9cclxuLyogICAgbWFyZ2luOiAwIGF1dG87Ki9cclxuLyp9Ki9cclxuLyoubG9naW4tZm9ybXsqL1xyXG4vKiAgICB3aWR0aDogMzAwcHg7Ki9cclxuLyogICAgbWFyZ2luOiAwIGF1dG87Ki9cclxuLyp9Ki9cclxuLyouYnV0dG9uLWNvbnRhaW5vcnsqL1xyXG4vKiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7Ki9cclxuLyogICAgbWFyZ2luOiAwIGF1dG87Ki9cclxuLyp9Ki9cclxuLyptYXQtY2FyZC1oZWFkZXJ7Ki9cclxuLyogICAgdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbi8qfSovXHJcbi8qaW5wdXR7Ki9cclxuLyogICAgbWFyZ2luLWxlZnQ6IDEwcHg7Ki9cclxuLyp9Ki9cclxuXHJcbi8qYnV0dG9ueyovXHJcbi8qICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMTAzLCAyMDkpOyovXHJcbi8qICAgIG1hcmdpbjowIGF1dG87Ki9cclxuLyp9Ki9cclxuLyptYXQtaWNvbnsqL1xyXG4vKiAgICBtYXJnaW4tcmlnaHQ6IDVweDsqL1xyXG4vKiAgICAqL1xyXG4vKn0qL1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCk7XHJcblxyXG4ucGFnZXtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvODc2Nl9lZGl0XzEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcbi5sb2dpbi1wYWdlIHtcclxuICB3aWR0aDogMzYwcHg7XHJcbiAgcGFkZGluZzogOCUgMCAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxuLmZvcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICBtYXJnaW46IDAgYXV0byAxMDBweDtcclxuICBwYWRkaW5nOiA0NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG4uZm9ybSBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmZvcm0gYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogIzRDQUY1MDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZm9ybSBidXR0b246aG92ZXIsLmZvcm0gYnV0dG9uOmFjdGl2ZSwuZm9ybSBidXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM0M0EwNDc7XHJcbn1cclxuLmZvcm0gLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMTVweCAwIDA7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb3JtIC5tZXNzYWdlIGEge1xyXG4gIGNvbG9yOiAjNENBRjUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9ybSAucmVnaXN0ZXItZm9ybSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jb250YWluZXIgLmluZm8ge1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIGgxIHtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMxYTFhMWE7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIHtcclxuICBjb2xvcjogIzRkNGQ0ZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIHNwYW4gLmZhIHtcclxuICBjb2xvcjogI0VGM0IzQTtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjNzZiODUyOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"login-page\">\n    <div class=\"form\">\n      <form class=\"login-form\" [formGroup]=\"loginform\">\n        <input type=\"text\" placeholder=\"email\" formControlName=\"email\"/>\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n             class=\"alert alert-danger\">\n          <div *ngIf=\"email.errors.required\">\n            Email is required.\n          </div>\n        </div>\n        <input type=\"password\" placeholder=\"password\" formControlName=\"password\"/>\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n             class=\"alert alert-danger\">\n          <div *ngIf=\"password.errors.required\">\n            Password is required.\n          </div>\n        </div>\n        <button (click)=\"login()\">login</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, PopupError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupError", function() { return PopupError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/app-login.service */ "./src/app/services/app-login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService, router, appLoginService, dialogerror) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.appLoginService = appLoginService;
        this.dialogerror = dialogerror;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appLoginService.isLoggedIN.subscribe(function (isLoggedIn) { return _this.isLoggedIn = isLoggedIn; });
        this.loginform = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('inside login');
        this.loginService.login(this.loginform.value).subscribe(function (res) {
            _this.loginService.setToken(res['token']);
            _this.appLoginService.loginTrigger(true);
            _this.loginService.getUserProfile().subscribe(function (res) {
                console.log(res);
                _this.user = res.user;
                console.log(_this.user.userType);
                if (_this.user.userType == 'patient') {
                    console.log('patient true');
                    _this.router.navigateByUrl('/patient-home');
                }
                else if (_this.user.userType == 'admin') {
                    _this.router.navigateByUrl('/admin-home');
                }
                else if (_this.user.userType == 'labEmployee') {
                    _this.router.navigateByUrl('/labemployee-home');
                }
            });
        }, function (err) {
            console.log(err);
            _this.openDialog(err);
            _this.errmessage = err.error.message;
        });
    };
    LoginComponent.prototype.openDialog = function (err) {
        var dialogRef = this.dialogerror.open(PopupError, {
            width: '300px',
            height: '150px',
            data: err
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.loginform.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginform.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_app_login_service__WEBPACK_IMPORTED_MODULE_5__["AppLoginService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], LoginComponent);
    return LoginComponent;
}());

var PopupError = /** @class */ (function () {
    function PopupError(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PopupError.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PopupError = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'popup-error',
            template: __webpack_require__(/*! ./popup-error.html */ "./src/app/login/popup-error.html"),
            styles: [__webpack_require__(/*! ./popup-error.css */ "./src/app/login/popup-error.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], String])
    ], PopupError);
    return PopupError;
}());



/***/ }),

/***/ "./src/app/login/popup-error.css":
/*!***************************************!*\
  !*** ./src/app/login/popup-error.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content{\r\n  text-align: center;\r\n}\r\nbutton{\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcG9wdXAtZXJyb3IuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vcG9wdXAtZXJyb3IuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9ue1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/popup-error.html":
/*!****************************************!*\
  !*** ./src/app/login/popup-error.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <h4>{{data.error.message|json}}</h4>\r\n  <!--<mat-form-field>-->\r\n    <!--<input matInput [(ngModel)]=\"data.animal\">-->\r\n  <!--</mat-form-field>-->\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Ok</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containor{\r\n  padding: 20px;\r\n}\r\n.footer{\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9jb21wb25lbnRzL2Rvd25sb2FkLW11bHRpcGxlLXBkZi9kb3dubG9hZC1tdWx0aXBsZS1wZGYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9jb21wb25lbnRzL2Rvd25sb2FkLW11bHRpcGxlLXBkZi9kb3dubG9hZC1tdWx0aXBsZS1wZGYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWlub3J7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4uZm9vdGVye1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <mat-selection-list #tests [(ngModel)]=\"selectedValues\">\n    <mat-list-option *ngFor=\"let item of testList;let i=index\" [value]=\"item._id\">\n      <p>{{i+1}})\n      {{ item.testName }}\n      ({{item.date|date}})\n      </p>\n    </mat-list-option>\n  </mat-selection-list>\n</div>\n<div class=\"empty\" *ngIf=\"testList.length===0\">\n  <h3>No Test Reports</h3>\n</div>\n<div class=\"footer\">\n  <button mat-raised-button color=\"primary\"\n          matBadge=\"value\" matBadgePosition=\"postion\"\n          matBadeColor=\"red\" (click)=\"download()\">Download\n  </button>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DownloadMultiplePdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadMultiplePdfComponent", function() { return DownloadMultiplePdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_load_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/load-test.service */ "./src/app/services/load-test.service.ts");
/* harmony import */ var _services_test_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/test-form.service */ "./src/app/services/test-form.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_create_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/create-pdf.service */ "./src/app/services/create-pdf.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");







var DownloadMultiplePdfComponent = /** @class */ (function () {
    function DownloadMultiplePdfComponent(loadTestService, testformService, createPDF, userService) {
        this.loadTestService = loadTestService;
        this.testformService = testformService;
        this.createPDF = createPDF;
        this.userService = userService;
        this.testList = [];
        this.selectedValues = [];
    }
    DownloadMultiplePdfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (user) {
            _this.user = user.user;
            console.log('user ' + JSON.stringify(user));
        });
        this.createTestList();
    };
    DownloadMultiplePdfComponent.prototype.createTestList = function () {
        var _this = this;
        this.loadTestService.loadTestofPatient().subscribe(function (data) {
            data.forEach(function (element) {
                _this.testList.push(element);
            });
        });
    };
    DownloadMultiplePdfComponent.prototype.download = function () {
        var _this = this;
        if (this.selectedValues.length > 0) {
            this.testformService.getManyTest(this.selectedValues).subscribe(function (res) {
                console.log(res);
                var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__('p', 'mm', 'a4');
                console.log(doc.getFontList());
                for (var i = 0; i < res.length; i++) {
                    if (i > 0) {
                        doc.addPage();
                    }
                    console.log(res[i].testName);
                    _this.createPDF.createPDF(res[i], _this.user, doc);
                }
                doc.save('testreport.pdf');
            });
        }
    };
    DownloadMultiplePdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download-multiple-pdf',
            template: __webpack_require__(/*! ./download-multiple-pdf.component.html */ "./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.html"),
            styles: [__webpack_require__(/*! ./download-multiple-pdf.component.css */ "./src/app/patient/components/download-multiple-pdf/download-multiple-pdf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_load_test_service__WEBPACK_IMPORTED_MODULE_2__["LoadTestService"],
            _services_test_form_service__WEBPACK_IMPORTED_MODULE_3__["TestFormService"],
            _services_create_pdf_service__WEBPACK_IMPORTED_MODULE_5__["CreatePdfService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], DownloadMultiplePdfComponent);
    return DownloadMultiplePdfComponent;
}());



/***/ }),

/***/ "./src/app/patient/components/edit-profile/edit-profile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/patient/components/edit-profile/edit-profile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    width: 80%;\r\n    margin:0 auto;\r\n}\r\nbutton{\r\n    margin: 10px;\r\n}\r\n.form-control{\r\n    width: 80%;\r\n}\r\n.containor{\r\n    width: 80%;\r\n    margin:0 auto;\r\n    padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9jb21wb25lbnRzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvY29tcG9uZW50cy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5jb250YWlub3J7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/patient/components/edit-profile/edit-profile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/patient/components/edit-profile/edit-profile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outercontainor\">\n  <div class=\"containor\">\n    <form [formGroup]=\"userDetailsFrom\">\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">User Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"userName\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label  class=\"col-sm-2 col-form-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\" [readOnly]=\"readOnly\">\n        </div>\n      </div>\n      <button mat-raised-button color=\"warn\" (click)=\"onPasswordChangeClick()\">Change Password</button>\n      <br>\n      <div class=\"password-containor\" *ngIf=\"passwordDisplay\">\n        <div class=\"form-group row\">\n          <label  class=\"col-sm-2 col-form-label\">New Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"newPassword\" >\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label  class=\"col-sm-2 col-form-label\">Confirm Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"confirmPassword\" >\n          </div>\n        </div>\n        <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\"\n             class=\"alert alert-danger\">\n          <div *ngIf=\"confirmPassword.errors.required\">\n            Confirm Password required.\n          </div>\n          <div *ngIf=\"confirmPassword.errors.mustMatch\">Passwords must match</div>\n        </div>\n      </div>\n\n      <button mat-raised-button color='primary' (click)=\"updateUserDetails()\">Save Changes</button>\n      <button mat-raised-button color='primary' (click)=\"edit()\">Edit</button>\n      <button mat-raised-button color='primary' (click)=\"reset()\">Reset</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/patient/components/edit-profile/edit-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/patient/components/edit-profile/edit-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/patient/services/user-data.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/must-match.validator */ "./src/app/helpers/must-match.validator.ts");






var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(fb, userService, data) {
        this.fb = fb;
        this.userService = userService;
        this.data = data;
        this.readOnly = true;
        this.passwordDisplay = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
        this.userDetailsFrom = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: [''],
            confirmPassword: ['']
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('newPassword', 'confirmPassword')
        });
    };
    EditProfileComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.user);
            _this.setvalues(_this.user);
        });
    };
    EditProfileComponent.prototype.setvalues = function (data) {
        this.userDetailsFrom.get('userName').setValue(data.user.userName);
        this.userDetailsFrom.get('email').setValue(data.user.email);
        this.userDetailsFrom.get('firstName').setValue(data.user.firstName);
        this.userDetailsFrom.get('lastName').setValue(data.user.lastName);
    };
    EditProfileComponent.prototype.edit = function () {
        console.log('edit clicked');
        if (this.readOnly === true) {
            this.readOnly = false;
        }
        else {
            this.readOnly = true;
        }
    };
    EditProfileComponent.prototype.onPasswordChangeClick = function () {
        if (this.passwordDisplay === false) {
            this.passwordDisplay = true;
        }
        else {
            this.passwordDisplay = false;
            this.newPassword.reset();
            this.confirmPassword.reset();
        }
    };
    EditProfileComponent.prototype.reset = function () {
        this.setvalues(this.user);
        this.readOnly = true;
    };
    Object.defineProperty(EditProfileComponent.prototype, "newPassword", {
        get: function () { return this.userDetailsFrom.get('newPassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileComponent.prototype, "confirmPassword", {
        get: function () { return this.userDetailsFrom.get('confirmPassword'); },
        enumerable: true,
        configurable: true
    });
    EditProfileComponent.prototype.updateUserDetails = function () {
        if (this.readOnly === false) {
            if (this.passwordDisplay === false && !this.userDetailsFrom.invalid) {
                this.userService.updateUser(this.userDetailsFrom.value).subscribe();
            }
        }
        this.userService.updateUser(this.userDetailsFrom.value).subscribe();
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/patient/components/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/patient/components/edit-profile/edit-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/patient/components/patient-profile/patient-profile.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/patient/components/patient-profile/patient-profile.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.mycard {\r\n  border: 1px solid #d3d3d3;\r\n  border-radius: 0rem;\r\n  background: linear-gradient(#BBBBBF,#E1E1E1)\r\n}\r\n\r\n.bg-img {\r\n  background-size: cover;\r\n  min-height: 180px;\r\n  background-position: center;\r\n  background-color: #ccc;\r\n}\r\n\r\n.my-img{\r\n  margin: 0 auto;\r\n  width: 128px;\r\n  height: 128px;\r\n}\r\n\r\n.my-img img{\r\n  margin:0 auto;\r\n}\r\n\r\n.content{\r\n  text-align: center;\r\n}\r\n\r\nh4{\r\n  color: black;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.containor{\r\n  margin-top: 150px;\r\n  margin-bottom: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9jb21wb25lbnRzL3BhdGllbnQtcHJvZmlsZS9wYXRpZW50LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvY29tcG9uZW50cy9wYXRpZW50LXByb2ZpbGUvcGF0aWVudC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5teWNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XHJcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0JCQkJCRiwjRTFFMUUxKVxyXG59XHJcblxyXG4uYmctaW1nIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi5teS1pbWd7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEyOHB4O1xyXG4gIGhlaWdodDogMTI4cHg7XHJcbn1cclxuLm15LWltZyBpbWd7XHJcbiAgbWFyZ2luOjAgYXV0bztcclxufVxyXG4uY29udGVudHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDR7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWlub3J7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/patient/components/patient-profile/patient-profile.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/patient/components/patient-profile/patient-profile.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"containor\">\n  <div class=\"containor\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"5%\" fxLayoutAlign=\"center center\">\n\n    <div fxFlex=\"20%\">\n      <a [routerLink]=\"[ '../edit-profile']\" style=\"text-decoration:none\">\n        <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/curriculum.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>Edit Profile</h4>\n              </div>\n        </div>\n      </a>\n    </div>\n\n    <div fxFlex=\"20%\">\n      <a [routerLink]=\"[ '../view-testList']\" style=\"text-decoration:none\">\n        <div class=\"mycard mat-elevation-z5\">\n            <div class=\"my-img\">\n              <img src=\"assets/images/view-flask.png\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <h4>View Test Results</h4>\n              </div>\n        </div>\n      </a>\n    </div>\n\n    <div fxFlex=\"20%\">\n      <a [routerLink]=\"[ '../download-multiple']\" style=\"text-decoration:none\">\n        <div class=\"mycard mat-elevation-z5\">\n          <div class=\"my-img\">\n            <img src=\"assets/images/file.png\" alt=\"\">\n          </div>\n          <div class=\"content\">\n            <h4>Download test reports</h4>\n          </div>\n        </div>\n      </a>\n    </div>\n    \n  </div>\n  \n  \n</div>\n"

/***/ }),

/***/ "./src/app/patient/components/patient-profile/patient-profile.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/patient/components/patient-profile/patient-profile.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PatientProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileComponent", function() { return PatientProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/patient/services/user-data.service.ts");





var PatientProfileComponent = /** @class */ (function () {
    function PatientProfileComponent(userService, data) {
        this.userService = userService;
        this.data = data;
        this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"];
    }
    PatientProfileComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
    };
    PatientProfileComponent.prototype.getUserProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserProfile().subscribe(function (res) {
                            _this.userDetails = res['user'];
                            _this.user.firstName = _this.userDetails['firstName'];
                            _this.user.lastName = _this.userDetails['lastName'];
                            _this.user.username = _this.userDetails['userName'];
                            _this.user.birthDay = _this.userDetails['birthDay'];
                            _this.user.email = _this.userDetails['email'];
                            _this.user.sex = _this.userDetails['sex'];
                            console.log("User Name  " + _this.user.username);
                            _this.data.changeData(_this.user);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-profile',
            template: __webpack_require__(/*! ./patient-profile.component.html */ "./src/app/patient/components/patient-profile/patient-profile.component.html"),
            styles: [__webpack_require__(/*! ./patient-profile.component.css */ "./src/app/patient/components/patient-profile/patient-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"]])
    ], PatientProfileComponent);
    return PatientProfileComponent;
}());



/***/ }),

/***/ "./src/app/patient/components/patient-toolbar/patient-toolbar.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/patient/components/patient-toolbar/patient-toolbar.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.header{\r\n  /* position: absolute; */\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n}\r\n\r\nimg{\r\n  width: 200px;\r\n}\r\n\r\nbutton{\r\n  outline: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9jb21wb25lbnRzL3BhdGllbnQtdG9vbGJhci9wYXRpZW50LXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9wYXRpZW50L2NvbXBvbmVudHMvcGF0aWVudC10b29sYmFyL3BhdGllbnQtdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbmltZ3tcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/patient/components/patient-toolbar/patient-toolbar.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/patient/components/patient-toolbar/patient-toolbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color='primary' class=\"header mat-elevation-z5 \" >\n  <span><img src=\"assets/images/logo.jpg\" alt=\"\"></span>\n  <span class=\"example-fill-remaining-space\"></span>\n  <span>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu1\"><mat-icon aria-label=\"label\">menu</mat-icon></button>\n        <mat-menu #menu1=\"matMenu\">\n          <button mat-menu-item routerLink=\"edit-profile\">Edit Profile</button>\n          <button mat-menu-item routerLink=\"view-testList\">View Test Results</button>\n        </mat-menu>\n    </span>\n  <span><button mat-icon-button [routerLink]=\"['patient-profile']\">\n        <mat-icon aria-label=\"label\">home</mat-icon>\n    </button>\n  </span>\n  <span>\n        <button mat-icon-button (click)=\"logout()\">\n        <mat-icon aria-label=\"label\">logout</mat-icon>\n    </button>\n  </span>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/patient/components/patient-toolbar/patient-toolbar.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/patient/components/patient-toolbar/patient-toolbar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PatientToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientToolbarComponent", function() { return PatientToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PatientToolbarComponent = /** @class */ (function () {
    function PatientToolbarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    PatientToolbarComponent.prototype.ngOnInit = function () {
    };
    PatientToolbarComponent.prototype.logout = function () {
        this.userService.deleteToken();
        this.router.navigateByUrl('/login');
    };
    PatientToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-toolbar',
            template: __webpack_require__(/*! ./patient-toolbar.component.html */ "./src/app/patient/components/patient-toolbar/patient-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./patient-toolbar.component.css */ "./src/app/patient/components/patient-toolbar/patient-toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PatientToolbarComponent);
    return PatientToolbarComponent;
}());



/***/ }),

/***/ "./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n  margin-right: 10px;\r\n}\r\n.containor{\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9jb21wb25lbnRzL3ZpZXctcGF0aWVudC10ZXN0bGlzdC92aWV3LXBhdGllbnQtdGVzdGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9jb21wb25lbnRzL3ZpZXctcGF0aWVudC10ZXN0bGlzdC92aWV3LXBhdGllbnQtdGVzdGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jb250YWlub3J7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <mat-nav-list>\n    <mat-list-item *ngFor=\"let item of testList;let i=index\" (click)=\"navigateTest(i)\">\n      <p>{{i+1}}</p>\n      <p>{{ item.testName }}</p>\n      <p>   </p>\n      <p>({{item.date|date}})</p>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n  </mat-nav-list>\n</div>\n\n"

/***/ }),

/***/ "./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ViewPatientTestlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPatientTestlistComponent", function() { return ViewPatientTestlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_load_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/load-test.service */ "./src/app/services/load-test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewPatientTestlistComponent = /** @class */ (function () {
    function ViewPatientTestlistComponent(loadTestService, router, ar) {
        this.loadTestService = loadTestService;
        this.router = router;
        this.ar = ar;
        this.testList = [];
    }
    ViewPatientTestlistComponent.prototype.ngOnInit = function () {
        this.createTestList();
    };
    ViewPatientTestlistComponent.prototype.createTestList = function () {
        var _this = this;
        this.loadTestService.loadTestofPatient().subscribe(function (data) {
            data.forEach(function (element) {
                _this.testList.push(element);
            });
        });
    };
    ViewPatientTestlistComponent.prototype.navigateTest = function (i) {
        console.log(this.testList[i]._id);
        this.router.navigate(['../view-myTest'], { queryParams: { id: this.testList[i]._id }, relativeTo: this.ar });
    };
    ViewPatientTestlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-patient-testlist',
            template: __webpack_require__(/*! ./view-patient-testlist.component.html */ "./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.html"),
            styles: [__webpack_require__(/*! ./view-patient-testlist.component.css */ "./src/app/patient/components/view-patient-testlist/view-patient-testlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_load_test_service__WEBPACK_IMPORTED_MODULE_2__["LoadTestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewPatientTestlistComponent);
    return ViewPatientTestlistComponent;
}());



/***/ }),

/***/ "./src/app/patient/components/view-test/view-test.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/patient/components/view-test/view-test.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .containor{\r\n  margin-bottom: 10px;\r\n  padding: 20px;\r\n}\r\n  \r\n  .header{\r\n  padding-left: 15px;\r\n  margin-bottom: 20px;\r\n}\r\n  \r\n  .field label{\r\n  width: 100px;\r\n  display: inline-block;\r\n  font-weight: 500;\r\n}\r\n  \r\n  .field span{\r\n  margin-left: 10px;\r\n}\r\n  \r\n  .header-row th{\r\n  font-size: medium;\r\n  font-weight: bold;\r\n  color: black;\r\n  font-family: sans-serif;\r\n}\r\n  \r\n  .footer{\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9jb21wb25lbnRzL3ZpZXctdGVzdC92aWV3LXRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBQ0Y7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7RUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztFQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9jb21wb25lbnRzL3ZpZXctdGVzdC92aWV3LXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4uY29udGFpbm9ye1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4uaGVhZGVye1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZmllbGQgbGFiZWx7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZmllbGQgc3BhbntcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uaGVhZGVyLXJvdyB0aHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuLmZvb3RlcntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/patient/components/view-test/view-test.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/patient/components/view-test/view-test.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\" id=\"pdf\">\n    <div class=\"header\">\n        <div class=\"field\">\n          <label >Test Name</label>\n          <span>{{testName}}</span>\n          \n        </div>\n        <div class=\"field\">\n            <label >Name</label>\n            <span>{{user?.firstName}}</span>\n        </div>\n        <div class=\"field\">\n          <label >Age</label>\n          <span>{{userAge}}</span>\n        </div>\n        <div class=\"field\">\n            <label >Date</label>\n            <span>{{date|date}}</span>\n        </div>\n        \n        \n      </div>\n      \n      <table mat-table [dataSource]=\"datasource\" class=\"mat-elevation-z8\">\n      \n          \n          <ng-container matColumnDef=\"tests\">\n            <th mat-header-cell *matHeaderCellDef> Test </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.test}} </td>\n          </ng-container> \n        \n          \n          <ng-container matColumnDef=\"value\">\n            <th mat-header-cell *matHeaderCellDef> Observation </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.observation}} </td>\n          </ng-container>\n        \n         \n          <ng-container matColumnDef=\"unit\">\n            <th mat-header-cell *matHeaderCellDef> Unit </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.unit}} </td>\n          </ng-container>\n        \n         \n          <ng-container matColumnDef=\"referenceRange\">\n            <th mat-header-cell *matHeaderCellDef> Refference Range </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.referenceRange}} </td>\n          </ng-container>\n        \n          <tr mat-header-row *matHeaderRowDef=\"displayedColums\" class=\"header-row\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColums;\"></tr>\n      </table>\n        \n</div>\n<div class=\"footer\">\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"value\" matBadgePosition=\"postion\"\n      matBadeColor=\"red\" (click)=\"download()\">Download\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/patient/components/view-test/view-test.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patient/components/view-test/view-test.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTestComponent", function() { return ViewTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_test_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/test-form.service */ "./src/app/services/test-form.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_create_pdf_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/create-pdf.service */ "./src/app/services/create-pdf.service.ts");









var ViewTestComponent = /** @class */ (function () {
    function ViewTestComponent(route, testFormServise, userService, createPDFservice) {
        this.route = route;
        this.testFormServise = testFormServise;
        this.userService = userService;
        this.createPDFservice = createPDFservice;
        this.displayedColums = ['tests', 'value', 'unit', 'referenceRange'];
        this.testValueData = [];
    }
    ViewTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.userService.getUserProfile().subscribe(function (resuser) {
            _this.user = resuser.user;
            console.log(JSON.stringify(resuser));
        });
        this.oninitfunction();
    };
    ViewTestComponent.prototype.oninitfunction = function () {
        this.createTestResults();
    };
    ViewTestComponent.prototype.createTestResults = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.route.queryParams.subscribe(function (params) {
                            _this.testId = params.id;
                            console.log(params.id);
                        });
                        return [4 /*yield*/, this.testFormServise.getTestResults(this.testId).subscribe(function (data) {
                                _this.testResults = data;
                                console.log(_this.testResults);
                                _this.testName = data.testName;
                                _this.date = new Date(data.date);
                                console.log('this is date ' + _this.date);
                                console.log('this is data  ' + data.testName);
                                data.observations.forEach(function (element) {
                                    var tunit;
                                    var trrange;
                                    if (element.observationId.unit === undefined) {
                                        tunit = 'NA';
                                        trrange = 'NA';
                                    }
                                    else {
                                        tunit = element.observationId.unit;
                                        trrange = element.observationId.referenceRange;
                                    }
                                    var jobj = { test: element.observationId.observationName, observation: element.observationValue, unit: tunit, referenceRange: trrange };
                                    _this.testValueData.push(jobj);
                                });
                                console.log(_this.testValueData);
                                console.log("birth day " + _this.user.birthDay);
                                console.log("Date now " + Date.now());
                                var timeDiff = Math.abs(Date.now() - Date.parse(_this.user.birthDay));
                                console.log("age " + Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25));
                                _this.userAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
                                _this.datasource.data = _this.testValueData;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewTestComponent.prototype.download = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__('p', 'mm', 'a4');
        this.createPDFservice.createPDF(this.testResults, this.user, doc);
        doc.save('testreport.pdf');
    };
    ViewTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-test',
            template: __webpack_require__(/*! ./view-test.component.html */ "./src/app/patient/components/view-test/view-test.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./view-test.component.css */ "./src/app/patient/components/view-test/view-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_test_form_service__WEBPACK_IMPORTED_MODULE_3__["TestFormService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _services_create_pdf_service__WEBPACK_IMPORTED_MODULE_8__["CreatePdfService"]])
    ], ViewTestComponent);
    return ViewTestComponent;
}());



/***/ }),

/***/ "./src/app/patient/services/user-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/patient/services/user-data.service.ts ***!
  \*******************************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");




var UserDataService = /** @class */ (function () {
    function UserDataService() {
        this.datasource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]());
        this.currentData = this.datasource.asObservable();
    }
    UserDataService.prototype.changeData = function (user) {
        this.datasource.next(user);
    };
    UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDataService);
    return UserDataService;
}());



/***/ }),

/***/ "./src/app/services/app-login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/app-login.service.ts ***!
  \***********************************************/
/*! exports provided: AppLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoginService", function() { return AppLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppLoginService = /** @class */ (function () {
    function AppLoginService() {
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIN = this.dataSource.asObservable();
    }
    AppLoginService.prototype.loginTrigger = function (value) {
        this.dataSource.next(value);
    };
    AppLoginService.prototype.logoutTrigger = function (value) {
        this.dataSource.next(value);
    };
    AppLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppLoginService);
    return AppLoginService;
}());



/***/ }),

/***/ "./src/app/services/create-pdf.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/create-pdf.service.ts ***!
  \************************************************/
/*! exports provided: CreatePdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePdfService", function() { return CreatePdfService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CreatePdfService = /** @class */ (function () {
    function CreatePdfService(datepipe) {
        this.datepipe = datepipe;
        this.imgdata = 'data:image/jpeg;base64,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RW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAYsAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEACWAAAAAQABAJYAAAABAAE4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0D8gAAAAAACgAA////////AAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAABOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgABOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAAWOEJJTQQIAAAAAABRAAAAAQAAAkAAAAJAAAAADQAAFAAAAAAxQAEAABWQAAAAdQAAAAAS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b3Rvc2hvcDo2YzYzZmUzMi03NWFkLTExZTktOWRmNy1kODc1ZWJkNjI1ZmEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjA2ZGZiZDYtMDE2YS1iNTQ2LThjZjAtMmU1OTc5M2MwNTM3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9Ijg1RTBEMTY0OTFDQThFQTJEQTVEN0IxQ0M5M0Y4N0Q0IiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpMZWdhY3lJUFRDRGlnZXN0PSJEM0M5OUY0QjNEOERFQTI4ODU0ODM1NkE4NDE1OUMyQiIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA0LTA4VDIyOjQ1OjU3KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNS0xNVQxNjoyMjoyNCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNS0xNVQxNjoyMjoyNCswNTozMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZTY0ZGI4OS00MTA1LWZhNGYtOTk3ZC1mMWJjZDYwMTEzOWEiIHN0RXZ0OndoZW49IjIwMTktMDQtMTJUMjI6MzY6NDkrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZTE5ZTAzNC1kZTYyLWFmNGUtODc1YS02YjA4M2EwOThlMGMiIHN0RXZ0OndoZW49IjIwMTktMDQtMTJUMjI6MzY6NDkrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmYwNTk3YjUtYjk1My1hYjQ2LWFhNmEtYzkzYjZhOGRjMzlhIiBzdEV2dDp3aGVuPSIyMDE5LTA1LTE0VDAwOjAyOjM0KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL2pwZWciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvanBlZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjgxYjY3NmItNjc5MC1jMTRlLWEzMTgtYzdlMmRlNDg4ODg2IiBzdEV2dDp3aGVuPSIyMDE5LTA1LTE0VDAwOjAyOjM0KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwNmRmYmQ2LTAxNmEtYjU0Ni04Y2YwLTJlNTk3OTNjMDUzNyIgc3RFdnQ6d2hlbj0iMjAxOS0wNS0xNVQxNjoyMjoyNCswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZjA1OTdiNS1iOTUzLWFiNDYtYWE2YS1jOTNiNmE4ZGMzOWEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNjVhMWZhNi01ZDQ1LTExZTktYWUzMi1jNDQzNDVjMjRhODgiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iODVFMEQxNjQ5MUNBOEVBMkRBNUQ3QjFDQzkzRjg3RDQiLz4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJUZXN0IE5hbWU6IDoiIHBob3Rvc2hvcDpMYXllclRleHQ9IlRlc3QgTmFtZTogOiIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPjFFRjcxOTEzMjdGMEUxRDE0MjQzMkE3MTI2RUUzOEJDPC9yZGY6bGk+IDxyZGY6bGk+ODVFMEQxNjQ5MUNBOEVBMkRBNUQ3QjFDQzkzRjg3RDQ8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MjcwNDI5NTEtNTNjMC0xMWU5LWFlMDUtYjcyMzQzN2RlODMyPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gJASUNDX1BST0ZJTEUAAQEAAAIwQURCRQIQAABtbnRyUkdCIFhZWiAH0AAIAAsAEwAzADthY3NwQVBQTAAAAABub25lAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUFEQkUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApjcHJ0AAAA/AAAADJkZXNjAAABMAAAAGt3dHB0AAABnAAAABRia3B0AAABsAAAABRyVFJDAAABxAAAAA5nVFJDAAAB1AAAAA5iVFJDAAAB5AAAAA5yWFlaAAAB9AAAABRnWFlaAAACCAAAABRiWFlaAAACHAAAABR0ZXh0AAAAAENvcHlyaWdodCAyMDAwIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkAAAAZGVzYwAAAAAAAAARQWRvYmUgUkdCICgxOTk4KQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAGN1cnYAAAAAAAAAAQIzAABjdXJ2AAAAAAAAAAECMwAAY3VydgAAAAAAAAABAjMAAFhZWiAAAAAAAACcGAAAT6UAAAT8WFlaIAAAAAAAADSNAACgLAAAD5VYWVogAAAAAAAAJjEAABAvAAC+nP/uACFBZG9iZQBkQAAAAAEDABADAgMGAAAAAAAAAAAAAAAA/9sAhAABAQEBAQEBAQEB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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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Amnu6aadOVKZYWZ1BZPRJAOkkEHTllUEg0pUZHLBmuXaRzSrMSxNBQVJNTQAAeQADCLYgQCP0BGNGnt7ummnPyUzwDMoahDCoFAwIIYClAQRUEUI7MJcSuzSRGJkYklkMOjklWOamEonKIIMehNFNIotyFHMUEBqDUASCQG4gEqpIBoSoJ4DDG7HN1Grau9qNa1avpGudTUk58c8PFG7KkgAdQSAwB1AMODUIqK1oQCM8GcKNbChag1EDMCvGg7BwHuLbliUUswWp0hmChiBwBYKoYjMhVB4DC7ZpHhkBCxUHKUEKpCp6ABVEU0HBVHBRRbm4dnkQoVZiSwMdOWQxzqlF0GtV0rpppWksUPcWd1kkAyEkiLy0dwMmdEJRWapVSVBANMeDlUPDR15ZAKaZHeSQaTlR5JJHcUozu7NVmJNm1lEebCrGUSEPG8/NkKSopqABEYkKMpUtEWbWrlBfbxcSlrncLgXEjamYq6wwwijtRmJEIkLEAl3Y+Q4Ml6OaWbUS/e1NWuptVatXOpzrnWv/pN/f//aAAgBAQEGPwD/AOjr7y5syZ1bOrviB5j7qRbd4FqVBwHujaKhjmDoOPLSyf1llF1+wspY7XuCSijVNFsum3TQSRTSRTAgib77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XePvu+u/69nH1d4++767/r2cfV3j77vrv+vZx9XeF1S9bnrvGMkiqoUDb6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8xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB48xnUd9a2RPB4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';
        this.imgdata2ndpage = 'data:image/jpeg;base64,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AABDcm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExibHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAcsAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEAEsAAAAAQABASwAAAABAAE4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAE4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAE4QklNBAIAAAAAAAQAAAAAOEJJTQQwAAAAAAACAQE4QklNBC0AAAAAAAYAAQAAAAI4QklNBAgAAAAAAB8AAAABAAAC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LyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDUtMTNUMjI6NTc6MDQrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDUtMTNUMjI6NTc6MDQrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA1LTEzVDIyOjU3OjA0KzA1OjMwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJjMWRjM2ZjLTU0ZTktNzQ0MS05NTc0LTMzMTg5Y2U0ZWEyNiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJjMDI5YTA3LTc1YTQtMTFlOS05ZGY3LWQ4NzVlYmQ2MjVmYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFlOTZmNGJkLTg2YjYtYmQ0NC04ZWFiLWU5M2ZkZDU0OGFkNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlOTZmNGJkLTg2YjYtYmQ0NC04ZWFiLWU5M2ZkZDU0OGFkNyIgc3RFdnQ6d2hlbj0iMjAxOS0wNS0xM1QyMjo1NzowNCswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyYzFkYzNmYy01NGU5LTc0NDEtOTU3NC0zMzE4OWNlNGVhMjYiIHN0RXZ0OndoZW49IjIwMTktMDUtMTNUMjI6NTc6MDQrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+MUVGNzE5MTMyN0YwRTFEMTQyNDMyQTcxMjZFRTM4QkM8L3JkZjpsaT4gPHJkZjpsaT44NUUwRDE2NDkxQ0E4RUEyREE1RDdCMUNDOTNGODdENDwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyNzA0Mjk1MS01M2MwLTExZTktYWUwNS1iNzIzNDM3ZGU4MzI8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MzY1YTFmYTYtNWQ0NS0xMWU5LWFlMzItYzQ0MzQ1YzI0YTg4PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////7gAhQWRvYmUAZEAAAAABAwAQAwIDBgAAAAAAAAAAAAAAAP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQIBAQEBAQECAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwEBAQEBAQECAQECAwICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgNtAmwAwERAAIRAQMRAf/EAP8AAQACAgIDAQEAAAAAAAAAAAABCggJBwsCBAYFAwEBAAIDAQEBAAAAAAAAAAAAAAEHBQYIAgQDEAAABAUEAQMDAwQCAQUAAAABBAUGEQMHCAkAIQIKEFAxQSBgFuASFTAiExRAsBclNTcZGhEAAAYBAwIEAwQGBwMICwAAAQIDBAUGEQAhBxIIMUFRE2EiFBBxgRVQoTIjFgnwkbHB0UIXIODhMGBicjNDJCaw8VKCotM0JZU2GBIAAgECBQIDBAYGBwYFBQAAAQIDEQQAITESBUETUSIGEGEyFCBxgUIjFVBgkVIzBzDgoWJyJCWxwUNTNBZAsIKyVWOzNSYI/9oADAMBAQIRAxEAAAC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//aAAgBAgABBQD/AL9NAchJxTQhpMI8lJUcSIbba1of3aDW/gNUhWk2p6qaLTChnbwPstLEhFItlLnOM6bUP9F6NRmqrv8AHz9QDoQh65LcJYw4dIiHPXzBiROKz9CMNDAPG8YCIBr50mri3MezBaRBcawjDTkeUpvr7hbxZKJe33OAx8obgLL06Xx4cuZdpKKikwEPHxowtLSm7OUr+LNPBNJJS58a9tDoPbXwH0QHXzrfQ63j5DfQL5bk5QCIobWNOUzNlTJEzxuA+/jeO8Q99AO++hEOOt4+pWjtpPdrwoxOF3v56nlBtXY1wcc2TUsggLaWiU5UGpUSXVJSNU3PpbScJVqU+OpDpclQFn8bdNKUUrTtYSSJZ4Px1octtOXwoJxRUL0ldSq4kWsSGmmEBtTebeoezebhei4uLKe0VGsJQ6lUjZvIw5kZsnyrtnsA6gqisuOTnOda0lKLNSG5xab+JGys8kZ9bd8vghHFgk1StIGRNV1STWlykUNwt5vOUxIaDpZ6oo1jKGaPFmQ2HKuIZVZInlS4ifxZnKlyWhuNIa6scMuWpiKkIxqp3L/ExqM//Ec+aMmQSTuD+5qi9KOtdZZhdPp/90yJINarFTuRRDatoU5xG5i87AlOMyhq7abjQOsl7EKtKzhp2WaieWbjikcBqnU59OkkzpLdbLpMo7SdLPPBVpCVGmnNE8WAscKHEyaaIt1Po/T8s5qjTkxyN9Dc1Q0TkQYlOFjmdb/IOTbP1AbyKSJpzkMPJRWuHNsSKRthJd6zPWlFcVleXOZiO00VKqYkCAhyHXxVGV+PH55dLkMS39Reak9bmFwwhv5KbS3IQqeOFsu8/WWS52GsluHJXT2YbQJbqqpIK04VGShvBxmCyunnBLpyOXpo3+biephTWkxpLaw05RxseppswEOdbTx/wVJqtJlc6rhOmmrg3nyeITWwTSktWuF5oLoWiZl4txMp6toCm4nw3CzedNs/KYZcziPS05wHSR4ty8CPHhxtDaSW76bsBYVD7f58JBK2unaMvvc1Ugm1uB83+znbpY6TLTGxZwWkz1+gg85tQmtwCY7HOVUyKlRki3WK83koS1V2eswjr21UMJfIq90BQalFqIHkJU51WlHJFWFT8wBjSiCOXVq+T0VyMJo/lqY3UlzpJ5xVcbZBFM2YnyvKm7tTDajVmrY8ORup3EZ7Eo3yDhSMeHL9j7D/AFX04pUriwyXM2tkx9vuUAh5WOfEa2VJVStOuDWNmJzAaXDlxerjIqqdphIrea7tqoslHI/KN/5hqbWQf9erLhGNReRBVltQ6ht6W4ajr5ZTbtHikg5UWs/AuD7qnPPA1WgROzyrgbyA4CiW4isqjNBh5yqi3ZG1I+urE01Oo3bp/CDJfEk+YXaRqak3eFAeJ4HO95S8ZcVMjCe31NWnlzSnrYBrV/7M6OJhBp/RRzpKjNfppdIHirUNo6PQqU2ZNQLnAAXHbAfNJjFnf7kqvl0XBQNEWqYTDdJzM4kZqrdoHOXSK3oXNwZSgnJyiWbqyWJtH1NVS1ac7CUrgnT6fOBuEjjibZw0oo7mcSg32khNJO416kqL7cXJxKvBHp0kNdurbtX/AMmcTNQjzKV09JSVpxu9wJamV8PYkpKCAgzpyEUq+TRzj+nuJEn0SYExztQ+ppRA9yRHH+6l1LR5oHFlEgQncTmT0N2VWkJym/OJ40qJNP5KGxZy2qTVtY9aENcm6cN1CZqwXLk2sgqbPXqmcG69aUtVzusqVb7cQeajcRNlPZltZbW2820NvIcxx1GdJN2qtJiC1TA0pkSxHlIVyPJhU2THCntAopHSJSeeReNOXo156qozZk5bQ0ZRbDNR+UeX3SxUNeTls8oNpwUcpybdKLyq2ho517klVSPorOSW+3OddDznqIcLQKT6buNBkPB3NUo6yTcW3BJFGbiFMWK8qrofjYSyhdInsdZI83ivECC7Ia0pbaYnkoivqj2W58ilbALKCK2X6a5OR/0+dKUjkSKAbZh5VMTnFKa60Vp/LNoaw3ls+qH3Mls38OZsidMGfN0IgAGUJwT6p03cSGkzG0mLDXXqs8AVWpIUz6m3uJOQ2Ve5RQF+lmkszm8spxTjwcjkVm66aUtQkvIklSWE8o5a7Fi59tNmW6mOeV5XF0qBtQayA3fU9x0MYjHQc4joB2iEPfQagOuMNCMA+iAxD39tCO/wGhEA1EYhEB0G+oa4+3rW/gRHwACIhqEdAGvmIePkPcdAMdQ3gMffQxDQR+6x1uABr5j4HwEYByiMd/f6R1Hx8BHQ6COoahDwAbiADoY+N9DGACI6iGgiOh9g9ohHwyCq6hqrdQ2yIvd4zHceGICMQAB9WEIgAQDzv/RCP0AAB538wCPrwR0EfpEI+YBqEfqgA/d0fEN4+IBEIB4AAD6YBqAahsG39CP0fOoQ8CEdQCP1BH9f/wD+v/8A/X//APry9//aAAgBAwABBQD/AL9NYQDCIUHU7n/jKoyrJWCX08gENVSThpqiJKnIWUsPbwhpBhdVXWoymwTSEOcuUsXFfgiytB9PxrbQRh63KR//AEYIwcjlKtVPJHSyiUAQEADQ6+AEdRCPk4hI8qntUHwutl/6QGsK2ipLrKqTl+6nIy1drJoxgYXZCdMhtuAeE5tpBdkKS2kuMoyVk+tJoeI+B+j4DW8QjqIeYx18Q288GUtTGR8HFLkQ0WMlzhfxGPgdfACAh4+N9BH1S4A4cItZ0DxR2ix+ZBwUSpAgkziAruhtqrgeCA7mwfp4Q5v0k5n4zzz1qjxWmsxKAM2bUqntWjU2o7ZmDPYNMGO4pruZ+hCOkhVPIajW9vICEpUGVFAjUR8GjZy588dbzcbjfJmHcRpI40k1XZ/8ktqrTll/jiZUaYslWkxUAgsMBKV0x1Lr/UnPTyamqJRWT/WhgOqTpxR0urmYW+FVHQWkEpluLfOKDVcjpaRPk5ms6JRWmomqiKT9erObxucmmiqfaaZMPmRUs2qIKevpSVKY6CrKBxyNXlz5OGv0ArRIl/5Zz7R5dHldBZ3NKqEivs2oVP8AuYPMw1Pc1J6RmFpefF1spnJpZlsySpIPBeRV5zVH/NGPxpJJbtSeS0aBTSJCcWaDNpe3VB/8nkvsxKXXSgOcom0edqc+DlREjkSW09ZSZiRNcDhmVzqXLaNMif8AEKasgU8dn+xUapqCUb7tTlAq6SjZU1WQrz2wltBuJxyQ6dVzdzjpwyk5OSEpNIKae8Vtw8nCxD0uZwm8NvFMTZlaT5ig4uVWKxJ7PSGxQEmmqbCc7pb3NZqQkuFqoFvBtqVZRj5ouhTFguprLbpzNPvaQ7FBroBH+KP/AOdaVFPg+FWa1mQSSkw88EZNVVNJVBh6mf4zFcvUabL/ABGm5znLp9JJpRS3Nk82ZMmG+aifKW+lHU3eJuU0V9ad7aWiyS0F+afSrpuHBPYNPy5lbZBMwS5eQ48ufK8g9PInHGlJyYuH1I6tXkVcktCmSXT8+oHJZcefG7e9cxzlFLnpJaZT6tpSSVozK/3gpIyp6IZIVfUVp6MtkJf8K0PWvbVCx5SqiJKymrlY62oiiUIUY5ok6lKfyZY1Blcj5kpSYq6UWrzwmNI85VJtqqcislSmSzt7BwqUUqXqRErSFsDz/LmsAyXJX79w1pCZL/yMuJ9nNM6bmViOSCiQYDf7pR+XHjR6mPKdUZRfc06nv1R5KEynTWMoppTeq0uuJoUlQubXYFUuX7aY20zJk6gjNBR/HTBlG4v1PWnByb1O2/wTnVUVSnJTDt/MyVWnLALlubwqoaklpzccC831BcbQTq0V52pfZZN4IbQOTp3Cvde/5XgSpfNTebLrq3m88EOvHFClMthTW1+KPkuqqjfaBE2ltjxR/nxlrKGrlFSqNdUd4ISdQ9DZbv4OR3Ej61W/kpDTC0XkA0xu/JyTTnJH5gULtYOk5TofPP8AjHQjyjZJg29FyYVhuaFkynwTNzys2oCCrnDvqbWmo/JvzZnOdIfSWfmEkVaKlCrgZrUKOFwrK6PGiIpTGSxaiJOcDqWXBOTGsg/jyQ4lgm8EjmaMJiSiJBn+S8MU4mEHc5efBUVqCmFdvtQGcvcLiqqHGrUdGR1RSbZJQLlE+oVTpxBcUFgeDjbSeSky2nQ42stpgTkJNJrVUzDmf6a10Xi22562lr3AgyKiIJ5YS1JXRXSyGLOU2tUZ2tBnKnFXVlSQmUTlF2xUJ2tpBc7kV1hUKojNQDqUD8OJr4Ip62oHibhbaxOfb5XEw65DZAmeNG0M7zfTTcIJpWcVKJi0vE1JzTeHEJfD7oeSyhn0H/XciXVyohhHdJ6jB1TZyKpt9Hkrr8W3M402gCGg0yRDc6afkvVOOlWky3UfZqq70FrK/NQci2Ub1Bmwmsd4KPLkdmOVBkT2o0Zio3yT2Pob7BBPGWeRazW5KVZqjKCQtPClMvi2KdVVbTiXSZxzkXg320mEmWo1Gb6jVrmnqKQrJpduorZXXNMX1yYnEZKYQDYNFFlCkUzqWjrKsluVwSHc3KRDxZVVFBtIhN3TFhQdZG3ucnNp4PhKnOBrmD5aawUlPd7brc9llHd5pDSpx9Ipyc4/lCrwaz0JoRMu1U8wmqrmV/U/nwO2g3DbUB8ew6GPiMfPz4EB87efgBAdb63HQ+ujvr21EPMQHzHXzHfUPIjoN9RGP3T86+dtDyAAD2jD6BiHj58j7hHQj/R9gABjr51HfXyERH530EdQj4qKutdyJS8sLXIsyGEnMydqPrgBDwAAHgd9e3176GI/Rt9iR8Qj5DUd/o3h92Qj5hqPj5+sNv6gAAaj53j9EfIBD6hCOh31Db9f/wD+v/8A/X//APry5//aAAgBAQABBQD/AL9PIJ2FbT8fVdB7fVh+pXb4sQmmaF1iadwFIPjfUdxjoBHUY6vA7FRC1HJAmqElUT9/Ne6zNO3mjbB7ZlgjyqRkOzo2n49JtqPZ3souoruIjqA63DQR1vqA6+Q1/doOUR9aGOsnmXO3vFykf/r7sQ1bd2h8atd3slqZFaTtbxAdoDrfQjDQjDQx1HXYzyjZDLBHxgSzn5DL8b39ZW8hwY0bWcRmS1Kyk2sB67cZe1bHafNobkqsruPej9y44+qZvGglydFLnGh5yR30NTHPaji5yZsfJ3STVyd0tDLRqesZ8NipDT9Bvs7G1m9i1euHb6sMHVh2ezH/AH9vwPbfUB1uAZ8c5x7FYXZecnsjPJDx81lqzcDZ4H7tbw3DQfuj/dHfW8d9DGOgjreMYjofYPbfQCPmOsm2Y+2vGBNHt92HgFt3aJxpV1eZQ4VPlg1vEBjodfEdBEfAR0Mdb6/dyj6nmNoomXAZ9+xJYhbTZBkDzTYrbZbTcfyZk5pdiowpU2yrdjnJg77Rey7kMsquSuvyBU9oBYhbzld7FOTyqHLKj2E6D3rZOsi7xx22b3o5K6l3UX4UX7ddySgtUpes6o9NfFXaTsSulM8s9uNP7YL7bM3Na1loxP8AUpsrtzrPWfsJZl8hNtF0tbrru1XbZRbDDmRrRkSsMdPYezkmq5OrPXnypLUizXO/mApFfnmnzk0+xW06pBfl2kbymhiO7OlxSLXdLUiSynetBvrsmWe2/wBfsdnXes/xf3Ljltp7aBTW/wCpxdI0LGcVS5nlzU5QbhSueXNzjFuGttyB0Sugs0dOeDM/kQvNvFyL9nSxQ88LirriGITE7nkyu3D5MOxplzysWHXkdeq764G9zHbXFBb6pTHrOBxDL6dMCUJ54c9FWLqmtiM7Atd8atA8J+WF85RqaeuduCzGkj4sW6yGIy2c/bt2f8U1u9mE6wNdtawi4c0juH2VnGdZn277ea7VklKhGelZLOxXjsQ3pgcvesuvDp4aMcChbtC5gqQXHIdmfbGtvt7taxV5YqK5Vac/80PPcFsut0ZtNsZ9hmCd+Yy7GUhOlZX8xWXymuJ+h1I8kvZkyFG8d3ZtvPt4uRvKucVqPWbZQMkdwmROtGPXsa3rsNNunuqpjZlbY4s9mabKFcVIzs5v8ZNzdEb4ES8ewx/dkTNjRSuVznZuyt3ZHutPlavpu5P5J+zfdjWev1wGRXs7WDp2J3NG28pls9w/Y2zP0PugrLnRz8fiHXtynPDJ7aPnl7H8+xZ3MPKf2XnlSnE/n9yfXG5Cs6eedmYs0pg3tdqO4ek+Gns+VNd1ZuPLjz4gMQ12IrLLcbgrJeuvZ7ixuXY2Tyn9n1Pb8aF1gfduOIOkmUXsl5E6nU4zsZnLBL3sot2NfWDjdpH2d8xpJ2OHPdnUtCrLRC9VgVOsdvi7Qt/1zlyNf85vYJtCN9a7K/lDvyuSzE9nCqLUrVWW+DtP2q0+wTZ62blNSAAfU3JRmiBt69sYyTU8r9olOqOVgsd7mSc8UOdiSpv2FXNabfPhkzLXNVJqpbIwmXgrtfxYZPCx9UzF5W7O7j7YKpNy8e1jMOxadNTPYnMGy1hsWlVVaZVcbXiZM4SeFR2bTqq3ZAyjULr9h3vo6Y5yceN5Tc6F/lwmQK+HHNnNa9h3TBnEJUgy2Wi6+zzkxSkFc7N+c7gmFuxP21ubtm5FLMqW9ohStqqHgzyiPy6Wg7XV2TRf1kQiG2s9xkpIxPYrMO7/AMmNPMWyxQ+3TJn2q19VcGMTBiysyDtQ788VOfi8lu4S7KXDapipRMVNxtXbkrib+M3tjCxhsvsN5Esf1vK0iMfssdw+ptNiVoHU9MFxxL1mcLckU060hgiWy7klhHVQ7UVKaXpmOXqg03t+deOyn1WLSmi8dAAB632q4/8A0z9YI2UMYgu5ryl/+E7UKZsmq+FfqxY17Zb0q2drOyC26h9tmMp6OiotiOW3HlZu+LZukrK4Sqbc+HGZw7dNrFvrStgxt4kMelRrHKF220TtrbvoHcpMkuVl3HB7WdexUdRWq1nrJu07os91mLs8Z9MuySt2c3Q4S8t1cK5WZUwVqTWg9tNPYpTI3YO2aOTLR+3wLvDF/gsZOY10tO+jFj2ALwW513LOqm2W2VdvJFay9kVxU21Wv0CsYvip6gsCx7FCh3wOC9G4qxztIXKUt60GLOv9k9wXZYINVczG5V6GUdPYYelcqT+FN79R4jnFo7KoFPo218b+H1lZV+zZMqoYyt2zUj7Uinb43cEWRaffM1yR5NbmhENZuzBKVjfxW4bH3kkt+xNKVB7b8luY3JGWx/WCY7nxnoy6uLKTbld7bXf7bhOReVhWJNhU7qH2Ee5vTVk8aaUMmvNw9ZDqcVHt0YGQfuGVfteP2mdYf+Z54fqXkLq1fJJVy03tfVgYvXgw/wBytm1+3qfYMtov4uatZqD1287NVV7EbikzxUGu+yx4tqUZULdmDhv7C+PCqbKwGZxr8bhb9bCqpc8P1m2NPszWATnFg+zi5RrrLZaHpFtdA+xN1+rsbqrizuDvsI1xL4UsYrlxdWx+L0WnVh82pn+ujnQ/8h3e4Ubs71MP/WExm3oWCTssHXDyCI17S5iZ7GeQNIx8YGM2dqVwzi68OcCbcxkMwT5mKx3D5HsEGZW4WpNeevJVC+/HXQ7Gn2aLI5FkHXNyo3BXJMprlWS0fWv2x12dLCL/AC+6mmGrCFmas7vx7EHXcrtcvXvD3h8vNO2RVF68+Y7Htck/8RXY0v1qRZzjTdVi+MWheHjsL2l1uuexpdkfKG5sUlgCbjds0zude++OpV7NT+vjnMusbXWaxoZO7C6o5eMV2c+4a8WnvXezt0qcfXLs0yo2xvvL3YCayNWY09wWdgK3KfhD65d69HLk+PEOPH1vIZZ20777SrdbsMqXXNqIntLJ72VbwMq1Ya02F49Ouc78gNj913azft5ldV/AzdNd47MfV1ebPL1XFhYprqsnmJZuYlbvrlLyrb+yBYhUe+PHzZN2YLvLGrbsVF5ueC9u+AIw/wCf2I8O+UW+29Lrk4p8kVo6/kP6vd+9OrvHzgxqzkDxR0hxPdjzH48LeuvPmPvBuMuTt2qo38ezx652dKoLjsJxOdg6k1xN49plM71re6iddzMVjwuNfWIfsaX41KoFjJrJZRixqZ18c9NXnDajiO7ElNqyqLZT3K0MonVtulpxW6q1iHaYuPYuEXCZWzHTS+5/rs5saqXDXXYaM5VWMfeDHCRl+s2vnzy9bs1fI9KfYyuzNSqnGETrfXMUbrvncwLNXKKk0Vx69oK0xqY5et3koqrciWLyyZYNAO/ZosDvtvxphhlwi5m7P71uwb1xa13B1/tJwZZHa0Yr7YcU3ZKsOUrh+s/mOqSi2/47MrjPwU2+9dTNzTSumV3BTm3uhuE642MK/G0+kt7/AFEAVKv5VsFb2xzW19QshzHHLmg6wdVnlV1esk7UbzpJ19cDNxFi1R/Ux1/cOt4RhqOhj4EYa3iMYCMAiA64xhofaO2/jcde2h5bjHW4a30MdfADvvoPWhjDeG+hiGhHQRHQ7ByGGg3D9waAY6gGtwERGOo6iOo/3ewfuDUd/XVdpNRfmJDdb7flnCJJQklm43yc46iIqlzKJqcQlcms2OfL8Ua2ipMmRk8+HCbwm0npZPPEUxOS5XoER1xiIDHUBAP3DreAiMNb6+IiGt/AR1/dABiADreAiIa3ERiGgj431COtw0AxCIhodAENQ8biO8d4xEA30EdRHUNAMRzK4ts3FTbtmJ1vczt3tZMc9jLJx62uiOo7R0Hqo+IQ1DaGwAAeIQ8QD6oR8Q1DaAQ0IR1D7EAADQBDUPMNQiHiG+t/AhH7rhtr4hqAR1CHiHgQAdDrfwIfQIAP07x8Q1DXzvqG/mAAMA8w+oQjqGofr/8A/wBf/wD+v/8A/Xl1/9oACAECAgY/AP8Az9O9jsT/ANDcy20h/wDqRMUYftGM8W/HKwXvyKm4mgXcaAmvvxc8Jej8W2co32HUfR+z2XvHzyGyFtcTWqGm/fPEKoDptEjeUEVodQBniS1myaNip+sa+3LHzcwqSQqjxZiABXpi342MiKe52qisaDuNopY5D6zi99EXS7bvj1BnFa7GLMoH1EqaHQ0xf/ldCePtnunBNCY0+Kg91RX+hzH6dl9O243TQIskn91XNFPvrg+7T34i47j2U3czbUjYhQ2RPxHKuWVaYe2uF2vGxUg9CDQ/2+2uMsZYy+hy9lyH4XGWMMDI7BAu6QeY79oOVKGrEA0HUY9U+oeQYS/IW0UtqKsvbZnCsaoQH3DP8TeB0Hs4jgGjLPy0rRq1fg2KGJPjliy5Tjrj5m3vIlbcV2lZQB3YiKnONjtJBIJ0xn+s9fbeJa/DZymEn95gM/2f7cbXbaPHFxzXEEXENns71CO4m8mh7fxMuWbAUHUj6LeneFAjghi3TXHlYiUkbYQhVqkqdxNRrQVxx1nytuTJc0opZlM2dPNQjtV/9OWeJbSwAVBTyBiwQkfDuJYt9dT7c/Zn7c/Zl7Mjih9uX0v+21FZFh7rH90EkLX6yDT6jgAmgx+X8G6zXO13EZIQlUUu20sfMwAJ2jM9MNDMCrqaEEUIPgQc/bQ+33ezP9Mer7K5gMtvbX/Lzyhj2wpieRi9TqK/D0bRScTcNy/41qvK/LKoyJhqo21HjnQ4uPR/Fo0HB24LpHTdtdZqABtSQlKipJapGVAJ+E4lVuLu4YOfMPwoDRTO2dSFNMtScHluWkaZQxBdhtqDmNqUzAHUVzwnCWbBbiedokuR5QrrUCKRDSm5xtDU+8DpnhPT3JL2rye7FkDqElbLd7wNcD1Jev8AMwLJ2WlqoJkIrTtjMCnWlPfi1hSskPzAhlVgUGRAYEGlP8VKYteIsYQY7y8eCtarGqqzgkjLOm0HxOJeSt2F53L5rtk08zEEpl9X14Swp8pDyN0FA17KyN79dvUnF9wEUonWznkiEg0fYxXcKdDSvt+WvV3pUGnvBqD9hxdX1+5Elnd3EIcZUWGVlVqg5UAGdcQfz29NWvyd/cdnjbtkl3/MNCwYTPHU5MsjncRky13UJBPrHh27V/yFy9jPJrutXiLNGB0qwFT4CmJ1jrbxwyyQrAaAv2wG7pc6K2dP2a4t+M5t1jmuZBHGreYO+R2BgcznoDXF5/NH0rbG3jjLQKgJkpMgDbgKVO5dxp4riwe0Y3EtzFESRSpZkBJO34TWtRlt0OmH4rgCLmWOd7VgPiEyNtZN2RqCPqxd+nLm3F3KXksg24hre6Bpvr97Z1BqDi49AcGxF7bIHnlKkpCrE7M9C7bW8vQYt7/1ECqyRLJuyYsCBVtq1IBOdKYgsuN22l6IT2mjJkS8nJqkZFSYmIoNcmrUdBJZ3SlJImKsp1DA0I+w/pyP1Bxg7d3dSxQytrviAchSPEEChqOuOJ52Af6pLczLcNuqREF/D8nTPrTADM8kz3MiQmm12TfSI0GhK0rTBh41BPdTpFHDCCFMsyxqJFroKEMWPu8cXHLX0heMKH2U2pFXNkDH4yDlroNMXfB3w7kkZSN2Hle3LH+JtNN4ANc8ssXV3zAEiQxJPGymokilp2mB/vBgcXXPd35qOCJbh/hTtxSAFQFrVyK0yqadMScVCT37ahZdrKM9OgD/AGVxI/Bt8lbotsZJkHeMSuil2Ciu4ljSnSuemOUvL0C5SGwMsMgOfcqm16rRcwTUU1PSmOVsOTuavHNSGBgFCRVopBoC5bU0JoCBQHXjxxMPYE1nbySLUkGVowXYVJIDHMCppjkWjADPGATTP4h18R0PTpj1XX/421/9y4eUCpRSaeNATT7ccF6yvmFvLYyyyJF4lqrtzzBA1Axx3CLb9t7OSVjNU/iLIa7KaChzqMcV62juAX5CeeFoDTdH2aUfx2vXIn9aoOE4UmO05aK5vLlCSwa4GQda/BUAVC5E54s7zhDtuZ7JiNvmLXdG2qwzABIQdMic/CO69ZQ9q8firw3KE/hrL22oGPwkgU2166Yi9G8QN99cxPLu2kpDECF3sRluqfKp1poRi25nniWjmQuJOsgBNWCCpH1Uxa8ZVbOYh6XSVfuyGvZieOp2FiQpIpQ0NNRhI4bNpboXsFtLHQ1RZGo7GmdFGeJ+ctfxpZrmOd1Pm80dNqfUQAKeGLq4ubbsfOCWUxjyrbmOIuWqabFGwZeJ9+BPcFrh5p0t4VUFmkkdqLpUgUBJbQAZ4uvUN8RJDG43UoqwlhURipq1PHM4uuG5CFZZC6IJqlJbfOjuEJ/EWhqPLqNTpiZ+AlM0dwgezudlBJEzKveCH93Oq+7FrPet8+Iwol3EKzmlG3babWJzGQ6ZUxP6j5KYx8dNNHFArDaqM4yUt9+tM2yFTT3Y5T+YHLziGbj7mNAoAq8JiLyEKM2K0rl1oNTiHluMQpbywtIkBG1igz7rlqFTT7vh0wnG87Ctzk26J2KBsiBskBA3BqEDOtDlib1n6NdpwY3Dpt/6a6ILRwE/f8oqrddDizvOYRbu4eHbMpyZZmUg5KfKytQgGuQzBri1s+bIaa5XvIkmQdA3w0yKkjLbUN1xxvqX0/5Lbk4TI0Na/LyK2xo93XME5muLqz9OuYoLCftSSlD+K6/HHH0IBqCw6jLFtLzA7S3dDHuFSQTTzdV+2mWL6z5EBo47G6uEoTk8SbkINTkOo0OJeB9OUCwgrNcijdqYUKxBK1ZmGp6VpriPkfUTEJ2wzOwqxA1YoBVfqppj/wDVlCXlvbGcAMCl0igtI667WRRXaNanwyKnUezPFj6y4cmLkJ7i2s3epKvbO7FkZNCamqtqueJeWkoJ47ijNU7hFsBG1etWrWoPuwZfUMTLAnKRiydahpbTetHYLmoOYYHLbWuWOYm4eESGa+EI7dCsYfapkAXIhNcssLyl5L8worWSqrWhpkgPjl78TcLaxrdyPKtruU7WgnY7akdaVqQR0xBwlsdjQX6w3bAA7YQfMc8hXxOla4PGcZEHuJnQxzJViFqQwyO0q1R5sqUzNMHgueRZ0jkNvMC1HiZqDug1FQhO6uasAQM8X9l3PmEt3KQnTvE07YH+IkDHz13uBnjDi1AAW3IUlw8nXIZVIzqM6jE1jDtM0EhV9QwIGYp1H96h+vHJc/zEQglt5ozFOzEVj2kyLsPxAZHeMhUjpiO744Nb2vc/CCAO1zCabZCRURgn9gqTi24znyoeWUIEOaudSm8ZAkCgNdaYPrzgV22Xe7M0RILW8hrsU6kq6jcD9nSn6Umn4xvl3ugyyFDsMm6pYGlNxaprWpNc8N3CFpzIqSRT7uddKe+uOX5OJQ0sN3KVkABI83iOn9mLy6vnZ5X42MpWpFC7dz3V3bccZ/3Og7S2qG2ZdpTsknarBBTdlnu83jgRcZKLSeSbvOyjJD1kyyqCPhxx/JX85WeC6hkjYrnd3SgdNVMhxDd+orVrA3SF1QMJomiY+R6rVastDQgMK0wtw8azpKfl3KUQxsSBuABA3Lqa54ueIDC4W2lPbkYAk0pRhUZGhxeJcnuD85lADtUbajLPID3aYu7pn7UndY5eVq7qZLqPs0wk98GrOokVia7getev+32lnNAOpyx6/wCF5dSu+PlDGx8rK4mcq0dc2Jp5dutcsXPpT1BbtayWTPaPE77+9HH5UuQCSfxVAcNSoJIBxCq+WOHlG+xVhb/YMSXykb3ZjEinthIlrmSM2JAr1Puxw9rzsZv/AJe9D2r1KtHcMNvcI1K0qKNkMQxvRl/NX3ClQB2mzboB7zkcer728SstsOTeHfqCJZAO0GzOXwBOlNuPUFzdislveX08ZOVJloVYD7xrntGuL2SYUd+bnLHPM1FTj1HHOoW7PJ3AG7JzEWHarXzBdadNaYjg5SUTyrGq+KKNoongSqkYsk4KImOK6N3KoYyVZ2LPtzOrHJBp0GOR5KBO2k9xK4UihUM5NKdNdP01Q+yzVnAPzKUXVj5X0GpHjiz/AJmcXXknllkjayXJkSLbueuYqUJcA0BCnOtMTwQxIeUvYB+WTF1CW91qdwrtJKllz+Ejxx6Xj5YtUXd0CcyGnAoanQivXHGi6QNw5uJeyV27llA85cL59vhvy8MScj5Y7y6Cp5R8YU5VppTWtMLw/qC9LJFAqS3hXSNSnajode3QLXrXEHPS2b23H+SO2nRxIs6IlNzouaaaOKe/CTzqlxLasGkjACsQ3jShPurlju2TmeC9tEuQrjdsMse8xmtQQhyGv1nF9xbSM9xfR3kUC5sXkE2/Z1Ioqmg6UpTHp97D4ePaaS52mlA/kUPTU1U0VtNeuOMaPMCxtgSM1r2xluGVfEajHIGLzUj6Z1owyHifAanHqvcaH8utBTqauo01y6+AzONxB2nrTI/7sek7e1PaQ3M1VU7VIKVIKigOeemOGdwApeclqUzD0FW8adD0z64lNozTQ2fxCpKpXKqjTPqRr+s9PbwoWppYXQNBUDM5MRkD4A69McLe83VuP5RI6z7SVhnmO2GIihFGIIL5BWFD445Th+Hu9l3JKkpt0TzzW8a/iMso8wCalBkwrjnk5FNtwJk7W74uz2xpXMLWmmVcWMHKSiQrF5FBqsaVNFY/CTWpp0wkvCx0lu7xLu4AYuGdXXdQVITJaBBT6scnzSR9tLiYMFcUodqjQ6HLHIi5O5fzW0oDmm3yZCuVP3vfWudcc6eP/D/zDfw/LltWoG2nl1pTKmmWOKF8AbXszEFvh79V20rlupp11p1w120u20llFIwfM7rUbiBmAtCKn/fiP1dPH/qKxfLIVYjyMa0KA0JJHxkVHjj03xZjKPx9kYXLCgYlw2RNAw94xyllfjdBLydsjKDRTGwQMFIyFVOZGda1zxf+mLCOnH8ZIYbaGgYJEtCOnmNSTvOZyzpTEVrDVoRc24kWp2iLuDeWGlKUrXUa5YmuuDlWCCKA7mBFDGwICKBruAIoMQL6hTclnMtxGN5Ru5Hmp3AhmHXZmD4Yv+EkiJN7ewzo5HlVY125nQE+BzxzkgBA/OIStc4yPL8APl2+IXKuuE5OJ2W4XmbdqKpVu2ZCpAQZiOmRA8oGuLztBnlhuGWEgE7QYmYivSrsCNK5+GOK/Mgocjzaf9V5u3v9/d2V3fbi+g9SgNM0kgcN8OZodnTbT4duVKUypjkrb0WzXRhhlgJoSYLd1pKoOrilfP4Y575Fib88wabtBJUdoebKmmuX2Y5O29ZRD5yR2ScHaUbIAlKDYBSnw5e/ER4a7NrDaRsjbVJ3AghoBTUOhIroK4nuLSPtRu7FU/dBOQ+z28YFrUcja5AVam850GdPE0oOuJfWsUbXMcE+2aJQTshRVaSbKtSqklVp5tpzyx+dcNyKWqX1o4tZjGHDvIAI0APwGTNA2RUnEPDKDHeXMpV2kUlkVCu80bOprSpr7sQcvczGKKTzQ1Yt3GU0JIHlUAiprrXTrh24C2+Vkflo3umJJEk7OpaQVyAIOgyGPVxfPcbraTlU9siq11J+6RrkR0xHPCG7n5RIvmUu430XIHzBhX4tV16YhkiduzLxr7wKld6SZFqZB88q+YjHpq6gDbnlsXmcggN5qsSdKfDU1oCKE45TheJcfnT3CTFRQM1nEpL7X1qGPwjNq0xBbWSutzb2jmZwp7ZR2BRSR5S5IbXMAZY4hLIbGbgXJCilTU1YgatSueuLVvQoDuOMO/ftBMGzz03/AHqabfN4YiXmo6LC4k83xI6mtamhJHh/Zi+ge4M1vd0221CAWX+HOT0K1OR1/SlnyJrPZRqwMYO3tyVBEvTdpSmGubIdp2fuFlyO/wDeqOuOZvPWC99ruymSIkEn5lqdtq9KZ1OIPUHAyi3vYSokJXcJ4FO427HVQ5A8wzGDxfLRtbq7EtEzBwNpIUq/QFaGgpmdMNecvNRElVzboSZJlrV17lCEBoAMzqdDnji+V9P2OyCPk4pmiVv4FuuX/q2jx18cH088m+1ZxJtID0YCg2salcvugj6sHlL09uDu/NOlSzTygglM67Q4FCemLrm+32luJGZUrXYp0WvWgyri8tbRGe3vJpLv5hWoySuR+HQZ5UqGGH5fnLhbd5UIeVgWNACVCqARUtQE5ZeOmLDiOHiZIuPhMRkc1edy5YyHSgz2qvRQPbLbcWvckJWqbtu9dwqu7pUdcJFxdbYGMIyrlUUoQ23Jq9Sa1OZxwvrf0Da/imygs+RAbappQyTBNCyka6nA9IPJW8PIGUx0P8ExMpYn6zSmJOOnU7LZg9vdKcn3MzbGXIjtjaulGz+289V3RWbkVG6KL/mOdf7qe4+/pTP1P6b5MFZuR41xaREk9u/I8hUjIEVILZVFMcOvIt8sYlgFwegKqvc3BPjzr/i66nHIXXGuONjuOTmmjnNSojdhSYqoJoRUlKe7rlfcjxL023TyxTgAd5q17+37u/XbTLA/mT6Lg23ctjBDeQ12pdTpm0oAyVgzNn1wlhfgqrUZkbVXIFRv1IByrWmIOetJAs9lMJY4AN3dNanc5PUk1BJ8v7MXXMTqFe5leVgMgC7FjQdBn+mz78HnOTi71rDAq2xJyilJ/EO06kjINqKkDXF3Y83ebbERs3yrKXFw7Db21yIjyzLVByAzri6s+MJ/KZ2M0ADHfbyuT3F3Eg7WPmFPhrTHD8ZYkW/qfj7maRL3buMUbZICD8ZIyY164uOMv42hBHbLVDRzLQbpFBPkLMCdAQCM+mJ73kLkWpZKlvM7MwIoqqKgVzqTT7cXPC+iePMaxW0MEMJerStGyB5Gemr0LnLCcRE+xLi2jhmjIDjyqtRQ1CmtcxQnxw3L3L/LtchY5psyQiVK0XxByyGEbjYfl7W3gjt41rWoiXZ3D/j+KnTD8Zxg2x28slxBcgjzNOxZkK08uwGngcW/LWNLi65CaQ3YGRgUVKvU5MHb7q/DXF3xnIzd65ZgLaMg1h0LPvI0apULUgUrlhuJ9XUkmNxOxB81UZyY9a/d6YnsbWQpFcKEkUZBlGgPuGLXju8r3y3Eh7YQgxw7RtLORmS240BIAIxxnqWyHduOIkeRIq07u9QpXd0pqPqwvDcmGELkO0RY0V6CtD0Fdaa4vEtmF/dX9p2AFBSO2ZmRmahA3lQmxTQUBOWCep/Wnnb7nvMlzd77UmhKwbKbQdQK1qNMcj6N9QoJ71riJrQsoJhjA87AkGhBJKjocxj5LkCYZbGRY4rstUXEf/NZRUgdHQg1HQ1pi29Y+kZhc31namCeYAxx37GjEmPIKQckJAI60Bx8lyKGLvUaSMndtYdA/h9WWDyiyiGWCZZ1jA3tKysHILVyqRTM5DLTEvOcJSC6ub6CeRV8qiJWG9RTKm0DLrj5q2ASTcH3AAHcKUJ8SKa4u+a9dfjx3FpcoSwLEzMlIj1zDdcRQSs0UlvMk8Mikgo6NUZjMqRUEaGueJY7+LsshMakHekikZuAfhr7888G/vZBAzrtMhq5ABqAF6VJzI91ccL6f9Ky9j8maGIOAFaeBJd8m4iub5anIDDXnHp2pHcSEjXeNCfeMScz6quQkc0U3dd1LmRu2wRQKHMvtzNKAHPF1x9ylbe5DIRodrVGR6Gmh6Yt/T6K01pbxjZcbiW8p8qOpzYjxzFNeuI+R5UAurhqnIA6V2aGgzAprjlf5delJBO16wnWYrtIkSIqkaE5qKmpOWfjjjo7xOxeQxx9zMFhKupLD4juzDa+NDji+ba279LBluLmoCrcbhRDGdSR98Zg/XlyXGepB37C4gfbbkfHcFSIpAfu9s5nqaj7J7n05EZ7e+nEskRc1hZqb5I65AE1O0dTl44gh5NjIIEKJuO0hSa0JNCfrODf8DKslxdW0tu8ewbIxKoUkn7xp8JoetcTeo/S1HjmUtNaCima4JFJ1k+6yrQEdRU64hseYLFETaFcgMoOZBcEk0PWpxDyt4BfypHKqWqkqscjK0ccjuR59gYvtHWmZw0smrGvth5tzu4pLJoyhoR3y4KtQ6UFcxn9mORsPVSiawurOdO0RuDTMoEdOg61P1Ym4m3jL8ZLumhlBC/LMCAIAoplqysNMh78cZzfFXC8lz8B3stCgSFTtFsWIXczrSQyHRhQkjX8lvN0UE213iciqPQVAIJpTrtNDriHjvT677YR9w3KeUiYEeWhox60bXIaY9H3fpNe7dW/aPL08vcYN5m83x0FCQddK4gubZxDHuCSZVHaYgONuhG2uXjTHOXi2fy8U17I0Dlg3dhIG1x1QE1GzQa9ck9J+oI/m74SbY3+EwWwrWOurFjRlP3cvDA4y8ufm0UsFlFVkWMnyxuKkttFBuGoGeeIeDsF78s0RkdwKbApoQx1qCcgdemPSdpcqHjk4kKw6EFyCPtwllZMbmyMpMTIRG1pCANkJAI7iggU9xNRoMLyHLsDJvDbj5FB8SqjTxFD9WLvgeGX5y7upIybs+VY4owfwkjIy3MxLN1oPD9KUB64yxlinT2EnFcfZitcUPty+hWuWKnFTpivTFR7aYofZXGeNP07l7KnGfsrrig9tfZXHv8AZWvsyxn+tueKYNM/Zl7M/Zn+zFR9HL6GeMsZ4zxl7DjSuMvZXGWKYpg0z9tPbftySli8rNFPXcrRsT5Cp+ErlQ0Na9KZ3HIcrcCBt4fYqkySk/GAxFFFAKZnM6DEJij7FnZRiG1hrXtQjMJXrnU19+MvZQ/pamKf0uf9FX9Sa/rtX21xT6dcVxQYp/TZe2v9f/8A/r//AP8AX/8A/wCvmJ//2gAIAQMCBj8A/wDP07ae7NHu4o50XxjkUMrV94OBiadRV0Qsq/vMPu16fXhbyLI5hl/ddSQy/YQR9IYi5qd++jWa3jAZUVqnb7yMW/K2n8O4RZF/wsKjGftg4m0zknYKMXnIODNFZh2YxgsWRNSqipOXQYsf5ucawfiuRl7MLE0YtsEhBXUEKakajOuIbiRd0byKjHTZuIUH31JA9mef9BU/pxuZuH2KWMcY13uoDMvuoGBrgYl5rlUYWVupeWRFLlFqBXYtWIzzIBoM9MR31mweKVVdSOoYAj+w6dPZr7c8U+hZ81aR929mmkSUqzlo1UVSqBitDTXaM8q6Y9FcDxMvatuYvZbe7TZG3cURNIvmdGaOhWn4bIT19nKcyJQg42JZCtK79zBQB4eOOQ9LUpcWCxu3gVlFVP618VynKALHzFv8zBQ1PartBI6VP+/GWAvLj5dJHWON2I2szGgBPQk6V9nj7MsS+s+XmDSC4WCK1JKmRStXl3BgQqEEHXPF63pRxZ/l/lnlFZgG21O0Sbg1P7tc8tRiS4vayKkjLHMVCGZBTz7AFC55Up0+jQft+nn9Co+lL6+RQbGK5W1JqAe6y7wAOvlz9hmu4ysCqWZxntp4jw8ThLq1cSRyAMrKQVIOhBGRHsp7csZ5Yy+jn+lOFuOLcC4/JrMRkUPn7CUB99dRqMWPJQR/5j5NpJRX45FkkWp6AlVFaUBNSABlhfVXIf8A5SW5XKvwQurnaRpQEUr4g5545DluRla3tIricBtpJkm3OViQ0Iq205nIAVxHw/BQLbSCNSYwxkqwqGLOclrlRDTx64HJK9UEBk+VNGEpNaMrjNcqUGlR9mG5axQmCC3e5lWoDKsdQy9QDuG3Efpbibf5CeS3EqQ+dtyoAHcyny1ZqkKKGhpQ0rjkr6zbtXC2jzQyLSQg7aqRSpP+HF3znNXxjueM4cX7eUb7iQBQUVGodxrUgZgVweBk/wAj/kBaLJrtAB/EocutaaYjEbi6n4ix80jHaLhoUrXKu3fSgArmccb6nmhNs1/bxTmI1rGZFDbDXOorTP2UxDyvGP254GDI2tGHuxxI4iAQC/4+3nlUmoeaUEuQNAG/dGIP/wCffU8r3Hp/kL1uStUI2LHLIrRywIcqMKhlCj4SQRi6/lddsTw1nZNdpDmp+YiuEVGYjMhddpyrQ4d7q3FzPNEsomJakHnIZdinzHappXqa0OmJuR4RGkigQyORVSqDVqGhoMWn8ovWlwZhOBdmQgIBbPII+0TpVSV83vzxykv8KxtJpijMDTsq5CHP4htpnodRliL1JzcjWlq0C3Yao2NbsKqxUggKfdQ+/Fr6z4S+NpBGsV+fKGS6tPiaIgiq90ZKwIKnXLEf8z/UTm3sJkQ2kQALXcx2s0AzG0Kh3M/gCBnifiuAZWkjkKbQfKhOYTefKSBkc9cNzlxD37CN1W6RyUa2gDUlukJH4ioKkrUArmCcQ8nYP3ILhFkjYaMjgFSPrBB/Tlp6V5pe7ZOZn2VIo/a+IEafAPGunvF9wjZcdFCOyKZNL3nVgW8AgGVR44MVzEkK9pC6khkqV8xO4kUJ6EmmmDDy7tBBHc3UksrBm7UHeorAeGYCDTMUyxZ8DYxCO4d3TuE73mofKxX/AIYIzrQDpXLFlzVnMLaKRydA6TKorsIHw+8jOn2Yi4eCMw3ZmMMkZzKFSat1qCoLDxxxfptrb5O5mle17h3yG4nUnNj8Ea0U6gZ9emByLAGKbcFO4E1XXx2faMW7euXN4zXV4lHrDvWNmESVOgFBQ9aYupePU28ySUVSPhHcoRRsyAKgH7ccPyPF29ZpBKbmYMWJYEbVKjJABXM/F00xyfH3LVht+12/duBr/aMWURJ296PKuR841Gh9/jj+X1P/AJe5/wDsS4SImm5gK+FTTHM+grGT8wS9tbWtwKAKJEWYhduTKCdtTTMHHM+sZLvvR8lbwRLbUA7DxE/i7hmd4oKHTHLfy9mtqR8daW10twCSrm4Z1MR6B02VIHRh4/rVNyHNMZpeGlt7SzbTtQOdzpTQgmlPDPWuXL8b6h89pb8jGkQYbFFoabqNqSPMS2egy1ryFrxMvc45L+0S1Zc2Zu9Ht20zJ3bsxnTFz6p9STG14+yUIWUBnluioMduoJHx51etFGeeJ+E4SiyxsoMQNRGWAorPoD9ZyriTl7G2+bW32iW1Y7Pw9wMs8clCG7UdWC6MARWpwt9b3SmymtJ7iKWoCuY1JUAnxI/sxDxVwpSGOJ0OZAYOSWb68zn0+zAsvTbAQ2sZ7Y+PuKKnYWz3ljUVNTi0hWMWYeEXFwTpbwihlcjrsU1pqTliD09xEpYuXWJ2H4lyEb+KUFdgNdPClc8RX/HHtsR3Er5o5QMxGzCuwuaKfvAHTEEPPxC1urWdIeRtQ+75eSpLRF8q1UAhqDI45Cy4tPko5C/yxHnVUI/DYMcnpkW/vVGWLL0ikUc3NIrvPOGq0iooqRHWkfXUEk6Uxwf8uOKiaa35W0nkY5kJOjhYlJ0XuVyB/dJx+XX9z3byPt/MyEAJBOxo1tGASZCCQC1BnoMsPyvGVEZyDqKspIqGKa7etSKe/EP8vPXaLbSmWIwSBqi8swVE1wBQdso25XXxFQaYv+O4glLNXJt5D8LREAqwJyYa1I0NR0xcScCvcj49lgmeME1l21Zq5hhWo3L5RkNc8XfpvnpBJJGe5byaNLCQKkjLNGO00GeLbnfVAMl1yKM9vbAgBYCvluZHrUebJUpnmTli8tOFlq9rVHdAAEYjVSQVcr7qiooccXe8bcsbk8lYW00jqtZI55hHKGACgE7qilKU64j9QeoPPucGK2zXvRAsryF6UVVYUFDUkeGLi09NIoAlMaxg+Vak7VEhyc0+8DrXTFzPyzm5t++iNHQB7ZSaE7gQHAJFa50p4HAlQ1VgCD4g4qPZf+iuSbucYIZ7ztaUuYo6RyA+I0IzqMsWvCRMfy2Sydyu3Izh8iz9PLXKozp0xaflzrvfji/IKG3LHMQdy1PiudPfTPXHCoHZLb5ZpE31DMiCSRVO7MFgAufjiKxsLb5LuIoWMb3LNSjMzmoqzVIGVARrrheeMptVSI3gqN4mgjVmZAOm+lARphfUF2dsN9x0lxagmlZiPw195Jrj57mW7MNsS0yv5aquZXPMMdANScgK4TmuEY2y3kYmgkCnYATkpBqRWhG0morXFrYuFS9du1Otco5FJDVOdAAN31Yk4q3jVntZX3XhavdQVoEQUUe6gJIHjni354TyfKXENUioNjEnJydu4GlRt3DoaY4vj+FuTL3A4ntAoIKn4Zd4FUaOjeQmr1FB4zLzAW7uTA2/cxRbWYbvLQ7TIwyqOpyHvlvuAJ2CNpA4orKKGjbTmQDnSlDTFv6b51u+80bNHcgbQ7KasjLXJgCKUGY9+uX6Tjtr3dNHbkMoNTt25D6lHhoMQyKDQWUnTPKSTp/s8dcWFszbEuIFVlOVak5UOjZ/WK4jjtdiSjlSNgADbe1kT1PXX345VPSzkTG6YXYbcH74UVKbzuK0IzTygnHcb8VbdNqgmnlzNBX7ccvbiXvQX3zPcAzFtayEk6f8s+an2Ym43iJ0vJLOTYWK9uQOpIIFaNtrllkcHiBMbZnpKpakgZTqDWtVPhpXDfKuYiheCQISgbYSpFFPwmldumEltEMb/kiOe2DuLFT5gFzJ/txxSTJ3t1nErbhUEFASHrlXx3Z1yOeGtLPaOwdhQADbTKgUUoPCgp4e0BRUnoMeheUsn89qnGMVQ7t2dCkgX4cjmG0644X+Yfp66FzLG63sMypt+WvFr3IDTI9otSlaMKHPXF1yvINvnueEaR2pTc7XMZJoMhU4s+OsZBOy20d1eXbLqZo0kECpoFhqVJI8xzHieS5DjmNiLi2YGi7lngpuANMkLDMH7MSMFYf6ENrUIBb5iPyq2hbrQGtM8emrODbtvbTjoJtlPgfJ+4V0anxFsx1xx9mwBgbg7ZCo/cIJI92pHuGWmFsuPHkj4fYir5qAO4AFNQAMqZUpTLHpIWRJ4pbCILTNBdBQJwaZbslp1pXpi9/JLZrZRdSBwxo7yA+aQZ7gpOnji5b1Qi3CPa/JxowEQdAKKrGi5UNd518ccbxOX+Wt4oxQ7gAqgABhkaAAV60r+nLOZFqAJczkorG3xNoo95Izy64n9Dcu4sIP4j3jCqqZZXRUA+95gK0OQNcTR3TySWVjIzXcChg95bKclRh5lB8sqkageBx6te22J/p9qYUNNyqWJA8QaUr79emL/wCXanNrbQ90PuCmBmYRhC3k3VrUJ5qa4XjoyWijLOATkCQAczqdBi69Scbm0hgWK0B++lQzZadxSwr769MTemzcrcXhrLKjpsKO7EkRu3xEGoJQ1FMExs0Ed0pSNwwcAqMqA1Ap10JH7cS+n5nBuLJkLOgEe4SGoai0off1xc8g6gQxWliX2L/dUE0XU1NSftOPVEt6wC3trbJalhXe+7cRGTodpFSmdNccwXoBWEDMbidpJ8utPfpix3grWaPp/fGf1DH8vqKzD84uakKSB+BLmSMgPrxsDDcOlcx9muPVF3f1nkS2i2u5LMpDgCjNUgAZUGPUvH+ft/L2lAa7TVQTsByJ8SunXEdxdosUt3kG2gM23QM1K5dAx+rFf1p5mNvKxvbQgHLcDUVWutKZ00yrqMc7w/FR9nkOJndFhJCtcxRqrPMpJBNA3lUAltrU0xxF3zsAbg1R0kd8xFfM6/Ll0IoQcxuPwHPKpxYScYxbjjI3zG01UXW99m6mVe38NcczHxlsYJFnAndjQzSU+NM6hQDSopnljt86O7a2NrJawqy7CyOp8hagLhq0LkmnjjjODgHbW3iKqqNvCKWY7Q4PmAqc8Bo6hxx99mAd1QZaEdTQUC08KDHpiS/ZmdrQVMtdxPck+LfnX688cv8AkFfm+2m7Z8XytH79KZ0pt3e7FpbS2xa9NvIUnPwRx1oUzyLOdBSvvypif0pbv/p8kguJQy1o6DpIRVafuAgHwx6m5q2iEQ5K7SQhX3F2SIJ3CBUoWArtPjXEPK29XmtrK7kANS2+N5GAprnQUGLD+YV0jQchz0a3V0zlgxmJZDQMfIKD4BQe7EN4iqbphIYnoN3eMb9qja/xNtADr9eK+s7WS7na8QMhruE5Y+d66BTma/sOJZ/Tr/i3UTQNRQ6GOQUPloVGvx5EeOOM5oRKJuOtLiFpd43fjFSYglasAVruGlccUUJLfk91XM93dWT4vvg1+GudKbcqYtYLCMbJOGuYz3KOAShYl2bLueXIt565DM44uEmkLcdMW6AnuEAA6E6Za0zxfm/3/Kizf5alf+k2Hb26e6vw9ccY/p0sY+zHT/mVp/xKebfWtQ2eONl9fxiyhe7glLFtvzFzFIGhqh+AlgMqZnMa49MEsDb/AJOTOE1XM9wHbnu199ffjj5fRjf5BUDQZkOBU/xAx31rX48yMXkrrvkukddzEVVmG0Oa/unP7MWNhyE3zE0USK8n75A1/wB3tv8AuZBrC6AY5LXtk0J0BNMgdTkMW/8AL66AtmubRporlqBGm7nbSDcaAFmIJNfKtWIoDg8dHaGWS1uovnYiTU2iMDOVOe4KnnFKhgtBWuJuVupgnF8fZNdpFGAve2gCO3AFO3ur5q02hSKVyw/CW1ujzyAyCBRTtwFqVDGpy01zOfuxMt3cNconFTrCmwho0VXXt01ajA0PXpj0Up3rS3td6jcHUb8wwHmUjqDSnXAtSN0X53bk9tqJRXDDcV8pTcBUHynQ4u+KCKI15GFwSAG80ZAEZOZTy5hfKDrmcer05gFz371bdc9wcwnaVGuYrtI1OmeOLv8An3I4wO0bRFCw+aaggZxQ5A7viFAaE4vb3kIBNYzSpHCC4BSZQ34iLrtUGhpkxOemLtrojYeVtNxfzBQUTd8Wi+I0xyK+rGJs/wA0URFA1DN3F7VQn3d1K18tNcsGawfN1KVQ1UqQQabcqUrnjjYLVxbNDcJKZajNBXdGP8Qy/SnL2l1eLYXTwDtMyFxcDdR7aoBMZZTuDgZFQOuI7eU7kiQIoOdFHTFhb8BZmZ1vInJVxGsCA1klIqNwAFAgFDWuVM5+M5WI3FtMpKqGI7UtCFlUVAJUE5HXEPM8TItzIkeUqqYzV6F1daAMQRkxrl4Yj/Lrc3EhIQ1IRUTPzH96ngNccvY8rcVlvLO4XeRXuTytuoK/COg+rCeq+yFvYo2hDglSUcgsCooHzGTEEjQHPEVvxEPzMyARJuyWJDuJYmo3bSa0GtdfGOxkfuzGrSyadyViS706VJ0xDccnOEubKCO2SFlqssanXdmBRToRmRh7Djo9yBjIsa0AL0pSvRfdoOgxL6h5Be1NcIqdoGoQIW16EtUGuftsbzmW2W0coMjbd21aHPb1+rFy9xILpDK5VzUqQWO0qGzUU0FBt6aY9Tejf5kbp7W4vbi64kkgtbVpsBbqHG4MNBuHhXH/AHwsJ/Lvyg2xlJFO/wB5GCKAST5QSSQKHIVxb3u0RStbx2l1ak/EIkCd5W69ygqtajpi19JcIDFx9wyQzsP+FbjOtfiOdKqDUioOPT3Kw2fz9vacpCZ5RtTZZqxEkjVozDbQiMVBbXSuOXltImvbaWScwx1zdCzGNVLEbKilMxt6aYsuP5ePevyUcMkBNe3QGsO467f3sQcXfkTSI0ke1qnZbAKIos6hgKtUn9meOT/ll6+czWEvJS3PHuDVrGN2FKZedStVZcsjlmBhuWtKNItUV1NAygmhKaAkZ5iuJ/TzA7b6A2zXGSi3UqVDqlMyBmCBXdnix4BZDKLOCOHe2r9tAu4+80qf05d8dx90La6mlHdXad08JVQFVwCUKMCaVAYE54WXg4yOSR0MMwO0xEMGLsagsAARtzzIOIG5kqnOWKxxPIwJF7CF2KKAEK8YAqWpvGpxyLpZleDuYIhOncO27k37nVVB/CVFoFyGY0pli05WB1mlEhl2bSkkBHwLvHxqASCN1KgZHHasYjcPEPIgooPjVvqxD6w9TS7HuZFaamaxRqjBEA0JWtGbqanA5a7iDyWdy9xbyA7CCWbadwpuG1vhqRXph7KxjNyYmaSOIZBpGCqascgCFFfqxPzPMsHv7198hWoCR1rFCPHtA7a9fHEXJ8hIJZ5Ikt57d1yCRIFVwSTu3601B+zDemLvdbcdxcANpWm2aR2O9AoNfKtPO49wyGOF57gz2oY5H+eNcpItgCLTqQa5+/Fvyfpo9uOC3iVaDaVk7e2XTrWtDrXMYhvLuNZJYGLxswBKsciwJzBNdRiDmbRCkWxu++7JyahUCVypStadcX3BXT9u25NFikeldgDBg1OtMwfrwb7jnSR4mYRyhaFlzALAgHToagHTxw/FXMXbtqq5mLeYkMCVUCpBJ+rKueAi6AAfs/WngrLhspLa1KXQAoDNuqCehNOuOG9WcAvYgs4ZjNKrU3SVBhVkFN9CKktUUIHTDc6pSR+SDS3FuIwqQSHIoo+Eg5lSNK+OPUHon1QWn4Tk7ru2kW6r2ZAXtyK5rXad25c9wyGBydmwmaCqxyjy7lOpKeNfHPA4iNO8Gha2DGirCjqyiTbSjld245EmgGeLT0vzsrXUFnZTwLK/mZpGDFGNa51NK9MLb3bdyNU2BTmoTqoGlD18TUnCcb6Usu7JDLD2ooyI1Re6u9iaqNqpuJAqToBnheStqSB42hmQ6SwuAJEPhuAyPTCyWBLQu3dEbGjwkNVY94pv211GR64bhrBTLGGEgiFF3MBQbn1pQ6E0rQ0xzXqn1axmHPymcxHNLOTsGOMINGCZbqDNqnM5mRLthMGqp/dYaGgIGTeFBWuYw3C8bb5RD8GOM9sK2ikUpQKTuI92mOPmaT/OWixNv1/EShr7/MPtxLz1yohvrjatxEabJXK0edDQbN3Va13ZimHsuEJRGjaIgedtragMakHwYEU8ccN/Mz1WGt7biw9s1sG3CaKWRWklemp2jaoNaUNKVz5G74TOwllYwqdBGQMgp0GuWmPVHAcoO1c3HMLNx4HSx2kFQRTaK57dMcfcekHEHIW15bv3sqrbhw06+JDqAtPtxa8L6nbZccdG0cE9AQ0IHlt5FpnnmrVyzrXFzyfp+NYJbqdLiTaAymWMUVguajLUAUPXH5b6jDxwRXkN4Ji5LSvC+8KB90FqVGQoAMRen/UH4exwI7k1bswkszxlK0ZWYkigyJpppdX/AAIUmV670BCOFG1WEZACkrSopr464fh7WPtwXSESXBNNlfiVU1qy1APQmvTEXH29dkKBFrmaKKZn23PD5ryb3iOpGR7ISjDcOlemLMenY63cd5buJFYI0Uavukbd8R8optBzrXpizueVmHz9hGtrs2Cs8IJ2yO/3mRaRndUkDF9f3oKen+T4+W2mhH3bqVjtuVGgEQodtM/DH/cNoVnuLdWjinFRuiJJFVPU6kHMHFxf+pX2TwyCCCAgEPbKKBwB5Vr1WmZJJrj1ZP6vsfk+Olgkj44VDdyZol/FVVJEQ7hYKBSgoaYv7GNe5cSQydok594KTEdx0IcLU60x6U4pWPztnxkUV8MwDdKTuJ6MSD8WuLT1v6cl+X4+K2YzLQESXiupicrodiqAa/FUg5YPOS2wtbyRQ8qbR255iSWmQUpHU6jTSnXF1yHLSm0ggA2A1Iklau1VGmYUksK066jHqN7Vxviu4c1OasIRlloRl78Sy8tttrlYfOJFMiXcxJq2e4oSNcsjQj3fl3DqUhC7Qubmn1mp664hm5eM29rYSl0XdUzmlEc00C5nafH9L1xX25CuKU9mQr9Gn0dcZ/S8P094Yz9tMZfQ1+zFPbl7KnGX6109lPZXGf0cs/ZU/QpjP+izxX2V9lPpZ+3gvyKEW81jZrb3K0oZJQc5a6GvWpyxGttGbgxqEVahVCitD7znrqfHHKX1sS1xzFybq4JYsDIVCALUAhVUAAe72Z4qcZfprL2ZezP9U8/oVH67U9lf6DPP/wAdn7Kf1/8A/wDr/wD/APX/AP8A+vl1/9oACAEBAQY/AP8A0+mHBPIzWUlrGjGvH8grHkAxGSrOVViDtTlKbOfdQVDIh5awEJZMCPj9ObYPT9rTVH8jsZU1lipqqigbCRBHHuCAm/VrjzmijOhdVPkirRVrglzFADHj5VuDhATFARwOB9dfHH9NtBtnyH/HXw9fj6Y1sOP79Dnbfb7vLW3kOB1Q+xB/27vrFF2+ZqEO65JLZ27QI8bO8+lVcoQ4kEyoNg+c4CcuQ/ZyO2mck1ETN3zdJyiIgICKapOsgiA/DQfhn+/7eRebb24M0qHGdXkbXYHBQAxko2NTA65wARD19dVyjugmoWOnp5tDHsLpAAasiOT+2R2qBjgHT1YDc2uNW1/ePp9xynV4261b8qR91s8rEsQFWUiRyQ3SIGKImAoZ8NUHgavNpyJsvIs4zrtdWctjCivKvREEEDD1fLkQxnW3/q14429PP1167fr9deP6v1aHf/h8NeP4Y14+Wvx18M+G3hrABuA7/d6/pvYPD7t9cdv+awfuXfJMhIsYFgwSFRQ4RbcHDtYwgIfKUBABH1EPXQf/AGKx/EPYP5/+95ah6FM319x7PWN81i4EZuLWCNdSDoQKmg5kBP0IhnPzH20xl4t2i+jZNo2fsHbdQiqDlo7RBw3XSUTEQMU5DFMAgPgP2eoevpr+m+h+b7tg21vgPx16j6fYONvjrcMeHx8dcIRPZ+9s8JA2w0irYnUJxZQOQ28oDRuJgZrr3GuTZmogODAZI6YiADvgB0PEHcRy+pZ+PlW6YDVVOMeE6wdk6KBiLgpK0ysxch1AZM2Smc7COMbfZYu43/TlflBWFcNW6VaRk04cFvfWBM6qr1QpgKUgD1GwURx4AI6ju4lpx844wklrFPwEhTl5Ikv9J+SuwaovE5FMpQOVcB6ygJQEA8QDX9n6diEOe+Vq5x84nUlF4ptLvEU3LxFIRBRRJAxgMJQ6RyIBjSfHvD3OlQt9vWaunqUKzftiu1GzIgKOVSJmPkQIUQE2A2DU/Qrl3GUqKtNYXFtNRhn7dU7NcM5TMdM4gIh0jkA0W9cH32Dv1ZMcEzSEM8QcgioYOoqbhJIxjJmENwA4AP8AsXTumulcf2uDqErXohSEjRMV07dWJ99A06TF8AA+OofINT/LVEqEpUImDlW0WLWVMYV11HCArCcCm3AC4x9n+qXP97jKBSfzeNggmJI3yGk5Zb2GLciRR6h6zbZANtQd3pkqhN1ixsUZKHlGwgZB6zXL1pLJiHkIfoKwdv12JNTNyqayrOyJtGhyIxz1MAN7AKCb58gYNw0UDQtkDIhkfpj7B5j+1qN4g4v5LGM5elWMjJMabYGCsWV4zi0irOjM5Nyb2TqABtks9Rv8oDvr46/H+vQ7/dt4a9R/q1Q+M+PKgtZOWuUa87nYiUTXhRTrbJs/GPF0dhNtniK49WBApm5gEdtf60VqVvdp4gkJMjqMbNe3Ht3IQ0WY5hKyayCFB+oWIcuABf3BHb9rXBXL3OFWfU3lG70ljMW+Akm7Fo9ZSyiqia5HDSOQaoJmwUo9CbchQzsXW+23oHj669R9dbjnbwx5/hrcchj0AN/TXoHptt+P2D6eWvH/AIaDA59Q9fjnQ7+fp9mfL0+HrrAff9vr+rQ7/d/jrAh5eP2jnbz/AA9dVCK5mUknljuzU8jDRDBsY/XHJOQbKuTLgIAHSby1tBWQfLHsGD8f2tQlCnL8/wCO7DaZeNga4WainBo57Lyz0rBi1cSBTCVEDqHIUDn+XI7iGkHrFyg8ZukyrN3TZZNduuicMlUSWSESmAfIQH7MiO2+2PswH9n2fHHhrOdseGPP7PXP4YDW3r/QNf3a32APEPh5jnWf0nxTxhb6TZrLQbnyt/DFtbNY2WQQfQ0ry1ItXiSMoikYpSdAiIqFHBSj1eGqZwV21U9fj3j+Z44q81JRi8q7muiYk1xI7ckcO8nAMY+XI67EOce3Piifa3flOr1QeSbgzeTE8nOzb6CI/fOVo8qZiN/cU6xL09IblKACPj2kczclRTqWtUvw5VIOgcdrgpHSllsqcP8AVFjVUnApqNy9GTGOYAAAAdX7kTscZWOG4wjJE5G1crsFGBGQSXs++DMs1KlEXJwAptym+GNH4P8A5ocDK3qJe2CMhZx1NRSVbn6HHuHHsPZ9uVAEiPk0eoD4AMGKAgAiONWvveqSBb/WE+NjXyhMEVPpSWsHbUq8U2BYxi+2CvUG4m21fFOyq+tSR8c7fy7eisHNMg0q/CmcGM2ZkWnlCKOfaJgonyIjjPw1w521d1nI92rj2Qv1MQssO1orGRj30DLyRUVyml68h0LFFPq6ulYejYxttV7uHhOJ5HmqxSTiOiloBmm/SOms6Y/UKSDkjEBUKGflABDxwGqn3ly/HalJutVk6/IRlTEHiihl4Nf325QByUFBEw/DXFlEluyyRfEcOYOuS0ogaxmXkTLrg1UkSJCmAFAAEDGABwAAI6o19cRS0GvcKxE2BWHcAcFo1STaFcmZqgffqTE3SOd/tuvEHJsIlY6ByFAPazbINZQ6SUpDSBPbdszqJ4MAGAPENc08R8MRTuJpFctD/wDhyJTWXeuIpkVf9w3+oAoHN0eR8a57r/dlW29v7tuxvhKxPOKbA7mFo+ajqDV44Ea6dEBUMdcETlMkomcvzAIbZ31f+XeS6P8AxHyBw7IBLcdSa7xRJKAlGMj7aL36UC4OYpREAyIb4HVT7O+yen2SnyziErc+vyYxqbuxIWVW1Cog3hGKyySjZIzcyXUsfxKBgz450Hcly5e7HW+KSoFeKTi4U1+VFA37JnEQj1KEAfQxA1zRJT0W3c91nC9RmFWrtmiUiN3es2gmaTKTMhjAmJlQAhkgANx2yG+p7iCE50kGNucXqUqsPTUePIFJ6k9JJKNWsW3RdNxWMJQKBQMIiJvHz0HEd05snWHIk2KDVlWZulQ6siRd6oJG5mTdRIolMIgIFDpEPhrgjhvvSus3ZKxyhYayxlqRZYBjFOSQljde23l2YpFSMQOkDD048tvDA1BGIrDXknmfkdA6sPSzyZGAwMO6jjLNLM/EpgOZP3PkIQobiG441Z+fO317dnXFISMi7ZBGVSGjWMfGmWO4bNI9J6l7rkqSQAQFSiYTYznfGmfaZ/MmZOrBYbNfyVRtyXIRydclag9B0McpFScSX2iKl90BEqvQGQAN/MWUrGrkdMJFsi8ZuUxASLtlyAokqQQ8QEBAQ/Tfjn9WuYOY+Uacac5E7fafJ2PimfSfrs1K/LyTlBk8UUTS+VZM6Y/MmfbIAPlruB//AL/bQr1aqRbRzTkpq4K1ZFuQr0xX6yAoqpGWUBIuShkQ8cgO2rrSv5fUi7l+Bo5pUiVs8S8eyTpvaVEjBZI6NeJiKyoorgBEjFHqHACG+uOO4LuIkHcVD8ecJU+UkU3xlVZV6srXWpYxgVNyYqp1VTGIXA7gI76nav8Ayz6rNUGrwqKy6NTr0UzmFjR4PDtmcjKT0kU6aZlSAUwpAYMG8Bx4xkD/ADFYSc5AryhAI8oFoimcKR+AKfvFYmysSEIY5SAbJQMYMgGds6Zd53HEkL2gmqshLyrcxelaJnoWOKvN19b5hydu4EW4mzvjOrTxD2A2Bpxq0VsclA0/jNu5rLZQ6cS+VYkcLz9gOAHUXBIVDEA+AHYPDet1ruWv1vqalv6xhnMPWK9aknhWxgFVP82raS3SIhn5PcAxgzjTruC4vj3l97nicIxNlikHEaq1ePbEtFN3D50eMXDq6k+pRT2xDIiGNdvPbxzrzl+Y0W4cmua7eaY9pMNGLGZot3IrxhFkkk10jJqplKBhMI4KOcjoKZwDcXfF/AUhWoRzVZwlRj5lpPyijQVJgDycikoQhkz/APdgID56p/OHcncEbxyVKXe8xTqwIxbWJBaMipIiMYgdozwn1JpmwYxQDI+QavbqXr0DNLsqfZVWhpmHj5T2FCw6xgMkD1M/SO3lrkYpCETKF+ugFImUpEyFCzyAAQhC4AAANgAAwAeGnjwpBUFq1cOATDxUFBIVAIH34xrl/szkO22Q46p8LZ5GBNbXwy4KPyxEoq1K+6HJQSAFQTKIYHG2pLhGodvq/L1VVkX8nGvifm6RIyQfuvqHSvWwIYps4AuB1dLVe+EJHh6Spi5EQ+qLIfTTBVHYtepsZ+ACOMdXyh4CH6dl+8d+nLteYeFJepVqryLWXeN2RoW2z4NJRoswS+Q5jZAwGN4AA64L/mHzBJ+T5nsEJdodz1T8iViRKUKWMXE7TPSOEhEC4HbO2qbz3wqpYYWxcx3AxLK1cz0i9Ayzx8ci65QV2wOQwGRxjw1U+66QjrRJo8msqzPXY6LqVnl5axyiB2kcRBuoA/SpFEo9Zg+UOrIjtq3zMlQ7UwtMQbpq1VRId6taBEB6CproCPtCJsBgQEd9NeMO4jhKw9tUVYpONiqVapOQUm28y8mJEsawRfICRH6cROomJzZMQANsY2+k5pBcq0cqwLJpOEsKFVZnb/VEWT6M5yQQEMeOuSOzXnrgixc4UuGmE4u5xklHvIyKWlIxQV2x0VFwwb2zYEpy7bjrm9t2ZcCI8DVbjG0V6Mn4ZB0VwSXcTMao6YPgKUflwRM5cYDTh0rn2myCzhTAZHoRTFQ+ADx2DUt2UUSvWVtZuMORYp3PWRylKRbRZxDOxcLNW+TFIqXGMHAo/tDv6cN8N2Dhy4yM/wAe09pXX7pqD1ZJ8uzATA5BdUTiYTCYQHA+ABtq8XbiaFsNckON5aKhrhCT0a7ZfQvJloZ6wK0dOQAq5TJkMJjE2DwH9A1/uurdFJF853G3RMbZrag8VAss0eyIIrFdMsdJj9IYKfO2RwHjqr80d2ycChzapQ5OTt0s6v7iPlmMyi1UOgdnBoLAGQP7fyGSHOf6uOY7tfdTkvR2nNkUFSfxQSCb1ekpzjX31nH0v7wE+gRBQDbY8dRlymYVvfuVbU4ZtadxyMiSOVkGapztX02s4A3WCTZQoZKUvzCOMgG+uQOY+0NS2pcUN5d27jIeErkO0iYGKWHraRzB/JJdb3oJ4qAc4iOcYDABJdtX8zyPkLsrK3WMpy9hlYxCtTfHciq6Sj1CLNkCpEdJGOoU4nMUfvwOQ5B7kOH4xW+uoelubTV2sU3WfKSyAMVHSCrZu2ydTPTsUvj4a475W50rLyr2eh15SCr0a6jXrIDtFJQkkB02b4odQe4UAHpLgfPx12t9sLntvZW2iR0jTuNnckXjpUBl4mVnU40ZM6qbYCCZMq4mE+fLx1b+4HlJVpX61Tq64etYkgoNCv5sWCjmKrzQBEhSmcqlBIBDwznTir/y0atN8cVtjHmSJSq3GM533FUD9Z5GUs0mmYiZjEABKl1E8R2HbFTgf5jLOduVUcthdS/HdlhWEYlIxzlUqH5hG2GOIQOtDPUCZVBAc4ENw1I90/bYQJGfneKJ6xVyvgYrhzGXJKGXWjoVyUoj1HBwmUA9QHw05iOU+UH0ChWbsmvNcbznH0XEovoaNlSnfwSTpygRcUlkSmR99NQf2uoDeGmNq7OqNa+BaBVq6VG0tadW313CVlEk/ecyh5o7ZT2/lKOEkxDAG3zsOueobvZnZ23VaiRa9oZ3+yVo9cJW42KiAcvGKrgyaSa3uGET5H5i9I76ku03+WBXHUFMwnIDiuRnJcOzStMvfWSCpW5Ds4oxVkmqaighlQSj0l8wEdqby33SzVwiOOnszFAoSWrELIxUs3UUI6PGPlmKQi399PKfWYxRLnYc65KtNOq6NS5/40rrxOT4/B6Dr66aRgjO2b5kqYxjCmqsBAEB8Or+q+VCz8qL1iMqnIjtAOOZKhRbZEYRjIlEIZJ05RK4UIoiHtisVQRETCJR8NB3Rp3G3cYcDWqcIjUzN6W3LANUHezBqKztETKFOAZBRQ2BEdtSdm5TYoo8scRzUbSLvNIikmnbZFzHnkgnk2SRzAj1E6SiQMBnwDUv2r9rUNH2bmlxX3JJvkFR0m4Q45soORRQjghyHH6hUCCVQwHxuIAADuOn/chWrdyRYeK4En5pIyJuP2f0jlk2EFlQQiwbAoomcoCGUi+HhrjbjHmvmQ05x9ZpVeMlqCtWY+JTbg5eJNUCAVMCKFUS6xEwqZHPkHhqI4poleR5A7i75CnfxEIZx7LSqRC6hmydhfHSNkxynD92gJcmH4ZHUj3N8VPr0rw65burCyeR1VhmTdKHKcRIDCOdJCusQpQwGAMI6rnZ9/MVjhRu09MOK4x5fXaflDxC2qOSs4erzVdKJAIdyqoVMFQKGDBuG4aA5RAxTFAxRDwEBDICA/byVy9ypRiTvIvE1SkXtBsabxRo5hlkUzOBL+7Aesgmxko4Ad9c0yn8wJlCPrBXbAzRqKU3claugWHGO910cqaCyJ1B9zGBAdOqd/L0k3cxxhG2NmyhU2Tl3ILM7Ak/SI3asXxcnVEFP2Tk8/Dw1x3zLI1Ocud74w7Yy213VFyv156ZlIeNVdlYKJqZcHWPgA6R+YdXdTtKc2evQaMwuoxp4V6JrDOvMnAis1jiy1kTSMuKRC4McTjvnOPDVE4Z/mFzzq5xD2djIS28dyzWE+pRZzD9JiMyzmYsxM/TAqKgl6xAwBgN9WPuV7L2biSvMjWWVjr71CNNKrxUM8QFVWWCMIBhWFL/ANjA51JVuZ5MU5Mm7BFP6vX6y4o0c1kYy2yZiNoiTTbRiSapjoKDuicuBzvjXHy/dDyFZiQ8itFWl9Q7NU2MeystVUch9U0bKdCXte4TJckOAkHGfTVM73rKUlTo83xGTlSwNzrEc/kUck0O6eoHUKYQOJAIP+bfReOP5dy0rxpSkrApVKu0r8GSzWG+GPIFZR8+v1FWM2IsI9QkKHSUo5MIYHBONOeuSbFRra9FnOs5ixUSLXVVinCRilZNnzhH6c2TgUxgDJgAcDjIDq4wvcxY3HJXAcFTpV4+uC9YY19pCWRFP3I5qR+xTTSV9wOoRL4hjVi7Mv5dMId9yRCWUlPkOVkGgzC4W0JAse5r0PCFMcqvtn6imXEMAIhjwHENz3zZK3qL4yE7V+s6eVSFkGarEDFVUJJM2SXuIJmIbBjn6cZ8dSvE/IFfRoPcbSY4jtxDIuBdNLvBMmhTv7YxP1D7XSoIJqoCGw7hsIaHI532+AfpON5TtFKpH8ZRA4jrXLxkKm/bKisK4KJSDsgGBTrMJwN15yOfHXHa0fJxkkivxZTQK4YSLR43KP1xg6FVm5jFIIeYGHOu1ancjRVFvicVxLRnzeIkVYSf+mdkiSCRZJBQVcGANjYDYQEB8NdusFFx35Zw9ExibKGZMkRaxDSaQTKQGzZsiBUSmKjsAFDOPhpF/wBgHLFNpvDIWTpbV4XNLTnHDoiA+5IuveRUcgng3ThQcD+GovmrvrvHFT6/LxkfUYeYPbKRCPFmrQRMyRcRjEG4iIibIrnIIj5jpXgXu75rZ0uuVHgBGIm+WWTZGeb1T6FkBEXzNs16iuwR+QCgTPV5aku4/wDlkSE7yrxU0eLx1a5Rotnb16VnWI56lZCmA4K6T3Kb5VExAPPGdU2E7wQStMvx/KMpKSo3INLhCTUgyREQSISfcIA6AoiPynBQQ221w1zHaaHCJMOVaDA3BzTZtiwnWMStLswXOy9t4VVMwp+AGANcOVmMrlbgaae3cehJRSLSLi4MUFZAAcfVJFIm3KQQ/bE5ceuqtc7DW+Aa+xhoNi/azLxlQGxClIgCoKt3ZyFBU2RHAkERHy0SxcVWqv2utN1jR5XddesnbFssgAZagDExikEof5dvtFRU5EkkwEx1FDlIQhQDcxjGwAB8R08445IQrdi47vfJZK7ZQcy0UpEfljp0b3jjIKmOgUcgAeOu4bjjia1yVYoHOURPLQj6HTOaFnOJbpKqvGFdO4IQjdT2k+lMxS5EAAM+OR5/fOj+44cN13DhTAB1HUf9RzYD4+mpjtL7RUKvQ2EPeleJqxAPKzUpadsVwjZZWM/NT2qbTUUblcCmU6aYKFKQB9R2vnKvdF3dxEpx/F0pzZr9w29eRRSNGggU7yLi3JjEK4UKAlx9OTI+IBrngHchFomOyUL9G5fs03axBfAAiVmqYDnL6j0iGNU9lLFqowsfz0wkyESVhm8J9Y3enOn7wp/+HEQN+0U3iPjrgCIlGcH/AA8vyVxwgdEwMGUMqzF6qOV1DACHQPmY23rrtSbM/wAljolox4ZQaqNzMGEWi0I7XFNRRyn0I9O+6hhx8dU00suq5gDcA8eDBqorncRZyiRbrO0VIIpCIh0iIkHI+euHH/bHzPQozhb+EYZShRLBzQTGawRm4iyRlUUmxzCqBR/eA4ETjt1eGqxy13P8jcVw/LlgtbCVkZxhbaY2ctTpr+8D4YyOFIAUEw7h7YG31xbUJ6WJPTVao1chZSaTOU5JN7Hxibdd6Q5cgIKGL1ZAd/01jGfhoA8w8PhrvETWex7ddTjRUW6D1+2ZKOzFlG4Ck0I4MUVVN8gmQBHGRxsOu5e18Yc3NqFe+IIAZqt8dpnX/MeRniqi4mi0DtVCnIUPbAOvoMHUYoY3zriZj3sUk8nTKhymtA2wLMRVuSvSkY7XjyysixkQL7yZXBC5KoGBAc6qkpw48ZSnFr5dstPL112i5i0qytEILQXuflxjJAl0iToAdtsBrlgv8sjkOpUFk3jW42s0uvU05aaKZ/hJnHhLpqOckUDrEyeMap8l38ci8ZT9X4yWevK7ISVio8FJMlpMoIuj9aKbdd18oiAFMYwF8sY1ZuEe4e+wkjXJc3IMtILw0gxmI+tRM6mLlwqV6wEyZxTD5hTzkOnA+OuTeQf5SPJTruYgeN7tYJZe9wEmhxzZoeXCaVWFk3hHi6ThyCfuAQDogIH8QLgdVHj7u4k5hgxbvm4x8FyZUYixEkm0csCjpkzl5VFQ/wAxCCUwpK53yOqVzxO0KOpEnmxUqRryAN3ca8UpxCRhpQjcvUQE3Yh7ntCGAAcYDw1QpOymj6pEte4WTMqdwk2hY9sRdR+RJQ4Ke0mmUwiG44AdcN1U0pV3lvtVolTRSLc0S+nitUYlJb3TKJGM4SRMA/IYcFMOcb51x22K7YqLk5A5GVO2SeN1XaBDzBClFw1IYTp5wIh1gGQwPnrkRi7sldjnP8HWIh05GcjWPsmViFiEFcXKhegBHzNgNcmOncnFsmyV8uyn1LyRZtW6pAs8gYBbrLnKVTqD9npEc5DHjpUsbJxkn0BhUjJ81edIG2woCBjYAfjrkC4R9AqMdazOG5Qn4+vQzGUOYVxVE6j1siVUxhExhERPkc6XfX2q8XTdiLc7SSRcWhpVJCWSYg/L7JnBJMhl0kwAMFMfAD5aR4W4xtXEkPbHZh9qqU17VW7l0qPzGT9iGMAqKB5lwIh6fZt+m+eMAI/+deKvABHb+KiZEceQeY67dkG7tsuu0/iFN2iiukqq1UO9KYhHKZBESGENwAwBnXbcT3EvePckPbQ90n1KgBJGyKTfPUYPiUB1SahyRV2Vlr6nbVZH6kPMsUlSldx9TeOGbgiLshuhRMwAZM/TkB3DXcRyL3AU9rdW/BU81Co1t7vG/XSDr9w7cICQxDgj5FEQ1xVz1xFxxB0Hkeo8gVVnHS1eZto0goBI4QBVJmmTqEgkA2RN5APiGddtluu8keasc1xpBnk5BYggZ2ZJsDZMTlOJs/IUpRyO+u4Pmq08H1Z9ySxo8/KtLO1j2TV+WTRjF1Ena5yIiJ8b5zvnG+2u/dNIgETS5S48SIABsUhIF4UhNvQA20ZM4AYhymIcohkDFMGDAIfENVjmiu8bwkNylL8iV1jI2qOatGbl6xeyBk3ZHYoplMcxgEQE5j+GPTXbfcrR27VGbsE9x/GSkvLPUWrld9IrCILOBWImGQHpLsIjvnfTmq8J8fV6gQj1VJd60go9qy+sWQT9pFR2o3IUyhil2KJxEQDw/QPH7cspF/WEvtcE0WMizCVEn5tkViRwn94Uw/zHAnSHmOqt/MR4g5jV5HCSbxsjbODa+Dw0jU667MJZGSembKGKINSlOdVMxAwUM+mbVUOa6nBI8+2VlJOeJOS7M/aNo+Bh2kSmlL1xJtJCCIOHaxgOkqHzgIAAfDtpXOs4Xpa/D82pFLIKnWi1lxsaY+4moQRSEw/NgQHONcPv+yHl2j17t6/Imy9GhUHVGCUbR4qiKSc0iZuo5E+w7OhEwhtjA6g+Yu8q/wDFKXKU5PRywTKVrpMa9IKb0i5pFxHMPZH3CqJkH508jgNcG8Xck2CMu0vT+PIyEsNgcmaOoyXWRE5jrmOp1JHJ0mAuRyG2uz9GltKK3jFaQ1K/QqKdfRa+8W9tCGLMJQ4AUqnTkP34Z6P+jrttUGvcUmnE+NK6oU7WLqCj4joCCYFElEExP7uQATGAerq3HfSYVz60Iz/WCi/nX0XvAH0n1CgYX9n/ACY6s9W2uYD/AMrvkGoUqNLYY9K/JzDmpozjyS/LCmbHjgmklHQpgiAAf2MFz476hn3fdyJxjO12npe3CvJSw0WFkgOURVSRKsmm3XVAxy5N8w5Hx1KUHle+QlvPK2BrKxbWLk2EnG1qMbsVGykcLpqYyeBHBxyOu1aGiQqqMXPcakj5BxXAiUgOD+6INl1pVaN8VQAw4MsImAvhtrgSi0etcZgWaoUPJ2JRwWsyr6fmHyBvql3yyxTHVE2en2zZxuGM513Vk4hp1dqUq94a5CcGGpQMdCuHKpq6v1m6odJIxh6c9PiIeWopn2O2OBq3cp+R2RRhMXFWDSapNA6PzZMx7MU6PvmHp6PlE+f2d9T/ABV3Fcscd2PiqVH6ufQm5ShM26aaSQ9Szd+4bEEglKAiQCKBvkQ8dcjXnkLkapuas4gJeGd02uWKJmyyEg4b/ToSawR5zCAJAQv7W2uAYgpKmrDyErU46bShVIZJudF1c2SL1ObVY/KVQSGMBjOPmAu47as1FjUKFXq5VeNYmUrPQaukbi5goxRw1bxbwCgVRQ4iIZRHqMOPEdd00WEoyTKrcItdCKO+blfLOCwAdLlJgY/uGIUMgKgEEA8M65W/1s941c//AK8i/wCIglhP7H8MfxGz+u/+r+X2fZ6/+jj4ap7fjknHSvGJ6rGhEIxxa4eDNCmagCPvpoZREBL+31h456t86Q5fpvLNSj+46wuX14S4bgZKKWiFJ5w5K6UlGa0cPsICCiZDfSEANw8Mjq0hY0XCbr6lAnH31ph9k8T9WiDAyP1PyAl7mPD5fHOuF3/BXNlEZ8TOaWyWpkCzc0E7eIhDHEzSNlEUWxynPjImKrkQyIDrj/l7uJvfFsRy5ZuYa7yXbJGMulQBZR0zm0pF67JGR5iESUEUSEBuVMojnYM6hWEm+/M5BpHNm7yQ6QJ9W4TTAqi/SHh1Dvj7MY28Px9NdxiTmUi45RWjS5UU5GRZsTOT/RHH2WoOjl9w44wBCZEchtruN5W4z54aUW78MtH6kFxamLn825AetYYZVBs2FooByFUwZMD+2YAENcexPfhxorPxFfuKNVdQtgdGYhVORlZZFrCz0t9X0lUKzXEDnTVHpHxHU33AcPxtZvD6wuWlGo7li4jJGtwz6eYKDHzKrZuYyC6aAlAQb+BhEAEMZ1ZrxwtzzA8aUWvTajO08hQdfqNXJGzgtvrGUaSFhUkVlesn/eY6Q9cjjXEFT7z+ZIbmjkaXcVuXY3Nk8j1ACHGbRSFGSFqcQSUKf9oqogYADfXGIunlcfRyHCbIq67x1FvIPIRRzCDhdcxm4gHmBh2Hbx1yexuUfUJOCibxfrBEIOl4RKv/AJpGPElo1SPIqAtlMG3TTSAc/wCXXBnIzBasNbNGySVbLGMfylCZPGOnX1AOFEG4AuKRRyACIdIBjSqFPmW7+Tju3GS/MEYx2lIOW0GkzWO9YrotTHOmfo6hFMwAIB5akEOcD1iKnJzj6biaLM2/8tLHJTbhYg/SFUl8JoqmAodKgCBgHbz1xvx7FSlEn+dHfIUPMxZa8tBPphlVEEzJv1nchGmOqRMTCTpSMOBDfGMa7jHNZYtRtiEraUYFyzZooSSrwa2qLRIzxEoKnwcA6QE22+PHUwy4KfRsN3HOuX3yUdI2RSLI0jrGeVApnb1SeAyWU1MGN1gI6vfGHJPNPHlo43vcI9r9mSfPaAjEPIORSBNyZq4VbAm3AS7FUTOXHiA76kuSb1eqQyj4CkTtasERXLXBWBy9dvjfvGRUGChzGIX2yj7pdvm/SlNqPYRJSJL4x5AbyVnh4qcJXHshX0mJugEpM6iYBhcCZKJvDOk7PyDwNN2ufRbpNEpWa5Krz96m3R/7JIjh07OcCl8gAdcL2Ll91Z+LuD6Sqwb2j81vzWysH9WjjG/8ttods4WAPdA5g9zAdO3j5L8N3x7/AAxaIZ2tN8f3pBAi7msWA7b6Uj0yXQYVCdGSmT8BAR1cWHZyyukhVhcu4yMtlVtaIw8/Fm/dke/kDtUCtznKO4CnkBzvplYu9ayXfiyDkUE0ZnkOwXZy/wDoU2f/AGCTGtRi5sCbI9RykL5bj5SHZXwW1kOX7/VeJGNFh1ZN+qi+tj2MapofWvF1+swmVEomMBs6fzHa/wAb3GhJTSBkX0ONirs7GKJqFwPXXJJVREhg8QH2QEB38dVPkb+YFWgp7b6NjX7DyhJJV2OOwgY5QTooN4ODTwsbxATiTOB8R1xRwXCvTSUdxhS4Snt5I6YJHkAiGgNvqzJAAAUTiAmwAbaje6/s6Z/6iS07HR8LY+P05FtByUCpGkMf8+j5FyBAUFUxgAUwVyAFAQ32HjvjTk2n8gMaHVQj4Ng6nOTSpx8DCkEEDuXCCLox3ApJ5EAEhhEceHjqU4guPK73ley262qXWSfuCuyNoFV7HptjwbIrsRMJSCTrMbwEwmENvt53qHBbozLl6w8dTsZx85Kv9KZGyOUQKwMDnIdGBz82dtPeR0+Cpte5nnXE4W2J8mQYSqkgo6FyDwj4zsFgETDkA6tvDw1xjS+YWrCU79+IFjWWO+qctHchYmaEYdi34+cWQyZziQDGKoVUT9ICXzzrl4vdTxMbjdvZWZk4U6kwyk1XhjOCqdJishMUv+b/ADeGPXaw9yPZFDOuWoy8XF9yM3kIuQZwM1SrJIPhfmagmt7fWCahzdKpT+AB551H8Vd4tttFP4vpUK7XgiT9mbGQlJBJIEGsQuxiVBMuU5QHJ18lDYcCPhKz9ZrKvFldK1kYle1srowcMLBHfVCRECxjRUDfvU8nAVEwEoiAeup7luB4ges7AtydLWeK5GT5EiPfRFxNqPG00RQy/wBSAdBgP7fTt+zjGuMOWqVxwe+2Wu8V0JlK8isbnExUind4oioyygldKJKgZMwkEihTD1ZHcMa4Q5DjeNT8n2yvcEce1+x21rdIqMkYi1w6Cn5hD+69VTUOZscxelwU4ibI+GNdvlX7h+QEqr3s8UQDIrq4OECTn1MBHw5msfxo/egUyihUFBAxXYGHJgDOwjq28bducByNFUp/KPUyHiLk0lIeQaJiZog8j0nawg2Iqlg/tlKXAiO2d9RfMHfdfLnxFDRVqjrPKrSF3kJ6Ys5WjgXTmNRbM1lCNiqiUpPHHSI7BqtVCPUVXY1qFjoRqquoZVZRvHNitklFVT5ExhKUMiI5H9N/Nv8Aq/s1wdSezSBfW+Di52eX5LrDOzN66m7aKswLGfVg6UTTXT9zIiQwjuAba4S5QsnHz3iDilhZkzcoyhbpEyLF9V/p1CuWTiGjlz++YxzFEvWQQDA6g+6TsToMdaLTe0kWPJ9IjXkRVko6QimvWSztjqlRSMZ4qc3Xg/V1Bv667ke0r+aIrIn4x5OgEK7x1QJWfSssnSXbJURRsLSaIdfpHIkMRMh/lAgB9zyz/wAvqQs3IlUYuTvK3e6lYSwK/tKODrIMZaurKJFUMiTpKJxIYpjZEAANUlp3VI8gxddbSJWr20zd6JHxsBHvlQF7IjDRy4fUHIXPSAJiO4hkAEdWrs/ib3Lc0X6Qh7tJGsEk5eJKP5u2IguMS0O8MY6aCKge2lnwDy1aObe2Lh638eTx7ZPyTJzG22JKzet3Ews5bnUhHSxCOEzFMGAURHIYyHlri2rd6VBXkq5SZs/5bZZRvUa83rDaVAEJN+f8oTIo46UxEQIIG39NUTtlRsf8WyMQvKzs/OigDcriYsftu5FumkBS/IkoBigYS76ke6zsjrDnkWMvx2Ug/ia8/bV+ZoszGJdQOEFQ9oVSrnExushhMBvUB2luV+eK/K2HkWCYRUXWKVabk3Uev46NSJHpItffOZBuYiJRMAiIdQjuOREdctMu6irPOOeFZWrszVuuLWllOt3tmUfCL07VmwVUTQD2ypmMYAAREB8dc7TXBNft9k4EuysajBGiOTm8ExeRbcDLGbKRy7tEyYlOYSnKBOkxcZEciGiW3j/gabq9iIcVPzaJ5JrzN4Y5jCYxjroOymMIiIiIiO+ufJT+YIjOx1Ysderzeisp24o2lc8y2kBPJrJggusVMoodBQ3AREB1yPwBC2MlWtsmx+uq8sqj76ASbIRXSZLJ9JvlXEASMbyAc5DV7qnDfFt1goG0pOIKVcVjkBm2ipuKRdHBu6QTScEBIVAHr6ukpwAcD4a4u7xO8Dkme43nOKLitYEeLFbC8s724pHZKtQTlpQiqiQJmMsKpymMYeopfjoCh4FACh9wBgP05yx203DIR93hVlI9QBABQsEa3UcQK/UJTdPS56B6gDIeIauHb9feFLRyRw1KzLt9XYEGk3JQbsjZ0dFjJx8tHJCmj7zcOr2wIXxEQyHhRbhfqVO8b9tXF9wj3Kf5vEyMbA0GDRepSDxBsSRSy/XcCcUwU6BAMjkdsC9ge1Lgd1ys/JTkOLko6GFQh4BhLQh4B1LpsmZQMcSFMKuCl8fLUpxsHaxbZKldxk7GL3aWlWUnFNq83avkwVfCqsQpBAhTCIAIiOqx2kcYdttmmeLIxzF2j/UaHSfypJ6RZFM+9gGrQhipe0Yejf08fLV7rPNPa7L8d2TtiqRIbi4sk8dJL8vlZ1xeUIVJq6Apm4kcJlQEAAM9YYDIa5X4Lf8A8vu1VmMtqE3WXLpEks5Biyce8wEAUTKPWGBzkAHONc3QHG3Zfdb425pmYWySTh3Gy7T8nkIJA7YhiI+2AHAUlDgHiO46a8ldzHAr3gu2FcptmTF8uqdWfamIJzvxbL/MkJRwXpHx21b4Lh5gtN8kUCSjLnEV9EB9yXYQih30ogkYhFDdYJlHpAoZHVD7RbN2ZWbkeycSR0hSmFikWltZSapm7wyTNMWCaGTikfqAvSGDZ21SuS+XOPJHi/sebmkU7xV5SHbR6TdB2zM5h/acvildquBMdPpAuwEIbIdWgz44DP3438P0B/qHwLxi85I4iZQCjCDxdY+MZMDC7Kt7BoeTWIQptsgoQoiPnjAZ5ipXelAKVHttu1LnKm44qlp9haGFhVnYwWp3TVBsosk1IlkS4KACIiO3mNxtfYHQHNu4anJlxZKS/iLcxrMtRkjrEFGAVXcqN1TimICciqYjkNh3DI9vnCnefcS1TvO4yr0cSPvzxJKwPKyzYrHMtTn7pPrFwDgpEhOuVQcGER+YNXyp9pkPfEqa8lFWTObrltauoKfjGY+2xkmsS7Ww1FRPHUT2yjkMbgADptyD3wXO68QQv55Fzcxapm7PZh+/Bo8I7dso+HYLnKgChCdBTYAAMORLtvZe3ntnk3zrkitcYrVigvnUkqg+kJJowVK09+SUN1lMqqYMnE22lrbduBrBaLGu7Uemlpvk+Dk3ia6q/wBQYUF3jw5kygfcClEADAY8A1wW8u0VbqZxNS7XALWA77ktjJxrersZEir9gSMbOlOsDpdZQACYAM/cN87feV49J9X7hDPG7R2dJNVSFn/olEYmebkUKYBO1VOCoFxvjGkrX/L9lbJybBsEFXMTyDTp0tbU91yIEUYytbXVTBQSl6ekwlOGw7hgBGpod1Bb/DQCaybN/aZu9gwjoZhgCmc/k0Yv+/ULgMAJM+O/ryF2scH8ty1r7gpikSrlveZJ07E8pbDxKiDeNZqPTdTZM4mBIpgEOnxH10zs3JHCM7cZ6KIZCPlpjkuAfOWyXv8A1GGyzt2YxS9YdQAGPu1wYebrlyrnHFNvlQczP1XKbF1GMKqwmUlphEzFs8OJyi2BUoEAg7iG2n1RtDVOUi5uDcwc40XADJPWUg0Fo+QUAc7HIYxR1N9xn8t2We25G03txZI/jeDkQqM9x20O4K7QRYS6ZkSuSJqlAekpyiJQ3AR8YziDk6G5Te0lqLdqi2cXdrBIoop9KJTO5BouVU5AAodWRNkPIdcrcicoctS9p575OpMtFwddWk5B9F0N+8iDN0kwVdGEiyorgQ/uB+GNcpckO+FX97cT94mJmPuKvIUKKkig4de61etAfuCqoAJQLhMAL0iGA2AB1238LnsEnelKhGxiFn4NC3INHEC9bfKVy7sLlUqb4EwwBkzqCHmGRAM0jkq/VB1wZxW3YSIXWXC1xc0zl2v7sSw6kJGrHKodwXrTBU5PkzkB1Od13atMsK3zQWCcKz/HajcjdDkazfUe6jJkmCE/8MqJAKQ3XncAEBDcNSXClHo/KcNQpGOUhnMSjd2ircrBYvtmRayJnIimGNgMmcMeWqj3gd8F4loC1VMz5dlxQM48m5B3IrLAtHyEjPFMcvSgZMphRA+B6sbhqO5g44nkaL3HUKAVZQ8gdDraXGObmFw3rz32yZTOY+PbXEclHx221NcScKV3kyGo7twdIzWPuTOWjlUUhEqR2DhysIpEEPApOnHpqH5/76uR7nw0nUOQoHkNRo8uUhZZu7OoyWJNLx4/SODlbJKKJlSMQxse2Il6cY0g2Sz7bdIiRciIj0kLjIiPjrP9B+Oh3+GMeeuLaX2h1Z5dIyImfr7XANLSjXPcOHyprrFcqJpLlANhIccB4huABrjTkKx0x3wpxYzk0XfIMgNwipePmIhqqU6sQtBxyxyqmcEE6fWcnygPj5aQ7pOwGhMZyfv7tV9ylQ2kowgDhZ3Dj3lrZGruQSSJ14L1pFU2H5i77Dzh2f8AeZaH/Hc5E8js71whWpmaRuKz38rgSmTYuZQDuAQTUdAdMgFHYBDw3xbojtb4+tdIj598q3lHMFZ4VSKmSkKKCT8qTlQpQ6if5xIAhqC53tDdXmHnC7vVJW81iQuKAS1WcvTmXUI3lJJQETAmfpDoSOUoB+z4AGuW+0mzSD5l3KS9hFKjVo9rBV404/UZAm5qxbIkob2xOcTYOU+wa405DjeEJCmSELea7Jv7gTkSFBxGskZVJSRfuTsnJllgIkBzCng3XjpEMDpC3umjzuVgkK6zZxM+NrjYJnDpJG6giPySSWTIB09v3xCiJ/PGAzz5xN30xRq5w9yAm6gmHD8lNNrMhLMJWJMzfPyOGx1U2pA61E/ZTHfq6hDOrLyT2c9wVeo0FPTa7tjxtMSbaGf1Qi5gN9OxmetITgGTCBc9Xw1A858y92df5HvMxcmdUZ8Yt5c09MJM3aPuBK/VKOFTFTKOQEALgPPxDV4QfNTfTvOTziBV0jAm4QUjDgIgVQMGKPwyGrP3bfy8Hy69zuVjPYJ/iZpI/kLxCdduQdvbFCzpQTAgqHExjIgcNw28Ryn2/wA1C8tqccEiRrxY4bq0ZKljTgACmM4RwVby/wC09zPx0l3Y90/Kk4bkWWpkxVlOGjTUjMsYhWXUKZSRkZJRQyK6pATJ7YlAcZPvv+lBH4eGvDG3r+rXx/rxr19R1t57/hoMB577+AeuvHQb+I+mgAA28c/H7tfjv8A0Ahv6/d92g+4B/DQ59dvu+wdfhn7BH01kDbY9PP10H9vrr4Y2+JvTQbCGQ8c+A/dr8P6x9N9b/eAeH4ba8M7euNB82N/T/wCHP9+sY2xnP92vQAyOf+GgHO2PTx+P6a28fszjPw22/HWc49R9fw1t463DHp56zn9X+Gv7dZ0GR/UOgwOfwx/br79bjkB/VrH9QeGfx1663Db1/wCGh2+7fx0OfAMfhkP1/Z6D6awP4fH1/TxVZ6sV6bVIGCqS8LGyShQDbBTvEjiH4aOlAwUNCJKCAqJxEYyjU1BDwE5GRCAP4hoW79m1fNzDkyDxuk5RMIeAiksBij/VorhpBQzVwTYi7aLZILE/6qqRAMH4DoqsjERb9QuxVHse0dHKHoU65DCGjIMWDJkgfIHRaNUG6R8hgepNEoAP4hoxz1yBOcwiJjGiI8xjCO4iYwp5Edf/AK1Af/ho7/5eit2LRszQJ+wg1QSbol/6qaIAUPwDR01CFUTUKYh0zlA5DkMGDFOU2wgIbCA6LKLca0BaTKJhLIq06uqPiiccnEHZ2wqb+fzaFCMj2UciIgIosWiDRIRKGAEU25ShsHht+gRD9of6sfDW4Y/HOtgz+P8AdrYfPz/s31uGA8Px18fTQeQ+nj9g7fdv46320G+RHw2xkNeONeu33a8MB9+dCPgOc+OdtZ/Vr4/020P9MaAA3HYR38vAfHW4CAff562DP4/463DHw8ft30Pn6f4a+Pp8fTW4em+vHGRwG2dfrH4jrfffb4a/u0H+UfTxyGvHy8Pj66/D9etxAfhj+/Xh5evn6a3Dz+Gwa8PP18vXXn/WIfhrx8PEPQfXOrbyJ2l2i237iCyTprPCRMFexqx6s8/d+0wFosuiChC4HwHG3gOdRLbu5RsFDqLvBZW+XK8FtiEUREP3X0cCi4XyYfMSlD79cfdutPkAn3NZh2SNototk2atsn26QpLzazVMpQIKhRAOnGwBrbfHj5beugHHjj8A9dev+GtvMc/f8f0uONs/26331jy8P+T333yH2f08NY0AemP1fZ462HH/ADDHf7g9PswGg+H2j8cZ/DWB3+3Ijn08sev2Dv8Aq8Ps38P+de+/2bjn46+GgH02D7Nhx+H27ba31sONeP8Ax+zx39cf3f8AI+O2PD+/7MfZvrx29P79eOPw1n/Yz6/7A+o+f2/0H/Y+/QY2/wAPT/f/AP8A/f8A/wD/AH//AP8A38uv/9k=';
    }
    CreatePdfService.prototype.createPDF = function (testResults, user, doc) {
        var _this = this;
        console.log(doc.internal.getNumberOfPages());
        console.log("after page add " + doc.internal.getNumberOfPages());
        console.log('download');
        doc.addImage(this.imgdata, 'JPEG', 0, 0, 210, 297);
        doc.setFontSize(10);
        doc.text(35.7, 21.9, testResults.testName);
        doc.text(27, 25.6, user.firstName);
        doc.text(29, 29.8, user.sex);
        console.log(this.datepipe.transform(testResults.date, 'yyyy-MM-dd'));
        doc.text(27, 38.3, this.datepipe.transform(testResults.date, 'yyyy-MM-dd'));
        var timeDiff = Math.abs(Date.now() - Date.parse(user.birthDay));
        doc.text(25, 34.1, String(Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)));
        var testY = 73;
        var pageNum = 1;
        doc.text(90, 290, 'page ' + pageNum);
        testResults.observations.forEach(function (element) {
            var observationName = element.observationId.observationName;
            var unit = element.observationId.unit;
            var referenceRange = element.observationId.referenceRange;
            var observationValue = element.observationValue;
            if (testY < 275) {
                doc.text(15, testY, observationName);
                doc.text(74.3, testY, observationValue);
                doc.text(127.8, testY, unit);
                doc.text(158.5, testY, referenceRange);
            }
            else {
                testY = 17.5;
                pageNum = pageNum + 1;
                doc.addPage();
                doc.addImage(_this.imgdata2ndpage, 'JPEG', 0, 0, 210, 297);
                doc.text(90, 290, 'page ' + pageNum);
                doc.text(15, testY, observationName);
                doc.text(74.3, testY, observationValue);
                doc.text(127.8, testY, unit);
                doc.text(158.5, testY, referenceRange);
            }
            testY = testY + 6;
        });
        if (testY > 275) {
            doc.addPage();
            testY = 17.5;
            doc.text(90, 290, 'page ' + pageNum + 1);
        }
        doc.setFont('courier');
        doc.setFontType('bolditalic');
        doc.text(15, testY + 10, "Comments");
        doc.setFont('times');
        doc.setFontType('normal');
        doc.text(15, testY + 15, testResults.comments);
    };
    CreatePdfService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], CreatePdfService);
    return CreatePdfService;
}());



/***/ }),

/***/ "./src/app/services/create-test.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/create-test.service.ts ***!
  \*************************************************/
/*! exports provided: CreateTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTestService", function() { return CreateTestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CreateTestService = /** @class */ (function () {
    function CreateTestService(http) {
        this.http = http;
    }
    CreateTestService.prototype.getTest = function (_id) {
        return this.http.get('api/get-test', { params: { id: _id } });
    };
    CreateTestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CreateTestService);
    return CreateTestService;
}());



/***/ }),

/***/ "./src/app/services/event-emitter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/event-emitter.service.ts ***!
  \***************************************************/
/*! exports provided: EventEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitterService", function() { return EventEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventEmitterService = /** @class */ (function () {
    function EventEmitterService() {
        this.invokeCreateTestComponentFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EventEmitterService.prototype.onCreateComponentButtonClick = function (selectedOptions) {
        this.invokeCreateTestComponentFunction.emit(selectedOptions);
    };
    EventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventEmitterService);
    return EventEmitterService;
}());



/***/ }),

/***/ "./src/app/services/load-test.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/load-test.service.ts ***!
  \***********************************************/
/*! exports provided: LoadTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTestService", function() { return LoadTestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoadTestService = /** @class */ (function () {
    function LoadTestService(http) {
        this.http = http;
    }
    LoadTestService.prototype.loadTest = function () {
        return this.http.get('api/load-test');
    };
    LoadTestService.prototype.loadTestofPatient = function () {
        return this.http.get('api/getTestRecordName');
    };
    LoadTestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoadTestService);
    return LoadTestService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'noauth': 'true' }) };
    }
    LoginService.prototype.login = function (info) {
        return this.http.post('api/login', info, this.noAuthHeader);
    };
    LoginService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    LoginService.prototype.getUserProfile = function () {
        console.log('inside frontend grtUserProfile');
        return this.http.get('api/userProfile');
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/meta-test.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/meta-test.service.ts ***!
  \***********************************************/
/*! exports provided: MetaTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaTestService", function() { return MetaTestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MetaTestService = /** @class */ (function () {
    function MetaTestService(http) {
        this.http = http;
    }
    MetaTestService.prototype.addTestTemplate = function (metaTest) {
        console.log('on Add Test Template');
        console.log(metaTest);
        return this.http.post('api/addMetaTest', metaTest);
    };
    MetaTestService.prototype.getMetaTestName = function () {
        return this.http.get('api/getAllMetaTestName');
    };
    MetaTestService.prototype.deleteMetaTest = function (id) {
        console.log("inside service " + id);
        return this.http.post('api/deleteMetaTest', { 'id': id });
    };
    MetaTestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MetaTestService);
    return MetaTestService;
}());



/***/ }),

/***/ "./src/app/services/observation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/observation.service.ts ***!
  \*************************************************/
/*! exports provided: ObservationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationService", function() { return ObservationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ObservationService = /** @class */ (function () {
    function ObservationService(http) {
        this.http = http;
    }
    ObservationService.prototype.addObservations = function (observation) {
        return this.http.post('api/addObservation', observation);
    };
    ObservationService.prototype.getObservationList = function () {
        return this.http.get('api/getobservationList');
    };
    ObservationService.prototype.deleteClickObservation = function (observationId) {
        return this.http.post('api/deleteClickMetaObservation', { 'observationId': observationId });
    };
    ObservationService.prototype.deleteObservation = function (observationId) {
        return this.http.post('api/deleteMetaObservation', { 'observationId': observationId });
    };
    ObservationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ObservationService);
    return ObservationService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.register = function (userinfo) {
        return this.http.post('api/register', userinfo);
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/test-form.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/test-form.service.ts ***!
  \***********************************************/
/*! exports provided: TestFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFormService", function() { return TestFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TestFormService = /** @class */ (function () {
    function TestFormService(http) {
        this.http = http;
    }
    TestFormService.prototype.addTestResults = function (testFormValue) {
        return this.http.post('api/addTestResults', testFormValue);
    };
    TestFormService.prototype.searchPatient = function (name) {
        return this.http.post('api/search-patient', name);
    };
    TestFormService.prototype.getTestResults = function (testId) {
        return this.http.get('api/getTestRecord', { params: { Id: testId } });
    };
    TestFormService.prototype.getManyTest = function (testidlist) {
        return this.http.get('api/getManyTestRecord', { params: { IdList: testidlist } });
    };
    TestFormService.prototype.getAllTestList = function () {
        return this.http.get('api/getAllTestRecord');
    };
    TestFormService.prototype.deleterTestRecord = function (id) {
        return this.http.post('api/deleteTestRecord', { '_id': id });
    };
    TestFormService.prototype.getPatientsTestRecords = function (id) {
        return this.http.post('api/getPatientsTestRecords', { '_id': id });
    };
    TestFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestFormService);
    return TestFormService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.getUserPayLoad = function () {
        var token = this.getToken();
        if (token) {
            var userPayLoad = atob(token.split('.')[1]);
            return JSON.parse(userPayLoad);
        }
        else {
            return null;
        }
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get('api/userProfile');
    };
    UserService.prototype.isUserLoggedIn = function () {
        var userPayLoad = this.getUserPayLoad();
        if (userPayLoad) {
            console.log(userPayLoad.exp > Date.now() / 1000);
            return userPayLoad.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    UserService.prototype.updateUser = function (userDetails) {
        return this.http.post('api/update-user', userDetails);
    };
    UserService.prototype.getUserType = function () {
        return this.http.get('api/getUserType');
    };
    UserService.prototype.getAllPatients = function () {
        return this.http.get('api/getAllPatients');
    };
    UserService.prototype.getPatient = function (id) {
        return this.http.post('api/getPatient', { _id: id });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/test-form/test-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-form/test-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer-containor{\r\n  margin-top:70px;\r\n}\r\n\r\n.containor{\r\n  text-align: center;\r\n  width:50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1mb3JtL3Rlc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtZm9ybS90ZXN0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1jb250YWlub3J7XHJcbiAgbWFyZ2luLXRvcDo3MHB4O1xyXG59XHJcblxyXG4uY29udGFpbm9ye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDo1MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/test-form/test-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/test-form/test-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-containor\">\n  <!-- {{this.testTemplate|json}} -->\n  <div class=\"containor\">\n    <h3>{{testTemplate?.testName}}</h3>\n    <mat-card>\n\n      <mat-card-content>\n\n        <form [formGroup]='testForm'>\n\n          <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Patient Name\" formControlName='patientId' (keyup)=\"search($event)\" [matAutocomplete]=\"auto\">\n          </mat-form-field>\n          <mat-autocomplete #auto=\"matAutocomplete\" >\n            <mat-option *ngFor=\"let item of searchResults\" [value]=\"item[1]\">{{item[0]}}</mat-option>\n          </mat-autocomplete>\n          <div *ngIf=\"patientId.invalid && (patientId.dirty || patientId.touched)\"\n               class=\"alert alert-danger\">\n            <div *ngIf=\"patientId.errors.required\">\n              Patient's Name is required.\n            </div>\n          </div>\n\n          <br>\n\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"date\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <div *ngIf=\"date.invalid && (date.dirty || date.touched)\"\n               class=\"alert alert-danger\">\n            <div *ngIf=\"date.errors.required\">\n              Date is required.\n            </div>\n          </div>\n\n          <br>\n\n          <div formArrayName=\"inputobservations\" *ngFor=\"let observation of observations;let i=index\">\n            <div [formGroupName]=\"i\" *ngIf=\"observation.hasOwnProperty('unit') && observation.codedValues.length===0\">\n              <mat-form-field>\n                <input type=\"number\" matInput placeholder=\"{{observation.observationName}}\" formControlName='observationValue'>\n              </mat-form-field>\n              <div *ngIf=\"getObservationName(i).invalid && (getObservationName(i).dirty || getObservationName(i).touched)\"\n                   class=\"alert alert-danger\">\n                <div *ngIf=\"getObservationName(i).errors.required\">\n                  Value is required.\n                </div>\n              </div>\n            </div>\n            <div [formGroupName]=\"i\" *ngIf=\"observation.hasOwnProperty('codedValues') && observation.codedValues.length!==0\">\n              <mat-form-field>\n                <mat-label>{{observation.observationName}}</mat-label>\n                <mat-select formControlName='observationValue'>\n                  <mat-option *ngFor=\"let codedValue of observation.codedValues\" [value]=\"codedValue\" >\n                    {{codedValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"getObservationName(i).invalid && (getObservationName(i).dirty || getObservationName(i).touched)\"\n                   class=\"alert alert-danger\">\n                <div *ngIf=\"getObservationName(i).errors.required\">\n                  Value is required.\n                </div>\n              </div>\n\n            </div>\n          </div >\n          <mat-form-field >\n            <textarea matInput placeholder=\"Comments\" name=\"\" id=\"\" cols=\"30\" rows=\"10\"  formControlName=\"comments\"></textarea>\n          </mat-form-field>\n          <br>\n          <button mat-raised-button (click)=\"addTestResults()\" color=\"primary\">Submit</button>\n        </form>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/test-form/test-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-form/test-form.component.ts ***!
  \**************************************************/
/*! exports provided: TestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFormComponent", function() { return TestFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_create_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/create-test.service */ "./src/app/services/create-test.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_test_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/test-form.service */ "./src/app/services/test-form.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");







var TestFormComponent = /** @class */ (function () {
    function TestFormComponent(route, createTestService, fb, router, testFromService, ar, loginService) {
        this.route = route;
        this.createTestService = createTestService;
        this.fb = fb;
        this.router = router;
        this.testFromService = testFromService;
        this.ar = ar;
        this.loginService = loginService;
        this.observations = [];
        this.searchResults = [];
    }
    TestFormComponent.prototype.ngOnInit = function () {
        this.testForm = this.fb.group({
            testId: [],
            testName: [],
            patientId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            comments: [''],
            inputobservations: this.fb.array([])
        });
        this.createTestForm();
        this.getUserType();
    };
    TestFormComponent.prototype.getUserType = function () {
        var _this = this;
        this.loginService.getUserProfile().subscribe(function (res) {
            console.log("inside get user Type " + JSON.stringify(res));
            _this.userType = res.user.userType;
        });
    };
    TestFormComponent.prototype.createTestForm = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params.id;
            _this.testForm.get('testId').setValue(_this.id);
            _this.createTestService.getTest(_this.id).subscribe(function (res) {
                console.log('**************');
                console.log(res);
                _this.testTemplate = res;
                _this.testForm.get('testName').setValue(_this.testTemplate.testName);
                _this.observations = _this.testTemplate.observations;
                console.log("in create Test form Observations length" + _this.observations.length);
                _this.addInputFields();
            });
        });
    };
    TestFormComponent.prototype.createFormGroup = function (id) {
        return this.fb.group({
            observationValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            observationId: [id]
        });
    };
    TestFormComponent.prototype.addInputFields = function () {
        console.log("in add input field Observations length" + this.observations.length);
        for (var index = 0; index < this.observations.length; index++) {
            this.testForm.get('inputobservations').push(this.createFormGroup(this.observations[index]._id));
            console.log(this.observations[index]._id);
            console.log(this.observations[index].observationName);
        }
    };
    TestFormComponent.prototype.addTestResults = function () {
        if (this.testForm.invalid) {
            alert("Please enter correct values");
            return;
        }
        else if (this.searchResults.length === 0) {
            alert("Incorrect user");
        }
        else {
            console.log('inside addTstResults');
            this.testFromService.addTestResults(this.testForm.value).subscribe();
            if (this.userType === 'admin') {
                this.router.navigate(['../admin-profile'], { relativeTo: this.ar });
            }
            else if (this.userType === "labEmployee") {
                this.router.navigate(['../lab-empolyee-profile'], { relativeTo: this.ar });
            }
            else {
                console.log("user type " + this.userType);
            }
        }
    };
    TestFormComponent.prototype.search = function (event) {
        var _this = this;
        console.log("key up!");
        console.log(JSON.stringify(event.target.value));
        this.testFromService.searchPatient({ 'input': event.target.value }).subscribe(function (data) {
            _this.searchResults = [];
            console.log(data);
            for (var index = 0; index < data.length; index++) {
                var name_1 = data[index].userName;
                var id = data[index]._id;
                _this.searchResults.push([name_1, id]);
                console.log(_this.searchResults);
                // this.searchResults.push(data[index].userName)
            }
        });
    };
    TestFormComponent.prototype.onPatientChange = function (value, id) {
        console.log("on patient name change");
        console.log(id);
    };
    Object.defineProperty(TestFormComponent.prototype, "patientId", {
        get: function () { return this.testForm.get('patientId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestFormComponent.prototype, "date", {
        get: function () { return this.testForm.get('date'); },
        enumerable: true,
        configurable: true
    });
    TestFormComponent.prototype.getObservationName = function (i) { return this.testForm.get('inputobservations').at(i).get('observationValue'); };
    TestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-form',
            template: __webpack_require__(/*! ./test-form.component.html */ "./src/app/test-form/test-form.component.html"),
            styles: [__webpack_require__(/*! ./test-form.component.css */ "./src/app/test-form/test-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_create_test_service__WEBPACK_IMPORTED_MODULE_3__["CreateTestService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_test_form_service__WEBPACK_IMPORTED_MODULE_5__["TestFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], TestFormComponent);
    return TestFormComponent;
}());



/***/ }),

/***/ "./src/app/view-added-test-results-list/view-added-test-results-list.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/view-added-test-results-list/view-added-test-results-list.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n  font-size: medium;\r\n}\r\nh3{\r\n  font-size: medium;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1hZGRlZC10ZXN0LXJlc3VsdHMtbGlzdC92aWV3LWFkZGVkLXRlc3QtcmVzdWx0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYWRkZWQtdGVzdC1yZXN1bHRzLWxpc3Qvdmlldy1hZGRlZC10ZXN0LXJlc3VsdHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5oM3tcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/view-added-test-results-list/view-added-test-results-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/view-added-test-results-list/view-added-test-results-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n  <div class=\"list\" *ngIf=\"testList.length>0\">\n    <mat-nav-list dense>\n      <mat-list-item *ngFor=\"let item of testList;let i=index\" (click)=\"navigateTest(i)\">\n        <h3 matLine> {{item?.testName}} </h3>\n        <p matLine> {{item?.patientId.userName}} </p>\n        <p matLine class=\"demo-2\"> {{item?.date|date}} </p>\n      </mat-list-item>\n      <mat-divider></mat-divider>\n    </mat-nav-list>\n  </div>\n  <div class=\"empty\" *ngIf=\"testList.length===0\">\n    <h3>No Tests</h3>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/view-added-test-results-list/view-added-test-results-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/view-added-test-results-list/view-added-test-results-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewAddedTestResultsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAddedTestResultsListComponent", function() { return ViewAddedTestResultsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_test_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/test-form.service */ "./src/app/services/test-form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewAddedTestResultsListComponent = /** @class */ (function () {
    function ViewAddedTestResultsListComponent(testFormService, router, route) {
        this.testFormService = testFormService;
        this.router = router;
        this.route = route;
        this.testList = [];
    }
    ViewAddedTestResultsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testFormService.getAllTestList().subscribe(function (res) {
            console.log(JSON.stringify(res));
            res.forEach(function (element) {
                _this.testList.push(element);
            });
        });
    };
    ViewAddedTestResultsListComponent.prototype.navigateTest = function (i) {
        console.log(this.testList[i]._id);
        this.router.navigate(['../view-patient-test'], { queryParams: { id: this.testList[i]._id, patientName: this.testList[i].patientId.userName }, relativeTo: this.route });
    };
    ViewAddedTestResultsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-added-test-results-list',
            template: __webpack_require__(/*! ./view-added-test-results-list.component.html */ "./src/app/view-added-test-results-list/view-added-test-results-list.component.html"),
            styles: [__webpack_require__(/*! ./view-added-test-results-list.component.css */ "./src/app/view-added-test-results-list/view-added-test-results-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_test_form_service__WEBPACK_IMPORTED_MODULE_2__["TestFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewAddedTestResultsListComponent);
    return ViewAddedTestResultsListComponent;
}());



/***/ }),

/***/ "./src/app/view-patient-test/view-patient-test.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/view-patient-test/view-patient-test.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.table-containor{\r\n  padding: 20px;\r\n}\r\n\r\n.info{\r\n  padding: 20px;\r\n}\r\n\r\n.field label{\r\n  width: 100px;\r\n  display: inline-block;\r\n  font-weight: 500;\r\n}\r\n\r\n.footer{\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wYXRpZW50LXRlc3Qvdmlldy1wYXRpZW50LXRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlldy1wYXRpZW50LXRlc3Qvdmlldy1wYXRpZW50LXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5vcntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5pbmZve1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5maWVsZCBsYWJlbHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/view-patient-test/view-patient-test.component.html":
/*!********************************************************************!*\
  !*** ./src/app/view-patient-test/view-patient-test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containor\">\n\n  <div class=\"info\">\n    <div class=\"field\">\n      <label >Test Name</label>\n      <span>{{testName}}</span>\n    </div>\n    <div class=\"field\">\n      <label >Patient</label>\n      <span>{{userName}}</span>\n    </div>\n  </div>\n  <div class=\"table-containor\">\n    <table mat-table [dataSource]=\"datasource\" class=\"mat-elevation-z8\">\n\n\n      <ng-container matColumnDef=\"tests\">\n        <th mat-header-cell *matHeaderCellDef> Test </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.test}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"value\">\n        <th mat-header-cell *matHeaderCellDef> Observation </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.observation}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"unit\">\n        <th mat-header-cell *matHeaderCellDef> Unit </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.unit}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"referenceRange\">\n        <th mat-header-cell *matHeaderCellDef> Refference Range </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.referenceRange}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColums\" class=\"header-row\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColums;\"></tr>\n    </table>\n  </div>\n  <div class=\"footer\">\n    <button mat-raised-button color=\"primary\" (click)=\"delete()\">Delete</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/view-patient-test/view-patient-test.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/view-patient-test/view-patient-test.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewPatientTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPatientTestComponent", function() { return ViewPatientTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_test_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/test-form.service */ "./src/app/services/test-form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var ViewPatientTestComponent = /** @class */ (function () {
    function ViewPatientTestComponent(testFormServise, route) {
        this.testFormServise = testFormServise;
        this.route = route;
        this.observations = [];
        this.displayedColums = ['tests', 'value', 'unit', 'referenceRange'];
        this.testValueData = [];
    }
    ViewPatientTestComponent.prototype.ngOnInit = function () {
        this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.createTestForm();
    };
    ViewPatientTestComponent.prototype.createTestForm = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params.id;
            _this.userName = params.patientName;
            _this.testFormServise.getTestResults(_this.id).subscribe(function (data) {
                _this.testResults = data;
                console.log(_this.testResults);
                _this.testName = data.testName;
                console.log('this is data  ' + data.testName);
                data.observations.forEach(function (element) {
                    var tunit;
                    var trrange;
                    if (element.observationId.unit === undefined) {
                        tunit = 'NA';
                        trrange = 'NA';
                    }
                    else {
                        tunit = element.observationId.unit;
                        trrange = element.observationId.referenceRange;
                    }
                    var jobj = { test: element.observationId.observationName, observation: element.observationValue, unit: tunit, referenceRange: trrange };
                    _this.testValueData.push(jobj);
                });
                console.log(_this.testValueData);
                _this.datasource.data = _this.testValueData;
            });
        });
    };
    ViewPatientTestComponent.prototype.delete = function () {
        this.testFormServise.deleterTestRecord(this.id).subscribe(function (res) {
            console.log('res ' + res);
        });
    };
    ViewPatientTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-patient-test',
            template: __webpack_require__(/*! ./view-patient-test.component.html */ "./src/app/view-patient-test/view-patient-test.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            styles: [__webpack_require__(/*! ./view-patient-test.component.css */ "./src/app/view-patient-test/view-patient-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_test_form_service__WEBPACK_IMPORTED_MODULE_2__["TestFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewPatientTestComponent);
    return ViewPatientTestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Acedemic\semester 5\software engineering project\seproject\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map