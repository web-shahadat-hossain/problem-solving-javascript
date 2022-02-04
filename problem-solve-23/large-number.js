/* This can be a little tricky. An array will contain many numbers. Your job is to check the numbers one by one. And if the number is a positive number. That is, if it is greater than zero or zero, then place them in an array. And if the number is negative. Then the loop will stop. And as many positive numbers as were found before closing the loop. They will return. */


function positive_number_check(arr){
        const newArr=[];

        for(let numbers of arr){
           if(numbers>0){
                newArr.push(numbers)
           }
        }

        return newArr;
}



const arr=[10, 8, 36, 3, -0, -1, 55, -1884, -7, 10, 66, 4, 32]
console.log(positive_number_check(arr));