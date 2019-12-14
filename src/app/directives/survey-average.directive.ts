import { Directive, Input, ElementRef, OnInit, OnChanges } from '@angular/core';
import { Survey } from '../models/survey';

@Directive({
	selector: '[surveyAverage]'
})
export class SurveyAverageDirective implements OnInit, OnChanges {

	@Input('surveyAverage') survey: Survey;
	@Input('returnAverage') returnAvg: boolean;

	constructor(private el: ElementRef) { }

	ngOnInit()
	{
		if(!this.returnAvg)
			this.Paint();
	}

	ngOnChanges()
	{
		if(this.returnAvg)
			this.el.nativeElement.innerHTML = this.CalculateAverage().toFixed(2);
	}

	private CalculateAverage(): number
	{
		return (this.survey.tableScore + 
			this.survey.restaurantScore + 
			this.survey.waiterScore + 
			this.survey.cookScore) / 4;
	}

	private Paint()
	{
		let avg: number = this.CalculateAverage();

		if(avg < 4)
			this.el.nativeElement.style.color = 'red';
		else if(avg >= 4 && avg < 7)
			this.el.nativeElement.style.color = 'yellow';
		else
			this.el.nativeElement.style.color = 'green';
	}

}
