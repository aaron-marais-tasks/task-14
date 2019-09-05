/*
	This file displays a message in browser when visiting a link
*/

// Import express and create app
const express = require("express")
const app = express()

// Root get should send message to browser
app.get("/", (rq, rs) => rs.send("Hey! I can use Node!"))

// Listen on port 3000
app.listen(3000)
