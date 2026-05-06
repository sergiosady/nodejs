import Movie from "../models/movie.model.js";
import moviesRepository from "../repositories/movies.repository.js";

class MoviesService {
  async create(data) {
    try {
      return await moviesRepository.create(data);
    } catch (error) {
      if (error.code === 11000) {
        throw new Error("Title already exists");
      }
      if (error.name === "ValidationError") {
        throw new Error(error);
      }
      throw error;
    }
  }

  async findAll() {
    const movie = await moviesRepository.findAll();
    return movie;
  }

  async findById(id) {
    const movie = await moviesRepository.findById(id);
    if (!movie) {
      throw new Error("Not found");
    }
    return movie;
  }

  async update(id, data) {
    try {
      const movie = await moviesRepository.update(id, data);
      if (!movie) {
        throw new Error("Not found");
      }
      return movie;
    } catch (error) {
      if (error.code === 11000) {
        throw new Error("Title already exists");
      }
      if (error.name === "ValidationError") {
        throw new Error(error);
      }
      throw error;
    }
  }

  async delete(id) {
    const movie = await moviesRepository.findById(id);

    if (!movie) {
      throw new Error("Not found");
    }
    return await moviesRepository.delete(id);
  }
}

export default new MoviesService();
