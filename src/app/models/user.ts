export class User 
{
    public id: string;
    public name: string;
    public lastname: string;
    public password: string;
    public email: string;
    public role: Role;
    public image: string;

    constructor() 
    {
        this.name = "";
        this.lastname = "";
        this.password = "";
        this.email = "";
        this.role = Role.socio;
        this.image = 'assets/img/default-profile.png';
    }

    public static CreateUserWithParams(name: string, lastname: string,  email: string, password: string, role: Role): User
    {
        let user = new User();
        user.name = name
        user.lastname = lastname;
        user.password = password;
        user.email = email;
        user.role = role;
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
