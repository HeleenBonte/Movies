import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/models/movie.model';
import { MovieService } from '../shared/Services/movie.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-detail',
  imports: [MatButtonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  activatedRoute = inject(ActivatedRoute);
  title!: string;
  movie: Movie | undefined;
constructor(private location: Location, private movieService: MovieService){
  this.movieService.getMovie.subscribe(mov => this.movie = mov);
}
  backClicked(){
    this.location.back();
  }
  ngOnInit(){
this.activatedRoute.params.subscribe(params => {
  this.title = params['title'];
  })
}
  


}
