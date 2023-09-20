import { Component, Injector } from '@angular/core';
import { AppComponentBase } from 'src/shared/app-component-base';

@Component({
  selector: 'app-design',
  template:`<router-outlet></router-outlet>`
})
export class DesignComponent extends AppComponentBase {

  constructor(injector: Injector) {
    super(injector);
   }

}
