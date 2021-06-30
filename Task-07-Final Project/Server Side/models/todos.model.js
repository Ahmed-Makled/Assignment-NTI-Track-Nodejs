// import mongoose
const mongoose = require("mongoose");

/**
 * create instans of mongoose
 * using method SChema to built a Strucher object
 */
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  who: {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  dueDate: {
    type: Date,
    default: new Date(),
  },
});
const Todo = mongoose.model("todos", todoSchema);

module.exports = {
  Todo,
};
