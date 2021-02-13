import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {
  fecha: Date = new Date(1988, 3, 15, 12, 30, 15); //15 de Abril del 1988 12:30:15

  constructor() { }

  ngOnInit() {
  }

}
