export class CommonHelper {
    static ConvertToObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    static ConvertDate(date) {
        let firstPart = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        let secondPart = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return firstPart + ' ' + secondPart;
    }
    static GenerateProfileImageName(user) {
        return user.name.trim().toUpperCase()
            + user.lastname.trim().toUpperCase()
            + user.role.charAt(0).toUpperCase()
            + Math.floor((Math.random() * 10000) + 1);
    }
}
//# sourceMappingURL=common-helper.js.map