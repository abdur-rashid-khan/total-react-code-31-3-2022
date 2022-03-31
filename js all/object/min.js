let  car ={
  name : 'BMW',
  model : 500,
  weight : "800kg",
  color : " white",
  start : function (){
    console.log("car has started");
    this.drive();
  },
  drive : function(){
    console.log(" car has driving ")
  },
}
car.start();