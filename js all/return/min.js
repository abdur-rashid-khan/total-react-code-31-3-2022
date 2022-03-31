function fast(taka){
  console.log('book buy buject' , taka);
  let bookPrice= 100;
  let bookCount= taka / bookPrice ;
  return bookCount;
}
let  money=200;
let books=fast(money);
console.log("Total books" , books)
