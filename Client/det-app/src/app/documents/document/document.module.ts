import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';
import { DocumentsService } from '../documents.service';
import { DocumentComponent } from './document.component';

const routes: Routes = [
  { path: '', component: DocumentComponent }
]

@NgModule({
  declarations: [
    DocumentComponent
  ],

  imports: [
    CommonModule,
    DxDataGridModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],

  providers: [DocumentsService],
  bootstrap: [DocumentComponent]
})
export class DocumentModule { }
