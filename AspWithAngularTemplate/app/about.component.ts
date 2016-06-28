/// <reference path="../typings/index.d.ts" />

import { Component } from '@angular/core';
import { ValuesService } from './values.service';

@Component({
    selector: 'my-about',
    templateUrl: 'app/about.component.html',
})

export class AboutComponent  {

    public firstName: string;
    public lastName: string;
    public values: Array<string>;

    constructor(private valuesService: ValuesService) {
        this.firstName = "John";
        this.lastName = "Snow";
        this.initializeArray();
    }

    initializeArray() {
        var that = this;

        this.valuesService.get()
            .then(result => that.values = result);
    }
}