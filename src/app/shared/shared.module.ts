import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {IconComponent} from "./components/icon/icon.component";
import {CliArgumentFormatPipe} from "./pipes/cli-argument-format.pipe";



@NgModule({
  declarations: [IconComponent, CliArgumentFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, FormsModule, IconComponent, CliArgumentFormatPipe]
})
export class SharedModule { }
