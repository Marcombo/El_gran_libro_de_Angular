import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-pipes',
  templateUrl: './number-pipes.component.html',
  styleUrls: ['./number-pipes.component.css']
})
export class NumberPipesComponent implements OnInit {
  pi: number = 3.141592;
  
  constructor() { }

  ngOnInit() {
  }

}
