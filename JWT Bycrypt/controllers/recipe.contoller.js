import { uploadOnCloudinary } from "../middleware/cloudinary.middleware.js";
import recipeModel from "../models/recipe.model.js";

const createRecipe = async (req, res) => {
    const { title, description, ingredients, instructions, videoURL, postedBy } = req.body;
    if(!title || !description || !ingredients || !instructions || !postedBy) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    if(!req.file) {
        return res.status(400).json({ message: "Please upload an image" });
    }
    const imageLocalPath = req.file.path;
    try {
        const imageURL = await uploadOnCloudinary(imageLocalPath);
        const imageLink = imageURL.url;
        const savedRecipe = await recipeModel.create({ title, description, ingredients, instructions, imageURL: imageLink, videoURL, postedBy });
        res.status(201).json(savedRecipe);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

const getRecipe = async (req, res) => {
    try {
        const recipes = await recipeModel.find();
        res.status(200).json({user: req.user, recipes: recipes});
    } catch (error) {
        console.log(error);
    }
}

const getRecipebyId = async (req, res) => {
    try {
        console.log(req.query.id);
        const recipeId = req.query.id; // Extract id from query string
        console.log(recipeId);
        const recipe = await recipeModel.findById(recipeId);
        res.status(200).json(recipe);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while fetching the recipe.' });
    }
}

export { createRecipe, getRecipe, getRecipebyId };