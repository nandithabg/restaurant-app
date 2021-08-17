import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('restaurant') restaurant:any;
  review:any=[];
  rating:number;

  

  constructor(private router:Router) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.review=this.restaurant.reviews;
    this.rating = Math.round((this.review.reduce(((acc, reviewObj) => acc + reviewObj.rating ), 0))/3);
   
    
    
  }

checked(){
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
