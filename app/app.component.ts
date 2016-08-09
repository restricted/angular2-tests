import {Component, NgZone} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AppDesktopComponent} from "./app.component.desktop";
import {AppLinkComponent} from "./app.component.link";
import {SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES} from "ng-semantic";
import "jquery";
import "semantic";

// Main component - container for loading app
@Component({
    selector: 'app',
    template: `<sm-segment><sm-loader class="inverted" text="Loading..." [complete]="isCompleted"></sm-loader><router-outlet></router-outlet></sm-segment>`,
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES],
    precompile: [AppComponent, AppDesktopComponent, AppLinkComponent]
})

export class AppComponent {

    isCompleted: boolean;

    // Determine app loading is completed or not (remove loading message)
    constructor(private ngZone: NgZone) {
        this.ngZone.run(() => {
            setTimeout(() => {
                this.setCompleted(true);
            }, 500);
        });
    }

    // Angular2 Style Guide: Style 01-02 (small functions)
    // https://angular.io/styleguide#!#01-02
    private setCompleted(data: boolean) {
        this.isCompleted = data;
    }

}
