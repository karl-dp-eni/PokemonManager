import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemons : Pokemon[];
  private _generations : string[];
  private readonly BASE_URL : string = "https://pokeapi.co/api/v2/";

  constructor(private http : HttpClient) {
    // this._pokemons = [];
    this._pokemons = [
      {id : 1, name : "Bulbizarre", category : "Graine", types : ["Plante", "Poison"], height : 0.7, weight : 6.9},
      {id : 2, name : "Herbizarre", category : "Graine", types : ["Plante", "Poison"], height : 1, weight : 13},
      {id : 3, name : "Florizarre", category : "Graine", types : ["Plante", "Poison"], height : 2, weight : 100}
    ];

    this._generations = ["I", "II", "III", "IV", "V", "VI", "VII"];
  }

  public getAllPokemons() {
    return this._pokemons;
  }

  public getGenerations() {
    return this._generations;
  }

  public countPokemons() {
    return this.getAllPokemons().length;
  }
}
