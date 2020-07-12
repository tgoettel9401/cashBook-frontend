import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBookDetailsComponent } from './cash-book-details.component';

describe('CashBookDetailsComponent', () => {
  let component: CashBookDetailsComponent;
  let fixture: ComponentFixture<CashBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
