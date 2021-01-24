import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  gelToUsd = 0;
  usdToGel = 0;
  gelToEur  = 0;
  eurToGel = 0;
  title = 'pipes example';
  title2 = 'PIPES EXAMPLE @@2';
  toDate =  new Date();
  msg = 'Welcome this pipes';
  num = 9344.444444;
  money = 1000;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log(this.movieService.getMovies());
  }

}
