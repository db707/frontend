import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ShowSeekerInterface, ShowSeekerDetailsInterface } from '../interface/view-seeker';

@Injectable({
  providedIn: 'root'
})
export class ViewSeekerService {

  private baseUrl = 'http://localhost:3000/seekers/'

  constructor(private http: HttpClient) { }

  showSeekers(id:number): Observable<ShowSeekerInterface[]> {
    return this.http.get<ShowSeekerInterface[]>(this.baseUrl+id);
  }
  
  showSeekerDetails(id:number): Observable<ShowSeekerDetailsInterface[]> {
    return this.http.get<ShowSeekerDetailsInterface[]>(this.baseUrl+'seekerdetails/'+id);
  }
}
