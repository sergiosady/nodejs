import { v4 as UUID } from "uuid";

export default class Movie {
  constructor({ title, description, year, genre, image, video }) {
    this.id = UUID();
    this.title = title;
    this.description = description;
    this.year = year;
    this.genre = genre;
    this.image = image;
    this.video = video;
  }
}
