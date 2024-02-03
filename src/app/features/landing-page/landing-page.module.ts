import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from "@app/landing-page/landing-page.component";
import {ConsoleInitComponent} from "@app/landing-page/components/console-init/console-init.component";
import {AnimationPageComponent} from "@app/landing-page/pages/animation-page/animation-page.component";



@NgModule({
  declarations: [
    LandingPageComponent,
    ConsoleInitComponent,
    AnimationPageComponent
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
