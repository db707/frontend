import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddOfferInterface } from '../interface/add-offer';
import { AddOfferService } from './add-offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent {
  //offerData: AddOfferInterface[] = [];

  constructor(private router: Router, private offerService: AddOfferService) { };

  //Input Felder über FromGroup Modul als Objekt speichern und zum Backend senden
  public addofferform: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    jobdescription: new FormControl('', [Validators.required]),
    skilldescription: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    //date: new FormControl(new Date().toISOString().split('T')[0]) DATE
  })

  submitOffer() {
    if (this.addofferform.valid) {
      const offerData: AddOfferInterface = this.addofferform.value;
      this.offerService.createOffer(offerData).subscribe(response => {
        this.router.navigate(['/'])
          .then(() => {
            window.location.reload();
          });
      });

    }
  }
}