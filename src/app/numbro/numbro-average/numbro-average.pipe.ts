import { Pipe, PipeTransform } from '@angular/core';
import numbro from 'numbro';

@Pipe({
  name: 'numbroAverage'
})
export class NumbroAveragePipe implements PipeTransform {
  
  /**
   * numbro provides an easy mechanism to round up any number with the key average.
   *                    Note that the abbreviation is language-specific. 
   * @param value would be converted to string
   * @link https://numbrojs.com/format.html#average
   */
  transform(value: number, mantissa: number = 0, spaceSeparated: boolean = false): string {
    if (typeof value !== 'number') {
      throw new Error('Value is not a number.');
    }
    return numbro(value).format({ 
      average: true,
      mantissa: mantissa,
      spaceSeparated: spaceSeparated,
     });
  }
}
