import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
    <div class="landing-page">
      <app-animation-page></app-animation-page>
      <app-introduction-page></app-introduction-page>
    </div>
  `,
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
}
