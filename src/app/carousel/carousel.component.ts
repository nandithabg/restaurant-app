import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input('restaurants') restaurants:any;
 
  arrOfArr:any=[[]];

  
  constructor() { }

  
  ngOnInit() {
  }

  ngOnChanges(){
    //this.resto = this.filterItems(this.restaurants);
    this.arrOfArr = this.chunk(this.restaurants,4);
   }

  
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
   

}
