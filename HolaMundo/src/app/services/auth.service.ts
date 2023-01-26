import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {


    let user = {
      email: email,
      password: password
    }

    // Devolvemos la respuesta del observable cuando la petición http se complete, el componenten suscrito accederá al token de login
    return this.http.post ('https://reqres.in/api/login', user);
  }
}
