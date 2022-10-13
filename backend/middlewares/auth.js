import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";

export const auth = async (req, res, next) => {
    console.log("User ask for auth task");
    try {
        if(!req.headers.authorization) return res.status(400).json({err: "No Authorization provided"});

        const token = req.headers.authorization.split(" ")[1];
        if(!token) return res.status(400).json({err: "Bad token provided"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) return res.status(400).json({err: "Bad token format"});
        
        const authUser = await userModel.findById(decoded._id).select("-password")
        if(!authUser) return res.status(400).json({err: "User not found"});

        req.user = authUser;
        next();
            
    } catch (err) {
        return res.status(401).json({err: err.message});
    }
    
    


};