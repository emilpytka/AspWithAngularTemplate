/// <reference path="../typings/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_deprecated_1.ROUTER_PROVIDERS,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map