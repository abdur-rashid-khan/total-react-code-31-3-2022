// get fast latter foods
const getItems=(itemsName)=>{
   const url=`https://www.thecocktaildb.com/api/json/v1/1/${itemsName}`;
   fetch(url)
   .then(res=>res.json())
   .then(data=>foodsData(data));
}
getItems('filter.php?a=Alcoholic');
// show display
let post=document.getElementById('post');
let header=document.getElementById('header');
const foodsData=(data)=>{
   let getSame=data.drinks;
   // console.log(getSame)
   let price = 200;
   getSame.forEach(element => {
      // 
      price=price+5;
      // 
      // console.log(element.strMeal);
      let col=document.createElement('div');
      col.classList.add('col-sm-12');
      col.classList.add('col-md-6');
      col.classList.add('col-lg-4');
      col.classList.add('col-xl-3');
      col.classList.add('py-4');
      // col.classList.add('shadow-lg');
      col.innerHTML=`
      <div class="card">
      <img src="${element.strDrinkThumb}" class="card-img-top" alt="${element.strMeal}">
      <hr/>
      <div class="card-body">
         <h5 class="card-title">${element.strDrink}</h5>
         <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut animi quis cum assumenda, aut repudiandae praesentium unde enim....</p>
         <strong>Price $${price}</strong>
      </div>
      </div>
      `;
      post.appendChild(col);
   });
}



let nonAlcoholic=document.getElementById('nonAlcoholic');
let gin=document.getElementById('gin');
let vodka=document.getElementById('vodka');
let cocktail=document.getElementById('cocktail');
let alcoholic=document.getElementById('alcoholic');

nonAlcoholic.addEventListener('click',()=>{
   getItems('filter.php?a=Non_Alcoholic');
   post.textContent='';
   header.textContent='Non Alcoholic';
   nonAlcoholic.style.color='blue';
   gin.style.color='rgb(114, 114, 114)';
   vodka.style.color='rgb(114, 114, 114)';
   cocktail.style.color='rgb(114, 114, 114)';
   alcoholic.style.color='rgb(114, 114, 114)';
})
gin.addEventListener('click',()=>{
   getItems('filter.php?i=Gin');
   post.textContent='';
   header.textContent='Gin';
   gin.style.color='blue';
   nonAlcoholic.style.color='rgb(114, 114, 114)';
   vodka.style.color='rgb(114, 114, 114)';
   cocktail.style.color='rgb(114, 114, 114)';
   alcoholic.style.color='rgb(114, 114, 114)';
})
vodka.addEventListener('click',()=>{
   getItems('filter.php?i=Vodka');
   post.textContent='';
   header.textContent='Vodka';
   vodka.style.color='blue';
   nonAlcoholic.style.color='rgb(114, 114, 114)';
   gin.style.color='rgb(114, 114, 114)';
   cocktail.style.color='rgb(114, 114, 114)';
   alcoholic.style.color='rgb(114, 114, 114)';
})
cocktail.addEventListener('click',()=>{
   getItems('filter.php?c=Cocktail');
   post.textContent='';
   header.textContent='Cocktail';
   cocktail.style.color='blue';
   nonAlcoholic.style.color='rgb(114, 114, 114)';
   gin.style.color='rgb(114, 114, 114)';
   vodka.style.color='rgb(114, 114, 114)';
   alcoholic.style.color='rgb(114, 114, 114)';
})
alcoholic.addEventListener('click',()=>{
   alcoholic.style.color='blue';
   nonAlcoholic.style.color='rgb(114, 114, 114)';
   gin.style.color='rgb(114, 114, 114)';
   vodka.style.color='rgb(114, 114, 114)';
})



// search 
let searchPost=document.getElementById('post');
let searchHeader=document.getElementById('header');

const searchInput=document.getElementById('searchInput');
const searchBtn=document.getElementById('searchBtn');


searchBtn.addEventListener('click',()=>{
   let searchValue=searchInput.value;
   // console.log(searchValue);
   if(searchValue==''){
      searchInput.style.border='solid 1px red';
   }else{
      let searchUrl=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchValue}`;
      fetch(searchUrl)
      .then(get => get.json())
      .then(searchBtn => searchData(searchBtn))
      
   }
})


const searchData = (data)=>{
   searchPost.textContent='';
   let searchValue=searchInput.value;
   searchHeader.innerText=`your rearch result ${searchValue}`;
   let getSame=data.drinks;
   // console.log(getSame)
   let price = 200;
   getSame.forEach(element => {
      // 
      price=price+5;
      // 
      // console.log(element.strMeal);
      let col=document.createElement('div');
      col.classList.add('col-sm-12');
      col.classList.add('col-md-6');
      col.classList.add('col-lg-4');
      col.classList.add('col-xl-3');
      col.classList.add('py-4');
      // col.classList.add('shadow-lg');
      col.innerHTML=`
      <div class="card">
      <img src="${element.strDrinkThumb}" class="card-img-top" alt="${element.strMeal}">
      <hr/>
      <div class="card-body">
         <h5 class="card-title">${element.strDrink}</h5>
         <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut animi quis cum assumenda, aut repudiandae praesentium unde enim....</p>
         <strong>Price $${price}</strong>
      </div>
      </div>
      `;
      searchPost.appendChild(col);
      searchInput.value='';
   });
}