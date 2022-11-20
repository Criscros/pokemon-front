import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    this.contentHeader = {
      headerTitle: 'Home',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Sample',
            isLink: false
          }
        ]
      }
    }

    // SERVICE 

    this.pokemonService.pokemonDetails(idPokemon).subscribe(
      res => {

        console.log('RESPONSE....',res);
      },
      err => {
        console.log(err);
      }
    );
    
  }

}
