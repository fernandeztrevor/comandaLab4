export class Log {
    constructor() {
        this.id = "";
        this.usuario = "";
        this.role = null;
        this.target = null;
        this.tipo = null;
        this.fecha = null;
        this.observacion = "";
    }
    static CreateLogWithParams(usuario, role, target, tipo, observacion) {
        let movimiento = new Log();
        movimiento.usuario = usuario;
        movimiento.role = role;
        movimiento.target = target;
        movimiento.tipo = tipo;
        movimiento.observacion = observacion;
        movimiento.fecha = Date.now();
        return movimiento;
    }
}
export var Role;
(function (Role) {
    Role["socio"] = "socio";
    Role["mozo"] = "mozo";
    Role["cocinero"] = "cocinero";
    Role["cervecero"] = "cervecero";
    Role["bartender"] = "bartender";
    Role["cliente"] = "cliente";
    Role["delivery"] = "delivery";
    //noEspecifica = 'No Especifica'
})(Role || (Role = {}));
export var TipoMovimiento;
(function (TipoMovimiento) {
    TipoMovimiento["alta"] = "Alta";
    TipoMovimiento["habilitacion"] = "Habilitacion";
    TipoMovimiento["deshabilitacion"] = "Deshabilitacion";
    TipoMovimiento["modificacion"] = "Modificacion";
    TipoMovimiento["ingreso"] = "Ingreso";
    TipoMovimiento["egreso"] = "Egreso";
    TipoMovimiento["entrega"] = "Entrega";
    TipoMovimiento["suspension"] = "Suspension";
    TipoMovimiento["reincorporacion"] = "Reincorporacion";
    TipoMovimiento["borrado"] = "Borrado";
    TipoMovimiento["preparacion"] = "En preparaci\u00F3n";
    TipoMovimiento["finalizacion"] = "Finaliz\u00F3";
    //noEspecifica = 'No Especifica'
})(TipoMovimiento || (TipoMovimiento = {}));
export var TargetMovimiento;
(function (TargetMovimiento) {
    TargetMovimiento["usuario"] = "Usuario";
    TargetMovimiento["producto"] = "Producto";
    TargetMovimiento["pedido"] = "Pedido";
    TargetMovimiento["mesa"] = "Mesa";
    //noEspecifica = 'No Especifica'
})(TargetMovimiento || (TargetMovimiento = {}));
//# sourceMappingURL=log.js.map