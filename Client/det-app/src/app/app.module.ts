import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { DocumentsService } from './documents/documents.service';
import { DocumentsListComponent } from './documents/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxDataGridModule    
  ],
  providers: [DocumentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
