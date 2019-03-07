import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassesComponent } from './routes/virtualclasses/virtualclasses.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { VideosComponent } from './routes/videos/videos.component';

const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"reviews",component:ReviewsComponent},
   {path:"offers",component: OffersComponent},
   {path:"virtual",component: VirtualclassesComponent},
   {path:"offices",component: OfficesComponent},
   {path:"videos",component: VideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
