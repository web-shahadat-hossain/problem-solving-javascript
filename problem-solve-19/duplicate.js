/* Remove duplicate items from an array? */




function removeDuplicateItems(studentsNames){

    const students=[];

    for(let i=0; i<studentsNames.length; i++){
       
            if(students.indexOf(studentsNames[i])==-1){
                students.push(studentsNames[i])
            }
                
            
       
    }
    console.log(students);
}


const studentsNames=["Masum Billah", "Md Hridoy Sikder", "Rakibul Islam", "Tamim", "Md Hridoy Sikder", "Rakibul Islam", "Abu Taher", "Masum Billah", "Ibrahim", "Arafat", "Abu Taher", "Tamim", "Arafat"];


const result= removeDuplicateItems(studentsNames);
console.log(result);