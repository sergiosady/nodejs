import User from "../models/users.model.js";
import usersRepository from "../repositories/users.repository.js";
import { generateHash } from "../utils/hashprovider.js";

class UsersService {
  async create(data) {
    const hashedPassword = await generateHash(data.password);

    const user = new User({ ...data, password: hashedPassword });
    return usersRepository.create(user);
  }

  findAll() {
    return usersRepository.findAll();
  }

  findById(id) {
    return usersRepository.findById(id);
  }

  async update(id, data) {
    if (data.password) {
      data.password = await generateHash(data.password);
    }

    return usersRepository.update(id, data);
  }

  delete(id) {
    return usersRepository.delete(id);
  }
}

export default new UsersService();
