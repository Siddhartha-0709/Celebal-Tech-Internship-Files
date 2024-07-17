import { Router } from "express";
import { createUser, deleteRecipeById, getRecipees, loginUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
router.route("/get-recipe").post(getRecipees);
router.route("/delete-recipe").post(deleteRecipeById);


export default router