//Q) factorial of number
// 1st we are going to take a number 
let numb=4; 
// 2nd we are going to put check if the number is 1 or 0 
if(numb===0||numb===1)
    console.log(`${numb} factorial is 1`);
else {

    //3rd if it is not 1 or 0, then we are going to take the number
// and decremement each time and multiply each decrememnt value 

// in for condition we are goin to intiate the i as numb, and then 
// we are going to interate the number till we reaches 1
// and continously decrememnt the value
    let fact= 1;

for(let i=numb;i>1;i--)
{
    // then each time the number is getting printed and decremented 
    // it is getting multiplies by it previous number 
    fact*=i;
}
console.log(`${numb} factorial is ${fact}`);
}