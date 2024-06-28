// This file is used to define the routes for the web pages.
import { Router } from "express";
import { about, contact, home } from "../controllers/web.controller.js";

const router = Router(); // This line creates a new Express router.

router.route("/home").get(home); // This line is used to define the route for the "home" page and call the "home" function as defined in the "web.controller.js" file.

router.route("/about").get(about); // This line is used to define the route for the "about" page and call the "about" function as defined in the "web.controller.js" file.

router.route("/contact").get(contact); // This line is used to define the route for the "contact" page and call the "contact" function as defined in the "web.controller.js" file.

export default router; // This line is used to export the router which will be imported by the "app.js" file.