
// An array has many numbers. Write a program to find the second largest number from those numbers. Do a Google search if needed. Then try to understand by looking at the search results.


function second_Largest(numbers){
    let mix=Math.max(...numbers);
    numbers.splice(numbers.indexOf(mix),1)
    let secondLargest=Math.max(...numbers);
    return secondLargest;
}

let numbers=[5, 7, 77, 33, 55, 68, 33, 44, 55]
let result=second_Largest(numbers);
console.log(result);