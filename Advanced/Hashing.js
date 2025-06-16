// Hashing --- It is a process or technique of converting a value into unique sign code(hash code) for storing and accessing data quickly.
//             store and access data in an efficient way
// set - unique data
// arr - duplicate data
// 

// let set = new Set();
// set.add(19);
// set.add(20);
// set.add(13);
// set.add(18);
// set.add(19);
// console.log(set);

// for(let a of set){
//     console.log(a);
// }

// set.delete(20);
// console.log(set);
// console.log(set.size);
// console.log(set.has(19));

// Questions

// Print unique elements
let arr = [10, 45, 19, 18, 9 , 9, 10, 45, 10, 10];
let set = new Set();
for(let i = 0; i < arr.length; i++){
    if(set.has(arr[i])){
        set.delete(arr[i])
    }else set.add(arr[i]);
}
console.log(set);

// or

let arr = [10, 45, 19, 18, 9 , 9, 10, 45, 10, 10];
let set = new Set(arr);
console.log(set);


// Check if sentence is pangram
var CheckIfPangram = function(sentence){
    let set = new Set();
    for(let i = 0; i < sentence.length; i++){
        let ch = sentence.charAt(i);
        set.add(ch);
    }
    return set.size == 26;
}


// Print the frequency of each no
let arr = [10, 3, 5, 6, 10, 1, 3, 5, 5, 7];
let map = new Map();

for(let i = 0; i < arr.length; i++){
    // if(map.has(arr[i])){
    //     map.set(arr[i], map.get(arr[i]) + 1)
    // } else {
    //     map.set(arr[i], 1);
    // }
    
    // or

    map.set(arr[i], (map.get(arr[i]) || 0) +1)
}

console.log(map);



// sort the people

// 2 sum

// intersection of 2 arrays

// subarr sum equal to K

// longest subarr with sum K

// longest consecutive sequence