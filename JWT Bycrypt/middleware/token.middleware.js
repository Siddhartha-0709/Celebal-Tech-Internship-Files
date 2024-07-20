import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
const authenticateToken = async (req, res, next) => {
    const accessToken = req.cookies?.accessToken || req.headers?.authorization?.split(' ')[1];

    if (!accessToken) {
        return res.sendStatus(401, 'Unauthorized');
    }

    try {
        const user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        req.user = await userModel.findOne({ email: user.email });
        next();
    } catch (err) {
        return res.sendStatus(401, 'Unauthorized');
    }
}

export {authenticateToken}