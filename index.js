import { getPrimes, addPrimesToArray } from './src/scanner.js';

let allPrimes = [];
let allTwins = [];

for (let k = 1n; k < 100n; k += 2n) {
  // Use it normally
  addPrimesToArray(getPrimes(k), allPrimes);

  // Use it to hunt specifically for twins
  addPrimesToArray(getPrimes(k, true), allTwins);
}

console.log(`Found ${allPrimes.length} primes!`);
console.log(allPrimes.map(p => p.toString()));

console.log(`Found ${allTwins.length} prime twins!`);
console.log(allTwins.map(p => p.toString()));