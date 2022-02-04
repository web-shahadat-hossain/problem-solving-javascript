/* 1. Will give you Celsius as the input of the function. You will calculate and convert the temperature to Fahrenheit and return its output.

2. In the same way will do the reverse calculation. So if you give the temperature as Fahrenheit, it will convert it to Celsius and give the output. */




// calculate to Fahrenheit
function  calculateToFahrenheit(cels){

    let fahrenheit=(cels * 9/5) + 32;
    return fahrenheit;
}
let calculate=10;
let result= calculateToFahrenheit(calculate);
console.log(result); 


// Fahrenheit to calculate
function  fahrenheitToCalculate(fah){
    let  calculate=(fah-32) * 5/9;
    return  calculate.toFixed(4);
}

let fahrenheit=15;
let result2= fahrenheitToCalculate(fahrenheit);
console.log(result2);