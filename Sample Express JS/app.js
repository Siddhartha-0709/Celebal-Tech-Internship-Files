import express from "express";
import routes from "./routes/router.js";

const app = express(); // This line creates a new Express application.

/*
Middlewares are functions that are executed before the request reaches the route handler.
*/

app.use(express.json()); //This is a middleware which is used to parse the request body to JSON format. 

app.use(express.urlencoded({ extended: true })); // We are using this line to parse the request body that is url encoded. It is used when we are sending data in the form of key-value pairs. The "extended: true" option allows for rich objects and arrays to be serialized into the URL-encoded format.

app.use(express.static("public")); // This line is used to serve static files such as images, CSS files, and JavaScript files.

app.get("/", (req, res) => {
    res.send("Hello World!"); // This line sends a response to the client with Hello World! on the '/' route.
});

app.use("/api/v1/", routes); // This line is used to use the routes defined in the "routes" folder.

export default app;