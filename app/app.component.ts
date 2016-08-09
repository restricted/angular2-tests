import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppDesktopComponent } from './app.component.desktop'

import { AppLinkComponent } from './app.component.link'

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

import 'jquery';
import 'semantic';

@Component({
  selector: 'app',
  template: `<sm-segment><router-outlet></router-outlet></sm-segment>`,
  directives: [ROUTER_DIRECTIVES, SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
  precompile: [AppComponent, AppDesktopComponent, AppLinkComponent]
})

export class AppComponent { }
