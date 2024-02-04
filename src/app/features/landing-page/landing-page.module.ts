import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from "@app/landing-page/landing-page.component";
import {ConsoleInitComponent} from "@app/landing-page/components/console-init/console-init.component";
import {AnimationPageComponent} from "@app/landing-page/pages/animation-page/animation-page.component";
import {ConsoleOutputComponent} from "@app/landing-page/components/console-output/console-output.component";
import {ConsoleOutputLineComponent} from "@app/landing-page/components/console-output/console-output-line.component";



@NgModule({
  declarations: [
    LandingPageComponent,
    ConsoleInitComponent,
    ConsoleOutputComponent,
    ConsoleOutputLineComponent,
    AnimationPageComponent,
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
