// Book Allocation question

function isvalid(arr, mid, k){
    let noOfStudent = 1;
    let sum = 0;
    for(let i = 0; i < arr.length(); i++){
        if(arr[i] + sum > mid){
            noOfStudent++;
            sum = arr[i];
            if(noOfStudent > k) return false;
        } else sum += arr[i];
    }
    return true;
}

class Solution {
    findPages(arr, k){

        if(k > arr.length) return -1;

        let first = 0;
        let last = 0;
        let ans = -1;
        for(let i = 0; i < arr.length; i++){
            first = Math.max(arr[i], first);
            last += arr[i];
        }

        while(first <= last){                                 // n.log(n)
            let mid = Math.floor((first + last)/2)
            if(isvalid(arr, mid, k)){
                ans = mid;
                last = mid;
            } else first = mid + 1
        }
        return ans;
    }
}

// T.c -- O(n + n.log(n))  == n.log(n)
// S.C -- O(1)



// KOKO Eating Banana

var isvalid = function(pile, speed, h){
    let totalHour = 0;
    for(let i = 0; i < pile.length(); i++){
        if(pile[i] % speed == 0){
            totalHour += pile[i] / speed;
        } else totalHour += Math.ceil(pile[i] / speed);
          if(totalHour > h)  return false;
    }
    return true;
}

var minEatingSpeed = function(arr, h){
    let first = 1;
    let last = 0;
    let ans = -1;
    for(let i = 0; i < arr.length; i++){
        last = Math.max(arr[i], last);
    }
    while(first <= last){                                 // n.log(n)
        let mid = Math.floor((first + last)/2)
        if(isvalid(arr, mid, h)){
            ans = mid;
            last = mid - 1;
        } else first = mid + 1
    }
    return ans;
}



// Threshold
