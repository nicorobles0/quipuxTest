import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongInterface } from '@private/my-music/interfaces/song.interface';
import { SoundsService } from '@private/my-music/services/sounds.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  top5Songs: SongInterface[] = [];
  searchTerm: string = '';

  constructor(private soundS: SoundsService){}

  ngOnInit(){
    
  }

  searchSongs( term: NgForm ){
    if(term.invalid){
      return;
    }
    this.soundS.searchSongs(this.searchTerm).subscribe({
      next: (resp: any) => { this.top5Songs = resp.slice(0,5) }
    })
  }
}