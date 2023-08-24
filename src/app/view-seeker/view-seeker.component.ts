import { Component, OnInit } from '@angular/core';
import { ShowSeekerDetailsInterface, ShowSeekerInterface } from '../interface/view-seeker';
import { ViewSeekerService } from './view-seeker.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-view-seeker',
  templateUrl: './view-seeker.component.html',
  styleUrls: ['./view-seeker.component.scss']
})
export class ViewSeekerComponent implements OnInit {
  seekers: ShowSeekerInterface [] = [];
  seekerDetails: ShowSeekerDetailsInterface = {
    seekerid: 0,
    applyid: 0,
    personaldescription: '',
    experiencedescription: '',
    email: '',
    firstname: '',
    lastname: ''
  };

  offerID: number = 0;

  constructor(private route: ActivatedRoute, private viewSeekerService: ViewSeekerService) { }
  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(params => {
      this.offerID = params['id'];
      this.viewSeekerService.showSeekers(this.offerID).subscribe(data => {
        this.seekers = data
      })
    })
  }

  showSeekerDetails(id: number) {
    this.viewSeekerService.showSeekerDetails(id).subscribe(data => {
        this.seekerDetails = data[0];
    })
  }
}

