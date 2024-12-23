import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RealTimeService {

  socket = io(environment.socket.url);

  constructor() { }
}
