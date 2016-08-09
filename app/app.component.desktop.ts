import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
  selector: 'desktop',
  template: `
  <h1>Desktop</h1>
  <h1>Angular2 + Semantic-UI Playground</h1>
  <a routerLink="/link" routerLinkActive="active">Test router link</a>
  <router-outlet></router-outlet>
  `,
  directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class AppDesktopComponent { }
