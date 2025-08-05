const Myobj ={
    js: 'javaScript',
    cpp: 'c++',
    rb: "rubby",
    swift: "Swif by apple"
}

for (const key in Myobj) {
    console.log(`${key} Shortcut is for ${Myobj[key]}`);
}

const Programming=['js','pyhton','swift','Rubby','cpp'];
for (const key in Programming) {
    console.log(Programming[key])
}


