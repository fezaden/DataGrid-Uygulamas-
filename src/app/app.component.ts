import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataContentComponent } from './components/data-content/data-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, DataContentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataGrid';
}
  