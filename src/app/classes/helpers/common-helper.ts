import { User } from 'src/app/models/user';

export class CommonHelper 
{
    public static ConvertToObject(obj: any): Object
    {
        return JSON.parse(JSON.stringify(obj));
    }

    public static ConvertDate(date: Date): string
    {
        let firstPart = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        let secondPart = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return firstPart + ' ' + secondPart;
    }

    public static GenerateProfileImageName(user: User): string
    {
        return user.name.trim().toUpperCase()
            + user.lastname.trim().toUpperCase()
            + user.role.charAt(0).toUpperCase()
            + Math.floor((Math.random() * 10000) + 1);
    }
}
