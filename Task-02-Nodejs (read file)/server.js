// Setup empty JS object to act as endpoint for all routes
todosData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
];
// Require http module
const http = require("http");
// Require fs module
const fs = require("fs");

// Setup Server
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(fs.readFileSync("./website/todo.html"));
  } else if (req.url == "/home") {
    res.end(fs.readFileSync("./website/index.html"));
  } else if (req.url == "/todo") {
    res.end(fs.readFileSync("./website/todo.html"));
  } else if (req.url == "/script") {
    res.end(fs.readFileSync("./website/js/app.js"));
  } else if (req.url == "/style") {
    res.end(fs.readFileSync("./website/css/style.css"));
  } else if (req.url == "/style2") {
    res.end(fs.readFileSync("./website/css/style2.css"));
  } else if (req.url == "/add") {
    // todosData.id = req.body.id;
    // todosData.title = req.body.title;
  } else if (req.url == "/all") {
    res.end(JSON.stringify(todosData));
    // console.log(todosData);
  } else {
    res.end(fs.readFileSync("./website/404.html"));
  }
});
// Setup Port
const port = 5000;
//Spin up the server
server.listen(port, listening);
// callback to debug
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}
