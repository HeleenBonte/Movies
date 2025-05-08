import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSidenavModule, RouterLink, MatMenuModule, MatToolbarModule, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  links = ['Movies', 'Admin', 'About', 'Login'];
  activeLink = this.links[0];
}
