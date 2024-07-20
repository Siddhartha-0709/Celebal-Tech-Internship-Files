import { Router } from "express";
import { createUser, deleteRecipeById, getRecipees, loginUser, logOut } from "../controllers/user.controller.js";
import { authenticateToken } from "../middleware/token.middleware.js";
const router = Router();

router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
router.route("/get-recipe").post(getRecipees);
router.route("/delete-recipe").post(deleteRecipeById);

router.route("/logout").post(authenticateToken, logOut);

export default router