import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiURL = `${environment.apiUrl}`;
  private movie = new BehaviorSubject<Movie>({ Title: '', Year: 0, Genre: '', Actors: '', Plot: '', Poster: '' });
  getMovie = this.movie.asObservable();

  constructor(private httpClient: HttpClient) {}
  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiURL).pipe(
      tap((result) => console.log('Opgehaalde data: ', result)),
      map((movies) =>
        movies.map((movie) => ({
          Title: movie.Title,
          Year: movie.Year,
          Genre: movie.Genre,
          Actors: movie.Actors,
          Plot: movie.Plot,
          Poster: movie.Poster
        }))
      )
    );
  }

  setMovie(movie: Movie) {
    this.movie.next(movie);
  }
}