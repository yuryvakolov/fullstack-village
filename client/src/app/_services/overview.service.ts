import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Finance} from "../_models/classes";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  loadFinancialAnalytics(): Observable<Finance> {
    const endpoint = `${this.apiUrl}/finance`;
    console.log(endpoint);

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient
      .get<Finance>(endpoint, {
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
