const coding= ['js','ruby','python','java'];

// coding.forEach((item)=>{
//     console.log(item)
// })



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// } )


const myCodding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]
myCodding.forEach((item)=>{
    console.log(item.languageName);
    
})