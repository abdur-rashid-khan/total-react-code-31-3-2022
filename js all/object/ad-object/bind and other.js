// using other function with bind and her semelear function 
//1. bind
// 2. call 
// 3. apply


const robbin={
   name:'Arain Robin ',
   age: 22,
   live: 'malayshia',
   cash:10000,
   treat:function (treat){
      this.cash=this.cash-treat;
      console.log(this);
      return this.cash;
   }
}


const opu={
   name:'Hasibul hassan',
   age:21,
   live:'Bangladesh',
   cash:5000,
}

// tother friends 
const summon={
   name:'summon hossen',
   age:21,
   live:'Bangladesh',
   cash : 4000,
}

// let output = robbin.treat(1000);
// console.log(output);

// bind satart here
// robbin.treat(1000);

/* const FunOup=robbin.treat.bind(opu);
FunOup(4000);
console.log(opu) */

// summon
/* const summonFun= robbin.treat.bind(summon);
summonFun(2000);
console.log(summon); */


// call funtion using here
robbin.treat.call(opu,2000);
robbin.treat.call(robbin,1000);
robbin.treat.call(summon,500);


// useing apply function here 
robbin.treat.apply(opu,[1000]);
robbin.treat.apply(summon,[3000]);
robbin.treat.apply(robbin,[7000]);


// dsciption  is call function is better 
