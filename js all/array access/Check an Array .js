function bestFriends(friends){
   if(Array.isArray(friends)==false){
      return 'Place provid friends name';
   }
   let friendsIndex=friends[0];
   for(const friend of friends){
      if(friend.length > friendsIndex.length){
         friendsIndex=friend;
      }
   }
   return friendsIndex;
}
let person=['opu','rabbi','summon','arin robin'];
console.log(bestFriends(person));



/* function friendsName(friends){
   for(const friend of friends){
      let targetFriend ='rabbi';
      if(friend==targetFriend){
         console.log(friend);
      }
   }
}
let person=['opu','rabbi','summon','arin robin'];
friendsName(person); */