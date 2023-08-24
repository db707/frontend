import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import{  ShowOfferInterface } from '../interface/show-offer'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = 'http://localhost:3000/offer'; // URL deines Backends

  constructor(private http: HttpClient) { }

  showOffer(): Observable<ShowOfferInterface[]> { // Ersetze "any" durch das korrekte Interface für deine Daten
    return this.http.get<ShowOfferInterface[]>(this.baseUrl); // Ersetze "any" durch das korrekte Interface für deine Daten
  }
}
