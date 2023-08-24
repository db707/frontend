import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';
import { ViewSeekerComponent } from './view-seeker/view-seeker.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: AddOfferComponent },
  { path: 'jobs/:id', component: ViewOfferComponent },
  { path: 'seekers/:id', component: ViewSeekerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
