
/* Write the function named leapYear () and check whether it is 2023 or leap year. If it is a leap year, the function will return true and if it is not a leap year, it will return false.
 */


function leapYear(year){

    if(year %4==0 && year % 100!=0 || year %400==0){
        return true;
    }else{
        return false;
    }

}


const year=2024;

var result=leapYear(year);
console.log(result);