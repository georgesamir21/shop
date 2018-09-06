import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../assets/models/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.router.navigate(['/login']);
    }
  }

}
