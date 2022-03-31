// deposit 
let depositBtn=document.getElementById('depositBtn');
let depositInput =document.getElementById('depositInput');
let dipogitAmount=document.getElementById('dipogitAmount');
let balance=document.getElementById('balance');

function calcouletion(fastperamiter,secoundperamiter,thirdperamiter,adds){
   let depositA=fastperamiter.value;
   let dipogitAmountPlace =secoundperamiter.innerText;
   const newDeposit =secoundperamiter.innerText=parseFloat(depositA) + parseFloat(dipogitAmountPlace);
   secoundperamiter.innerText=newDeposit;
   if(!adds==false){
      // balance
      let newbalance=thirdperamiter.innerText;
      // console.log(newbalance);
      let totalBalance=parseFloat(newbalance) - parseFloat(depositA) ;
      // console.log(totalBalance);
      thirdperamiter.innerText=totalBalance;
      fastperamiter.value='';
      return thirdperamiter;
   }else{
      balance
      let newbalance=thirdperamiter.innerText;
      // console.log(newbalance);
      let totalBalance=parseFloat(depositA) + parseFloat(newbalance);
      // console.log(totalBalance);
      thirdperamiter.innerText=totalBalance;
      fastperamiter.value='';
      return thirdperamiter;
   }
}
depositBtn.addEventListener('click',function(){
   /* let depositA=depositInput.value;
   let dipogitAmountPlace =dipogitAmount.innerText;
   const newDeposit =dipogitAmount.innerText=parseFloat(depositA) + parseFloat(dipogitAmountPlace);
   dipogitAmount.innerText=newDeposit;
   // balance
   let newbalance=balance.innerText;
   // console.log(newbalance);
   let totalBalance=parseFloat(depositA)+parseFloat(newbalance);
   // console.log(totalBalance);
   balance.innerText=totalBalance;
   depositInput.value=''; */
   calcouletion(depositInput,dipogitAmount,balance,true);
})

// Withdraw
let withdrawBtn =document.getElementById('withdrawBtn');
let withdraw =document.getElementById('withdraw');
let withdInput =document.getElementById('withdInput');
// 
withdrawBtn.addEventListener('click',function(){
   calcouletion(withdInput,withdraw,balance,true);


   // let newWithdraw=withdraw.innerText;
   // let withdValue=withdInput.value;
   // let showWithd=newWithdraw.innerText=parseFloat(newWithdraw) + parseFloat(withdValue);
   // withdraw.innerText=showWithd; 


   let increementvalue=withdInput.value;
   let mainblance=balance.innerText;
   // let showBlanche=parseFloat(mainblance) - parseFloat(increementvalue) ;
   // // console.log(showBlanche)
   // balance.innerText=showBlanche;
   // withdInput.value='';
   calcouletion(increementvalue,mainblance,withdInput,false);
})