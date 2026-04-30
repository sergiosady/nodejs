import { v4 as UUID } from "uuid";

export default class User {
  constructor({ name, email, password, age }) {
    this.id = UUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
  }
}
