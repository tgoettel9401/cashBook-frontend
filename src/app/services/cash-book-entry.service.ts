import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashBookEntryService {

  constructor(private httpClient: HttpClient) { 

  }

  getAll(): Observable<any> {
    return this.httpClient.get('//localhost:8080/api/cashBookEntries');
  }
}
