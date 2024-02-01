import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {IconComponent} from "./components/icon/icon.component";



@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, FormsModule, IconComponent]
})
export class SharedModule { }
