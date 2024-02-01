import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    SharedModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
