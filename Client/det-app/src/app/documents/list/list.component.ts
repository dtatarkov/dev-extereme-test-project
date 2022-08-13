import { Component } from "@angular/core";

interface Document {
  id: string
}

@Component({
  selector: 'app-documents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DocumentsListComponent {
  documents = new Array<Document>();

  constructor() {

  }
}
