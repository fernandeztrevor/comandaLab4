export class Table 
{
    public id: string;
    public tableID: string;
    public state: TableState;

    constructor()
    {
        this.tableID = '';
        this.state = TableState.available;
    }

    public static Create(tableID: string, state: TableState): Table
    {
        let newTable = new Table();
        newTable.tableID = tableID;
        newTable.state = state;
        return newTable;
    }
}

export enum TableState
{
    available = 'Disponible',
    waitingOrder = 'Cliente esperando pedido',
    eating = 'Cliente comiendo',
    paying = 'Cliente pagando',
    closed = 'Cerrada'
}