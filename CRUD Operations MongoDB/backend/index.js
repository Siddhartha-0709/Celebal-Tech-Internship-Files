import connect from "./db/db.js";
import 'dotenv/config'
import app from "./app.js";
await connect()
    .then(
        () => {console.log("MongoDB Connected")})
    .then(
        () => {
            app.listen(process.env.PORT)
            console.log("Server Listening on port " + process.env.PORT)
        })
    .catch(
    (err) => {console.log("Error Connecting to MongoDB",err)})
