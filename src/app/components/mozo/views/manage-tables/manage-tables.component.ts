import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/firebase/table.service';

@Component({
	selector: 'app-manage-tables',
	templateUrl: './manage-tables.component.html',
	styleUrls: ['./manage-tables.component.scss']
})
export class ManageTablesComponent implements OnInit {

	public tables: any;

	constructor(private tableService: TableService) { }

	ngOnInit() {
		this.tables = this.tableService.GetAll().valueChanges();
	}

}
