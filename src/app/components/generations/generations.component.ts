import { Component } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {

  public generations : string[];

  constructor(private pokemonService : PokemonService) {
    this.generations = pokemonService.getGenerations();
  }
}
