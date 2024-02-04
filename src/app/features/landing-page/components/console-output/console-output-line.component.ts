import {Component, Input} from '@angular/core';
import {ConsoleOutputLine} from "@app/landing-page/models/console-output-line";

@Component({
  selector: 'app-console-output-line',
  template: '<p>{{consoleLine?.content}}</p>',
  styles: ``,
})
export class ConsoleOutputLineComponent {
  @Input() consoleLine: ConsoleOutputLine | undefined;
}
