import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, of } from "rxjs";
import { EffectsContainer } from "src/app/shared/effectsContainer";
import { TderaDocument } from "../document";
import { DocumentsService } from "../documents.service";

enum DocumentsListComponentView {
  none = 0,
  documents = 1,
  message = 2
}

@Component({
  selector: 'app-documents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DocumentsListComponent {
  private view = DocumentsListComponentView.none;
  private effects = new EffectsContainer();
  private isLoadingDocuments = false;

  documents = new Array<TderaDocument>();

  get areDocumentsShown() {
    return this.view == DocumentsListComponentView.documents
  }

  get isMessageShown() {
    return this.view == DocumentsListComponentView.message
  }

  get isReady() {
    return !this.isLoadingDocuments;
  }

  constructor(
    private documentsService: DocumentsService,
    private router: Router
  ) { }

  onCellDbClick(event: Event) {
    const document: TderaDocument = (<any>event).data;
    this.navigateToDocument(document.id_record);
  }  

  loadDocuments() {
    if (!this.isLoadingDocuments) {
      this.effects.registerFactory(() => {
        this.isLoadingDocuments = true;

        const subscription = this.documentsService.getDocuments()
          .pipe(catchError(() => of(undefined)))
          .subscribe(documents => {
            if (documents != undefined) {
              this.documents = documents;
              this.view = DocumentsListComponentView.documents;
            } else {
              this.view = DocumentsListComponentView.message;
            }
            
            this.isLoadingDocuments = false;
            subscription.unsubscribe();
          });

        return { dispose: () => subscription.unsubscribe() };
      });
    }
  }

  ngOnInit() {
    this.loadDocuments();
  }

  ngOnDestroy() {
    this.effects.dispose();
  }

  private navigateToDocument(id: number) {
    this.router.navigate(['/', 'documents', id]);
  }
}
