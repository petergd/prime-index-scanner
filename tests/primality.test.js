import { isPrimeMillerRabin } from '../src/primality.js';

const testCases = [
    { n: 2n, expected: true },
    { n: 4n, expected: false },
    { n: 13n, expected: true },
    { n: 27n, expected: false },
    { n: 2999999n, expected: true }, // The last prime from your original list
    { n: 3000000000013n, expected: true } // A trillion-level prime
];

console.log("Running Primality Tests...");
testCases.forEach(({ n, expected }) => {
    const result = isPrimeMillerRabin(n);
    console.log(`Test n=${n}: ${result === expected ? '✅ PASS' : '❌ FAIL'}`);
});