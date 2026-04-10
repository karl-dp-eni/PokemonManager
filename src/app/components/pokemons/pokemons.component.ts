import {Component} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  public pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) {
    this.pokemons = [];
  }

  addPokemons() {
    return this.pokemonService.getAllPokemons();
  }

  countPokemons() {
    return this.pokemonService.countPokemons();
  }
}
