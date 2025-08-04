const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values

// false, 0, -0, BigInt 0n, "", null , undefine , NAN

// expect all are truety 
// truthy
// "0"
// 'false'
// " "
// []
//  {}
// function(){}

if(userEmail.length === 0){
    console.log("Array is Empty");
}
const emptyObj={}

if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
}

// false == 0 true
// false == '' true
//  0 == '' true






// Nullish coalescing Operator (??) : null undefined


let val1 ;
// val1=5 ?? 10;

// val1 = null ?? 10;


// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 12;

console.log(val1);



// terninry operator
//  (conditon) ? true: false; 

const iceTeaPrice = 100 ;
iceTeaPrice > 80 ? console.log("IceTea is greater ten 80"): console.log("IceTea is less ten 80")  ;