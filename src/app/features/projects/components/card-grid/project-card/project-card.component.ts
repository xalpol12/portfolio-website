import {Component, Input} from '@angular/core';
import {ProjectCardEntry} from "../../../models/project-card-entry";
import {TechStackFormatPipe} from "../../../../../shared/pipes/tech-stack-format.pipe";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() projectData: ProjectCardEntry | undefined;
  hovered: boolean = false;
  flipped: boolean = false;

  flipCard() {
    this.flipped = !this.flipped;
  }
}
