import { getPrimes } from '../src/scanner.js';

function runBenchmark() {
    // We test a fixed window size (e.g., 1000 indices) at different magnitudes
    const windowSize = 1000n;
    const magnitudes = [1n, 3n, 6n, 9n, 12n, 15n, 18n, 21n];

    console.log(`| Magnitude (10^x) | Start Index (k) | Time for ${windowSize} checks | Primes Found |`);
    console.log(`| :--- | :--- | :--- | :--- |`);

    magnitudes.forEach(m => {
        const startK = 10n ** m + 1n;
        const endK = startK + (windowSize * 2n); // *2 because we increment k by 2n
        
        let foundCount = 0;
        const startTime = performance.now();

        for (let k = startK; k < endK; k += 2n) {
            const result = getPrimes(k);
            foundCount += result.length;
        }

        const duration = (performance.now() - startTime).toFixed(2);
        console.log(`| 10^${m.toString().padEnd(2)} | ${startK.toString().padEnd(15)} | ${duration.toString().padStart(8)}ms | ${foundCount.toString().padStart(6)} |`);
    });
}

console.log("--- Prime Index Scanner Benchmark ---");
runBenchmark();
