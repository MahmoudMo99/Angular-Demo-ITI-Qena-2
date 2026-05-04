import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
})
export class HoverCard {
  constructor(private el: ElementRef) {}

  @Input() backColor: string = 'red';

  @HostListener('mouseenter') onMouseEnter() {
    // console.log(this.el.nativeElement);
    this.el.nativeElement.style.backgroundColor = this.backColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
