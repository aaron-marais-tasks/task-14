/*
	This module deletes nums.txt
*/

// Import file system library
const fs = require("fs")

// Attempt to unlink (delete) file
fs.unlink("./nums.txt", err => {
	// If error, display that can't be removed
	if(err) return console.log("File cannot be removed")

	console.log("File has been removed")
})
