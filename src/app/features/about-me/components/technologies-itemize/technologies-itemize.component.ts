import {Component} from '@angular/core';

@Component({
  selector: 'app-technologies-itemize',
  template: `
    <div class="tech-stack-container">
      <ul class="itemize" id="tech-stack-first-col">
        <li>Java with Spring Boot</li>
        <ul>
          <li>Spring Web</li>
          <li>Spring Data JPA</li>
          <li>JUnit + Mockito</li>
        </ul>
      </ul>
      <ul class="itemize" id="tech-stack-second-col">
        <li>Typescript with Angular</li>
        <li>C# with Unity</li>
        <li>Docker</li>
      </ul>
    </div>
  `,
  styleUrl: './technologies-itemize.component.scss'
})
export class TechnologiesItemizeComponent {
}
