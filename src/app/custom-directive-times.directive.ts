import { Directive,TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appCustomDirectiveTimes]'
})
export class CustomDirectiveTimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appCustomDirectiveTimes') 
  set render(times: number){
    this.viewContainer.clear();
    for(let i=0; i< times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {
        custom_index: i
      });
    }
  }

}
