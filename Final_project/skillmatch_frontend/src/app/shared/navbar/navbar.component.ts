import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
    window.location.href = '/auth/login';
  }

}
