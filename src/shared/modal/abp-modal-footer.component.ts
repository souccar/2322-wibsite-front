import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { AppComponentBase } from '../app-component-base';

@Component({
  selector: 'abp-modal-footer',
  templateUrl: './abp-modal-footer.component.html',

})
export class AbpModalFooterComponent  extends AppComponentBase {
  @Input() cancelLabel = 'Cancel';
  @Input() cancelDisabled: boolean=true;
  @Input() saveLabel = 'Save';
  @Input() saveDisabled: boolean=true;
  @Input() saveIcon = 'bi bi-check-lg';
  @Input() cancelIcon = 'bi bi-x-lg';

  @Output() onCancelClick = new EventEmitter<number>();

  constructor(injector: Injector) {
    super(injector);
  }
}
