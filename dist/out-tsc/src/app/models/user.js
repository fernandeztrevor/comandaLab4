export class User {
    constructor() {
        this.name = "";
        this.lastname = "";
        this.password = "";
        this.email = "";
        this.role = null;
        this.image = null;
        this.deleted = true;
        this.state = 'deshabilitado';
    }
    static CreateUserWithParams(name, lastname, email, password, role) {
        let user = new User();
        user.name = name;
        user.lastname = lastname;
        user.password = password;
        user.email = email;
        user.role = role;
        user.deleted = false;
        user.state = 'habilitado';
        user.image = 'https://firebasestorage.googleapis.com/v0/b/tplab4-aa5ae.appspot.com/o/imagenesUsuarios%2Fdefault-profile.png?alt=media&token=e03046d0-3237-4039-8bd3-a1ba051c0645';
        return user;
    }
    static CreateUserFromAdmin(name, lastname, email, role) {
        let user = new User();
        user.name = name;
        user.lastname = lastname;
        user.password = email;
        user.email = email;
        user.role = role;
        user.deleted = false;
        user.state = 'habilitado';
        return user;
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
})(Role || (Role = {}));
//# sourceMappingURL=user.js.map