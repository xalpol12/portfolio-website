import {Component, Input} from '@angular/core';
import {ExperienceEntryModel} from "../../../models/experience-entry.model";

@Component({
  selector: 'app-tab-pane',
  templateUrl: './tab-pane.component.html',
  styleUrl: './tab-pane.component.scss'
})
export class TabPaneComponent {
  @Input() experience: ExperienceEntryModel | undefined;
}
