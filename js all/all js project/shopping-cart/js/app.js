const plusPhoneBtn = document.getElementById('plusPhoneBtn');
const minusBtn = document.getElementById('minusBtn');
const phoneNumberInput=document.getElementById('phoneInput');
const phonePrice = document.getElementById('phonePrice');

// case 
const caseInputNumber =document.getElementById('caseNumber');
let displayCaseNUmber = document.getElementById('displayCaseNUmber');

function product(productInput,productPrice,phonePriceShow,condition){
      if(condition == true){
         let productInputValue=parseInt(productInput.value)+1;
         productInput.value=productInputValue;
         let PerproductPrice=productPrice;
         let totalPhonePrice=PerproductPrice * productInputValue;
         phonePriceShow.innerText=totalPhonePrice;
      }else if(condition == false){
         let productInputValue=parseInt(productInput.value)-1;
         if(productInputValue < 0 != true){
            productInput.value=productInputValue;
            let PerproductPrice=productPrice;
            let totalPhonePrice=PerproductPrice * productInputValue;
            phonePriceShow.innerText=totalPhonePrice;
         }else{
            alert('not allow this value')
         }
      }
      
}


// subtotal 
let subTotalDisplay=document.getElementById('subtotal');
let totalTax=document.getElementById('totalTax');
let totalBail=document.getElementById('totalBail');
function subtotal(){
   let newPhonePrice=parseInt(phonePrice.innerText);
   let newCahePrice=parseInt(displayCaseNUmber.innerText);
   let subtotal= newPhonePrice + newCahePrice;
   subTotalDisplay.innerText=subtotal;
   //total tax
   let totalTaxCount=subtotal /13;
   totalTax.innerText=Math.round(totalTaxCount);
   // total bail
   let totalBailCount=subtotal + totalTaxCount;
   totalBail.innerText=Math.round(totalBailCount);
}

plusPhoneBtn.addEventListener('click',function(){
   let productPrice =1219;
   product(phoneNumberInput,productPrice,phonePrice,true);
   subtotal();
});


minusBtn.addEventListener('click',function(){
   let productPrice =1219;
   product(phoneNumberInput,productPrice,phonePrice,false);
   subtotal();
})


// case case Minus Btn
document.getElementById('caseMinusBtn').addEventListener('click',function(){
   let casePrice=59;
   product(caseInputNumber,casePrice,displayCaseNUmber,false);
   subtotal();
});


// case case plus Btn
document.getElementById('casePlussBtn').addEventListener('click',function(){
   let casePrice=59;
   product(caseInputNumber,casePrice,displayCaseNUmber,true);
   subtotal();
})