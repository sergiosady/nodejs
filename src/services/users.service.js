import User from "../models/user.model.js";
import usersRepository from "../repositories/users.repository.js";
import { generateHash } from "../utils/hashprovider.js";

class UsersService {
  async create(data) {
    const hashedPassword = await generateHash(data.password);

    const user = new User({ ...data, password: hashedPassword });
    return await usersRepository.create(user);
  }

  async findAll() {
    return await usersRepository.findAll();
  }

  async findById(id) {
    return await usersRepository.findById(id);
  }

  async update(id, data) {
    if (data.password) {
      data.password = await generateHash(data.password);
    }

    return await usersRepository.update(id, data);
  }

  async delete(id) {
    return await usersRepository.delete(id);
  }
}

export default new UsersService();
