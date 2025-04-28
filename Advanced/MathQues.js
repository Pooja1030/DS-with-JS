// GCD
// Find highest, start loop from last  and  m%i == 0 && n % i == 0
// T.C -  O(min(m,n))


// Optimised -- using euclidean formula
// subtract high - low and then the ans will get placed at high no at the moment m == n it is the ans
// T.C -  O(max(m,n))

// Iterative sol
let m = 32, n = 20;
while(m != n){
    if(m > n) m = m-n;
    else n = n - m;
}

console.log(m);

// Recursive sol
function gcd(m , n){
    if(m == n) return m;
    if(m > n) return gcd(m-n, n)
        return gcd(n, n-m);
}

let m = 32, n= 20;
console.log(gcd(m, n));

// More Optimised
// T.C- O(log(max(m,n)))
// Iterative sol


// Recursive sol
function gcd(m , n){
    if(n == 0) return m;
    return gcd(n , m%n);
}

console.log(gcd(16,14));


// Factors of no - brute force and optimize
let n = 100;
for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++){
    if(n % i == 0){
        process.stdout.write(i + " ")
    }
}
for(let i = Math.floor(Math.sqrt(n)); i >= 1; i++){
    if(n % i == 0){
        if(n / i != i){
            process.stdout.write(n / i + " ")
        }
    }
}

// T.C -- O(sqrt(n))


// Count of primes(sieve of eratosthenes)

let p = 30;
let arr = new Array(n+1).fill(true)
for(let i = 2; i <= Math.floor(Math.sqrt(p)); i++){
    if(arr[i]){
        for(let j = i*i; j <= p; j++){
            arr[j] = false;
        }
    }
}
for(let i = 2; i < arr.length; i++){
    if(arr[i]) process.stdout.write(i + " ")
}

// T.C - O(n*log(log(n)))



// Pow(x,n)

// power - even  -- x^n/2 * x^x/2 ....
// power - odd  -- x^n/2 * x^x/2 * x ....


function myPow(x, n) {
    function calc_power(x, n) {
        if (x === 0) {
            return 0;
        }
        if (n === 0) {
            return 1;
        }

        let res = calc_power(x, Math.floor(n / 2));
        res = res * res;

        if (n % 2 === 1) {
            return res * x;
        }

        return res;
    }

    let ans = calc_power(x, Math.abs(n));

    if (n >= 0) {
        return ans;
    }

    return 1 / ans;
}
