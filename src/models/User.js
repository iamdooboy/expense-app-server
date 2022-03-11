import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter a email'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
    },
});

const User = mongoose.model('User', userSchema);

export default User;
