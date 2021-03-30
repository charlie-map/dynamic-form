const express = require('express');
const mysql = require('mysql2');
const app = express();

//CREATE USER 'tester'@'localhost' IDENTIFIED BY '479816';
//GRANT ALL PRIVILEGES ON dumbydb.* TO 'tester'@'localhost';
//FLUSH PRIVILEGES;
const connection = mysql.createConnection({
	host: 'localhost',
	database: 'dumbydb',
	user: 'tester',
	password: '479816',
	insecureAuth: false
});

connection.connect((err) => {
	if (err) throw err;
});

app.get("/", (req, res) => {
	res.end("Dumby server!");
});

app.listen(3000, () => {
	console.log("server go vroom");
});