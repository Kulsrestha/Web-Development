class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}.xxx`; //this is done so that the password is not the same that can be accessed by anyone
    }
    set password(value){
        this._password=value;       //here the original password is saved to the db or anywhere
    }
}

const user = new User('test@gmail.com','aab');
console.log(user.password);
console.log(user.email);