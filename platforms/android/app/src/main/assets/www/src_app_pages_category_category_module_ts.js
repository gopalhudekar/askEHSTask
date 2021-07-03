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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./category.page.html */ 3142);
/* harmony import */ var _category_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page.scss */ 8266);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/database.service */ 4382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);





let CategoryPage = class CategoryPage {
    constructor(db) {
        this.db = db;
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
};
CategoryPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-category',
        template: _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_category_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoryPage);



/***/ }),

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 5855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);

2;






let DatabaseService = class DatabaseService {
    constructor(plt, sqlitePorter, sqlite, http) {
        this.plt = plt;
        this.sqlitePorter = sqlitePorter;
        this.sqlite = sqlite;
        this.http = http;
        this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.mainCategory = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.plt.ready().then(() => {
            this.sqlite.create({
                name: 'database.db',
                location: 'default'
            }).then((db) => {
                this.database = db;
                this.seedDatabase();
            });
        });
    }
    seedDatabase() {
        this.http.get('assets/seed.sql', { responseType: 'text' })
            .subscribe(sql => {
            this.sqlitePorter.importSqlToDb(this.database, sql)
                .then(_ => {
                this.loadmainCategory();
                this.dbReady.next(true);
            })
                .catch(e => console.error(e));
        });
    }
    getDatabaseState() {
        return this.dbReady.asObservable();
    }
    getmainCategory() {
        return this.mainCategory.asObservable();
    }
    loadmainCategory() {
        return this.database.executeSql('SELECT * FROM mainCategory', []).then(data => {
            let categories = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    let skills = [];
                    if (data.rows.item(i).skills != '') {
                        skills = JSON.parse(data.rows.item(i).skills);
                    }
                    categories.push({
                        id: data.rows.item(i).id,
                        name: data.rows.item(i).name,
                    });
                }
            }
            this.mainCategory.next(categories);
        });
    }
    addRecord(tablename, name, skills, img) {
        let data = [name, JSON.stringify(skills), img];
        return this.database.executeSql('INSERT INTO' + tablename + '(name) VALUES (?)', data).then(data => {
        });
    }
};
DatabaseService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLitePorter },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of category\">\n      <ion-label > {{item.name}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_category_category_module_ts.js.map