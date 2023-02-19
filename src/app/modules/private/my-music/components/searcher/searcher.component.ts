import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
  searchTerm: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  submitForm(form: NgForm){
    const sanitizeText: string = this.searchTerm.replaceAll("[^A-Za-z0-9]", "").trim();
    this.searchTerm = sanitizeText;
    if(form.invalid || this.searchTerm === ''){
      return;
    }
    this.onSearch.emit(this.searchTerm);
  }
}