import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	  name: 'timeleft'
})

export class TimeleftPipe implements PipeTransform {

	transform(value: number): string {
		if(value == undefined || isNaN(value) || value == 0)
			return 'No tiene un tiempo estimado asignado.';
		
		let diff = Math.floor(value/(1000*60));

		if(diff < 0)
			return 'Pasado por ' + (diff * -1) + ' minutos.';
		else
			return diff + ' minutos.'
	}

}
