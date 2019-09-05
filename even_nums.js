/*
	This file exports a function that returns even numbers in an array
*/

// Exported function is an arrow function
exports.evens = () => {
	// Array for even numbers
	const lst = []

	// Start at 0, and increase to 50
	let s = 0
	while(++s <= 50) {
		// If remainder from modulo is 0, push the number into array
		if(s % 2 === 0) lst.push(s)
	}

	return lst
}

