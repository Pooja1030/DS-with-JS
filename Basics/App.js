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


