import {Directive, forwardRef, Input} from '@angular/core';
import {Validator, NG_VALIDATORS, FormControl} from '@angular/forms';

@Directive({
  selector: '[healthNumberCheck][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => healthNumberCheckValidator), multi: true
    }
  ],
  host: {'[attr.healthNumberCheck]': 'healthNumberCheck ? healthNumberCheck : null'}
})

export class healthNumberCheckValidator implements Validator {

  @Input('healthNumberCheck') bcPhn: boolean;


  validate(control: FormControl): {[key:string]:boolean;}  {

    // Get value out of control
    let phn = control.value;

    // pre req checks
    if (phn == null ||
      phn.length < 1) return null;

    if (this.isValid(phn)) {
      // return null for no errors
      return null;
    }else {
      // return "true" if we have errors
      return {"healthNumberCheck": true}
    }
  }

  isValid (phn: string): boolean {

    // pre req checks
    if (phn == null ||
      phn.length < 1) return false;

    return true;
  }
}
