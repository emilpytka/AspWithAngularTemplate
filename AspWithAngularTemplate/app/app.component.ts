/// <reference path="../typings/index.d.ts" />

import { Component } from '@angular/core';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';

import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [AboutComponent, HomeComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    },
    {
        path: '/',
        name: 'Home',
        useAsDefault: true,
        component: HomeComponent
    }
])
export class AppComponent {
    public costam: string;

    constructor(private router: Router) {
        this.router = router;
    }

    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }

}
