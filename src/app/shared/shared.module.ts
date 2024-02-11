import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {IconComponent} from "./components/icon/icon.component";
import {CliArgumentFormatPipe} from "./pipes/cli-argument-format.pipe";
import {SectionHeaderComponent} from "./components/section-header/section-header.component";
import {FramedImageComponent} from "./components/framed-image/framed-image.component";
import {TechStackFormatPipe} from "./pipes/tech-stack-format.pipe";



@NgModule({
  declarations: [
    IconComponent,
    SectionHeaderComponent,
    CliArgumentFormatPipe,
    TechStackFormatPipe,
    FramedImageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IconComponent,
    SectionHeaderComponent,
    CliArgumentFormatPipe,
    FramedImageComponent,
    TechStackFormatPipe
  ]
})
export class SharedModule { }
