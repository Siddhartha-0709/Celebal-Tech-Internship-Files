import userModel from "../models/user.model.js";
import recipeModel from "../models/recipe.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const savedUser = await userModel.create({ name, email,password: hashedPassword });
        res.status(201).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const userPayload = { email, password };
    const accessToken = generateAccessToken(userPayload);
    const refreshToken = jwt.sign(userPayload, process.env.REFRESH_TOKEN_SECRET);
    
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    try {
        const isMatch = await userModel.findOne({email});
        if(!bcrypt.compareSync(password, isMatch.password)) {
            return res.status(400).json({ message: "Invalid Password" });
        }
        isMatch.refreshToken = refreshToken;
        await isMatch.save({validateBeforeSave: false});

        const loggedInUser = await userModel.findById(isMatch._id).select("-password -refreshToken");

        res
        .status(200)
        .cookie('accessToken', accessToken, { httpOnly: true, secure: true })
        .cookie('refreshToken', refreshToken, { httpOnly: true, secure: true })
        .json({ user: loggedInUser, accessToken: accessToken, refreshToken: refreshToken });

    } catch (err) {
        res.status(500).json(err);
    }
}


const logOut = async (req, res) => {
    const user = req.user;
    user.refreshToken = null;
    await user.save();
    res
    .status(200)
    .cookie('accessToken', '', { httpOnly: true, secure: true })
    .cookie('refreshToken', '', { httpOnly: true, secure: true })
    .json({ user: user, accessToken: '', refreshToken: '', message: 'Logged out successfully' });
}
const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
}

const getRecipees = async (req, res) => {
    try {
        const { email } = req.body;
        const recipes = await recipeModel.find({postedBy: email});
        res.status(200).json(recipes);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
const deleteRecipeById = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedRecipe = await recipeModel.findByIdAndDelete(id);
        res.status(200).json(deletedRecipe);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
export { createUser, loginUser, getRecipees, deleteRecipeById, logOut }