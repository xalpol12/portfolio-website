import {Component, OnInit} from '@angular/core';
import {ConsoleSignatureService} from "./core/services/console-signature.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';

  constructor(private consoleSignatureService: ConsoleSignatureService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.consoleSignatureService.logSignature();
    this.activatedRoute.fragment.subscribe(
      (val) => {
        if (val) {
          this.jumpToFragment(val);
        }
      })
  }

  jumpToFragment(fragmentName: string) {
    if (fragmentName) {
      document.getElementById(fragmentName)?.scrollIntoView({behavior: 'smooth'})
    }
  }
}
