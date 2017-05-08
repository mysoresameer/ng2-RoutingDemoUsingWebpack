import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1 class="title">Angular Router Demo</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet></router-outlet>`,
    //styles:[require('./styles.css')],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}