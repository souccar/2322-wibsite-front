import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '../../../../../src/shared/app-component-base';

@Component({
  selector: 'app-catalog',
  template: `<router-outlet></router-outlet>`
})
export class CatalogComponent extends AppComponentBase {

  constructor(
    injector: Injector
    ) {
    super(injector);
   }

  ngOnInit(): void {
  }

}
