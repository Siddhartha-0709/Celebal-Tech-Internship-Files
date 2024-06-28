import app from "./app.js";
import 'dotenv/config'

const PORT = process.env.PORT || 3000; // This line is used to set the port number from the .env file. 

//The dotenv package is used to read the environment variables from the .env file which can include sensitive information like database connection streams or API keys.

app.listen(PORT, () => {
    console.log("Server started on port 3000");
}); // This line is used to make the server listen to the specified port for requests.
