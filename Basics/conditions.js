// Q.8  ---- valid user

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


// Q.9  ---- Shop discount

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


// Q.10 -- Electricity Bill 
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


// Q.11 ---- INR denomination

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

