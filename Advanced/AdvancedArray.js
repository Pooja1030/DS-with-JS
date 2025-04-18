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
let arr1 = [2,5,6];
let arr2 = [1,3,4,8];
let merge = new Array(arr1.length + arr2.length)
let i = j = k = 0;
while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        merge[k++] = arr1[i++];
    } else {
        merge[k++] = arr2[j++];
    }
}

while(j < arr2.length){
    merge[k++] = arr2[j++]
}
while(i < arr1.length){
    merge[k++] = arr1[i++]
}
console.log(merge);


// Q. best time to buy and sell stocks
var maxProfit = function(prices) {
    let maxProfit = 0;
    let min = prices[0];
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min) min = prices[i];
        let profit = arr[i] - min;
        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit
}


// Q. Sort the color

// Q. Max subarr / Kadane's algorithm
var maxSubarr = function(nums){
    let max = -Infinity;
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        max = Math.max(max, sum);
        if(sum<0) sum = 0;
    }
    return max;
}


// Q. Majority Element / Moore's voting algorithm
var majorityElem = function(nums){
    let res = nums[0];
    let cnt = 0;
    for(let i = 1; i < nums.length; i++){
        if(cnt == 0){
            res = nums[i];
            cnt = 1;
        } else if(res == nums[i]) cnt++;
        else cnt--;
    }
    return res;
}


// Q. Trapping Rain water
var trap = function(height){
    let left = new Array(height.length)
    let right = new Array(height.length)
    let maxLeft = height[0], maxRight = height[height.length - 1];
    left[0] = maxLeft, right[right.length - 1] = maxRight

    for(let i = 1; i < height.length; i++){
        maxLeft = Math.max(height[i], maxLeft)
        left[i] = maxLeft
    }
    for(let i = height.length - 2; i >= 0; i--){
        maxRight = Math.max(height[i], maxRight)
        right[i] = maxRight;
    }
    let res = 0;
    for(let i = 0; i < height.length; i++){
        res += Math.min(left[i], right[i] - height[i])
    }
    return res;
}
