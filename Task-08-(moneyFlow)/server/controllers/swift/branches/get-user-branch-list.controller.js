const { User } = require("../../../models/user.model");

const GetUserFullBranchListController = async (req, res) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({ branches: user.branches });
};
module.exports = { GetUserFullBranchListController };
