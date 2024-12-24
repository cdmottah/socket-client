import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message, MessageType } from 'src/app/models/message.model';
import { RealTimeService } from 'src/app/services/real-time.service';
import { UsersService } from 'src/app/services/users.service';
import { MessageComponent } from '../message/message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,MessageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly _realTimeService = inject(RealTimeService)
  private readonly _usersService = inject(UsersService)
  private readonly _router = inject(Router)
  readonly user$ = this._usersService.selectedUser$
  readonly messages$ = this._realTimeService.messages$
  messageInput = ''

  sendMessage(event: Event) {
    event.preventDefault();
    if (this.messageInput.trim() == '') {
      return
    }
    const message: Message = {
      type: MessageType.Text,
      content: { text: this.messageInput },
      from: this._usersService.selectedUser || 'anónimo',
    }
    this._realTimeService.sendMessage(message);
    this.messageInput = '';
  }

  exitChat(){
    this._realTimeService.exit()
    this._usersService.exit();
    this._router.navigate(['login'])
  }
}
