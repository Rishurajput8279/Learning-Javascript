const name="Rishu"

const repoCount=10;

// console.log(name + repoCount + "value") ;

console.log(`${name} ${repoCount} value`);


const gameName= new String("Rishu's Game");


console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));


const newString= gameName.substring(0, 5);
console.log(newString)

const anotherString= gameName.slice(-5,10)
console.log(anotherString)

const anotherString2=gameName.substring(-5,5) // start with 0
console.log(anotherString2)





const a = "            Rishu          ";
console.log(a)
console.log(a.trim()) // remove starting and ending space

const url = "https://rishu.com/rishu%20sharma" // const url = "https://rishu.com/rishu sharma"

console.log(url)

console.log(url.replace('%20','-'))


console.log(url.includes("rishuee"))


console.log(gameName.split(' '))