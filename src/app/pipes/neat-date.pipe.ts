import { Pipe, PipeTransform, KeyValueDiffers } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
	name: 'neatDate'
})
export class NeatDatePipe implements PipeTransform {

	transform(value: string): any {

		if(value == undefined || value == '')
			return 'No se registró la fecha.';

		let fullDate = value.split(" ")[0];
		let splittedDate = fullDate.split("-");
		let day = splittedDate[2];
		let month = splittedDate[1];
		let year = splittedDate[0];
		switch(day)
		{
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				day = '0' + day;
				break;
			default:
				break;
		}
		let finalDate = day + '-' + month + '-' + year;
		return finalDate;
	}

}
