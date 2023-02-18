import { Injectable } from '@angular/core';

import { LoginInterface } from '../../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  /**
   * Funcion para loguear uusario
   * @param loginData
   * @returns
   */
  login(loginData: LoginInterface): boolean {
    if (
      loginData.email === 'user@quipux.com' &&
      loginData.password === '12345'
    ) {
      localStorage.setItem('user', JSON.stringify(loginData));
      localStorage.setItem('fakeJwt', '03efebfa-afd7-11ed-afa1-0242ac120002');
      return true;
    }
    this.clearLogin();
    return false;
  }
  /**
   * Funcion para Elimnar variables locales de Login
   */
  clearLogin() {
    localStorage.removeItem('user');
    localStorage.removeItem('fakeJwt');
  }
}