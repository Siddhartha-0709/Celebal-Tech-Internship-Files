# RecipeBook App

This is a simple fullstack project which utlises the REST API. This project allows the user to view and upload recipes of different cuisines.

## Getting Started

To run this application locally, follow these steps:

1. Clone the frontend and backend repository.
2. Navigate to the project directory.
3. Install the dependencies: 
    `cd backend` 
    `npm install`
    `cd .. `
    `cd frontend`
    `npm install`
4. Start the application:
   - In the backend directory, run `npm start`
   - In the frontend directory, run `npm run dev`

## Usage

1. Visit the [Link](https://recipebazzar.vercel.app/) to view the receipes.

2. Upload your recipe by clicking on the upload button.

## Technology Stack

- Frontend: React, Axios, React Router, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Cloudinary, Multer

## New Updates

- Added a new endpoint to delete a single recipe.
- Added a new endpoint to get all recipes of a user.
- Added a new endpoint to logout a user.
- Modified the Login Route to use JWT Token and hash passwords using bcrypt.
- Utilized Cookie-Parser for authentication to store the Access and Refresh Tokens.
- Achieved Logout functionality using the Access Token fetched by the newly added middleware called `token.middleware.js`.

## Deployment

The application is deployed using Vercel and is available at [Link](https://recipebazzar.vercel.app/).

## API Documentation

#### Base URL: 
`https://recipebook-loih.onrender.com/`

#### Endpoints: 

* `api/v1/recipes/get-recipe`: Get all recipes available.
* `api/v1/recipes/create`: Post a new recipe.
* `api/v1/recipes/view`: Get a single recipe.

* `api/v1/user/signup`: Register a new user.
* `api/v1/user/login`: Login a user.
* `api/v1/user/get-recipe`: Get all recipes of a user.
* `api/v1/user/delete-recipe`: Delete a single recipe of a user.
* `api/v1/user/logout`: Logout a user using token from cookie or authorization header.


### Submitted By:

**Name-** **Siddhartha Mukherjee**

**Domain-** **Node JS**

**Email-** **siddharthamukherjee0709@gmail.com**