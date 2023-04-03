import { Injectable } from '@angular/core';
import { Saler } from '../models/saler';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class SalerService {

  SalerURL : string; 


  constructor(private http : HttpClient, private errorService : ErrorService) { 
    this.SalerURL = 'https://localhost:44314/api/Saler';
  }

  addSaler(saler : Saler) : Observable<Saler> {
    console.log(saler);
    return this.http.post<Saler>(this.SalerURL, saler).pipe(catchError(this.errorHandler.bind(this)));
  }

  getAllSalers() : Observable<Saler[]> {
    return this.http.get<Saler[]>(this.SalerURL).pipe(catchError(this.errorHandler.bind(this)));
  }

  updateSaler(saler : Saler) : Observable<Saler> {
    return this.http.put<Saler>(this.SalerURL, saler).pipe(catchError(this.errorHandler.bind(this)));
  }

  deleteSaler(saler : Saler) : Observable<Saler> {
    return this.http.delete<Saler>(this.SalerURL+'/'+saler.id).pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error : HttpErrorResponse)
    {
        this.errorService.handle(error.message);
        return throwError(() => error.message);
    }
}
