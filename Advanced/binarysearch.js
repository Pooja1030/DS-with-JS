// search insert position question

// using binary search

var searchInsert = function(nums, target){
    let first = 0, last = nums.length - 1;
    while(first <= last){
        let mid = Math.floor((first+last) / 2)
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) first = mid + 1;
        else last = mid - 1;
    }
    return first;
}



// search in rotated array

var search = function(nums, target){
    let first = 0, last = nums.length - 1;
    while(first <= last){
        let mid = Math.floor((first + last) / 2);
        if(nums[mid] == target) return mid;                     // check if mid == target
        if(nums[first] <= nums[mid]){                           // if first half is smaller than mid then the first half is sorted
            if(target >= nums[first] && target <= nums[mid]) last = mid;
            else first = mid + 1;
        } else {
            if(target >= nums[mid + 1] && target <= nums[last]) first = mid + 1;
            else last = mid;
        }
    }
    return -1;
}