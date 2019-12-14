import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  	name: 'table'
})
export class TablePipe implements PipeTransform {

	transform(value: string): string {
		switch(value)
		{
			case 'AW':
			case 'AM':	
			case 'BW':
			case 'BM':
			case 'CW':
			case 'CM':
			case 'DW':
			case 'DM':
				return 'Mesa ' + value;
			default:
				return 'No hay mesa';
		}
	}

}
