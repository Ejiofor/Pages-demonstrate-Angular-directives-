import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomClassDirective]'
})
export class CustomClassDirectiveDirective {

  constructor(private element: ElementRef) { 
    console.log("appCustomClassDirective is being used");
  }

  @Input() 
  set backgroundcolor(bgColor: string){
    this.element.nativeElement.style.backgroundColor= bgColor;
  }

}
