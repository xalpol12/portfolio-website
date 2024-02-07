import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutMeComponent} from "./about-me.component";
import {SharedModule} from "../../shared/shared.module";
import {TechnologiesItemizeComponent} from "./components/technologies-itemize/technologies-itemize.component";



@NgModule({
  declarations: [
    TechnologiesItemizeComponent,
    AboutMeComponent,
  ],
  exports: [
    AboutMeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutMeModule { }
