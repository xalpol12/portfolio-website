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
  isFlipped: boolean = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
