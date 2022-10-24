const mongoose = require("mongoose");

module.exports = (mongoURI) => {
  const connect = () => {
    if (mongoURI) {
      mongoose.connect(mongoURI)
              .then(() => console.info(`Successfully connected to database`))
              .catch((err) => {
                  console.error(`Error connecting to database : ${err}`)
                  return process.exit(1)
              });
    } else {
      console.log("URI is undefined")
    }
  }

  connect()

  // Reconnect if mongoose disconnects
  mongoose.connection.on('disconnected', connect);
}