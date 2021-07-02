const { ValidateToken } = require('../../middlewares/auth/validate-token.middleware');
const {CreateTransactionController} = require('../../controllers/swift/transactions/create-transaction.controller');
const { GetUserFullTransactionsController } = require('../../controllers/swift/transactions/get-user-transactions-list.controller');
const { ValidateUserExist } = require('../../middlewares/auth/validate-user-exist.middleware');
const { DeleteTransaction } = require('../../controllers/swift/transactions/delete-transaction.controller');
const router = require('express').Router();

// transactions
// /swift/transactions/*

router.get('/fullTransactions', ValidateToken, ValidateUserExist, GetUserFullTransactionsController);
router.post('/createTransaction', ValidateToken, ValidateUserExist, CreateTransactionController);
router.delete('/:id', ValidateToken, ValidateUserExist, DeleteTransaction);

module.exports = router;
