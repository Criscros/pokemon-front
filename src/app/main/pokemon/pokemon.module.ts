import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { PokemonComponent } from './pokemon.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from 'app/auth/helpers'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes = [
  {
    path: 'pokemons',
    component: PokemonComponent,
    canActivate: [AuthGuard],
    data: { animation: 'sample' }
  },
];

@NgModule({
  declarations: [PokemonComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule,NgbModule],
  exports: [PokemonComponent, HomeComponent]
})
export class PokemonModule {}
