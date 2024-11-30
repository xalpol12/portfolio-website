import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <span class="icon-container" (mouseenter)="isHovered = true" (mouseleave)="isHovered = false">
  <svg class="custom-icon"
       [style.mask]="'url(./assets/icons/' + iconName + '.svg)'"
       [style.background]="isHovered ? onHoverIconColor : iconColor">
  </svg>
</span>
  `,
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() iconName: string | undefined;
  @Input() iconColor: string = "var(--text)";
  @Input() onHoverIconColor: string = "var(--accent)";
  isHovered = false;
}
