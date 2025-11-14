//Q) to check if the number is prime or not 

// 1st we are going to declare a varibel with let and assign a number
let numb=7; 
//2nd we are going to assume that it is a prime number for our cal
let prime=true; 
//3rd we are going to see if the number is 1 or not 
if (numb==1){
    console.log(`${numb}  it is not prime numebr or composite`);
}
// 4th if the numb is greater then 1, then we will check with dividing 
//with 2 and keep dividing by use of for loop 
else if(numb>1){
    // 5th intialise i=2; and continue till i<=numb/2; and keep on increment of i
      for(i=2;i<=numb/2;i++){
        // 6th declare if condition to see if i is becoming 0 or not
        if(i==0){
                console.log(`${numb} is not a prime`);
            } 
            // come out of the loop 
            break;
      }
}
// after iteratio we either come to prime or not prime
if(prime)
console.log(`${numb} is prime number`);
else 
console.log('it is not a prime');
