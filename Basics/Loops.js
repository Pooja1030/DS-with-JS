
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
        console.log("Should be +e and more than -");   
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
        console.log("Should be +e and more than -");   
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
        console.log("Should be +e and more than -");   
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
        console.log("Should be +e and more than -");   
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

// start;
// while(end){
//     // code
//     change;
// }
// when you know there is only condition when you know when to stop we use while

let anss = prompt("kuch hi dedo(exit for close)");

while(anss !== 'exit'){
    anss = prompt("kuchh hi dedo(exit for close)");
}


// sum of digits

let num1 = Number(prompt("Kaha tak add karwaaoge ?"))

if(isNaN(num1)){
    console.log("Inalid Input");
}
else{
    if(num1 > 0){ 
        let sum = 0;   
        while(num1 > 0){
        let rem = num1%10;
        sum = sum + rem;
        num1 = Math.floor(num1/10);
       }
       console.log((sum));
       
    }
    else{
        console.log("Should be +e and more than -");   
    }
}


// reerse of a no
let num2 = Number(prompt("Kaha tak add karwaaoge ?"))

if(isNaN(num2)){
    console.log("Inalid Input");
}
else{
    if(num2 > 0){ 
        let re = 0;   
        while(num2 > 0){
        let rem = num2%10;
        re = re*10 + rem;
        num2 = Math.floor(num2/10);
       }
       console.log(re);
       
    }
    else{
        console.log("Should be +e and more than -");   
    }
}


// strong no

let num3 = Number(prompt("Kaha tak add karwaaoge ?"))

if(isNaN(num3)){
    console.log("Inalid Input");
}
else{
    if(num3 > 0){ 
        let sum = 0;   
        let copy = num3;
        while(num3 > 0){
        let rem = num3%10;
        let fact = 1;
        for(let i = 1; i <= rem; i++){
            fact = fact * i;
        }
        sum = sum + fact;
        num3 = Math.floor(num3/10);
       }
       if(copy === sum){
           console.log("strong");
       }
       else{
        console.log("not strong");
       }
       
    }
    else{
        console.log("Should be +e and more than -");   
    }
}


// do-while

// do{
//     console.log("hye");
// }
// while(12>13)


let ii = 10;
do{
    console.log("hey");
    ii++;
}
while(i<=10);

// repeat hello


// Guess the no
let random = Math.floor(Math.random()*100) + 1;

let guess = 0;
while(guess !== random){
    guess = Number(prompt("Guest the no"))
    if(isNaN(guess) || guess<1 || guess>100){
        console.log("Try again between 1-100");
        continue;
    }
    if(guess>random){
        console.log("Too high, Try again");
    } else if(guess < random) {
        console.log("Too low, Try again");
    } else{
        console.log("Congrats!! and no was" , guess);    
    }
}



// sasta calculator

