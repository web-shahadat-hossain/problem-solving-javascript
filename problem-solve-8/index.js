/* Simple is to write a function. Which will be called feetToInch and this function will take feet as input and return inch. That is, if you call this function a fit, it will tell you how many inches it is as a return.
 
  Write a function with the exact name of the function centimeterToMeter. In this function, someone will give centimeter as input and convert that centimeter to meter and return the result. */



  // feet To Inch

  function  feetToInch(feet){
    let inch=feet*12;
    return inch;
  }

  let feet=21;
  let result= feetToInch(feet);
  console.log(result + "inch");


  // Centimeter To Meter

  function  centimeterToMeter(centimeter){
    let meter=centimeter/100;
    return meter;
  }

  let centimeter=10;
  let result2= centimeterToMeter(centimeter);
  console.log(result2 + "meter");