import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component'

import { AppDesktopComponent } from './app.component.desktop'

import { AppLinkComponent } from './app.component.link'

const routes: RouterConfig = [
  { path: '', component: AppDesktopComponent },
  { path: 'target', component: AppLinkComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
