/* Write a function that you will give as a number input parameter. And he will return that factorial. */

function factorial(number){
        let factorialNumber=1;
    for(let x=1; x<=number; x++){
        factorialNumber=factorialNumber*x;
    }

    return factorialNumber;
}

const number=6;

let result=factorial(number);

console.log(result);