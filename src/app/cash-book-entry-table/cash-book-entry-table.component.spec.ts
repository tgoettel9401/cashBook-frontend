import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBookEntryTableComponent } from './cash-book-entry-table.component';

describe('CashBookEntryTableComponent', () => {
  let component: CashBookEntryTableComponent;
  let fixture: ComponentFixture<CashBookEntryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBookEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBookEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
