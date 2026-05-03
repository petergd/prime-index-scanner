export function isPrimeMillerRabin(n, k = 5) {
    if (n < 2n) return false;
    if (n === 2n || n === 3n) return true;
    if (n % 2n === 0n) return false;

    // Write n-1 as 2^s * d
    let d = n - 1n;
    let s = 0n;
    while (d % 2n === 0n) {
        d /= 2n;
        s++;
    }

    for (let i = 0; i < k; i++) {
        // Pick a random witness 'a' in [2, n-2]
        let a = 2n + BigInt(Math.floor(Math.random() * Number(n - 4n)));
        let x = power(a, d, n);

        if (x === 1n || x === n - 1n) continue;

        let composite = true;
        for (let r = 1n; r < s; r++) {
            x = (x * x) % n;
            if (x === n - 1n) {
                composite = false;
                break;
            }
        }
        if (composite) return false;
    }
    return true;
}

// Modular exponentiation: (base^exp) % mod
function power(base, exp, mod) {
    let res = 1n;
    base = base % mod;
    while (exp > 0n) {
        if (exp % 2n === 1n) res = (res * base) % mod;
        base = (base * base) % mod;
        exp = exp / 2n;
    }
    return res;
}