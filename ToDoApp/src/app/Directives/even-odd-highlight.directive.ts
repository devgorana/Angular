import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEvenOddHighlight]'
})
export class EvenOddHighlightDirective {
  @Input() appEvenOddHighlight = "";
  @Input() id !: string;

  
  constructor(private el: ElementRef) {
    
    //this.el.nativeElement.style.backgroundColor = this.appEvenOddHighlight;
    var test = this.appEvenOddHighlight;
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.appEvenOddHighlight);
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
   
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = "yellow";
    
    var test = this.id;
  }

}
