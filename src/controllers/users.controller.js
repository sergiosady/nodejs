import usersService from "../services/users.service.js";

class UsersController {
  async create(req, res) {
    try {
      const user = await usersService.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      console.error(error.message);
      return res.status(409).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    const users = await usersService.findAll();
    return res.json({ Users: users });
  }

  async findById(req, res) {
    const user = await usersService.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "Not found" });
    }

    return res.json(user);
  }

  async update(req, res) {
    const user = await usersService.update(req.params.id, req.body);

    if (!user) {
      return res.status(404).json({ error: "Not found" });
    }

    return res.status(200).json(user);
  }

  async delete(req, res) {
    const success = await usersService.delete(req.params.id);

    if (!success) {
      return res.status(404).json({ error: "Not found" });
    }

    return res.status(204).send();
  }
}

export default new UsersController();
