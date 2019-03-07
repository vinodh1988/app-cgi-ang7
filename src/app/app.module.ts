import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './routes/home/home.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { VideosComponent } from './routes/videos/videos.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassesComponent } from './routes/virtualclasses/virtualclasses.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    ReviewsComponent,
    OfficesComponent,
    VideosComponent,
    OffersComponent,
    VirtualclassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
