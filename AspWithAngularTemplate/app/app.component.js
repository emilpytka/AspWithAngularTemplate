/// <reference path="../typings/index.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var about_component_1 = require('./about.component');
var home_component_1 = require('./home.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.router = router;
    }
    AppComponent.prototype.isActive = function (instruction) {
        return this.router.isRouteActive(this.router.generate(instruction));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [about_component_1.AboutComponent, home_component_1.HomeComponent, router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/about',
                name: 'About',
                component: about_component_1.AboutComponent
            },
            {
                path: '/',
                name: 'Home',
                useAsDefault: true,
                component: home_component_1.HomeComponent
            }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map