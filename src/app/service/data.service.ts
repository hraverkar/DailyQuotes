import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public URL: string;
  public APIKEY: string;
  public MethodName: string;
  public lang: string;
  public formate: string;

  public host = 'http://localhost:7272';

  constructor(private httpClient: HttpClient) {}

  getQuotesForDay() {
    return this.httpClient.get(this.host, { responseType: 'json'}).pipe(
      retry(3),
      catchError(this.handleError),
      tap((res) => {})
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown Error';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`;
    } else {
      errorMessage = `Error : ${error.status} \nMessage : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
