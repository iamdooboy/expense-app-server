import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

//Hash password
userSchema.pre('save', async function (next) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);

export default User;
