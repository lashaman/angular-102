import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    console.log('el', el);
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.fontWeight = 'bold';
    el.nativeElement.style.border = '3px double black';
   }
}
