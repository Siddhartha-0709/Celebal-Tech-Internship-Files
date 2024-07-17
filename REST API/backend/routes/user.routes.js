import { Router } from "express";
import { createUser, getRecipees, loginUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
router.route("/get-recipe").post(getRecipees);

export default router