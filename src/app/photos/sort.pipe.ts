import {Pipe, PipeTransform} from '@angular/core';

import {Photo} from './photo';

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {
  transform(array: Photo[], args: string): Photo[] {
    array.sort((a: Photo, b: Photo) => {
      if (a[args] > b[args]) {
        return -1;
      } else if (a[args] < b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
