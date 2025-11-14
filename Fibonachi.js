//1st we are going to declre tow varables 
// we are going to assign 0 and 1 to each of them,as intial values 
// we are going to take one more variable which is going to store the constent
const number= 10;
let a=0,b=1;
// 2nd we are going to take another variable which will act as storing 
// the number
//let c; c is not defined here so that is why it is showijng undefine 
let c=a+b;
// then we are going to use while loop, the C will continuuse to strore
// next value till the number we have entered 
while(c<=number)
{
    //then, assign the 1st number in a to b 
    a=b; 
    //then, assign the 2nd number in b to c
    b=c; 
    // then, add the 1st and 2nd number 
    c=a+b;
    // then we are going print the values of c 
     console.log(`${a}+${b}=${c}`);
}
//  console.log(`${a}+${b}=${c}`); //this shows us c undefined and only giving one ouput
