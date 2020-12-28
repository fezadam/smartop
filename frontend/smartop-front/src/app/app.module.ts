import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';

import { SurgeonService } from './services/surgeon.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SurgeonTableComponent } from './components/surgeon-table/surgeon-table.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, SurgeonTableComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatFormFieldModule,
  ],
  providers: [SurgeonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
