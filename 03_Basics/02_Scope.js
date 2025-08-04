// var c =300;
let a=200;
if(true){
    let a=10
    const b=20;
    // c=30;
    // console.log(`INNNER ${a}`)
}


// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName = "Rishu";
    function two(){
        const website="Youtube.com";
        console.log(userName);
    }   
    // console.log(website);
    // two();
}
one();




if(true){
    const userName="Rishu";
    if(userName === "Rishu"){
        const website=" youtube";
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);


/// +++++++++++++++ interesting ++++++++++=

// console.log(addone(5));

function addone(num){
    return num+1;
}

// addtwo(5); // error because of expression functions //Cannot access 'addtwo' before initialization

const addtwo=function(num){ // expression
    return num + 2;
}







