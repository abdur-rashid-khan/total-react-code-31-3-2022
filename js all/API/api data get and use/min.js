// friends asset deltels 
const friends = [
   {name:'Hashibul hasan opu',phone:'samsung',},
   {name:'simmon hossin', phone:'samsung'},
   {name:'Arin Robin ', phone:'One Plus'},
   {name:'Rashid Khan ',phone:'Huawei'}
];
// for(const friend of friends){
//    console.log(`${friend.name} and her phone name is ${friend.phone}`)
// }

let output=JSON.stringify(friends);
console.log(output);
console.log('need brack ');
let show=JSON.parse(output);
console.log(show);