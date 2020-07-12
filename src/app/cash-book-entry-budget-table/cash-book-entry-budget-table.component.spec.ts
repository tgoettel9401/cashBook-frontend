import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBookEntryBudgetTableComponent } from './cash-book-entry-budget-table.component';

describe('CashBookEntryBudgetTableComponent', () => {
  let component: CashBookEntryBudgetTableComponent;
  let fixture: ComponentFixture<CashBookEntryBudgetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBookEntryBudgetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBookEntryBudgetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
