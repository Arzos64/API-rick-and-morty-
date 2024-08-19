import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalRickComponent } from './components/principal-rick/principal-rick.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrincipalRickComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-rick-and-morty-Angular';
}
