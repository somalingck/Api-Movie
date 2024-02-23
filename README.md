# Api-Movie

Certainly! Here's the README in a more paragraph format:

Movie API
The Movie API is a Node.js and Express.js based project that provides functionality for managing a list of movies. The backend uses MongoDB to store and retrieve movie information. This README will guide you through the setup, usage, and contribution details of the project.

Getting Started
Before running the project, ensure that you have Node.js, npm, and MongoDB installed on your system. Clone the repository, navigate to the project directory, and install dependencies using npm. Set up your MongoDB database and update the connection string in the .env file. Finally, start the server using npm start. The server will run at http://localhost:3000 by default.

Usage
The API offers various endpoints to interact with movie data, such as retrieving all movies, getting details of a specific movie, adding a new movie, updating movie details, and deleting a movie.

Example Requests
Get all movies:
Send a GET request to http://localhost:3000/movies.

Get details of a specific movie:
Send a GET request to http://localhost:3000/movies/1.

Add a new movie:
Send a POST request to http://localhost:3000/movies with JSON payload:

json
Copy code
{
  "title": "Inception",
  "year": 2010,
  "genre": "Sci-Fi",
  "director": "Christopher Nolan",
  "plot": "A thief who enters the dreams of others to steal their secrets."
}
Update details of a specific movie:
Send a PUT request to http://localhost:3000/movies/1 with JSON payload:





As for testing, here are the API links:

Fetch Movie by Title:

GET http://localhost:3000/movies/Inception
Fetch Movies by Year:

GET http://localhost:3000/movies/year/2010
Fetch Movies by Genre:

GET http://localhost:3000/movies/genre/Sci-Fi
Delete Movie by Title:

DELETE http://localhost:3000/movies/Inception
Update Movie by Title:

PUT http://localhost:3000/movies/Inception


