const jwt = require('jsonwebtoken');

const pass = 'aklsdfjlaskdjflkjs';
const sign = (data) => jwt.sign(data, pass);
const verify = (token) => jwt.verify(token, pass);

const JWT = {
	sign,
	verify,
};

module.exports = {JWT}
