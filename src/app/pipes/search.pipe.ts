import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
    public transform(value, filterString: string, propName: string) {
        if (value.length === 0) {
            return value;
        }
        for (const item of value) {
            const resultArray = [];
            if (item[propName].includes(filterString)) {
                resultArray.push(item);
            }
            return resultArray;
        }
    }
}