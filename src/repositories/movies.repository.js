class MoviesRepository {
  constructor() {
    this.movies = [];
  }

  create(movie) {
    this.movies.push(movie);
    return movie;
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

export default new MoviesRepository();
