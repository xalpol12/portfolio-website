import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-framed-image',
  templateUrl: './framed-image.component.html',
  styleUrl: './framed-image.component.scss'
})
export class FramedImageComponent {
  @Input() imageName: string | undefined;
}
