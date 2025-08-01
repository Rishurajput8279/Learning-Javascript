const tinderUser=new Object();
// const tinderUser2={};

// console.log(tinderUser)


// console.log(tinderUser2);


tinderUser.id="123abc";
tinderUser.name="sam";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);



const regularUser={
    email:"rishurajput070@gmail.com",
    fullName:{
        userfullName:{
            firstname: "Rishu",
            lastname:"Rajput"
        }
    }
}
// console.log(regularUser.fullName.userfullName)



const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj5={
    5:"e",
    6:"f"
}
// const obj3={obj1 , obj2} object ke andar object

const obj3=Object.assign(obj1,obj2,obj5)

const obj4= Object.assign({},obj1,obj2,obj5);


const obj6= {...obj1, ...obj2, ...obj5}
// console.log(obj3);
// console.log(obj4);
// console.log(obj6)



const users=[
    {
        id: 1,
        email: "rishu@gmail.com"
    },
    {
        id:2,
        email: "ayush@gmail.com"
    },
    {
        id:3,
        email: "hello@ggmail.com"
    }
]

// console.log(users[1]);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course={
    coursename: "js Best",
    price:"999",
    courseInstructure: "Hitesh"
}

// course.courseInstructure;

const {courseInstructure : instructure} = course;

console.log(instructure);

// destructure
const navBar = ({company}) =>{
    console.log(company)
}   
navBar(company="Rishu");
navBar({company: "Rishu"});




