// array value access 
const product =[
   'Amazon Advertising',
   'Digital Marketing',
   'Free Advertising Analysis',
   'Free',
   'Marketplaces',
   'Customer Success Stories. Free'
];

// used indexof
let search='Free';
let newArray=[];
for(const products of product){
   if(products.toLowerCase().indexOf(search.toLowerCase()) !=-1){
      newArray.push(products);
   }
}
console.log(newArray);


// used indexof
/* let search="stories";
let newArray=[];
for(const products of product){
   if(products.toLowerCase().includes(search.toLowerCase()) !=-1){
      newArray.push(products);
   }
}
console.log(newArray); */



// start with 
/* let search="free";
let newArray=[];
for(const products of product){
   if(products.toLowerCase().startsWith(search.toLowerCase()) !=-1){
      newArray.push(products);
   }
}
console.log(newArray); */

// end with 
/* let search="free";
let newArray=[];
for(const products of product){
   if(products.toLowerCase().endsWith(search.toLowerCase()) !=-1){
      newArray.push(products);
   }
}
console.log(newArray); */



// exta
// for(const products of product){
//    let Free ='Free';
//    if(products==Free){
//       console.log(products);
//    }
// }
