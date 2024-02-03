import { Component } from '@angular/core';
import {ConsoleInput} from "@app/landing-page/models/console-input";

@Component({
  selector: 'app-console-init',
  templateUrl: './console-init.component.html',
  styleUrl: './console-init.component.scss'
})
export class ConsoleInitComponent {
  initCommand: ConsoleInput = {
    command: "java",
    switches: ["-jar"],
    argument: "PersonalWebsiteApplication.jar"
  }
}
