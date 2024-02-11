import {Pipe, PipeTransform} from '@angular/core';

/**
 * formats passed arrays as a single string
 * that starts with open parenthesis, contains
 * all strings from an array, each separated by
 * a comma, ends with close parenthesis
 */
@Pipe({
  name: 'techStackFormat',
})
export class TechStackFormatPipe implements PipeTransform {

  transform(values: string[]): unknown {
    return `(${values.join(', ')})`;
  }
}
