// stack size is static - limited

// function temp(elem){
//     if(elem === 0) return

//     console.log("Hello World");
    
// }
// temp(0)


function temp(n){
    if(n==0) return
    console.log("hello world");
    temp(n-1);
    // temp(n--);   --- this goes in infinite loop
    // temp(--n);   --- this takes a value of n and print correctly
}

temp(5)



// Print n to 1 nos
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
function temp(n){
    if(n == 0) return;
    console.log(n);
    temp(n-1);
}
temp(10)


// Print from 1 to n

function temp(n){
    if(n == 0) return;
    temp(n-1);
    console.log(n);
}

temp(10);


// Factorial / Sum 
// 5, 4, 3, 2, 1

function sum(n){
    if(n == 1) return 1;
    return n + sum(n-1);
}

sum(5)
console.log(sum(5));


function fact(n){
    if(n == 1) return n;
    return n * fact(n-1);
}

console.log(fact(6));


// Fibonacco Series
//  2 types 
// 1type 
// iterative

let n = 10;
let first = 0, second = 1;

process.stdout.write(first+" " + second + " ")

for(let i = 1; i <= n-2; i++){
    let third = first + second;
    first = second;
    second = third;
    process.stdout.write(third+" ");
}


// recursive approach

function fib(n, first, second){
    if(n == 0) return
    let third = first + second;
    process.stdout.write(third+" ");
    fib(n-1,second, third)
}


let n = 10;
process.stdout.write(0 + " " + 1 + " ");
fib(n-2, 0 , 1)



// 2nd type -- nth term sum 
function fib(n){
    if(n == 0 || n == 1) return n;
    return fib(n-1) + fib(n-2);
}

let n = 6;
console.log(fib(6));

