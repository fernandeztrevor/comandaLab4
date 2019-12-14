import { Directive, Input, OnInit, ElementRef, OnChanges } from '@angular/core';

@Directive({
	selector: '[surveyComment]'
})
export class SurveyCommentDirective implements OnChanges {

	@Input('surveyComment') isPositive: boolean;
	@Input('isIcon') isIcon: boolean;

	constructor(private el: ElementRef) { }

	ngOnChanges()
	{
		if(this.isIcon)
		{
			if(this.isPositive)
				this.el.nativeElement.innerHTML = '<i class="fas fa-check-circle" style="color: green"></i>';
			else
				this.el.nativeElement.innerHTML = '<i class="fas fa-exclamation" style="color: red"></i>';
		}
		else
		{
			if(this.isPositive)
				this.el.nativeElement.innerHTML = 'El comentario dado por el cliente fue positivo.';
			else
				this.el.nativeElement.innerHTML = 'El comentario dado por el cliente fue negativo.';
		}
	}

}
