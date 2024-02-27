import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  @Input() sectionTitle: string | undefined;
  @Input() topMarginValue: string = '100px'; // defaults to 100px
}
