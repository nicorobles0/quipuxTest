import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  closeSession(){
    localStorage.removeItem('user');
    localStorage.removeItem('fakeJwt');
    this.router.navigateByUrl('/login');
  }
}
