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
  inputValue = 0;

  logNameClicker() {
    this.logName({name: 'lasha', lastname: 'sumbadze'})
  }

  logName(human: ExampObj) {
    console.log(human);
    this.inputValue = 1;
  }

  childTitleChanged(changes: number) {
    this.title = "შეცვლილი სათური, შვილმა მოითხოვა";
  }

}
