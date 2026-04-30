import Movie from "../models/movies.model.js";
import moviesRepository from "../repositories/movies.repository.js";

class MoviesService {
  create(data) {
    const movie = new Movie(data);
    try {
      if (
        moviesRepository.findAll().some((movie) => movie.title === movie.title)
      ) {
        throw new Error("Title already in use.");
      }
      return moviesRepository.create(movie);
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return moviesRepository.findAll();
  }

  findById(id) {
    return moviesRepository.findById(id);
  }

  update(id, data) {
    return moviesRepository.update(id, data);
  }

  delete(id) {
    return moviesRepository.delete(id);
  }
}

export default new MoviesService();
