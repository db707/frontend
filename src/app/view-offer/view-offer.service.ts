import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ShowOfferDetailsInterface } from '../interface/show-offer';
import { ApplySeekerInterface } from '../interface/view-seeker';

@Injectable({
  providedIn: 'root'
})
export class ViewOfferService {

  private baseUrl = 'http://localhost:3000/offer';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getOfferDetails(id:number): Observable<ShowOfferDetailsInterface[]> {
    return this.http.get<ShowOfferDetailsInterface[]>(this.baseUrl+'/offerdetails/'+id);
  }

  submitApply(id:number,seekerData: ApplySeekerInterface): Observable<ApplySeekerInterface> {
    return this.http.post<ApplySeekerInterface>(this.baseUrl+'/submitapply/'+id, seekerData);
  }

}
