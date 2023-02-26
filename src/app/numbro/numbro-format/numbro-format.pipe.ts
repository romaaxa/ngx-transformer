import { Pipe, PipeTransform } from '@angular/core';
import numbro from 'numbro';
import { Negative, Output } from '../models';

@Pipe({
  name: 'numbroFormat'
})
export class NumbroFormatPipe implements PipeTransform {
  
  /**
   * Numbers can be formatted to look like currency, percentages,
   *                times, or even plain old numbers with decimal places, thousands, and abbreviations.
   * @param value would be converted to string
   * @link https://numbrojs.com/format.html#numbers
   */
  transform(
      value: number,
      thousandSeparated: boolean = false,
      mantissa: number = 0,
      optionalMantissa: boolean = false,
      trimMantissa: boolean = false,
      forceSign: boolean = false,
      negative: Negative = 'sign',
      average: boolean = false,
      spaceSeparated: boolean = false,
      output: Output = 'number',
    ): string {
    if (typeof value !== 'number') {
      throw new Error('Value is not a number.');
    }
    return numbro(value).format({
      thousandSeparated: thousandSeparated,
      mantissa: mantissa,
      optionalMantissa: optionalMantissa,
      trimMantissa: trimMantissa,
      forceSign: forceSign,
      negative: negative,
      average: average,
      spaceSeparated: spaceSeparated,
      output: output,
    });
  }
}
