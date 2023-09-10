import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '../../../../../../src/shared/app-component-base';

@Component({
  selector: 'app-production',
  template:`<router-outlet></router-outlet>`
})
export class ProductionComponent extends AppComponentBase {

  constructor(injector: Injector) {
    super(injector);
   }

}
