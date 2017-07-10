import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';

@Injectable()
export class BookService {
    constructor(
        private http: Http
    ) {}

    public getBooks() {
        const endPoint = `${environment.api}`

        return this.http.get(endPoint)
            .map(res => res.json());
    }
}