import {Component, OnInit} from '@angular/core';
import {ConsoleSignatureService} from "./core/services/console-signature.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="content">
      <app-landing-page id="home" class="full-page"></app-landing-page>
      <app-about-me id="about" class="full-page"></app-about-me>
      <app-experience id="experience" class="full-page"></app-experience>
      <app-projects id="projects" class="full-page"></app-projects>
    </div>
    <app-footer></app-footer>
  `,
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
