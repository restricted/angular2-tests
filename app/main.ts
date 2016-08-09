import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppComponent} from "./app.component";
import {appRouterProviders} from "./app.routes";

enableProdMode();

bootstrap(AppComponent, [
    appRouterProviders
]).catch(err => console.error(err));
