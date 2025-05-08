import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../shared/models/movie.model';
import { MovieService } from '../shared/Services/movie.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movies',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
 movies: Movie[];

 constructor(private movieService: MovieService) {
  this.movies = [];
 }

 ngOnInit(){
  this.movieService.getMovies()
  .subscribe(mov => this.movies = mov);
 }

 updateMovie(movie: Movie){
  this.movieService.setMovie(movie);
 }
}


//routes met root (id) p 250