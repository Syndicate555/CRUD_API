const config = require("config");
const db = config.get("mongoURI");
const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewURLParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("mongoDB connected"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};
