// Assignment-3
// Task- Refactor an existing piece of code that uses callbacks for async operations to use Promises and Async/Await for better readability and error handling.

import http from 'http';
http.createServer((req, res) => {
    // In the below code we try to fetch the data from a sample API and then send it back to the browser window as a response. Here we use the try and catch block for efficient error handling.
    // To fetch data from the API we use the fetch method. Now since fetch method returns a promise we can use .then method to handle the response in this way we can handle the async nature of the code the control will move to the next line once the promise is resolved ie. when the data is fetched as a response. 

    // In this code since we are prefering to use async and await keyword to handle the async nature of the code hence I have commented the below code which uses .then() method.
    
    /*
    try{
        fetch('https://jsonplaceholder.typicode.com/todos') // fetch method returns a promise
        .then(Response => Response.json()) // this line is used to convert the response in json format.
        .then(res.setHeader('Content-Type', 'application/json')) // this line is used to set the content type of the response so that the browser knows that the response is in json format.
        .then(data => res.end(JSON.stringify(data))) // this line is used to send the response to the browser window.
    } catch(err) {
        // In case of error we can use the console.log method to print the error.
        console.log(err);
    }
    */


    try{
        // Here we use the async and await keyword to handle the async nature of the code. 
        // async means we tell the browser that we are using promises and await tells the browser that we are waiting for the promise to resolve.
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // This line fetches the data from the API.
            const data = await response.json(); // This line converts the response in json format.
            res.setHeader('Content-Type', 'application/json'); // This line informs the browser that the response is in json format.
            res.end(JSON.stringify(data)); // This line sends the response to the browser window.
        }
        getData(); // This line calls the getData function.
    } catch(err) {
        // In case of error we can use the console.log method to print the error.
        console.log(err);
    }
}).listen(3000, () => {
    console.log('server running on port 3000');
}) ;

