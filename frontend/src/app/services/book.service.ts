import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
    constructor(
        private http: Http
    ) {}

    public getBooks() {
        const endPoint = `http://localhost:3022/`

        return this.http.get(endPoint)
            .map(res => res.json());
    }
}