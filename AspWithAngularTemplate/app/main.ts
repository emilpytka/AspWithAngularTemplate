/// <reference path="../typings/index.d.ts" />

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { provide } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {
    APP_BASE_HREF,
    Location,
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]).catch(err => console.error(err));
