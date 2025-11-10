// Q) to generate a randomnumber 
// we are going to use Math.random() to generate random number 
// delcare a variable,and assign it with Math.random() method
let a= Math.random(); 
console.log(a);
//but if want to have a number between a certain range then
// Math.random()*(high-low)+1; 
let b= Math.random()*(10-1)+1; 
console.log(`output with out floor ${b}`);
Math.floor(b)
console.log('output with floor',Math.floor(b));
// the outputs are in float, so we can make them in integer form by 
// use of Math.floor() 