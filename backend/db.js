const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://devaryaman4:aryaman15@cluster0.irulq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

const accountSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    balance: { type: Number, required: true }
});

const transferHistorySchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);
const TransferHistory = mongoose.model("TransferHistory", transferHistorySchema);

module.exports = {
    User,
    Account,
    TransferHistory
};
