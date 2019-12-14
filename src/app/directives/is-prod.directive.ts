import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Directive({
	selector: '[isProd]'
})
export class IsProdDirective implements OnInit{

	@Input('isProd') nothing;

	constructor(private el: ElementRef) { }

	ngOnInit()
	{
		if(environment.production)
			this.el.nativeElement.style.display = 'none';
	}

}
