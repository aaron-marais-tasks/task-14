/*
	This file exports a function that lists prime numbers in an array
*/

// Exported function is an arrow function
exports.primes = () => {
	// Array to hold number list
	const lst = []

	// Start at 0; increase until 100
	let s = 0
	while(++s <= 100) {
		// Boolean to skip this number if not prime
		let skip = false

		// Start at 2, increase until {s} - 1
		let t = 2
		while(++t <= s - 1) {
			// If divisible by any number between 2 and {s} - 1, skip this number
			if(s % t === 0) {
				skip = true
				break
			}
		}

		// Don't push if skipping
		if(skip) continue

		lst.push(s)
	}

	return lst
}
