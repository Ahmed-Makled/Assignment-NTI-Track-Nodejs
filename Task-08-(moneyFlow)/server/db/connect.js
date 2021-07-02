const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true, useUnifiedTopology: true
}
const URI = 'mongodb://localhost:27017/g4-moneyFlow'
async function connectDB () {
   await  mongoose.connect(URI, options)
   console.log('DB Connection Started Successfully')
}

module.exports = {connectDB}