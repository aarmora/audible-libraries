import {
    Component,
    Input
} from '@angular/core';

import { IBook } from './../../models/book';

@Component({
    selector: 'book',
    styleUrls: ['./book.css'],
    templateUrl: './book.html'
})

export class BookComponent {
    @Input() public book: IBook;
    public obfuscate = true;

    public goToUrl(url: string) {
        window.open(url);
    }

    public bookOwner() {
        if (this.obfuscate) {
            return "**********";
        }
        else {
            return this.book.owner;
        }
    }
}