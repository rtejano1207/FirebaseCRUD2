webpackJsonp([3],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddShoppingPage = (function () {
    function AddShoppingPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.shoppingItem = {};
        this.shoppingItemRef$ = this.database.list('shopping-list');
        /* shopping-list:
            0:
              itemName: 'Pizza'
              itemNumber: 1
            
            1:
              itemName: 'Cheesecake'
              itemNumber: 5
       
        */
    }
    AddShoppingPage.prototype.addShoppingItem = function (shoppingItem) {
        // log the results to the console
        console.log(shoppingItem);
        /*
          Save data to database
          Create a new anonymous object and convert itemNumner fo Number to a number
          Push this to our Firebase Database under the shopping-list node.
          */
        this.shoppingItemRef$.push({
            itemName: this.shoppingItem.itemName,
            itemNumber: Number(this.shoppingItem.itemNumber)
        });
        // reset our shopping item
        this.shoppingItem = {};
        // navigate the user to main screen
        this.navCtrl.pop();
    };
    AddShoppingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddShoppingPage');
    };
    AddShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-shopping',template:/*ion-inline-start:"/home/raymond/Documents/Software Projects/Steal Deal/practice/Ionic/FirebaseCRUD2/src/pages/add-shopping/add-shopping.html"*/'<!--\n  Generated template for the AddShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Add Shopping</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Item Name</ion-label>\n    <ion-input type="text" [(ngModel)]="shoppingItem.itemName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Number</ion-label>\n    <ion-input type="number" [(ngModel)]="shoppingItem.itemNumber"></ion-input>\n  </ion-item>\n\n  <button ion-button block (click)="addShoppingItem(shoppingItem)">Add Item</button>\n</ion-content>\n'/*ion-inline-end:"/home/raymond/Documents/Software Projects/Steal Deal/practice/Ionic/FirebaseCRUD2/src/pages/add-shopping/add-shopping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AddShoppingPage);
    return AddShoppingPage;
}());

//# sourceMappingURL=add-shopping.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_shopping_add_shopping__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__ = __webpack_require__(445);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShoppingListPage = (function () {
    function ShoppingListPage(navCtrl, navParams, database, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        // we are pointing the shopping List reference @ Firebase -: 'shopping-list' node
        this.shoppingListRef$ = this.database.list('shopping-list');
        // log temporarily result set to console
        this.shoppingListItems = this.shoppingListRef$.snapshotChanges().map(function (actions) { return actions.map(function (a) { return (__assign({ childKey: a.payload.key }, a.payload.val())); }); });
    }
    ShoppingListPage.prototype.navigateToAddShoppingPage = function () {
        // navigate the user to AddShoppingPage
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_shopping_add_shopping__["a" /* AddShoppingPage */]);
    };
    ShoppingListPage.prototype.selectShoppingItem = function (shoppingItem) {
        var _this = this;
        // display an action sheet that givs the user the following options
        // 1. edit the shopping item
        // 2. delete the shopping item
        // 3. cancel selection
        this.actionSheetCtrl.create({
            title: "Item Name: " + shoppingItem.itemName,
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        // send the user to the editShoppingItemPage and pass the key as a parameter
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemID: shoppingItem.childKey });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        // delete the current shopping item
                        _this.shoppingListRef$.remove(shoppingItem.childKey);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('The user has canceled selection.');
                    }
                }
            ]
        }).present();
    };
    ShoppingListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingListPage');
    };
    ShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping-list',template:/*ion-inline-start:"/home/raymond/Documents/Software Projects/Steal Deal/practice/Ionic/FirebaseCRUD2/src/pages/shopping-list/shopping-list.html"*/'<!--\n  Generated template for the ShoppingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Shopping List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="navigateToAddShoppingPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <!-- repeate the ion-item as many as the items we have inside the shopping-list node-->\n    <ion-item *ngFor="let item of shoppingListItems | async" (click)="selectShoppingItem(item)">\n      <h2>Item Name: {{item.itemName}}</h2>\n      <h3>Amount: {{item.itemNumber}}</h3>\n\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/raymond/Documents/Software Projects/Steal Deal/practice/Ionic/FirebaseCRUD2/src/pages/shopping-list/shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object])
    ], ShoppingListPage);
    return ShoppingListPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-shopping/add-shopping.module": [
		442,
		2
	],
	"../pages/edit-shopping-item/edit-shopping-item.module": [
		443,
		0
	],
	"../pages/shopping-list/shopping-list.module": [
		444,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(298);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_credentials__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_shopping_add_shopping__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_shopping_item_edit_shopping_item__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-shopping/add-shopping.module#AddShoppingPageModule', name: 'AddShoppingPage', segment: 'add-shopping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-shopping-item/edit-shopping-item.module#EditShoppingItemPageModule', name: 'EditShoppingItemPage', segment: 'edit-shopping-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping-list/shopping-list.module#ShoppingListPageModule', name: 'ShoppingListPage', segment: 'shopping-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // initialize angular fire with appropriate credentials
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyDYtvAz0iFf7ATROSOIIp9z1LIX4iJP5ts",
    authDomain: "fir-crud-9afde.firebaseapp.com",
    databaseURL: "https://fir-crud-9afde.firebaseio.com",
    projectId: "fir-crud-9afde",
    storageBucket: "fir-crud-9afde.appspot.com",
    messagingSenderId: "487155848191"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shopping_list_shopping_list__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/raymond/Documents/Software Projects/Steal Deal/practice/Ionic/FirebaseCRUD2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/raymond/Documents/Software Projects/Steal Deal/practice/Ionic/FirebaseCRUD2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 * Generated class for the EditShoppingItemPage page.
 *;
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditShoppingItemPage = (function () {
    function EditShoppingItemPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.shoppingItem = {};
        // captre the shopping item ID as a nav Parameter
        var shoppingItemID = navParams.get('shoppingItemID');
        // log out selected item key into console
        console.log(shoppingItemID);
        // set the scope of our Firebase object = navParams or Selected Item
        this.shoppingItemRef$ = this.database.object("shopping-list/" + shoppingItemID);
        // subscribe to the obect and assign the result to this.shoppingItem
        this.shoppingItemSubscription = this.shoppingItemRef$.valueChanges().subscribe(function (shoppingItem) { return _this.shoppingItem = shoppingItem; });
    }
    EditShoppingItemPage.prototype.editShoppingItem = function (shoppingItem) {
        // update our firebase node with new item data\
        this.shoppingItemRef$.update(shoppingItem);
        // close the current edit template
        this.navCtrl.pop();
    };
    EditShoppingItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditShoppingItemPage');
    };
    EditShoppingItemPage.prototype.ionViewWillLeave = function () {
        // unscubscribe from the observable when leaving the page
        this.shoppingItemSubscription.unsubscribe();
    };
    EditShoppingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-shopping-item',template:/*ion-inline-start:"/home/raymond/Documents/Software Projects/Steal Deal/practice/Ionic/FirebaseCRUD2/src/pages/edit-shopping-item/edit-shopping-item.html"*/'<!--\n  Generated template for the EditShoppingItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="Secondary">\n    <ion-title>{{shoppingItem.itemName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Item Name</ion-label>\n    <ion-input type="text" [(ngModel)]="shoppingItem.itemName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Number</ion-label>\n    <ion-input type="number" [(ngModel)]="shoppingItem.itemNumber"></ion-input>\n  </ion-item>\n\n  <button ion-button block (click)="editShoppingItem(shoppingItem)">Edit Item</button>\n</ion-content>\n'/*ion-inline-end:"/home/raymond/Documents/Software Projects/Steal Deal/practice/Ionic/FirebaseCRUD2/src/pages/edit-shopping-item/edit-shopping-item.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], EditShoppingItemPage);
    return EditShoppingItemPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=edit-shopping-item.js.map

/***/ })

},[277]);
//# sourceMappingURL=main.js.map