import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})

export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number , currencySymbol: string, sourceSymbol?: string): any  {
    if( value && !isNaN(value) ) {
      switch (currencySymbol) {
        case '$':
            const amountInGel =  value / 3.29;
          return amountInGel.toFixed(2) + '$';
          case '₾':
            if(sourceSymbol === '€') {
              const amountInEur =  value * 4.1;
              return amountInEur.toFixed(2) + '₾';
            } else {
              const amountInUsd =  value * 3.29;
              return amountInUsd.toFixed(2) + '₾';
            }
          case '€':
            const amountInEur =  value / 4.1;
          return amountInEur.toFixed(2) + '€';
      }
    }

  }

}
