// Advance Array problems

// Nested loops
for(let j = 1; j <= 4; j++){
    console.log(j + " execution");
    
    for(let i = 1; i <= 3; i++){
        console.log("Hello");
    }
}


// Q. Left and right rotation by 1

// left rotation
let arr = [1,2,3,4,5]

let copy = arr[0];
for(let i = 0; i < arr.length-1; i++){
    arr[i] = arr[i+1];
}

arr[arr.length - 1] = copy

console.log(arr);

// right rotation
let coppy = arr[arr.length-1];
for(let i = arr.length-1; i > 0; i--){
    arr[i] = arr[i-1];
}

arr[0] = copy
console.log(arr);


// Q. Left and right rotation by k element
// left rotation
// Not a good approach -- O(N^2)
let k = Number(prompt("Enter k elem"))
k = k % arr.length
for(let j = 0; j < k; j++){
    let copy1 = arr[0];
    for(let i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = copy1
}

console.log(arr);

// right rotation



// Optimised Approach -- O(n)  -- this is taking extra space etter than pre algo not a good one
// left rotation

let temp = new Array(arr.length)
let m = Number(prompt("Enter m elem"))
m = m % arr.length

for(let i = 0; i < arr.length; i++){
    temp[i] = arr[(i+m)%arr.length]
}

console.log(temp);


// right rotation


// More Optimised
reverse(0, k-1)
reverse(k, arr.length-1)
reverse(0, arr.length-1)
console.log(arr);


function reverse(i,j){
    while(i < j){
        let temmp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        i++;
        j--;
    }
}


// Q. Removes duplicated from the sorted array -- LC ques 





// Q. Merge sorted array
// Q. best time to buy and sell stocks
// Q. Sort the color
// Q. Max subarr / Kadane's algorithm
// Q. Majority Element / Moore's voting algorithm
// Q. Trapping Rain water
