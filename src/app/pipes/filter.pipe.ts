import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';
import { Saler } from '../models/saler';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(salers: Saler[], search: string): Saler[] {
    if(typeof(search) === 'undefined' || search.length === 0) return salers;
    return salers.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
  }


}
