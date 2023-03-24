import { Directive, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'template',
})
export class TemplateDirective {
  constructor(
    @Optional() private _ngControl?: NgControl){
      console.log(_ngControl)
      debugger
    }
}
