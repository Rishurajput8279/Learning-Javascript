/* -------Memory------ */

/*---- stack ---- */

let myYoutubeChannel = "Rishu Rajput";
let anotherYoutubeChannel = myYoutubeChannel;

anotherYoutubeChannel= "Hello world"
console.log(myYoutubeChannel);
console.log(anotherYoutubeChannel);



/*---- heap ---- */

let user = {
    name: "Rishu",
    age: 22
}

let anotherUser = user;


anotherUser.name = "Rishabh";

console.log(user);
console.log(anotherUser);