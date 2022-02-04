/* Write another function whose name. The name of the function will be paperRequirements. The parameters of this function will be three parameters. The first parameter will be you first
How many copies of the book do you want to print? The second parameter will be how many copies of the second book you want to print. And the third parameter will be how many copies of the third book you want to print. That is, how many copies of a book will be printed will be taken as a parameter.
Take good care this time.
It will take 100 pages to print the first book
It takes 200 pages to print a second book
It will take 300 pages to print the third book
Now your job is to write down the function called paperRequirements. Calling that function will tell you how many copies of a book it will take as a parameter. And the function will calculate and tell you the total amount of paper you need.
The number will return as the answer. */





function paperRequirements (firstBokk, secondBook, thirdBook){

    const totalPages =firstBokk+secondBook+thirdBook;

    return totalPages;

}

console.log(paperRequirements(20, 55, 33));