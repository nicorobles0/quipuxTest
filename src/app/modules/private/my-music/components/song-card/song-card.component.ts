import { Component, Input } from '@angular/core';

import { SongInterface } from '@private/my-music/interfaces/song.interface';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {

  @Input() songData: SongInterface = {};

}
