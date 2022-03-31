// function num(i){
//   if(i > 10){
//     return;
//   }
//   console.log(i);
//   num(++i);
// }
// num(1)


// sam with recation
// let num=0;
// for(i=0;i <= 5; i++){
//   num =num+i;
// }
// console.log(num);


// function sum(i){
//   if(i==1){
//     return 1;
//   }
//   return i + sum(--i);
// }
// console.log(sum(5));



// fatorial
// let fatsam =1;
// for(i=5; i >= 1; --i){
//   fatsam = fatsam * i;
// }
// console.log(fatsam);

// fatorial with number 
/* function sam(fatsum){
  if(fatsum == 1){
    return 1;
  }
  return fatsum * sam(--fatsum);
}
console.log(sam(4)); */






// search in data in array with funtion and for of
/* const products =[
  {name : 'iphone','price':90000},
  {name : 'samsung phone','price':70000},
  {name : 'i smart watch','price':8000},
  {name : 'asus laptop','price':80000},
  {name : 'note book laptop','price':50000},
  {name : 'mi watch','price':10000},
];
function searchProducts(products,productText){
  for(const product of products){
    if(product.name.includes(productText)){
      console.log(product.name);
    }
  }
}
searchProducts(products,'phone'); */



// brack use 
/* const products=[
  {name : 'iphone','price':90000},
  {name : 'samsung phone','price':70000},
  {name : 'i smart watch','price':8000},
  {name : 'asus laptop','price':80000},
  {name : 'note book laptop','price':50000},
  {name : 'mi watch','price':10000},
];
function bracksFun(products){
  for(const product of products){
    if(product.price < 10000){
      break;
    }
    console.log(product);
  }
}
skip(products); */




// using continue funtion;
const products=[
  {name : 'iphone','price':90000},
  {name : 'samsung phone','price':70000},
  {name : 'i smart watch','price':8000},
  {name : 'asus laptop','price':80000},
  {name : 'note book laptop','price':50000},
  {name : 'mi watch','price':10000},
];
function skip(products){
  for(const product of products){
    if(product.price < 10000){
      continue;
    }
    console.log(product);
  }
}
skip(products);