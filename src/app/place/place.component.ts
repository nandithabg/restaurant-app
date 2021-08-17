import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  result:any=[];
  arr:any=[];
 
  filterCity:any=[];
  cityValue:string;
 

  constructor(private route:ActivatedRoute, private service:RestaurantService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
     let city = params.get('city');
     console.log(city);
      
     //console.log(this.c);
     this.City(city);
     
    });    
  }

  searchCity(){
    this.City(this.cityValue);
    this.cityValue = '';

  }

  City(city:string){
   
    let c =city.split(" ").map((item)=>{return item[0].toUpperCase()+item.substr(1,item.length)}).join(" ");
    console.log(c);
    this.service.getRestaurants()
    .subscribe(response=>{
      this.result = response;
      this.filterCity = this.result.filter((item:any) => item.city === c);
      console.log(this.filterCity.length)
    });
   
  }

  

  

}
