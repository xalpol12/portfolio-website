import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cliArgumentFormat',
})
export class CliArgumentFormatPipe implements PipeTransform {

  transform(value: string): string {
    let words = value.toLowerCase().split(" ");
    let formattedValue = "--";
    formattedValue += words.at(0);
    console.log(words.length);
    if (words.length > 1) {
      for (let i = 1; i < words.length; i++) {
        formattedValue += `-${words.at(i)}`;
      }
    }
    return formattedValue;
  }
}
