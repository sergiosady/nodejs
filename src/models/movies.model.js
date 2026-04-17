import { v4 as UUID } from "uuid";

export default class Movie {
  constructor({ title, description, year, genre, image, video }) {
    this.id = UUID();
    this.title = title || "Título Genérico";
    this.description = description || "Sem descrição";
    this.year = year || "Desconhecido";
    this.genre = genre || null;
    this.image = image || `${title}.img`;
    this.video = video || `${title}.mp4`;
  }
}
