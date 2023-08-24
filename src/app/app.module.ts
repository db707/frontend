import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';
import { ViewSeekerComponent } from './view-seeker/view-seeker.component';

import { DashboardService } from './dashboard/dashboard.service';
import { ViewOfferService } from './view-offer/view-offer.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddOfferComponent,
    ViewOfferComponent,
    ViewSeekerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [DashboardService, ViewOfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
