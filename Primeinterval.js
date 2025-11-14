//Q) find prime number intervals 

// to find the prime numbers with the intervals we need to give it an 
// upper bound and a lower bound 
// the upper wound will be the number, where til there the prime
// numbers will be calculated and the lower bound will be the intial 
// number for starting point 

// 1st enter the upper and lower bound 

let upperbound=30; 
let lowerbound=1; 
console.log(`the prime number between ${lowerbound} and  ${upperbound} are:\n`);

// 2nd we are going to create an loop that will go through each number 
for (let i=lowerbound;i<=upperbound;i++)
{
    let flag=0;
    // 3rd we are going to use other loop that will check the prime
     for(let j=2;j<=i;j++)
     {
        //4th put if condition to see if we get zero, when dividing 
        // then it is not a prime numebr 
        if(i%j==0)
        {
            flag=1; 
            break;
        }
     }
     if(i>1&&flag==0){
        console.log(`${i} is a prime number`);
     }
}
