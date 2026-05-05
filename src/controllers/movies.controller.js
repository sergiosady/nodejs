import moviesService from "../services/movies.service.js";

class MoviesController {
  create(req, res) {
    try {
      const movie = moviesService.create(req.body);
      res.status(201).json([movie, req.user]);
    } catch (error) {
      console.error(error.message);
      res.status(409).json({ error: error.message });
    }
  }

  findAll(req, res) {
    res.json({ Filmes: moviesService.findAll() });
  }

  findById(req, res) {
    const movie = moviesService.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json(movie);
  }

  update(req, res) {
    const movie = moviesService.update(req.params.id, req.body);

    if (!movie) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json([movie, req.user]);
  }

  delete(req, res) {
    const success = moviesService.delete(req.params.id);

    if (!success) {
      return res.status(404).json({ error: "Not found" });
    }

    res.status(204).send();
  }
}

export default new MoviesController();
