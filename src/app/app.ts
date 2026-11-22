import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sitedesc } from './sitedesc/sitedesc';


@Component({
  imports: [RouterOutlet, Sitedesc],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Web Portfolio');
}
