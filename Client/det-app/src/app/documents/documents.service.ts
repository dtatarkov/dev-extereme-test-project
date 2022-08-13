import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DocumentsService {
  constructor(private http: HttpClient) { }

  async getDocuments() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('username:password')
      })
    };

    return this.http.get(`http://api-test.tdera.ru/api/getdocumentlist`, {
      headers: {
        'auth': 'basic '
      }
    })
  }
}
