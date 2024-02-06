import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cliArgumentFormat',
})
/**
 * formats passed space-separated string sentence
 * in style of command line argument, appending
 * "--" double dash symbol at the beginning
 * and joining each sentence by "-" symbol
 */
export class CliArgumentFormatPipe implements PipeTransform {

  transform(value: string): string {
    let words = value.toLowerCase().split(" ");
    let formattedValue = "--";
    formattedValue += words.at(0);
    if (words.length > 1) {
      for (let i = 1; i < words.length; i++) {
        formattedValue += `-${words.at(i)}`;
      }
    }
    return formattedValue;
  }
}
