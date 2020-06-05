import { Component, OnInit, ViewChild } from '@angular/core';

import { CashBookEntry } from '../models/cashBookEntry';
import { CashBookEntryService } from '../services/cash-book-entry.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-cash-book-entry-table',
  templateUrl: './cash-book-entry-table.component.html',
  styleUrls: ['./cash-book-entry-table.component.css']
})
export class CashBookEntryTableComponent implements OnInit {

  cashBookEntries: CashBookEntry[];

  // Table Fields
  dataSource: MatTableDataSource<CashBookEntry>;
  displayedColumns: string[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private cashBookEntryService: CashBookEntryService,
  ) { }

  ngOnInit(): void {
    this.getAllCashBookEntries();
    this.displayedColumns = ['number', 'value-date', 'purpose'];
  }

  getAllCashBookEntries(): void {
    this.cashBookEntryService.getAll().subscribe(
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
