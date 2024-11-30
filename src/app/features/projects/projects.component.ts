import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <app-section-header [sectionTitle]="'projects'"></app-section-header>
    <app-card-grid-page></app-card-grid-page>
  `,
})
export class ProjectsComponent {

}
