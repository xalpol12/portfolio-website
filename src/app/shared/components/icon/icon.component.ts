import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() iconName: string | undefined;
  @Input() iconColor: string = "var(--text)";
  @Input() onHoverIconColor: string = "var(--accent)";
  isHovered = false;
}
