//We have to create For Loop. I declared that the variable begins from 1 and so long the variable is less
// or equal to 100 the increment is 1 every time
//The first condition, if remainder division the variable by 7 and 5 at the same time is equal to 0. 
// Print the string “Marko polo". 
//Then check if remainder division the variable by 7 is equal to 0. Print the string “polo". 
//Then check if remainder division the variable by 5 is equal to 0. Print the string “Marko". 
//Other than that, print the variable itself


for (var i=1; i<=100; i++){
    if((i % 7 )== 0 && (i% 5) ==0 ){
        console.log("Marco Polo")
    } else if((i % 7)== 0) {
        console.log("Polo")
    } else if ((i% 5) ==0 ){
        console.log("Marco")
    }  else {
        console.log(i)
    }

}