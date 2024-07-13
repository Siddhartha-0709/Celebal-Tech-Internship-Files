import userModel from "../models/user.model.js";

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }
    try {
        const savedUser = await userModel.create({ name, email, password });
        res.status(201).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    try {
        const isMatch = await userModel.findOne({email});
        if(isMatch.password != password){
            return res.status(400).json({ message: "Invalid Password" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
export { createUser, loginUser }