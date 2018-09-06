import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { User } from '../../../assets/models/model';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  private users: User[] = [
    {
      'id': 1,
      'username': 'george',
      'email': 'george@mail.com',
      'password': 'george_password'
    },
    {
      'id': 2,
      'username': 'marian',
      'email': 'marian@mail.com',
      'password': 'marian_password'
    },
    {
      'id': 3,
      'username': 'fady',
      'email': 'george@mail.com',
      'password': 'fady_password'
    },
    {
      'id': 4,
      'username': 'joyce',
      'email': 'george@mail.com',
      'password': 'joyce_password'
    },
  ];


  constructor() { }

  getUserById(id) {
    return `user with the given ${id}`;
  }

  getUserByUsername(username) {
    return _.find(this.users, (user) => {
      return user.username === username;
    });
  }
}
