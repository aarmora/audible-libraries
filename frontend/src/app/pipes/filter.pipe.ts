import { Pipe, Injectable, PipeTransform } from '@angular/core';

@Pipe({
    name: "filter",
    pure: false
})


// Note that this only filters arrays of objects. I do not believe it will work on an array of strings.
@Injectable()
export class FilterPipe implements PipeTransform {

    public transform(data: any[], searchTerm: string): any[] {
        searchTerm = searchTerm.toUpperCase();
        return data.filter(item => {
            for (let property in item) {
                if (item.hasOwnProperty(property)) {
                    if (typeof item[property] === "string") {
                        let searchTest = item[property].toUpperCase().indexOf(searchTerm) !== -1;
                        if (searchTest) {
                            return searchTest;
                        }
                    }
                }
            }
        });
    }
}
