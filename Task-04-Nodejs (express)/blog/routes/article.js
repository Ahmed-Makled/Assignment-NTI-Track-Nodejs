var express = require("express");
var router = express.Router();

/***********************************************
 *
 * Defiend Global Variable
 *
 **********************************************/
const articlesData = []; //Setup JS array to act as endpoint for all routes
const user = { id: 1, name: "ahmed" };
let lastID = 0; // to make increment id

/***********************************************
 * End Global Variable
 *
 * Start TODO-ROUTES!
 *
 **********************************************/

//---------------------------------------------- Get Method  allData ---------------------------//

router.get("/", (req, res) => {
  res.status(200).json({ articlesData });
});

//---------------------------------------------- Get Method  Dynamic Params ---------------------------//

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const article = articlesData.find((art) => {
    console.log(`art.id: ${art.id}`);
    return art.id == id;
  });

  if (!article) {
    res.status(404).json({ msg: "Article Not Found" });
  } else {
    res.status(200).json({ article });
  }
});
//---------------------------------------------- Delete Method  Remove Article ---------------------------//

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const article = articlesData.find((art) => {
    return art.id == id;
  });

  if (!article) {
    res.status(404).json({ msg: "Article Not Found" });
  } else {
    const remove = articlesData.filter((art) => {
      return art.id != id;
    });
    res.status(200).json(remove);
  }
});
//---------------------------------------------- Put Method  Eidt Article ---------------------------//

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const article = articlesData.find((art) => {
    return art.id == id;
  });

  if (!article) {
    res.status(404).json({ msg: "Article Not Found" });
  } else {
    article.title = title ? title : article.title;
    article.content = content ? content : article.content;
    res.status(200).json({ article });
  }
});

//---------------------------------------------- Post Method  Add New Article ---------------------------//

router.post("/", (req, res) => {
  const { title, content } = req.body;
  lastID++;
  const article = {
    id: lastID,
    title: title,
    content: content,
    date: new Date(),
    publisher: user,
  };
  articlesData.push(article);

  res.status(201).json({ article });
});

//Export module
module.exports = router;
