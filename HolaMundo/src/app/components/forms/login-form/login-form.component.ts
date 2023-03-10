import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {

    this.AuthService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) => {
        // response es una petición http, por lo que tiene un atributo
        console.log(response);
        if (response.token) sessionStorage.setItem('token', response.token);
      },
      (error) => console.error('Ha ocurrido un error en el login: ', error),
      () => console.log('Petición completada')
    );
  }

}
