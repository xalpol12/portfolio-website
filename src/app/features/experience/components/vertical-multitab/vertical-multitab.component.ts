import { Component } from '@angular/core';
import {experience, ExperienceEntryModel} from "../../models/experience-entry.model";

@Component({
  selector: 'app-vertical-multitab',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a *ngFor="let entry of experienceEntries; let i = index"
               class="nav-link btn"
               [class.active]="i === activeTab"
               [class.selected]="i === activeTab"
               [id]="'v-pills-tab-' + i" (click)="activeTab = i" role="tab"
               [attr.aria-controls]="'v-pills-content-' + i"
               [attr.aria-selected]="i === activeTab">
              {{ entry.tabTitle }}
            </a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content" id="v-pills-tabContent">
            <div *ngFor="let entry of experienceEntries; let i = index"
                 [class.show]="i === activeTab"
                 [class.active]="i === activeTab" class="tab-pane fade"
                 [id]="'v-pills-content-' + i" role="tabpanel"
                 [attr.aria-labelledby]="'v-pills-tab-' + i">
              <app-tab-pane [experience]="entry"></app-tab-pane>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './vertical-multitab.component.scss'
})
export class VerticalMultitabComponent {
  experienceEntries: ExperienceEntryModel[] = experience;
  activeTab: number = 0;
}

