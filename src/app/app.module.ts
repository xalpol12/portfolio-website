import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";
import {NavbarComponent} from "./core/components/navbar/navbar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SectionHeaderComponent} from "./core/components/section-header/section-header.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        NavbarComponent,
        NgbModule,
        SectionHeaderComponent,
    ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
