import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { CashBookEntry } from '../models/cashBookEntry';
import { CashBookEntryService } from '../services/cash-book-entry.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { CashBook } from '../models/cashBook';
import { CashBookService } from '../services/cash-book.service';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');

@Component({
  selector: 'app-cash-book-entry-table',
  templateUrl: './cash-book-entry-table.component.html',
  styleUrls: ['./cash-book-entry-table.component.css']
})
export class CashBookEntryTableComponent implements OnInit {

  @Input() cashBook: CashBook;
  cashBookEntries: CashBookEntry[];

  // Table Fields
  dataSource: MatTableDataSource<CashBookEntry>;
  displayedColumns: string[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private cashBookEntryService: CashBookEntryService,
    private cashBookService: CashBookService,
  ) { }

  ngOnInit(): void {
    this.getAllCashBookEntries(this.cashBook.id);
    this.displayedColumns = ['position', 'income-expense-position', 'title', 'income', 'expense', 'receiver-sender', 'value-date'];
  }

  getAllCashBookEntries(cashBookId: number): void {
    this.cashBookEntryService.getAllForCashBook(cashBookId).subscribe(
      data => this.cashBookEntries = data,
      error => console.log(error),
      () => this.updateTable()
    );
  }

  updateTable(): void {
    this.dataSource = new MatTableDataSource<CashBookEntry>(this.cashBookEntries);
    this.dataSource.sort = this.sort;
  }

}
