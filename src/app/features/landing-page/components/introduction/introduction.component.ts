import { Component } from '@angular/core';
import {SharedModule} from "../../../../shared/shared.module";
import {consoleLogo} from "@app/landing-page/models/console-output-line";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  protected readonly consoleLogo = consoleLogo;
}
