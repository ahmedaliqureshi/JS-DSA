//Q) solve quadratic equation

//formula of quadratic eq:- b*b-4*a*c

//declare 3 variables with the use of let 

let a=4; 
let b=3; 
let c=2; 

// 1st we are going to make the equation of quadritic form 
let quad=b*b-4*a*c; 
//2nd then check if the quad is  greater then 0 or not

// if it is greater then 0, then use the quadratic formula
// to get the roots for both +ve and _ve
if (quad>0){
let root1= b*b-4*a*c/2*a; 
let root2= b*b+4*a*c/2*a; 
console.log(`the root1=${root1}`);
console.log(`the root2=${root2}`);
}
//if it is equal to 0, then roots will be same, then use that
// formula to calculate the 
else if(quad==0){
root1=root2=-b/2*a;
console.log(`value of root1 and root2 are ${root1} and ${root2}`);
}
else{
let realpart= (-b/(2*a).toFixed(2)); 
let imagpart= (Math.sqrt(-quad)/(2*a)).toFixed(2);
console.log(`imaginary roots are ${realpart}+${imagpart}i and ${imagpart}i`);
}

