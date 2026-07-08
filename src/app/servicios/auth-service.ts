import { inject, Injectable } from '@angular/core';
import { User, UserService } from './user-service';

export interface Sesion {
  username: string,
  email: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userService = inject(UserService)

  private crearSesion(data: User): void {
    let sesion: Sesion = {
      username: data.username,
      email: data.email
    }
    localStorage.setItem('sesion', JSON.stringify(sesion))
  }

  public cargarSesion(): Sesion | null {
    let data = localStorage.getItem('sesion')
    return data ? JSON.parse(data) : null
  }

  public login(email: string, password: string): void {
    let usuarioEncontrado = this.userService.getByEmailAndPassword(email, password)
    if (!usuarioEncontrado) return
    this.crearSesion(usuarioEncontrado)
  }

  public register(username: string, email: string, password: string): void {
    let newUser: User = this.userService.crearUser(username, email, password)
    if (this.userService.existsByEmail(email)) return
    this.userService.addUser(newUser)
    this.crearSesion(newUser)
  }

  public logout(): void {
    localStorage.removeItem('sesion')
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('sesion') ? true : false
  }
}
