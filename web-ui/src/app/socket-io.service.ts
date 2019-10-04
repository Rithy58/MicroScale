import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private socket;
  private url: string;

  constructor() { }

  public setUrl(url: string) {
    this.url = url;
  }

  public connect() {
    this.socket = io(this.url);
  }

}
