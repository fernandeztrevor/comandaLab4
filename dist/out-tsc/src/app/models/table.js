export class Table {
    constructor() {
        this.tableID = '';
        this.state = TableState.available;
    }
    static Create(tableID, state) {
        let newTable = new Table();
        newTable.tableID = tableID;
        newTable.state = state;
        return newTable;
    }
}
export var TableState;
(function (TableState) {
    TableState["available"] = "Disponible";
    TableState["waitingOrder"] = "Cliente esperando pedido";
    TableState["eating"] = "Cliente comiendo";
    TableState["paying"] = "Cliente pagando";
    TableState["closed"] = "Cerrada";
})(TableState || (TableState = {}));
//# sourceMappingURL=table.js.map