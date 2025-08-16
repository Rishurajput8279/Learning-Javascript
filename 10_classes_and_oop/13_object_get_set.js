const User={
    _email: "Rishu",
    _password: "abc",


    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email= value
    }
}


// factory functions
const tea = Object.create(User)

console.log(tea.email)
