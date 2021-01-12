import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title = 'pipes example';
  title2 = 'PIPES EXAMPLE @@2';
  toDate =  new Date();
  msg = 'Welcome this pipes';
  num = 9344.444444;
  money = 1000;
  constructor() { }

  ngOnInit(): void {
  }

}
