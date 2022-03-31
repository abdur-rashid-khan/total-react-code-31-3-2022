// same value remove remove in array
let name = ['rashid' , 'roni', 'robin' , 'opu', 'opu', 'rashid', 'roni'];
function sameValue(names){
  let unique = [];
  for(let element of names){
    // console.log(element);
    if(unique.indexOf(element) == -1){
      unique.push(element);
    }
  }
  return unique;
}
let uniqueName=sameValue(name);
console.log(uniqueName);