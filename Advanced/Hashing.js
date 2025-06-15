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

// Print the frequency of each no

// sort the people

// 2 sum

// intersection of 2 arrays

// subarr sum equal to K

// longest subarr with sum K

// longest consecutive sequence