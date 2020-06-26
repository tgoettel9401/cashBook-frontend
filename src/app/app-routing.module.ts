import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CashBookEntryTableComponent } from './cash-book-entry-table/cash-book-entry-table.component';
import { CashBookListComponent } from './cash-book-list/cash-book-list.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
const routes: Routes = [
  { path: '', redirectTo: 'cashBooks', pathMatch: 'full' },
  { path: 'cashBooks', component: CashBookListComponent},
  { path: 'cashBooks/:id', component: CashBookEntryTableComponent },
  { path: 'fileUpload', component: UploadFileComponent},
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
