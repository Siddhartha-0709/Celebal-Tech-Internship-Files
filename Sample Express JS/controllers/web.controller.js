// This file is used to write all the logic for our backend web application.
const home = (req, res) => {
    res.send("This is a Home Page"); //In this we are sending response to the client as Hello World through this function.
}; 

const about = (req, res) => {
    res.send("This is an About Page"); //In this we are sending response to the client as This is an About Page through this function.
};
const contact = (req, res) => {
    res.send("This is a Contact Page"); //In this we are sending response to the client as This is a Contact Page through this function.
};

export {about, contact, home}; //Exporting all the functions as defined above.