(self["webpackChunkAskEHSTask"] = self["webpackChunkAskEHSTask"] || []).push([["src_app_pages_category_category_module_ts"],{

/***/ 8118:
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageRoutingModule": () => (/* binding */ CategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page */ 7384);




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_0__.CategoryPage
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ 8712:
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageModule": () => (/* binding */ CategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 8118);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page */ 7384);







let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryPageRoutingModule
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_1__.CategoryPage]
    })
], CategoryPageModule);



/***/ }),

/***/ 7384:
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPage": () => (/* binding */ CategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./category.page.html */ 3142);
/* harmony import */ var _category_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page.scss */ 8266);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/database.service */ 4382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _create_category_create_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-category/create-category.page */ 4829);
/* harmony import */ var _cat_details_cat_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat-details/cat-details.page */ 6060);








let CategoryPage = class CategoryPage {
    constructor(db, modalCtrl, alertController) {
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.db.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                this.db.getmainCategory().subscribe(devs => {
                    this.category = devs;
                    console.log('Database data: ', this.category);
                });
            }
        });
    }
    ionViewWillEnter() {
        this.getAllRecord();
    }
    getAllRecord() {
        this.db.getAllRecord().then(res => {
            console.log("All record : ", res);
        });
    }
    openModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("item : ", item);
            const modal = yield this.modalCtrl.create({
                component: _cat_details_cat_details_page__WEBPACK_IMPORTED_MODULE_4__.CatDetailsPage,
                componentProps: {
                    "paramData": item,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.db.loadmainCategory();
            });
            return yield modal.present();
        });
    }
    addmainCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _create_category_create_category_page__WEBPACK_IMPORTED_MODULE_3__.CreateCategoryPage,
                cssClass: 'addCatModal',
                componentProps: {
                    "paramData": '',
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned) {
                    this.db.loadmainCategory();
                }
            });
            return yield modal.present();
        });
    }
    addChildCategory(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _create_category_create_category_page__WEBPACK_IMPORTED_MODULE_3__.CreateCategoryPage,
                cssClass: 'addCatModal',
                componentProps: {
                    "paramData": item,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned) {
                    this.db.loadmainCategory();
                }
            });
            return yield modal.present();
        });
    }
    onDelete(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure to delete category !!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.db.deleteNode(item.id).then(res => {
                                this.db.loadmainCategory();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CategoryPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-category',
        template: _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_category_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoryPage);



/***/ }),

/***/ 8266:
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3142:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Category</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button  (click)=\"addmainCategory()\">  <ion-icon  name=\"add-circle-outline\"></ion-icon>  Add Category</ion-button>\r\n  <!-- <ion-button (click)=\"getAllRecord()\"> open modal</ion-button> -->\r\n  <!-- <ng-template #recursiveList let-list>\r\n  <ion-list  *ngFor=\"let item of list\"> \r\n    <ion-item>\r\n      <ion-label > {{item.name}}</ion-label>    \r\n    </ion-item>\r\n    <ion-item *ngIf=\"item.child.length > 0\">\r\n      <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: item.child }\"></ng-container>\r\n    </ion-item>\r\n  </ion-list>\r\n  </ng-template>\r\n  <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: category }\"></ng-container>\r\n   -->\r\n\r\n<!-- \r\n   <ul>\r\n    <ng-template #recursiveList let-list>\r\n      <li *ngFor=\"let item of list\">\r\n        {{item.name}}\r\n        <ul *ngIf=\"item.child.length > 0\">\r\n          <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: item.child }\"></ng-container>\r\n        </ul>\r\n      </li>\r\n    </ng-template>\r\n    <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: category }\"></ng-container>\r\n  </ul> -->\r\n  \r\n  <!-- <ul>\r\n    <ng-template #recursiveList let-list>\r\n      <li *ngFor=\"let item of list\">\r\n        {{item.name}}\r\n        <ul *ngIf=\"item.child.length > 0\">\r\n          <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: item.child }\"></ng-container>\r\n        </ul>\r\n      </li>\r\n    </ng-template>\r\n    <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: category }\"></ng-container>\r\n  </ul> -->\r\n  \r\n  <ion-list  *ngFor=\"let item of category\" class=\"parent\"> \r\n    <ion-item>\r\n      <ion-label > {{item.name}}</ion-label>   <ion-icon (click)=\"onDelete(item)\" name=\"trash-outline\"></ion-icon> \r\n      <ion-icon name=\"add-circle-outline\" (click)=\"addChildCategory(item)\"></ion-icon>  \r\n        <ion-icon slot='end'  *ngIf=\"item.child.length > 0\" name=\"caret-down-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-list  *ngFor=\"let childItem of item.child\"  class=\"child\"> \r\n    <ion-item > \r\n      <ion-label > {{childItem.name}}</ion-label>    <ion-icon (click)=\"onDelete(childItem)\" name=\"trash-outline\"></ion-icon>  \r\n       <ion-icon (click)=\"addChildCategory(childItem)\" name=\"add-circle-outline\"></ion-icon>      <ion-icon slot='end' (click)=\"openModal(childItem)\" *ngIf=\"childItem.child.length > 0\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n    </ion-list>  \r\n  </ion-list>\r\n\r\n\r\n \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_category_category_module_ts.js.map