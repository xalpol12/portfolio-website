import { Component } from '@angular/core';
import {ConsoleOutputLineComponent} from "@app/landing-page/components/console-output/console-output-line.component";
import {ConsoleOutputLine} from "@app/landing-page/models/console-output-line";

@Component({
  selector: 'app-console-output',
  templateUrl: './console-output.component.html',
  styleUrl: './console-output.component.scss',
})
export class ConsoleOutputComponent {
  protected readonly consoleLogo = consoleLogo;
  protected readonly outputLines = outputLines;
}

export const consoleLogo: string = `____                 _     _   ____  _                 _                  _      _    _
 |  _ \\  __ ___      _(_) __| | / ___|| |_ __ ___      _(_)___ _____   _ _ /_/ ___| | _(_)
 | | | |/ _\` \\ \\ /\\ / / |/ _\` | \\___ \\| __/ _\` \\ \\ /\\ / / / __|_  / | | | '_ \\/ __| |/ / |
 | |_| | (_| |\\ V  V /| | (_| |  ___) | || (_| |\\ V  V /| \\__ \\/ /| |_| | | | \\__ \\   <| |
 |____/ \\__,_| \\_/\\_/ |_|\\__,_| |____/ \\__\\__,_| \\_/\\_/ |_|___/___|\\__, |_| |_|___/_|\\_\\_|
                                                                   |___/
==========================================================================================
::Dawid Stawiszyński::                                                           (xalpol12)`;

export const outputLines: ConsoleOutputLine[] = [
  {
    content: `2023-12-30T22:29:33.086Z  INFO 1 --- [           main] c.x.m.PersonalWebsiteApplication         : Starting PersonalWebsiteApplication v0.0.1-SNAPSHOT using Java 17.0.9 with PID 1 (/app/BOOT-INF/classes started by root in /app)`
  },
  {
    content: `2023-12-30T22:29:33.088Z DEBUG 1 --- [           main] c.x.m.PersonalWebsiteApplication         : Running with Spring Boot v3.2.0, Spring v6.1.1`
  }
]
