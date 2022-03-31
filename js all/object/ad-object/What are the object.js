const friend={
   blance:5000,
   name:'summon hossen',
   age:20,
   subject:[
      'english',
      'bangla',
      'math',
   ],

   name:'rashid',
   age:21,
   subject:[
      'english',
      'bangla',
      'math',
   ],

   name:'hasibul hasan',
   age:21,
   subject:[
      'english',
      'bangla',
      'math',
   ],

   richMan:function(){
      console.log(`${this.name} is rich man`)
   },

   toor: function (num){
      let fastNUm=this.blance;
      let result=fastNUm - num;
      return result;
   }
}

friend.richMan();
let string=friend.toor(1000);
console.log('total cost is ' + string);