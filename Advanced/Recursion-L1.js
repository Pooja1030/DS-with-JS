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
    // temp(--n);   --- this takes a alue of n and print correctly
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



// Fionacco Series