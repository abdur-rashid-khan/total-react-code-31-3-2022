class team{
   name;
   address;
   constructor(name,address){
      this.name=name;
      this.address=address;
   }
}
class Suport extends team{
   time;
   constructor(name,address,time){
      super(name,address);
      this.time=time;

   }
   localFunction(){
      console.log(this.name,' session is start',this.time);
   }
}

// localFunction()
const rashid=new Suport('Rashid khan','Dhaka,Bangladesh','11:30');
console.log(rashid);
const ami=new Suport('nirob khan','Rajbari,Bangladesh','11-30');
console.log(ami);
rashid.localFunction();
