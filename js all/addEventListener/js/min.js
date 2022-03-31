const bgcolor=document.getElementById('bgcolor');
function click1(){
  bgcolor.style.backgroundColor="yellow";
}
const greenColor =document.getElementById('greenColor');
greenColor.addEventListener('click',function(){
  bgcolor.style.backgroundColor="green";
})
const redBg =document.getElementById('redBg');
redBg.addEventListener('click',function(){
  bgcolor.style.backgroundColor='red';
})
// working start input fil
const input= document.getElementById('inputText');
const showBtn = document.getElementById('showBtn');
const showText =document.getElementById('showText');
showBtn.addEventListener('click',function(){
  showText.innerText=input.value;
  input.value='';
})

const list = document.getElementById('list');
const li1=document.createElement('li');
list.appendChild(li1);
const p=document.createElement('p');
p.innerText='bangladesh is nice place in the world';
li1.appendChild(p);
const li2=document.createElement('li');
list.appendChild(li2);
const a =document.createElement('a');
a.setAttribute('href','#');
a.innerText='click';
li2.appendChild(a);
a.style.textDecoration='none';
a.style.color='#000';
