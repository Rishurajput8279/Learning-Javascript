const heros=["thor","spiderMan","IronMan"]

const hero2=["SuperMan","flash","batMan"]

// heros.push(hero2)
// console.log(heros[3])

// const allHero=heros.concat(hero2)

// console.log(allHero)

const all_new_heros=[...heros, ...hero2]
console.log(all_new_heros)



const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Rishu"))
console.log(Array.from("Rishu"))
console.log(Array.from({name: "Rishu"})) // interesting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))


