//Immediately Invoked Function Expression

(function IIFE() {
    console.log('Function Invoked');
})(); // this semicolon is necessary to end the scope 

( (name) =>  {
    console.log('Function Invoked second', name);
})('arrow')

// ()()  The first parenthesis is the function definition and the second is the fucntionn execution call