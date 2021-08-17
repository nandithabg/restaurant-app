import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Restaurants: any =[[]];
  arrOfRes:any =[];
  filterLocation:any=[];
  filterOnline:any=[];
  filterTakeout:any=[];
  filterCusine:any=[];
  city:string;



  constructor(private service:RestaurantService) {
   }

  ngOnInit() {
    this.service.getRestaurants()
    .subscribe(response =>{
      this.arrOfRes=response;
      this.filterLocation = this.arrOfRes.filter((item:any) => item.city === 'Boston');
      this.filterOnline = this.arrOfRes.filter((item:any) => item.online === true );
      this.filterTakeout = this.arrOfRes.filter((item:any) => item.takeout === true);
      this.filterCusine = this.arrOfRes.filter((item:any) => item.cuisine_type === 'American');

    });
  }

 

 
 


}
