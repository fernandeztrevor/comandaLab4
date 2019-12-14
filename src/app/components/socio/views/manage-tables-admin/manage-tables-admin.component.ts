import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/firebase/table.service';

@Component({
    selector: 'app-manage-tables-admin',
    templateUrl: './manage-tables-admin.component.html',
    styleUrls: ['./manage-tables-admin.component.scss']
})
export class ManageTablesAdminComponent implements OnInit {

  public tables: any;

	constructor(private tableService: TableService) { }

	ngOnInit() {
		this.tables = this.tableService.GetAll().valueChanges();
	}

}
