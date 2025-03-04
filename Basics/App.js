var a = 3;
console.log(a);

a = 3;
console.log(a);

let a;

// additon
let a = 10;
let c = 20;

console.log(a+c);

// concatenation
let a = 10;
let c1 = "20";

console.log(a+c);

console.log("sum of 10 and 20 is" +a+c);              // o/p -- sum of 10 and 20 is 1020
console.log("sum of 10 and 20 is" + (a+c));          // o/p -- sum of 10 and 20 is 30
console.log(a +c +"sum of 10 and 20");              //o/p -- 30 is sum of 10 and 20


// type coercion --  js compiler converts the type  

console.log("1" + 1);          // + does 2 works -- addition and concatenation  so output is 11
console.log("1" - 1);          // - does one work --  output is 0 
console.log("1" * 1);          // * does one work -- output is 1
console.log("1" / 1);          // / does one work -- output is 0



let age = prompt("What is your age");
console.log(typeof(age));            // it converts the age into string 



// This is called Type Casting in which we convert from one type to another type
// To make it number
let age1 = prompt("Enter your age");
age1 = Number(age);
console.log(typeof(age1));            // it converts the age into string 


// Another method to write
let age2 = Number(prompt("Enter your age"));
console.log(typeof(age1));            // it converts the age into string 



// Swap 2 variables
// 1st Method  -- swap with extra var
let m = 10;
let n = 20;

let d = m;    //  d = 10, m = 10
m = n;       // m = 20, n = 20
n = c;        // n = 10
console.log(m);
console.log(n);


// 2nd Method
m = m + n;  // m = 30
n = m - n;  // n = 10
m = m - n;  // m = 20
console.log(m, n);


// 3rd Method
[m,n] = [n,m]
console.log(m, n);


// Operators
// IN js integer / integer gives ans in float
// IN js integer % integer gives ans in num

let p = 12;
let q = 22;

console.log(Math.floor(p/q));     // returns quotient
console.log(p%q);                 // returns remainder


// It returns last digit
let a3 = 4567;
console.log(a3 % 10);

// If we want to leave last digit like here we want 456 
let a4 = 4567;
console.log((Math.floor(a4/10)));

// Relational
console.log(10<5);
console.log(10>=10);
console.log(10<=7);

// != - not strict  , !== - strict equal
console.log(10!=10);
console.log(10!==11);


//  Post and Pre

// Post -- Dhaba                            // Pre -- Dominos
// use -> change                               //  change-> use
// eat -> pay                                  // pay -> eat


//  Questions

let i = 11;
i = i++ + ++i;
console.log(i);


let t = 11, s = 22;
let e = t+s + t++ + s++ + ++t + ++s;
console.log("t=" + t);
console.log("s=" + s);
console.log("e=" + e);



let f = true;
f++;
console.log(f);


let m1 = 11++;
console.log(m1);

let n1 = 11;
let n2 = --(n1++);


// Math Functions
console.log(Math.round(10.5));        // if below .5 then prev num else next num
console.log(Math.ceil(10.1));              // returns the next num
console.log(Math.floor(10.8));              // returns the prev num
console.log(Math.trunc(18.98));   // removes the decimal   // returns the num without decimal      
console.log(Math.pow(2,5));            // returns pow
console.log(Math.sqrt(16));   
console.log(Math.cqrt(125));
console.log(Math.abs(15));
console.log(Math.max(134,64,12));
console.log(Math.min(152,622,1263));
console.log(Math.random());               // returns num between 0 and 1
console.log(to.fixed(2));     // returns num with the given value and it makes it a string


// OTP Generator
console.log(Math.trunc((Math.random()*9000)+1000).toFixed(4));     // 0 to 8999       


// Area and Perimeter of rectange
let o = 5;
let g = 2;

console.log(o*g);

// perimeter -- 2*(l+b)


// Area of triangle with heron formula

let a1 = 8;
let p1 = 2;
let q1 = 3;

let s1 = (a1+p1+q1) / 2;

// here we need to check if a1+p1 > q1 || a1+q1 > p1

console.log(Math.sqrt(s1 * (s1-a1) * (s1-p1) * (s1-q1)));

// Circumference of circle

let r = 12;
console.log(Number((2*Math.PI*r).toFixed(2)));


// Q.8

let ans = Number(prompt("What is your age ?"));

// In JS NaN === NaN
// isNaN(NaN)

if(isNaN(ans)){
    console.log("Wrong Input");   
}
else if(ans >= 18){
    console.log("You can ote");
} else {
    console.log("You cannot ote");
}


// Q.9

// Range Question
// brute approach
let amount = Number(prompt("What is the final amount to be paid?"))
if(amount > 0 && amount <= 5000){
    console.log(amount);
}
else if(amount > 5000 && amount <= 7000){
    console.log(amount - Math.floor((5*amount)/100));
}
else if(amount > 7000 && amount <= 9000){
    console.log(amount - Math.floor((10*amount)/100));
}
else if(amount > 9000){
    console.log(amount - Math.floor((20*amount)/100));
}
else {
    console.log("Wrong Input");
}

// efficient approach
let amt = Number(prompt("What is the final amount to be paid?"))
let dis = 0
if(amt > 0 && amt <= 5000){
    dis = 0;
}
else if(amt > 5000 && amt <= 7000){
    dis = 5;
}
else if(amt > 7000 && amt <= 9000){
    dis=10;
}
else if(amt > 9000){
    dis = 20
}
    console.log(amt - Math.floor((dis*amt)/100));


// Q.10
// bijli 
// bottom to top approach

let unit = Number(prompt("Enter electricity unit"))   // 700
let ammount = 0;
if(unit > 400){
    ammount = (unit - 400) * 13; //3900
    unit = 400;
} //400
if(unit > 200 && unit <= 400){
    ammount += (unit - 200) * 8;  //1600
    unit = 200;
} //200
if(unit > 100 && unit <= 200){
    ammount += (unit - 100) * 6;  //600
    unit = 100;
} //
ammount += unit * 4;
console.log(ammount);


// Q.11

// 4888  - 500 - 9
// 388  - 200 - 1
// 188  - 100 - 1
// 88  - 50 - 1
// 38

// 4823 / 500 = 9   // kiti notes milenge
// 4823 % 500 = 323/200 = 1   // kitine bachenge


let amnt = 4823;
if(amnt >= 500){
    console.log("500 Notes : " + Math.floor(amnt/500));
    amnt = amnt % 500;
}
if(amnt >= 200){
    console.log("200 Notes : " + Math.floor(amnt/200));
    amnt = amnt % 200;
}
if(amnt >= 100){
    console.log("100 Notes : " + Math.floor(amnt/100));
    amnt = amnt % 100;
}
if(amnt >= 50){
    console.log("50 Notes : " + Math.floor(amnt/50));
    amnt = amnt % 50;
}
if(amnt >= 20){
    console.log("20 Notes : " + Math.floor(amnt/20));
    amnt = amnt % 20;
}
if(amnt >= 10){
    console.log("10 Notes : " + Math.floor(amnt/10));
    amnt = amnt % 10;
}
if(amnt >= 5){
    console.log("5 Notes : " + Math.floor(amnt/5));
    amnt = amnt % 5;
}
if(amnt >= 2){
    console.log("2 Notes : " + Math.floor(amnt/2));
    amnt = amnt % 2;
}
if(amnt === 1){
    console.log("1 Notes : " + amnt);
}


// Ternary operator ? :
112 > 14 ? console.log("heheheh") : console.log("huuuuu");

console.log(122>13?"hello":"hey");

// nested ternary operator
let num = 0;
console.log(num > 0 ? "positie" : num < 0 ? "Negatie" : "zero");

// switch case
// fall through condition -- where break is not used and it displays all the outputs
// when to use -- constant alues are needed to compare , exact alues are needed to get matched
// There are some things that if else can do which switch can't do but all the switch things they do if else can do

let day = 2;
switch(day){
    case 1:  console.log("MOnday");
    break;
    
    case 2:  console.log("Tuesday");
    break;
    
    default:  console.log("NAN");
}

let name = "harsh";
switch(day){
    case "raj":  console.log("MOnday");
    break;
    
    case "harsh":  console.log("Tuesday");
    break;
    
    default:  console.log("NAN");
}

//   /// /////////////////////
let days = 5;
switch(day){
    case 1:  
    case 2:
    case 3:
      console.log("Tuesday");
      break;
    
    case 4:  
    case 5:
    case 6:
      console.log("Wednesday");
      break;
    
    default:  console.log("NAN");
}

// ///////////////////////////////////////
switch(true){
    case 19 > 6:
        console.log("Hello");
        break;
        
        
    case 10 > 9:
        console.log("Heuuuuu");
        break;
             
    default:  console.log("NAN");
}

// Precision isssue   
// how to fix this code 
////////////////////////////////
let numm = 0.1 + 0.2
switch(numm){
    case 0.3 : console.log("heooo");
    break;
    
    case 0.5 : console.log("heee");
    break;
    
    default : console.log("NAN");
    
}


// Loop  -> whatsapp, instagram, facebook, ecommerce, yt
// for while do-while

// for
// for(start; end; change){}

for(let i = 200; i > 99; i--){
    console.log(i);
}


//  sum of n natural numbers

let pr = prompt("Kaha tak add karwaaoge ?");
 
if(pr === null){
    console.log("cancelled");
}
else{
    let nuum = Number();

if(isNaN(nuum)){
    console.log("Inalid Input");
}
else{
    if(nuum > 0){
        let fact = 1;
        for(let i = 1; i <= numm; i++){
            fact = fact + i;
        }
        console.log(fact);    
    }
    else{
        console.log("Should e +e and more than -");   
    }
}
}

// factorial
let nuum1 = Number(prompt("Kaha tak add karwaaoge ?"))

if(isNaN(nuum1)){
    console.log("Inalid Input");
}
else{
    if(nuum1 > 0){
        let sum = 0;
        for(let i = 1; i <= numm1; i++){
            sum = sum + i;
        }
        console.log(sum);    
    }
    else{
        console.log("Should e +e and more than -");   
    }
}


// factors
let nuum2 = Number(prompt("Kaha tak add karwaaoge ?"))

if(isNaN(numm2)){
    console.log("Inalid Input");
}
else{
    if(nuum2 > 0){    
        for(let i = 1; i <= Math.floor(nuum2/2); i++){
            if(nuum2 % i === 0){
                console.log(i);
            }
        }
        console.log(nuum2);    
    }
    else{
        console.log("Should e +e and more than -");   
    }
}


// Prime no
//  2 is the only een prime no


let nuum3 = Number(prompt("Kaha tak add karwaaoge ?"))

if(isNaN(numm3)){
    console.log("Inalid Input");
}
else{
    if(nuum3 > 0){    
        let prime = true;
        for(let i = 2; i <= Math.floor(nuum3/2); i++){
            if(nuum3 % i === 0){
                // prime = false;
                // break;
                console.log(isPrime(nuum3));
            }
        }   
    }
    else{
        console.log("Should e +e and more than -");   
    }
}


function isPrime(nuum3){ //12
    if(nuum3 <= 1) return false;
    if(nuum3 == 2) return true;
    if(nuum3%2 == 0) return false;
    for(let i = 3; i <= Math.floor(Math.sqrt(nuum3)); i+=2);
}

// 37 = 6 = 2->6         -- if there is a no which is not diied y 2 till its sq root then it will not get diided after sq.rt


// break and continue


// while

while(end){
    // code
    change;
}