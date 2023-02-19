import { Injectable } from '@angular/core';

import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router){}

  canActivate(): boolean {
    const fakeJwt: string = localStorage.getItem('fakeJwt') || '';
    const validSession: boolean = fakeJwt === '03efebfa-afd7-11ed-afa1-0242ac120002' ? true : false;
    if(!validSession)
    this.router.navigateByUrl('/login');
    return validSession;
  }

  canActivateChild(): boolean {
    const fakeJwt: string = localStorage.getItem('fakeJwt') || '';
    const validSession: boolean = fakeJwt === '03efebfa-afd7-11ed-afa1-0242ac120002' ? true : false;
    if(!validSession)
    this.router.navigateByUrl('/login');
    return validSession;
  }
}