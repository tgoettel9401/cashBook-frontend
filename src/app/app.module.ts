import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { CashBookEntryTableComponent } from './cash-book-entry-table/cash-book-entry-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {LayoutModule} from '@angular/cdk/layout';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Angular Material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';

// Internal imports
import { CashBookListComponent } from './cash-book-list/cash-book-list.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CashBookDetailsComponent } from './cash-book-details/cash-book-details.component';
import { CashBookEntryBudgetTableComponent } from './cash-book-entry-budget-table/cash-book-entry-budget-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CashBookEntryTableComponent,
    CashBookListComponent,
    UploadFileComponent,
    CashBookDetailsComponent,
    CashBookEntryBudgetTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
