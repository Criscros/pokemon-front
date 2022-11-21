import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { type } from 'os';
import { PokemonService } from '../../services/pokemon.service'

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  public contentHeader: object
  public url = this.router.url;
  public idPokemon;
  public todo;
  public abilities = []
  public characteristics

 /**
   * Constructor
   *
   * @param {Router} router
   *
   */
  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    // HEADER
    var idPokemon = this.url.substr(this.url.lastIndexOf('/') + 1);

    this.todo ={
      name : '',
      type: ''
    }

    this.contentHeader = {
      headerTitle: 'Pokemon',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'pokemons',
            isLink: true,
            link: '/'
          },
  
        ]
      }
    }

    // SERVICE 
    this.getPokemonInfo(idPokemon)    
  }
  getPokemonInfo(idPokemon){
  
    this.pokemonService.pokemonDetails(idPokemon).subscribe(
      res => {

        console.log('RESPONSE....',res);
        const todo = {
          name: res.data.info.name,
          image: res.data.info.sprites.front_default,
          type: res.data.info.types[0].type
        }

        this.todo = todo 
        this.abilities = res.data.info.abilities
        this.characteristics = res.data.characteristic.descriptions[5].description


        console.log('todo',todo);
      },
      err => {
        console.log(err);
      }
    );
  }

}
