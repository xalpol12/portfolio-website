import {Component, Input} from '@angular/core';
import {ExperienceEntryModel} from "../../../models/experience-entry.model";

@Component({
  selector: 'app-tab-pane',
  template: `
    <h3>
      {{experience?.fullTitle}} &#64;
      <a href="{{experience?.companyLink}}" target="_blank">
        {{experience?.companyName}}
      </a>
    </h3>
    <p class="start-end-date">
      {{experience?.startDate}} - {{experience?.endDate?? 'currently'}}
    </p>
    <ul *ngFor="let paragraph of experience?.description">
      <li>{{paragraph}}</li>
    </ul>
  `,
  styleUrl: './tab-pane.component.scss'
})
export class TabPaneComponent {
  @Input() experience: ExperienceEntryModel | undefined;
}
