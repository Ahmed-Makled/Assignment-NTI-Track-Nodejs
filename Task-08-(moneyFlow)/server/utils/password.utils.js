const bcrypt = require('bcrypt')

const hash = (password) => bcrypt.hashSync(password, 10)
const compare = (plain, hashed) => bcrypt.compareSync(plain, hashed)


const Password = {
    hash,
    compare
}


module.exports = {Password}