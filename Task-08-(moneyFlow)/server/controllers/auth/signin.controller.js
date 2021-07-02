const {Password} = require('../../utils/password.utils')
const {JWT} = require('../../utils/jwt.util');
const {User} = require('../../models/user.model')
const {UserDto}= require('../../dto/user.dto')

const SigninController = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (!user) return res.status(404).json({ msg: 'user Not Found' });

	const validPassword = Password.compare(password, user.password);

	if (!validPassword)
		return res.status(400).json({
			msg: 'Invalid Credentials',
		});

	const userData = UserDto(user);
	const token = JWT.sign(userData);

	res.status(200).json({
		user: userData,
		token,
	});
};

module.exports = {SigninController}