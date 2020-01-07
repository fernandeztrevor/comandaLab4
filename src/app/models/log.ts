import { DatePipe, formatDate } from '@angular/common';

export class Log {
    public id: string;
    public usuario: string;
    public role: Role;
    public target: TargetMovimiento;
    public tipo: TipoMovimiento;
    public fecha: number;

    constructor() {
        this.id = "";
        this.usuario = "";
        this.role = null;
        this.target = null;
        this.tipo = null;
        this.fecha = null;
    }

    public static CreateLogWithParams(usuario: string, role: Role, target: TargetMovimiento, tipo: TipoMovimiento): Log {
        let movimiento = new Log();
        
        movimiento.usuario = usuario;
        movimiento.role = role;
        movimiento.target = target;
        movimiento.tipo = tipo;
        movimiento.fecha =  Date.now();

        return movimiento;
    }
}

export enum Role {
    socio = 'socio',
    mozo = 'mozo',
    cocinero = 'cocinero',
    cervecero = 'cervecero',
    bartender = 'bartender',
    cliente = 'cliente',
    //noEspecifica = 'No Especifica'
}

export enum TipoMovimiento {
    altaProducto = 'Alta',
    habilitacionProducto = 'Habilitacion',
    deshabilitacionProducto = 'Deshabilitacion',
    modificacionProducto = 'Modificacion',
    ingreso = 'Ingreso',
    egreso = 'Egreso',
    entrega = 'Entrega',
    //noEspecifica = 'No Especifica'
}

export enum TargetMovimiento {
    usuario = 'Usuario',
    producto = 'Producto',
    pedido = 'Pedido',
    //noEspecifica = 'No Especifica'
}
