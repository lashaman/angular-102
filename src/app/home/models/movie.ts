export class Movie {
  title: string;
  releaseDate: number;
  director: string;
  constructor(title: string, releaseDate: number, director: string) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.director = director;
  }
}
