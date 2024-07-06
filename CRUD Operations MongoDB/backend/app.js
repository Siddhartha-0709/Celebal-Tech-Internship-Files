import express from "express";
import userRouter from "./routes/user.route.js";
import todoRouter from "./routes/todo.route.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(express.static("public"));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
})
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use(express.json());
app.use('/api/v1/user', userRouter);
app.use('/api/v1/todo', todoRouter);
export default app
