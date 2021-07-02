const { CreateBranchController } = require('../../controllers/swift/branches/create-branch.controller');
const { GetUserFullBranchListController } = require('../../controllers/swift/branches/get-user-branch-list.controller');
const { ValidateToken } = require('../../middlewares/auth/validate-token.middleware');
const { ValidateUserExist } = require('../../middlewares/auth/validate-user-exist.middleware');

const router = require('express').Router();


// branches
// /swift/branches/*


router.get('/fullBranchList', ValidateToken, ValidateUserExist,  GetUserFullBranchListController);
router.post('/createBranch', ValidateToken,ValidateUserExist,  CreateBranchController)

module.exports = router;
