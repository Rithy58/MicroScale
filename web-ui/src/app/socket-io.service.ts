import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private socket: any;
  private url: string;
  private uid: number;

  constructor() { }

  public setUrl(url: string) {
    this.url = url;
  }

  public connect() {
    this.socket = io(this.url);
    this.uid = 123;
  }

  public startProcess() {
    this.socket.emit('startProcess', this.uid);
  }

  public addProcess(pid: number) {
    this.socket.emit('addProcess', this.uid, pid);
  }

}
