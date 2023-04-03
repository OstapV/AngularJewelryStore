import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';

@Pipe({
  name: 'filterCustomers'
})
export class FilterCustomersPipe implements PipeTransform {

  constructor() {}

  transform(customers: Customer[], search: string): Customer[] {
    if(typeof(search) === 'undefined' || search.length === 0 ) return customers;
    return customers.filter(x => x.username.toLowerCase().includes(search.toLowerCase()));
  }

}
