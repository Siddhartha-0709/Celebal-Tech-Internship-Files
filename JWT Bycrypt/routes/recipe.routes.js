import { Router } from "express";
import { createRecipe, getRecipe, getRecipebyId } from "../controllers/recipe.contoller.js";
import { upload } from "../middleware/multer.middleware.js";
import { authenticateToken } from "../middleware/token.middleware.js";
const router = Router();

router.route("/create").post(upload.single("image"),createRecipe);
// router.route("/get-recipe").get(getRecipe);
router.route("/get-recipe").post(authenticateToken, getRecipe);
router.route("/view").get(getRecipebyId);

export default router;