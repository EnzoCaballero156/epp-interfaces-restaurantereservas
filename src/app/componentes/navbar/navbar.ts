import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/auth-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  @Input() titulo: string = '';
  @Input() ruta: string = '';

  private authService = inject(AuthService)
  private router = inject(Router)

  public cerrarSesion(): void {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}