import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongInterface } from '@private/my-music/interfaces/song.interface';
import { SoundsService } from '@private/my-music/services/sounds.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent{
  top5Songs: SongInterface[] = [];
  isLoading: boolean = false;

  constructor(private soundS: SoundsService){}

  searchSongs( term: string ){
    this.isLoading = true;
    this.top5Songs = [];
    this.soundS.searchSongs(term).subscribe({
      next: (resp: any) => { this.top5Songs = resp.slice(0,5); this.isLoading = false; },
      error: () => { this.isLoading = false; }
    })
  }
}