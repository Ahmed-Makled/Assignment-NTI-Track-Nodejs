const { User } = require("../../models/user.model");

const ValidateUserExist = async (req, res, next) => {
     const user = await User.findById(req.user.id);
	if (!user) return res.status(400).json({ msg: 'User Not Found With Given ID' });
    next()
}

module.exports = {ValidateUserExist}