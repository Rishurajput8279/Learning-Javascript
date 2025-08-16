const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);



// console.log(Math.PI)
// Math.PI=5;
// console.log(Math.PI);


const chai={
    name:"Ginger chai",
    price: 250,
    isAvaiable: true,
    orderChai: function(){
        console.log("Code fut gaya")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


Object.defineProperty(chai,"name", {
    enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
        console.log(`${key} : ${value}`);
    // we cann't iterate on name of the chai object
}


// Object.defineProperty(Math,"PI",{
//     value: 51000,
//     writable:true,
//     enumerable:true,                                         we can't change the prooperty 
//     configurable:true
// })
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"));


