function User(email,password){


    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email=value;
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password=value;
        }
    })
    this.email=email;
    this.password=password;

}

const Rishu=new User("Rishu","Rishu@12345")
console.log(Rishu.email)
console.log(Rishu.password)
