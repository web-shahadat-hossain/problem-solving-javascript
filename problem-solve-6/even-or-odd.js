
/* Check whether your age is odd or even number with a function. If you give that function a number as a parameter, the function will return true if the number is Even and false if Odd.
 */


function eventOrOddNumber(year){
    if(year %2==0){
        return true;
    }else{
        return false;
    }
};

const year=18;

let result=eventOrOddNumber(year);
console.log(result);

