export class User {
    id?:string;
    email:string;
    pass:string;
    constructor (email, pass) {
        this.email = email;
        this.pass = pass;
    }
}


export class RegUser {
    username:string;
    email:string;
    pass:string;
    constructor (username, email, pass) {
        this.username = username;
        this.email = email;
        this.pass = pass;
    }
}

export class LoggedUser {
    id:string;
    username:string;
    email:string;
    constructor (id, username, email) {
        this.id = id;
        this.email = email;
        this.username = username;
    }
}
