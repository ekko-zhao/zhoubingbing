import { Directive, ElementRef, Input, HostListener, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
	selector:'[myBeautifulBackground]'
})
export class BeautifulBackgroundDirective{
	
	@Input('myBeautifulBackground') 
	set condition(newCondition:boolean){
		console.log(newCondition)
		if(!newCondition){
			this.viewContainer.createEmbeddedView(this.templateRef);
		}else{
			this.viewContainer.clear()
		}
	}
	constructor(private templateRef:TemplateRef <any>, private viewContainer: ViewContainerRef ){
		console.log(this.templateRef);
		
	}
	
}