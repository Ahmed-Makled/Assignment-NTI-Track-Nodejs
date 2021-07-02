const mongoose  = require('mongoose')

const branchSchema = new mongoose.Schema({
	name: { type: String, required: true },
	balance: { type: Number, default: 0 },
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// income | expense | transfer
const branchTransactionSchema = new mongoose.Schema({
    type: {
        type: String,
        require: true,
        enum: ['income', 'expense', 'transfer']
    },
    amount: {
        type: Number,
        required: true
    },
	from: {
		id: { type: String, required: true },
		name: { type: String, required: true },
	},
	to: {
		id: { type: String, required: true },
		name: { type: String, required: true },
	},
    note: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	branches: [branchSchema],
	transactions: [branchTransactionSchema],
});

const User = mongoose.model('user', userSchema);

module.exports = {User}