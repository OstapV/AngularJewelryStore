import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusDirective]'
})
export class FocusDirectiveDirective {

  constructor(private el : ElementRef) { }

  ngAfterViewInit(): void {
     this.el.nativeElement.focus();
  }

  ngOnInit(): void {
  }
}
