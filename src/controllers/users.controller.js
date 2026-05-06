import usersService from "../services/users.service.js";

class UsersController {
  async create(req, res) {
    try {
      const user = await usersService.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const users = await usersService.findAll();
      return res.status(200).json({ Users: users });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const user = await usersService.findById(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const user = await usersService.update(req.params.id, req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const success = await usersService.delete(req.params.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UsersController();
