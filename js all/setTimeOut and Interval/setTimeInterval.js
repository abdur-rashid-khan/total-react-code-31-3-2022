// setTimeInterval 

/* const stringOfSetInterval=()=>{
   console.log(1);
}
let result=setInterval(stringOfSetInterval,2000);
console.log(result); */


// set and stop 

/*    function move() {
      let n = 0;
      let i = setInterval(frame, 1000);
      function frame() {
      if (n === 100) {
         clearInterval(i);
      } else {
         console.log(n++);
      }
      }
   } 
   move() */
   const counts=()=>{
      let number=1;
      let i = setInterval(numberFun=()=>{
         if(number == 51){
            clearInterval(i);
            console.log('stoped')
         }else{
            console.log(number++)
         }
      },100)
   }
   counts();