/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  let x = usersArray.find(function(val){
    return val['username']===username
  })

  return x
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  
  usersArray.map(function(e){console.log(e)})
  let x = usersArray.findIndex(function(val){
    return val['username'] === username
  })
  if(x === -1){
    console.log("undefined")
    return undefined;
  }

  let hold = usersArray[x]
  
  let left = usersArray.splice(0,x)
  let right = usersArray.splice(0,x+1)
  usersArray = left.concat(right)

  return hold

}