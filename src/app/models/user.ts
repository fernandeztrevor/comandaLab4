export class User 
{
    public id: string;
    public name: string;
    public lastname: string;
    public password: string;
    public email: string;
    public role: Role;
    public image: string;
    public deleted: boolean;
    public state: string;

    constructor() 
    {
        this.name = "";
        this.lastname = "";
        this.password = "";
        this.email = "";
        this.role = null;
        this.image = null;
        this.deleted = true;
        this.state = 'deshabilitado';
    }

    public static CreateUserWithParams(name: string, lastname: string,  email: string, password: string, role: Role): User
    {
        let user = new User();
        user.name = name;
        user.lastname = lastname;
        user.password = password;
        user.email = email;
        user.role = role;
        user.deleted = false;
        user.state = 'habilitado';
        user.image ='https://firebasestorage.googleapis.com/v0/b/tplab4-aa5ae.appspot.com/o/imagenesUsuarios%2Fdefault-profile.png?alt=media&token=e03046d0-3237-4039-8bd3-a1ba051c0645';
        return user;
    }

    public static CreateUserFromAdmin(name: string, lastname: string,  email: string, role: Role): User
    {
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

export enum Role
{
    socio = 'socio',
    mozo = 'mozo',
    cocinero = 'cocinero',
    cervecero = 'cervecero',
    bartender = 'bartender',
    cliente = 'cliente'
}
