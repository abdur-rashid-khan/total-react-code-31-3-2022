// 
const bottol={
   stdId:1,
   stdGroup:'humanti',
   regluerStad:true,
   bottulAbaltit:[
      {fastName:"Rashid",lastName:'khan',age:20},
      {fastName:"Hasibul",lastName:'Hassan Opu',age:20},
      {fastName:"Summon",lastName:'Hossin',age:20},
      {fastName:"Rabbi",lastName:'Hosin',age:18},
      {fastName:"Mahamud ull",lastName:'Hassan',age:17},
   ],
   suject:['Bangla','English','Math'],
   // per month active in collage
   active:function(activeNumber){
      let totalActive= 30 - activeNumber;
      console.log(totalActive);
      return totalActive;
   }
}  


/* let output=bottol.active(10);
bottol.suject.forEach(element => {
   console.log(element);
}); */


// just use for object
for(const item in bottol){
   console.log(item);
}