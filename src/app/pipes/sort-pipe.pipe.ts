import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

   transform(array: Array<any>, args: string): Array<any> {
     if(array != null){
      return array.sort((a: any, b: any) => {       
        if (a[args] < b[args]) {
          return -1;
        } else if (a[args] > b[args]) {
          return 1;
        } else {
          return 0;
        }  
     });

     }
     
   }

  
}
