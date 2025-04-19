// process.stdout.write("hello ")
// process.stdout.write("world")

// let a = prompt("Enter a no")
// console.log(a);


let prompt = require('prompt-sync')();
// let a = prompt("Enter a no ")
// process.stdout.write(a)

// let n = Number(prompt("Enter a no"))
// for(let i = 1; i <= n; i++){
//     process.stdout.write("* ")
// }

// 1st pattern

// let n = Number(prompt("Enter a no "))
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }


// 2nd pattern

// let n = Number(prompt("Enter a no "))
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }


// 3rd pattern

// let n = Number(prompt("Enter a no "))
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(j+" ")
//     }
//     console.log();
// }


// 4th pattern

// let n = Number(prompt("Enter a no "))
// for(let i = 1; i <= n; i++){
//     let ascii = 65;
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(ascii+" ")
//     }
//     console.log();
// }


// 5th pattern

// let n = Number(prompt("Enter a no "))
// for(let i = 1; i <= n; i++){
//     let ascii = 65;
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(String.fromCharCode(ascii)+" ")
//         ascii++;
//     }
//     console.log();
// }




// 6th pattern


// let n = Number(prompt("Enter a no "))
// for(let i = 1; i <= n; i++){
//     for(let j = n; j >= i; j--){
//         process.stdout.write("* ")
//     }
//     console.log();
// }



// 7th pattern

// let n = Number(prompt("Enter a no "))
// for(let i = 1; i <= n; i++){
//     // inerted
//     for(let j = 1; j <= n-i+1; j++){
//         process.stdout.write(" ")
//     }
//     // right
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }


// 8th pattern

// let n = Number(prompt("Enter a no "))
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n-i+1; j++){
//         if(i == j || i + j == n + 1){
//             process.stdout.write("* ")
//         } else process.stdout.write(" ")
//     }
//     console.log();
// }


// 9th pattern

let n = Number(prompt("Enter a no "))
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= 2*n-1; j++){
        if(i == j || i + j == 2*n){
            process.stdout.write("* ")
        } else process.stdout.write(" ")
    }
    console.log();
}