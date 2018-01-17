import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}