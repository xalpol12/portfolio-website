import {Component, Input} from '@angular/core';
import {ProjectCardEntry} from "../../../models/project-card-entry";
import {TechStackFormatPipe} from "../../../../../shared/pipes/tech-stack-format.pipe";

@Component({
  selector: 'app-project-card',
  template: `
    <div class="card" (mouseenter)="hovered = true" (mouseleave)="hovered = false">
      <div class="card-title d-flex justify-content-between align-items-center">
        <div class="title" [class.hovered]="hovered">
          {{projectData?.title}}
        </div>
        <div class="links d-flex flex-row">
          <a *ngIf="projectData?.ytLink" href="{{projectData?.ytLink}}" target="_blank">
            <app-icon [iconName]="'yt-link'"></app-icon>
          </a>
          <a *ngIf="projectData?.outsideLink" href="{{projectData?.outsideLink}}" target="_blank" >
            <app-icon [iconName]="'external-link'"></app-icon>
          </a>
          <a *ngIf="projectData?.ghLink" href="{{projectData?.ghLink}}" target="_blank">
            <app-icon [iconName]="'github'"></app-icon>
          </a>
        </div>
      </div>
      <div class="tech-stack" *ngIf="projectData?.techStack">
        {{projectData?.techStack! | techStackFormat }}
      </div>
      <div class="card-body">
        <p *ngIf="!flipped">
          {{projectData?.frontDescription}}
        </p>
        <p *ngIf="flipped">
          {{projectData?.backDescription}}
        </p>
      </div>
      <div class="card-footer d-flex justify-content-center">
        <button class="btn d-flex justify-content-center" (click)="flipCard()">
          <p *ngIf="!flipped">
            > Learn more <
          </p>
          <p *ngIf="flipped">
            < Go back >
          </p>
        </button>
      </div>
    </div>
  `,
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
