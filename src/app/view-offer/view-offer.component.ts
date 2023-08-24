import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewOfferService } from './view-offer.service';
import { take } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApplySeekerInterface } from '../interface/view-seeker';
import { Router } from '@angular/router';
import { ShowOfferDetailsInterface } from '../interface/show-offer';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.scss']
})
export class ViewOfferComponent implements OnInit {

  offerID: number = 0;
  
  offerDetails: ShowOfferDetailsInterface = {
    offerid: 0,
    title: '',
    type: '',
    location: '',
    jobdescription: '',
    skilldescription: '',
    email: ''
  };
  //Input Felder über FromGroup Modul als Objekt speichern und zum Backend senden
  public submitApplyForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    experiencedescription: new FormControl('', [Validators.required]),
    personaldescription: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  })


  constructor(private router: Router, private route: ActivatedRoute, private viewOfferService: ViewOfferService) { }

  ngOnInit() {

    this.route.params.pipe(take(1)).subscribe(params => {
      this.offerID = params['id'];
      this.viewOfferService.getOfferDetails(this.offerID).subscribe(data => {
        this.offerDetails = data[0];
        console.log(this.offerDetails);
        // Hier kannst du weitere Verarbeitungsschritte mit den empfangenen Daten durchführen
      });
    })
  }

  submitApply() {
    if (this.submitApplyForm.valid) {
      const applyData: ApplySeekerInterface = this.submitApplyForm.value;
      this.viewOfferService.submitApply(this.offerID,applyData).subscribe(response => {
        this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
      });
    }
  }
}