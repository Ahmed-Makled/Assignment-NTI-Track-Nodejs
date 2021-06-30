const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true,  useUnifiedTopology: true,
  });
  mongoose.connection.on(
    "error",
    console.error.bind(console, "Connection DB Error:")
  );
  mongoose.connection.once("open", function () {
    console.log("DB Connection Established Successfully");
  });
};

module.exports = { connectDB };
