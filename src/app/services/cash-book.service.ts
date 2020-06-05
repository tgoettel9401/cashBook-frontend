import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CashBook } from '../models/cashBook';

@Injectable({
  providedIn: 'root'
})
export class CashBookService {

  cashBookUrl = '//localhost:8080/api/cashBooks';

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<CashBook[]> {
    return this.httpClient.get<CashBook[]>('//localhost:8080/api/cashBooks')
      .pipe(
        map(
          (result: any) => {
            return result._embedded.cashBooks;
          })
      );
  }
}
