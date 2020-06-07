import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CashBookEntry } from '../models/cashBookEntry';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CashBookEntryService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<CashBookEntry[]> {
    return this.httpClient.get<CashBookEntry[]>('//localhost:8080/api/cashBookEntries')
      .pipe(
        map(
          (result: any) => {
            return result._embedded.cashBookEntries;
          })
      );
  }

  getAllForCashBook(cashBookId: number): Observable<CashBookEntry[]> {
    return this.httpClient.get<CashBookEntry[]>('//localhost:8080/api/cashBooks/' + cashBookId + '/cashBookEntries')
    .pipe(
      map(
        (result: any) => {
          return result._embedded.cashBookEntries;
        }
      )
    );
  }
}
