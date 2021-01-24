import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    let movies: Movie[];
    movies =  [
      new Movie("Lord of the rings",  2001, "Green sample"),
      new Movie("Hobbit", 2015, "John Samle"),
      new Movie("Frozen", 2011, "Elza sample"),
    ];
    return movies;
  }
}
