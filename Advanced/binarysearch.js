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


