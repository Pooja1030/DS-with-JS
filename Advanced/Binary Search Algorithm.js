// The fastest searching algorithm

let arr = [2,5,8,9,12,18,20,25,67,101,125]
let index = BinarySearch(arr, 0, arr.length-1, 67)
if(index == -1) console.log("Not Found");
else console.log("Target Fount at " + index + " index");


function BinarySearch(arr, first, last){
    while(first <= last){
        let mid = Math.floor((first + last) / 2);
        if(arr[mid] == target) return mid;
        else if(arr[mid] > target) last = mid - 1;
        else first = mid + 1
    }
    return -1;
} 