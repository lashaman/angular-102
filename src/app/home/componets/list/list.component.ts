
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: Movie[] | undefined;
  condintion = 'mark';
  ulWidth = 400;
  arrr = ['red', 'green', 'display-default', 'color-white'];
  constructor(private movieService: MovieService) {}

  ngOnInit(){
    console.log(this.movies);
  }

  loadMovies(){
    this.movies = this.movieService.getMovies();
  }


}














  // ngOnInit(): void {
  //   // for (let i = 0; i < this.movies.length; i++ ) {
  //   //   console.log(this.movies[i]);
  //   // }

  //   if(this.condintion === 'mark') {console.log('if: mark it '); } else {console.log('else: no no no');}

  //   // this.condintion === 'mark' ? console.log('ternery true: mark it '): console.log('ternery false: no no no');

  //   for (let movie of this.movies) {
  //     console.log(movie.title + '/' + movie.releaseDate + '/' + movie.director);
  //   }
  // }
