/*
	This file holds the test for the strip and lowercase function from
	stringManip.js
*/

// Import stripToLower function
const { stripToLower } = require("./stringManip.js")

// Test out the function; spaces before "hello" and "world" should be
// removed, and the "h" and "w" should be lowercased
stripToLower("    Hello            World                    ")

