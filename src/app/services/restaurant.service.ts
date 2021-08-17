import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private url = "../../assets/json/restaurants.json"

  private link="../../assets/json/menu.json"

  constructor(private httpClient: HttpClient) { }

  getRestaurants(){
    return this.httpClient.get(this.url);
  }

  getDetail(id:number){
    return this.httpClient.get(this.url)
    .pipe( map((reports:any ) => reports.filter(p => p.id === id)))
   
  }

  getMenu(){
    return this.httpClient.get(this.link);
  }
}
