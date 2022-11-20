import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.apiUrl;
  public user = JSON.parse(localStorage.getItem('currentUser'))

  constructor(private http: HttpClient) { }

  //Obtiene pokemon
  getPokemons(index){
    
    return this.http.get<any>(`${this.baseUrl}/api/users/pokemon/${index}`);
  }

  pokemonDetails(idPokemon){
    
    console.log('***',this.user);
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.user.token);
    return this.http.get<any>(`${this.baseUrl}/api/users/pokemon-details/${idPokemon}`,{headers:headers_object});

  }


}
