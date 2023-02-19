import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMusicRoutingModule } from './my-music-routing.module';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { SongIframePipe, SongPipe } from './pipes/song.pipe';
import { FormsModule } from '@angular/forms';
import { SearcherComponent } from './components/searcher/searcher.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { IconsProviderModule } from 'src/app/icons-provider.module';

@NgModule({
  declarations: [
    IndexPageComponent,
    FavoritesPageComponent,
    SearchPageComponent,
    SongCardComponent,
    SearcherComponent,
  ],
  imports: [
    CommonModule,
    MyMusicRoutingModule,
    IconsProviderModule,
    FormsModule,
    SongPipe,
    SongIframePipe,
    NzSpinModule
  ]
})
export class MyMusicModule { }
