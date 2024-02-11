import { Component } from '@angular/core';
import {experience, ExperienceEntryModel} from "../../models/experience-entry.model";

@Component({
  selector: 'app-vertical-multitab',
  templateUrl: './vertical-multitab.component.html',
  styleUrl: './vertical-multitab.component.scss'
})
export class VerticalMultitabComponent {
  experienceEntries: ExperienceEntryModel[] = experience;
  activeTab: number = 0;
}

