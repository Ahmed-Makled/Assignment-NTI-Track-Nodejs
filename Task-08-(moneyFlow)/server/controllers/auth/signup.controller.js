const {Password} = require('../../utils/password.utils');
const {User} = require('../../models/user.model')

const SignupController = async (req, res) => {
	const { name, email, password } = req.body;

	const existUser = await User.findOne({ email });

	if (existUser) return res.status(400).json({ msg: 'User Already Exists' });

	const user = new User({ name, email, password: Password.hash(password) });

	await user.save();

	res.status(201).json({ msg: 'User Created Successfully' });
};

module.exports = { SignupController };
