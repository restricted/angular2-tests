import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
  template: `
  <h1>Test router link</h1>
  <a routerLink="/" routerLinkActive="active">Back to home</a>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppLinkComponent { }
