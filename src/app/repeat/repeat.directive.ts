import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
