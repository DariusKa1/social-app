import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    console.log("User trying to login");
    const { email, password } = req.body;
    if (!email || !password) res.status(400).json({ err: "Missing some data" });
    try {
        const existingUser = await userModel.findOne({ email });
        if (!existingUser)
        return res
            .status(400)
            .json({
            err: `User do not exist with this email '${existingUser.email}'`,
            });
        if (bcrypt.compare(password, existingUser.password))
        return res.status(200).json({
            id: existingUser._id,
            fullName: existingUser.fullName,
            email: existingUser.email,
            token: generateToken(existingUser._id),
            isAdmin: existingUser.isAdmin
        });
    } catch (error) {
        res.status(400).json({ err: error.message });
    }
};

export const register = async (req, res) => {
    console.log("Client ask for registration");
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password)
        return res.status(400).json({ err: "Fill all fields" });
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser)
        return res
            .status(400)
            .json({ err: "User with this email already exist" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const createdUser = await userModel.create({
            fullName,
            email,
            password: hashedPassword,
        });
        if (!createdUser)
        return res
            .status(400)
            .json({ err: "Server failed to create user try again" });

        return res.status(201).json({
            _id: createdUser._id,
            fullName: createdUser.fullName,
            email: createdUser.email,
            token: generateToken(createdUser._id),
            isAdmin: createdUser.isAdmin
        });
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
    };

    export const getMe = async (req, res) => {
    console.log("Asking for self data");
    await userModel
        .findById(req.userId, "-password")
        .then((user) => res.status(200).json({ data: user }))
        .catch((err) => res.status(400).json({ err: err.message }));
    };

    const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
