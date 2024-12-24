import { inject, Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { environment } from 'src/environments/environment';
import { Message } from '../models/message.model';
import { fromEvent, map, Observable, of, startWith } from 'rxjs';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class RealTimeService {
  private readonly _storageService = inject(StorageService)
  socket = io(environment.socket.url);
  readonly newMessage$ = fromEvent(this.socket, 'message');
  readonly messages$: Observable<Message[]> = this.newMessage$.pipe(
    map(newMessage => {
      const updatedMessages = [...this._messagesFromStorage, newMessage];
      this._messagesFromStorage = updatedMessages
      return updatedMessages;
    }),
    startWith(this._messagesFromStorage)
  )

  constructor() { }

  sendMessage(message: Message) {
    this.socket.emit("message", message)
  }

  exit(){
    this._messagesFromStorage = [];
  }

  get messages() { return this._messagesFromStorage }
  private get _messagesFromStorage() { return this._storageService.getItemOnStorage('messages', []) }
  private set _messagesFromStorage(data: Message[] | []) { this._storageService.setItemOnStorage(data, 'messages', []) }

}
