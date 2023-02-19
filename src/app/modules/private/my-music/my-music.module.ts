import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMusicRoutingModule } from './my-music-routing.module';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    IndexPageComponent,
    FavoritesPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    MyMusicRoutingModule
  ]
})
export class MyMusicModule { }
