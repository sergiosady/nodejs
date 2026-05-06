import mongoose from "mongoose";
import User from "../models/user.model.js";

class UsersRepository {
  async create(user) {
    const newUser = new User(user);
    await newUser.save();

    return newUser;
  }

  async findAll() {
    const result = await User.find();

    return result;
  }

  async findById(id) {
    const user = await User.findById(id);

    return user;
  }

  async update(id, data) {
    const user = await User.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    if (!user) {
      return null;
    }
    return user;
  }

  async delete(id) {
    const user = await User.findByIdAndDelete(id);
    return user;
  }
}

export default new UsersRepository();
