import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sitedesc',
  styleUrl: './sitedesc.css',
  templateUrl: './sitedesc.html',
})
export class Sitedesc {
  nome = input.required<string>();
  descrizione = input.required<string>();
  puntidiforza = input<Array<string>>();
}
