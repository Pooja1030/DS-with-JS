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


// Merge sort


// Quick sort