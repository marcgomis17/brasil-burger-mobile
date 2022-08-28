import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsProduitService {

  constructor(private http: HttpClient) { }

  getProductDetails(id: number): Observable<any> {
    return this.http.get(`${baseUrl}details/${id}`);
  }
}
