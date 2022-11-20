import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { HomeComponent } from './home.component';
import { AuthGuard } from 'app/auth/helpers'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PokemonComponent } from './pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes = [
  {
    path: 'pokemons',
    component: PokemonComponent,
    canActivate: [AuthGuard],
    data: { animation: 'sample' }
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
    canActivate: [AuthGuard],
    data: { animation: 'sample' }
  },
  
];

@NgModule({
  declarations: [
      PokemonComponent,
      HomeComponent,
      PokemonDetailsComponent,
  ],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule,NgbModule],
  exports: [PokemonComponent, HomeComponent]
})
export class PokemonModule {}
