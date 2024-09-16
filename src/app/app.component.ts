import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaComponent } from "./components/media/media.component";
import { AritimeticaComponent } from "./components/aritimetica/aritimetica.component";
import { CrudComponent } from "./components/crud/crud.component";
import { ApoliceComponent } from "./components/apolice/apolice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MediaComponent, AritimeticaComponent, CrudComponent, ApoliceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-formulario';
}
