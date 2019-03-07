import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountprice'
})
export class DiscountpricePipe implements PipeTransform {

  transform(target: number, args?: any): any {
    if(target>24000)
    return target-target*.15;
   else  if(target>=22000)
   return  target-target*.15 ;

   else  if(target>=20000)
   return  target-target*.1;

   else
   return target-target*.05;
  }

}
