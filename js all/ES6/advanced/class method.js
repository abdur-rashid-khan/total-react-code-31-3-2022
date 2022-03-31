class Suport{
   name;
   address;
   constructor(name,address){
      this.name=name;
      this.address=address;
   }
   localFunction(){
      console.log(this.name,' session is start');
   }
}
// localFunction()
const rashid=new Suport('Rashid khan','Dhaka,Bangladesh');
console.log(rashid);
const ami=new Suport('nirob khan','Rajbari,Bangladesh');
console.log(ami);
rashid.localFunction();