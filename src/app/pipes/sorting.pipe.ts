import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  /**
   * @param value a bejovo adat,amelyen a szurest el fogom vegezni
   * @param sortBy   ezen mezo alapjan tortenik a rendezes
   * @param direction novekvo, vagy csokkeno sorrend legyen
   */
  transform(value: any[], sortby: string, direction: number): any[] {
   /* ha vmi nem stimmel, visszaterek az eredeti bejovo adattal,
    /*  hogy a tovabbi szurok dolgozni tudjanak vele */
    if (!Array.isArray(value) || !sortby || !direction) {
    return value;
  }

  /* ha az irany novekvo */
  if (direction === 1) {
    if (sortby==='') return value;
    else {
      return value.sort( (a, b) => {
         /* ha az irany novekvo */
        if ( a[sortby] < b[sortby] ){
          return -1;
        }
          /* ha az irany csokkeno */
        if ( a[sortby] > b[sortby] ){
          return 1;
        }
        return 0;
      });
    }
  } else {
    if (sortby==='') return value;
    else {
      return value.sort( (a, b) => {
         /* ha az irany csokkeno */
        if ( a[sortby] > b[sortby] ){
          return -1;
        }
          /* ha az irany novekvo */
        if ( a[sortby] < b[sortby] ){
          return 1;
        }
        return 0;
      });
    }
  }

}

}
