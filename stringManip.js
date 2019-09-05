/*
	This file exports a function that strips and lowercases a string, and
	writes into content.txt
*/

// Import file system library.
const fs = require("fs")

// Exported function is an arrow function, with 1 argument (string)
exports.stripToLower = string =>
	// Write the trimmed, lowercased string into content.txt
	fs.writeFile("content.txt", string.trim().toLowerCase(),- function(err) {
		// Display error if error exists
		if(err) return console.log(err)
			
		console.log("Saved file")
	})

