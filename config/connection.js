const mongoose = require("mongoose");

// The connection to the database is made by importing the mongoose package and calling the connect() method on it. This method is used to connect to the social-network-api database on the local machine. If the environment variable MONGODB_URI exists, it will connect to that database. Otherwise, it will fall back to the local database. The options passed in are to use the new URL parser and to use the new server discovery and monitoring engine. The connection is then exported to be used in server.js.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
