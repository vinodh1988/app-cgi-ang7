import { Pipe, PipeTransform } from '@angular/core';
import { course } from '../model/course';

@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(clist: course[], prange?: any): any {
    if(prange=='a')
     return clist.filter(x=>x.price>24000);
    else if(prange=='b')
     return clist.filter(x=>x.price>=20000&&x.price<=24000)
    else if(prange=='c')
     return clist.filter(x=>x.price<20000);
    else
     return clist;
    
  }
}
