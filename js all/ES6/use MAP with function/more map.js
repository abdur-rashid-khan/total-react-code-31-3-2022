const porducts=[
   {name:'mobile',price:12000,color:'black'},
   {name:'light',price:100,color:'info'},
   {name:'bottol',price:50,color:'green'},
   {name:'cap',price:30,color:'red'},
];
const totalName=[];
// array function 
const loopForProducts=(porduct)=>{
   const porductNAme=porduct.name;
   return porductNAme;
}
totalName.push(porducts.map(loopForProducts));
console.log(...totalName);