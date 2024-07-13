import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import recipeRouter from "./routes/recipe.routes.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors({
    origin: '*',
    credentials: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
})


app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use('/api/v1/user',userRouter);
app.use('/api/v1/recipe', recipeRouter);


export default app