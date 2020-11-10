import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStyles]'
})
export class CustomStylesDirective {

  constructor(private element: ElementRef) { }

  @Input('appCustomStyles') 
  set listOfClasses(classObj: any){
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      }
      else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
