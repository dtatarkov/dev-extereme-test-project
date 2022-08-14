import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { TderaDocument } from "./document";
import { TderaDocumentDetails } from "./documentDetails";

@Injectable()
export class DocumentsService {
  constructor(private http: HttpClient) { }

  getDocuments() {
    return this.http.get<TderaDocument[]>(`${environment.apiEndpoint}/api/v1/documents`);
  }

  getDocumentDetails(id: number) {
    return this.http.get<TderaDocumentDetails>(`${environment.apiEndpoint}/api/v1/documents/${id}`);
  }
}
