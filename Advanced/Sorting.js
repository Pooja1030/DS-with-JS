// bubble sort
let arr = [10, 5, 12, 1, 3];
let n = arr.length;

for(let i = 0; i < n-1; i++){
    for(let j = 0; j < n-1-i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);

// Selection Sort

for(let i = 0; i < n-1; i++){
    let minIndex = i;
    for(let j = i+1; j < n; j++){
        if(arr[minIndex] > arr[j]) minIndex = j;
    }
    if(minIndex != i){
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}
console.log(arr);


// Insertion sort

for(let i = 1; i < n; i++){
    let key = arr[i];
    let j = i-1;
    while(j >= 0 && arr[j] > key){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
}
console.log(arr);


// Merge sort  -- most optimised algorithm
// Divide and Conquer

function merge(arr, first, mid, last){           // O(n)
    let temp = new Array(last - first + 1);       
    let i = first, j = mid + 1, k = 0;
    while(i <= mid && j <= last){
        if(arr[i] < arr[j]){
            temp[k++] = arr[i++] 
        } else temp[k++] = arr[j++]
    }

    while(i <= mid){
        temp[k++] = arr[i++]
    }
    while(j <= last){
        temp[k++] = arr[j++]
    }
    let p = 0, t = first;
    while(p <= temp.length){
        arr[t++] = temp[p++]
    }
}
 
function divide(arr, first, last){                 //log(n)
    if(first >= last) return
    let mid = Math.floor((first + last) / 2);
    divide(arr, first, mid)
    divide(arr, mid + 1, last)
    merge(arr, first, mid, last)
}

// let arr = [8,2,1,9,5,12,4,20]
divide(arr, 0, arr.length-1)
console.log(arr);


// T.C -- O(nlog(n))
// S.C -- O(n)


// Quick sort
// Pivot and Partition

function findPivotIdx(arr, first, last){           // O(n)
    let pivot = arr[first]
    let i = first + 1, j = last
    while(i<=j){
        while(i <= last && arr[i] <= pivot) i++;
        while(j >= first && arr[j] > pivot) j--;

        if(i < j){
            swap(arr, i, j)
        }
    }
    swap(arr, j, first)
    return j;
}

function quickSort(arr, first, last){       // O(log(n))
    if(first >= last) return
    let pIdx = findPivotIdx(arr, first, last)
    quickSort(arr, first, pIdx - 1)
    quickSort(arr, pIdx + 1, last)
}

function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// let arr = [19, 3, 17, 24, 1, 87, 22]
quickSort(arr, 0, arr.length-1)

console.log(arr);


// T.C - O(log(n))  - avg and best case
// T.C - O(n^2) - worst case
// S.c - O(1)
// When the arr is by default sorted we get w.c time complexity


// Use Case
// If space is limited and time can be spared - use quicksort
// If time is limited and space can be spared - use mergesort



// Cyclic Sort
// Missing Num 

var missingNum = function(nums){
    let i = 0;
    while(i < nums.length){
        let correctIdx = nums[i];
        if(nums[i] < nums.length && nums[i] != nums[correctIdx]){
            let temp = nums[i];
            nums[i] = nums[correctIdx]
            nums[correctIdx] = temp
        }
        else i++
    }

    for(let j = 0; j < nums.length; j++){
        if(j != nums[j]) return j;
    }
    return nums.length;
}

