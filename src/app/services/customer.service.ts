import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Customer } from '../models/customer';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  addCustomerURL: string;
  getAllCustomersURL: string;

  customers: Customer[] = [];

  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.addCustomerURL = 'https://localhost:44314/api/Customer';
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.addCustomerURL, customer).pipe(catchError(this.errorHandler.bind(this)));
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.addCustomerURL)
                        .pipe(
                          catchError(this.errorHandler.bind(this)),
                          tap(customers => this.customers = customers));
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.addCustomerURL, customer).pipe(catchError(this.errorHandler.bind(this)));
  }

  deleteCustomer(customer: Customer): Observable<Customer> {
    return this.http.delete<Customer>(this.addCustomerURL + '/' + customer.id).pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
