import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ShowOfferInterface } from '../interface/show-offer'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  offers: ShowOfferInterface[] = [];
  constructor(private dashboardService: DashboardService) { }
  ngOnInit(): void {
    this.dashboardService.showOffer().subscribe(data => {
      data.forEach(elm => {
        console.log(elm);
        this.offers.push(elm)
      })
    })
  }
}