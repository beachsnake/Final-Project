"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

const { getBoundaries, getRepresentatives, getLatLong } = require("./handlers");

express()
	// Below are methods that are included in express(). We chain them for convenience.
	// --------------------------------------------------------------------------------

	// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
	.use(morgan("tiny"))
	.use(express.json())

	// Any requests for static files will go into the public folder
	.use(express.static("public"))

	// ---------------------------------

	//GET lat/long by Postalcode OR address.
	.get("/api/get-latlong", getLatLong)
	//GET electoral boundaries
	.get("/api/get-boundaries", getBoundaries)
	//GET Representatives by lat/long
	.get("/api/get-representatives", getRepresentatives)

	// .post("/api/add-user", createUser)

	// .get("/api/get-user", getUserInfo)

	// .delete("/api/delete-user/:userId", deleteUser)

	// ---------------------------------

	// this is our catch all endpoint.
	.get("*", (req, res) => {
		res.status(404).json({
			status: 404,
			message: "This is obviously not what you are looking for.",
		});
	})

	// Node spins up our server and sets it to listen on port 8000.
	.listen(8000, () => console.log(`Listening on port 8000`));
