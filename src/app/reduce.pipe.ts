import {Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'reduce'

})

export class ReducePipe implements PipeTransform{
    transform(value:string, args?:any){
        if(value.length<20) {
            return value;
        }

        else
          return value.substring(0,19) + '...';


    }
}