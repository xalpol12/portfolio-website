import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-framed-image',
  template: `
    <div class="image-container">
      <img [src]="'./assets/images/' + imageName">
    </div>
  `,
  styleUrl: './framed-image.component.scss'
})
export class FramedImageComponent {
  @Input() imageName: string | undefined;
}
