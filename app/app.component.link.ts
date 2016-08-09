import { Input, Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

/**
  Test page with back button to home page
  Includes semantic-ui accordion and button directives (ng-semantic)
*/
@Component({
  template: `
  <h1>Test router link</h1>
  <sm-button routerLink="/" class="primary" icon="home">Back to home</sm-button>
  <br/>
  <br/>
  <div class="ui container">
  <h2>Fluid accordion</h2>
    <sm-accordion class="fluid styled">
      <sm-accordion-item>
          <accordion-title>What is a dog?</accordion-title>
          <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</accordion-content>
      </sm-accordion-item>
      <sm-accordion-item>
          <accordion-title>What is a dog?</accordion-title>
          <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</accordion-content>
      </sm-accordion-item>
      <sm-accordion-item>
          <accordion-title>What is a dog?</accordion-title>
          <accordion-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</accordion-content>
      </sm-accordion-item>
    </sm-accordion>
  </div>
  <router-outlet></router-outlet>
  `,
  directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class AppLinkComponent {

}
