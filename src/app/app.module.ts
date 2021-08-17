import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantService } from './services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { ReducePipe } from './reduce.pipe';
import { RestaurantProfileComponent } from './restaurant-profile/restaurant-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaceComponent } from './place/place.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    CardComponent,
    ReducePipe,
    RestaurantProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component:HomeComponent },
      { path:'place/:city', component:PlaceComponent },
      { path:'profile/:id', component:RestaurantProfileComponent },
      { path:'**', component:NotFoundComponent}
    ])
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
