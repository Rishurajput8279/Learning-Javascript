// fetch('https://something.com')
// .then() //response
// .catch() // error
// .finally(); // execute at all


//  Creation
const promiseOne= new Promise(function(resole,reject){
    // do an Async task

    //Db call , crtography, network

    setTimeout(function(){
        console.log("Async task is compelete");
        resole();
    },1000)
});

promiseOne.then(function(){
   console.log("Promise Consume");
    
})

new Promise(function(resole,reject){
    setTimeout(function(){
        console.log("async task2");
        resole();
    },1000)
}).then(function(){
    console.log("Asynch 2 resolved");
})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            userName: "Rishu",
            email: "Rishurajput070@gmail.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log((user));
    
})












const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName: "Rishu",
                password: 101
            })
        }
        else{
            reject('ERROR: Something went wrong');
        }
    },1000)
})
// promiseFour.then().catch()


// callback Hell
promiseFour
.then((user)=>{
    console.log(user);
    return user.userName;
})
.then((username)=>{
    console.log(username);
    
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The Promise is either resolve or rejected")
})




const PromiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName: "JavaScript",
                password: 8279
            })
        }
        else{
            reject('ERROR: Js went wrong');
        }
    },2000)
});


async function ConsumePromiseFive(){
   try{
        const response = await PromiseFive
        console.log(response);
   }
   catch(error){
        console.log(error);
   }
}

ConsumePromiseFive();








async function getData() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(await response.json());
    }
    catch(error){
        console.log(error);
    }
}

getData();







fetch("https://api.github.com/users/Rishurajput8279")
.then((data)=>{
    return data.json();
})
.then((newData)=>{
    console.log(newData);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The Promise is either resolve or rejected");
})