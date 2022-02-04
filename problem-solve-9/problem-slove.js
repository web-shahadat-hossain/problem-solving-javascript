/* Will calculate the interest. Just how to do the calculation. That will make you think. There is no need to worry about whether the interest is good or bad. If you just have a formula, try to figure out how to write it in code. */



function calculateInterest(total, year, rate){

    let interest=rate/100+1;
    let totalInerest=total*Math.pow(year, interest);
    return totalInerest.toFixed(4);
}

console.log(calculateInterest(300,2, 2));