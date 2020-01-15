import { Component, OnInit, Input } from '@angular/core';
import { Table, TableState } from 'src/app/models/table';
import { TableService } from 'src/app/services/firebase/table.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { LogService } from 'src/app/services/firebase/log.service';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/log';

@Component({
	selector: 'app-table-card',
	templateUrl: './table-card.component.html',
	styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements OnInit {

	@Input() table: Table;
	@Input() isAdmin: boolean;

	constructor(private tableService: TableService, private toastr: ToastrService, private authService: AuthService, private movimientoService: LogService) { }

	ngOnInit() {
	}

	public ChangeStatus(option: number): void {
		let status: TableState;
		switch (option) {
			case 1:
				status = TableState.available;
				break;
			case 2:
				status = TableState.waitingOrder;
				break;
			case 3:
				status = TableState.eating;
				break;
			case 4:
				status = TableState.paying;
				break;
			case 5:
				status = TableState.closed;
				break;
			default:
				status = TableState.available;
				break;
		}

		this.tableService.UpdateStatus(this.table.tableID, status).then(() => {
			this.authService.GetCurrentUser().then(user => {
				let mensaje: string = `El usuario ${user.email} cambió el estado de la mesa ${this.table.tableID} a ${status}`;
				this.movimientoService.persistirMovimiento(user, TargetMovimiento.mesa, TipoMovimiento.modificacion, mensaje);
			});
		})
			.then(() => {
				this.toastr.success('Se cambió el estado de la mesa.');
			})
			.catch(() => {
				this.toastr.error('Ha ocurrido un error al actualizar.');
			});
	}

}