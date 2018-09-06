import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersDataService } from '../../services/auth/users-data.service';
import { User } from '../../../assets/models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private usersDataService: UsersDataService
  ) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.user = this.usersDataService.getUserByUsername(form.value['username']);
    if (this.user) {
      if (this.user.password === form.value['password']) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/']);
      } else {
        console.log('wrong username or password');
      }
    } else {
      console.log('wrong username');
    }
  }
}
