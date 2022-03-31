/* // grguments with number
function totalNUmber(num1,num2){
   let sam=0;
   for(const  numbers of arguments){
      sam=sam + numbers;
   }
   return sam;
}
console.log(totalNUmber(12,12,21));



// grgument with string 
function allString(string){
   let result='';
   for(const string of arguments){
      result = result + string + ' ';
   }
   return result;
}
console.log(allString('abdur','rashid','khan')) */
const str= 'I love coding more than eating.';
console.log(str.slice(2,6));