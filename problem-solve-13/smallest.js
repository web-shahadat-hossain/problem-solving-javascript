/* Write a code. Which allows you to find the smallest number in an array. */


function smallNumber(arr){
    let smallestNumber=arr[0];
   for(let numbers of arr){
       if(smallestNumber>numbers){
           smallestNumber=numbers;
       }
   }
   return smallestNumber;
}

let number=[10, 55, 6, 77, 64, 65, 3, 54, 46];

let result=smallNumber(number);
console.log(result);



