import { MoviesDetailed } from './../models/movies-detailed';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailedService {
  getMovies(): MoviesDetailed[] {
    let movies: MoviesDetailed[];
    movies =  [
      new MoviesDetailed("Lord of the rings",  2001, "Green sample", ["ann", "harold", "jaime"]),
      new MoviesDetailed("Hobbit", 2015, "John Samle", ["tom", "floki"]),
      new MoviesDetailed("Frozen", 2011, "Elza sample", ["jonh", "doe", "harry"]),
    ];
    return movies;
  }
}
