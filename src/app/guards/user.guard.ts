import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';


export const userGuard: CanActivateFn = (route, state) => {

  const userService = inject(UsersService);
  const router = inject(Router);

  const user = userService.selectedUser$.getValue()
  if (user) {
    return true;
  } else {
    router.navigate(['/auth']);
    return false;
  }



};
