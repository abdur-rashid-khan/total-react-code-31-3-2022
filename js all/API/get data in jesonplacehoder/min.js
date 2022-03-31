// get placeholder  data
document.getElementById('dataLoad').addEventListener('click',()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(getData=>getData.json())
   .then(data=> getTotalUserData(data))
})

// other function send data
function getTotalUserData(getData){
   console.log(getData);
}

document.getElementById('showPost').addEventListener('click',()=>{
   // one more 
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(getdata => getdata.json())
   .then(data => allData(data));


   function allData(data){
      console.log(data);
   }
})




