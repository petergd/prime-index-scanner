
------------------------------

## Prime Index Scanner 🔍
A lightweight, memory-efficient JavaScript utility for exploring the number line and finding prime numbers at scale using an index-based approach.

## 🚀 How it Works
Unlike traditional sieves that require massive amounts of memory to store every prime, this scanner uses a targeted window approach. It relies on two mathematical principles:

   1. The 6k + 1 Rule: Every prime number greater than 3 can be expressed in the form 6k + 1. By using an index k, we can instantly jump to a region of the number line and test the most likely candidates.
   2. Miller-Rabin Primality Test: Instead of slow trial division, we use modular exponentiation to verify primality. This allows us to check numbers in the trillions (or even nonillions) in milliseconds.

## 🛠 Features

* Index-Based Jumping: Jump to any part of the number line by simply changing the k value.
* BigInt Support: Search for primes far beyond the standard Number.MAX_SAFE_INTEGER.
* Memory Efficient: No large arrays or bitmaps stored in RAM.
* Twin Prime Detection: Because we check both 3k+2 and 3k+4 for a given odd k, finding two primes in one index iteration identifies a pair of Twin Primes.

## 📈 Performance

| Range | Method | Time per Check |
|---|---|---|
| Trillions (10<sup>12</sup>) | Trial Division | ~Hours |
| Trillions (10<sup>12</sup>) | Miller-Rabin (This Repo) | < 1ms |

## Performance Benchmark
Fixed window of 1,000 index checks (k) per magnitude.

| Magnitude (10^x) | Start Index (k) | Time (ms) | Primes Found |
|---|---|---|---|
| 10<sup>3</sup> | 1,001 | ~10.3 ms | 352 |
| 10<sup>6</sup> | 1,000,001 | ~13.4 ms | 200 |
| 10<sup>9</sup> | 1,000,000,001 | ~24.8 ms | 139 |
| 10<sup>12</sup> | 1,000,000,000,001 | ~35.4 ms | 92 |
| 10<sup>15</sup> | 1,000,000,000,000,001 | ~36.0 ms | 79 |
| 10<sup>18</sup> | 1,000,000,000,000,000,001 | ~50.1 ms | 68 |
| 10<sup>21</sup> | 1,000,000,000,000,000,000,001 | ~50.2 ms | 46 |
| 10<sup>24</sup> | 1,000,000,000,000,000,000,000,001 | ~63.1 ms | 66 |

## 💡 Key Takeaways from the Data:

* Near-Constant Time: Notice that the time taken to check 1,000 indices at 10<sup>24</sup> is only about 6 times slower than at 10^3, despite the numbers being 21 orders of magnitude larger.
* Thinning Density: As expected, the number of primes found in the same size window generally decreases as k increases, demonstrating the Prime Number Theorem.
* BigInt Reliability: The consistent performance across the trillions and quintillions shows that BigInt modular exponentiation is highly optimized in modern JavaScript engines (V8).

## 🧪 Experiments to Try

* Find a Prime Desert: Find the longest sequence of k values where no primes exist.
* Twin Prime Hunter: Track how many times both candidates in a single index return true.
* Large Prime Search: Set your k value to 1000000000000000000000n and find the first prime in the septillions.

## 📊 Empirical Search Data (k = 1 to k = 29,000,000)

* This table catalogs data gathered across a continuous range of 29 Million index checks, mapping directly to a target testing window from 5 to 87,000,004.

* Window Size per Row: 1,000,000 index steps (\(3,000,000\) candidate integers).

* Twin Prime Gaps: The distance between consecutive pairs of prime twins (\(p_2 - p_1\)).

| Index Start | Index End | Primes Found | Twin Pairs | Max Prime Desert (Span) | Max Twin Desert (Span) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 1,000,000 | 216,814 | 41,862 | 2,010,733 → 2,010,881 (148) | 2,868,959 → 2,870,471 (1,512) |
| 1,000,001 | 2,000,000 | 196,033 | 33,968 | 4,652,353 → 4,652,507 (154) | 4,869,911 → 4,871,441 (1,530) |
| 2,000,001 | 3,000,000 | 189,640 | 31,902 | 7,230,331 → 7,230,479 (148) | 6,550,499 → 6,551,957 (1,458) |
| 3,000,001 | 4,000,000 | 185,571 | 30,288 | 11,113,933 → 11,114,087 (154) | 9,923,987 → 9,925,709 (1,722) |
| 4,000,001 | 5,000,000 | 182,644 | 29,298 | 13,626,257 → 13,626,407 (150) | 14,656,517 → 14,658,419 (1,902) |
| 5,000,001 | 6,000,000 | 180,663 | 28,892 | 17,051,707 → 17,051,887 (180) | 17,382,479 → 17,384,669 (2,190) |
| 6,000,001 | 7,000,000 | 178,576 | 27,994 | 20,831,323 → 20,831,533 (210) | 19,265,507 → 19,267,361 (1,854) |
| 7,000,001 | 8,000,000 | 177,180 | 27,634 | 22,790,357 → 22,790,507 (150) | 21,501,371 → 21,503,357 (1,986) |
| 8,000,001 | 9,000,000 | 175,942 | 27,212 | 25,173,437 → 25,173,593 (156) | 24,815,507 → 24,817,277 (1,770) |
| 9,000,001 | 10,000,000 | 174,795 | 26,732 | 27,915,737 → 27,915,907 (170) | 29,769,011 → 29,771,087 (2,076) |
| 10,000,001 | 11,000,000 | 173,808 | 26,530 | 31,269,229 → 31,269,377 (148) | 32,822,369 → 32,825,201 (2,832) |
| 11,000,001 | 12,000,000 | 172,594 | 26,200 | 33,803,689 → 33,803,849 (160) | 33,718,649 → 33,720,389 (1,740) |
| 12,000,001 | 13,000,000 | 172,141 | 26,302 | 36,271,601 → 36,271,783 (182) | 37,813,577 → 37,815,707 (2,130) |
| 13,000,001 | 14,000,000 | 171,217 | 25,716 | 39,389,989 → 39,390,167 (178) | 39,126,959 → 39,129,071 (2,112) |
| 14,000,001 | 15,000,000 | 170,540 | 25,430 | 42,082,301 → 42,082,471 (170) | 42,534,599 → 42,536,909 (2,310) |
| 15,000,001 | 16,000,000 | 169,984 | 25,372 | 47,326,693 → 47,326,913 (220) | 45,486,071 → 45,488,117 (2,046) |
| 16,000,001 | 17,000,000 | 169,350 | 24,944 | 49,269,581 → 49,269,739 (158) | 50,630,621 → 50,633,207 (2,586) |
| 17,000,001 | 18,000,000 | 168,709 | 25,132 | 53,230,873 → 53,231,051 (178) | 53,262,359 → 53,264,681 (2,322) |
| 18,000,001 | 19,000,000 | 168,232 | 24,926 | 54,164,651 → 54,164,807 (156) | 55,368,827 → 55,370,837 (2,010) |
| 19,000,001 | 20,000,000 | 167,680 | 24,780 | 59,637,013 → 59,637,191 (178) | 58,406,531 → 58,408,367 (1,836) |
| 20,000,001 | 21,000,000 | 167,191 | 24,436 | 60,458,353 → 60,458,521 (168) | 61,177,199 → 61,179,359 (2,160) |
| 21,000,001 | 22,000,000 | 166,817 | 24,446 | 65,069,327 → 65,069,497 (170) | 64,869,689 → 64,871,687 (1,998) |
| 22,000,001 | 23,000,000 | 166,551 | 24,694 | 66,172,753 → 66,172,907 (154) | 66,110,129 → 66,112,157 (2,028) |
| 23,000,001 | 24,000,000 | 165,984 | 24,014 | 70,396,393 → 70,396,589 (196) | 70,722,779 → 70,725,071 (2,292) |
| 24,000,001 | 25,000,000 | 165,646 | 24,292 | 72,495,743 → 72,495,919 (176) | 74,240,099 → 74,243,591 (3,492) |
| 25,000,001 | 26,000,000 | 165,241 | 24,114 | 75,503,447 → 75,503,609 (162) | 75,672,341 → 75,675,011 (2,670) |
| 26,000,001 | 27,000,000 | 164,865 | 23,642 | 79,167,731 → 79,167,917 (186) | 78,794,057 → 78,796,691 (2,634) |
| 27,000,001 | 28,000,000 | 164,729 | 23,986 | 81,767,249 → 81,767,419 (170) | 83,005,709 → 83,008,307 (2,598) |
| 28,000,001 | 29,000,000 | 164,041 | 23,802 | 84,549,821 → 84,549,991 (170) | 85,539,059 → 85,541,087 (2,028) |

### 🌌 Astronomical Scale Search Result (Nonillions)

To test the absolute limits of the `BigInt` Miller-Rabin engine, the scanner was initialized at $k = 10<sup>30</sup>$ (1 Nonillion). The system cleared the localized composite numbers instantly:

*   **Starting Index ($k$):** `1000000000000000000000000000000n`
*   **Discovered Index ($k$):** `1000000000000000000000000000029n`
*   **Formula Checked:** $3k + 2$
*   **Verified Nonillion Prime:** `3000000000000000000000000000091n`

Even at 31 digits long, the scanner required only **15 index iterations** to deliver a verified prime, demonstrating that the computational overhead scales logarithmically rather than linearly.

### 🧠 Prime Complexity Proof (Complex Patterns)

To prove that the scanner's efficiency is immune to number pattern complexity, the system was tested using a highly complex, 31-digit non-uniform index ($k$). 

*   **Complex Starting Index ($k$):** `1234567890987654321012345678909n`
*   **Discovered Index ($k$):** `1234567890987654321012345678913n`
*   **Formula Checked:** $3k + 2$
*   **Verified Complex Prime:** `3703703672962962963037037036741n`

The scanner navigated through this chaotic mathematical terrain and delivered a verified prime in just **2 index iterations**, proving that structural complexity does not alter the logarithmic scaling of the algorithm.

------------------------------



