
// b: 1000
// a: 100
// s: -1

const { User } = require("../../../models/user.model");

// b = 1000 + (-1 * 100) = 1000 + (-100) = 1000 - 100 = 900



const CreateTransactionController = async (req, res) => {
    const user = await User.findById(req.user.id);
    const {amount, fromId, toId, type, note} = req.body;

    const sign = type === 'income' ? 1 : -1;
    const singedAmount = +amount * sign;

    const fromBranch = user.branches.find(b => b._id == fromId)
    if (!fromBranch) return branchNotFound(res)
    fromBranch.balance += singedAmount

    let toBranch = fromBranch;
    if (type === 'transfer') {
        toBranch = user.branches.find(b => b._id == toId);
        if (!toBranch) return branchNotFound(res)
        toBranch.balance += +amount
    }

    const transaction = {
		type,
		amount,
		from: {
			id: fromBranch._id,
			name: fromBranch.name,
		},
		to: {
			id: toBranch._id,
			name: toBranch.name,
		},
        note
	};

    user.transactions.push(transaction)

    await user.save()

    res.status(201).json({
        transaction,
        from: fromBranch,
        to: toBranch
    })


}

function branchNotFound(res) {
    res.status(400).json({msg: "Branch Not Found With Given Id"})
}

module.exports = {CreateTransactionController}