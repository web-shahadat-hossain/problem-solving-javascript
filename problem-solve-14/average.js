
/* Write a function. Will take an array as input in that function. That array will contain many numbers. Your job is to get as many numbers as there are in the array to take input. That number will bring out the average of Gul. Then give that as the return of the average function. Think about it. Try to understand. Try it. See if you can.
 */


function average(numbers){

    let averageNumber=0;
    let count=0;

    for(let i=0; i<numbers.length; i++){
        count++;
       averageNumber=averageNumber+numbers[i];
    }

    return averageNumber/count;
 
    
}


let numbers=[10, 15, 20, 25, 30, 50];

let result=average(numbers);

console.log(result);