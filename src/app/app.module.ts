import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {NavbarComponent} from "./core/components/navbar/navbar.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {LandingPageModule} from '@app/landing-page/landing-page.module';
import {AboutMeModule} from "./features/about-me/about-me.module";
import {ExperienceModule} from "./features/experience/experience.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        NavbarComponent,
        NgbModule,
        SharedModule,
        LandingPageModule,
        AboutMeModule,
        ExperienceModule,
    ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
