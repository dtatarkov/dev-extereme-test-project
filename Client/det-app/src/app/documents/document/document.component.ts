import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { catchError, of } from "rxjs";
import { EffectsContainer } from "src/app/shared/effectsContainer";
import { TderaDocumentItem } from "../documentItem";
import { DocumentsService } from "../documents.service";

enum DocumentComponentView {
  none = 0,
  documents = 1,
  message = 2
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  private view = DocumentComponentView.none;
  private effects = new EffectsContainer();
  private isLoadingDetails = false;

  private id: number

  items = new Array<TderaDocumentItem>();
  selectedItems = new Array<TderaDocumentItem>();

  get areItemsShown() {
    return this.view == DocumentComponentView.documents
  }

  get isMessageShown() {
    return this.view == DocumentComponentView.message
  }

  get isReady() {
    return !this.isLoadingDetails;
  }
  
  constructor(
    route: ActivatedRoute,
    private documentsService: DocumentsService
  ) {
    this.id = parseInt(route.snapshot.paramMap.get('id')!, 10);
  }

  onItemAdd = (e: any) => {
    const item: TderaDocumentItem = e.itemData;
    this.items = [...this.items, item];
  }

  onItemRemove = (e: any) => {
    const targetItem: TderaDocumentItem = e.itemData;
    this.items = this.items.filter(item => item != targetItem);
  }

  onSelectedItemAdd = (e: any) => {
    const item: TderaDocumentItem = e.itemData;
    this.selectedItems = [...this.selectedItems, item];
  }

  onSelectedItemRemove = (e: any) => {
    const targetItem: TderaDocumentItem = e.itemData;
    this.selectedItems = this.selectedItems.filter(item => item != targetItem);
  }

  loadItems() {
    if (!this.isLoadingDetails) {
      this.effects.registerFactory(() => {
        this.isLoadingDetails = true;

        const subscription = this.documentsService.getDocumentDetails(this.id)
          .pipe(catchError(() => of(undefined)))
          .subscribe(details => {
            if (details != undefined) {
              this.items = details.data2;
              this.view = DocumentComponentView.documents;
            } else {
              this.view = DocumentComponentView.message;
            }

            this.isLoadingDetails = false;
            subscription.unsubscribe();
          });

        return { dispose: () => subscription.unsubscribe() };
      });
    }
  }

  ngOnInit() {
    this.loadItems();
  }

  ngOnDestroy() {
    this.effects.dispose();
  }  
}
