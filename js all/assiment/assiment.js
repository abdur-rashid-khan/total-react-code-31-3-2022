// qusen number one
function anaToVori(ana){
  let covertVori= ana / 16;
  return covertVori;
}
let output = 32;
console.log(anaToVori(output));



// qusen number two
function pandaCost(sigara,sumucha,gilafi){
  let sigaraPrice= 7 * sigara;
  let sumuchaPrice= 10 * sumucha;
  let gilafiPrice= 15 * gilafi;
  let totalPrice=sigaraPrice + sumuchaPrice + gilafiPrice;
  return totalPrice;
}
console.log(pandaCost(1,2,3));



// qusen number 3;
function picnicBudget(pepole){
  if(pepole <= 100){
    let count = pepole * 5000;
    return count;
  }else if(pepole <= 200){
    let forTwoHanded = 100 * 4000;
    let rest=pepole - 100;
    let forTwoHandedAndrest= rest * 4000;
    let total= forTwoHanded + forTwoHandedAndrest;
    return total;
  }else{
    let forThereHanded = 100 * 3000;
    let forThereHandedAndrest= 100 * 3000;
    let rest = pepole - 200;
    let restAnd = rest * 3000;
    let total = forThereHanded + forThereHandedAndrest + restAnd;
    return total;
  }
}
console.log(picnicBudget(302));




// qusen number 4
function oddFriend(friend){
  for (var i = 0; i < friend.length; i++){
    if(friend[i].length){
      let length=friend[i].length;
      if(length%2){
        let output=friend[i];
        return output;
      }
    }
  }
}
let allFriend = [
  'shihab',
  'farabi',
  'hasibul',
  'sumon',
  'rabbi',
  'mahamud'
];
console.log(oddFriend(allFriend));


// amar soril kharap thakar jono picaya geci allha rohomote er por theke time moto so kico korte parbo