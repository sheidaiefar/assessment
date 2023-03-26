import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent {
  panelOpenState = false
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

  names = ['maria', 'anna', 'sara'];

  dates = [new Date(25, 5, 2022), new Date(29, 1, 2000), new Date(29, 12, 1900)];

  ages = [100, 20, 44, 88];


  data = [
    { name: 'A', job: 'D' },
    { name: 'B', job: 'E' },
    { name: 'C', job: 'E' },
  ];
}
