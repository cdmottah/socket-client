import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Message, MessageType } from 'src/app/models/message.model';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';

@Component({
  selector: 'chat-message',
  standalone: true,
  imports: [CommonModule,DateAgoPipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {

  readonly messageType = MessageType
  @Input({ required: true }) message!: Message
}
