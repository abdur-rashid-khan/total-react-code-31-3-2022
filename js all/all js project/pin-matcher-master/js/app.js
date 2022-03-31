// pin maker 
const pinmaker=document.getElementById('pin-maker');
function pin(){
   let fastMakepin = Math.round(Math.random()*10000);
   let newPinMaker=fastMakepin+"";
   if(newPinMaker.length==4){
      return fastMakepin;
   }else{
      // console.log(newPinMaker+ "3 number pin "+newPinMaker);
      return pin();
   }
}
pinmaker.addEventListener('click',function(){
   // console.log(pin());
   let showCreatPin=document.getElementById('showCreatPin');
   let pushPin=pin();
   showCreatPin.value=pushPin;
});
// press kebord
let praseKey = document.getElementById('praseKey');
praseKey.addEventListener('click',function(e){
   let displayButtonNUmber = document.getElementById('displayButtonNUmber');
   let getdisplayValue=displayButtonNUmber.value;
   let keyValue=e.target.innerText;
   if(!isNaN(keyValue)){
      let showDisplay=getdisplayValue + keyValue;
      displayButtonNUmber.value=showDisplay;
   }
   if(keyValue=="C"){
      displayButtonNUmber.value='';
   }
})
// chaking password
let error =document.getElementById('error');
let success =document.getElementById('success');
let chakingBtn=document.getElementById('button');
chakingBtn.addEventListener('click',function(){
   let showCreatPin=document.getElementById('showCreatPin');
   let getpin=showCreatPin.value;
   let displayButtonNUmber = document.getElementById('displayButtonNUmber');
   let getButtonNumber=displayButtonNUmber.value;
   if(getpin==getButtonNumber){
      error.style.display='none';
      success.style.display='block';
   }else{
      error.style.display='block';
      success.style.display='none';
   }
})