import { Component } from '@angular/core';
import {ProjectCardEntry, projects} from "../../models/project-card-entry";

@Component({
  selector: 'app-card-grid',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3 project-card" *ngFor="let project of projectEntries">
          <app-project-card [projectData]="project"></app-project-card>
        </div>
      </div>
    </div>
  `,
  styleUrl: './card-grid.component.scss'
})
export class CardGridComponent {
  projectEntries: ProjectCardEntry[] = projects;
}
