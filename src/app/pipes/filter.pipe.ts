import { Pipe, PipeTransform } from '@angular/core';
import { kill } from 'process';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], key: string, kifejezes: string | number | boolean): any[] {
    if( !Array.isArray(value) || !key || !kifejezes){
      return value;
    }

    kifejezes = typeof kifejezes !== 'number' ? ('' + kifejezes).toLowerCase() : kifejezes  ;

    return value.filter( item => {
      if(typeof item[key] === 'number' && typeof kifejezes === 'number'){
        return item[key] === kifejezes;
      }

      return ('' + item[key].toLowerCase().includes(kifejezes as string) );
    })

  }

}
