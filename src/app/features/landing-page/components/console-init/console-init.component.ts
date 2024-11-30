import {Component, OnInit} from '@angular/core';
import {initCommand} from "@app/landing-page/models/console-input";

@Component({
  selector: 'app-console-init',
  template: `
    <div class="terminal-line">
      <span class="terminal-username">root&#64;xalpol12</span>
      <span>:</span>
      <span class="terminal-separator">~</span>
      <span>$ </span>
      <div>
    <span class="typewriter">
      <p>{{commandString}}</p>
    </span>
      </div>
    </div>
  `,
  styleUrl: './console-init.component.scss',
})
export class ConsoleInitComponent implements OnInit {
  CHARACTER_PER_SECOND_TYPING_SPEED = 6.5; // typing about 400 characters per minute, about 6.5 per second.
  commandString: string | undefined; //TODO: figure out a way to insert those values into animation css declaration
  duration: number | undefined;

  ngOnInit(): void {
    this.initCommandString();
    this.calculateDuration();
  }

  initCommandString() {
    const switchesString = initCommand.switches.length > 0
      ? initCommand.switches.join(' ')
      : ' ';
    this.commandString = `${initCommand.command} ${switchesString} ${initCommand.argument}`;
  }

  calculateDuration() {
    if (this.commandString) {
      this.duration = this.commandString.length / this.CHARACTER_PER_SECOND_TYPING_SPEED
    }
  }
}

