import {Component, OnInit} from '@angular/core';
import {ConsoleSignatureService} from "./core/services/console-signature.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';

  constructor(private consoleSignatureService: ConsoleSignatureService) {
  }

  ngOnInit(): void {
    this.consoleSignatureService.logSignature();
  }
}
