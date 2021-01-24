export class MoviesDetailed {
  title: string;
  releaseDate: number;
  director: string;
  actors: string[];
  constructor(title: string, releaseDate: number, director: string, actors: string[]) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.director = director;
    this.actors = actors;
  }
}
