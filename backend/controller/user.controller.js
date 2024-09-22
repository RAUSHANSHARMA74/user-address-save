import { AddressModel } from "../model/address.model.js";
import { UserModel } from "../model/user.model.js";
import bcrypt from 'bcrypt';

const addUserAndAddress = async (req, res) => {
    try {
        const { user, address } = req.body;
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = await UserModel.create({ ...user, password: hashedPassword });
        const addresses = await AddressModel.insertMany(
            address.map(addr => ({ ...addr, userId: newUser._id }))
        );
        newUser.addresses = newUser.addresses.concat(addresses.map(addr => addr._id));
        await newUser.save();
        res.status(200).json({
            status: 200,
            message: "Successfully added user and addresses",
        });

    } catch (error) {
        console.error("Something went wrong while adding user and address:", error);

        res.status(500).json({ message: "Failed to add user and address", error: error.message });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find()
            .select("name email addresses")
            .populate("addresses");

        res.status(200).json({
            status: 200,
            message: "Users retrieved successfully",
            data: users
        });
    } catch (error) {
        console.error("Something went wrong while retrieving users:", error);

        res.status(500).json({
            message: "Failed to retrieve users",
            error: error.message
        });
    }
};





export { addUserAndAddress, getAllUsers };
