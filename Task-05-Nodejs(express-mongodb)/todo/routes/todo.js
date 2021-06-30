var express = require("express");
var router = express.Router();
const { Todo } = require("../models/todos.model");
const { validateToken } = require("../middelware/validate-token");
const { todoDTO } = require("../dto/dto-todo");

/***********************************************
 *
 * Defiend Global Variable
 *
 **********************************************/
const User = { id: 1, name: "ahmed" };

/***********************************************
 * End Global Variable
 *
 * Start TODO-ROUTES!
 *
 **********************************************/

//---------------------------------------------- Get Method  allData ---------------------------//

router.get("/", validateToken, async (req, res) => {
  const todo = await Todo.find();
  const todoData = todo.map((element) => {
    return todoDTO(element);
  });

  res.status(200).json({ todoData });
});

//---------------------------------------------- Get Method  Dynamic Params ---------------------------//

router.get("/:id", validateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id); // find Todo in db
    if (!todo) {
      res.status(404).json({ msg: "todo Not Found" }); // status 404 not found
    } else {
      res.status(200).json({ todo }); // status 200 successfully post
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Invalid Id" }); // status 400 bad request
  }
});

//---------------------------------------------- Delete Method  Remove todo ---------------------------//

router.delete("/:id", validateToken, async (req, res) => {
  const { id } = req.params; // get id from params

  const todo = await Todo.findByIdAndDelete(id); // delete todo
  // check todo found or not
  if (!todo) {
    res.status(404).json({ msg: "todo Not Found" }); // status 404 not found
  } else {
    res.status(200).json({ msg: "todo Deleted Successfully" }); // status 200 successfully
  }
});
//---------------------------------------------- Put Method  Eidt todo ---------------------------//

router.put("/:id", validateToken, async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body; // get title, description, status, form body
  const todo = await Todo.findById(id);

  todo.title = title ? title : todo.title;
  todo.description = description ? description : todo.description;
  todo.status = status ? status : todo.status;
  await todo.save(); // save Update todo in db
  const todoUpdate = todoDTO(todo);

  res.status(201).json({ todoUpdate }); // status 201 successfully Update
});

//---------------------------------------------- Post Method  Add New todo ---------------------------//

router.post("/", validateToken, async (req, res) => {
  const { title, description, status } = req.body; // get titlte and content form body
  // create new todo
  const todo = new Todo({
    title,
    description,
    status,
    who: req.user,
  });
  await todo.save(); // save new todo in db
  res.status(201).json({ todo }); // status 201 successfully post
});

//Export module
module.exports = router;
