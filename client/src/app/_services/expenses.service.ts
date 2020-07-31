import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExpensesCategory} from "../_models/classes";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  loadExpensesCategory(): Observable<ExpensesCategory> {
    const endpoint = `${this.apiUrl}/expenses`

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient
      .get<ExpensesCategory>(endpoint, {
        headers
      })
      .pipe(
        tap(response => {
          console.log('DONE');
          console.log(response);
        })
      );
  }
}
