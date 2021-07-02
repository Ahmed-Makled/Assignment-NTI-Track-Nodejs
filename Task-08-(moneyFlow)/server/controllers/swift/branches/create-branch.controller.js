const { User } = require("../../../models/user.model");

const CreateBranchController = async (req, res) => {
    const {name, balance} = req.body;
    const user = await User.findById(req.user.id)

   

    const branch = {
        name,
        balance
    }

    user.branches.push(branch)

    await user.save();

    res.status(201).json({
        branches: user.branches
    })

}

module.exports = {CreateBranchController}