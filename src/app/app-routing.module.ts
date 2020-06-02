import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CashBookEntryTableComponent } from './cash-book-entry-table/cash-book-entry-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'cashBookEntries', pathMatch: 'full' },
  { path: 'cashBookEntries', component: CashBookEntryTableComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
