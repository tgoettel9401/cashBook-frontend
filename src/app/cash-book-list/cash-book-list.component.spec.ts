import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBookListComponent } from './cash-book-list.component';

describe('CashBookListComponent', () => {
  let component: CashBookListComponent;
  let fixture: ComponentFixture<CashBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
