import { Component, ContentChild, ContentChildren, Input } from '@angular/core';
import { RepeatDirective } from './repeat.directive';

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent {
  @Input() options!: any[];

  @ContentChild(RepeatDirective) content!: RepeatDirective;

  constructor() {
    console.log(this.content)
    debugger
    
  }
}
