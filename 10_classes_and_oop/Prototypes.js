let myName="Rishu";
let mychannel="Youtube";


// // console.log(myName.trim().length);


String.prototype.truelength = function(){
    console.log(this)
    console.log(`True length: ${this.trim().length}`)
}
myName.truelength();
"Ayush".truelength();

// console.log(myName.truelength);



let myHero=["thor","spidermen"];

let heroPower={
    thor: "hamer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.Rishu= function(){
    console.log("Rishu is present in all objects");
}


Array.prototype.heyRishu=function(){
    console.log("HeyRishu is Present or not")
}

// heroPower.Rishu();
// myHero.Rishu();


// heroPower.heyRishu();
myHero.heyRishu();




// inheritance

const User={
    name:"rishu",
    email: "rishurajput@gmail.com"
}

const Teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailale: false,
}

const TaSupport={
    makeAssignment: "Js assignment",
    fulllTime: true,
    __proto__: TeachingSupport
}


Teacher.__proto__= User;




// modern syntax



Object.setPrototypeOf(TeachingSupport, Teacher);


