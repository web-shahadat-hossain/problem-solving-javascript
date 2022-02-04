/* Whether a number is prime number. Write a function to check that. */

function primeNumber(number){
for(let i=2; i<number; i++)
    if(number % i===0){
        return false;
    }
        return true;
    
        

}


let number=13;

console.log(primeNumber(number));