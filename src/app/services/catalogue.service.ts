import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private catalogueurl = `${baseUrl}catalogues/1`;

  constructor(private http: HttpClient) { }

  getCatalogue() {
    return this.http.get(this.catalogueurl);
  }
}
