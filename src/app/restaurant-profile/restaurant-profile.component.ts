import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.css']
})
export class RestaurantProfileComponent implements OnInit {

  detail:any;
  rating:number;
  food:any;
  menu:any=[]
  bar:any=[]
  
  zoom:number;
  

  constructor(private route:ActivatedRoute, private service:RestaurantService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
     let id = +params.get('id');
     console.log(id);
     this.Detail(id);
    });

    this.service.getMenu()
    .subscribe(response =>{
      this.food=response;
      this.menu=this.food.menu;
      this.bar=this.food.Bar;
     
      
      console.log(this.menu);
    });
    
  }

  Detail(id:number){
   
    this.service.getDetail(id)
    .subscribe(result=>{
      this.detail = result ;
      console.log(this.detail);
    });


  }
  
  checked(){
    this.rating = Math.round((this.detail[0].reviews.reduce(((acc, reviewObj) => acc + reviewObj.rating ), 0))/3);
    let arr = [];
    let check:boolean;
    
    for(let i=0;i<5;i++){
      if(i<this.rating){
         check = true;
        }
        else{ check = false;}
        arr.push(check);
      }
      return arr;
    }



  

}
