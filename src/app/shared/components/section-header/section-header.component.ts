import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <div class="section-header">
      <span class="section-title" *ngIf="sectionTitle">{{ sectionTitle | cliArgumentFormat }}</span>
    </div>
  `,
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  @Input() sectionTitle: string | undefined;
}
