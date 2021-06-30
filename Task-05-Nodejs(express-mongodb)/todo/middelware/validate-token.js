const jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  const authorization = req.headers.authorization; // get auth from headres

  // check auth found or not
  if (!authorization) {
    return res.status(401).json({ msg: "invalid Token" }); // status 401  unauth
  } else {
    const token = authorization.split(" ")[1]; // spilt space from token and get index 1

    try {
      const user = jwt.verify(token, "asdgjhhlhasmqwe"); // verify token sign
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      res.status(401).json({ msg: " Invalid Token" });
    }
  }
}

module.exports = { validateToken };
