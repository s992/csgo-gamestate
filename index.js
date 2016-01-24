var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var sampleDataStream = fs.createWriteStream(`./sample-data/sample.json`, { flags: "a" });

sampleDataStream.write("[");
app.use( bodyParser.json() );

app.post("/", function( req, res ) {
	sampleDataStream.write(`${JSON.stringify( req.body )},`);
	res.status(200).send("");
});

app.listen(3000, function() {
	console.log("Listening on port 3000");
});

process.on("exit", exitHandler);
process.on("SIGINT", exitHandler);

function exitHandler() {
	sampleDataStream.end("]");
}