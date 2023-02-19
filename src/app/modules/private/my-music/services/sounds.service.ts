import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  constructor(private http: HttpClient) { }


  searchSongs( term: string ) {
    const finalUrl: string = `${environment.rapidAPIUrl}?search=${term}`
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.rapidAPIKey,
      'X-RapidAPI-Host': environment.rapidAPIHost
    });
    return this.http.get(finalUrl, { headers })
  }
}
