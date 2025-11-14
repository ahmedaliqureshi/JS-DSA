// to create the simple calculator we need to use if else condtion and 
// give the user choiceses to perform what kind of operations 

console.log('enter any 2 numbers to perform operation:\n'); 
let number1= parseFloat(prompt('enter 1st number: '));
let number2= parseFloat(prompt('enter 2nd number: '));

//then we are going to ask the user to enter the kind of operation 
// that they want to perform 
// console.log('enter the operation that you want to perform:\n 1.ADD\n 2.SUB\n3.MUL\n4.DIVD\n':); 

const operator = prompt('enter operator (either +,-,*,/): '); 
if(operator == '+')
{
    let ADD= number1+number2; 
    console.log(`${ADD}`);
}
else if (operator == '-')
{
    let SUB= number1-number2; 
    console.log(`${SUB}`);
}
else if (operator == '*')
{
    let MUL= number1* number2; 
    console.log(`${MUL}`);
}
else 
   DIV= number1/number2; 
console.log (`${Div}`)
