// Keys, values, entries, delete, seal, freeze useing
const names ={
   name:'rashid',
   age:21,
}


// access all keys
let allkeys=Object.keys(names);
// console.log(allkeys);

// access all value in object 
let accessAllvalue=Object.values(names)
// console.log(accessAllvalue);

// access all kew and value
let keysAndValue=Object.entries(names);
console.log(keysAndValue);



Object.seal(names);
// Object.freeze(names);
names.age=20;
// console.log(names.age);
// console.log(names);