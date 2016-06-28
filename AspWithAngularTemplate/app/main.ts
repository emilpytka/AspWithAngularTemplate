/// <reference path="../typings/index.d.ts" />

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';

import { AppComponent } from './app.component';

import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import { ValuesService } from './values.service';

import {
    APP_BASE_HREF,
    Location,
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, 
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    HTTP_PROVIDERS,
    ValuesService,
]).catch(err => console.error(err));
