import { isPrimeMillerRabin } from './primality.js';

export function getPrimes(index, twins = false) {
  const candidates = probablePrimes(index); // Renamed variable to avoid conflict
  const aIsPrime = isPrimeMillerRabin(candidates[0]);
  const bIsPrime = isPrimeMillerRabin(candidates[1]);

  if (twins) {
    // Only return the pair if BOTH are prime
    return (aIsPrime && bIsPrime) ? candidates : index;
  }

  const arr = [];
  if (aIsPrime) arr.push(candidates[0]);
  if (bIsPrime) arr.push(candidates[1]);
  return (!aIsPrime && !bIsPrime) ? index : arr;
}

export function addPrimesToArray(primes, array) {
  if (primes.length > 0) {
    array.push(...primes);
  }
}

function probablePrimes(index) {
  const c = BigInt(index);
  return [3n * c + 2n, 3n * c + 4n];
}
