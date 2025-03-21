// -- Introduction of string
// grp, sequence of characters
// ehaes like array
// immutale -- original string does not get changed


let name = "pooja";
let naam = pooja;

console.log(name);
console.log(naam);



let arr = [10,30,20,40];
arr[2] = 100;
console.log(arr);
console.log(arr[2]);

let s = "sheryians";
s[2] = 'y';
s = s + " world";
console.log(s[3]);
s.push('y')                     //s.push is not a function as string does not has it
console.log(s);


// -- methods of string
// length
let str = "sheryians";
console.log(str.length);

// slice(start,end) -- extracts sustr
str.slice(1,5);
console.log(str); 

str.slice(-4,str.length);   // for s.length for last char
console.log(str); 

// sustr(start,end)  -- similar to slice only negatie indexed not allowed
console.log(str.substring(2,6));

// toUpperCase()
console.log(str.toUpperCase());

// concat
console.log(str.concat(" world"));

// trim 
// let str = "                 shreyainas            ";
console.log(str.trim());

// charAt
console.log(str.charAt(2));
console.log(str.charCodeAt(2));



// Q. print each character on new line
let arr = [10,20,30,40];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


let s = "sheriyans";
for(let i = 0; i < s.length; i++){
    console.log(s[i]);
}

// another method

for(let i = 0; i < s.length; i++){
    console.log(s.charAt(i));
}


// Q. print in reverse order each char
let s = "sheriyans";
for(let i = s.length-1; i >= 0; i--){
    console.log(s.charAt(i));
}



// Q. print in reverse order
let s = "sheriyans";
let rev = "";
for(let i = s.length-1; i >= 0; i--){
   rev = rev + s.charAt(i);
}
console.log(rev);


// Q. check if string is palindrome or not
// not a good method  -- takes extra space
let s = prompt("Enter a string");
let reverse = "";
for(let i = s.length-1; i >= 0; i--){
    reverse = reverse + s.charAt(i);
}
if(rev == s)console.log("Palindrome");
else console.log("Not a Palindrome");


// No space method
let s = prompt("Enter a string");
let isPalindrome = true;

let i = 0; j = s.length - 1;
while(i<j){
    if(s.charAt(i) != s.charAt(j)){
        isPalindrome = false;
        break;
    }
    i++;
    j--;
}

if(isPalindrome) console.log("Palindrome")
else console.log("Not a Palindrome")


// Q. Toggle each character
// A - 65  , a = 97
//  - 66  ,  = 98

let s = prompt("Enter a string");
console.log(s);


let toggle = "";
for(let i = 0; i<s.length-1; i++){
    let ch = s.charCodeAt(i);

    if(ch >= 65 && ch <= 90){
        toggle = toggle + String.fromCharCode(ch + 32);
    }else if(ch >= 97 && ch <= 122){
        toggle = toggle + String.fromCharCode(ch - 32);
    }
}
console.log(toggle); 


// Q. Frequency of each character
// hello

// h - 1
// e - 1
// ll - 2
// o - 1

// 2 methods -- map, itmap

let s = prompt("Enter a num");
let arr = new Array(128).fill(0);

// ancsa
for(let i = 0; i < s.length; i++){
    let idx = s.charCodeAt(i);
    arr[idx] = arr[idx] + 1;
}

for(let i = 0 ; i < arr.length; i++){
    if(arr[i]>0){
        console.log(String.fromCharCode(i) + " appears at " + arr[i]+" times");   
    }
}