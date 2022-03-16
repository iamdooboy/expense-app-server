import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        require: [true, 'Please select a type'],
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text'],
    },
    amount: {
        type: Number,
        required: [true, 'Please add a number'],
    },
    budget: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Budget',
        required: [true, 'Budget ID is required'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Transaction = mongoose.model('transaction', transactionSchema);

export default Transaction;
