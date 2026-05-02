import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
})
export class HoverCard {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    // console.log(this.el.nativeElement);
    this.el.nativeElement.style.backgroundColor = 'gray';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
