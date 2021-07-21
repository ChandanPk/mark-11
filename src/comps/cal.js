var readlineSync = require('readline-sync');

const num1 = parseInt(readlineSync.question("Please enter your first no:  "));
const operator = readlineSync.question("Please select a operator ( '*' , '/' , '-' , or '+' )  ? ");
const num2 = parseInt(readlineSync.question("enter the second number: "));

console.log(operator)
console.log(typeof operator)


const calculater = (num1, num2, operator)=> {
    switch(operator){
        case '+': 
            return num1 + num2;
            break;
        
        case '-':
            return num1 - num2;
            break;

        case '/':
            return num1 / num2;
            break;

        case '*':
            return num1 * num2;
            break;
        
        default:
            console.log("Invalid input, loll");

    }
} 

console.log("Answer: " + calculater(num1 + num2))

