const { User } = require("../../../models/user.model")

// EXPENSE
// b: 1000
// a: 100
// s: -1
// b = 1000 + (-1 * 100) = 1000 + (-100) = 1000 - 100 = 900


// REVERSE EXPENSE
// b = 900
// a = 100
// s = 1
// b = 900 + 100 = 1000


const DeleteTransaction = async (req, res) => {
    const user = await User.findById(req.user.id);
    const {id} = req.params
    const transactionIndex = user.transactions.findIndex(t => t._id == id)
    if (transactionIndex == -1) return res.status(404).json({msg: "Transaction Not Found With Given Id"})
    const transaction = user.transactions[transactionIndex]
    const { from, to, amount, type } = transaction;

    const sign = type === 'income' ? -1 : 1
    const signedAmount = amount * sign

    const fromBranch = user.branches.find(b => b._id == from.id)
    if (!fromBranch) return branchNotFound(res)
    fromBranch.balance += signedAmount;

    
    let toBranch = fromBranch;
    if (type === 'transfer') {
         toBranch = user.branches.find(b => b._id == to.id)
        if (!toBranch) return branchNotFound(res)
        toBranch.balance -= amount;
    }

    user.transactions.splice(transactionIndex, 1);

    await user.save()

    res.status(200).json({
        transaction,
        from: fromBranch,
        to: toBranch
    })
    

}


function branchNotFound(res) {
	res.status(400).json({ msg: 'Branch Not Found With Given Id' });
}

module.exports = { DeleteTransaction };