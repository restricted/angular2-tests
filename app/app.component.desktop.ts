import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES} from "ng-semantic";

// Desktop, home page
@Component({
    selector: 'desktop',
    template: `
  <h1><i class='icon home'></i> Angular2 + Semantic-UI Playground</h1>
  <a routerLink="/target" routerLinkActive="active">Test router link</a>
  <router-outlet></router-outlet>
  `,
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class AppDesktopComponent {
}
