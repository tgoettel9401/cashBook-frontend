import { Component, OnInit } from '@angular/core';
import { CashBookService } from '../services/cash-book.service';

import { CashBook } from '../models/cashBook';

@Component({
  selector: 'app-cash-book-list',
  templateUrl: './cash-book-list.component.html',
  styleUrls: ['./cash-book-list.component.css']
})
export class CashBookListComponent implements OnInit {

  cashBooks: CashBook[];

  constructor(private cashBookService: CashBookService) { }

  ngOnInit(): void {
    this.getAllCashBooks();
  }

  getAllCashBooks(): void {
    this.cashBookService.getAll().subscribe(
      data => this.cashBooks = data,
      error => console.log(error),
    );
  }

}
