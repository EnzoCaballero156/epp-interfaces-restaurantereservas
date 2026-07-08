import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servicios/auth-service';
import { UserService } from '../servicios/user-service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService)
  const userService = inject(UserService)
  const router = inject(Router)

  let sesion = authService.cargarSesion()
  if (!sesion) return false

  let usuarioData = userService.getByEmail(sesion.email)!
  if (usuarioData.email !== 'admin@admin.xyz' && usuarioData.password !== 'admin') {
    router.navigate(['/menu'])
    return false
  }
  return true
};
