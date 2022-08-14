import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';
import { DocumentsService } from '../documents.service';

import { DocumentsListComponent } from './list.component';

const routes: Routes = [
  { path: '', component: DocumentsListComponent }
];

@NgModule({
  declarations: [
    DocumentsListComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [DocumentsService],
  bootstrap: [DocumentsListComponent]
})
export class DocumentsListModule { }
