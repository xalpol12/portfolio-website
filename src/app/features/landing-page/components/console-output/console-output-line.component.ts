import {Component, Input} from '@angular/core';
import {ConsoleOutputLine} from "@app/landing-page/models/console-output-line";

@Component({
  selector: 'app-console-output-line',
  template: '<p>{{consoleLine}}</p>',
  styles: `
  p {
    margin-bottom: 0px;
  }
  `,
})
export class ConsoleOutputLineComponent {
  @Input() consoleLine: string | undefined;
}
