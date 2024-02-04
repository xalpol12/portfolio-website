import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {IconComponent} from "./components/icon/icon.component";
import {CliArgumentFormatPipe} from "./pipes/cli-argument-format.pipe";
import {SectionHeaderComponent} from "./components/section-header/section-header.component";



@NgModule({
  declarations: [
    IconComponent,
    SectionHeaderComponent,
    CliArgumentFormatPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IconComponent,
    SectionHeaderComponent,
    CliArgumentFormatPipe
  ]
})
export class SharedModule { }
