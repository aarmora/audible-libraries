import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { MaterialModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BookComponent } from './components';
import { AppComponent } from './app.component';

import { FilterPipe, SortPipe } from './pipes'

import { BookService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
