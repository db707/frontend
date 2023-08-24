import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AddOfferInterface } from '../interface/add-offer';

@Injectable({
  providedIn: 'root'
})
export class AddOfferService {

  private url = 'http://localhost:3000/offer'; // URL of your backend

  constructor(private http: HttpClient) { }

  createOffer(offerData: AddOfferInterface): Observable<AddOfferInterface> {
    return this.http.post<AddOfferInterface>(this.url, offerData);
  }

}