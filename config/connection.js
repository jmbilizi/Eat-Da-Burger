var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "s0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "eydxu0ukl9d49vlw",
  password: "m3jipn1qzdtkvgw4",
  database: "nm3amn9ex05769it",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
