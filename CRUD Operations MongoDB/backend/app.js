import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use(express.json());
app.use('')
export default app