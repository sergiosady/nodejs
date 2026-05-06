import mongoose from "mongoose";
import Movie from "../models/movie.model.js";

class MoviesRepository {
  async create(movie) {
    const newUser = new Movie(movie);
    await newUser.save();

    return newUser;
  }

  async findAll() {
    const result = await Movie.find();
    return result;
  }

  async findById(id) {
    const movie = await Movie.findById(id);
    return movie;
  }

  async update(id, data) {
    const movie = await Movie.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    if (!movie) {
      return null;
    }
    return movie;
  }

  async delete(id) {
    const movie = await Movie.findByIdAndDelete(id);
    return movie;
  }
}

export default new MoviesRepository();
