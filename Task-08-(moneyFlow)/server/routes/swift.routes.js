const router = require('express').Router()
const branchesRoutes = require('./swift/branches.routes');
const transactionsRoutes = require('./swift/transactions.routes')

// /swift/

router.use('/branches', branchesRoutes)
router.use('/transactions', transactionsRoutes)

module.exports = router;