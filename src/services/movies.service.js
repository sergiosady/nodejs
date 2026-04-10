import Movie from "../models/movies.model.js";

class MovieService {
  constructor() {
    this.movies = [];
  }

  create(data) {
    const movie = new Movie(data);
    try {
      if (this.movies.some((mov) => mov.title === movie.title)) {
        throw new Error("Title already in use.");
      }
      this.movies.push(movie);

      return movie;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  findAll() {
    return this.movies;
  }

  findById(id) {
    return this.movies.find((movie) => movie.id === id);
  }

  update(id, data) {
    const movie = this.findById(id);
    if (!movie) return null;

    Object.assign(movie, data);
    return movie;
  }

  delete(id) {
    const index = this.movies.findIndex((movie) => movie.id === id);
    if (index === -1) return false;

    this.movies.splice(index, 1);
    return true;
  }
}

export default new MovieService();
