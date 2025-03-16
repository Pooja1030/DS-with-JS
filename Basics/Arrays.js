// dynamic size arrays
// arr is linear ds which stores multiple alues in a continous manner
// arr keeps continous element in memory  i.e one after another
// 
 
let arr = [];
arr.push(100)
arr.push(10)
arr.push(20)
arr.push("ali")

console.log(arr[0]);
console.log(arr[1]);
console.log(arr);

let a = 20;
console.log(a); 

arr.pop();


let arr1 = [];
arr1[0] = 100;
arr1[1] = 20;
arr1[2] = 30;
arr1[7] = 700;

console.log(arr1);



let arr2 = new Array(3);
arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;
arr2[3] = 50;

arr2[10] = 150;
console.log(arr2);


let arr4 = new Array(3);
arr4.push(10);
console.log(arr4);


// How to take alue in array from prompt

let array = new Array(5);
// 0,1,2,3,4

for(let i = 0; i < array.length(); i++){
    array[i] = Number(prompt("Enter a alue"));
}

console.log(array);


// sum of n element of arr

let array1 = [10,20,30,40,50];
let sum = 0;
for(let i = 0; i < arr.length(); i++){
    sum = sum + arr[i];
}

console.log(sum);


//  max element
// consider first elem is max

let arrr = [10,2,57,38,100];
let max = arrr[0];
for(let i = 0; i < arr.length; i++){
    if(max < arrr[i]){
        max = arrr[i];
    }
}

console.log(arrr);


// min elem


// second max elem
let arrr1 = [10,32,57,38,100,60,74,29];
// let arrr1 = [10,32,40,40,40,40,40];
let maxx = Math.max(arrr1[0], arrr[1]);
let smaxx = Math.min(arrr1[0], arrr[1]);
for(let i = 2; i < arrr1.length; i++){
    if(arrr1[i] > maxx){
        smaxx = maxx;
        maxx = arrr1[i];
    }else if(arrr[i] > smaxx && maxx != arrr1[i]){
        smaxx = arrr[i];
    }
} 

console.log(smaxx);



// reversee the array -- with extra space
let arrayy = [10,30,63,36,72];
let temp = new Array(arrayy.length);

let j = 0;
for(let i = arrayy.length-1; i>=0; i--){
    temp[j] = arrayy[i];
    j++;
}
console.log(temp);


// reversee the array -- without extra space
// 2 ptr algo
let arrrr = [10,20,30,40,50];
let i = 0, j1 = arrr.length-1;

while(i!=j1){
    let temp = arrrr[i];
    arrrr[i] = arrrr[j];
    arrrr[j] = temp;
    i++;
    j--;
}

console.log(arrrr);


// all zeros to left and all ones to right 
// 2 ptr thoery is used

let arr5 = [1,1,0,0,1,0,1,1,0,0,0];

let i2 = 0, j2 = 0;
while(i < arr5.length){
    if(arr5[i]==0){
        let temp = arr5[i];
        arr5[i] = arr5[j];
        arr5[j] = arr5[i];
        j++;
    }
    i++;
}

console.log(arr5);