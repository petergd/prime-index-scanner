import { getPrimes, addPrimesToArray } from '../src/scanner.js';

/**
 * Hunt for Twin Primes starting from a specific index.
 * @param {bigint} startK - The k-index to start searching from.
 * @param {bigint} range - How many k-indices to scan.
 */
function huntForTwins(startK, range) {
    const twinPairs = [];
    const endK = startK + range;

    console.log(`🚀 Starting Twin Hunter at k = ${startK}`);
    console.time('Hunter Duration');

    for (let k = startK; k < endK; k += 2n) {
        // Using your new 'twins' flag to filter results directly
        const result = getPrimes(k, true);
        
        if (result.length > 0) {
            console.log(`✨ Twin Primes Found at k=${k}: (${result[0]}, ${result[1]})`);
            addPrimesToArray(result, twinPairs);
        }
    }

    console.timeEnd('Hunter Duration');
    console.log(`📊 Found ${twinPairs.length / 2} twin pairs in a range of ${range} indices.`);
}

// Example: Search in the trillions
const trillionsK = 1000000000001n;
huntForTwins(trillionsK, 5000n);
