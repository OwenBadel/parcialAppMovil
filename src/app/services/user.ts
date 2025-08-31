import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Cambia esto según cómo guardes el login (ejemplo: localStorage, variable, etc.)
  isLoggedIn(): boolean {
    // Ejemplo simple: revisa si hay un token en localStorage
    return !!localStorage.getItem('token');
  }
}
