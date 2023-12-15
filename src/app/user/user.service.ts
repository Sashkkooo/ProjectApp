import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged():boolean{
    return !!this.user;
  }

    constructor() {
    try {
      const isUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(isUser);
    }
    catch (error) {
      this.user = undefined;
    }
  }

  login(): void{
    this.user = {
      email: 'john.doe@gmail.com',
      firstName: 'John',
      phoneNumber: '+359876754106',
      password: '123',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(): void{
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
