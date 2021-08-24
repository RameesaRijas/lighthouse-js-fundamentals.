
//function to check whether number is odd or even
function isOdd(num){
  if(num % 2 !== 0){
    return true;
  }
  else{
    return false;
  }
}

//function call
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
