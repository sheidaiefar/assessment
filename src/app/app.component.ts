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

  movies = [
    {
      name: 'M',
      rate: 5,
      release: new Date(1, 1, 2000),
    },
    {
      name: 'B',
      rate: 1,
      release: new Date(29, 1, 2022),
    },
    {
      name: 'C',
      rate: 3,
      release: new Date(13, 5, 2015),
    },
  ];


  constructor() {}

}
