(self["webpackChunkAskEHSTask"] = self["webpackChunkAskEHSTask"] || []).push([["src_app_pages_create-category_create-category_module_ts"],{

/***/ 6533:
/*!*************************************************************************!*\
  !*** ./src/app/pages/create-category/create-category-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCategoryPageRoutingModule": () => (/* binding */ CreateCategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _create_category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-category.page */ 4829);




const routes = [
    {
        path: '',
        component: _create_category_page__WEBPACK_IMPORTED_MODULE_0__.CreateCategoryPage
    }
];
let CreateCategoryPageRoutingModule = class CreateCategoryPageRoutingModule {
};
CreateCategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateCategoryPageRoutingModule);



/***/ }),

/***/ 7900:
/*!*****************************************************************!*\
  !*** ./src/app/pages/create-category/create-category.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCategoryPageModule": () => (/* binding */ CreateCategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _create_category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-category-routing.module */ 6533);
/* harmony import */ var _create_category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-category.page */ 4829);







let CreateCategoryPageModule = class CreateCategoryPageModule {
};
CreateCategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateCategoryPageRoutingModule
        ],
        declarations: [_create_category_page__WEBPACK_IMPORTED_MODULE_1__.CreateCategoryPage]
    })
], CreateCategoryPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_create-category_create-category_module_ts.js.map