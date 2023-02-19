import { Component } from '@angular/core';
import { top5Songs } from '@private/my-music/mock/top5';

import { SongInterface } from '../../interfaces/song.interface';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent {

  top5Songs: SongInterface[] = top5Songs;

}
