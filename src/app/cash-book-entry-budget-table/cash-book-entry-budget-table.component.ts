import { Component, OnInit, Input } from '@angular/core';
import { CashBook } from '../models/cashBook';

@Component({
  selector: 'app-cash-book-entry-budget-table',
  templateUrl: './cash-book-entry-budget-table.component.html',
  styleUrls: ['./cash-book-entry-budget-table.component.css']
})
export class CashBookEntryBudgetTableComponent implements OnInit {

  @Input() cashBook: CashBook;

  constructor() { }

  ngOnInit(): void {
  }

}
