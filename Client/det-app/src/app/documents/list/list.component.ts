import { Component } from "@angular/core";
import { EffectsContainer } from "src/app/shared/effectsContainer";
import { TderaDocument } from "../document";
import { DocumentsService } from "../documents.service";

@Component({
  selector: 'app-documents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DocumentsListComponent {
  private effects = new EffectsContainer();

  documents = new Array<TderaDocument>();

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.effects.registerFactory(() => {
      const subscription = this.documentsService.getDocuments().subscribe(documents => {
        this.documents = documents
      });

      return { dispose: () => subscription.unsubscribe() };
    });    
  }

  ngOnDestroy() {
    this.effects.dispose();
  }
}
