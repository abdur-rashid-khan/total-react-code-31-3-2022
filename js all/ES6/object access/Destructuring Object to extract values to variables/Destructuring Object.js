/* // Destructuring
const mobile = {
   name:"Iphone",price:70000,brand:"apple",
   name:'x128',price:9000,brand:'infinix'
}
// console.log(mobile.name);
let {name,price}=mobile;
console.log(name,price,brand); */


// new array 
const newArray = {
   name:'Gp',
   ceo:{id:1,name:"rashid",food:"fuchka"},
   web:{work:'website development',employear:22,frameWork:'react'},
}
const {food , name}=newArray?.na?.ceo;
const {frameWork,employear}=newArray?.web;
console.log(name , food , frameWork);

//  " ? " use hoy error handeing korar juno 
// console.log(newArray?.na?.ceo);