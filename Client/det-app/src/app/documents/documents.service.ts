import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { TderaDocument } from "./document";

@Injectable()
export class DocumentsService {
  constructor(private http: HttpClient) { }

  async getDocuments() {
    return this.http.get<TderaDocument[]>(`${environment.apiEndpoint}/api/v1/documents`);
  }
}
