import movieService from "../services/movies.service.js";

class MovieController {
  create(req, res) {
    try {
      const movie = movieService.create(req.body);
      res.status(201).json(movie);
    } catch (error) {
      console.error(error.message);
      res.status(409).json({ error: error.message });
    }
  }

  findAll(req, res) {
    res.json(movieService.findAll());
  }

  findById(req, res) {
    const movie = movieService.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json(movie);
  }

  update(req, res) {
    const movie = movieService.update(req.params.id, req.body);

    if (!movie) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json(movie);
  }

  delete(req, res) {
    const success = movieService.delete(req.params.id);

    if (!success) {
      return res.status(404).json({ error: "Not found" });
    }

    res.status(204).send();
  }
}

export default new MovieController();
