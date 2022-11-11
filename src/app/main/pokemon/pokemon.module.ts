import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { PokemonComponent } from './pokemon.component';
import { HomeComponent } from './home.component';

const routes = [
  {
    path: 'pokemons',
    component: PokemonComponent,
    data: { animation: 'sample' }
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   data: { animation: 'home' }
  // }
];

@NgModule({
  declarations: [PokemonComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [PokemonComponent, HomeComponent]
})
export class PokemonModule {}
