import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }]
});

const UserModel = mongoose.model('User', userSchema);

export { UserModel };
