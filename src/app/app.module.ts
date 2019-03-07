import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './routes/home/home.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { VideosComponent } from './routes/videos/videos.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassesComponent } from './routes/virtualclasses/virtualclasses.component';
import { CourseComponent } from './routes/home/course/course.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { DiscountpricePipe } from './pipes/discountprice.pipe';
import { FiltercoursePipe } from './pipes/filtercourse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    ReviewsComponent,
    OfficesComponent,
    VideosComponent,
    OffersComponent,
    VirtualclassesComponent,
    CourseComponent,
    DiscountPipe,
    DiscountpricePipe,
    FiltercoursePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }


