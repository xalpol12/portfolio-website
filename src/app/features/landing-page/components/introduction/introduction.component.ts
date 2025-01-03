import { Component } from '@angular/core';
import {SharedModule} from "../../../../shared/shared.module";
import {consoleLogo} from "@app/landing-page/models/console-output-line";

@Component({
  selector: 'app-introduction',
  template: `
    <div class="">
      <div class="intro-title">
        <pre class="output-line">{{consoleLogo}}</pre>
      </div>
      <div class="intro-desc">
        Hi, I'm an engineer from Poznań, Poland. I'm interested in backend engineering and distributed systems.
        Mainly using Java and Spring to build projects, with Angular as a frontend framework to provide visual interface for backend systems.
        I have an eye for details and inconsistencies, which has led me to contribute corrections and improvements to the Angular documentation.
        <div>
          <a href="mailto:dawidstawiszynski2@gmail.com" class="intro-contact btn btn-outline-primary">
            <div class="d-flex align-items-center">
              <app-icon [iconName]="'mail'" [iconColor]="'var(--accent)'"></app-icon>
              <span class="ms-2">Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  protected readonly consoleLogo = consoleLogo;
}
