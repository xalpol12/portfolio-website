import { Component } from '@angular/core';
import {consoleLogo, outputLines} from "@app/landing-page/models/console-output-line";

@Component({
  selector: 'app-console-output',
  templateUrl: './console-output.component.html',
  styleUrl: './console-output.component.scss',
})
export class ConsoleOutputComponent {
  protected readonly consoleLogo = consoleLogo;
  delayedOutput: string[] | undefined;

  simulateConsoleLog() {
    this.delayedOutput = [];
    outputLines.forEach((line, index) => {
      setTimeout(() => {
        const dateTime = new Date().toISOString();
        this.delayedOutput?.push(`${dateTime} ${line.content}`);
      }, index * 100);
    })
  }
}
