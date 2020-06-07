import { Component, OnInit, ViewChild } from '@angular/core';

import { CashBookEntry } from '../models/cashBookEntry';
import { CashBookEntryService } from '../services/cash-book-entry.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { CashBook } from '../models/cashBook';
import { CashBookService } from '../services/cash-book.service';

@Component({
  selector: 'app-cash-book-entry-table',
  templateUrl: './cash-book-entry-table.component.html',
  styleUrls: ['./cash-book-entry-table.component.css']
})
export class CashBookEntryTableComponent implements OnInit {

  cashBook: CashBook;
  cashBookEntries: CashBookEntry[];

  // Table Fields
  dataSource: MatTableDataSource<CashBookEntry>;
  displayedColumns: string[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private cashBookEntryService: CashBookEntryService,
    private cashBookService: CashBookService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const cashBookId = +this.route.snapshot.paramMap.get('id');
    this.getCashBook(cashBookId);
    this.getAllCashBookEntries(cashBookId);
    this.displayedColumns = ['number', 'value-date', 'purpose'];
  }

  getCashBook(cashBookId: number): void {
    this.cashBookService.getById(cashBookId).subscribe(
      data => this.cashBook = data,
      error => console.log(error),
    );
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
