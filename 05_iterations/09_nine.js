// const myNum = [1, 2, 3, 4];

// const newNum=myNum.reduce((acc,curval)=>{
//     console.log(`acc:- ${acc} and currVal:- ${curval}`);
//     return acc + curval
// },2)


// const newNum=myNum.reduce((acc,curval)=> (acc + curval,)2 )

// console.log(newNum)




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total=shoppingCart.reduce( (acc,curVal)=> (acc+curVal.price),0);
console.log(total);


