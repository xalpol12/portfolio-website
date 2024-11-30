import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-description',
  template: `
    <div class="about-me-content">
      <div class="about-me-desc">
        <p>
          I am an <i>automatics and robotics</i> engineer currently undertaking a master's degree in <i>computer science</i> at
          <a href="https://www.put.poznan.pl/" target="_blank">Poznań University of Technology</a>.
          I have three years of experience in non-commercial programming.
          Here are the technologies that I am most familiar with:
        </p>
        <app-technologies-itemize></app-technologies-itemize>
        <p>
          In my free time I read, watch movies, record and listen to music.
          Well, sometimes. Currently trying to gain some devops skills
          (learning k8s, cloud deployment, monitoring, linux administration).
        </p>
      </div>
      <div>
        <app-framed-image class="ms-2" [imageName]="'me-png.png'"></app-framed-image>
      </div>
    </div>
  `,
  styleUrl: './about-me-description.component.scss'
})
export class AboutMeDescriptionComponent {
}
