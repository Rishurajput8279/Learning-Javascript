class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return `${this._password.toUpperCase()}Rishu`;
    }
    set password(value){
        this._password=value;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(e){
        this._email=e;
    }
}
const Rishu=new User("Rishu@ai.com","Rishu123");

console.log(Rishu.email);
console.log(Rishu.password);

