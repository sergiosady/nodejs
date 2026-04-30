class UsersRepository {
  constructor() {
    this.users = [];
  }

  create(user) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findById(id) {
    return this.users.find((user) => user.id === id);
  }

  update(id, data) {
    const user = this.findById(id);
    if (!user) return null;

    Object.assign(user, data);
    return user;
  }

  delete(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

export default new UsersRepository();
