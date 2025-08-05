// for of
const Myarr=[1,2,3,4];
for (const i of Myarr) {
    // console.log(i);
}


// maps

const map = new Map()
map.set('IN',"india")
map.set('FR',"France")
map.set('USA',"UnitedState of America");
map.set('IN',"india")


// console.log(map);

for (const [key,value] of map) {
    // console.log(key + " " + value );
}


// forin loop is not working in the map map is not a iterable obj 
for (const key in map) {
    console.log(key);
}


// forof se Object iterate nahi hote hai
// const Myobj= {
//     'game1': "NFS",
//     'game2': "PUBG"
// }
// for (const [key,value] of Myobj) {
//     console.log(key + " " + value );
// }

// Myobj is not iterable

