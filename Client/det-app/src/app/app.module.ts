import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { DocumentsListComponent } from './documents/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsListComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
