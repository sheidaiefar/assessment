import { Component, ContentChild, Input } from '@angular/core';
import { TemplateDirective } from './directives/template.directive';

@Component({
  selector: 'repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css'],
})
export class RepeaterComponent {
  @Input() options!: any[];
  @ContentChild(TemplateDirective) template!: TemplateDirective;

}
