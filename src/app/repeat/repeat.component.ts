import { Component, ContentChildren, QueryList } from '@angular/core';
import { RepeatDirective } from './repeat.directive';

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css'],
})
export class RepeatComponent {
  @ContentChildren(RepeatDirective) contents!: QueryList<RepeatDirective>;
  constructor() {}
}
