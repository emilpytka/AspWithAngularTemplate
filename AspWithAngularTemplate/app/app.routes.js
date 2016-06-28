/// <reference path="../typings/index.d.ts" />
"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var map_component_1 = require('./map.component');
exports.routes = [
    {
        path: '/about',
        component: about_component_1.AboutComponent
    },
    {
        path: '/map',
        component: map_component_1.MapComponent
    }];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map