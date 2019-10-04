import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../socket-io.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private socketIoService: SocketIoService) { }

  ngOnInit() {
  }

  startProcess() {
    this.socketIoService.startProcess();
  }

  addProcess() {
    this.socketIoService.addProcess(1);
  }

}
