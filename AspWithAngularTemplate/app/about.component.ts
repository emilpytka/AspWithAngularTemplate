/// <reference path="../typings/index.d.ts" />

import { Component } from '@angular/core';
@Component({
    selector: 'my-about',
    templateUrl: 'app/about.component.html'
})
export class AboutComponent  {

    public firstName: string;
    public lastName: string;

    constructor() {
        this.firstName = "John";
        this.lastName = "Snow";
    }
}