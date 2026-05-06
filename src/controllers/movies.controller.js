import moviesService from "../services/movies.service.js";

class MoviesController {
  async create(req, res) {
    try {
      const movie = await moviesService.create(req.body);
      res.status(201).json(movie);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const movies = await moviesService.findAll();
      return res.json({ Movies: movies });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findById(req, res) {
    try {
      const movie = await moviesService.findById(req.params.id);
      return res.status(200).json(movie);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const movie = await moviesService.update(req.params.id, req.body);
      return res.json(movie);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const movie = await moviesService.delete(req.params.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new MoviesController();
