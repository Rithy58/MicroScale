import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../socket-io.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url: string;

  constructor(private socketIoService: SocketIoService) { }

  ngOnInit() {
  }

  connect() {
    this.socketIoService.setUrl(this.url);
    this.socketIoService.connect();
  }

}
