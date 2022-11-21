import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.apiUrl;
  public user = JSON.parse(localStorage.getItem('currentUser'))
  public headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.user.token);

  constructor(private http: HttpClient) { }

  //Obtiene pokemon
  getPokemons(index){
    
    return this.http.get<any>(`${this.baseUrl}/api/users/pokemon/${index}`,{headers:this.headers_object});
  }

  pokemonDetails(idPokemon){
    
    console.log('***',this.user);

    return this.http.get<any>(`${this.baseUrl}/api/users/pokemon-details/${idPokemon}`,{headers:this.headers_object});

  }


}
