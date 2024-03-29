import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const budgetSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter a budget name'],
        },
        amount: {
            type: Number,
            required: [true, 'Please add a number'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User ID is required'],
        },
        edit: {
            type: Boolean,
            default: false,
        },
    },
    {
        toJSON: {
            virtual: true,
        },
        toObject: {
            virtual: true,
        },
    }
);

budgetSchema.plugin(mongoosePaginate);
const Budget = mongoose.model('budget', budgetSchema);

export default Budget;
