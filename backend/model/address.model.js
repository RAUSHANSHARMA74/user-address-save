import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    street: { type: String, required: true },
    village: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const AddressModel = mongoose.model('Address', addressSchema);

export { AddressModel };
