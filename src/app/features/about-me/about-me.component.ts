import {Component} from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
    <app-section-header [sectionTitle]="'about me'"></app-section-header>
    <app-about-me-description></app-about-me-description>
  `
})
export class AboutMeComponent {
}
