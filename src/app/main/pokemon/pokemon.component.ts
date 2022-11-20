import { Component, OnInit } from '@angular/core'

import { locale as en } from './i18n/en'
import { locale as fr } from './i18n/fr'
import { locale as de } from './i18n/de'
import { locale as pt } from './i18n/pt'

import { CoreTranslationService } from '@core/services/translation.service'
import { PokemonService } from '../services/pokemon.service'

@Component({
  selector: 'app-sample',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public contentHeader: object
  public pageAdvancedEllipses = 1;
  public items =  []
  public loading= false
  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    private _coreTranslationService: CoreTranslationService,
    private pokemonService: PokemonService
    ) {
    this._coreTranslationService.translate(en, fr, de, pt)

  }
  ngOnInit() {
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
    // SERVICE GET POKEMONS... 
    this.loading = true;
    this.getPokemons(0)
  }
  getPokemons(page){
    
    this.pokemonService.getPokemons(page).subscribe(
      res => {

          if( res.succucess) {
            console.log('----',res.data);
            res.data.map((pokemon)=>{
  
              let pokemonData = {
                id : pokemon.id,
                image: pokemon.sprites.front_default,
                name: pokemon.name,
                type: pokemon.types[0].type.name
              };
  
              this.items.push(pokemonData)
  
            })

            this.loading = false
          }

      },
      err => {
        console.log(err);
      }
    );
  }

  pageChange(){
    this.items = []
    this.loading = true
    setTimeout(() => {
      console.log('PAGE',this.pageAdvancedEllipses);
      this.getPokemons(this.pageAdvancedEllipses)
    }, 1);

  }
  showDetails(id){

    console.log('****',id);
  }
}
