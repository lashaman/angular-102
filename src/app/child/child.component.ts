import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements
OnChanges,
OnInit,
DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {

  @Input() valueExample: number = 0;

  constructor() {
    console.log('constructor init');
  }

  ngOnChanges(): void {
    console.log('on changes');
  }

  ngOnInit() {
    console.log('initilise component');
  }

  calculateSum(a: number, b: number): number {
    return a + b;
  }

  ngDoCheck(): void {
    console.log('ng docheck component')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit component')
  }

  ngAfterContentCheck(): void {
    console.log('ngAfterContentCheck component')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit component')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked component')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy component')
  }
}
