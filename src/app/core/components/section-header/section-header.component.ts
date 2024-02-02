import {Component, Input} from '@angular/core';
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  @Input() sectionTitle: string | undefined;
}
