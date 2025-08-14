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