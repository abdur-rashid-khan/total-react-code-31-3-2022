// // leap year 
// function leapYear(year){
//   let leap=year % 4;
//   if(leap === 0){
//       return console.log( " Yes, " + year + " is leap year");
//   }else{
//     return console.log( " No, " + year + " is not leap year"); ;
//   }
// }
// let NumberOfYear=2024;
// console.log(leapYear(NumberOfYear));




// leap year with 2100
function leapYear(year){
  let leap=year % 4;
  if(leap === 0){
    // console.log( " yes, " + year + " is  leap year");
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }else{
    // console.log( " No, " + year + " is not leap year");
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }
}
let NumberOfYear=2100;
console.log(leapYear(NumberOfYear));