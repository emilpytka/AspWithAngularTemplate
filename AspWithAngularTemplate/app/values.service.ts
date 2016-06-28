/// <reference path="../typings/index.d.ts" />
/// <reference path="../node_modules/rxjs/add/operator/toPromise.d.ts" />

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ValuesService {

    constructor(private http: Http) {

    }

    get() : Promise<Array<string>>{
        var that = this;
        return this.http.get("/api/values")
            .toPromise()
            .then(response => {
                return response.json()
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}