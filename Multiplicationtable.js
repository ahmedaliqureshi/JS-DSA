//1st we are going to delcare 2 variables 
let a =1; 
let b; 
// this 2 variables will be our number, one will be constent 
// and other will be, number which will incremement from 1 to 10 
// for the continious incrememnt, we will make the for loop for it 
// intialise i ewuals to 1, and i should go till 
for(let i=1; i<=10;i++){
    // then we are going to multiply and increment at same time 
    // then aswer will be multiplied and stored in the a
    // mean while the i value will increment 
    //  a+=i;  //this is giving the serries 
    // trying with storing the value in b and sepreating a and i 
    b=a*i; 
    //    console.log(a); // till will give output as string of not the vlaues which are looking for 
    // console.log(b); //this will give us only value if we need to print whole row of equestion with multiplication then
console.log(`${a}*${i}=${b}`);
}