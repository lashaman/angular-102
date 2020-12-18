import { Component } from '@angular/core';

export interface ExampObj {
  name: string;
  lastname?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hello, ეს არის angular 1 პროექტი';
  isDisabled = false;
  inputValue: string = '';

  logNameClicker() {
    this.logName({name: 'lasha', lastname: 'sumbadze'})
  }

  logName(human: ExampObj) {
    console.log(human);
    this.inputValue = "teqsturi";
  }

  inputFunction(event: any) {
    console.log(event.target.value * 4);
    this.inputValue = event.target.value;
  }
}
