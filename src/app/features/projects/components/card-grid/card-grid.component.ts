import { Component } from '@angular/core';
import {ProjectCardEntry, projects} from "../../models/project-card-entry";

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss'
})
export class CardGridComponent {
  projectEntries: ProjectCardEntry[] = projects;
}
