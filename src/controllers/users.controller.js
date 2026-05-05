import usersService from "../services/users.service.js";

class UsersController {
  async create(req, res) {
    try {
      const user = await usersService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error.message);
      res.status(409).json({ error: error.message });
    }
  }

  findAll(req, res) {
    res.json({ Users: usersService.findAll() });
  }

  findById(req, res) {
    const user = usersService.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json(user);
  }

  update(req, res) {
    const user = usersService.update(req.params.id, req.body);

    if (!user) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json(user);
  }

  delete(req, res) {
    const success = usersService.delete(req.params.id);

    if (!success) {
      return res.status(404).json({ error: "Not found" });
    }

    res.status(204).send();
  }
}

export default new UsersController();
