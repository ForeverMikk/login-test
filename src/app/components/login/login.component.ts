import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  url = 'http://ec2-54-187-122-255.us-west-2.compute.amazonaws.com/';
  loginUrl = this.url + 'api/login2';
  logoutUrl = this.url + 'api/logout';

  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  constructor() {}

  ngOnInit(): void {
    console.log('Componente header ya creado');
  }

  async login() {
    event?.preventDefault();

    try {
      const res = await axios.post(this.loginUrl, {
        email: 'rseccional@example.com',
        password: 'password',
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
