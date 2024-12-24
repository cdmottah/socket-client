import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { GetOneUserResponseSuccess } from 'src/app/models/api/getOnseUser.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [UsersService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _usersService = inject(UsersService);
  private readonly _router = inject(Router);
  readonly name = ''

  async onSubmit(event: Event) {
    event.preventDefault();
    try {
      const response = await firstValueFrom(this._usersService.getOne(this.name));
      if (response.hasOwnProperty('name')) {
        const successResponse = response as GetOneUserResponseSuccess;
        this._usersService.selectedUser$.next(successResponse.name);

        this._router.navigate(['home']);
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error('Error al obtener usuario:', error);
    }
  }


}
