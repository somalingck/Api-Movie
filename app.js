const express = require('express');
const mongoose = require('mongoose');



const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/moviesdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Movie Schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  // Add other fields as needed
});

const Movie = mongoose.model('Movie', movieSchema);

// API to fetch complete details of a movie by title
app.get('/movies/:title', async (req, res) => {
  const title = req.params.title;
  try {
    const movie = await Movie.findOne({ title });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to fetch all movies released in a specific year
app.get('/movies/year/:year', async (req, res) => {
  const year = req.params.year;
  try {
    const movies = await Movie.find({ year });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to fetch all movies based on their genre
app.get('/movies/genre/:genre', async (req, res) => {
  const genre = req.params.genre;
  try {
    const movies = await Movie.find({ genre });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to delete a specific movie by title
app.delete('/movies/:title', async (req, res) => {
  const title = req.params.title;
  try {
    const result = await Movie.deleteOne({ title });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to update a movie's details by considering its title
app.put('/movies/:title', async (req, res) => {
  const title = req.params.title;
  const updatedDetails = req.body; 
  try {
    const result = await Movie.updateOne({ title }, updatedDetails);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to add a new movie with its details
app.post('/movies', async (req, res) => {
  const movieDetails = req.body; 
  try {
    const newMovie = new Movie(movieDetails);
    const result = await newMovie.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
