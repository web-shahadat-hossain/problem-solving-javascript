// first way

for(let i=1; i<=6; i++){
    const percentGrade=Number(prompt("Enter the number you got"));
    
if(percentGrade>=101 || percentGrade<=0){
    console.log("Sorry, these numbers are not grade");
}
else if(100>=percentGrade && 80<=percentGrade){
    console.log("Md Masum Billah  A+", "GPA: 5:00");
}
else if(79>=percentGrade && 70<=percentGrade){
    console.log("Md Abu Taher  A-", "GPA: 4:00");
}
else if(69>=percentGrade && 60<=percentGrade){
    console.log("Md Ibrahim  A", "GPA: 3:00");
}
else if(59>=percentGrade && 50<=percentGrade){
    console.log("Rakib  B", "GPA: 3.3");
}
else if(49>=percentGrade && 40<=percentGrade){
    console.log("Arafat  C", "GPA: 2.50");
}
else if(39>=percentGrade && 33<=percentGrade){
    console.log("Shahadat  D", "GPA: 2.00");
}else{
    console.log("F");
}
}


// second way

let studentNumber=80;
switch(true){
    case (100>=studentNumber && 80<=studentNumber):
         console.log("A+");
    break;
    case(79>=studentNumber && 70<=studentNumber):
         console.log("A-");
    case (69>=studentNumber && 60<=studentNumber):
         console.log("A");
     break;  
     case (59>=studentNumber && 50<=studentNumber):
        console.log("B");
    break;
    case (49>=studentNumber && 40<=studentNumber):
        console.log("C");
     break;
     case(39>=studentNumber && 33<=studentNumber):
     console.log("D");
     break;
     default:
        console.log("F");   
}