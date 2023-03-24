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

  sortingData = [
    {
      name: 'malihe',
      age: 22,
      birthDate: new Date(29, 1, 2000),
    },
    {
      name: 'anna',
      age: 72,
      birthDate: new Date(29, 1, 1930),
    },
    {
      name: 'tida',
      age: 2,
      birthDate: new Date(29, 1, 2020),
    },
  ];
}
