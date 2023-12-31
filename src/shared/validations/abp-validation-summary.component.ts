import { Component, ElementRef, Injector, Input, OnInit, Renderer2 } from '@angular/core';
import { AppComponentBase } from '../app-component-base';
import { AbpValidationError } from './abp-validation.api';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'abp-validation-summary',
  templateUrl: './abp-validation-summary.component.html',

})
export class AbpValidationSummaryComponent extends AppComponentBase implements OnInit {

  defaultValidationErrors: Partial<AbpValidationError>[] = [
    { name: 'required', localizationKey: 'ThisFieldIsRequired' },
    {
      name: 'minlength',
      localizationKey: 'PleaseEnterAtLeastNCharacter',
      propertyKey: 'requiredLength',
    },
    {
      name: 'maxlength',
      localizationKey: 'PleaseEnterNoMoreThanNCharacter',
      propertyKey: 'requiredLength',
    },
    {
      name: 'email',
      localizationKey: 'InvalidEmailAddress',
    },
    {
      name: 'pattern',
      localizationKey: 'InvalidPattern',
      propertyKey: 'requiredPattern',
    },
    {
      name: 'validateEqual',
      localizationKey: 'PairsDoNotMatch',
    },
  ];
  validationErrors = <AbpValidationError[]>this.defaultValidationErrors;

  @Input() control: any;
  @Input() controlEl: any;

  constructor(injector: Injector, public _renderer: Renderer2) {
    super(injector);
  }

  @Input() set customValidationErrors(val: AbpValidationError[]) {
    if (val && val.length > 0) {
      const defaults = this.defaultValidationErrors.filter(
        (defaultValidationError) =>
          !val.find(
            (customValidationError) =>
              customValidationError.name === defaultValidationError.name
          )
      );
      this.validationErrors = <AbpValidationError[]>[...defaults, ...val];
    }
  }

  ngOnInit() {
    if (this.controlEl) {
      this.control.valueChanges.subscribe(() => {
        if (
          this.control.valid &&
          (this.control.dirty || this.control.touched)
        ) {
          this._renderer.removeClass(this.controlEl, 'is-invalid');
        }
      });
    }
  }

  getValidationErrorMessage(error: AbpValidationError): string {
    if (this.controlEl) {
      this._renderer.addClass(this.controlEl, 'is-invalid');
    }

    const propertyValue = this.control.errors[error.name][error.propertyKey];
    return !!propertyValue
      ? (error.localizationKey, propertyValue)
      : (error.localizationKey);
  }
}
