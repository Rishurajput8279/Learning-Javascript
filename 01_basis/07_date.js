let myDate=new Date()
// console.log(myDate)

// console.log(myDate.toString())

// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())

// console.log(typeof myDate)

// let mycreateDate=new Date(2023,0,23)
// let mycreateDate=new Date(2023,0,23,5,3)


// let mycreateDate=new Date("2023-01-14")


let mycreateDate=new Date("08-01-2025")
// console.log(mycreateDate.toDateString())
// console.log(mycreateDate.toLocaleString());



let myTimeStamp= Date.now()

console.log(myTimeStamp)

console.log(mycreateDate.getTime())

const remainingTime=(mycreateDate-myTimeStamp)

const sec=Math.floor(remainingTime/1000)
const min=Math.floor(sec/60);
const hrs=Math.floor(min/60);
const day=Math.floor(hrs/24)



console.log(`Remainig Time is ${day} days and ${hrs} hrs and ${min} min ${sec} sec`);








let newDate=new Date();

console.log(newDate.getFullYear())
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getTime())



newDate.toLocaleString('default' ,{
    weekday: 'long',
    
})
console.log(newDate)