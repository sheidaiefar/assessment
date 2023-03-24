import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  Optional,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { TemplateDirective } from './directives/template.directive';

@Component({
  selector: 'repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css'],
})
export class RepeaterComponent {
  @Input() options!: any[];
  // @ContentChild(TemplateDirective) template!: TemplateDirective;
  // @ViewChild('content') content!: ElementRef;
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  // @ContentChildren(TemplateRef) template!: QueryList<
  //   TemplateRef<TemplateDirective>
  // >;
}
