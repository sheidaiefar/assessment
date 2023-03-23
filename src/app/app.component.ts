import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = [
    { name: 'A', job: 'D' },
    { name: 'B', job: 'E' },
    { name: 'C', job: 'E' },
  ];

  keys = Object.keys(this.data[0]);
  obj = Object.assign(this.data[0])

  constructor() {
    console.log(this.obj);
  }
}
