import { getPrimes } from '../src/scanner.js';

function findFirstSeptillionPrime(targetK) {
  
    console.log(`Searching for the first prime at k = ${targetK}...`);
    
    let k = targetK;
    
    while (true) {
        // Ensure k remains odd to fit your scanner logic
        if (k % 2n === 0n) k += 1n; 
        
        const foundPrimes = getPrimes(k);
        if (foundPrimes !== k) {
            console.log(`\n🎉 Success! First prime(s) found at index k = ${k}:`);
            foundPrimes.forEach(p => console.log(`👉 ${p.toString()}`));
            break;
        }
        k += 2n; // Jump to the next odd index
    }
}

findFirstSeptillionPrime(1000000000000000000000000000000n);

findFirstSeptillionPrime(1234567890987654321012345678909n);