// banking same work 
// esey 
/* const apBank=(woner)=>{
   let blance=0;
   return dipo=(dipo)=>{
      blance=blance + dipo;
      return blance;
   }
}
let bangk=apBank('rashid');
console.log(bangk(100));
console.log(bangk.blance);
console.log(bangk(300)); */



// hard 
const prBank=(name)=>{
   blance=0;
      return {
         dipo:dipoGit=(amount)=>{
            blance= blance + amount;
            return blance;
      },
      lifting:casOut=(amount)=>{
            blance= blance - amount ;
            return blance;
      }
   }
}

let prBanks=prBank('piya');
console.log(prBanks.dipo(120));
console.log(prBanks.dipo(80));
console.log(prBanks.blance);
console.log(prBanks.dipo(10));
console.log(prBanks.lifting(100));