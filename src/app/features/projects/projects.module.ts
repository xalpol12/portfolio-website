import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from "./projects.component";
import {SharedModule} from "../../shared/shared.module";
import {CardGridComponent} from "./components/card-grid/card-grid.component";
import {CardGridPageComponent} from "./pages/card-grid-page/card-grid-page.component";
import {ProjectCardComponent} from "./components/card-grid/project-card/project-card.component";



@NgModule({
  declarations: [
    ProjectCardComponent,
    CardGridComponent,
    CardGridPageComponent,
    ProjectsComponent,
  ],
  exports: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectsModule { }
