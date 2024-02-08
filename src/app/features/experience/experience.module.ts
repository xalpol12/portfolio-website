import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExperienceComponent} from "./experience.component";
import {VerticalMultitabComponent} from "./components/vertical-multitab/vertical-multitab.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    VerticalMultitabComponent,
    ExperienceComponent
  ],
  exports: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ExperienceModule { }
