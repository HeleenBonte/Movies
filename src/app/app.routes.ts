import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'login', component: LoginComponent},
    {path: 'moviedetail/:title', component: MovieDetailComponent},
    {path: 'about', component: AboutComponent},
];
