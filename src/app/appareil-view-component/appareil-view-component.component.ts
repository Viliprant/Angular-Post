import { DeviceService } from './../services/device-service.service';
import { Component, OnInit } from '@angular/core';
import { DeviceData } from 'src/app/models/DeviceData';

@Component({
  selector: 'app-appareil-view-component',
  templateUrl: './appareil-view-component.component.html',
  styleUrls: ['./appareil-view-component.component.scss']
})
export class AppareilViewComponentComponent implements OnInit {

  devicesList: DeviceData[] = []; 
  constructor(private _deviceService: DeviceService) { }

  ngOnInit(): void {
    this._deviceService.getDevices()
      .subscribe(devicesList => this.devicesList = devicesList);
  }

  turnOffAll(): void{
    const isSure : boolean = window.confirm('Etes-vous sûr de vouloir tout éteindre ?');
    if(isSure){
      this._deviceService.turnOffAll();
    }
  }
  turnOnAll(): void{
    this._deviceService.turnOnAll();
  }
}
