import { Pipe, PipeTransform } from '@angular/core';
import { kill } from 'process';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * @param value a bejovo adat,amelyen a szurest el fogom vegezni
   * @param key   a mezo amely alapjan  szurni fogok
   * @param kifejezes szuro kifejezes. Ennek a kifejesnek az egyezoseget vizsgalom
   */
  transform(value: any[], key: string, kifejezes: string | number | boolean): any[] {
    /* ha vmi nem stimmel, visszaterek az eredeti bejovo adattal,
    /*  hogy a tovabbi szurok dolgozni tudjanak vele */
    if( !Array.isArray(value) || !key || !kifejezes){
       return value;
    }
    /* a kifejezest -ha nem szam - akkor kisbetus string-e alakitom   */
    kifejezes = typeof kifejezes !== 'number' ? ('' + kifejezes).toLowerCase() : kifejezes  ;

/* bejarom egy szurovel a kapott elemeket */
/* ha szamot keresek az adott key-en belul es az egyezik a keresett kifejezessel
/* akkor  true-val ter vissza, tehat az elemet visszaadja majd a filter */
    return value.filter( item => {
      if(typeof item[key] === 'number' && typeof kifejezes === 'number'){
        return item[key] === kifejezes;
      }
/* amelyik mezoben keresek azt is atalakitom kisbetus string-e */
      return ('' + item[key]).toLowerCase().includes( (kifejezes as string) );
    });
  }
}
