const { User } = require("../../../models/user.model")

const GetUserFullTransactionsController = async(req, res) => {


    const user = await User.findById(req.user.id)


    res.status(200).json({
        transactions: user.transactions
    })


}


module.exports = {GetUserFullTransactionsController}