
/* Write a function that you will give the hour as the input parameter. And he will convert that hour into minutes and return minutes.
 */


function hourseToMinit(hours){
    let minits=hours*60;
    return minits;
}


const hours=Number(prompt("Enter Your hours"));

const result=hourseToMinit(hours);
console.log(result);