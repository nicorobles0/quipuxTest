import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: IndexPageComponent,
  },
  {
    path: 'buscar',
    component: SearchPageComponent,
  },
  {
    path: 'favoritas',
    component: FavoritesPageComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMusicRoutingModule {}
