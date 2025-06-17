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


// map -> ds -> stores multiple values -> keeps entry as key-value -> key is unique , value can be duplicate  

let map = new Map()
map.set("name", "xyz");
map.set("name", "mno");
map.set("age", 19);
map.set("isPassed",true);
map.set("contact", [98765, 98765]);


// another example
map.set("raj", 6);
map.set("amit", 8);
map.set("aman", 2);
map.set("ali", 8);
map.set("rajini", 4);
map.set("amit", 3);
console.log(map);

map.delete("amit")
console.log(map);
console.log(map.has("aman"));
console.log(map.size);

// want to traverse
for(let [key, value] of map){
    console.log(key + " -> " + value);
}
console.log("all keysss");

// want to traverse
for(let key of map.keys()){
    console.log(key);
}

// want to traverse
for(let value of map.values()){
    console.log(value);
}

//  difference between object and map





// Print the frequency of each no
let arr = [10, 3, 5, 6, 10, 1, 3, 5, 5, 7];
let map = new Map();

for(let i = 0; i < arr.length; i++){
    // if(map.has(arr[i])){
    //     map.set(arr[i], map.get(arr[i]) + 1)     // value key se kaise retrieve karte using get
    // } else {
    //     map.set(arr[i], 1);
    // }
    
    // or instead of if - else 

    map.set(arr[i], (map.get(arr[i]) || 0) +1)
}

console.log(map);


// sort the people
// use hashing
// while using hashing the output asked that is the ans try to keep it as a value
// here names = value and height = key
// here sort in descending order -> make a ans arr -> get value from map.get 

var sortPeople = function(names, heights){
    let map = new Map();
    for(let i = 0; i < names.length; i++){
        map.set(heights[i], names[i])
    }
    heights.sort((a,b) => b-a)

    for(let i = 0; i < heights.length; i++){
        names[i] = map.get(heights[i])
    }
    return names;
}


// 2 sum
// 2 approaches
var twoSum = function(nums, target){
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            return [i, map.get(target - nums[i])];
        }
        else map.set(nums[i], i);
    }
    return [-1,-1];
}
// T.C - O(n)
// S.C - O(n)


// intersection of 2 arrays
var intersection = function(nums1, nums2){
    let set = new Set(nums1);
    let ans = [];
    for(let i = 0; i < nums2.length; i++) {
        if(set.has(nums2[i]) && !ans.includes(nums2[i])){
            ans.push(nums[i]);
        }
    }
    return ans;
}

// T.C - O(n)
// S.C - O(n)


// subarr sum equal to K

// longest subarr with sum K

// longest consecutive sequence