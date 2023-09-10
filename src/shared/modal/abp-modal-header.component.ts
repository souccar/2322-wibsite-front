import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { AppComponentBase } from '../app-component-base';

@Component({
  selector: 'abp-modal-header',
  templateUrl: './abp-modal-header.component.html',

})
export class AbpModalHeaderComponent extends AppComponentBase {
  @Input() title: string='';

  @Output() onCloseClick = new EventEmitter<number>();

  constructor(injector: Injector) {

    super(injector);


  }

}
