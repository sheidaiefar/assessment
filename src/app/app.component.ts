import { Component, OnInit } from '@angular/core';
import { SorterPipe } from './pipes/sorter.pipe';
import * as _ from 'lodash';


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
      name: 'A',
      rate: 5,
      release: new Date(29, 1, 2000),
    },
    {
      name: 'B',
      rate: 1,
      release: new Date(29, 1, 2022),
    },
    {
      name: 'C',
      rate: 3,
      release: new Date(29, 1, 2000),
    },
  ];


  constructor(private sortPipe: SorterPipe) {}


  sortedArr = this.sortPipe.transform(this.movies, "desc", "name");
}
