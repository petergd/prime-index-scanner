import { getPrimes, addPrimesToArray } from './src/scanner.js';



for(let y = 0n; y < 100n; y++) {

	let allPrimes = [];
	let allTwins = [];
	let desert = [BigInt(0),BigInt(0)];
	let twinsDesert = [BigInt(0),BigInt(0)];
	let counter = BigInt(0);
	let twinsCounter = BigInt(0);
	console.log(`Start index ${y*1000000n + 1n} end index ${(y+1n)*1000000n}`);
	
	for (let k = (y*1000000n + 1n); k < ((y+1n)*1000000n); k += 2n) {
	  const primes = getPrimes(k);
	  const twinPrimes = getPrimes(k, true);
	  if(primes === k) {
		  counter++;
		  if(counter > desert[0]) {
			  desert = [counter, k];  
		  }
	  } else {
		  counter = BigInt(0);
		  // Use it normally
		  addPrimesToArray(primes, allPrimes);
	  }
	  if(twinPrimes === k) {
		  twinsCounter++;
		  if(twinsCounter > twinsDesert[0]) {
			  twinsDesert = [twinsCounter, k];  
		  }
	  } else {
		  twinsCounter = BigInt(0);
		  // Use it to hunt specifically for twins
		  addPrimesToArray(twinPrimes, allTwins);
	  }
	}

	console.log(`Found ${allPrimes.length} primes!`);
	//console.log(allPrimes.map(p => p.toString()));

	console.log(`Found ${allTwins.length} prime twins!`);
	//console.log(allTwins.map(p => p.toString()));

	const start = getPrimes(desert[1]-2n*desert[0]);
	const end = getPrimes(desert[1]+2n);
	
	console.log(`Found largest desert area between primes ${start} and ${end}`);
	console.log(desert.map(p => p.toString()));
	
	const tstart = getPrimes(twinsDesert[1]-2n*twinsDesert[0], true);
	const tend = getPrimes(twinsDesert[1]+2n, true);

	console.log(`Found largest desert area between prime twins ${tstart} and ${tend}`);
	console.log(twinsDesert.map(p => p.toString()));

}