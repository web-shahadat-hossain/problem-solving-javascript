/* Write a function. It will take three parameters. These three parameters will be the length of the three sides of a triangle. Now your job is to do some calculation inside the function and find out the area of the triangle. If the three sides of a triangle are given, find out from Google the formula for how to find the volume. */



function areaOfTriangle(a,b,c){

    let s=a+b+c/2;
    let area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area
}

const result = areaOfTriangle(13, 15, 17);

console.log(result);