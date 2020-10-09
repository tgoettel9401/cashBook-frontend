import { Component, OnInit } from '@angular/core';
import { CashBookService } from '../services/cash-book.service';
import { ActivatedRoute } from '@angular/router';
import { CashBook } from '../models/cashBook';

@Component({
  selector: 'app-cash-book-details',
  templateUrl: './cash-book-details.component.html',
  styleUrls: ['./cash-book-details.component.css']
})
export class CashBookDetailsComponent implements OnInit {

  edit = false;

  cashBook: CashBook;

  constructor(
    private cashBookService: CashBookService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const cashBookId = +this.route.snapshot.paramMap.get('id');
    this.getCashBook(cashBookId);
  }

  getCashBook(cashBookId: number): void {
    this.cashBookService.getById(cashBookId).subscribe(
      data => this.cashBook = data,
      error => console.log(error),
    );
  }

  clickEditButton(): void {
    this.edit = true;
  }

  clickSaveButton(cashBook: CashBook): void {
    // Save data first
    this.cashBookService.putCashBook(cashBook).subscribe(
      data => this.cashBook = data,
      error => console.log(error),
    )

    // Set edit to false.
    this.edit = false;
  }

}
