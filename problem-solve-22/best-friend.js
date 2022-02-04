
/* Write a function. The name of this function will be bestFriend then take an array as the input parameter in that function. That array will contain the names of all your friends. Now your job is to return the name of the friend whose name is the biggest. In this case you have to return the name i.e. friend's name (string). */

function bestFriends(friends){
    let myBestFriend=friends[0];
    for(let friend of friends){
       if(myBestFriend.length<friend.length){
           myBestFriend=friend;
       }
    }

    return myBestFriend;

}


let friends=["Md Masum Billa", "Rakibul Islam", "Abu Taher", "Ibrahim", "Mihadul Islam Mihad", "Hridoy"]

console.log(bestFriends(friends));