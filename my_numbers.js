/*
	This file handles writing to nums.txt, and hosting web server to display them
*/

// Import primes and evens from modules
const {primes} = require("./primes.js")
const {evens} = require("./even_nums.js")

// Import filesystem module
const fs = require('fs')

// Import Express module and create express app
const express = require("express")
const app = express()

// Write to nums.txt and join with \n
fs.writeFile("./nums.txt", [
	"Primes:",
	// Number arrays are joined with \n
	primes().join("\n"),
	"",
	"Even numbers",
	// Number arrays are joined with \n
	evens().join("\n")
].join("\n"), function(err) {
	// If error, log it
	if(err) return console.log(err)

	console.log("Saved file")
})

// Server root should display contents from file nums.txt
app.get('/', (rq, rs) => {
	// Read file in UTF-8 mode so we don't get a raw buffer
	fs.readFile("./nums.txt", "utf8", (err, data) => {
		// Display error if error exists
		if(err) return rs.send(err)

		// Set plain text content type, for newlines to appear
		rs.set("Content-Type", "text/plain")

		rs.send(data)
	})
})

// Host webserver on port 8000
app.listen(8000)

