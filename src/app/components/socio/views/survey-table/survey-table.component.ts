import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/firebase/survey.service';
import { Survey } from 'src/app/models/survey';

@Component({
	selector: 'app-survey-table',
	templateUrl: './survey-table.component.html',
	styleUrls: ['./survey-table.component.scss']
})
export class SurveyTableComponent implements OnInit {

	public surveys: any;
	public survey: Survey;

	constructor(private surveyService: SurveyService) { }

	ngOnInit() {
		this.surveys = this.surveyService.GetAll().valueChanges();
	}

	public SelectSurvey(surv: Survey): void
	{
		this.survey = surv;
	}
}
