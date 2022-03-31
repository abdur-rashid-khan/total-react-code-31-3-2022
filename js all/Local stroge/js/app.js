


let inputText =document.querySelector('#inputText');
function addBtn(){
   let getValue=inputText.value;
   displayData(getValue);
   addProducts(getValue);
}

inputText.addEventListener("keypress", function(e) {
   if (e.key === "Enter") {
      addBtn();
      e.preventDefault();
   }
});

// display all products 
const displayData=(data)=>{
   const allItems=document.querySelector('#all-items');
   let il=document.createElement('li');
   il.innerText=data;
   allItems.append(il);
   inputText.value='';
}

// set storage 
const addProducts = id => {
   let products={};
   let checking = localStorage.getItem('products');
   if(checking){
      products=JSON.parse(checking);
   }
   // add
   let addProducts=products[id];
   if(addProducts){
      let newData = addProducts + 1;
      products[id]=newData;
   }else{
      products[id]=1;
   }
   localStorage.setItem('products',JSON.stringify(products));
};