var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/users.model");
const { userDTO } = require("../dto/dto-user");
const jwt = require("jsonwebtoken");

/***********************************************
 *
 * Defiend Global Variable
 *
 **********************************************/

/***********************************************
 * End Global Variable
 *
 * Start TODO-ROUTES!
 *
 **********************************************/
//---------------------------------------------- Get Method  allData ---------------------------//

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
});
//---------------------------------------------- Post Method  signup ---------------------------//

router.post("/signup", async (req, res) => {
  const { name, email, password, type } = req.body;
  const existEmail = await User.findOne({ email }); // find email in db
  const existUserName = await User.findOne({ name }); // find userName in db
  // check email or user named exist or not
  if (existEmail) {
    return res.status(400).json({ msg: ` Email: ${email} is Exists ...` }); // status 400  bad requset
  } else if (existUserName) {
    return res.status(400).json({ msg: ` User Name: ${name} is Exists ...` }); // status 400  bad requset
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10); // hashed password (encrypt)
    // create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      type: "admin",
    });

    await user.save(); // save new user in db

    res.status(201).json({ user }); // status  200 successfully
  }
});

//---------------------------------------------- Post Method  signin ---------------------------//

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); // find email in db
    // check user found or not
    if (!user) {
      return res.status(404).json({ msg: `  ${email} Not Found ...` }); // status  404   not found
    } else {
      const corecctPassword = bcrypt.compareSync(password, user.password); // compare hashed password
      // check password
      if (!corecctPassword) {
        return res.status(401).json({ msg: `Password innCorrect..` }); // status  401   unauthorized
      } else {
        const userData = userDTO(user);

        const token = jwt.sign(userData, "asdgjhhlhasmqwe");
        res.status(200).json({ user: userData, token }); // status  200 successfully

        console.log(`login successful .. \n         Welcome ${userData.name}`);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//Export module
module.exports = router;
