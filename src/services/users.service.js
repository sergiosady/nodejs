import User from "../models/user.model.js";
import usersRepository from "../repositories/users.repository.js";

class UsersService {
  async create(data) {
    try {
      const user = await usersRepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    const users = await usersRepository.findAll();
    if (!users) {
      throw new Error("Internal server error");
    }
    return users;
  }

  async findById(id) {
    const user = await usersRepository.findById(id);
    if (!user) {
      throw new Error("Not found");
    }
    return user;
  }

  async update(id, data) {
    try {
      const user = await usersRepository.update(id, data);

      if (!user) {
        throw new Error("Not found");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    const deletedUser = await usersRepository.delete(id);

    if (!deletedUser) {
      throw new Error("Not found");
    }
    return deletedUser;
  }
}

export default new UsersService();
