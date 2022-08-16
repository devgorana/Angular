import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEvenOddHighlight]'
})
export class EvenOddHighlightDirective {
  
  constructor(private el: ElementRef) {
    
    this.el.nativeElement.style.backgroundColor = "yellow";
  }
   
  ngOnInit(): void {
  }

}
