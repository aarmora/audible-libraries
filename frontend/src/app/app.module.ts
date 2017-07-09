import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { MaterialModule } from '@angular/material';


import { BookComponent } from './components';
import { AppComponent, MyFilterPipe } from './app.component';

import { BookService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MyFilterPipe
  ],
  imports: [
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
