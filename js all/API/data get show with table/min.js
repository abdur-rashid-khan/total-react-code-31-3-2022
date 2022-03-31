// get and use jesonplaceholder
fetch('https://jsonplaceholder.typicode.com/users')
.then(getData => getData.json())
.then(data=> displayData(data))


// call function and push data in table
function displayData(data){
   let selectTbody=document.getElementById('showData');
   for(const user of data){
      let getId=user.id;
      let getName=user.name;
      let getEmail=user.email;
      let getCity=user.address.city;
      let zipcode=user.address.zipcode;
      let tr=document.createElement('tr');
      selectTbody.appendChild(tr);

      let createElement =document.createElement('th');
      createElement.innerText=`${getId}`;
      selectTbody.appendChild(createElement);
      // 
      let nameShow =document.createElement('th');
      nameShow.innerText=`${getName}`;
      selectTbody.appendChild(nameShow);
      // 
      let getEmails =document.createElement('th');
      getEmails.innerText=`${getEmail}`;
      selectTbody.appendChild(getEmails);
      // 
      let city =document.createElement('th');
      city.innerText=`${getCity}`;
      selectTbody.appendChild(city);
      // 
      let code =document.createElement('th');
      code.innerText=`${zipcode}`;
      selectTbody.appendChild(code);
   }
}