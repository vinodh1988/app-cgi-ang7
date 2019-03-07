import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(target: any, optional?: any): any {
    if(target>24000)
     return "(15%)";
    else  if(target>=22000)
    return "(12%)";

    else  if(target>=20000)
    return "(10%)";

    else
    return "(5%)";
  }

}
